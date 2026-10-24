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
import FloatingContactWidget from './components/FloatingContactWidget';

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
    // Dynamic Route-level SEO metadata
    const seoMap = {
      '/': {
        title: 'ClearDeal Property — Aapki Sahi Deal | Freehold Residential Plots in Ghaziabad | Golden Luxury Homes',
        desc: 'ClearDeal Property (Aapki Sahi Deal) — Trusted Real Estate Consultants in Delhi NCR & Ghaziabad. Explore Golden Luxury Homes: 155 freehold demarcated residential plots (58 - 195 sq. yd.) on Muradnagar Dasna Main Road near Delhi-Meerut Expressway. Immediate registry & mutation (dakhil kharij). Call +91 89799 53557.',
      },
      '/location': {
        title: 'Location & Connectivity | Golden Luxury Homes — Near Delhi-Meerut Expressway Ghaziabad',
        desc: 'Prime strategic location on Muradnagar Dasna Main Road, Kallu Garhi, Ghaziabad. Direct connectivity to Delhi-Meerut Expressway, Eastern Peripheral Expressway, and DPSG International School.',
      },
      '/amenities': {
        title: 'Township Amenities & Features | Golden Luxury Homes by ClearDeal Property',
        desc: 'Gated plotted township amenities: 25ft central boulevard, 22ft concrete interlocking paver roads, vertical garden green boundary, street electrification, concealed drainage, and 24/7 security.',
      },
      '/about': {
        title: 'About ClearDeal Property | Trusted Land Planning & Real Estate Consultants NCR',
        desc: 'Learn about ClearDeal Property (Aapki Sahi Deal), led by Er. Mohd Shakib and Abdul Hamid. Delivering transparent, clear-title plotted developments and land master layouts across Delhi NCR.',
      },
      '/contact': {
        title: 'Contact Us | ClearDeal Property — Book Site Visit in Ghaziabad | +91 89799 53557',
        desc: 'Contact ClearDeal Property for Golden Luxury Homes freehold plots. Schedule a free site visit or consultation. Phone: +91 89799 53557 / +91 97188 65748. Email: cleardeal.property@gmail.com.',
      },
      '/residences': {
        title: 'Residential Plots Portfolio (58 to 195 Sq. Yd.) | Golden Luxury Homes Ghaziabad',
        desc: 'Explore demarcated residential plot sizes from 58 sq. yd. to 195 sq. yd. ready for immediate registry and independent villa construction at Golden Luxury Homes.',
      },
      '/business-spaces': {
        title: 'Commercial & Shop Plots | ClearDeal Property Ghaziabad',
        desc: 'Prime main road commercial and retail shop plots along Muradnagar Dasna corridor. High footfall and exponential growth potential by ClearDeal Property.',
      },
      '/retail-spaces': {
        title: 'Retail Spaces & Frontage Plots | Golden Luxury Homes ClearDeal Property',
        desc: 'High-visibility commercial retail plots facing main arterial roads for shops, clinics, and convenience stores in Ghaziabad NCR.',
      },
      '/privacy-policy': {
        title: 'Privacy Policy | ClearDeal Property',
        desc: 'Privacy Policy for ClearDeal Property website visitors and clients regarding data protection, inquiries, and communications.',
      },
      '/terms': {
        title: 'Terms & Conditions | ClearDeal Property',
        desc: 'Terms and conditions governing the use of ClearDeal Property services, site visits, and plot bookings.',
      },
    };

    const currentSeo = seoMap[pathname] || seoMap['/'];
    document.title = currentSeo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const canonicalUrl = pathname === '/' 
        ? 'https://real-state-orcin.vercel.app/' 
        : `https://real-state-orcin.vercel.app${pathname}`;
      canonical.setAttribute('href', canonicalUrl);
    }

    // Use Lenis if available, fallback to native
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    setTimeout(() => ScrollTrigger.refresh(), 100);
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

      {/* Floating Call & WhatsApp Quick Contact Widget */}
      <FloatingContactWidget />

    </div>
  );
}
