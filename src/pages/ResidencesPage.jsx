import React from 'react';
import ResidencesHeroSection from '../components/ResidencesHeroSection';
import ResidenceOptionsSection from '../components/ResidenceOptionsSection';
import InstallmentPlanSection from '../components/InstallmentPlanSection';

export default function ResidencesPage({ lang, t, onOpenInquiry }) {
  return (
    <div className="overflow-x-clip">
      <ResidencesHeroSection lang={lang} t={t} />
      <ResidenceOptionsSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
      <InstallmentPlanSection lang={lang} t={t} onOpenInquiry={onOpenInquiry} />
    </div>
  );
}
