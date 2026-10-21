import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InstallmentPlanSection({ lang, onOpenInquiry }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const stages = [
    { percent: '20%', label: 'Preliminary contract signing' },
    { percent: '20%', label: 'Foundation level completion' },
    { percent: '20%', label: 'Structural roof framework completion' },
    { percent: '30%', label: '80% construction milestone' },
    { percent: '10%', label: 'Technical reception & key handover' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.15,
        yPercent: -10,
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
    <section id="Installment" ref={sectionRef} className="relative z-1">
      <div className="installment-trigger trigger relative flex min-h-screen items-stretch overflow-clip max-md:min-h-auto max-md:flex-col">
        
        {/* Left Side: 55vw Blueprint Architectural Zoom */}
        <div className="installment-reveal-image absolute top-0 left-0 z-0 h-full w-[55vw] max-xl:w-1/2 max-lg:w-full max-md:relative max-md:h-auto max-md:w-full">
          <div className="relative h-full w-full max-md:h-[34rem]">
            <div className="reveal-image-zoom relative h-full w-full overflow-hidden">
              <img
                ref={imageRef}
                src="/home/installment/image.webp"
                alt="Installment plan"
                loading="lazy"
                decoding="async"
                className="installment-parallax absolute inset-0 h-full w-full object-cover max-lg:hidden"
              />
              <img
                src="/home/installment/image-t.webp"
                alt="Installment plan"
                loading="lazy"
                decoding="async"
                className="installment-parallax absolute inset-0 hidden h-full w-full object-cover max-lg:block max-md:relative max-md:h-[34rem]"
              />
            </div>
          </div>
        </div>

        {/* Right Side Background: 45vw Luxury Radial Gradient */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[45vw] bg-[radial-gradient(at_right_bottom,#3E562E,#2F3A26)] max-xl:w-1/2 max-lg:hidden"></div>

        {/* Content Box Overlaid on the Right */}
        <div className="installment-reveal-content relative z-1 flex w-full justify-end max-lg:px-10 max-md:px-4">
          <div className="wrapper flex justify-end py-20 max-xl:py-15 max-lg:px-0 max-lg:py-15 w-full">
            <div className="flex w-5/12 flex-col max-xl:w-1/2 max-lg:mt-120 max-lg:w-full max-lg:rounded-2xl max-lg:bg-[radial-gradient(at_right_bottom,#3E562E,#2F3A26)] max-lg:px-8 max-lg:py-8 max-md:mt-0">
              <div className="flex h-full flex-col justify-between gap-16 pl-10 max-xl:pl-17 max-lg:relative max-lg:pl-0 max-md:gap-4">
                
                <div className="max-lg:flex max-lg:gap-15 max-md:flex-col max-md:gap-3">
                  <p className="heading-2 text-cream-dark mb-15 max-md:mb-4">
                    {"Installment Plan"}
                  </p>

                  <ul className="divide-cream-dark/40 divide-y">
                    {stages.map((st, i) => (
                      <li key={i} className="border-b-green mb-4 flex items-center justify-start gap-4 border-b pb-4 max-lg:justify-start max-md:mb-0 max-md:gap-8 max-md:py-2">
                        <p className="heading-2 text-accent translate-y-0 whitespace-nowrap italic max-lg:not-italic font-serif">
                          {st.percent}
                        </p>
                        <p className="detail text-sand font-sans">
                          {st.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Building Permit Pill Button */}
                <div className="mt-auto pt-6">
                  <button 
                    type="button"
                    onClick={onOpenInquiry}
                    className="inline-flex menu cursor-pointer border shrink-0 min-w-55 items-center justify-center gap-2 uppercase whitespace-nowrap outline-none bg-transparent border-green hover:bg-green/40 text-cream h-14 px-6 py-5 rounded-full max-md:h-12 max-md:py-3 w-full group relative overflow-hidden transition-all text-xs tracking-wider"
                  >
                    <span className="relative z-1 block w-full overflow-hidden">
                      <span className="flex w-full items-center justify-center gap-4 transition-all duration-600 group-hover:-translate-y-full has-[>svg]:justify-between font-sans">
                        {"Building Permit"}
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green">
                          <path d="M19.5428 27.0002H18.1445V21.407H19.5428C20.5725 21.407 21.4072 22.2417 21.4072 23.2714V25.1358C21.4072 26.1655 20.5725 27.0002 19.5428 27.0002Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M24.2031 21.407V27.0002" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M24.2031 21.407H26.9997" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="absolute top-full left-0 flex w-full items-center justify-center gap-4 transition-all duration-600 group-hover:top-0 has-[>svg]:justify-between font-sans">
                        {"Building Permit"}
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green">
                          <path d="M19.5428 27.0002H18.1445V21.407H19.5428C20.5725 21.407 21.4072 22.2417 21.4072 23.2714V25.1358C21.4072 26.1655 20.5725 27.0002 19.5428 27.0002Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M24.2031 21.407V27.0002" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M24.2031 21.407H26.9997" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
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
