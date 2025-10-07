"use client";

import Image from "next/image";
 import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "@/app/style/LoanStyle3.css";

export default function LoanSection() {
  const loans = [
    { title: "Business Loan", img: "/icons/Loan-3.svg" },
    { title: "Home Equity Loan", img: "/icons/Loan-1.svg" },
    { title: "Construction Loan", img: "/icons/Group-1.svg" },
    { title: "Medical Loan", img: "/icons/Medical-Loan.svg" },
    { title: "Mortgage Loan", img: "/icons/mortgageloan.png" },
    { title: "Personal Loan", img: "/icons/Loan-2.svg" },
    { title: "Renovation Loan", img: "/icons/Loan.svg" },
    { title: "Student Loan", img: "/icons/student-Loan.svg" },
  ];

  return (
    <section
      className="pt-5  text-center text-white"
      style={{
        backgroundImage: "url('/icons/lone-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header Section */}
      <div className="container mb-5">
        <div className="row">
         
            <div className="col-3 mb-4">
              <Image
                src="/icons/Elements.png"
                alt="Loan Icon"
                width={200}
                height={200}
               
              />
            </div>
            <div className="col-6 justify-content-center">
            <span className="text-warning fw-bold">
                <img
                    src="/icons/title_vector.webp"
                    width="30px"
                    height="30px"
                    alt="image"
                    className="me-2"
                  />
                Compare, Choose, and Save</span>
            <h1 className="fw-bold display-3">Find the Perfect Loan</h1>
            <p className="text-light mb-4">
              We understand that finding the right loan can be overwhelming.
              That’s why we’re here to help simplify the process of choosing the
              right loan for you.
            </p>
            </div>
         
        </div>
      </div>

      {/* Loan Cards Section */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
            >
              <div className="loan-card card shadow-sm w-100 text-center p-4 border-0">
                <Image
                  src={loan.img}
                  alt={loan.title}
                  width={60}    
                  height={60}
                  className="mb-3 d-block mx-auto transition"
                />
                <h4 className="fw-semibold">{loan.title}</h4>
                <a href="#" className="loan-icon">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
