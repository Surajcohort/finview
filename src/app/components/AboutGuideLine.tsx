import "@/style/aboutguideline.css";

const AboutGuideLine = () => {
  return (
    <section className="about-guideline section">
      <div className="container">
        <div className="row gy-5 gy-lg-0 justify-content-between align-items-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__content me-lg-5 me-xxl-0">
              <span className="sub-title section__content-sub-title headingFour">
                <img
                  decoding="async"
                  src="https://pixelaxis.net/finview/wp-content/themes/finview/assets/images/title_vector.png"
                  alt="Image"
                />
                About Us{" "}
              </span>
              <h2 className="title section__content-title">
                Your Trusted Guideline to Finding the Perfect Loan
              </h2>
              <p className="xlr pp section__content-text">
                We are dedicated to providing you with a reliable and
                user-friendly platform for loan reviews and comparison. With a
                mission to simplify the loan selection
              </p>
              <div className="progress-area mt_32">
                <p className="progress-title headingFive">Marketing</p>
                <div className="prog-bar">
                  <div className="prog-percentage" per="85%" style={{ maxWidth: "85%" }}></div>
                </div>
              </div>
              <div className="section__content-inner">
                <div className="row gy-4 gy-md-0">
                  <div className="col-12 col-md-6">
                    <div className="mission">
                      <div className="card card--small">
                        <div className="card--small-content">
                          <h5 className="cart_title card--small-title gap-6">
                            <i className="bi bi-check2-circle"></i>Our Mission
                          </h5>
                          <p className="cart_text card--small-text">
                            To empower individuals and businesses with the
                            knowledge and tools to make informed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mission">
                      <div className="card card--small">
                        <div className="card--small-content">
                          <h5 className="cart_title card--small-title gap-6">
                            <i className="bi bi-check2-circle"></i>Our Vision
                          </h5>
                          <p className="cart_text card--small-text">
                            To empower individuals and businesses with the
                            knowledge and tools to make informed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-group align-items-center">
                <div className="btn-cta">
                  <a href="/wp/finview/about/" className="btn_theme">
                    Read More<i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
                <div className="card card--small">
                  <div className="cus_icon card--small-icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="card--small-content">
                    <p className="cart_text card--small-title">Support us</p>
                    <a
                      href="tel:123-456-7891"
                      className="cart_title card--small-call"
                    >
                      123-456-7891
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-8 col-lg-5 mx-auto mx-lg-0">
            <div className="choose-us__thumb unset-xxl me-xl-4 me-xxl-0">
              <img
                decoding="async"
                src="https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/about_guideline.png"
                alt="Image"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGuideLine;
