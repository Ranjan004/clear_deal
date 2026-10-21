import React from 'react';
import BusinessSpacesHeroSection from '../components/BusinessSpacesHeroSection';
import BusinessSpacesOptionsSection from '../components/BusinessSpacesOptionsSection';

export default function RetailSpacesPage({ lang, t, onOpenInquiry }) {
  // Retail Spaces page — shows retail-focused sections of the business spaces
  return (
    <div className="overflow-x-clip">
      {/* Page Hero Banner */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-clip">
        <img
          src="/home/business/business.webp"
          alt="Retail Spaces"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#111e36]/70" />
        <div className="wrapper relative z-10 pt-8">
          <p className="font-serif uppercase tracking-[0.2em] text-[#ccbf99] text-sm mb-4">
            {"ClearDeal Property"}
          </p>
          <h1 className="font-serif uppercase text-[#fdfbef] leading-none text-[6rem] max-2xl:text-[5rem] max-xl:text-[4rem] max-lg:text-[3rem] max-md:text-[2.2rem]">
            {"Retail Spaces"}
          </h1>
          <p className="mt-6 font-sans text-[#ccbf99] max-w-xl text-[1rem] leading-relaxed">
            {'A prestigious address where business takes on a new dimension. Retail spaces thoughtfully designed for modern commerce.'}
          </p>
        </div>
      </section>

      <BusinessSpacesOptionsSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
