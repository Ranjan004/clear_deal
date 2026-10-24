import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Compass, ShieldCheck, Eye, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalAerialSection({ lang }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [activeLayer, setActiveLayer] = useState('aerial'); // 'aerial' | 'cad' | 'masterplan'

  const layers = {
    aerial: {
      src: '/media/township_aerial_panorama.jpg',
      alt: 'Golden Luxury Homes Aerial Drone Panorama',
      label: 'Township Aerial View',
      caption: 'Direct Highway Frontage & 155 Demarcated Plots',
    },
    cad: {
      src: '/media/golden_luxury_layout.png',
      alt: '155 Plots Approved CAD Layout',
      label: '155-Plot CAD Layout',
      caption: 'Detailed Sector Map (58 to 195 Sq. Yd. Plots & 25ft Roads)',
    },
    masterplan: {
      src: '/media/ghaziabad_master_plan_2031.png',
      alt: 'Ghaziabad Master Plan 2031 Connectivity',
      label: 'Ghaziabad 2031 Plan',
      caption: 'Regional Connectivity & Expressway Corridor',
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth subtle zoom and pan on scroll
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 1.08, y: 30 },
        {
          scale: 1,
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Horizontal" ref={sectionRef} className="relative z-1 overflow-clip bg-[#0d1424] text-white py-20 lg:py-28 border-t border-[#b8892a]/20">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#b8892a]/10 rounded-full blur-[160px] pointer-events-none" />

      <div ref={triggerRef} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header: Centered & High Contrast */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b8892a]/20 border border-[#b8892a]/40 mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#b8892a] animate-pulse" />
            <span className="text-[11px] font-mono text-[#e8dfc8] uppercase tracking-widest font-semibold">
              BIRD'S-EYE PERSPECTIVE • GOLDEN LUXURY HOMES
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight">
            Aerial & Master Layout Perspective
          </h2>
          
          <p className="mt-3 text-white/75 font-sans text-sm sm:text-base max-w-2xl font-light">
            Explore Golden Luxury Homes from above — strategically positioned directly on the Muradnagar Dasna Highway with 155 demarcated plots, paved roads, and lush natural surroundings.
          </p>

          {/* Layer Selector Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {Object.entries(layers).map(([key, data]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveLayer(key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  activeLayer === key
                    ? 'bg-[#b8892a] text-[#0d1424] font-bold shadow-lg shadow-[#b8892a]/30 scale-102'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {key === 'aerial' && <Eye className="w-4 h-4" />}
                {key === 'cad' && <Compass className="w-4 h-4" />}
                {key === 'masterplan' && <Layers className="w-4 h-4" />}
                <span>{data.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Panoramic Viewer Window */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] border-2 border-[#b8892a]/40 bg-[#111e36]">
          
          {/* Main Panorama Image */}
          <div ref={imageContainerRef} className="relative aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
            <img
              src={layers[activeLayer].src}
              alt={layers[activeLayer].alt}
              className="w-full h-full object-cover transition-all duration-500 will-change-transform"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/90 via-transparent to-black/30 pointer-events-none" />

            {/* In-view Hotspot Badges (only on Aerial view) */}
            {activeLayer === 'aerial' && (
              <>
                {/* Highway Frontage Marker */}
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 pointer-events-auto">
                  <div className="px-4 py-2.5 rounded-2xl bg-[#0d1424]/90 border border-[#b8892a] shadow-2xl backdrop-blur-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8892a]/20 flex items-center justify-center text-[#b8892a]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-[#b8892a] block tracking-widest font-mono">
                        HIGHWAY FRONTAGE
                      </span>
                      <span className="font-serif text-sm sm:text-base text-white font-normal">
                        Muradnagar Dasna Main Road
                      </span>
                    </div>
                  </div>
                </div>

                {/* 155 Plots Marker */}
                <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20 pointer-events-auto">
                  <div className="px-4 py-2.5 rounded-2xl bg-[#0d1424]/90 border border-[#b8892a] shadow-2xl backdrop-blur-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8892a]/20 flex items-center justify-center text-[#b8892a]">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-[#b8892a] block tracking-widest font-mono">
                        SECTOR 1 • PLANNED TOWNSHIP
                      </span>
                      <span className="font-serif text-sm sm:text-base text-white font-normal">
                        155 Demarcated Plots (58 - 195 Sq. Yd.)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Grand Entrance Arch Marker */}
                <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 pointer-events-auto hidden sm:block">
                  <div className="px-4 py-2.5 rounded-2xl bg-[#0d1424]/90 border border-[#b8892a] shadow-2xl backdrop-blur-md flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8892a]/20 flex items-center justify-center text-[#b8892a]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-[#b8892a] block tracking-widest font-mono">
                        GATED SECURITY
                      </span>
                      <span className="font-serif text-sm sm:text-base text-white font-normal">
                        24/7 Guarded Boom Barrier
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Bottom Information Footer Bar */}
          <div className="p-4 sm:p-5 bg-[#0d1424] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#b8892a]" />
              <p className="font-serif text-base sm:text-lg text-[#e8dfc8]">
                {layers[activeLayer].caption}
              </p>
            </div>
            
            <a
              href="#MasterPlan"
              className="px-5 py-2 rounded-full bg-[#b8892a]/20 hover:bg-[#b8892a] text-[#b8892a] hover:text-[#0d1424] border border-[#b8892a]/40 text-xs font-mono uppercase tracking-wider font-bold transition-all"
            >
              Inspect High-Res CAD &rarr;
            </a>
          </div>

        </div>

        {/* 3 Metric Summary Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#b8892a] block">155</span>
            <span className="text-[11px] font-mono text-white/70 uppercase">Approved Plots</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#b8892a] block">20,972</span>
            <span className="text-[11px] font-mono text-white/70 uppercase">Total Sq. Yards</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#b8892a] block">25 Ft</span>
            <span className="text-[11px] font-mono text-white/70 uppercase">Main Sector Roads</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#b8892a] block">Freehold</span>
            <span className="text-[11px] font-mono text-white/70 uppercase">Immediate Registry</span>
          </div>
        </div>

      </div>

    </section>
  );
}
