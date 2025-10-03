import "@/app/style/loansection.css";
const LoanSection = () => {
  return (
    <>
      <section className="hero1">
        <div className="container">
            <div className="row gy-5  gap-2 gy-lg-0 align-items-center justify-content-between">
             <div className="col-12 col-md-8 col-lg-5 mx-auto mx-lg-0 order-1 order-lg-0">
              <div className="hero-img">
                <div className="hero__thumb">
                  <img src="/images/choose_us.png" alt="image" />
               
              </div>
            </div>
            </div>

            <div className="col-12 col-lg-7 col-xxl-6">
              <div className="section-content mb-4">
                <span className="hero-title1">
                  <img
                    src="/images/title_vector.webp"
                    width="30px"
                    height="30px"
                    alt="image"
                  />
                 Why Choose Us
                </span>
              </div>
              <h1 className="hero-title">
                Experience Excellence in Loan Review and Comparison
              </h1>

              <p className="hero-description">
                Welcome to Finview, your trusted resource for financial loan
                reviews and comparisons. Our dedicated team of experts analyzes
                various loan
              </p>
              <ul>

              </ul>

              <div className="hero-buttons">
                <button className="btn-primary-custom">
                  Read More
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

export default LoanSection;
