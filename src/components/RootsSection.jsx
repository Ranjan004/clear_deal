import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function RootsSection({ lang, onOpenInquiry }) {
  const containerRef = useRef(null);
  const visual1Ref = useRef(null);
  const visual2Ref = useRef(null);
  const visual3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax drifting of visual cards during scroll
      gsap.to(visual3Ref.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(visual2Ref.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(visual1Ref.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Roots" ref={containerRef} className="bg-[#0d1424] text-white relative z-1 min-h-screen overflow-clip py-28 max-xl:py-20 border-t border-[#b8892a]/20">
      
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#b8892a]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1a2a4a]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="wrapper relative z-10">
        
        {/* Kicker Tag */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#b8892a] animate-ping" />
          <p className="kicker uppercase text-[#b8892a] text-xs tracking-[0.25em] font-bold font-sans">
            Independent Living • Freehold Land Ownership
          </p>
        </div>

        {/* Main Grid: Left Narrative + Right Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[600px]">
          
          {/* Left Column: Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 z-20">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#e8dfc8]/70 font-mono block mb-3">
                Your Land • Your Vision
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#e8dfc8] leading-[1.2] font-light">
                At Golden Luxury Homes, every freehold plot gives you{' '}
                <span className="italic font-normal text-[#b8892a]">
                  complete freedom
                </span>{' '}
                to build your bespoke dream villa on your own terms.
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-white/75 font-light leading-relaxed">
              Backed by our precision 155-plot CAD layout, 25ft & 20ft wide interlocking paver roads, pre-installed street electrification, covered drainage, and immediate mutation (dakhil kharij) registry.
            </p>

            {/* Plot Highlights Pill */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#b8892a] font-bold block">
                  Plot Sizes
                </span>
                <span className="font-serif text-lg text-white font-normal">
                  58 to 195 Sq. Yd.
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#b8892a] font-bold block">
                  Road Widths
                </span>
                <span className="font-serif text-lg text-white font-normal">
                  25ft, 22ft & 20ft
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#MasterPlan"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#b8892a] text-[#0d1424] hover:bg-white transition-all text-xs font-bold uppercase tracking-wider shadow-2xl cursor-pointer group"
              >
                <span>Explore 155 Plots CAD Layout</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Layered Visuals (7 cols) - CAD Map + Entrance Gate + Video */}
          <div className="lg:col-span-7 relative h-[480px] sm:h-[560px] w-full flex items-center justify-center">
            
            {/* Visual 1: Large CAD Layout Model (Backdrop layer) */}
            <div
              ref={visual1Ref}
              className="absolute left-0 top-4 w-[75%] sm:w-[68%] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#b8892a]/30 bg-[#111e36] z-10 will-change-transform"
            >
              <img
                src="/media/golden_luxury_layout.png"
                alt="Golden Luxury Homes CAD Layout"
                className="w-full h-56 sm:h-72 object-cover filter brightness-90 hover:brightness-100 transition-all"
              />
              <div className="p-3 bg-[#0d1424] border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#b8892a]" />
                  <span className="text-[10px] font-mono text-[#e8dfc8] uppercase font-bold">155 Plots Model</span>
                </div>
                <span className="text-[9px] font-mono text-[#b8892a] bg-[#b8892a]/20 px-2 py-0.5 rounded font-semibold">
                  CAD APPROVED
                </span>
              </div>
            </div>

            {/* Visual 2: Grand Entrance Gate Render (Front prominent layer) */}
            <div
              ref={visual2Ref}
              className="absolute right-0 bottom-4 w-[65%] sm:w-[58%] rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-2 border-[#b8892a] bg-[#0d1424] z-20 will-change-transform"
            >
              <img
                src="/media/golden_luxury_gate.jpg"
                alt="Golden Luxury Homes Gate"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-3 bg-[#111e36] border-t border-[#b8892a]/30 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#b8892a] font-bold block">
                    GRAND ENTRANCE ARCH
                  </span>
                  <span className="text-xs font-serif text-white">24/7 Gated Security</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#b8892a]" />
              </div>
            </div>

            {/* Visual 3: Floating Real On-Ground Video Pill (Top Right floating accent) */}
            <div
              ref={visual3Ref}
              className="absolute right-4 top-0 w-44 sm:w-52 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-30 will-change-transform bg-black hidden sm:block"
            >
              <video
                muted
                loop
                playsInline
                autoPlay
                src="/media/videos/site_tour_3.mp4"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1.5 left-2 bg-black/70 px-2 py-0.5 rounded text-[8px] font-mono text-white uppercase">
                Paved Roads & Electric Poles
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
