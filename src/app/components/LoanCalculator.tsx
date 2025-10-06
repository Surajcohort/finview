import "@/app/style/loancalculator.css";
const LoanCalculators = () => {
  return (
    <>
      <section className=" calculator">
        <div className="container">
          <div className="row mt-4 gy-5  gap-2 gy-lg-0 align-items-center justify-content-between">
            <div className="col-12 col-md-8 col-lg-5 mx-auto mx-lg-0 order-1 order-lg-0">
              <div className="hero-img mx-4 pe-3">
                <div className="hero__thumb">
                  <img
                    className="choose-img"
                    src="/images/loan-Calculator.webp"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="why-choose-us ms-4  ps-4 col-12 mt-5 col-lg-7 col-xxl-6">
              <div className="section-content mb-4">
                <span className="hero-title1">
                  <img
                    src="/images/title_vector.webp"
                    width="30px"
                    height="30px"
                    alt="image"
                  />
                  Loan Calculators
                </span>
              </div>
              <h1 className="hero-title">
                Empower Yourself with Accurate Loan Estimates
              </h1>

              <p className="hero-description">
                Our loan calculators are powerful tools designed to assist you
                in making informed financial decisions. Whether you're planning
                a major purchase, estimating monthly payments
              </p>
              <ul className="list">
                <li className="headingFive">Loan Payment Calculator</li>
                <li className="headingFive">Comprehensive and Reviews</li>
                <li className="headingFive">Comprehensive and Reviews</li>
                <li className="headingFive">Comprehensive and Reviews</li>
              </ul>

              <div className="hero-buttons">
                <button className="btn-primary-custom">
                  Browse Loan Review
                  <div className="arrow"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanCalculators;
