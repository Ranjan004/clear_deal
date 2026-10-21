import React, { useState } from 'react';
import { Play, Maximize2, Check, ArrowRight, Bed, Layers, Compass, X } from 'lucide-react';

export default function ResidencesSection({ lang, t, onOpenInquiry }) {
  const [selectedType, setSelectedType] = useState('all');
  const [activePlanModal, setActivePlanModal] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const resData = t.Residence || {};
  const options = t.ResidenceOptions || {};

  // Authentic units catalog
  const units = [
    {
      id: "A-201",
      name: "One-Bedroom Unit A-201",
      type: "two-room",
      typeLabel: "One-Bedroom",
      area: "54.8",
      floor: "2",
      bedrooms: "1",
      orientation: "South-West",
      image: "/home/residences-options/1.webp",
      highlight: "Spacious balcony overlooking private courtyard",
    },
    {
      id: "B-405",
      name: "Two-Bedroom Unit B-405",
      type: "three-room",
      typeLabel: "Two-Bedroom",
      area: "82.4",
      floor: "4",
      bedrooms: "2",
      orientation: "South-East",
      image: "/home/residences-options/2.webp",
      highlight: "Dual aspect with master ensuite and walk-in wardrobe",
    },
    {
      id: "A-502",
      name: "Studio Apartment A-502",
      type: "studio",
      typeLabel: "Studio",
      area: "36.5",
      floor: "5",
      bedrooms: "Studio",
      orientation: "West",
      image: "/home/residences-options/3.webp",
      highlight: "Maximized footprint efficiency with floor-to-ceiling windows",
    },
    {
      id: "B-601",
      name: "Three-Bedroom Family B-601",
      type: "four-room",
      typeLabel: "Three-Bedroom",
      area: "118.2",
      floor: "6",
      bedrooms: "3",
      orientation: "South",
      image: "/home/residences-options/5.webp",
      highlight: "Grand family terrace, dual bathrooms and separate utility room",
    },
    {
      id: "PH-801",
      name: "Penthouse Residence PH-801",
      type: "penthouse",
      typeLabel: "Penthouse",
      area: "186.0",
      floor: "8 (Povučeni sprat)",
      bedrooms: "4",
      orientation: "Panoramic 360°",
      image: "/home/residences-options/11.webp",
      highlight: "Private elevator access, 65m² sky terrace and panoramic city views",
    },
    {
      id: "A-304",
      name: "One-Bedroom Unit A-304",
      type: "two-room",
      typeLabel: "One-Bedroom",
      area: "59.2",
      floor: "3",
      bedrooms: "1",
      orientation: "East",
      image: "/home/residences-options/6.webp",
      highlight: "Morning sun, open-plan gourmet kitchen and built-in closet",
    },
  ];

  const filteredUnits = selectedType === 'all' 
    ? units 
    : units.filter(u => u.type === selectedType);

  return (
    <section id="residences" className="relative w-full bg-[#fdfbef] py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Architectural Visual Header */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl border border-[#2f3a26]/10">
          <img
            src="/home/residences/residences-hero.webp"
            alt="ClearDeal Property Residences"
            className="w-full h-[400px] sm:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f261e]/90 via-[#1f261e]/40 to-transparent flex flex-col justify-end p-8 sm:p-14 text-[#fdfbef]">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#ccbf99] font-medium block">
                {options.tag || ("PREMIUM LIVING")}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#fdfbef] leading-tight">
                {resData.heading || ("Residential Collection")}
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#fdfbef]/85 max-w-2xl font-light leading-relaxed">
                {resData.paragraph || ("From meticulously calibrated studios to expansive sky penthouses overlooking New Belgrade. Every home integrates genuine natural finishes and intelligent spatial layouts.")}
              </p>
              
              {/* Virtual Interior Tour Button */}
              <div className="pt-2">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="btn-gold !py-3 !px-6 text-xs flex items-center gap-2.5 shadow-xl"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{"Watch Interior Virtual Tour"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#2f3a26]/10">
          <div>
            <h3 className="font-serif text-2xl text-[#2f3a26] font-light">
              {"Select Your Ideal Floor Plan"}
            </h3>
            <p className="text-xs text-[#737373] font-sans">
              {options.unitsAvailable || ('Available units in Phase 1')}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Units' },
              { id: 'studio', label: 'Studios' },
              { id: 'two-room', label: '1-Bedroom' },
              { id: 'three-room', label: '2-Bedroom' },
              { id: 'four-room', label: '3-Bedroom' },
              { id: 'penthouse', label: 'Penthouse' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`text-xs px-4 py-2 rounded-full transition-all cursor-pointer font-sans ${
                  selectedType === tab.id
                    ? 'bg-[#2f3a26] text-[#fdfbef] font-medium shadow-md'
                    : 'bg-[#e9e5dc]/60 text-[#2f3a26]/70 hover:bg-[#e9e5dc] hover:text-[#2f3a26]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#2f3a26]/10 hover:border-[#ccbf99] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Floorplan Preview with Zoom Trigger */}
              <div 
                onClick={() => setActivePlanModal(unit)}
                className="relative h-64 p-6 bg-[#faf8f0] flex items-center justify-center cursor-pointer overflow-hidden border-b border-[#2f3a26]/5"
              >
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2f3a26] text-[#ccbf99] text-[11px] font-medium tracking-wider uppercase font-sans">
                  {unit.typeLabel}
                </span>
                <span className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-[#2f3a26] opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Unit Specifications */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase tracking-widest text-[#737373] font-medium">
                      {unit.id}
                    </span>
                    <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                      {"Available"}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-[#2f3a26] font-normal">
                    {unit.name}
                  </h4>
                  <p className="text-xs text-[#595858] font-sans mt-2 line-clamp-2">
                    {unit.highlight}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#2f3a26]/10 text-center">
                  <div>
                    <span className="font-serif text-lg text-[#2f3a26] block">{unit.area}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] font-sans">m²</span>
                  </div>
                  <div>
                    <span className="font-serif text-lg text-[#2f3a26] block">{unit.floor}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] font-sans">{"Floor"}</span>
                  </div>
                  <div>
                    <span className="font-serif text-lg text-[#2f3a26] block">{unit.bedrooms}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] font-sans">{"Rooms"}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setActivePlanModal(unit)}
                    className="flex-1 text-xs py-2.5 px-4 rounded-full border border-[#2f3a26]/30 text-[#2f3a26] hover:bg-[#2f3a26] hover:text-[#fdfbef] transition-colors font-medium cursor-pointer"
                  >
                    {"Floor Plan"}
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="flex-1 text-xs py-2.5 px-4 rounded-full bg-[#ccbf99] text-[#2f3a26] hover:bg-[#2f3a26] hover:text-white transition-colors font-medium cursor-pointer"
                  >
                    {options.cta || ('Inquire')}
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Plan Detail Modal */}
      {activePlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#fdfbef] rounded-3xl overflow-hidden border border-[#ccbf99]/40 shadow-2xl flex flex-col md:flex-row">
            
            {/* Close button */}
            <button
              onClick={() => setActivePlanModal(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#2f3a26] text-white hover:bg-[#ccbf99] hover:text-[#1f261e] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Plan Image */}
            <div className="md:w-3/5 p-8 bg-[#faf8f0] flex items-center justify-center border-b md:border-b-0 md:border-r border-[#2f3a26]/10">
              <img
                src={activePlanModal.image}
                alt={activePlanModal.name}
                className="max-h-[60vh] max-w-full object-contain"
              />
            </div>

            {/* Info and Booking */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ccbf99] font-semibold block mb-1">
                  {activePlanModal.typeLabel}
                </span>
                <h3 className="font-serif text-3xl text-[#2f3a26] font-normal mb-2">
                  {activePlanModal.name}
                </h3>
                <p className="text-sm text-[#595858] font-sans">
                  {activePlanModal.highlight}
                </p>
              </div>

              <div className="space-y-3 py-4 border-y border-[#2f3a26]/10 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#737373]">{"Total Area:"}</span>
                  <span className="font-medium text-[#2f3a26]">{activePlanModal.area} m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737373]">{"Floor Level:"}</span>
                  <span className="font-medium text-[#2f3a26]">{activePlanModal.floor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737373]">{"Orientation:"}</span>
                  <span className="font-medium text-[#2f3a26]">{activePlanModal.orientation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737373]">{"HVAC:"}</span>
                  <span className="font-medium text-[#2f3a26]">VRF Multi-Split + Smart</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setActivePlanModal(null);
                    onOpenInquiry();
                  }}
                  className="btn-gold !w-full !py-3 text-xs"
                >
                  {"Request Official Pricing & Brochure"}
                </button>
                <p className="text-[11px] text-[#737373] text-center font-sans">
                  {"Sales team response within 24h"}
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Interior Tour Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden border border-[#ccbf99]/40 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#ccbf99] hover:text-[#1f261e] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src="/home/residences/interior.mp4"
              controls
              autoPlay
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
