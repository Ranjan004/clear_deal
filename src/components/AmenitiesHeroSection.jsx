import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Compass, Zap, Trees } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AmenitiesHeroSection({ lang }) {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const bgRef = useRef(null);
  const videoWrapRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const amenitiesList = [
    { icon: Shield, title: '24/7 Guarded Security', desc: 'Gated entrance with boom barrier control' },
    { icon: Compass, title: 'Wide Paver Roads', desc: '25ft, 22ft & 20ft interlocking roads' },
    { icon: Zap, title: 'Street Electrification', desc: 'Dedicated electric poles & wiring' },
    { icon: Trees, title: 'Covered Drainage & Greenery', desc: 'Underground lines & vertical garden aesthetics' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Background subtle parallax
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 2. Video Card reveal
      gsap.fromTo(
        videoWrapRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: videoWrapRef.current,
            start: 'top 85%',
          },
        }
      );

      // 3. Heading reveal
      gsap.fromTo(
        '.amen-heading-part',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      // 4. Content reveal
      gsap.fromTo(
        '.amen-feature-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section id="Amenities" ref={containerRef} className="relative z-1 overflow-clip bg-[#0d1424] text-white">
      <div
        ref={triggerRef}
        className="trigger relative flex min-h-[90vh] w-full items-center overflow-clip py-24 max-xl:py-20"
      >
        {/* Full-bleed nature/township background */}
        <img
          ref={bgRef}
          src="/media/golden_luxury_gate.jpg"
          alt="Township Amenities"
          className="background absolute -top-20 left-0 h-[125%] w-full object-cover filter brightness-[0.25] pointer-events-none select-none"
          loading="eager"
        />

        {/* Ambient luxury lighting */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1424]/90 via-[#0d1424]/70 to-[#0d1424]" />
        <div className="pointer-events-none absolute top-1/3 right-1/4 w-96 h-96 bg-[#b8892a]/10 rounded-full blur-[120px]" />

        {/* Main Content Layout Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Header Row: Kicker & Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8892a]/20 border border-[#b8892a]/40 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#b8892a] animate-pulse" />
                <span className="text-[11px] font-mono text-[#e8dfc8] uppercase tracking-wider font-semibold">
                  Township Infrastructure & Amenities
                </span>
              </div>
              <h2
                ref={headingRef}
                className="font-serif uppercase tracking-tight leading-[0.95] text-4xl sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                <span className="amen-heading-part block text-[#b8892a] italic font-serif font-light">
                  Township
                </span>
                <span className="amen-heading-part block text-[#e8dfc8] font-normal">
                  Amenities
                </span>
              </h2>
            </div>

            <div className="lg:max-w-md text-white/80 font-sans text-sm sm:text-base font-light leading-relaxed">
              <p>
                Golden Luxury Homes is a meticulously planned gated plotted township on Muradnagar Dasna Main Road. Built with modern civic infrastructure designed for your dream villa.
              </p>
            </div>
          </div>

          {/* Bottom Row: On-Ground Video + 4 Key Amenities Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 items-center">
            
            {/* Left: Video Showcase of Interlocking Paver Roads */}
            <div className="lg:col-span-5">
              <div
                ref={videoWrapRef}
                className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-2 border-[#b8892a]/30 bg-[#111e36]"
              >
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  src="/media/videos/site_tour_4.mp4"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#b8892a] block font-semibold">
                      ON-GROUND ACTUAL SITE TOUR
                    </span>
                    <span className="text-sm font-serif font-normal">
                      Paved 25ft Roads & Street Poles
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#b8892a]/80 text-[#0d1424] text-[10px] font-mono font-bold uppercase">
                    HD LIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Key Township Feature Points */}
            <div ref={contentRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenitiesList.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="amen-feature-item p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#b8892a]/50 hover:bg-white/[0.07] transition-all backdrop-blur-sm group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#b8892a]/15 border border-[#b8892a]/30 flex items-center justify-center text-[#b8892a] mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-[#e8dfc8] font-normal mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
