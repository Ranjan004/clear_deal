import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AmenitiesHeroSection({ lang }) {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const bgRef = useRef(null);
  const videoWrapRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const headingText = "Amenities";
  const paragraphText = "ClearDeal Property is far more than a dwelling. Within the complex are two private fitness suites, two exclusive rooftop parks crafted for residents and guests, alongside a panoramic rooftop café-restaurant. Meticulously curated amenities afford an oasis of serenity to retreat from the metropolis while remaining in its core.";

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
      .to('.amen-portrait', { yPercent: 12, ease: 'none' }, '<');

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
        '.amen-char',
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
        '.amen-word',
        { opacity: 0, y: '110%' },
        {
          opacity: 1,
          y: '0%',
          duration: 0.8,
          stagger: 0.02,
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
    <section id="Amenities" ref={containerRef} className="relative z-1 overflow-clip">
      <div
        ref={triggerRef}
        className="trigger relative flex min-h-screen w-full items-stretch overflow-clip py-24 pt-28 max-xl:py-20 max-xl:pt-24 max-lg:pt-24 max-lg:pb-16 max-md:py-16 max-md:pt-24"
      >
        {/* Full-bleed nature background */}
        <img
          ref={bgRef}
          src="/home/amenities/amenities-bg.webp"
          alt="Amenities"
          className="background absolute top-1/3 h-[calc(100%+35rem)] w-full -translate-y-1/2 object-cover max-md:object-[60%_50%] pointer-events-none select-none"
          loading="eager"
        />

        {/* Dark overlay for text visibility */}
        <div className="pointer-events-none absolute inset-0 bg-[#111e36]/65" />

        {/* Content Layout */}
        <div className="wrapper relative z-1 flex items-stretch justify-between w-full max-lg:flex-col-reverse">
          {/* Left Column: Video card + Paragraph */}
          <div className="flex w-1/3 flex-col items-start justify-between max-xl:w-2/5 max-lg:w-3/4 max-md:w-full gap-8">
            <div
              ref={videoWrapRef}
              className="videoWrap relative aspect-[1.43/1] w-full overflow-hidden rounded-[1.25rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#ccbf99]/20 bg-[#1F261E]"
            >
              <video
                muted
                loop
                playsInline
                autoPlay
                src="/home/amenities/amenities.mp4"
                className="amen-portrait portrait absolute inset-0 h-full w-full object-cover object-center scale-105 will-change-transform"
              />
            </div>

            <p
              ref={paragraphRef}
              className="paragraph text-sand font-sans leading-relaxed text-[1.02rem] max-lg:text-[0.95rem] overflow-hidden"
            >
              {paragraphText.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="amen-word inline-block mr-[0.25em] will-change-transform"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Right Column: Giant Bottom-Right Heading */}
          <div className="flex w-3/5 flex-col items-end justify-end max-xl:w-1/2 max-lg:w-full max-lg:items-start max-lg:mb-12">
            <h2
              ref={headingRef}
              className="hero text-cream-dark uppercase font-serif tracking-tight leading-none text-[8.5rem] max-2xl:text-[7rem] max-xl:text-[5.5rem] max-lg:text-[4.2rem] max-md:text-[3rem]"
            >
              <span className="inline-block whitespace-nowrap overflow-hidden">
                {headingText.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="amen-char inline-block will-change-transform"
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
