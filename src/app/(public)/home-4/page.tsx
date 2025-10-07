import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import HeroSection from "@/app/components/HeroSection4";
import LoanCalculator from "@/app/components/LoanCalculator4";
import LoanGuide from "@/app/components/LoanGuide4";
import LoanProcess from "@/app/components/LoanProcess4";
import WhyChooseUs from "@/app/components/WhyChooseUs4";
import ClientTestimonials from "@/app/components/ClientTestimonials4";
// import LoanFAQ from "@/app/components/FAQ4";

const App = () => {
  return (
    <div>
      <HeroSection />
      <LoanCalculator />
      <LoanGuide />
      <LoanProcess />
      <WhyChooseUs />
      <ClientTestimonials />
      {/* <LoanFAQ /> */}
    </div>
  );
};

export default App;
