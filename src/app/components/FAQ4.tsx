// File: src/app/components/FAQ4.tsx
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function LoanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I apply for a loan through your platform?",
      answer:
        "To apply for a loan through our platform, simply create an account, fill out the online application form with your personal and financial information, and submit the required documents. Our system will then match you with suitable lenders based on your profile.",
    },
    {
      question: "What types of loans do you review and compare?",
      answer:
        "We review and compare a wide range of loan types including personal loans, home loans, car loans, business loans, education loans, and debt consolidation loans. Our platform provides comprehensive comparisons to help you find the best rates and terms for your specific needs.",
    },
    {
      question: "Can I trust the information provided on your website?",
      answer:
        "Yes, absolutely. We source our information directly from verified lenders and financial institutions. Our platform is committed to transparency and accuracy. All loan details, rates, and terms are regularly updated to ensure you have access to the most current and reliable information.",
    },
    {
      question: "Do you offer financial advice or recommendations?",
      answer:
        "While we provide comprehensive loan comparisons and educational resources, we recommend consulting with a licensed financial advisor for personalized financial advice. Our platform is designed to help you make informed decisions by presenting clear, unbiased information about available loan options.",
    },
    {
      question: "How do I apply for a loan through your platform?",
      answer:
        "To apply for a loan through our platform, simply create an account, fill out the online application form with your personal and financial information, and submit the required documents. Our system will then match you with suitable lenders based on your profile.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full">
              <img
                src="https://softivuslab.com/wp/finview/wp-content/uploads/2025/02/Image-98.webp"
                alt="FAQ Illustration"
                className="w-full h-auto max-w-md lg:max-w-full"
              />
            </div>
          </div>

          {/* Right Side - FAQ Section */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-600 font-medium text-sm">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 18l6-6-6-6" />
                  <path d="M15 18l6-6-6-6" />
                </svg>
                <span>Frequently Asked Questions</span>
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Get Answers to Your Most Common Questions
              </h1>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed pt-1">
                We've compiled a list of frequently asked questions to provide
                you with quick and helpful answers. If you have a question that
                is not addressed below...
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 pt-2">
              {faqs.map((faq, index: number) => (
                <div
                  key={index}
                  className="rounded-xl bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-800 font-medium text-sm lg:text-base pr-4 leading-relaxed">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center transition-transform duration-200 bg-teal-500 ${
                          openIndex === index ? "rotate-45" : ""
                        }`}
                      >
                        <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-4">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

