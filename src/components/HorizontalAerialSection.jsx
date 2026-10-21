import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalAerialSection({ lang }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const revealLeftRef = useRef(null);
  const revealRightRef = useRef(null);
  const horizontalImageRef = useRef(null);
  const markersRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const cloud3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 1. Reveal curtain doors slide open
      tl.to(revealLeftRef.current, { xPercent: -100, ease: 'power1.inOut' }, 0)
        .to(revealRightRef.current, { xPercent: 100, ease: 'power1.inOut' }, 0);

      // 2. Horizontal panorama slides sideways
      tl.to(horizontalImageRef.current, { x: '-35%', ease: 'none' }, 0.2)
        .to(markersRef.current, { x: '-35%', ease: 'none' }, 0.2);

      // 3. Clouds parallax drift
      tl.to(cloud1Ref.current, { x: '-20%', ease: 'none' }, 0.1)
        .to(cloud2Ref.current, { x: '-40%', ease: 'none' }, 0.1)
        .to(cloud3Ref.current, { x: '-15%', ease: 'none' }, 0.1);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Horizontal" ref={sectionRef} className="relative z-1 overflow-clip">
      <div ref={triggerRef} className="trigger relative flex h-screen w-full items-center overflow-hidden">
        
        {/* Curtains sliding apart */}
        <div ref={revealLeftRef} className="bg-[#f5f3ee] reveal absolute top-0 left-0 z-10 h-full w-1/2"></div>
        <div ref={revealRightRef} className="bg-[#f5f3ee] reveal absolute top-0 right-0 z-10 h-full w-1/2"></div>

        {/* Gigantic high-res aerial drone photograph */}
        <img
          ref={horizontalImageRef}
          src="/home/horizontal/horizontal.webp"
          alt="Horizontal Aerial Panorama"
          className="horizontal-image h-full w-auto max-w-none object-cover will-change-transform"
          loading="lazy"
          decoding="async"
        />

        {/* Aerial markers A, B and floating volumetric cloud overlays */}
        <div ref={markersRef} className="horizontal-markers pointer-events-none absolute top-0 left-0 z-20 h-full w-full will-change-transform">
          <div className="absolute left-1/2 h-full w-[42%] -translate-x-1/2 -translate-y-10">
            <span className="heading-1 text-sand absolute top-1/2 left-0 -translate-y-1/2 uppercase drop-shadow-lg font-serif text-5xl sm:text-7xl">
              A
            </span>
            <span className="heading-1 text-sand absolute top-1/2 right-0 -translate-y-1/2 uppercase drop-shadow-lg font-serif text-5xl sm:text-7xl">
              B
            </span>
          </div>

          <img
            ref={cloud1Ref}
            alt="Cloud 1"
            src="/home/horizontal/1.webp"
            className="cloud1 absolute bottom-0 left-0 h-auto w-395 max-w-none -translate-x-1/2 translate-y-1/2 object-cover max-xl:left-1/10 max-xl:w-350 max-lg:left-1/5 max-lg:w-220 max-md:w-180"
          />
          <img
            ref={cloud2Ref}
            alt="Cloud 2"
            src="/home/horizontal/2.webp"
            className="cloud2 absolute bottom-0 left-1/2 h-auto w-550 max-w-none -translate-x-1/2 translate-y-1/2 object-cover max-xl:w-450 max-lg:w-280 max-md:bottom-1/4 max-md:w-220"
          />
          <img
            ref={cloud3Ref}
            alt="Cloud 3"
            src="/home/horizontal/3.webp"
            className="cloud3 absolute top-0 right-0 h-auto w-465 max-w-none translate-x-1/2 -translate-y-1/2 object-cover max-xl:w-400 max-lg:w-250 max-md:w-200"
          />
        </div>

        {/* Pinned Title Overlaid across the aerial sky */}
        <div className="absolute inset-0 h-screen w-full pointer-events-none z-30">
          <h2 className="heading text-sand hero absolute top-40 left-1/2 w-full -translate-x-1/2 text-center uppercase max-xl:top-30 max-xl:text-[7.5rem] max-lg:text-[4.25rem] max-md:top-16 max-md:text-[3.25rem] drop-shadow-2xl">
            {"Aerial Perspective"}
          </h2>
        </div>

      </div>
    </section>
  );
}
