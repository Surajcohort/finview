import "@/app/style/loansection.css";
const LoanSection = () => {
  return (
    <>
      <section className="hero1">
        <div className="container">
            <div className="row mt-4 gy-5  gap-2 gy-lg-0 align-items-center justify-content-between">
             <div className="col-12 col-md-8 col-lg-5 mx-auto mx-lg-0 order-1 order-lg-0">
              <div className="hero-img">
                <div className="arrow-image">
                  <img src="/images/hero_vector_arrow.webp" alt="Image"/>
                </div>
                <div className="hero__thumb">
                  <img  className="choose-img" src="/images/choose_us.png" alt="image" />
               
              </div>
              <div className="Elelement-image">
                <img src="/images/Elelement.webp" alt="image"/>
              </div>
            </div>
            </div>

            <div className="why-choose-us col-12 mt-5 col-lg-7 col-xxl-6">
              <div className="section-content mb-4">
                <div className="choose_vector">
                  <img src="/images/choose_vector.webp" alt="Image"/>
                </div>

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
              <ul className="list">
                 <li className="headingFive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>{" "}
                  Comprehensive and Reviews
                </li>
                 <li className="headingFive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>{" "}
                  Comprehensive and Reviews
                </li>
                 <li className="headingFive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>{" "}
                  Comprehensive and Reviews
                </li>
                 <li className="headingFive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                  </svg>{" "}
                  Comprehensive and Reviews
                </li>

              </ul>

              <div className="hero-buttons">
                <button className="btn-primary-custom">
                  Read More
                  <div className="arrow"></div>
                </button>
              </div>

              <div className="elements">
                  <img src="/images/Elements.webp" alt="Image"/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanSection;
