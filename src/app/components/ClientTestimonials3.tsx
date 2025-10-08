'use client';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/style/ClientTestimonials3.css";

const ClientTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Balogh Imre",
            position: "Account Executive",
            image: "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/author.png",
            review:
                "Our satisfied clients have experienced success with our services and loan recommendations.",
            rating: 5,
            rightImage: "/images/Image-With-Shape.webp",
        },
        {
            id: 2,
            name: "Kende Attila",
            position: "President of Sales",
            image: "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/author3.png",
            review:
                "They helped us achieve our goals faster. The process was simple and transparent!",
            rating: 5,
            rightImage: "/images/Image-With-Shape.webp",
        },
        {
            id: 3,
            name: "Eleanor Pena",
            position: "Marketing Director",
            image: "https://softivuslab.com/wp/finview/wp-content/uploads/2024/03/author2.png",
            review:
                "Fantastic experience — highly responsive team and great support throughout the process.",
            rating: 5,
            rightImage: "/images/Image-With-Shape.webp",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-7 col-xxl-5">
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

               <div className="row g-4 gy-5 justify-content-center justify-content-lg-between mt-5">

                    {/* Left Side - Text Content */}
                    <div className="col-md-7 mb-4 mb-md-0">
                        
                            <div className="mb-3 text-warning fs-4">
                                {[...Array(current.rating)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill me-1"></i>
                                ))}
                            </div>

                            <p className="fs-5 text-secondary">{current.review}</p>

                            <div className="d-flex align-items-center mt-4">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="rounded-circle me-3"
                                    width="60"
                                    height="60"
                                    style={{ objectFit: "cover" }}
                                />
                                <div>
                                    <h6 className="fw-semibold mb-0">{current.name}</h6>
                                    <small className="text-muted">{current.position}</small>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="d-flex gap-3 mt-4 justify-content-end">
                                <button
                                    className="btn btn-outline-success rounded-circle"
                                    onClick={prevSlide}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <button
                                    className="btn btn-outline-success rounded-circle"
                                    onClick={nextSlide}
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-md-5 text-center justify-content-center">
                        <div className="position-relative">
                            <img
                                src={current.rightImage}
                                alt="Client Group"
                                className="img-fluid "

                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
