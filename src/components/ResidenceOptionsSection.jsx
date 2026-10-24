import React, { useState } from 'react';
import { Compass, CheckCircle2, Download, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ResidenceOptionsSection({ lang, onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      name: 'Compact Plots (58 - 75 Sq. Yd.)',
      nameEn: 'Compact Plots (58 - 75 Sq. Yd.)',
      count: '38',
      dimensions: '16\'5" x 32\' to 18\' x 35\'',
      desc: 'Ideal for budget-friendly independent homes, smart first-time land investments, and high rental yields. Plot Nos: 67-77, 80-84.',
      images: ['/media/videos/thumb_3.jpg', '/media/videos/thumb_4.jpg']
    },
    {
      name: 'Standard Plots (78 - 95 Sq. Yd.)',
      nameEn: 'Standard Plots (78 - 95 Sq. Yd.)',
      count: '42',
      dimensions: '18\' x 43\'8" to 21\' x 33\'6"',
      desc: 'Perfect for building 3-BHK independent villas with private parking and garden. Plot Nos: 87-95, 100-105, 113-116.',
      images: ['/media/videos/thumb_5.jpg', '/media/videos/thumb_3.jpg']
    },
    {
      name: 'Executive Plots (100 - 125 Sq. Yd.)',
      nameEn: 'Executive Plots (100 - 125 Sq. Yd.)',
      count: '46',
      dimensions: '20\' x 45\' to 25\' x 45\'',
      desc: 'Spacious rectangular plots facing wide 20ft & 22ft paver roads, designed for premium duplex villas. Plot Nos: 10-25, 96, 99.',
      images: ['/media/golden_luxury_layout.png', '/media/videos/thumb_1.jpg']
    },
    {
      name: 'Premium Plots (130 - 150 Sq. Yd.)',
      nameEn: 'Premium Plots (130 - 150 Sq. Yd.)',
      count: '18',
      dimensions: '22\' x 51\' to 32\'11" x 41\'',
      desc: 'Close to the grand entrance arch and central spine, offering premier privacy and luxury. Plot Nos: 8, 30, 32, 33, 64.',
      images: ['/media/golden_luxury_gate.jpg', '/media/videos/thumb_2.jpg']
    },
    {
      name: 'Corner & Boulevard Plots (165 - 195 Sq. Yd.)',
      nameEn: 'Corner Plots (165 - 195 Sq. Yd.)',
      count: '11',
      dimensions: '24\' x 69\' to 34\'3" x 43\'4"',
      desc: 'Flagship corner plots with dual road access (25ft & 22ft roads) and maximum open frontage. Plot Nos: 1, 2, 3, 4, 5, 6, 7.',
      images: ['/media/golden_luxury_layout.png', '/media/videos/thumb_1.jpg']
    },
  ];

  const currentCategory = categories[activeCategory];
  const currentImages = currentCategory.images;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section id="ResidenceOptions" className="bg-[#f5f3ee] border-t border-[#b8892a]/20">
      <div className="residence-options-trigger trigger relative flex min-h-screen items-stretch py-20 max-xl:py-15">
        <div className="reveal-content wrapper relative flex items-center justify-between w-full max-lg:flex-col-reverse gap-12">
          
          {/* Left Column: Plot Categories List & Details */}
          <div className="flex h-full w-5/12 flex-col items-start justify-between gap-8 pr-6 max-xl:w-1/2 max-lg:w-full max-lg:pr-0">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8892a]/15 text-[#8f6412] text-xs font-semibold uppercase tracking-widest mb-4">
                <Compass className="w-3.5 h-3.5" />
                Demarcated Land Inventory
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#1a2a4a] mb-2 font-light">
                Select Your <span className="italic font-normal text-[#b8892a]">Plot Category</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#1a2a4a]/70 font-sans mb-6">
                155 freehold demarcated plots with immediate registry. Choose your plot size according to your family requirements and budget.
              </p>

              {/* Category tabs */}
              <div className="list relative border-b border-[#1a2a4a]/15 pb-4 space-y-1">
                {categories.map((cat, idx) => (
                  <div
                    key={cat.name}
                    onClick={() => { setActiveCategory(idx); setCurrentSlide(0); }}
                    className={`p-3 rounded-xl cursor-pointer transition-all ${
                      activeCategory === idx
                        ? 'bg-[#111e36] text-white shadow-md'
                        : 'hover:bg-white/80 text-[#1a2a4a]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className={`font-serif text-base sm:text-lg ${
                        activeCategory === idx ? 'text-[#e8dfc8] font-normal' : 'text-[#1a2a4a]'
                      }`}>
                        {cat.nameEn}
                      </p>
                      <span className={`text-xs px-2 py-0.5 rounded font-mono font-semibold ${
                        activeCategory === idx ? 'bg-[#b8892a] text-[#111e36]' : 'bg-[#b8892a]/15 text-[#8f6412]'
                      }`}>
                        {cat.count} Units
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected plot description and dimensions */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-[#b8892a]/20 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#b8892a]">
                    Dimensions
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#1a2a4a]">
                    {currentCategory.dimensions}
                  </span>
                </div>
                <p className="text-xs text-[#1a2a4a]/75 font-sans leading-relaxed">
                  {currentCategory.desc}
                </p>
              </div>
            </div>

            {/* Bottom Row: Available Units & Request Button */}
            <div className="flex items-center justify-between w-full pt-6 border-t border-[#b8892a]/30">
              <div className="flex items-center gap-4">
                <span className="heading-2 font-serif text-4xl sm:text-5xl text-[#1a2a4a]">
                  {currentCategory.count}
                </span>
                <span className="paragraph text-[#8f6412] inline-block max-w-24 text-xs uppercase font-bold leading-tight font-sans">
                  Available Plots in Category
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8892a] px-6 py-3 text-xs uppercase tracking-wider text-[#111e36] font-bold hover:bg-[#111e36] hover:text-white transition-all font-sans cursor-pointer shadow-lg"
              >
                <span>Book This Plot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Real Site & Layout Photo Preview Slider */}
          <div className="relative flex-1 h-[65vh] min-h-[460px] w-full max-lg:h-[45vh] overflow-hidden rounded-3xl shadow-2xl border border-[#b8892a]/30 bg-[#0d1424]">
            <img
              src={currentImages[currentSlide] || currentImages[0]}
              alt={currentCategory.nameEn}
              className="h-full w-full object-cover transition-all duration-700"
            />
            
            {/* Gradient badge overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute top-6 left-6 bg-[#111e36]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b8892a]" />
              <span className="font-semibold uppercase text-[11px]">Real Ground Infrastructure</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white pointer-events-none">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#b8892a] font-bold block mb-1">
                  READY FOR REGISTRY
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white">
                  {currentCategory.nameEn}
                </h4>
                <p className="text-xs text-white/70 font-sans mt-0.5">
                  Internal Interlocking Paver Roads & Street Electrification Ready
                </p>
              </div>

              {/* Slider arrow controls */}
              {currentImages.length > 1 && (
                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#b8892a] hover:text-[#111e36] backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#b8892a] hover:text-[#111e36] backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
