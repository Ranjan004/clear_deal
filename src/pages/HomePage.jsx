import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from '../components/HeroSection';
import IntroductionSection from '../components/IntroductionSection';
import LocationSection from '../components/LocationSection';
import AroundSection from '../components/AroundSection';
import ResidencesHeroSection from '../components/ResidencesHeroSection';
import ResidenceOptionsSection from '../components/ResidenceOptionsSection';
import BusinessSpacesHeroSection from '../components/BusinessSpacesHeroSection';
import BusinessSpacesOptionsSection from '../components/BusinessSpacesOptionsSection';
import RootsSection from '../components/RootsSection';
import AmenitiesHeroSection from '../components/AmenitiesHeroSection';
import AmenitiesOptionsSection from '../components/AmenitiesOptionsSection';
import HorizontalAerialSection from '../components/HorizontalAerialSection';
import InstallmentPlanSection from '../components/InstallmentPlanSection';

export default function HomePage({ lang, t, onOpenInquiry }) {
  return (
    <div className="overflow-x-clip">
      <HeroSection lang={lang} t={t} />
      <IntroductionSection lang={lang} t={t} />
      <LocationSection lang={lang} t={t} />
      <AroundSection lang={lang} t={t} />
      <ResidencesHeroSection lang={lang} t={t} />
      <ResidenceOptionsSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
      <BusinessSpacesHeroSection lang={lang} t={t} />
      <BusinessSpacesOptionsSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
      <RootsSection lang={lang} t={t} />
      <AmenitiesHeroSection lang={lang} t={t} />
      <AmenitiesOptionsSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
      <HorizontalAerialSection lang={lang} t={t} />
      <InstallmentPlanSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
