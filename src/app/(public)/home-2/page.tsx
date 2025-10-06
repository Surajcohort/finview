import FeatureSection from "@/app/components/FeatureSection";
import HeroSection from "@/app/components/HeroSection";
import LoanCalculators from "@/app/components/LoanCalculator";
import LoanReview1 from "@/app/components/LoanReview1";
import LoanReview from "@/app/components/LoanReview1";
import LoanSection from "@/app/components/LoanSection";
import WorkingProcess from "@/app/components/WorkingProcess";

const Home2 = () => {
    return ( 
        <>
        <HeroSection/>
        <FeatureSection/>
        <LoanSection/>
        <LoanReview1/>
        <WorkingProcess/>
        <LoanCalculators/>
        </>
     );
}
 
export default Home2;