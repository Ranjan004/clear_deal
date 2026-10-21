import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { translations } from './data/translations';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import InquiryModal from './components/InquiryModal';
import AboutInvestorModal from './components/AboutInvestorModal';

// Pages
import HomePage from './pages/HomePage';
import ResidencesPage from './pages/ResidencesPage';
import BusinessSpacesPage from './pages/BusinessSpacesPage';
import RetailSpacesPage from './pages/RetailSpacesPage';
import LocationPage from './pages/LocationPage';
import AmenitiesPage from './pages/AmenitiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isInvestorOpen, setIsInvestorOpen] = useState(false);

  const t = translations[lang] || translations.sr;

  // Initialize Lenis Smooth Scrolling hooked to GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.lenis = lenis;
    window.ScrollTrigger = ScrollTrigger;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
    };
  }, []);

  const sharedProps = {
    lang,
    t,
    onOpenInquiry: () => setIsInquiryOpen(true),
    onOpenInvestor: () => setIsInvestorOpen(true),
  };

  return (
    <div className="relative min-h-screen bg-[#f5f3ee] text-[#1a2a4a] font-sans selection:bg-[#b8892a] selection:text-white">

      <ScrollToTop />

      {/* Floating Capsule Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenInvestor={() => setIsInvestorOpen(true)}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage {...sharedProps} />} />
          <Route path="/residences" element={<ResidencesPage {...sharedProps} />} />
          <Route path="/business-spaces" element={<BusinessSpacesPage {...sharedProps} />} />
          <Route path="/retail-spaces" element={<RetailSpacesPage {...sharedProps} />} />
          <Route path="/location" element={<LocationPage {...sharedProps} />} />
          <Route path="/amenities" element={<AmenitiesPage {...sharedProps} />} />
          <Route path="/about" element={<AboutPage {...sharedProps} />} />
          <Route path="/contact" element={<ContactPage {...sharedProps} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>

        {/* Footer on all pages */}
        <FooterSection
          lang={lang}
          t={t}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenInvestor={() => setIsInvestorOpen(true)}
        />
      </main>

      {/* About the Investor Modal */}
      <AboutInvestorModal
        isOpen={isInvestorOpen}
        onClose={() => setIsInvestorOpen(false)}
        lang={lang}
      />

      {/* Luxury Lead Capture Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        lang={lang}
        t={t}
      />

    </div>
  );
}
