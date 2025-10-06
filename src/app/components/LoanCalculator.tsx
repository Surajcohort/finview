"use client";

import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import styles from "@/style/LoanCalculator.module.css";

Chart.register(...registerables);

interface LoanData {
  period: number;
  payment: number;
  interest: number;
  balance: number;
}

type RepaymentFrequency =
  | "Monthly"
  | "Quarterly"
  | "Yearly"
  | "Weekly"
  | "Fortnight";
type PaymentType = "In Advance" | "In Arrears";

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [loanTerms, setLoanTerms] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [repaymentFreq, setRepaymentFreq] =
    useState<RepaymentFrequency>("Monthly");
  const [paymentType, setPaymentType] = useState<PaymentType>("In Arrears");
  const [activeTab, setActiveTab] = useState<"chart" | "table" | "video">(
    "chart"
  );
  const [tableData, setTableData] = useState<LoanData[]>([]);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const calculateLoan = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerms;

    // Calculate monthly payment using the standard loan formula
    let payment: number;
    if (monthlyRate === 0) {
      payment = principal / numPayments;
    } else {
      if (paymentType === "In Advance") {
        payment =
          (principal * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -numPayments)) /
          (1 + monthlyRate);
      } else {
        payment =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);
      }
    }

    setMonthlyPayment(payment);

    // Generate amortization schedule
    const schedule: LoanData[] = [];
    let balance = principal;
    let totalInt = 0;

    for (let period = 1; period <= numPayments; period++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = payment - interestPayment;
      balance = Math.max(0, balance - principalPayment);
      totalInt += interestPayment;

      schedule.push({
        period,
        payment: -payment,
        interest: interestPayment,
        balance,
      });
    }

    setTableData(schedule);
    setTotalInterest(totalInt);
  };

  const updateChart = () => {
    if (!chartRef.current || tableData.length === 0) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const labels = tableData.map((d) => d.period.toString());
    const balances = tableData.map((d) => d.balance);
    const interests = tableData.map((d) => d.interest);

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Balance",
            data: balances,
            borderColor: "#b8204c",
            backgroundColor: "rgba(184, 32, 76, 0.1)",
            tension: 0.1,
            fill: true,
          },
          {
            label: "Interest",
            data: interests,
            borderColor: "#88a825",
            backgroundColor: "rgba(136, 168, 37, 0.1)",
            tension: 0.1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanTerms, interestRate, repaymentFreq, paymentType]);

  useEffect(() => {
    if (activeTab === "chart") {
      updateChart();
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [tableData, activeTab]);

  const handlePrint = () => {
    window.print();
  };

  const formatCurrency = (value: number): string => {
    return value.toFixed(2);
  };

  const getYears = (): number => {
    return Math.floor(loanTerms / 12);
  };

  return (
    <div className={styles.mainWrap} id="main-sec">
      <section className={styles.calculatorHeadingSection}>
        <div className={styles.calculatorChildHeading}>
          <h2>
            <center>
              <strong>Feel free to use our Equipment Finance Calculator</strong>
            </center>
          </h2>
        </div>
      </section>

      <section className={styles.loanOptionSection}>
        <div className={styles.customContainer}>
          <div className={styles.loanOptionBlock}>
            <div className={styles.firstRow}>
              <div className={styles.firstRowChild}>
                <label htmlFor="loan_amount" className={styles.loanText}>
                  Loan Amount
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                  <span className={styles.textTooltip}>
                    Please enter your loan amount here.
                  </span>
                </label>
                <div className={styles.loanTextDis}>
                  <span className={styles.extraInfo}>$</span>
                  <input
                    type="number"
                    id="loan_amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    min={1000}
                    max={1000000}
                  />
                </div>
                <input
                  type="range"
                  min={1000}
                  max={1000000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.firstRowChild}>
                <label htmlFor="loan_terms" className={styles.loanText}>
                  No. of Payments
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                  <span className={styles.textTooltip}>
                    Please enter the number of payments.
                  </span>
                </label>
                <div className={styles.loanNumberPayment}>
                  <select
                    id="repayment_freq"
                    value={repaymentFreq}
                    onChange={(e) =>
                      setRepaymentFreq(e.target.value as RepaymentFrequency)
                    }
                    className={styles.paymentOptDrop}
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Yearly">Yearly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Fortnight">Fortnightly</option>
                  </select>
                  <input
                    type="number"
                    id="loan_terms"
                    value={loanTerms}
                    onChange={(e) => setLoanTerms(Number(e.target.value))}
                    min={12}
                    max={84}
                  />
                </div>
                <input
                  type="range"
                  min={12}
                  max={84}
                  value={loanTerms}
                  onChange={(e) => setLoanTerms(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.firstRowChild}>
                <label htmlFor="payment_type" className={styles.loanText}>
                  Payment Mode
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                  <span className={styles.textTooltip}>
                    Please choose payment mode of the loan.
                  </span>
                </label>
                <select
                  id="payment_type"
                  value={paymentType}
                  onChange={(e) =>
                    setPaymentType(e.target.value as PaymentType)
                  }
                  className={styles.paymentOptDrop}
                >
                  <option value="In Advance">In Advance</option>
                  <option value="In Arrears">In Arrears</option>
                </select>
              </div>
            </div>

            <div className={styles.secondRow}>
              <div className={styles.secondRowChild}>
                <label htmlFor="interest_rate" className={styles.loanText}>
                  Interest Rate
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                  <span className={styles.textTooltip}>
                    Enter the annual interest rate.
                  </span>
                </label>
                <div className={styles.loanTextDis}>
                  <input
                    type="number"
                    id="interest_rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step={0.25}
                    min={1.25}
                    max={15}
                  />
                  <span className={styles.rateDisp}>
                    {interestRate.toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1.25}
                  max={15}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  step={0.25}
                  className={styles.slider}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.loanDetailSection}>
          <div className={styles.loanDetailChild}>
            <div className={styles.tabContainer}>
              <div className={styles.tabs}>
                <div className={styles.tabButtons}>
                  <button
                    className={activeTab === "chart" ? styles.active : ""}
                    onClick={() => setActiveTab("chart")}
                  >
                    Chart
                  </button>
                  <button
                    className={activeTab === "table" ? styles.active : ""}
                    onClick={() => setActiveTab("table")}
                  >
                    Table
                  </button>
                  <div className={styles.printButton}>
                    <button onClick={handlePrint}>Print</button>
                  </div>
                </div>

                {activeTab === "chart" && (
                  <div className={styles.tabContent}>
                    <canvas ref={chartRef}></canvas>
                  </div>
                )}

                {activeTab === "table" && (
                  <div className={styles.tabContent}>
                    <table className={styles.loanTable}>
                      <thead>
                        <tr>
                          <th>Period</th>
                          <th>Payment</th>
                          <th>Interest</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row) => (
                          <tr key={row.period}>
                            <td>{row.period}</td>
                            <td>-${formatCurrency(Math.abs(row.payment))}</td>
                            <td>${formatCurrency(row.interest)}</td>
                            <td>${formatCurrency(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.loanDetailChild}>
            <div className={styles.summaryWrapper}>
              <div className={styles.loanCalDesc}>
                <div className={styles.loanCalDescHeading}>
                  <label>Monthly Payment</label>
                </div>
                <div className={styles.loanCalDescVal}>
                  <label>
                    <span>
                      <small>$</small>
                      <span>{formatCurrency(monthlyPayment)}</span>
                    </span>{" "}
                    <strong>Monthly for </strong>
                    <span>{getYears()} Year(s)</span>
                  </label>
                </div>
              </div>

              <div className={styles.loanCalDesc}>
                <div className={styles.loanCalDescHeading}>
                  <label>
                    <strong>Total interest payable</strong>
                  </label>
                </div>
                <div className={styles.loanCalDescVal}>
                  <label>
                    <small>$</small>
                    <span>{formatCurrency(totalInterest)}</span> over{" "}
                    <span>{getYears()} Year(s)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanCalculator;
