import React from 'react';
import Navbar from '../components/spice/Navbar';
import HeroSection from '../components/spice/HeroSection';
import StatsBar from '../components/spice/StatsBar';
import FeatureShowcase from '../components/spice/FeatureShowcase';
import CompartmentSection from '../components/spice/CompartmentSection';
import HowItWorks from '../components/spice/HowItWorks';
import LifestyleSection from '../components/spice/LifestyleSection';
import VariantsSection from '../components/spice/VariantsSection';
import MaterialsSection from '../components/spice/MaterialsSection';
import ComparisonSection from '../components/spice/ComparisonSection';
import PressSection from '../components/spice/PressSection';
import TestimonialsSection from '../components/spice/TestimonialsSection';
import FAQSection from '../components/spice/FAQSection';
import CTASection from '../components/spice/CTASection';
import Footer from '../components/spice/Footer';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/6a01d1fcc222bb18e29d26c1/61a80cfdc_generated_53908823.png',
  compartments: 'https://media.base44.com/images/public/6a01d1fcc222bb18e29d26c1/76f0e85db_generated_534327ad.png',
  lifestyle: 'https://media.base44.com/images/public/6a01d1fcc222bb18e29d26c1/f89657817_generated_image.png',
  exploded: 'https://media.base44.com/images/public/6a01d1fcc222bb18e29d26c1/267ea7fbe_generated_ed5197e7.png',
  variants: 'https://media.base44.com/images/public/6a01d1fcc222bb18e29d26c1/a995bd908_generated_image.png',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeatureShowcase />
      <CompartmentSection compartmentImage={IMAGES.compartments} />
      <div id="howitworks">
        <HowItWorks />
      </div>
      <LifestyleSection lifestyleImage={IMAGES.lifestyle} />
      <div id="finishes">
        <VariantsSection variantsImage={IMAGES.variants} />
      </div>
      <MaterialsSection explodedImage={IMAGES.exploded} />
      <ComparisonSection />
      <PressSection />
      <TestimonialsSection />
      <div id="faq">
        <FAQSection />
      </div>
      <CTASection heroImage={IMAGES.hero} />
      <Footer />
    </div>
  );
}
