import React, { useState } from 'react';
import { Briefcase, Building, Store, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function BusinessSpacesSection({ lang, t, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('offices');
  const bData = t.BusinessSpaces || {};
  const bOptions = t.BusinessSpacesOptions || {};

  return (
    <section id="business" className="relative w-full bg-[#1f261e] text-[#fdfbef] py-24 sm:py-32 px-6 sm:px-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video
          src="/home/business/business.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f261e] via-[#1f261e]/70 to-[#1f261e]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 border-b border-white/10 pb-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#ccbf99] font-medium flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>BUSINESS & RETAIL</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#fdfbef] leading-tight">
              {bData.heading || ("Commercial & Retail Spaces")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-sm sm:text-base text-[#fdfbef]/80 leading-relaxed font-light">
              {bData.paragraph || ("Engineered to elevate corporate prestige. Flexible floor plates, energy-efficient building systems, and high-visibility street-level retail frontage.")}
            </p>
          </div>
        </div>

        {/* Interactive Workspace / Retail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          
          {/* Left Visual Preview */}
          <div className="lg:col-span-6 relative h-72 sm:h-[420px] rounded-2xl overflow-hidden group">
            <img
              src="/home/business/business.webp"
              alt="ClearDeal Property Business Spaces"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs text-[#ccbf99] tracking-wider uppercase font-medium block mb-1">
                Class A Business Hub
              </span>
              <h3 className="font-serif text-2xl text-white font-light">
                Bulevar heroja sa Košara
              </h3>
            </div>
          </div>

          {/* Right Information & Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:pl-4">
            
            {/* Tab switchers */}
            <div className="flex gap-2 p-1 bg-black/40 rounded-full border border-white/10 w-fit">
              <button
                onClick={() => setActiveTab('offices')}
                className={`text-xs px-5 py-2 rounded-full transition-all cursor-pointer font-sans flex items-center gap-2 ${
                  activeTab === 'offices'
                    ? 'bg-[#ccbf99] text-[#1f261e] font-semibold shadow'
                    : 'text-[#fdfbef]/70 hover:text-white'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>{"Offices"}</span>
              </button>
              <button
                onClick={() => setActiveTab('retail')}
                className={`text-xs px-5 py-2 rounded-full transition-all cursor-pointer font-sans flex items-center gap-2 ${
                  activeTab === 'retail'
                    ? 'bg-[#ccbf99] text-[#1f261e] font-semibold shadow'
                    : 'text-[#fdfbef]/70 hover:text-white'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>{"Retail Spaces"}</span>
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'offices' ? (
              <div className="space-y-4 animate-fade-in">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fdfbef]">
                  {"Customizable Open-Plan Workspaces"}
                </h3>
                <p className="text-sm text-[#fdfbef]/75 leading-relaxed font-light">
                  {'From 120m² boutique suites to full 1,200m² floors. 3.2m clear ceiling heights, optical fiber redundancy, high-volume fresh air ventilation, and designated VIP parking.'}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Fiber Optic Ready',
                    'Automated BMS Climate',
                    'Dedicated Executive Lobby',
                    'EV Charging Garage',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#ccbf99]">
                      <CheckCircle className="w-4 h-4 shrink-0 text-[#ccbf99]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fdfbef]">
                  {"Prime Ground-Floor Retail Visibility"}
                </h3>
                <p className="text-sm text-[#fdfbef]/75 leading-relaxed font-light">
                  {'Direct boulevard street-front access, floor-to-ceiling glass display windows, and pre-installed grease traps and ventilation for restaurants, boutiques, or medical practices.'}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    'Direct Street Entrance',
                    'Full Storefront Glazing',
                    'Outdoor Terrace Option',
                    'Dedicated Delivery Bay',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#ccbf99]">
                      <CheckCircle className="w-4 h-4 shrink-0 text-[#ccbf99]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inquiry Trigger */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={onOpenInquiry}
                className="btn-gold !py-3 !px-6 text-xs flex items-center justify-between w-full sm:w-auto gap-4"
              >
                <span>{bOptions.cta || ('Request Commercial Prospectus')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
