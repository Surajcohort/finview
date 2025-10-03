import FeaturedServices from "./components/FeaturedServices";
import HeroSection from "./components/hero-section2";
import HowItWorks from "./components/HowItWorks";
import LoanReview from "./components/LoanReview";
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
   </>
  );
}
