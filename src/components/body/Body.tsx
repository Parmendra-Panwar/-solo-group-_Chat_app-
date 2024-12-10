import EvokeEventPlanners from "./EvokeEventPlanners/EvokeEventPlanners";
import HeroSection from "./HeroSection/HeroSection";
import OurServices from "./Our Services/OurServices";
import RequestCallback from "./RequestCallback/RequestCallback";
import ServicesSection from "./ServicesSection/ServicesSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import WhyChooseUsSection from "./WhyChooseUsSection/WhyChooseUsSection";
import Contectus from "./contectUs/Contectus";

const Body = () => {
  return (
    <div className="header">
      <HeroSection />
      <EvokeEventPlanners />
      <OurServices />
      <Contectus />
      <TestimonialSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <RequestCallback />
    </div>
  );
};

export default Body;
