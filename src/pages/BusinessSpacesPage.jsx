import React from 'react';
import BusinessSpacesHeroSection from '../components/BusinessSpacesHeroSection';
import BusinessSpacesOptionsSection from '../components/BusinessSpacesOptionsSection';

export default function BusinessSpacesPage({ lang, t, onOpenInquiry }) {
  return (
    <div className="overflow-x-clip">
      <BusinessSpacesHeroSection lang={lang} t={t} />
      <BusinessSpacesOptionsSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
