import React, { useState } from 'react';

export default function AmenitiesOptionsSection({ lang, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);

  const amenities = [
    {
      id: 'krovni-park',
      name: 'Krovni park',
      nameEn: 'Rooftop Park',
      kicker: 'ROOFTOP PARK',
      desc: 'A sanctuary crafted for a balanced, active lifestyle. An exclusively landscaped oasis allowing residents to unwind in serene natural beauty above the cityscape.',
      image: '/home/amenities-options/rooftop.webp',
    },
    {
      id: 'teretana',
      name: 'Teretana',
      nameEn: 'Fitness Center',
      kicker: 'FITNESS CENTER',
      desc: 'Two private wellness and fitness suites appointed with premier equipment, providing residents with customized workouts just an elevator ride away.',
      image: '/home/amenities-options/fitness.webp',
    },
    {
      id: 'garaza',
      name: 'Garaža',
      nameEn: 'Underground Garage',
      kicker: 'UNDERGROUND GARAGE',
      desc: 'A three-tiered secure underground parking facility featuring 24/7 video surveillance and dedicated EV charging stations.',
      image: '/home/amenities-options/parking.webp',
    },
    {
      id: 'restoran',
      name: 'Restoran',
      nameEn: 'Panoramic Restaurant',
      kicker: 'PANORAMIC RESTAURANT',
      desc: 'An exclusive rooftop café and dining destination offering sublime culinary creations framed by breathtaking metropolitan vistas.',
      image: '/home/amenities-options/interior.webp',
    },
  ];

  return (
    <section id="AmenitiesOptions">
      <div className="amenities-options-trigger trigger relative flex min-h-screen items-stretch py-20 max-xl:py-15 bg-[#f5f3ee]">
        <div className="amenities-options-reveal-content wrapper relative flex items-end justify-between w-full max-lg:flex-col-reverse">
          
          {/* Left Column: Amenities List and Narrative */}
          <div className="flex h-full w-5/12 flex-col items-start justify-between gap-10 pr-20 max-xl:w-1/2 max-lg:w-full max-lg:pr-0">
            <div className="w-full">
              <div className="list relative border-b border-golden/30 pb-6">
                {/* Active Indicator Bar */}
                <div 
                  className="bg-[#1a2a4a] pointer-events-none absolute -left-4 w-0.5 transition-all duration-300"
                  style={{
                    height: '42px',
                    transform: `translateY(${activeTab * 56}px)`,
                    opacity: 1
                  }}
                />

                {amenities.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className="group relative cursor-pointer overflow-hidden py-2"
                  >
                    <p className={`heading-2 text-golden flex items-center gap-6 pt-2 pb-2 leading-none transition-all duration-300 ${
                      activeTab === idx ? '-translate-y-full' : 'group-hover:-translate-y-full'
                    }`}>
                      {lang === 'sr' ? item.name : item.nameEn}
                    </p>
                    <span className={`heading-2 text-[#1a2a4a] absolute left-0 flex h-full w-full items-center gap-6 italic transition-all duration-300 ${
                      activeTab === idx ? 'top-2' : 'top-[120%] group-hover:top-2'
                    }`}>
                      {lang === 'sr' ? item.name : item.nameEn}
                    </span>
                  </div>
                ))}
              </div>

              {/* Narrative Description for Selected Amenity */}
              <div className="mt-10">
                <p className="kicker uppercase text-golden text-xs tracking-widest font-semibold mb-4">
                  {amenities[activeTab].kicker}
                </p>
                <p className="paragraph text-[#1a2a4a]/90 font-sans text-sm sm:text-base leading-relaxed max-w-lg">
                  {amenities[activeTab].desc}
                </p>
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-4 rounded-full border border-[#1a2a4a] px-8 py-3.5 text-xs uppercase tracking-wider text-[#1a2a4a] hover:bg-[#1a2a4a] hover:text-[#f5f3ee] transition font-sans cursor-pointer"
              >
                <span>{"EXPLORE AMENITIES"}</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Amenity Showcase Image */}
          <div className="relative flex-1 h-[70vh] min-h-[500px] w-full max-lg:h-[50vh] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={amenities[activeTab].image}
              alt={amenities[activeTab].name}
              className="h-full w-full object-cover transition-opacity duration-700 ease-in-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
