import React, { useState } from 'react';

export default function BusinessSpacesOptionsSection({ lang, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'lamela-a',
      name: 'Lamela A',
      headline: 'Contemporary Grade A Office Space',
      desc: 'Flexible office environments engineered to satisfy the highest corporate benchmarks, blending energy efficiency and refined comfort.',
    },
    {
      id: 'lamela-b',
      name: 'Lamela B',
      headline: 'Inspiring Business Setting',
      desc: 'Tailored premises for ambitious companies seeking functional excellence, prestige and seamless connectivity in New Belgrade.',
    },
    {
      id: 'lokali',
      name: 'Lokali',
      headline: '11 Premium Retail & Dining Units',
      desc: 'Tailored for diverse retail and culinary ventures, with optimal space distribution and natural light fostering an inspiring atmosphere.',
    },
  ];

  return (
    <section id="BusinessSpacesOptions">
      <div className="retail-spaces-trigger trigger relative flex min-h-screen items-stretch max-lg:flex-col">
        
        {/* Left Column: 55vw Atrium Photo with 'Poslovni prostori' Overlay */}
        <div className="retail-spaces-reveal-image relative z-0 h-full w-[55vw] max-xl:w-1/2 max-lg:w-full min-h-[500px]">
          <div className="relative h-full w-full overflow-hidden">
            <img
              alt="Business spaces"
              src="/home/business-options/business-options.webp"
              className="h-full w-full object-cover"
            />
            <p className="text-cream heading-1 absolute bottom-20 left-20 z-3 w-2/3 uppercase max-xl:left-10 max-xl:bottom-10 max-lg:text-4xl font-serif text-5xl">
              {"Commercial Spaces"}
            </p>
          </div>
        </div>

        {/* Right Column: Dark Forest Green Radial Schedule */}
        <div className="relative z-1 flex h-full w-[45vw] max-xl:w-1/2 max-lg:w-full flex-col justify-between bg-[radial-gradient(at_right_bottom,#1a3060,#111e36)] p-16 sm:p-20 text-cream max-md:p-8">
          
          {/* Tabs */}
          <div className="list relative border-b border-cream/20 pb-8">
            {tabs.map((tab, idx) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className="group relative cursor-pointer overflow-hidden py-2"
              >
                <p className={`heading-2 text-cream flex items-center gap-6 py-1 leading-none transition-all duration-300 ${
                  activeTab === idx ? '-translate-y-full' : 'group-hover:-translate-y-full'
                }`}>
                  {tab.name}
                </p>
                <span className={`heading-2 text-accent absolute left-0 flex h-full w-full items-center gap-6 italic transition-all duration-300 ${
                  activeTab === idx ? 'top-1' : 'top-[120%] group-hover:top-1'
                }`}>
                  {tab.name}
                </span>
              </div>
            ))}
          </div>

          {/* Tab Description & CTA */}
          <div className="my-auto py-10">
            <h3 className="heading-2 text-cream font-serif text-3xl sm:text-4xl font-light mb-6">
              {tabs[activeTab].headline}
            </h3>
            <p className="paragraph text-sand/80 font-sans text-sm sm:text-base leading-relaxed max-w-lg mb-10">
              {tabs[activeTab].desc}
            </p>

            <button
              type="button"
              onClick={onOpenInquiry}
              className="inline-flex items-center justify-center gap-4 rounded-full border border-cream/40 px-8 py-3.5 text-xs uppercase tracking-wider text-cream hover:bg-cream hover:text-[#1a2a4a] transition font-sans cursor-pointer"
            >
              <span>{"LEARN MORE"}</span>
              <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
