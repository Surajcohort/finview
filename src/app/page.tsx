import FeaturedServices from "./components/FeaturedServices";
import HeroSection2 from "./components/hero-section2";
import HowItWorks from "./components/HowItWorks";
import LoanReview from "./components/LoanReview";
import SponsorSlider from "./components/SponserSlider";
import WhyChose from "./components/why-chose";

export default function Home() {
  return (
   <>
   <HeroSection2 />
   <SponsorSlider />
   <WhyChose />
   <FeaturedServices />
   <LoanReview />
   <HowItWorks />
   </>
  );
}
