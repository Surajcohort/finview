"use client";

import { useState } from "react";
import "@/app/style/LoanStyle.css"; // Make sure this path is correct

export default function LoanCalculator() {
  const [amount, setAmount] = useState(1000);
  const [period, setPeriod] = useState(2);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(parseInt(e.target.value));
  };

  const decreaseAmount = () => {
    if (amount > 100) setAmount(amount - 100);
  };

  const increaseAmount = () => {
    if (amount < 100000) setAmount(amount + 100);
  };

  const decreasePeriod = () => {
    if (period > 1) setPeriod(period - 1);
  };

  const increasePeriod = () => {
    if (period < 20) setPeriod(period + 1);
  };

  const getSliderBackground = (value: number, min: number, max: number) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #0d5450 ${percentage}%, #d1d5db ${percentage}%)`;
  };

  return (
    <div className="container">
      <div className="loanCardContainer">

        {/* Sliders side by side */}
        <div className="sliderRow">
          <div className="sliderContainer">
            <div className="sliderLabelContainer">
              <button onClick={decreaseAmount} className="decreaseButton">
                <svg className="icon" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <h2 className="sliderTitle">Amount: ${amount}</h2>
              <button onClick={increaseAmount} className="increaseButton">
                <svg className="icon" viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
            <input
              type="range"
              min="100"
              max="100000"
              step="100"
              value={amount}
              onChange={handleAmountChange}
              className="slider"
              style={{
                background: getSliderBackground(amount, 100, 100000),
              }}
            />
          </div>

          <div className="sliderContainer">
            <div className="sliderLabelContainer">
              <button onClick={decreasePeriod} className="decreaseButton">
                <svg className="icon" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <h2 className="sliderTitle">Repayment Period {period} Years</h2>
              <button onClick={increasePeriod} className="increaseButton">
                <svg className="icon" viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={period}
              onChange={handlePeriodChange}
              className="slider"
              style={{
                background: getSliderBackground(period, 1, 20),
              }}
            />
          </div>
        </div>

        {/* Loan Cards Section */}
        <div className="loanCardsSection">
          <div className="loanCard">
            <div className="bestInterestTag">THE BEST INTEREST</div>
            <div className="loanCardGrid">
              <div className="bankInfo">
                <img src="https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_reviews_logo2.png" alt="Lendo"/>
                <span className="bankName">PNC</span>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="starIcon" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="reviews">25K+ Reviews</p>
              </div>

              <div className="monthlyPayment">
                <p>From</p>
                <p className="amount">$42.58</p>
                <p>/ Month</p>
                <p className="exampleText">
                  Example: Nominal interest rate 11.39%, effective interest
                  rate 12.71%, NOK 150,000, up to 5 years, cost 49,237. Total
                  199,237
                </p>
              </div>

              <div className="loanDetails">
                <div className="detailItem">
                  <p>Effective Interest</p>
                  <p>1.1% - 5.9%</p>
                </div>
                <div className="detailItem">
                  <p>Repayment Period</p>
                  <p>1 - 19 Years</p>
                </div>
                <div className="detailItem">
                  <p>Total Cost</p>
                  <p>$1022.00</p>
                </div>
              </div>

              <div className="actions">
                <p>· Terms & Conditions Apply</p>
                <button className="applyButton">Apply Now</button>
                <button className="readMoreButton">Read More</button>
              </div>
            </div>
          </div>

          <div className="loanCard">
            <div className="favoriteTag">PEOPLE'S FAVORITE</div>
            <div className="loanCardGrid">
              <div className="bankInfo">
                <img src="https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_reviews_logo6.png" alt="Ya Bank"/>
                <span className="bankName">ICICI Bank</span>
                <div className="stars">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="starIcon" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <svg className="starIcon" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <p className="reviews">25K+ Reviews</p>
              </div>

              <div className="monthlyPayment">
                <p>From</p>
                <p className="amount">$42.75</p>
                <p>/ Month</p>
                <p className="exampleText">
                  Example: Annuity loan NOK 150,000, 5 years, nominal interest
                  rate 7.00%, establishment/term deposit gives an effective
                  interest rate of 7.23%.
                </p>
              </div>

              <div className="loanDetails">
                <div className="detailItem">
                  <p>Effective Interest</p>
                  <p>1.3% - 6.7%</p>
                </div>
                <div className="detailItem">
                  <p>Repayment Period</p>
                  <p>3 - 20 Years</p>
                </div>
                <div className="detailItem">
                  <p>Total Cost</p>
                  <p>$1026.00</p>
                </div>
              </div>

              <div className="actions">
                <p>· Terms & Conditions Apply</p>
                <button className="applyButton">Apply Now</button>
                <button className="readMoreButton">Read More</button>
              </div>
            </div>
          </div>

          <div className="loanCard">
            <div className="bestInterestTag">THE BEST INTEREST</div>
            <div className="loanCardGrid">
              <div className="bankInfo">
                <img src="https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_reviews_logo5.png" alt="Opp Finans"/>
                <span className="bankName">mandiri</span>
                <div className="stars">
                  {[...Array(3)].map((_, i) => (
                    <svg key={i} className="starIcon" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <svg className="starIcon" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <p className="reviews">25K+ Reviews</p>
              </div>

              <div className="monthlyPayment">
                <p>From</p>
                <p className="amount">$44.58</p>
                <p>/ Month</p>
                <p className="exampleText">
                  Example: effective interest 28.79%, NOK 40,000, up to 5
                  years, cost NOK 31,208, total NOK 71,208.
                </p>
              </div>

              <div className="loanDetails">
                <div className="detailItem">
                  <p>Effective Interest</p>
                  <p>3.5%</p>
                </div>
                <div className="detailItem">
                  <p>Repayment Period</p>
                  <p>5 - 30 Years</p>
                </div>
                <div className="detailItem">
                  <p>Total Cost</p>
                  <p>$1070.00</p>
                </div>
              </div>

              <div className="actions">
                <p>· Terms & Conditions Apply</p>
                <button className="applyButton">Apply Now</button>
                <button className="readMoreButton">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
