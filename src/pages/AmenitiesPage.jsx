import React from 'react';
import AmenitiesHeroSection from '../components/AmenitiesHeroSection';
import AmenitiesOptionsSection from '../components/AmenitiesOptionsSection';

export default function AmenitiesPage({ lang, t, onOpenInquiry }) {
  return (
    <div className="overflow-x-clip">
      <AmenitiesHeroSection lang={lang} t={t} />
      <AmenitiesOptionsSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
