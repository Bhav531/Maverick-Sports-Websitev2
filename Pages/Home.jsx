import React from 'react';
import HeroSection from '@/components/maverick/HeroSection';
import AboutSection from '@/components/maverick/AboutSection';
import ProgramsSection from '@/components/maverick/ProgramsSection';
import PricingSection from '@/components/maverick/PricingSection';
import WallOfGlory from '@/components/maverick/WallOfGlory';
import CoachesSection from '@/components/maverick/CoachesSection';
import CTASection from '@/components/maverick/CTASection';
import Footer from '@/components/maverick/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <PricingSection />
      <WallOfGlory />
      <CoachesSection />
      <CTASection />
      <Footer />
    </div>
  );
}