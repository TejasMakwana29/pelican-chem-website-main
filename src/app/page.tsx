import { FormulationFinder } from "@/components/ui/FormulationFinder";
import {
  HeroSection,
  AboutPreview,
  WhyChooseUsSection,
  FeaturedProductsSection,
  IndustriesSection,
  StrengthsSection,
  TrustSection,
  CustomLabelBanner,
  ContactCTA,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <WhyChooseUsSection />
      <FeaturedProductsSection />
      <IndustriesSection />
      <StrengthsSection />
      <TrustSection />
      <CustomLabelBanner />
      <ContactCTA />
      <FormulationFinder />

    </>
  );
}
