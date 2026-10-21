import React, { useState } from 'react';

export default function ResidenceOptionsSection({ lang, onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { name: 'Studio', nameEn: 'Studio', count: '80', images: ['/home/residences-options/1.webp', '/home/residences-options/2.webp'] },
    { name: 'Jednosobni', nameEn: '1-Bedroom', count: '22', images: ['/home/residences-options/3.webp', '/home/residences-options/4.webp'] },
    { name: 'Dvosobni', nameEn: '2-Bedroom', count: '78', images: ['/home/residences-options/5.webp', '/home/residences-options/6.webp'] },
    { name: 'Trosobni', nameEn: '3-Bedroom', count: '54', images: ['/home/residences-options/7.webp', '/home/residences-options/8.webp', '/home/residences-options/9.webp'] },
    { name: 'Četvorosobni', nameEn: '4-Bedroom', count: '16', images: ['/home/residences-options/10.webp', '/home/residences-options/11.webp', '/home/residences-options/12.webp'] },
  ];

  const currentImages = categories[activeCategory].images;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section id="ResidenceOptions">
      <div className="residence-options-trigger trigger relative flex min-h-screen items-stretch py-20 max-xl:py-15 bg-[#f5f3ee]">
        <div className="reveal-content wrapper relative flex items-end justify-between w-full max-lg:flex-col-reverse">
          
          {/* Left Column: Apartment Categories List & Counter */}
          <div className="flex h-full w-5/12 flex-col items-start justify-between gap-10 pr-20 max-xl:w-1/2 max-lg:w-full max-lg:pr-0">
            <div className="w-full">
              <div className="list relative">
                {/* Active Indicator Bar */}
                <div 
                  className="bg-[#1a2a4a] pointer-events-none absolute -left-4 w-0.5 transition-all duration-300"
                  style={{
                    height: '42px',
                    transform: `translateY(${activeCategory * 56}px)`,
                    opacity: 1
                  }}
                />

                {categories.map((cat, idx) => (
                  <div
                    key={cat.name}
                    onClick={() => { setActiveCategory(idx); setCurrentSlide(0); }}
                    className="group relative cursor-pointer overflow-hidden py-2"
                  >
                    <p className={`heading-2 text-golden flex items-center gap-6 pt-2 pb-2 leading-none transition-all duration-300 ${
                      activeCategory === idx ? '-translate-y-full' : 'group-hover:-translate-y-full'
                    }`}>
                      {lang === 'sr' ? cat.name : cat.nameEn}
                    </p>
                    <span className={`heading-2 text-[#1a2a4a] absolute left-0 flex h-full w-full items-center gap-6 italic transition-all duration-300 ${
                      activeCategory === idx ? 'top-2' : 'top-[120%] group-hover:top-2'
                    }`}>
                      {lang === 'sr' ? cat.name : cat.nameEn}
                    </span>
                  </div>
                ))}
              </div>

              {/* View All Link */}
              <div className="mt-8">
                <button
                  onClick={onOpenInquiry}
                  className="small uppercase tracking-widest text-[#1a2a4a] underline cursor-pointer hover:text-golden transition"
                >
                  {"VIEW ALL"}
                </button>
              </div>
            </div>

            {/* Bottom Row: Available Units & Request Button */}
            <div className="flex items-center justify-between w-full pt-10 border-t border-golden/30">
              <div className="flex items-center gap-5">
                <span className="heading-2 font-serif text-4xl sm:text-5xl text-[#1a2a4a]">
                  {categories[activeCategory].count}
                </span>
                <span className="paragraph text-golden inline-block max-w-20 text-xs uppercase leading-tight font-sans">
                  {"Available units"}
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-4 rounded-full border border-[#1a2a4a] px-6 py-3 text-xs uppercase tracking-wider text-[#1a2a4a] hover:bg-[#1a2a4a] hover:text-[#f5f3ee] transition font-sans cursor-pointer"
              >
                <span>{"SEND INQUIRY"}</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Full-Height Apartment Visual Slider with Circular Arrow Buttons */}
          <div className="relative flex-1 h-[70vh] min-h-[500px] w-full max-lg:h-[50vh] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={currentImages[currentSlide] || currentImages[0]}
              alt={categories[activeCategory].name}
              className="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
            />

            {/* Slider Navigation Controls */}
            {currentImages.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-[#f5f3ee] hover:bg-[#ccbf99] hover:text-[#1a2a4a] transition cursor-pointer shadow-lg"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-[#f5f3ee] hover:bg-[#ccbf99] hover:text-[#1a2a4a] transition cursor-pointer shadow-lg"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
