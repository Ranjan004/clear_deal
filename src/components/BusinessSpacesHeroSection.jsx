import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BusinessSpacesHeroSection({ lang }) {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const bgRef = useRef(null);
  const videoWrapRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const headingText = "Commercial Plots";
  const paragraphText = "Commercial and retail plots strategically planned along Muradnagar Dasna Main Road and the 25-ft central boulevard. Ideal for shopping complexes, grocery supermarkets, medical clinics, and daily retail serving a vibrant residential catchment.";

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
      .to('.biz-portrait', { yPercent: 12, ease: 'none' }, '<');

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
        '.biz-char',
        { opacity: 0, y: '110%' },
        {
          opacity: 1,
          y: '0%',
          duration: 0.9,
          stagger: 0.025,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 88%',
          },
        }
      );

      // 6. Paragraph word-by-word reveal
      gsap.fromTo(
        '.biz-word',
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
    <section id="BusinessSpaces" ref={containerRef} className="relative z-1 overflow-clip">
      <div
        ref={triggerRef}
        className="trigger relative flex min-h-screen w-full flex-col justify-between overflow-clip py-24 pt-28 max-xl:py-20 max-xl:pt-24 max-lg:pt-24 max-lg:pb-16 max-md:py-16 max-md:pt-24"
      >
        {/* Full-bleed background */}
        <img
          ref={bgRef}
          src="/media/golden_luxury_gate.jpg"
          alt="Commercial Plots"
          className="background absolute top-1/3 h-[calc(100%+35rem)] w-full -translate-y-1/2 object-cover filter brightness-[0.4] pointer-events-none select-none"
          loading="eager"
        />

        {/* Dark overlay for text visibility */}
        <div className="pointer-events-none absolute inset-0 bg-[#0d1424]/75" />

        {/* Top: Large Editorial Title */}
        <div className="wrapper relative z-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8892a]/20 border border-[#b8892a]/40 text-[#e8dfc8] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#b8892a] animate-ping" />
            <span>Highway Frontage & Central Boulevard</span>
          </div>
          <h2
            ref={headingRef}
            className="hero text-cream-dark uppercase font-serif tracking-tight leading-[0.95] text-[6.5rem] max-2xl:text-[5.5rem] max-xl:text-[4.5rem] max-lg:text-[3.5rem] max-md:text-[2.4rem] w-full max-w-4xl"
          >
            <span className="inline-block overflow-hidden">
              {headingText.split(" ").map((word, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
                  {word.split("").map((char, cIdx) => (
                    <span
                      key={cIdx}
                      className="biz-char inline-block will-change-transform"
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Bottom: Left Paragraph + Right Video Card */}
        <div className="wrapper relative z-1 flex items-end justify-between gap-12 max-lg:flex-col max-lg:items-start max-lg:gap-8">
          {/* Paragraph */}
          <div className="w-1/3 max-xl:w-2/5 max-lg:w-full">
            <p
              ref={paragraphRef}
              className="paragraph text-sand font-sans leading-relaxed text-[1.05rem] max-2xl:text-[0.98rem] max-lg:text-[0.95rem] overflow-hidden"
            >
              {paragraphText.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="biz-word inline-block mr-[0.25em] will-change-transform"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Video Card */}
          <div className="w-5/12 max-xl:w-1/2 max-lg:w-3/4 max-md:w-full">
            <div
              ref={videoWrapRef}
              className="videoWrap relative aspect-[1.43/1] w-full overflow-hidden rounded-[1.25rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#ccbf99]/20 bg-[#1F261E]"
            >
              <video
                muted
                loop
                playsInline
                autoPlay
                src="/media/videos/site_tour_1.mp4"
                className="biz-portrait portrait absolute inset-0 h-full w-full object-cover object-center scale-105 will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
