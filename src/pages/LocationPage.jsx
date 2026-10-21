import React from 'react';
import LocationSection from '../components/LocationSection';
import AroundSection from '../components/AroundSection';

export default function LocationPage({ lang, t }) {
  return (
    <div className="overflow-x-clip">
      <LocationSection lang={lang} t={t} />
      <AroundSection lang={lang} t={t} />
    </div>
  );
}
