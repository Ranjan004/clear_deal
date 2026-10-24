import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function InstallmentPlanSection({ lang, onOpenInquiry }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const stages = [
    { percent: '10%', label: 'Booking Token & Plot Number Allotment (Plot 1 - 155)' },
    { percent: '25%', label: 'Agreement to Sell & Complete Legal Title Verification' },
    { percent: '35%', label: 'Site Demarcation & Infrastructure Handover (Roads & Electricity)' },
    { percent: '30%', label: 'Sub-Registrar Registry, Dakhil Kharij & Immediate Possession' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Installment" ref={sectionRef} className="relative z-1 border-t border-[#b8892a]/20">
      <div className="installment-trigger trigger relative flex min-h-screen items-stretch overflow-clip max-md:min-h-auto max-md:flex-col">
        
        {/* Left Side: 55vw Layout Blueprint Visual */}
        <div className="installment-reveal-image absolute top-0 left-0 z-0 h-full w-[55vw] max-xl:w-1/2 max-lg:w-full max-md:relative max-md:h-auto max-md:w-full bg-[#0d1424]">
          <div className="relative h-full w-full max-md:h-[34rem] flex items-center justify-center p-6 sm:p-12">
            <div className="reveal-image-zoom relative h-full w-full overflow-hidden rounded-2xl border border-[#b8892a]/30 shadow-2xl flex items-center justify-center bg-[#070b14]">
              <img
                ref={imageRef}
                src="/media/golden_luxury_layout.png"
                alt="Golden Luxury Homes Layout Plan"
                loading="lazy"
                decoding="async"
                className="installment-parallax h-full w-full object-contain p-2"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1 rounded text-white text-xs font-mono">
                Approved 155 Plotted Township Model
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Background: 45vw Luxury Radial Gradient */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[45vw] bg-[radial-gradient(at_right_bottom,#1a3060,#111e36)] max-xl:w-1/2 max-lg:hidden"></div>

        {/* Content Box Overlaid on the Right */}
        <div className="installment-reveal-content relative z-1 flex w-full justify-end max-lg:px-10 max-md:px-4">
          <div className="wrapper flex justify-end py-20 max-xl:py-15 max-lg:px-0 max-lg:py-15 w-full">
            <div className="flex w-5/12 flex-col max-xl:w-1/2 max-lg:mt-120 max-lg:w-full max-lg:rounded-2xl max-lg:bg-[radial-gradient(at_right_bottom,#1a3060,#111e36)] max-lg:px-8 max-lg:py-8 max-md:mt-0">
              <div className="flex h-full flex-col justify-between gap-12 pl-10 max-xl:pl-12 max-lg:relative max-lg:pl-0 max-md:gap-4">
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#b8892a] font-bold block mb-2">
                      TRANSPARENT OWNERSHIP SCHEDULE
                    </span>
                    <p className="heading-2 text-white font-serif text-3xl sm:text-4xl">
                      Plot Payment & Registry Plan
                    </p>
                    <p className="text-xs text-white/70 font-sans mt-2">
                      Zero hidden charges. Clear freehold ownership with immediate registry and possession. Flexible EMI and customized installment plans available.
                    </p>
                  </div>

                  <ul className="divide-white/20 divide-y">
                    {stages.map((st, i) => (
                      <li key={i} className="py-4 flex items-center justify-start gap-4">
                        <p className="heading-2 text-[#b8892a] translate-y-0 whitespace-nowrap font-serif text-2xl sm:text-3xl font-semibold">
                          {st.percent}
                        </p>
                        <p className="detail text-white/90 font-sans text-xs sm:text-sm">
                          {st.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Button */}
                <div className="mt-auto pt-6">
                  <button 
                    type="button"
                    onClick={onOpenInquiry}
                    className="w-full py-4 rounded-full bg-[#b8892a] text-[#111e36] hover:bg-white transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Registry & Installment Details</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
