import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Morph SVG paths matching live belgradearbor.rs
const PATHS = {
  clip1_A: "M553.198 0.00122967L189.96 2.32976C163.484 2.49949 140.431 20.4481 133.781 46.0702L1.88108 554.296C-5.39412 582.328 8.9737 611.457 35.6469 622.752L499.834 819.32C537.355 835.208 579.21 808.786 580.992 768.087L611.943 60.9657C613.404 27.5877 586.616 -0.212979 553.198 0.00122967Z",
  clip1_B: "M612.999 748.068V103C612.999 53.8486 568.667 17.6575 522.631 29.2268L295.544 86.2962C274.234 91.6517 256.362 106.645 246.852 127.146L7.28559 616.516C-13.3912 661.088 11.8848 713.945 58.5972 723.818L525.25 822.446C570.586 832.028 612.999 796.077 612.999 748.068Z",
  clip2_A: "M0.00102513 662.73L1.39093e-10 67.2785C-8.67027e-05 23.7338 40.7156 -8.32866 82.9967 1.92087L291.561 52.4799C311.134 57.2245 327.547 70.5073 336.282 88.67L556.309 546.185C575.299 585.673 552.085 632.5 509.182 641.246L80.5926 728.624C38.9549 737.112 0.00109921 705.263 0.00102513 662.73Z",
  clip2_B: "M536.07 261.245L562.89 534.277C564.225 547.866 553.215 559.504 539.519 558.983L39.3218 539.961C27.4842 539.511 18.0011 530.038 17.5825 518.245L0.0149346 23.3565C-0.589468 6.32949 17.2665 -5.17794 32.6102 2.35034L523.555 243.229C530.574 246.673 535.308 253.488 536.07 261.245Z"
};

// Word-safe character / word split component
function SplitText({ text, type = "words", className = "" }) {
  const words = text.split(" ");
  if (type === "chars") {
    return (
      <span className={className}>
        {words.map((word, wIdx) => (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, cIdx) => (
              <span
                key={cIdx}
                className="intro-char inline-block"
                style={{ willChange: 'transform, opacity, filter' }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="intro-word inline-block mr-[0.25em]"
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function IntroductionSection({ lang, onOpen3D }) {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const leafsRef = useRef(null);
  const introParallaxRef = useRef(null);
  const morphWrapperRef = useRef(null);
  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);
  const clip1PathRef = useRef(null);
  const clip2PathRef = useRef(null);
  const img1ARef = useRef(null);
  const img1BRef = useRef(null);
  const img2ARef = useRef(null);
  const img2BRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isLaptop = window.matchMedia("(max-width: 1440px)").matches;
      const isTablet = window.matchMedia("(max-width: 1120px)").matches;

      const animIn = {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "power1.inOut",
        pointerEvents: "auto",
        overwrite: "auto",
      };

      const animOut = {
        opacity: 0,
        y: "2rem",
        filter: "blur(4px)",
        ease: "power1.inOut",
        pointerEvents: "none",
        overwrite: "auto",
      };

      // 1. Initial State Setups
      gsap.set(
        [
          ".screen1 .intro-char",
          ".screen1 .intro-word",
          ".screen1 .button1Wrap",
          ".screen2 .intro-word",
          ".screen2 .button2Wrap",
          ".screen3 .intro-char",
          ".screen3 .intro-word",
          ".screen3 .link3",
        ],
        animOut
      );

      gsap.set(".screen1", { pointerEvents: "auto" });
      gsap.set([".screen2", ".screen3"], { pointerEvents: "none" });

      gsap.set(morphWrapperRef.current, {
        scale: 1.1,
        filter: "blur(4px)",
        opacity: 0,
        xPercent: 0,
      });

      gsap.set(".progress-num-1", { y: 0, opacity: 1, filter: "blur(0px)" });
      gsap.set([".progress-num-2", ".progress-num-3"], { y: "1rem", opacity: 0, filter: "blur(4px)" });

      gsap.set(frame1Ref.current, {
        top: "0%",
        right: "0%",
        width: isLaptop ? "25.75rem" : "37.5rem",
        height: "100%",
      });

      gsap.set(frame2Ref.current, {
        bottom: "6.25rem",
        left: "-2.5rem",
        width: isLaptop ? "14rem" : "20.5rem",
        height: "27rem",
      });

      gsap.set(img1ARef.current, { opacity: 1 });
      gsap.set(img1BRef.current, { opacity: 0 });
      gsap.set(img2ARef.current, { opacity: 1 });
      gsap.set(img2BRef.current, { opacity: 0 });

      // 2. Idle Background Leaves Animation
      gsap.to(leafsRef.current, {
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "power1.inOut",
        rotate: 5,
      });

      // 3. Text Stagger Animations on Enter
      const tlScreen1 = gsap.timeline({ paused: true })
        .to(".screen1 .intro-char", { ...animIn, duration: 0.7, stagger: 0.02 }, 0)
        .to(".screen1 .intro-word", { ...animIn, duration: 0.7, stagger: 0.03 }, 0)
        .to(".screen1 .button1Wrap", { ...animIn, duration: 0.7 }, 0);

      const tlScreen2 = gsap.timeline({ paused: true })
        .to(".screen2 .intro-word", { ...animIn, duration: 0.7, stagger: 0.03 }, 0)
        .to(".screen2 .button2Wrap", { ...animIn, duration: 0.7 }, 0);

      const tlScreen3 = gsap.timeline({ paused: true })
        .to(".screen3 .intro-char", { ...animIn, duration: 0.7, stagger: 0.02 }, 0)
        .to(".screen3 .intro-word", { ...animIn, duration: 0.9, stagger: 0.03 }, 0)
        .to(".screen3 .link3", { ...animIn, duration: 0.9 }, 0);

      // Dedicated Screen ScrollTriggers matching reference site exactly
      ScrollTrigger.create({
        trigger: scrollerRef.current,
        start: "0% top",
        end: "22% top",
        onToggle: (self) => {
          gsap.set(".screen1", { pointerEvents: self.isActive ? "auto" : "none" });
          if (self.isActive) tlScreen1.play();
          else tlScreen1.reverse();
        },
      });

      ScrollTrigger.create({
        trigger: scrollerRef.current,
        start: "33% top",
        end: "60% top",
        onToggle: (self) => {
          gsap.set(".screen2", { pointerEvents: self.isActive ? "auto" : "none" });
          if (self.isActive) tlScreen2.play();
          else tlScreen2.reverse();
        },
      });

      ScrollTrigger.create({
        trigger: scrollerRef.current,
        start: "75% top",
        end: "bottom top",
        onToggle: (self) => {
          gsap.set(".screen3", { pointerEvents: self.isActive ? "auto" : "none" });
          if (self.isActive) tlScreen3.play();
          else tlScreen3.reverse();
        },
      });

      // 4. Scrubbed Continuous Timeline for Morphs and Frames (scrub: true for instant 1:1 Lenis tracking)
      const tlMorphs = gsap.timeline({
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // 0.00 -> 0.10: MorphWrapper fades in on Screen 1
      tlMorphs.to(
        morphWrapperRef.current,
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.10,
        },
        0
      );

      // 0.15 -> 0.48: Morph frames reshape & slide left across screen
      const M = 0.15;
      const T = 0.33;

      if (clip1PathRef.current) {
        tlMorphs.to(clip1PathRef.current, { attr: { d: PATHS.clip1_B }, ease: "none", duration: T }, M);
      }
      if (clip2PathRef.current) {
        tlMorphs.to(clip2PathRef.current, { attr: { d: PATHS.clip2_B }, ease: "none", duration: T }, M);
      }

      tlMorphs.to(
        frame1Ref.current,
        {
          width: isTablet ? "30vh" : isLaptop ? "15rem" : "20rem",
          height: isTablet ? "35vh" : isLaptop ? "20rem" : "27rem",
          right: isTablet ? "0" : "16.66%",
          top: isTablet ? "5vh" : "14%",
          ease: "power1.inOut",
          duration: T,
        },
        M
      );

      tlMorphs.to(
        frame2Ref.current,
        {
          width: isTablet ? "42vh" : isLaptop ? "26.375rem" : "35rem",
          height: isTablet ? "42vh" : isLaptop ? "26.188rem" : "35rem",
          left: isTablet ? "-2vh" : "0",
          bottom: isTablet ? "55vh" : "20%",
          ease: "power1.inOut",
          duration: T,
        },
        M
      );

      tlMorphs
        .to(img1ARef.current, { opacity: 0, duration: T }, M)
        .to(img1BRef.current, { opacity: 1, duration: T }, M)
        .to(img2ARef.current, { opacity: 0, duration: T }, M)
        .to(img2BRef.current, { opacity: 1, duration: T }, M);

      tlMorphs.to(
        morphWrapperRef.current,
        {
          xPercent: isTablet ? 0 : -100,
          ease: "power1.inOut",
          duration: T,
        },
        M
      );

      // 0.68 -> 0.78: Morphs scale up and blur away
      tlMorphs.to(
        morphWrapperRef.current,
        {
          scale: 1.1,
          filter: "blur(4px)",
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.10,
        },
        0.68
      );

      // 5. Scrubbed Progress Counter Timeline (scrub: true)
      const tlProgress = gsap.timeline({
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tlProgress.to(".progress-fill", { width: "100%", ease: "none", duration: 1 }, 0);
      tlProgress
        .to(".progress-num-1", { y: "-1rem", opacity: 0, filter: "blur(4px)", ease: "power1.inOut", duration: 0.14 }, 0.33)
        .to(".progress-num-2", { y: 0, opacity: 1, filter: "blur(0px)", ease: "power1.inOut", duration: 0.14 }, 0.33)
        .to(".progress-num-2", { y: "-1rem", opacity: 0, filter: "blur(4px)", ease: "power1.inOut", duration: 0.14 }, 0.75)
        .to(".progress-num-3", { y: 0, opacity: 1, filter: "blur(0px)", ease: "power1.inOut", duration: 0.14 }, 0.75);

      // 6. Section Exit Parallax
      gsap.to(introParallaxRef.current, {
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: `bottom-=${window.innerHeight} top`,
          end: "bottom top",
          scrub: 1,
        },
        y: "10rem",
        ease: "power1.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Introduction" ref={sectionRef} className="relative max-md:hidden">
      <div ref={scrollerRef} className="scroller text-cream relative h-[900vh] overflow-clip">
        <div className="to-pine-green isolate sticky top-0 left-0 flex h-screen w-full items-center overflow-clip bg-radial-[at_bottom_right] from-[#3E562E]">
          
          {/* Leaves multiply overlay */}
          <img
            ref={leafsRef}
            alt="Background Leafs"
            src="/home/introduction/leafs.webp"
            className="leafs pointer-events-none absolute top-0 right-[-10%] h-screen w-screen origin-top-right scale-120 object-cover object-center opacity-40 mix-blend-multiply"
          />

          <div ref={introParallaxRef} className="intro-parallax absolute inset-0">
            
            {/* SVG Morphing Frames */}
            <div className="morphs absolute inset-0 h-full w-full pointer-events-none">
              <div className="wrapper relative flex h-full justify-end">
                <div
                  ref={morphWrapperRef}
                  className="morphWrapper relative h-full w-1/2 max-lg:w-full"
                  style={{ willChange: 'transform, opacity, filter' }}
                >
                  
                  {/* Frame 1 */}
                  <div
                    ref={frame1Ref}
                    id="frame1"
                    className="absolute z-1 max-lg:h-[50vh] max-lg:top-auto max-lg:bottom-10 max-lg:-right-10"
                    style={{ position: 'absolute' }}
                  >
                    <svg viewBox="0 0 612 824" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                      <defs>
                        <clipPath id="morphClip1" clipPathUnits="userSpaceOnUse">
                          <path ref={clip1PathRef} d={PATHS.clip1_A} />
                        </clipPath>
                      </defs>
                      <image ref={img1ARef} className="morph1ImgA" href="/home/introduction/image1.webp" x="-200" y="-50" width="900" height="900" preserveAspectRatio="xMaxYMax slice" clipPath="url(#morphClip1)" style={{ opacity: 1 }} />
                      <image ref={img1BRef} className="morph1ImgB" href="/home/introduction/image2.webp" x="0" y="0" width="612" height="824" preserveAspectRatio="xMidYMid slice" clipPath="url(#morphClip1)" style={{ opacity: 0 }} />
                    </svg>
                  </div>

                  {/* Frame 2 */}
                  <div
                    ref={frame2Ref}
                    id="frame2"
                    className="absolute max-lg:bottom-10 max-lg:left-0"
                    style={{ position: 'absolute' }}
                  >
                    <svg viewBox="0 0 563 559" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                      <defs>
                        <clipPath id="morphClip2" clipPathUnits="userSpaceOnUse">
                          <path ref={clip2PathRef} d={PATHS.clip2_A} />
                        </clipPath>
                      </defs>
                      <image ref={img2ARef} className="morph2ImgA" href="/home/introduction/image4.webp" x="0" y="0" width="563" height="559" preserveAspectRatio="xMidYMid slice" clipPath="url(#morphClip2)" style={{ opacity: 1 }} />
                      <image ref={img2BRef} className="morph2ImgB" href="/home/introduction/image3.webp" x="0" y="0" width="563" height="559" preserveAspectRatio="xMidYMid slice" clipPath="url(#morphClip2)" style={{ opacity: 0 }} />
                    </svg>
                  </div>

                </div>
              </div>
            </div>

            {/* Screen 1 (Left aligned text) */}
            <div
              className="screen1 absolute inset-0 h-full w-full pt-20 flex items-center"
              style={{ willChange: 'transform, opacity, filter' }}
            >
              <div className="wrapper w-full">
                <div className="w-5/12 space-y-10 max-xl:w-1/2 max-lg:w-full">
                  <p className="kicker preheading1 text-accent uppercase font-sans tracking-widest text-xs font-semibold">
                    <SplitText text="BELGRADE ARBOR DIZAJN" type="chars" />
                  </p>
                  <h2 className="heading-2 heading1 text-cream text-3xl sm:text-5xl font-light leading-tight font-serif">
                    <SplitText
                      text={"The visual signature of ClearDeal Property is shaped by an elegant facade evoking the crown of an arbor tree—a symbol of growth, harmony and endurance."}
                      type="words"
                    />
                  </h2>
                  <div className="button1Wrap mt-20 max-xl:mt-10">
                    <button 
                      type="button"
                      onClick={onOpen3D}
                      className="inline-flex menu cursor-pointer border shrink-0 min-w-55 items-center justify-center gap-2 uppercase whitespace-nowrap outline-none bg-transparent border-green hover:bg-green/40 text-cream h-14 px-8 py-5 rounded-full group relative overflow-hidden transition-all text-xs tracking-wider"
                    >
                      <span className="relative z-1 block w-full overflow-hidden">
                        <span className="flex w-full items-center justify-center gap-6 transition-all duration-600 group-hover:-translate-y-full font-sans">
                          {"Explore 3D"}
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green">
                            <path d="M15.1939 4.70031L7.95751 8.66988C7.48423 8.9295 7.19067 9.42216 7.19067 9.95675V18.2779C7.19067 18.8125 7.48423 19.3051 7.95751 19.5648L15.1939 23.5343C15.6442 23.7814 16.1917 23.7814 16.6419 23.5343L23.8783 19.5648C24.3517 19.3051 24.6452 18.8125 24.6452 18.2779V9.95675C24.6452 9.42216 24.3517 8.9295 23.8783 8.66988L16.6419 4.70031C16.1917 4.45331 15.6442 4.45331 15.1939 4.70031Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="absolute top-full left-0 flex w-full items-center justify-center gap-6 transition-all duration-600 group-hover:top-0 font-sans">
                          {"Explore 3D"}
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green">
                            <path d="M15.1939 4.70031L7.95751 8.66988C7.48423 8.9295 7.19067 9.42216 7.19067 9.95675V18.2779C7.19067 18.8125 7.48423 19.3051 7.95751 19.5648L15.1939 23.5343C15.6442 23.7814 16.1917 23.7814 16.6419 23.5343L23.8783 19.5648C24.3517 19.3051 24.6452 18.8125 24.6452 18.2779V9.95675C24.6452 9.42216 24.3517 8.9295 23.8783 8.66988L16.6419 4.70031C16.1917 4.45331 15.6442 4.45331 15.1939 4.70031Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen 2 (Right aligned text - Morphs are on LEFT) */}
            <div
              className="screen2 absolute inset-0 h-full w-full pt-20 flex items-center"
              style={{ willChange: 'transform, opacity, filter' }}
            >
              <div className="wrapper max flex justify-end w-full">
                <div className="w-1/2 pt-15 max-lg:w-full max-lg:pt-[40vh] space-y-10">
                  <h2 className="heading-2 heading2 text-cream text-3xl sm:text-5xl font-light leading-tight font-serif">
                    <SplitText
                      text={"ClearDeal Property is not merely another skyline marker, but an artfully orchestrated urban ecosystem moving to the pulse of the city."}
                      type="words"
                    />
                  </h2>
                  <div className="button2Wrap mt-30 max-xl:mt-20 max-lg:mt-10">
                    <button 
                      type="button"
                      onClick={onOpen3D}
                      className="inline-flex menu cursor-pointer border shrink-0 min-w-55 items-center justify-center gap-2 uppercase whitespace-nowrap outline-none bg-transparent border-green hover:bg-green/40 text-cream h-14 px-8 py-5 rounded-full group relative overflow-hidden transition-all text-xs tracking-wider"
                    >
                      <span className="relative z-1 block w-full overflow-hidden">
                        <span className="flex w-full items-center justify-center gap-6 transition-all duration-600 group-hover:-translate-y-full font-sans">
                          {"Explore 3D"}
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green">
                            <path d="M15.1939 4.70031L7.95751 8.66988C7.48423 8.9295 7.19067 9.42216 7.19067 9.95675V18.2779C7.19067 18.8125 7.48423 19.3051 7.95751 19.5648L15.1939 23.5343C15.6442 23.7814 16.1917 23.7814 16.6419 23.5343L23.8783 19.5648C24.3517 19.3051 24.6452 18.8125 24.6452 18.2779V9.95675C24.6452 9.42216 24.3517 8.9295 23.8783 8.66988L16.6419 4.70031C16.1917 4.45331 15.6442 4.45331 15.1939 4.70031Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="absolute top-full left-0 flex w-full items-center justify-center gap-6 transition-all duration-600 group-hover:top-0 font-sans">
                          {"Explore 3D"}
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green">
                            <path d="M15.1939 4.70031L7.95751 8.66988C7.48423 8.9295 7.19067 9.42216 7.19067 9.95675V18.2779C7.19067 18.8125 7.48423 19.3051 7.95751 19.5648L15.1939 23.5343C15.6442 23.7814 16.1917 23.7814 16.6419 23.5343L23.8783 19.5648C24.3517 19.3051 24.6452 18.8125 24.6452 18.2779V9.95675C24.6452 9.42216 24.3517 8.9295 23.8783 8.66988L16.6419 4.70031C16.1917 4.45331 15.6442 4.45331 15.1939 4.70031Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen 3 (Full bleed title + bottom right paragraph) */}
            <div
              className="screen3 absolute inset-0 h-full w-full pt-20 flex items-center"
              style={{ willChange: 'transform, opacity, filter' }}
            >
              <div className="wrapper flex flex-col pt-15 max-lg:pt-2 w-full">
                <h2 className="hero heading3 w-full uppercase max-xl:text-[7.5rem] max-lg:text-[5.375rem] text-cream font-serif leading-none">
                  <SplitText
                    text={"A new chapter of prestigious living."}
                    type="chars"
                  />
                </h2>
                <div className="w-1/2 self-end pt-25 max-xl:w-5/12 max-xl:pt-0 max-lg:w-1/2 max-lg:pt-20">
                  <p className="paragraph1 paragraph w-1/2 max-xl:w-3/5 max-lg:w-full text-sand font-sans">
                    <SplitText
                      text={"A distinct architectural vision, prime address and thoughtful amenities make ClearDeal Property a haven where quality, comfort and lasting legacy converge."}
                      type="words"
                    />
                  </p>
                  <a className="link link3 text-accent mt-10 inline-block font-serif text-lg uppercase tracking-wider underline cursor-pointer" href="#Residences">
                    {"Explore Apartments"}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Progress Counter */}
            <div className="absolute bottom-20 left-20 flex items-center gap-5 max-lg:bottom-10 max-lg:left-10 z-20">
              <div className="bg-green relative h-px w-70">
                <div className="progress-fill bg-accent absolute top-0 left-0 h-full w-0 bg-[#e7fd55]" />
              </div>
              <div className="small text-green relative h-[1em] w-[2ch] leading-none text-[#e7fd55] font-mono text-sm overflow-hidden">
                <span className="progress-num-1 absolute inset-0">01</span>
                <span className="progress-num-2 absolute inset-0">02</span>
                <span className="progress-num-3 absolute inset-0">03</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
