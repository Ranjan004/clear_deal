import React, { useState } from 'react';
import { Store, Building2, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function BusinessSpacesOptionsSection({ lang, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'highway-frontage',
      name: 'Highway Frontage Plots',
      headline: 'Direct Main Road Commercial Land',
      desc: 'Prime commercial plots fronting Muradnagar Dasna Main Road with heavy daily commuter footfall. Ideal for multi-storey retail shopping complexes, auto dealerships, banks, and corporate showrooms.',
      size: '150 - 195 Sq. Yd.',
      frontage: 'Main Highway Facing',
      features: ['Direct Highway Entry', 'High Footfall Visibility', 'Multi-Floor Approval Potential']
    },
    {
      id: 'central-boulevard',
      name: '25-Ft Boulevard Retail Plots',
      headline: 'Central Spine Township Commercial',
      desc: 'Positioned right along the 25\'-0" wide central internal boulevard to serve the entire 155-villa plotted township. Perfect for grocery supermarkets, diagnostic centers, cafes, and daily utility shops.',
      size: '100 - 135 Sq. Yd.',
      frontage: '25ft Internal Road',
      features: ['Township Community Catchment', 'Wide Customer Parking', 'Dedicated Loading Zone']
    },
    {
      id: 'corner-commercial',
      name: 'Corner Commercial Plots',
      headline: 'Dual Road Frontage & High Footfall',
      desc: 'Corner junction plots offering dual-side wide road exposure. Exceptional visibility for chemist pharmacies, ATMs, boutique offices, and neighborhood convenience stores.',
      size: '110 - 165 Sq. Yd.',
      frontage: 'Dual 22ft & 20ft Roads',
      features: ['Dual Open Sides', 'Maximum Brand Exposure', 'Ready Interlocking Pavers']
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <section id="BusinessSpacesOptions" className="border-t border-[#b8892a]/20">
      <div className="retail-spaces-trigger trigger relative flex min-h-screen items-stretch max-lg:flex-col">
        
        {/* Left Column: 55vw Visual with Commercial Title */}
        <div className="retail-spaces-reveal-image relative z-0 h-full w-[55vw] max-xl:w-1/2 max-lg:w-full min-h-[500px] bg-[#0d1424]">
          <div className="relative h-full w-full overflow-hidden">
            <img
              alt="Commercial Plots"
              src="/media/golden_luxury_gate.jpg"
              className="h-full w-full object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-black/40" />

            <div className="absolute bottom-16 left-12 right-12 z-10">
              <span className="text-xs uppercase tracking-widest text-[#b8892a] font-bold block mb-2">
                HIGHWAY & TOWNSHIP FRONTAGE
              </span>
              <p className="text-white font-serif text-3xl sm:text-5xl leading-tight font-light">
                Commercial <span className="italic font-normal text-[#b8892a]">Plots & Retail</span>
              </p>
              <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-lg">
                Muradnagar Dasna Main Road • Kallu Garhi, Ghaziabad NCR
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Blue/Gold Radial Schedule */}
        <div className="relative z-1 flex h-full w-[45vw] max-xl:w-1/2 max-lg:w-full flex-col justify-between bg-[radial-gradient(at_right_bottom,#1a3060,#111e36)] p-10 sm:p-16 text-cream">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8892a]/20 text-[#e8dfc8] text-xs font-semibold uppercase tracking-widest mb-6">
              <Store className="w-3.5 h-3.5 text-[#b8892a]" />
              Commercial Land Options
            </div>

            {/* Tabs List */}
            <div className="list relative border-b border-cream/20 pb-6 space-y-2">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all ${
                    activeTab === idx
                      ? 'bg-white/15 text-white border-l-4 border-[#b8892a]'
                      : 'hover:bg-white/5 text-white/70'
                  }`}
                >
                  <p className="font-serif text-lg sm:text-xl font-normal text-[#e8dfc8]">
                    {tab.name}
                  </p>
                  <span className="text-[11px] text-white/60 font-sans">
                    {tab.headline}
                  </span>
                </div>
              ))}
            </div>

            {/* Selected Tab Details */}
            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#b8892a] font-bold block">
                    Plot Sizes Available
                  </span>
                  <span className="font-mono text-sm font-semibold text-white">
                    {currentTab.size}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#b8892a] font-bold block">
                    Road Access
                  </span>
                  <span className="font-sans text-xs text-white/90">
                    {currentTab.frontage}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                {currentTab.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {currentTab.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle className="w-3.5 h-3.5 text-[#b8892a]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-8 mt-6 border-t border-cream/20">
            <button
              onClick={onOpenInquiry}
              className="w-full py-3.5 rounded-full bg-[#b8892a] text-[#111e36] hover:bg-white transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <span>Inquire Commercial Plot Rates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
