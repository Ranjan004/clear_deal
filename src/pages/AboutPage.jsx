import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const highlights = [
  {
    name: 'Recent Plotted Project: Golden Luxury Homes',
    location: 'MURADNAGAR DASNA ROAD, GHAZIABAD',
    image: '/media/golden_luxury_gate.jpg',
    desc: 'Our recent 155-plot residential and commercial plotted township development on Muradnagar Dasna Main Road, Ghaziabad. We specialize in precision CAD layout plotting, 25ft, 22ft & 20ft wide interlocking roads, street electrification, and immediate legal mutation.',
  },
  {
    name: 'CAD Master Layout Planning',
    location: 'DELHI NCR',
    image: '/media/golden_luxury_layout.png',
    desc: 'Precision CAD layout design with optimized road networks (28.4% road area, 71.6% plotted area), designated open green pockets, and standard rectangular plots ranging from 58 to 195 sq. yards.',
  },
  {
    name: 'On-Ground Road & Utility Infrastructure',
    location: 'KALLU GARHI',
    image: '/media/videos/thumb_1.jpg',
    desc: 'Heavy-duty interlocking concrete paver roads, pre-cast boundary demarcation stones, pre-installed utility poles, and underground drainage network.',
  },
  {
    name: 'Ghaziabad Master Plan 2031 Connectivity',
    location: 'STRATEGIC TRANSIT CORRIDOR',
    image: '/media/ghaziabad_master_plan_2031.png',
    desc: 'Direct accessibility to Eastern Peripheral Expressway (1 min), Delhi-Meerut Expressway (3 min), and Namo Bharat Duhai RRTS Rapid Rail Station (8 min).',
  },
];

export default function AboutPage({ lang, onOpenInquiry }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const prev = () => setActiveSlide((s) => (s === 0 ? highlights.length - 1 : s - 1));
  const next = () => setActiveSlide((s) => (s === highlights.length - 1 ? 0 : s + 1));
  const current = highlights[activeSlide];

  return (
    <div className="overflow-x-clip">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-clip">
        <img
          src="/media/golden_luxury_gate.jpg"
          alt="About ClearDeal Property"
          className="absolute inset-0 h-full w-full object-cover object-center filter brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/50 to-black/30" />
        <div className="wrapper relative z-10 pt-8">
          <p className="font-sans uppercase tracking-[0.3em] text-[#b8892a] text-xs mb-4 font-bold">
            Township Layout & Land Development
          </p>
          <h1 className="font-serif uppercase text-[#fdfbef] leading-none text-[5.5rem] max-2xl:text-[4.5rem] max-xl:text-[3.5rem] max-lg:text-[2.8rem] max-md:text-[2rem]">
            About ClearDeal Property
          </h1>
          <p className="text-white/80 font-sans text-sm max-w-xl mt-4">
            Burhanuddin House No 1-68, Kh. No. 797, Block-I, Ground Floor, Jaitpur Extension Part-2, Badarpur, Delhi - 110044
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#f5f3ee] py-24 max-lg:py-16">
        <div className="wrapper">
          <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#b8892a] font-bold block mb-3">
                OUR CORE EXPERTISE
              </span>
              <h2 className="font-serif text-[2.2rem] max-lg:text-[1.8rem] text-[#111e36] leading-snug font-normal">
                We design master-planned township layouts and sell demarcated freehold plots with 100% legal clarity.
              </h2>
            </div>
            <div>
              <p className="font-sans text-[#1a2a4a]/85 leading-relaxed text-[1.05rem] mb-6">
                ClearDeal Property is a dedicated land development and township planning enterprise. Rather than selling pre-constructed apartments, we focus exclusively on land mapping, township road infrastructure, demarcation, and providing individual freehold plots where owners can design their bespoke dream homes.
              </p>
              <p className="font-sans text-[#1a2a4a]/75 leading-relaxed text-[0.95rem]">
                Every square yard in our projects is backed by verified revenue records, government master plan compliance, immediate registry, and on-ground utility development including 25ft & 20ft paver roads, electric lines, and drainage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Slider */}
      <section className="bg-[#0d1424] py-24 max-lg:py-16 text-white">
        <div className="wrapper">
          <p className="font-sans uppercase tracking-[0.25em] text-[#b8892a] text-xs mb-12 font-bold">
            Project Highlights & Infrastructure
          </p>

          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#b8892a]/30 shadow-2xl">
              <img
                key={activeSlide}
                src={current.image}
                alt={current.name}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#111e36]/80 backdrop-blur-sm rounded-full border border-white/20">
                <span className="font-sans text-[#b8892a] text-xs uppercase tracking-wider font-semibold">
                  {current.location}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#e8dfc8] mb-4 font-light">
                  {current.name}
                </h3>
                <p className="font-sans text-white/80 leading-relaxed text-sm sm:text-base mb-8">
                  {current.desc}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between border-t border-white/15 pt-6">
                <span className="font-mono text-sm text-[#b8892a] font-semibold">
                  0{activeSlide + 1} / 0{highlights.length}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full border border-white/20 hover:border-[#b8892a] hover:bg-[#b8892a] hover:text-[#0d1424] text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-full border border-white/20 hover:border-[#b8892a] hover:bg-[#b8892a] hover:text-[#0d1424] text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Office & Site CTA */}
      <section className="bg-[#111e36] py-20 text-center text-white border-t border-[#b8892a]/30">
        <div className="wrapper max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#b8892a] font-bold block">
            VISIT OUR OFFICE OR PROJECT SITE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#e8dfc8]">
            Plan Your Land Investment With Us
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans">
            Registered Corporate Office: Burhanuddin House No 1-68, Kh. No. 797, Block-I, Ground Floor, Jaitpur Extension Part-2, Badarpur, Delhi - 110044.
            <br />
            Project Site: Muradnagar Dasna Main Road, Kallu Garhi, Ghaziabad (NCR), UP.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3.5 rounded-full bg-[#b8892a] text-[#111e36] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-xl font-sans"
            >
              Book Site Demarcation Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
