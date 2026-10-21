import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RootsSection({ lang, onOpen3D }) {
  const containerRef = useRef(null);
  const visual1Ref = useRef(null);
  const visual2Ref = useRef(null);
  const visual3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax drifting of masked elements during scroll
      gsap.to(visual3Ref.current, {
        yPercent: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(visual2Ref.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(visual1Ref.current, {
        yPercent: -15,
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
    <section id="Roots" ref={containerRef} className="bg-navy relative z-1 min-h-screen overflow-clip">
      <div className="trigger relative flex min-h-screen flex-col justify-center pt-40 pb-40 max-xl:py-20">
        
        {/* Kicker Tag */}
        <div className="roots-kicker-wrap wrapper flex">
          <div className="w-1/12 max-lg:w-1/6"></div>
          <div className="w-1/6 max-lg:w-1/3">
            <p className="kicker text-accent uppercase">
              {"Lifestyle"}
            </p>
          </div>
        </div>

        {/* Visual 3: Mask3 with image3.webp */}
        <div 
          ref={visual3Ref}
          className="absolute top-[55%] right-1/10 w-230 max-w-none will-change-transform max-xl:right-16 max-xl:w-143 max-lg:top-[50%] max-lg:w-125"
        >
          <img
            alt="Roots"
            src="/home/roots/image3.webp"
            className="mask h-auto w-full mask-[url('/home/roots/mask3.svg')] mask-size-[100%] mask-center mask-no-repeat [-webkit-mask-image:url('/home/roots/mask3.svg')] [-webkit-mask-size:100%]"
          />
        </div>

        {/* Giant Central Signature Title */}
        <div className="roots-kicker-wrap wrapper relative z-1 mt-15 flex justify-center">
          <h2 className="huge text-cream-dark text-center whitespace-nowrap uppercase max-xl:text-[15rem] max-lg:text-left max-lg:text-[12.5rem] max-lg:whitespace-normal">
            {"Your Roots"}
          </h2>
        </div>

        {/* Visual 2: Mask2 with image2.webp */}
        <div 
          ref={visual2Ref}
          className="absolute top-[30%] left-1/2 z-2 w-180 max-w-none will-change-transform max-xl:right-28 max-xl:left-auto max-xl:w-120 max-lg:right-20 max-lg:w-100"
        >
          <img
            alt="Roots"
            src="/home/roots/image2.webp"
            className="mask h-auto w-full -translate-y-1/2 mask-[url('/home/roots/mask2.svg')] mask-size-[100%] mask-center mask-no-repeat [-webkit-mask-image:url('/home/roots/mask2.svg')] [-webkit-mask-size:100%]"
          />
        </div>

        {/* Visual 1: Mask1 with video image1.mp4 */}
        <div 
          ref={visual1Ref}
          className="absolute top-1/2 left-1/2 z-2 w-156 max-w-none will-change-transform max-xl:w-120 max-xl:translate-x-1/2 max-lg:top-[55%] max-lg:w-95 max-lg:translate-x-0"
        >
          <div className="mask h-auto w-full mask-[url('/home/roots/mask1.svg')] mask-size-[95%] mask-center mask-no-repeat object-cover [-webkit-mask-image:url('/home/roots/mask1.svg')] [-webkit-mask-size:95%]">
            <video
              muted
              loop
              playsInline
              autoPlay
              src="/home/roots/image1.mp4"
              className="h-full w-full translate-y-1/10 scale-130 object-cover"
            />
          </div>
        </div>

        {/* Bottom Narrative and Button */}
        <div className="wrapper roots-kicker-wrap relative z-2 mt-20 flex max-lg:mt-50">
          <div className="w-1/12 max-lg:hidden"></div>
          <div className="w-5/12 max-xl:w-6/12 max-lg:w-full">
            <p className="heading-2 text-sand max-xl:text-[3.25rem] max-lg:text-[3rem]">
              {"At ClearDeal Property, every residence is conceived not merely for living, but as a home that grows and flourishes together with you."}
            </p>
            
            <div className="mt-15 inline-block max-xl:mt-10">
              <button 
                type="button"
                onClick={onOpen3D}
                className="inline-flex menu cursor-pointer border shrink-0 min-w-55 items-center justify-center gap-2 uppercase whitespace-nowrap outline-none bg-transparent border-green hover:bg-green/40 text-cream h-14 px-8 py-5 rounded-full group relative overflow-hidden transition-all text-xs tracking-wider"
              >
                <span className="relative z-1 block w-full overflow-hidden">
                  <span className="flex w-full items-center justify-center gap-6 transition-all duration-600 group-hover:-translate-y-full">
                    {"Explore Residences"}
                    <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-6 text-green">
                      <path d="M0.5 5L24.5 5" stroke="currentColor" strokeLinecap="round" />
                      <path d="M19.5 0.5L24.5 5L19.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" />
                    </svg>
                  </span>
                  <span className="absolute top-full left-0 flex w-full items-center justify-center gap-6 transition-all duration-600 group-hover:top-0">
                    {"Explore Residences"}
                    <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-6 text-green">
                      <path d="M0.5 5L24.5 5" stroke="currentColor" strokeLinecap="round" />
                      <path d="M19.5 0.5L24.5 5L19.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
