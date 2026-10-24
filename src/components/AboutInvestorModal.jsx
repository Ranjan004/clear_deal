import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award, MapPin, ShieldCheck, FileCheck, CheckCircle } from 'lucide-react';

export default function AboutInvestorModal({ isOpen, onClose, lang }) {
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    { src: "/media/golden_luxury_gate.jpg", title: "Golden Luxury Homes Entrance Arch", tag: "Grand Gated Township" },
    { src: "/media/golden_luxury_layout.png", title: "155 Demarcated Plots CAD Layout", tag: "Master Plan Blueprint" },
    { src: "/media/videos/thumb_1.jpg", title: "25-Ft Paver Road Infrastructure", tag: "On-Ground Development" },
    { src: "/media/videos/thumb_2.jpg", title: "Township Electrification Grid", tag: "Power Infrastructure" },
    { src: "/media/ghaziabad_master_plan_2031.png", title: "Ghaziabad GIS Master Plan 2031", tag: "Strategic Growth Zone" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-5xl bg-[#0d1424] text-[#fdfbef] rounded-3xl overflow-hidden border border-[#b8892a]/40 shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#b8892a] hover:text-[#0d1424] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Section of Developer */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src="/media/golden_luxury_gate.jpg"
            alt="ClearDeal Property Developer"
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/40 to-transparent flex flex-col justify-end p-8 sm:p-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-bold block mb-2">
              TOWNSHIP PLANNING & PLOTTED DEVELOPMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#e8dfc8] font-light">
              ClearDeal Property
            </h2>
            <p className="text-white/80 text-xs sm:text-sm font-sans mt-1">
              Burhanuddin House No 1-68, Kh. No. 797, Block-I, Jaitpur Ext-2, Badarpur, Delhi - 110044
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#e8dfc8]">
                Master Planning, Demarcation & Freehold Plot Sales
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
                ClearDeal Property specializes in architectural CAD layout design, land aggregation, infrastructure engineering, and marketing legally clear freehold plots. We develop complete township essentials — from 25ft & 20ft wide interlocking paver roads to transformer electrification, covered drainage, and boundary demarcation — so buyers can register immediately and build custom independent homes.
              </p>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#b8892a] block font-light">155</span>
                <span className="text-xs text-white/70 font-sans uppercase tracking-wider">
                  Demarcated Plots
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#b8892a] block font-light">20,972</span>
                <span className="text-xs text-white/70 font-sans uppercase tracking-wider">
                  Total Sq. Yd. Area
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#b8892a] block font-light">100%</span>
                <span className="text-xs text-white/70 font-sans uppercase tracking-wider">
                  Immediate Registry
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#b8892a] block font-light">25 Ft</span>
                <span className="text-xs text-white/70 font-sans uppercase tracking-wider">
                  Main Boulevard
                </span>
              </div>
            </div>
          </div>

          {/* Portfolio Slider */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#b8892a] block font-semibold">
                  RECENT PLOTTED TOWNSHIP
                </span>
                <h4 className="font-serif text-2xl text-white font-light">
                  Golden Luxury Homes (155 Plots Project)
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#b8892a] hover:text-[#0d1424] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#b8892a] hover:text-[#0d1424] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={slides[activeSlide].src}
                alt={slides[activeSlide].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[11px] font-sans tracking-widest uppercase text-[#b8892a] block font-bold">
                    {slides[activeSlide].tag}
                  </span>
                  <h5 className="font-serif text-2xl text-white font-light">
                    {slides[activeSlide].title}
                  </h5>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
