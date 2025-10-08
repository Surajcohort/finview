
'use client';

import React, { useState, useEffect } from 'react';

import "@/app/style/FAQ3.css";

interface FAQItem {
    id: number;
    category: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    { id: 1, category: "Loan Application Process", question: "Can I Negotiate My Interest Rate?", answer: "Yes, interest rates may be negotiable depending on your profile and bank policies." },
    { id: 5, category: "Loan Application Process", question: "Can I Negotiate My Interest Rate?", answer: "Yes, interest rates may be negotiable depending on your profile and bank policies." },
    { id: 6, category: "Loan Application Process", question: "Can I Negotiate My Interest Rate?", answer: "Yes, interest rates may be negotiable depending on your profile and bank policies." },
    { id: 7, category: "Loan Application Process", question: "Can I Negotiate My Interest Rate?", answer: "Yes, interest rates may be negotiable depending on your profile and bank policies." },
    { id: 8, category: "Loan Application Process", question: "Can I Negotiate My Interest Rate?", answer: "Yes, interest rates may be negotiable depending on your profile and bank policies." },
   
    { id: 2, category: "Loan Eligibility", question: "What Documents Are Required for a Loan Application?", answer: "You need ID proof, address proof, income proof, and other loan-specific documents." },
    { id: 3, category: "Repayment and Terms", question: "How Long Does the Loan Approval Process Take?", answer: "Loan approval usually takes 3-5 business days after submitting all required documents." },
    { id: 4, category: "Interest Rates and Fees", question: "What Are the Interest Rates for Different Loan Types?", answer: "Rates vary based on loan type, amount, and credit profile." },
];

const categories = [
    "Loan Application Process",
    "Loan Eligibility",
    "Repayment and Terms",
    "Interest Rates and Fees",
];

const FAQ: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

    const toggleAccordion = (id: number) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    useEffect(() => {
        setOpenAccordion(null);
    }, [activeCategory]);

    return (
        <div className="faq-container container">

            <div
                className="container"

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
                            <span className="text-success fw-semibold fs-5">Frequently Asked Questions</span>
                        </div>

                        {/* Heading */}
                        <h1 className="fw-bold mb-4 text-dark">
                            Get Answers to Your Most Common Questions
                        </h1>




                    </div>

                    <div className="col-12 col-lg-6 col-xxl-5">

                        <div className="d-flex align-items-center justify-content-center">
                            <p className="text-secondary mb-4 fs-6">
                                We've compiled a list of frequently asked questions to provide you with quick and helpful answers.
                            </p>

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
                </div>
            </div>

            <div className="row mt-5">
                {/* Left Categories */}
                <div className="col-12 col-md-4 mb-4">
                    <div className="d-flex flex-column gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`faq-category-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Accordion */}
                <div className="col-12 col-md-8">
                    {filteredFaqs.map(faq => {
                        const isOpen = openAccordion === faq.id;

                        return (
                            <div
                                className={`faq-accordion-item mb-3 border rounded ${isOpen ? '' : 'bg-light'
                                    }`}
                                key={faq.id}
                            >
                                <div
                                    className="faq-accordion-header d-flex justify-content-between align-items-center p-3 cursor-pointer"
                                    onClick={() => toggleAccordion(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <div
                                        className={`faq-plus-btn fs-4 px-3 py-1 rounded-circle ${isOpen ? 'bg-warning text-dark' : 'bg-secondary text-white'
                                            }`}
                                        style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
                                    >
                                        {isOpen ? '-' : '+'}
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="faq-accordion-body p-3 border-top">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default FAQ;

