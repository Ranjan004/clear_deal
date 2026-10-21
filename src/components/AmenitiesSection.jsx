import React, { useState } from 'react';
import { Dumbbell, Car, Utensils, Sparkles, Check, Play, X } from 'lucide-react';

export default function AmenitiesSection({ lang, t }) {
  const [activeTab, setActiveTab] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const aData = t.Amenities || {};
  const aOptions = t.AmenitiesOptions || {};

  const amenities = [
    {
      id: "fitness",
      icon: Dumbbell,
      name: "Fitness & Wellness Sanctuary",
      tag: "Health & Vitality",
      description: "State-of-the-art cardiovascular and strength training equipment, dedicated yoga studio, Finnish sauna, and private massage suites.",
      image: "/home/amenities-options/fitness.webp",
      perks: [
        '24/7 Resident Access',
        'Finnish Sauna & Steam Room',
        'Private Trainer Corner',
      ]
    },
    {
      id: "garage",
      icon: Car,
      name: "3-Level Underground Garage",
      tag: "Security & Mobility",
      description: "Arrive home without ever circling for parking. Three spacious underground tiers with automated plate recognition, security surveillance, and EV charging bays.",
      image: "/home/amenities-options/parking.webp",
      perks: [
        'Automatic License Plate Entry',
        'High-Speed EV Chargers',
        '24/7 CCTV & Security Access',
      ]
    },
    {
      id: "restaurant",
      icon: Utensils,
      name: "Sky Restaurant & Lounge",
      tag: "Gastronomy & Skyline",
      description: "Positioned on the recessed penthouse floor with sprawling panoramic vistas of New Belgrade. Fine dining and sunset cocktails steps from your door.",
      image: "/home/amenities-options/interior.webp",
      perks: [
        'Panoramic Skyline Vista',
        'Gourmet Menu & Resident Priority',
        'Indoor & Open-Air Terraces',
      ]
    },
  ];

  const current = amenities[activeTab];

  return (
    <section id="amenities" className="relative w-full bg-[#1f261e] text-[#fdfbef] py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/home/amenities/amenities-bg.webp"
          alt="Amenities Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f261e] via-[#1f261e]/80 to-[#1f261e]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#ccbf99] font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{aData.tag || ("AMENITIES & LIFESTYLE")}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#fdfbef] leading-tight">
              {aData.heading || ("Everything You Need at Your Doorstep")}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setVideoModalOpen(true)}
              className="btn-gold !py-3 !px-6 text-xs flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{"Watch Amenities Video"}</span>
            </button>
          </div>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ccbf99] to-[#d8cca8] text-[#1f261e] border-[#ccbf99] shadow-xl'
                    : 'bg-white/5 border-white/10 text-[#fdfbef] hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className={`p-3 rounded-xl ${isActive ? 'bg-[#1f261e] text-[#ccbf99]' : 'bg-white/10 text-[#ccbf99]'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] uppercase tracking-wider block font-medium ${isActive ? 'text-[#1f261e]/70' : 'text-[#ccbf99]'}`}>
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-lg leading-tight">
                    {item.name}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Feature Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-white/15 shadow-2xl">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest text-[#ccbf99] font-medium bg-black/40 px-3 py-1 rounded-full border border-[#ccbf99]/30">
              {current.tag}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#fdfbef] font-light leading-snug">
              {current.name}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#fdfbef]/80 leading-relaxed font-light">
              {current.description}
            </p>

            {/* Perks List */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              {current.perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#fdfbef]/90 font-light">
                  <div className="w-5 h-5 rounded-full bg-[#ccbf99]/20 text-[#ccbf99] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 relative h-72 sm:h-[450px] rounded-2xl overflow-hidden order-1 lg:order-2 group">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>

      {/* Video Modal */}
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
              src="/home/amenities/amenities.mp4"
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
