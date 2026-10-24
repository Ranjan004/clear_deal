import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Download, ExternalLink, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection({ lang }) {
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const headingRef = useRef(null);

  const paragraphText = "Strategically located on Muradnagar Dasna Main Road in Kallu Garhi, Ghaziabad NCR, Golden Luxury Homes offers unmatched connectivity right beside the Eastern Peripheral Expressway and Delhi-Meerut Expressway. Surrounded by reputed institutions like DPSG International Public School and upcoming RRTS corridors, enjoy seamless travel to Central Delhi, Noida, and Greater Noida.";

  const headingText = "Location";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on background and video card
      gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
        },
      })
      .to(".loc-bg-img", { top: "+=15rem", ease: "power1.inOut" })
      .to(".loc-portrait", { top: "+=8rem", ease: "power1.inOut" }, "<");

      // Character-by-character fade up for heading
      gsap.fromTo(
        ".loc-char",
        { opacity: 0, y: "110%" },
        {
          opacity: 1,
          y: "0%",
          duration: 0.9,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section id="Location" ref={containerRef} className="relative z-1 overflow-clip">
      <div className="trigger relative flex min-h-screen w-full items-stretch overflow-clip pt-24 pb-20">
        
        {/* Full-bleed background image featuring Ghaziabad Master Plan map with dark luxury overlay */}
        <img
          src="/media/ghaziabad_master_plan_2031.png"
          alt="Ghaziabad Master Plan 2031"
          style={{ translate: 'none' }}
          className="loc-bg-img absolute top-1/4 h-[calc(100%+30rem)] w-full object-cover object-center filter brightness-[0.35] contrast-125"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#0d1424]/85"></div>

        <div className="wrapper relative z-1 flex items-stretch max-lg:flex-col w-full justify-between gap-12">
          
          {/* Left column: Video card + Ghaziabad Master Plan 2031 Badge */}
          <div className="w-full lg:w-5/12 pt-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8892a]/20 border border-[#b8892a]/30 text-[#e8dfc8] text-xs font-semibold uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-[#b8892a]" />
                GIS Master Plan 2031 Ghaziabad
              </div>

              {/* Video card playing the real drone video */}
              <div className="videoWrap relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] border border-[#b8892a]/30 shadow-2xl bg-black group">
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  src="/media/videos/site_tour_2.mp4"
                  className="loc-portrait w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-[#e8dfc8] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b8892a]" />
                    Kallu Garhi Expressway Junction
                  </span>
                  <span className="bg-[#b8892a] text-[#111e36] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Drone View
                  </span>
                </div>
              </div>
            </div>

            {/* Master Plan 2031 Download Card */}
            <div className="mt-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-base text-[#e8dfc8] font-normal">
                  Ghaziabad Master Plan 2031 (Draft)
                </p>
                <p className="text-xs text-white/70">
                  Town & Country Planning Dept. UP Govt. approved corridor
                </p>
              </div>
              <a
                href="/media/pdf/ghaziabad_master_plan_2031.pdf"
                download="Ghaziabad_Master_Plan_2031.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#b8892a] text-[#111e36] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors shrink-0 shadow"
              >
                <Download className="w-3.5 h-3.5" />
                Download Map PDF
              </a>
            </div>
          </div>

          {/* Right column: Paragraph + Large Section Heading */}
          <div className="flex w-full lg:w-6/12 flex-col items-start lg:items-end justify-between py-10 max-lg:pt-6">
            <div className="w-full lg:w-10/12 space-y-6">
              <p ref={paragraphRef} className="paragraph text-[#e8dfc8] text-base sm:text-lg leading-relaxed font-sans">
                {paragraphText}
              </p>

              {/* Bullet Points with verified distances */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/15 text-xs text-white/80">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#b8892a] font-bold text-sm">1 - 2 Mins</p>
                  <p className="text-white/70 mt-0.5">Eastern Peripheral Expressway</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#b8892a] font-bold text-sm">3 - 5 Mins</p>
                  <p className="text-white/70 mt-0.5">Delhi–Meerut Expressway (NH-09)</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#b8892a] font-bold text-sm">Walking Dist.</p>
                  <p className="text-white/70 mt-0.5">DPSG Int'l Public School</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#b8892a] font-bold text-sm">8 - 10 Mins</p>
                  <p className="text-white/70 mt-0.5">Duhai RRTS Rapid Rail Station</p>
                </div>
              </div>
            </div>

            <h2
              ref={headingRef}
              className="hero text-[#f5f3ee] uppercase font-serif text-[6rem] max-xl:text-[5rem] max-lg:text-[3.8rem] max-md:text-[2.8rem] leading-none mt-8"
            >
              <span className="inline-block whitespace-nowrap">
                {headingText.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="loc-char inline-block will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
