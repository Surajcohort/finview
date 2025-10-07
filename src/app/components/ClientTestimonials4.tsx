"use client";

import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Kende Attila",
      role: "President of Sales",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "Our satisfied clients have experienced success with our services and loan recommendations. Here are some of their testimonials",
    },
    {
      name: "Eleanor Pena",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      text: "Our satisfied clients have experienced success with our services and loan recommendations. Here are some of their testimonials",
    },
    {
      name: "Balogh Imre",
      role: "Account Executive",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      text: "Our satisfied clients have experienced success with our services and loan recommendations. Here are some of their testimonials",
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0d4d4d 0%, #0a3d3d 50%, #083d3d 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1400px", width: "100%" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#fbbf24", fontSize: "18px" }}>❯❯</span>
            <span
              style={{
                color: "#fbbf24",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.5px",
              }}
            >
              Client Testimonials
            </span>
          </div>
          <h1
            style={{
              color: "white",
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "20px",
            }}
          >
            Success Stories Shared by
            <br />
            Our Customers
          </h1>
          <p
            style={{
              color: "#d1f0f0",
              fontSize: "15px",
              lineHeight: "1.6",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Feel free to customize the text with actual client testimonials,
            ensuring you have their permission to use their
            <br />
            names and occupations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "35px",
                position: "relative",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
                borderTop: "4px solid #fbbf24",
                minHeight: "380px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Stars */}
              <div
                style={{ display: "flex", gap: "4px", marginBottom: "25px" }}
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#fbbf24"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  marginBottom: "30px",
                  flex: 1,
                }}
              >
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "auto",
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#1f2937",
                      fontWeight: "700",
                      fontSize: "18px",
                      marginBottom: "5px",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* Quote Icon */}
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="#e5e7eb"
                  style={{ opacity: 0.4 }}
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Profile Image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  left: "35px",
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "4px solid white",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          h1 {
            font-size: 36px !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }

          p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}
