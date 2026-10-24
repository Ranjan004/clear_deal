import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Eye, MapPin } from 'lucide-react';

export default function SiteVideoShowcase({ onOpenInquiry }) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videos = [
    {
      id: 0,
      title: 'Drone Aerial Overview',
      subtitle: 'Township layout right next to Eastern Peripheral & Meerut Expressway',
      tag: 'AERIAL DRONE',
      src: '/media/videos/site_tour_1.mp4',
      thumb: '/media/videos/thumb_1.jpg',
      aspect: 'horizontal',
    },
    {
      id: 1,
      title: 'Drone Fly-Through Tour',
      subtitle: 'Expansive view of plotted sectors and lush green open surroundings',
      tag: 'AERIAL VIEW',
      src: '/media/videos/site_tour_2.mp4',
      thumb: '/media/videos/thumb_2.jpg',
      aspect: 'horizontal',
    },
    {
      id: 2,
      title: 'Roads & Electrification Tour',
      subtitle: 'Completed interlocking paver roads, street light electrification & poles',
      tag: 'GROUND TOUR',
      src: '/media/videos/site_tour_3.mp4',
      thumb: '/media/videos/thumb_3.jpg',
      aspect: 'horizontal',
    },
    {
      id: 3,
      title: 'Gated Community Walkthrough',
      subtitle: 'On-ground street walkthrough showcasing wide road infrastructure',
      tag: 'STREET VIEW',
      src: '/media/videos/site_tour_4.mp4',
      thumb: '/media/videos/thumb_4.jpg',
      aspect: 'vertical',
    },
    {
      id: 4,
      title: 'Plot Demarcation & Infrastructure',
      subtitle: 'Ready-to-build residential plots with clear boundaries and boundary walls',
      tag: 'INFRASTRUCTURE',
      src: '/media/videos/site_tour_5.mp4',
      thumb: '/media/videos/thumb_5.jpg',
      aspect: 'vertical',
    },
  ];

  // Auto-play whenever selectedVideo changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [selectedVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const active = videos[selectedVideo];

  return (
    <section id="SiteVideos" className="relative bg-[#0d1424] py-24 max-lg:py-16 text-[#f5f3ee] overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#b8892a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2a5b88]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="wrapper relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b8892a]/20 text-[#e8dfc8] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#b8892a]/30">
              <Film className="w-3.5 h-3.5 text-[#b8892a]" />
              Real Site Development Videos
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Watch The Live <span className="italic font-normal text-[#b8892a]">On-Ground Progress</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#f5f3ee]/70 mt-2 max-w-2xl">
              Experience the actual ground reality of Golden Luxury Homes through unedited drone aerial shots and street walkthroughs. Wide paver roads, street lighting poles, and plot demarcations are ready.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#b8892a] text-[#111e36] hover:bg-white transition-all text-xs font-bold tracking-wider uppercase shadow-xl cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              Schedule Site Visit
            </button>
          </div>
        </div>

        {/* Video Player + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Viewport (7 Cols) */}
          <div className="lg:col-span-8 bg-[#111e36] rounded-3xl p-3 sm:p-5 border border-[#b8892a]/25 shadow-2xl relative">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={active.src}
                playsInline
                autoPlay
                muted={isMuted}
                loop
                className="w-full h-full object-contain bg-black"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Floating Video Overlay Badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white border border-white/20 flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-semibold uppercase tracking-wider text-[11px]">{active.tag}</span>
              </div>

              {/* Bottom Custom Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between text-white transition-opacity">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-[#b8892a] text-[#111e36] hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-xs text-white/80 font-sans hidden sm:inline">
                    {isMuted ? 'Muted (Tap to unmute)' : 'Sound On'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleFullscreen}
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video description footer */}
            <div className="mt-4 px-2 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {active.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f5f3ee]/70 mt-0.5">
                  {active.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#b8892a] shrink-0">
                <MapPin className="w-4 h-4" />
                <span>Kallu Garhi, Muradnagar NCR</span>
              </div>
            </div>
          </div>

          {/* Video Selector Playlist (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#b8892a] font-bold">
                SELECT A VIDEO ({videos.length})
              </span>
              <span className="text-xs text-white/50">Auto-repeating HD</span>
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {videos.map((vid) => {
                const isCurrent = selectedVideo === vid.id;
                return (
                  <div
                    key={vid.id}
                    onClick={() => setSelectedVideo(vid.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 group ${
                      isCurrent
                        ? 'bg-[#182642] border-[#b8892a] shadow-lg ring-1 ring-[#b8892a]/50'
                        : 'bg-[#111e36]/60 border-white/10 hover:border-[#b8892a]/40 hover:bg-[#111e36]'
                    }`}
                  >
                    {/* Thumbnail with play icon */}
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                      <img
                        src={vid.thumb}
                        alt={vid.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 flex items-center justify-center ${
                        isCurrent ? 'bg-[#b8892a]/40' : 'bg-black/40 group-hover:bg-black/20'
                      }`}>
                        <div className="w-7 h-7 rounded-full bg-white/90 text-[#111e36] flex items-center justify-center shadow">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#b8892a] bg-[#b8892a]/15 px-2 py-0.5 rounded">
                          {vid.tag}
                        </span>
                      </div>
                      <h4 className={`font-serif text-sm truncate ${
                        isCurrent ? 'text-[#b8892a] font-medium' : 'text-white'
                      }`}>
                        {vid.title}
                      </h4>
                      <p className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                        {vid.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick booking CTA */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1c2c4d] to-[#111e36] border border-[#b8892a]/30 mt-4">
              <p className="text-xs text-[#e8dfc8] font-medium mb-1">
                Want to see the plots in person?
              </p>
              <p className="text-[11px] text-white/60 mb-3">
                Free site visit pickup available from Badarpur & Ghaziabad metro stations.
              </p>
              <button
                onClick={onOpenInquiry}
                className="w-full py-2.5 rounded-xl bg-[#b8892a] text-[#111e36] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Book Free Site Inspection
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
