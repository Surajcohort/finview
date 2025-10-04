"use client";
import React, { useState, useEffect } from "react";
import "@/style/clienttestimonial.css";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Balogh Imre",
      position: "Account Executive",
      image:
        "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/author.png",
      review:
        "Our satisfied clients have experienced success with our services and loan recommendations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Kende Attila",
      position: "President of Sales",
      image:
        "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/author3.png",
      review:
        "Our satisfied clients have experienced success with our services and loan recommendations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Eleanor Pena",
      position: "Marketing Director",
      image:
        "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/author2.png",
      review:
        "Our satisfied clients have experienced success with our services and loan recommendations.",
      rating: 5,
    },
    {
      id: 4,
      name: "Balogh Imre",
      position: "Account Executive",
      image:
        "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/author4.png",
      review:
        "Our satisfied clients have experienced success with our services and loan recommendations.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <>
      <section className="testimonials testimonials--secondary section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-xxl-5">
              <div className="section__header">
                <span className="sub-title section__header-sub-title headingFour">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <rect
                      x="12.5"
                      width="8"
                      height="8"
                      rx="4"
                      fill="#074C3E"
                    ></rect>
                    <rect
                      x="24.5"
                      y="12"
                      width="8"
                      height="8"
                      rx="4"
                      fill="#FCB650"
                    ></rect>
                    <rect
                      x="12.5"
                      y="24"
                      width="8"
                      height="8"
                      rx="4"
                      fill="#074C3E"
                    ></rect>
                    <rect
                      x="0.5"
                      y="12"
                      width="8"
                      height="8"
                      rx="4"
                      fill="#FCB650"
                    ></rect>
                  </svg>{" "}
                  Client Testimonials
                </span>
                <h2 className="title section__header-title">
                  Success Stories Shared by Our Customers
                </h2>
                <p className="xlr pp section__header-content">
                  Feel free to customize the text with actual client
                  testimonials, ensuring you have their permission to use their
                  names and occupations
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonials-section">
                <div className="testimonials-container">
                  <div className="testimonials-slider fadeInDown">
                    <div
                      className="slider-track"
                      style={{
                        transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                      }}
                    >
                      {testimonials
                        .concat(testimonials)
                        .map((testimonial, index) => (
                          <div
                            key={`${testimonial.id}-${index}`}
                            className="testimonial-card"
                          >
                            <div className="quote-img">
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                              </svg>
                            </div>

                            <div className="star-review">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                  key={i}
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                              ))}
                            </div>

                            <p className="review-text">{testimonial.review}</p>

                            <div className="author-info">
                              <div className="author-thumb">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                />
                              </div>
                              <div className="author-content">
                                <h5>{testimonial.name}</h5>
                                <p>{testimonial.position}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="slider-controls">
                      <button
                        className="slider-btn"
                        onClick={prevSlide}
                        aria-label="Previous"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                      </button>
                      <button
                        className="slider-btn"
                        onClick={nextSlide}
                        aria-label="Next"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                        </svg>
                      </button>
                    </div>

                    <div className="slider-dots">
                      {testimonials.map((_, index) => (
                        <div
                          key={index}
                          className={`dot ${
                            index === currentIndex ? "active" : ""
                          }`}
                          onClick={() => {
                            if (!isTransitioning) {
                              setIsTransitioning(true);
                              setCurrentIndex(index);
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSlider;
