"use client";

import React from "react";
import { ArrowRight, Users, BookOpen } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "4px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0d5858"
                strokeWidth="3"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0d5858"
                strokeWidth="3"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
            <span
              style={{
                color: "#0d5858",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              color: "#0d3d4d",
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "25px",
            }}
          >
            Your Trusted Guide to
            <br />
            Finding the Perfect Loan
          </h1>

          {/* Description */}
          <p
            style={{
              color: "#5a6c7d",
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "50px",
              maxWidth: "540px",
            }}
          >
            We provide clear, step-by-step assistance tailored to your unique
            financial needs, ensuring that you find the perfect loan with
            confidence.
          </p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              marginBottom: "50px",
            }}
          >
            {/* Feature 1 */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "2px solid #0d5858",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "white",
                }}
              >
                <Users size={32} color="#0d5858" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  style={{
                    color: "#0d3d4d",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Loan Reviews Comparison
                </h3>
                <p
                  style={{
                    color: "#5a6c7d",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    maxWidth: "400px",
                  }}
                >
                  Provide comprehensive and unbiased reviews of various types of
                  Develop interactive tools.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "2px solid #0d5858",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "white",
                }}
              >
                <BookOpen size={32} color="#0d5858" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  style={{
                    color: "#0d3d4d",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Educational Resources
                </h3>
                <p
                  style={{
                    color: "#5a6c7d",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    maxWidth: "400px",
                  }}
                >
                  Provide informative articles, guides, and resources to educate
                  users.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            style={{
              background: "#0d5858",
              color: "white",
              padding: "16px 36px",
              borderRadius: "50px",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(13, 88, 88, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0a4545";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(13, 88, 88, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0d5858";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(13, 88, 88, 0.3)";
            }}
          >
            Read More
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://softivuslab.com/wp/finview/wp-content/uploads/2025/02/Image-99.webp"
            alt="Professional working on laptop"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              objectFit: "contain",
            }}
          />

          {/* Decorative Elements */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "80px",
              height: "80px",
            }}
          >
            <svg viewBox="0 0 100 100" fill="none">
              <rect
                x="10"
                y="10"
                width="30"
                height="60"
                fill="#fbbf24"
                opacity="0.3"
              />
              <rect
                x="50"
                y="30"
                width="30"
                height="40"
                fill="#0d5858"
                opacity="0.3"
              />
            </svg>
          </div>

          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "-20px",
            }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path
                d="M10 60 L60 10 L110 60"
                stroke="#ef4444"
                strokeWidth="6"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          h1 {
            font-size: 36px !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
