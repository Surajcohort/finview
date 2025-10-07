"use client";
import "@/app/style/Loan3.css";
import { Check2 } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { use } from "react";
const Loan = () => {
  return (
    <>
      <section className="hero1">
        <div
          className="container"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >

          <div className="row  align-items-center justify-content-between">
            <div className="col-12 col-lg-6">
              {/* Title Section */}
              <div className="section-content mb-4 d-flex align-items-center gap-2">
                <img
                  src="/images/title_vector.webp"
                  width="30"
                  height="30"
                  alt="icon"
                />
                <span className="text-success fw-semibold fs-5">Why Choose Us</span>
              </div>

              {/* Heading */}
              <h1 className="fw-bold mb-4 text-dark">
                Discover the Right Loan for Your <br /> Future Success
              </h1>

              {/* Description */}
              <p className="text-secondary mb-4 fs-6">
                Our team of seasoned professionals offers tailored advice to help you
                make informed decisions. We provide detailed comparisons of loan
                options.
              </p>

              {/* Highlight Box */}
              <div
                className="p-3 mb-4"
                style={{
                  backgroundColor: "#fff8f0",
                  border: "1px solid #fcb650",
                  borderRadius: "8px",
                }}
              >
                Our satisfied clients have experienced success with our services and
                loan recommendations. Here are some of their testimonials…
              </div>

              {/* Points Section */}
              <div className="row gy-2 mb-4">
                <div className="col-12 col-sm-6">
                  <p className="mb-2">
                    <Check2 className="text-success me-2" size={25} />
                    Comprehensive and Reviews
                  </p>
                  <p className="mb-2">
                    <Check2 className="text-success me-2" size={25} />
                    User-Friendly Comparison
                  </p>
                </div>

                <div className="col-12 col-sm-6">
                  <p className="mb-2">
                    <Check2 className="text-success me-2" size={25} />
                    Expert Guidance and Insights
                  </p>
                  <p className="mb-2">
                    <Check2 className="text-success me-2" size={25} />
                    Trusted User Reviews
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="btn-cta">
                <a
                  href="/wp/finview/service/"
                  className="btn_theme mt_40 text-decoration-none"
                >
                  Read More <i className="bi bi-arrow-up-right text-decoration-none"></i>

                </a>
              </div>

            </div>

            <div className="col-12 col-lg-6 col-xxl-5">

              <div className="d-flex align-items-center justify-content-center">
                <img src="/images/illustration.webp" width={550}
                  height={495} alt="image" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loan;
