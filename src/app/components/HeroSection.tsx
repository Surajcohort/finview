import "@/app/style/herosection.css";
const HeroSection = () => {
  return (
    <>
      <section className="hero1">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-center justify-content-between">
            <div className="col-12 col-lg-6">
              <div className="section-content mb-4">
                <span className="hero-title1">
                  <img
                    src="/images/title_vector.webp"
                    width="30px"
                    height="30px"
                    alt="image"
                  />
                  Compare and Choose the Best Loan
                </span>
              </div>
              <h1 className="hero-title">
                Find the <span className="highlight">Perfect</span> Loan
                <br />
                for Your Needs
              </h1>

              <p className="hero-description">
                Welcome to Finview, your trusted resource for financial loan
                reviews and comparisons. Our dedicated team of experts analyzes
                various loan
              </p>

              <div className="hero-buttons">
                <button className="btn-primary-custom">
                  Loan Calculator
                  <div className="arrow"></div>
                </button>
                <button className="btn-secondary-custom">
                  About Us
                  <div className="arrow"></div>
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-xxl-5">
              <div className="hero-img">
                <div className="hero__thumb">
                  <img src="/images/flower.webp" alt="image" />
                </div>
                <div className="position-absolute hero__thumb_vector">
                  <img src="/images/hero_img_vector.png" alt="image" />
                </div>
                <img src="/images/hero_img.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
