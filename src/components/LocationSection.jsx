import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection({ lang }) {
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const headingRef = useRef(null);

  const paragraphText = "At one of the most attractive locations in New Belgrade, on Bulevar heroja sa Košara, ClearDeal Property is rising—a contemporary residential and commercial complex connecting quality architecture, everyday comfort and lasting value.";

  const headingText = "Location";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure initial yPercent centering for background image without Tailwind CSS conflict
      gsap.set(".background", { yPercent: -50 });

      // 1. Multi-plane vertical parallax on background and video portrait
      gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
        },
      })
      .to(".background", { top: "+=20rem", ease: "power1.inOut" })
      .to(".portrait", { top: "+=10rem", ease: "power1.inOut" }, "<");

      // 2. Section entrance clipPath wipe reveal and background scale settle
      gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 70%",
        },
      })
      .fromTo(
        ".trigger",
        { clipPath: "inset(0% 100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.7, ease: "power2.inOut" },
        0
      )
      .fromTo(
        ".background",
        { scale: 1.1 },
        { scale: 1, duration: 1.7, ease: "power2.inOut" },
        0
      );

      // 3. Floating video card entrance clipPath wipe reveal
      gsap.fromTo(
        ".videoWrap",
        { clipPath: "inset(0% 100% 0% 0%)", scale: 1.1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.2,
          delay: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: ".videoWrap" },
        }
      );

      // 4. Word-by-word fade up for paragraph
      gsap.fromTo(
        ".loc-word",
        { opacity: 0, y: "110%" },
        {
          opacity: 1,
          y: "0%",
          duration: 0.9,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 5. Character-by-character fade up for heading
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
    <section id="Location" ref={containerRef} className="relative z-1">
      <div className="trigger relative flex min-h-screen w-full items-stretch overflow-clip pt-24">
        {/* Full-bleed background with extra buffer height to eliminate any gaps during parallax scrub */}
        <img
          src="/home/location/location.webp"
          alt="Location"
          style={{ translate: 'none' }}
          className="background absolute top-1/3 h-[calc(100%+30rem)] w-full object-cover object-[20%_50%]"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#111e36]/65"></div>

        <div className="wrapper relative z-1 flex items-stretch max-lg:flex-col">
          <div className="w-1/12 max-2xl:hidden"></div>
          
          {/* Video card */}
          <div className="w-1/3 pt-30 max-lg:w-2/3 max-lg:pt-10 max-md:w-3/4 max-md:self-end max-md:pt-20">
            <div className="videoWrap relative aspect-[1.43/1] w-full overflow-hidden rounded-[1.25rem]">
              <video
                muted
                loop
                playsInline
                autoPlay
                src="/home/location/location.mp4"
                className="portrait absolute -top-25 left-1/2 h-auto w-[150%] max-w-none -translate-x-1/2 object-cover"
              />
            </div>
          </div>

          {/* Right column: Paragraph + Large Section Heading */}
          <div className="flex w-7/12 flex-col items-end justify-between py-30 max-2xl:w-2/3 max-lg:h-full max-lg:w-full max-lg:pt-50 max-lg:pb-10 max-md:items-start max-md:gap-10 max-md:pt-23">
            <p ref={paragraphRef} className="paragraph text-sand w-3/7 max-2xl:w-1/2 max-md:w-3/4">
              {paragraphText.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="loc-word inline-block mr-[0.28em] will-change-transform"
                >
                  {word}
                </span>
              ))}
            </p>

            <h2
              ref={headingRef}
              className="hero text-cream-dark uppercase max-lg:mt-50 max-md:mt-0 font-serif"
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
