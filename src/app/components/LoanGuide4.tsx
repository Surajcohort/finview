// components/LoanGuide.js
import "@/app/style/LoanGuide.css";
import Image from "next/image";

const LoanGuide = () => {
  return (
    <section className="loan-container">
      <div className="loan-left">
        <img
          decoding="async"
          src="https://softivuslab.com/wp/finview/wp-content/uploads/2025/02/Group-1597880427-1.webp"
          alt="Image"
          className="unset"
        />
      </div>

      <div className="loan-right">
        <span className="loan-subtitle">About Us</span>
        <h2 className="loan-title">
          Your Trusted Guide to Finding the Perfect Loan
        </h2>
        <p className="loan-description">
          We provide clear, step-by-step assistance tailored to your unique
          financial needs, ensuring that you find the perfect loan with
          confidence.
        </p>

        <div className="loan-tabs">
          <button className="loan-tab active">Mission</button>
          <button className="loan-tab">Vision</button>
          <button className="loan-tab">Value</button>
          <button className="loan-tab">Success</button>
        </div>

        <div className="loan-video-section">
          <div className="loan-video-thumbnail">
            <img
              decoding="async"
              src="https://softivuslab.com/wp/finview/wp-content/uploads/2025/02/mission.jpg"
              alt="Image"
            />
            <button className="loan-play-button">▶</button>
          </div>
          <ul className="loan-bullets">
            <li>✅ Comprehensive and Reviews</li>
            <li>✅ User-Friendly Comparison</li>
            <li>✅ Expert Guidance and Insights</li>
            <li>✅ Trusted User Reviews</li>
          </ul>
        </div>

        <div className="loan-actions">
          <button className="loan-read-more">Read More</button>
          <div className="loan-support">
            <span role="img" aria-label="support">
              📞
            </span>
            <div>
              <p>Support us</p>
              <strong>(704) 555-0127</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanGuide;
