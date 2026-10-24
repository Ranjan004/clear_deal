import React, { useState } from 'react';
import { Download, Maximize2, CheckCircle, ShieldCheck, Compass, Layers, Car, Trees } from 'lucide-react';

export default function MasterLayoutSection({ onOpenInquiry }) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    { label: 'Total Land Area', value: '188,747', unit: 'SQ.FT.', sub: '20,972 Sq. Yards (100%)' },
    { label: 'Total Plots', value: '155', unit: 'UNITS', sub: 'Demarcated & Ready for Registry' },
    { label: 'Plotted Area', value: '135,122', unit: 'SQ.FT.', sub: '15,014 Sq. Yards (71.6%)' },
    { label: 'Road & Green Area', value: '53,625', unit: 'SQ.FT.', sub: '5,958 Sq. Yards (28.4%)' },
  ];

  const plotCategories = [
    { id: 'all', label: 'All Plots (155 Units)', size: '58 - 195 Sq. Yd.', desc: 'Full township inventory with immediate registry and possession.' },
    { id: 'compact', label: 'Compact Plots', size: '58 - 75 Sq. Yd.', desc: 'Ideal for budget villas and smart investments. Plot Nos: 76, 77, 67-75 etc.' },
    { id: 'executive', label: 'Executive Plots', size: '78 - 100 Sq. Yd.', desc: 'Most popular size for 3-4 BHK duplex homes. Plot Nos: 87-90, 92, 100-103 etc.' },
    { id: 'premium', label: 'Premium & Corner Plots', size: '110 - 195 Sq. Yd.', desc: 'Frontage facing 25ft & 22ft wide roads. Plot Nos: 1-6, 9-16, 20-30 etc.' },
  ];

  const roadFeatures = [
    '25\'-0" Wide Central Spine Boulevard',
    '22\'-0" & 20\'-0" Internal Paver Roads',
    '16\'-0" Dedicated Sector Lanes',
    'Underground / Concealed Drainage (Nala Connection)',
    'Concrete Interlocking Paver Blocks',
    'Street Electrification with Dedicated Poles'
  ];

  return (
    <section id="MasterPlan" className="relative bg-[#f5f3ee] py-24 max-lg:py-16 text-[#1a2a4a] overflow-hidden border-t border-[#b8892a]/20">
      <div className="wrapper">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8892a]/15 text-[#8f6412] text-xs font-semibold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              ClearDeal Property • Recent Plotted Project
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1a2a4a] leading-tight">
              Golden Luxury Homes <span className="italic font-normal text-[#b8892a]">155-Plot Layout</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#1a2a4a]/75 mt-2 max-w-2xl">
              Muradnagar Dasna Main Road, Kallu Garhi, Ghaziabad (NCR). Strategically connected directly to Delhi-Meerut Expressway & Eastern Peripheral Expressway.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/media/pdf/golden_luxury_homes_layout.pdf"
              download="Golden_Luxury_Homes_Master_Layout.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#111e36] text-[#e8dfc8] hover:bg-[#b8892a] hover:text-[#111e36] transition-all text-xs font-semibold tracking-wider uppercase shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Layout PDF
            </a>
            <button
              onClick={() => setIsZoomOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1a2a4a]/30 hover:border-[#b8892a] hover:bg-[#b8892a]/10 text-[#1a2a4a] transition-all text-xs font-semibold tracking-wider uppercase cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              Fullscreen View
            </button>
          </div>
        </div>

        {/* 4 Key Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#b8892a]/20 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-sans text-xs uppercase tracking-wider text-[#1a2a4a]/60 font-semibold mb-1">
                {s.label}
              </p>
              <div className="flex items-baseline gap-1.5 my-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#1a2a4a] font-normal">
                  {s.value}
                </span>
                <span className="font-sans text-xs text-[#b8892a] font-bold">
                  {s.unit}
                </span>
              </div>
              <p className="font-sans text-xs text-[#1a2a4a]/70">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Main Layout Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Layout Visual Frame */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border border-[#b8892a]/25 shadow-xl relative group">
            <div className="relative overflow-hidden rounded-2xl bg-[#0e1624] aspect-[3/4] max-h-[720px] flex items-center justify-center">
              <img
                src="/media/golden_luxury_layout.png"
                alt="Golden Luxury Homes Layout Map"
                className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"
                onClick={() => setIsZoomOpen(true)}
              />
              <div className="absolute bottom-4 right-4 bg-[#111e36]/85 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 pointer-events-none border border-white/20">
                <Maximize2 className="w-3.5 h-3.5 text-[#e8dfc8]" />
                Click to inspect high-res layout
              </div>
            </div>

            {/* Road width legend */}
            <div className="mt-4 pt-4 border-t border-[#1a2a4a]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1a2a4a]/75">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f4a261]"></span>
                <span>25'-0" Wide Main Spine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#2a9d8f]"></span>
                <span>20'-0" & 22'-0" Internal Roads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#e76f51]"></span>
                <span>16'-0" Sector Roads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#264653]"></span>
                <span>Entry / Exit at Main Road</span>
              </div>
            </div>
          </div>

          {/* Right Detail Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Township Summary Card */}
            <div className="p-6 rounded-3xl bg-[#111e36] text-[#e8dfc8] shadow-xl border border-[#b8892a]/30">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#b8892a] font-bold block mb-2">
                PROJECT HIGHLIGHTS
              </span>
              <h3 className="font-serif text-2xl font-light text-white mb-4">
                Plotted Freedom with Gated Luxury
              </h3>
              <p className="text-xs sm:text-sm text-[#e8dfc8]/80 leading-relaxed mb-6 font-sans">
                Golden Luxury Homes brings you freehold demarcated residential plots with clear titles and instant registry. Build your independent dream villa with vertical garden architecture within a secure gated perimeter.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10">
                {roadFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#e8dfc8]/90">
                    <CheckCircle className="w-4 h-4 text-[#b8892a] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#b8892a]">Location Advantage</p>
                  <p className="text-xs font-semibold text-white">Next to DPSG Int'l Public School</p>
                </div>
                <button
                  onClick={onOpenInquiry}
                  className="px-4 py-2 rounded-full bg-[#b8892a] text-[#111e36] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                >
                  Book Plot
                </button>
              </div>
            </div>

            {/* Plot Categories Selector */}
            <div className="p-6 rounded-3xl bg-white border border-[#b8892a]/20 shadow-sm space-y-3">
              <h4 className="font-serif text-lg text-[#1a2a4a]">Plot Size Breakdown</h4>
              <p className="text-xs text-[#1a2a4a]/70">Explore available dimensions and road frontage:</p>

              <div className="space-y-2 mt-3">
                {plotCategories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      activeTab === cat.id
                        ? 'border-[#b8892a] bg-[#b8892a]/10'
                        : 'border-[#1a2a4a]/10 hover:border-[#b8892a]/40 bg-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-bold text-[#1a2a4a]">{cat.label}</span>
                      <span className="font-mono text-xs font-semibold text-[#8f6412] bg-[#b8892a]/15 px-2 py-0.5 rounded">
                        {cat.size}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#1a2a4a]/70 mt-1 leading-normal">
                      {cat.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenInquiry}
                  className="w-full py-3 rounded-xl bg-[#1a2a4a] text-white hover:bg-[#b8892a] hover:text-[#1a2a4a] transition-colors text-xs uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Request Plot Price & Availability
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-fade-in">
          <div className="flex items-center justify-between pb-4 border-b border-white/20 text-white">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#e8dfc8]">Golden Luxury Homes — Complete Layout Model</h3>
              <p className="text-xs text-white/70">155 Plotted Development • Muradnagar Dasna Main Road, Ghaziabad NCR</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/media/pdf/golden_luxury_homes_layout.pdf"
                download
                className="px-4 py-2 rounded-full bg-[#b8892a] text-[#111e36] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white text-lg transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6">
            <img
              src="/media/golden_luxury_layout.png"
              alt="High Res Master Layout"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}
