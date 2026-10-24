import React, { useEffect, useRef } from 'react';
import { ArrowDown, Play, Compass, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onOpenInquiry }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', resume);
          document.removeEventListener('touchstart', resume);
        };
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('touchstart', resume, { once: true });
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
    <div className="relative h-svh w-full overflow-hidden bg-[#0d1424]">
      {/* Real Drone Aerial Flyover Video */}
      <video
        ref={videoRef}
        src="/media/videos/site_tour_1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="block h-full w-full object-cover scale-105"
        style={{ willChange: 'transform' }}
      />

      {/* Luxury Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/40 to-[#0d1424]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,20,36,0.6)_100%)] pointer-events-none" />

      {/* Top Banner Tag: Company & Recent Project Identity */}
      <div className="absolute top-24 left-0 right-0 flex justify-center z-20 pointer-events-none px-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111e36]/90 backdrop-blur-md border border-[#b8892a]/50 text-[#e8dfc8] text-xs uppercase tracking-widest font-sans shadow-xl">
          <ShieldCheck className="w-4 h-4 text-[#b8892a]" />
          <span className="font-bold text-[#b8892a]">ClearDeal Property</span>
          <span className="text-white/40">•</span>
          <span className="text-white/90">Recent Plotted Project</span>
        </div>
      </div>

      {/* Center/Bottom Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 sm:pb-16 px-4 z-20 select-none text-center">
        
        {/* Project Tagline from Gate Arch */}
        <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-[#b8892a] font-medium mb-2 drop-shadow-md">
          Recent 155-Plot Township • Muradnagar Dasna Road
        </p>

        {/* Project Title */}
        <h1 className="text-[#f5f3ee] font-serif text-[9vw] sm:text-[7vw] lg:text-[5.5rem] font-light uppercase leading-none drop-shadow-2xl tracking-tight">
          Golden Luxury Homes
        </h1>

        {/* Location & Connectivity summary */}
        <p className="font-sans text-xs sm:text-sm text-[#e8dfc8]/90 max-w-2xl mt-3 mb-8 leading-relaxed drop-shadow">
          155 Demarcated Freehold Residential Plots (58 to 195 Sq. Yd.) by ClearDeal Property
          <span className="hidden sm:inline"> • Immediate Mutation (Dakhil Kharij) & Possession</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pointer-events-auto">
          <a
            href="#MasterPlan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#b8892a] text-[#111e36] hover:bg-white transition-all text-xs font-bold uppercase tracking-wider shadow-xl cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            View 155 Plots Layout
          </a>
          <a
            href="#SiteVideos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-[#f5f3ee] transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
            Watch Drone Tour
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#GateShowcase"
          className="mt-8 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 cursor-pointer pointer-events-auto"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </div>
  );
}
