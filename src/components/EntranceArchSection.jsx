import React from 'react';
import { ShieldCheck, Trees, Sparkles, CheckCircle2, Eye } from 'lucide-react';

export default function EntranceArchSection({ onOpenInquiry }) {
  const highlights = [
    { title: 'Grand Signature Entrance Arch', desc: 'Monumental architectural gate with vertical garden living aesthetics.' },
    { title: '24/7 Security Cabin & Boom Barrier', desc: 'Round-the-clock guarded entry ensuring complete privacy and family safety.' },
    { title: 'Vertical Living Green Walls', desc: 'Lush biophilic landscaping integrated directly into entrance structures.' },
    { title: 'Wide Bituminous / Paver Entry', desc: 'Spacious driveway connected directly to Muradnagar Dasna Main Road.' },
  ];

  return (
    <section id="GateShowcase" className="relative bg-[#111e36] text-[#f5f3ee] py-24 max-lg:py-16 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#b8892a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2a5b88]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="wrapper relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b8892a]/15 border border-[#b8892a]/30 text-[#e8dfc8] text-xs uppercase tracking-widest font-sans mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b8892a]" />
            Architectural Landmark
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Vertical Garden Living <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#b8892a]">Live Luxury • Live Nature</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#e8dfc8]/80 mt-4 leading-relaxed">
            Welcome to Golden Luxury Homes, where nature and modern gated urban living unite. The grand entrance arch stands as a statement of prestige, setting a refined tone for your future villa residence.
          </p>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Entrance Image (8 cols) */}
          <div className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-[#b8892a]/30 shadow-2xl bg-black">
            <img
              src="/media/golden_luxury_gate.jpg"
              alt="Golden Luxury Home Grand Entrance Gate Arch"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for bottom badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#b8892a] font-bold block mb-1">
                  OFFICIAL RENDERING
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white">
                  Golden Luxury Home Entrance Gateway
                </h3>
                <p className="text-xs text-[#e8dfc8]/80 font-sans mt-0.5">
                  Muradnagar Dasna Main Road • Kallu Garhi, Ghaziabad NCR
                </p>
              </div>
              <div className="pointer-events-auto">
                <button
                  onClick={onOpenInquiry}
                  className="px-5 py-2.5 rounded-full bg-[#b8892a] text-[#111e36] text-xs font-bold uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Book Plot Near Gate
                </button>
              </div>
            </div>
          </div>

          {/* Highlights & Perks (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#b8892a]/40 backdrop-blur-sm transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#b8892a]/20 border border-[#b8892a]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b8892a]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#e8dfc8]/70 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Visit Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#b8892a]/20 via-[#111e36] to-[#0d1424] border border-[#b8892a]/40 text-center">
              <p className="text-xs uppercase tracking-widest text-[#b8892a] font-bold mb-1">
                Immediate Possession
              </p>
              <h5 className="font-serif text-lg text-white mb-2">
                Boundary Walls & Roads Ready
              </h5>
              <p className="text-xs text-[#e8dfc8]/80 mb-4">
                Walk through the completed roads and choose your plot number today.
              </p>
              <button
                onClick={onOpenInquiry}
                className="w-full py-3 rounded-full bg-[#b8892a] text-[#111e36] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Schedule Site Visit Today
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
