"use client";

import SponsorSlider from "./SponserSlider";

const sponsors = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
];


const HeroSection2 = () => {
  return (
    <>
      <div className="baner">
        <div className="hero hero--secondary">
          <div className="container">
            <div className="row gy-5 gy-lg-0 align-items-center justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg-7 col-xxl-6">
                <div className="section__content">
                  <span className="section__content-sub-title headingFour">
                    <img
                      decoding="async"
                      src="https://pixelaxis.net/finview/wp-content/themes/finview/assets/images/title_vector.png"
                      alt="Image"
                    />
                    Simplify Your Loan Search and Save Time
                  </span>
                  <h1 className="title section__content-title display-3">
                    Explore Your Loan Options with Ease
                  </h1>
                  <p className="xlr pp section__content-text">
                    We understand that finding the right loan can be
                    overwhelming. That's why we're here to help simplify the
                    process
                  </p>
                  <div className="btn-group mt_40">
                    <a className="btn_theme">
                      Loan Calculator<i className="bi bi-arrow-up-right"></i>
                    </a>
                    <a className="btn_theme btn_alt">
                      About Us<i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9 col-lg-5 col-xxl-5">
                <div className="hero--secondary__thumb wow fadeInUp">
                  <img
                    decoding="async"
                    src="https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/hero_img2.png"
                    alt="Image"
                    className="unset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
