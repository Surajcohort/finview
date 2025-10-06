import AboutGuideLine from "./components/AboutGuideLine";
import ClientTestimonials from "./components/ClientTestimonials";
import CountDown from "./components/CountDown";
import DownloadApp from "./components/DownloadApp";
import FeaturedServices from "./components/FeaturedServices";
import HeroSection from "./components/hero-section2";
import HowItWorks from "./components/HowItWorks";
import LoanCalculator from "./components/LoanCalculator";
import LoanReview from "./components/LoanReview";
import LoanSolution from "./components/LoanSolution";
import SponsorSlider from "./components/SponserSlider";
import WhyChose from "./components/why-chose";

export default function Home() {
  return (
   <>
   <HeroSection />
   <SponsorSlider />
   <WhyChose />
   <FeaturedServices />
   <LoanReview />
   <HowItWorks />
   <CountDown />
   <AboutGuideLine />
   <LoanCalculator />
   <LoanSolution />
   <ClientTestimonials />
   <DownloadApp />
   </>
  );
}
