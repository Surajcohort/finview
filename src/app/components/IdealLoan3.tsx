"use client";
import "@/app/style/IdealLoan3.css";
import { Check2 } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { use } from "react";


const IdealLoan = () => {
    const stats = [
        { percentage: 80, label: 'Total Services Loan' },
        { percentage: 65, label: 'Customer Satisfaction' },
        { percentage: 72, label: 'Compare Loan' }
    ];

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    return (
        <>
            <section className="hero1">
                <div
                    className="container"
                    style={{ paddingTop: "120px", paddingBottom: "120px" }}
                >

                    <div className="row  align-items-center justify-content-between">


                        <div className="col-12 col-lg-6 col-xxl-5">

                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/images/illustration-1.webp" width={550}
                                    height={495} alt="image" />
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Title Section */}
                            <div className="section-content mb-4 d-flex align-items-center gap-2">
                                <img
                                    src="/images/title_vector.webp"
                                    width="30"
                                    height="30"
                                    alt="icon"
                                />
                                <span className="text-success fw-semibold fs-5">About Us</span>
                            </div>

                            {/* Heading */}
                            <h1 className="fw-bold mb-4 text-dark">
                                Your Reliable and Trusted Pathway <br /> to the Ideal Loan
                            </h1>

                            {/* Description */}
                            <p className="text-secondary mb-4 fs-6">
                                We provide clear, step-by-step assistance tailored to your unique financial needs, ensuring that you find the perfect loan with confidence.
                            </p>

                            <div className="container stats-container">
                                <div className="row g-4">
                                    {stats.map((stat, index) => {
                                        const strokeDashoffset =
                                            circumference - (stat.percentage / 100) * circumference;

                                        return (
                                            <div key={index} className="col-12 col-md-4 text-center stat-card">
                                                <div className="position-relative d-inline-block">
                                                    <svg width="130" height="60" className="stat-circle">
                                                        {/* Background half circle */}
                                                        <path
                                                            d="M 15 60 A 45 45 0 0 1 105 60"
                                                            fill="none"
                                                            stroke="#e0e0e0"
                                                            strokeWidth="8"
                                                        />

                                                        {/* Progress half circle */}
                                                        <path
                                                            d="M 15 60 A 45 45 0 0 1 105 60"
                                                            fill="none"
                                                            stroke="#2d5f52"
                                                            strokeWidth="8"
                                                            strokeLinecap="round"
                                                            strokeDasharray={circumference / 2}
                                                            strokeDashoffset={(circumference / 2) * (1 - stat.percentage / 100)}
                                                            className="stat-progress"
                                                        />
                                                    </svg>

                                                    <div className="stat-percentage">{stat.percentage}%</div>
                                                </div>
                                                <p className="stat-label mt-2">{stat.label}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="btn-cta">
                                <a
                                    href="/wp/finview/service/"
                                    className="btn_theme mt_30 text-decoration-none"
                                >
                                    Read More <i className="bi bi-arrow-up-right text-decoration-none"></i>

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IdealLoan;
