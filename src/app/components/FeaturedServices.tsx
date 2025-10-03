const FeaturedServices = () => {
  return (
    <section className="feature feature--secondary section">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-center justify-content-between">
          <div className="col-12 col-lg-5 col-xxl-5 ">
            <div className="section__content">
              <span className="sub-title section__content-sub-title headingFour ">
                <img
                  decoding="async"
                  src="https://pixelaxis.net/finview/wp-content/themes/finview/assets/images/title_vector.png"
                  alt="Image"
                />
                Tailored Reviews for Your Financial Needs
              </span>
              <p className="xlr pp section__content-text">
                Our dedicated team of experts conducts thorough research and
                analysis to provide you with comprehensive and unbiased reviews
                of various loan options.
              </p>
              <div className="btn-cta">
                <a
                  href="/wp/finview/service/"
                  className="btn_theme btn_alt mt_40"
                >
                  See All Services<i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-5">
            <div className="fadeInUp feature__content flex-column gap-4 ms-lg-4 ms-xxl-0">
              <div className="card card--custom cus_card gap-0">
                <div className="card__icon cus_icon me-3 me-xl-4">
                  <img
                    decoding="async"
                    src="https://pixelaxis.net/finview/wp-content/uploads/2024/03/Loan-Application-Tracking.svg"
                    alt="image"
                  />
                </div>
                <div className="card__content cus_cont">
                  <div className="card__content-text">
                    <h4 className="card__title">
                      <a
                        href="https://pixelaxis.net/finview/services/loan-application-tracking/"
                        className="cus_title_link"
                      >
                        Loan Application Tracking{" "}
                      </a>
                    </h4>
                    <p className="fs-small">
                      Provide comprehensive and unbiased reviews of various
                      types of loans,...{" "}
                    </p>
                  </div>
                  <a
                    href="https://pixelaxis.net/finview/services/loan-application-tracking/"
                    className="cus_icon cus_icon_2 d-flex align-items-center justify-content-center rounded-circle mt_20 mt-lg-4 mx-auto"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <div className="cus_card card card--custom gap-0">
                <div className="card__icon cus_icon me-3 me-xl-4">
                  <img
                    decoding="async"
                    src="https://pixelaxis.net/finview/wp-content/uploads/2024/03/Loan-Alerts-and-Updates.svg"
                    alt="image"
                  />
                </div>
                <div className="card__content cus_cont">
                  <div className="card__content-text">
                    <h4 className="card__title">
                      <a
                        href="https://pixelaxis.net/finview/services/loan-alerts-and-updates/"
                        className="cus_title_link"
                      >
                        Loan Alerts and Updates{" "}
                      </a>
                    </h4>
                    <p className="fs-small">
                      Loan Comparison Provide a brief overview of the loan
                      comparison...{" "}
                    </p>
                  </div>
                  <a
                    href="https://pixelaxis.net/finview/services/loan-alerts-and-updates/"
                    className="cus_icon cus_icon_2 d-flex align-items-center justify-content-center rounded-circle mt_20 mt-lg-4 mx-auto"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <div className="cus_card card card--custom gap-0">
                <div className="card__icon cus_icon me-3 me-xl-4">
                  <img
                    decoding="async"
                    src="https://pixelaxis.net/finview/wp-content/uploads/2024/03/Group-2.svg"
                    alt="image"
                  />
                </div>
                <div className="card__content cus_cont">
                  <div className="card__content-text">
                    <h4 className="card__title">
                      <a
                        href="https://pixelaxis.net/finview/services/loan-documentation-support/"
                        className="cus_title_link"
                      >
                        Loan Documentation Support{" "}
                      </a>
                    </h4>
                    <p className="fs-small">
                      Provide comprehensive and unbiased reviews of various
                      types of loans,...{" "}
                    </p>
                  </div>
                  <a
                    href="https://pixelaxis.net/finview/services/loan-documentation-support/"
                    className="cus_icon cus_icon_2 d-flex align-items-center justify-content-center rounded-circle mt_20 mt-lg-4 mx-auto"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
