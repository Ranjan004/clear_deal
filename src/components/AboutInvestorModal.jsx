import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award, Building2, ShieldCheck } from 'lucide-react';

export default function AboutInvestorModal({ isOpen, onClose, lang }) {
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    { src: "/about-the-investor/slide1.webp", title: "Skyline Belgrade", tag: "Residences" },
    { src: "/about-the-investor/slide2.webp", title: "Vračar Luxury Residences", tag: "Residential" },
    { src: "/about-the-investor/slide3.webp", title: "Novi Dorćol Landmark", tag: "Urban Living" },
    { src: "/about-the-investor/slide4.webp", title: "Sava Promenade Commercial", tag: "Business Hub" },
    { src: "/about-the-investor/slide5.webp", title: "Dedinje Private Villas", tag: "Exclusive Villas" },
    { src: "/about-the-investor/slide6.webp", title: "Belgrade Waterfront Vista", tag: "Waterfront" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-5xl bg-[#1f261e] text-[#fdfbef] rounded-3xl overflow-hidden border border-[#ccbf99]/40 shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#ccbf99] hover:text-[#1f261e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Section of Investor */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src="/about-the-investor/about-hero.webp"
            alt="Perose Property Group"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f261e] via-[#1f261e]/40 to-transparent flex flex-col justify-end p-8 sm:p-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#ccbf99] font-medium block mb-2">
              DEVELOPER & ASSET MANAGEMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#fff4d6] font-light">
              Perose Property Group
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fdfbef]">
                {"Architecture of Trust & Enduring Value"}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#fdfbef]/80 font-light leading-relaxed">
                {'Perose Property Group is an elite regional property developer committed to creating visionary residential and commercial landmarks. Our philosophy unites sustainable building performance, refined materiality, and enduring urban architecture.'}
              </p>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#ccbf99] block font-light">20+</span>
                <span className="text-xs text-[#fdfbef]/70 font-sans uppercase tracking-wider">
                  {"Years Experience"}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#ccbf99] block font-light">150k+</span>
                <span className="text-xs text-[#fdfbef]/70 font-sans uppercase tracking-wider">
                  {"Developed Sqm"}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#ccbf99] block font-light">100%</span>
                <span className="text-xs text-[#fdfbef]/70 font-sans uppercase tracking-wider">
                  {"Permit Compliance"}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-serif text-3xl text-[#ccbf99] block font-light">A+</span>
                <span className="text-xs text-[#fdfbef]/70 font-sans uppercase tracking-wider">
                  {"Energy Class"}
                </span>
              </div>
            </div>
          </div>

          {/* Portfolio Slider */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ccbf99] block font-medium">
                  PORTFOLIO
                </span>
                <h4 className="font-serif text-2xl text-white font-light">
                  {"Selected Signature Projects"}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ccbf99] hover:text-[#1f261e] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ccbf99] hover:text-[#1f261e] transition-colors flex items-center justify-center cursor-pointer"
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
                  <span className="text-[11px] font-sans tracking-widest uppercase text-[#ccbf99] block">
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
