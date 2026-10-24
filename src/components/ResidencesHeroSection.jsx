import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ResidencesHeroSection({ lang }) {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const bgRef = useRef(null);
  const videoWrapRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const headingText = "Freehold Plots";
  const paragraphText = "Golden Luxury Homes offers legally approved, demarcated freehold residential plots (58 to 195 Sq. Yards) with immediate registry and possession. We design planned township layouts with 25ft & 20ft wide paver roads, street electrification, and boundary infrastructure so you can build your custom dream home.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial positions
      gsap.set(bgRef.current, { yPercent: -50 });

      // 2. Parallax timeline matching the reference site
      gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      })
      .to(bgRef.current, { top: '+=15rem', ease: 'none' })
      .to('.res-portrait', { yPercent: 12, ease: 'none' }, '<');

      // 3. Section entrance wipe reveal
      gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 75%',
        },
      })
      .fromTo(
        triggerRef.current,
        { clipPath: 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'power2.inOut' },
        0
      )
      .fromTo(
        bgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 1.6, ease: 'power2.inOut' },
        0
      );

      // 4. Video card clipPath entrance
      gsap.fromTo(
        videoWrapRef.current,
        { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.1 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.2,
          delay: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: videoWrapRef.current },
        }
      );

      // 5. Heading character-by-character reveal
      gsap.fromTo(
        '.res-char',
        { opacity: 0, y: '110%' },
        {
          opacity: 1,
          y: '0%',
          duration: 0.9,
          stagger: 0.035,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 88%',
          },
        }
      );

      // 6. Paragraph word-by-word reveal
      gsap.fromTo(
        '.res-word',
        { opacity: 0, y: '110%' },
        {
          opacity: 1,
          y: '0%',
          duration: 0.8,
          stagger: 0.025,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 88%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <section id="Residences" ref={containerRef} className="relative z-1 overflow-clip">
      <div
        ref={triggerRef}
        className="trigger relative flex min-h-screen w-full flex-col justify-between overflow-clip pb-16 pt-28 max-2xl:pb-12 max-2xl:pt-24 max-lg:pt-24 max-md:gap-12 max-md:pb-10 max-md:pt-24"
      >
        {/* Full-bleed sculptural background with seamless vertical headroom */}
        <img
          ref={bgRef}
          src="/media/videos/thumb_1.jpg"
          alt="Golden Luxury Homes Plotted Township"
          className="background absolute top-1/3 h-[calc(100%+35rem)] w-full -translate-y-1/2 object-cover object-top max-2xl:object-[50%_65%] pointer-events-none select-none filter brightness-75"
          loading="eager"
        />

        {/* Dark overlay for text visibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111e36]/70 via-[#111e36]/40 to-[#111e36]/80" />

        {/* Top Floating Video Showcase */}
        <div className="wrapper relative z-1 flex items-stretch max-md:justify-end">
          <div className="w-1/12 max-2xl:hidden"></div>
          <div className="w-1/3 max-2xl:w-2/5 max-lg:w-3/5 max-md:w-5/6">
            <div
              ref={videoWrapRef}
              className="videoWrap relative aspect-[1.43/1] w-full overflow-hidden rounded-[1.25rem] shadow-[0_25px_50px_-12px_rgba(47,58,38,0.25)] border border-[#a68150]/30 bg-[#0d1424]"
            >
              <video
                muted
                loop
                playsInline
                autoPlay
                src="/media/videos/site_tour_3.mp4"
                className="res-portrait portrait absolute inset-0 h-full w-full object-cover object-center scale-105 will-change-transform"
              />
              <div className="absolute bottom-2 left-3 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white font-mono uppercase">
                Paved Roads & Electric Poles
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Headline & Description Bar */}
        <div className="wrapper relative z-1 flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start max-lg:gap-6">
          <div className="w-7/12 max-2xl:w-3/5 max-lg:w-full">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b8892a] font-bold block mb-3 font-sans">
              DEMARCATED TOWNSHIP RESIDENTIAL LAND
            </span>
            <h2
              ref={headingRef}
              className="hero text-golden uppercase font-serif tracking-tight leading-none text-[7.5rem] max-2xl:text-[6.2rem] max-xl:text-[5rem] max-lg:text-[3.8rem] max-md:text-[2.8rem]"
            >
              <span className="inline-block overflow-hidden">
                {headingText.split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
                    {word.split("").map((char, cIdx) => (
                      <span
                        key={cIdx}
                        className="res-char inline-block will-change-transform"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          <div className="w-2/7 max-2xl:w-2/5 max-lg:w-full">
            <p
              ref={paragraphRef}
              className="paragraph text-golden font-sans leading-relaxed text-[1.05rem] max-2xl:text-[0.98rem] max-lg:text-[0.95rem] overflow-hidden"
            >
              {paragraphText.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="res-word inline-block mr-[0.25em] will-change-transform"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
