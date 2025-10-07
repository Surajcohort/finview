import React from "react";
import "@/app/style/LoanProcess.css"; // import the external css

const LoanProcess = () => {
  return (
    <section className="loan-section">
      <div className="loan-container11">
        <p className="loan-subHeading">⚡ Our Working Process</p>
        <h2 className="loan-heading">
          Simplified Steps to Find Your Ideal Loan
        </h2>
        <p className="loan-description">
          The goal is to provide a clear and concise overview of how your
          platform works and guide users through the loan application journey.
        </p>

        <div className="loan-grid">
          {/* Left Steps */}
          <div className="loan-steps left">
            <div className="loan-step">
              <div className="loan-icon">🔍</div>
              <div>
                <h3>Submit Your Request</h3>
                <p>
                  Begin by filling out our simple loan request form. Provide us
                  with some basic information to get started.
                </p>
              </div>
            </div>

            <div className="loan-step">
              <div className="loan-icon">📄</div>
              <div>
                <h3>Product Packaging</h3>
                <p>
                  Product packaging refers to the materials and design used to
                  protect and present the loan options effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="loan-centerImage">
            <img
              decoding="async"
              src="https://softivuslab.com/wp/finview/wp-content/uploads/2025/02/Image-100.webp"
              alt="Image"
              className=""
            />
          </div>

          {/* Right Steps */}
          <div className="loan-steps right">
            <div className="loan-step">
              <div className="loan-icon">📥</div>
              <div>
                <h3>Pick a Product</h3>
                <p>
                  Picking a product refers to the process of selecting a
                  specific loan option from a range of available choices.
                </p>
              </div>
            </div>

            <div className="loan-step">
              <div className="loan-icon">✅</div>
              <div>
                <h3>Complete Application</h3>
                <p>
                  Follow the lender’s instructions to complete the loan
                  application. You may need to upload additional documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanProcess;
