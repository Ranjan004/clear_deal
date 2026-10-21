import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = false; // play only once
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', resume);
          document.removeEventListener('touchstart', resume);
          document.removeEventListener('scroll', resume);
        };
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('touchstart', resume, { once: true });
        document.addEventListener('scroll', resume, { once: true });
      });
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <div className="relative h-svh w-full overflow-hidden bg-[#111e36]">
      {/* Full-Bleed Hero Video — plays once */}
      <video
        ref={videoRef}
        src="/home/hero.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="block h-full w-full object-cover"
        style={{ willChange: 'transform' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111e36]/70 via-[#111e36]/20 to-[#111e36]/30 pointer-events-none" />

      {/* Brand title at bottom */}
      <div className="absolute inset-0 flex items-end justify-center py-20 max-md:py-10 pointer-events-none select-none">
        <h1 className="text-[#e8dfc8] text-center font-serif text-[10.5vw] font-normal uppercase max-md:text-[17vw] leading-none drop-shadow-2xl tracking-tight">
          ClearDeal Property
        </h1>
      </div>
    </div>
  );
}
