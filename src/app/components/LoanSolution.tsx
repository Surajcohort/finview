import '@/style/LoanSolution.css';

const LoanSolution = () => {
  return (
    <section className="loan-solution section">
      <div className="container position-relative">
        <div className="row gy-5 gy-xl-0 justify-content-center justify-content-xxl-between align-items-center">
          <div className="col-12 col-lg-6 col-xxl-6">
            <div className="section__content ms-xl-4 ms-xl-0">
              <span className="sub-title section__content-sub-title headingFour">
                <img
                  decoding="async"
                  src="https://pixelaxis.net/finview/wp-content/themes/finview/assets/images/title_vector.png"
                  alt="Image"
                />
                Start Your Loan Search Today
              </span>
              <h2 className="title section__content-title">
                Find the Perfect Loan Solution for Your Financial Needs
              </h2>
              <div className="btn-cta">
                <a href="/wp/finview/contact/" className="btn_theme mt-3">
                  Contact Us<i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-xxl-5">
            <div className="loan-solution__thumb unset-xxl">
              <img
                decoding="async"
                src="https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/loan_solution.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSolution;
