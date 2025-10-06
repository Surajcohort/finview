import "@/app/style/Herohome4.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">More Options. More You.</h1>
        <p className="hero-subtitle">
          Compare Loans Online <span className="highlight">50% faster</span>
          <br />
        </p>
        <p>
          We understand that finding the right loan can be overwhelming. That's
          why we're here to help simplify the process.
        </p>

        <div className="loan-type-selector">
          <h2>What type of loan do you need?</h2>
          <div className="loan-types">
            <button className="loan-type-button">
              <img
                decoding="async"
                src="https://pixelaxis.net/finview/wp-content/uploads/2025/01/Student-Loan.svg"
                alt="Student Loan"
                className="loan-icon"
              />
              <span>Student Loan</span>
            </button>
            <button className="loan-type-button">
              <img
                decoding="async"
                src="https://pixelaxis.net/finview/wp-content/uploads/2025/01/Loan.svg"
                alt="Renovation Loan"
                className="loan-icon"
              />
              <span>Renovation Loan</span>
            </button>
            <button className="loan-type-button">
              <img
                decoding="async"
                src="https://pixelaxis.net/finview/wp-content/uploads/2025/01/loan-2.svg"
                alt="Personal Loan"
                className="loan-icon"
              />{" "}
              <span>Personal Loan</span>
            </button>
            <button className="loan-type-button">
              <img
                decoding="async"
                src="https://pixelaxis.net/finview/wp-content/uploads/2025/01/mortgageloan.png"
                alt="Mortgage Loan"
                className="loan-icon"
              />
              <span>Mortgage Loan</span>
            </button>
            <button className="loan-type-button">
              <img
                decoding="async"
                src="https://pixelaxis.net/finview/wp-content/uploads/2025/01/Medical-Loan.svg"
                alt="Medical Loan"
                className="loan-icon"
              />
              <span>Medical Loan</span>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-illustration">
        <img src="/images/boy.webp" alt="Boy" />
      </div>
    </section>
  );
};

export default HeroSection;
