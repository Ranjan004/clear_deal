import React, { useState } from 'react';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AmenitiesOptionsSection({ lang, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);

  const amenities = [
    {
      id: 'gated-security',
      name: 'Grand Gate & 24/7 Security',
      nameEn: 'Grand Gate & 24/7 Security',
      kicker: 'GATED COMMUNITY & BOOM BARRIER',
      desc: 'Monumental signature entrance arch featuring 24/7 guard cabin, automated boom barriers, and comprehensive CCTV monitoring ensuring a secure, private plotted community.',
      image: '/media/golden_luxury_gate.jpg',
      features: ['24x7 Guard Cabin', 'Automated Boom Barriers', 'CCTV Camera Surveillance']
    },
    {
      id: 'paver-roads',
      name: 'Wide Interlocking Paver Roads',
      nameEn: 'Wide Interlocking Paver Roads',
      kicker: '25FT, 22FT & 20FT WIDE ROAD NETWORK',
      desc: 'Over 28.4% of total township land (53,625 sq. ft.) is dedicated to wide roads. Engineered with high-strength interlocking concrete paver blocks for durability and smooth traffic flow.',
      image: '/media/videos/thumb_3.jpg',
      features: ['25ft Central Spine Boulevard', '22ft & 20ft Internal Streets', 'Concrete Paver Blocks']
    },
    {
      id: 'electrification',
      name: 'Street Electrification & Poles',
      nameEn: 'Street Electrification & Poles',
      kicker: 'COMPLETE POWER INFRASTRUCTURE',
      desc: 'Fully electrified township with dedicated power poles already erected along all streets, equipped with LED street lights providing complete night safety.',
      image: '/media/videos/thumb_4.jpg',
      features: ['Dedicated Electric Poles', 'LED Street Lighting', 'Ready Power Connection']
    },
    {
      id: 'drainage-water',
      name: 'Covered Drainage & Clear Registry',
      nameEn: 'Covered Drainage & Clear Registry',
      kicker: 'MUNICIPAL DRAINAGE & 100% CLEAR TITLE',
      desc: 'Integrated covered drainage channels connected directly to the main highway nala, preventing water accumulation. Freehold ownership with immediate registry and dakhil kharij.',
      image: '/media/golden_luxury_layout.png',
      features: ['Covered Nala Drainage', 'Rainwater Management', '100% Clear Freehold Titles']
    },
  ];

  const current = amenities[activeTab];

  return (
    <section id="AmenitiesOptions" className="bg-[#f5f3ee] border-t border-[#b8892a]/20">
      <div className="amenities-options-trigger trigger relative flex min-h-screen items-stretch py-20 max-xl:py-15">
        <div className="amenities-options-reveal-content wrapper relative flex items-center justify-between w-full max-lg:flex-col-reverse gap-12">
          
          {/* Left Column: Amenities List and Narrative */}
          <div className="flex h-full w-5/12 flex-col items-start justify-between gap-8 pr-6 max-xl:w-1/2 max-lg:w-full max-lg:pr-0">
            <div className="w-full">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8892a]/15 text-[#8f6412] text-xs font-semibold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Township Infrastructure
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#1a2a4a] mb-3 font-light">
                Built For <span className="italic font-normal text-[#b8892a]">Lasting Value</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#1a2a4a]/75 font-sans mb-6">
                Unlike unapproved raw land, Golden Luxury Homes comes with planned, completed infrastructure already delivered on the ground.
              </p>

              {/* Tabs list */}
              <div className="list relative border-b border-[#1a2a4a]/15 pb-4 space-y-1">
                {amenities.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-3.5 rounded-xl cursor-pointer transition-all ${
                      activeTab === idx
                        ? 'bg-[#111e36] text-white shadow-md'
                        : 'hover:bg-white/80 text-[#1a2a4a]'
                    }`}
                  >
                    <p className={`font-serif text-base sm:text-lg ${
                      activeTab === idx ? 'text-[#e8dfc8] font-normal' : 'text-[#1a2a4a]'
                    }`}>
                      {item.nameEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Selected amenity narrative */}
              <div className="mt-6 p-5 rounded-2xl bg-white border border-[#b8892a]/20 shadow-sm space-y-3">
                <p className="kicker uppercase text-xs tracking-wider font-bold text-[#b8892a]">
                  {current.kicker}
                </p>
                <p className="paragraph text-xs sm:text-sm font-sans text-[#1a2a4a]/80 leading-relaxed">
                  {current.desc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#1a2a4a]/10">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1a2a4a]/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b8892a] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Row CTA */}
            <div className="pt-4 w-full">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#111e36] px-8 py-3.5 text-xs uppercase tracking-wider text-white font-semibold hover:bg-[#b8892a] hover:text-[#111e36] transition-all font-sans cursor-pointer shadow-lg"
              >
                <span>Schedule On-Site Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Real Infrastructure Photo */}
          <div className="relative flex-1 h-[65vh] min-h-[460px] w-full max-lg:h-[45vh] overflow-hidden rounded-3xl shadow-2xl border border-[#b8892a]/30 bg-[#0d1424]">
            <img
              src={current.image}
              alt={current.nameEn}
              className="h-full w-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-[#b8892a] font-bold block mb-1">
                GOLDEN LUXURY HOMES INFRASTRUCTURE
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-white">
                {current.nameEn}
              </h4>
              <p className="text-xs text-white/75 font-sans mt-0.5">
                Muradnagar Dasna Main Road, Kallu Garhi, Ghaziabad (NCR)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
