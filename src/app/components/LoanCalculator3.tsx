"use client";

import { useState } from "react";
import "@/app/style/LoanCalculator3.css"; // Ensure this path is correct

export default function LoanCalculator() {
  const [amount, setAmount] = useState(1000);
  const [period, setPeriod] = useState(2);

  // Slider Handlers
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value));
  const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => setPeriod(parseInt(e.target.value));

  const decreaseAmount = () => amount > 100 && setAmount(amount - 100);
  const increaseAmount = () => amount < 100000 && setAmount(amount + 100);

  const decreasePeriod = () => period > 1 && setPeriod(period - 1);
  const increasePeriod = () => period < 20 && setPeriod(period + 1);

  // Slider background for style
  const getSliderBackground = (value: number, min: number, max: number) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #0d5450 ${percentage}%, #d1d5db ${percentage}%)`;
  };

  // Loan data
  const loans = [
    {
      badge: "SECURITY IN HOUSING",
      bankLogo: "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_reviews_logo2.png",
      bankName: "PNC Bank",
      rating: "★★★★★",
      reviews: "25K+ Reviews",
      priceText: "/ Month",
      description: "Example: Nominal interest rate 11.39%, effective interest rate 12.71%, NOK 150,000, up to 5 years, total 199,237.",
      effectiveInterest: "1.1% - 5.9%",
      interestRate: 0.05,
    },
    {
      badge: "THE BEST INTEREST",
      bankLogo: "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_reviews_logo6.png",
      bankName: "PNC Bank",
      rating: "★★★★★",
      reviews: "25K+ Reviews",
      priceText: "/ Month",
      description: "Example: Nominal interest rate 11.39%, effective interest rate 12.71%, NOK 150,000, up to 5 years, total 199,237.",
      effectiveInterest: "1.1% - 5.9%",
      interestRate: 0.05,
    },
    {
      badge: "PEOPLE'S FAVORITE",
      bankLogo: "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_reviews_logo2.png",
      bankName: "PNC Bank",
      rating: "★★★★★",
      reviews: "25K+ Reviews",
      priceText: "/ Month",
      description: "Example: Nominal interest rate 11.39%, effective interest rate 12.71%, NOK 150,000, up to 5 years, total 199,237.",
      effectiveInterest: "1.1% - 5.9%",
      interestRate: 0.05,
    },
    {
      badge: "SECURITY IN HOUSING",
      bankLogo: "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_reviews_logo2.png",
      bankName: "PNC Bank",
      rating: "★★★★★",
      reviews: "25K+ Reviews",
      priceText: "/ Month",
      description: "Example: Nominal interest rate 11.39%, effective interest rate 12.71%, NOK 150,000, up to 5 years, total 199,237.",
      effectiveInterest: "1.1% - 5.9%",
      interestRate: 0.05,
    }
  ];
  // Calculation functions
  const calculateMonthlyPayment = (interestRate: number) =>
    (amount * (1 + interestRate * period) / period).toFixed(2);

  const calculateTotalCost = (interestRate: number) =>
    (amount * (1 + interestRate * period)).toFixed(2);

  return (
    <section className="bg">
      <div className="container">
        <div className="loanCardContainer">

          {/* Sliders */}
          <div className="sliderRow mb-4">
            {/* Amount Slider */}
            <div className="sliderContainer">
              <div className="sliderLabelContainer">
                <button onClick={decreaseAmount} className="decreaseButton">-</button>
                <h2 className="sliderTitle">Amount: ${amount}</h2>
                <button onClick={increaseAmount} className="increaseButton">+</button>
              </div>
              <input
                type="range"
                min={100}
                max={100000}
                step={100}
                value={amount}
                onChange={handleAmountChange}
                className="slider"
                style={{ background: getSliderBackground(amount, 100, 100000) }}
              />
            </div>

            {/* Period Slider */}
            <div className="sliderContainer">
              <div className="sliderLabelContainer">
                <button onClick={decreasePeriod} className="decreaseButton">-</button>
                <h2 className="sliderTitle">Repayment Period: {period} Years</h2>
                <button onClick={increasePeriod} className="increaseButton">+</button>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={period}
                onChange={handlePeriodChange}
                className="slider"
                style={{ background: getSliderBackground(period, 1, 20) }}
              />
            </div>
          </div>

          {/* Loan Cards */}
          <div className="container">
            {loans.map((loan, index) => (
              <div
                key={index}
                className="card position-relative border-0 shadow-sm rounded-4 p-4 mb-4"
                style={{ overflow: "hidden" }}
              >
                {/* Badge */}
                <div className="bedge">{loan.badge}</div>

                <div className="row align-items-center">
                  {/* Left Section */}
                  <div className="col-md-2 text-center">
                    <div className="p-3">
                      <div className="border rounded-4 d-inline-block p-3">
                        <img src={loan.bankLogo} alt={loan.bankName} width={100} height={60} />
                      </div>
                      <div className="mt-4">
                        <div className="text-warning fs-5">{loan.rating}</div>
                        <p className="text-muted m-0">{loan.reviews}</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section */}
                  <div className="col-md-3">
                    <h2 className="fw-bold text-dark">
                      <span className="fs-5 fw-normal text-muted">From </span>
                      ${calculateMonthlyPayment(loan.interestRate)}{" "}
                      <span className="fs-5 fw-normal text-muted">{loan.priceText}</span>
                    </h2>
                    <p className="text-secondary small mt-2">{loan.description}</p>
                  </div>

                  {/* Rate Section */}
                  <div className="col-md-5" style={{ display: "flex", gap: "8px", padding: "9px 14px", border: "var(--woo-border-3)", borderRadius: "var(--woo-box-radius1)", }} >
                    <div className="border rounded-4 text-center p-3 center-content">
                      <p className="text-muted m-0 small">Effective Interest</p>
                      <h5 className="fw-bold mt-1">{loan.effectiveInterest}</h5>
                    </div>
                    <div className="border rounded-4 text-center p-3 center-content">
                      <p className="text-muted m-0 small">Repayment Period</p>
                      <h5 className="fw-bold mt-1">{period} Years</h5>
                    </div>
                    <div className="border rounded-4 text-center p-3 center-content">
                      <p className="text-muted m-0 small">Total Cost</p>
                      <h5 className="fw-bold mt-1">${calculateTotalCost(loan.interestRate)}</h5>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="col-md-2 text-end position-relative">
                    <div className="mt-5 text-center">
                      <p className="small text-muted">Terms & Conditions Apply</p>
                      <button className="btn btn-success rounded-pill px-4 fw-bold apply-btn">Apply Now</button>
                      <p className="text-success small mt-2 mb-0">Read More</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
