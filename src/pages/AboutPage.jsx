import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    name: 'ClearDeal Property',
    location: 'BELGRADE',
    image: '/about-the-investor/slide1.webp',
    en: 'ClearDeal Property is one of our largest projects and embodies the vision that guides us — that every square metre should serve a purpose and contribute to the functionality, quality and value of the space. Through a consistent approach to design, careful selection of partners and dedication to every detail, we are creating a modern mixed-use complex that meets the contemporary needs of living and working.',
    sr: 'ClearDeal Property jedan je od naših najvećih projekata i predstavlja viziju kojom se vodimo — da svaki kvadratni metar treba da ima svoju svrhu i doprinese funkcionalnosti, kvalitetu i vrednosti prostora.',
  },
  {
    name: 'AD Residence',
    location: 'BELGRADE',
    image: '/about-the-investor/slide6.webp',
    en: 'AD Residence is a modern mixed-use complex located in a quiet part of Zemun, designed to combine quality construction, functional design and the comfort of everyday life. The project comprises two wings with a diverse offering of residential units and commercial spaces, along with a spacious three-level underground garage.',
    sr: 'AD Residence je savremeni stambeno-poslovni kompleks u mirnom delu Zemuna, osmišljen za udobnost svakodnevnog života.',
  },
  {
    name: 'Harmony Homes',
    location: 'KRAGUJEVAC',
    image: '/about-the-investor/slide2.webp',
    en: 'Harmony Homes is a modern residential complex in Kragujevac, situated between Gavrila Principa and Daničićeva streets. The project comprises two buildings with a total of 86 apartments, commercial space and carefully landscaped green areas designed for pleasant family living.',
    sr: 'Harmony Homes je moderan stambeni kompleks u Kragujevcu sa ukupno 86 stanova i pažljivo uređenim zelenim površinama.',
  },
  {
    name: 'Stari Mlin',
    location: 'KRAGUJEVAC',
    image: '/about-the-investor/slide4.webp',
    en: 'The Stari Mlin project is a modern mixed-use complex built on the site of the former city mill, preserving the spirit of this historic location through a blend of tradition and contemporary architecture. Completion is planned for late 2027.',
    sr: 'Projekat Stari Mlin je savremeni stambeno-poslovni kompleks izgrađen na mestu nekadašnjeg gradskog mlina.',
  },
  {
    name: 'Old City Residence',
    location: 'KRAGUJEVAC',
    image: '/about-the-investor/slide3.webp',
    en: 'Old City Residence is a significant project planned for an attractive location in Kragujevac. Construction begins late 2026. The complex will comprise 169 residential units, several commercial spaces and 222 garage spaces across two underground levels.',
    sr: 'Old City Residence je značajan projekat u Kragujevcu sa 169 stambenih jedinica i 222 garažna mesta.',
  },
  {
    name: 'Red Cross Centre',
    location: 'KRAGUJEVAC',
    image: '/about-the-investor/slide5.webp',
    en: 'The new Red Cross Centre in Kragujevac, developed in cooperation with the City Red Cross Organisation, is a modern and functional solution replacing the existing inadequate facilities. The 1,198 sq m building includes modern offices, a public kitchen and humanitarian programme rooms.',
    sr: 'Novi Centar Crvenog krsta u Kragujevcu razvijen je u saradnji sa Gradskom organizacijom Crvenog krsta.',
  },
];

export default function AboutPage({ lang, onOpenInquiry }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const prev = () => setActiveSlide((s) => (s === 0 ? projects.length - 1 : s - 1));
  const next = () => setActiveSlide((s) => (s === projects.length - 1 ? 0 : s + 1));
  const current = projects[activeSlide];

  return (
    <div className="overflow-x-clip">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-clip">
        <img
          src="/about-the-investor/about-hero.webp"
          alt="About the Investor"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111e36]/90 via-[#111e36]/40 to-[#111e36]/20" />
        <div className="wrapper relative z-10 pt-8">
          <p className="font-sans uppercase tracking-[0.3em] text-[#ccbf99] text-xs mb-4">
            Perose Property Group
          </p>
          <h1 className="font-serif uppercase text-[#fdfbef] leading-none text-[5.5rem] max-2xl:text-[4.5rem] max-xl:text-[3.5rem] max-lg:text-[2.8rem] max-md:text-[2rem]">
            {"About the Investor"}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#fdfbef] py-24 max-lg:py-16">
        <div className="wrapper">
          <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <h2 className="font-serif text-[2rem] max-lg:text-[1.6rem] text-[#2f3a26] leading-snug">
                {'Each of our projects is distinguished by contemporary architecture, high construction standards and carefully selected locations.'}
              </h2>
            </div>
            <div>
              <p className="font-sans text-[#2f3a26]/80 leading-relaxed text-[1rem] mb-6">
                {'Perose Property Group is a holding company specialising in the development, investment and management of residential and commercial projects across Serbia. Our portfolio includes projects such as AD Residence in Zemun, Harmony Homes, Stari Mlin and Old City Residence in Kragujevac.'}
              </p>
              <p className="font-sans text-[#2f3a26]/70 leading-relaxed text-[0.95rem]">
                {'Our mission is to create lasting value through innovative and sustainable development that enhances urban environments and improves quality of life.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <section className="bg-[#1f261e] py-24 max-lg:py-16">
        <div className="wrapper">
          <p className="font-sans uppercase tracking-[0.25em] text-[#ccbf99]/60 text-xs mb-12">
            {"Our Projects"}
          </p>

          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                key={activeSlide}
                src={current.image}
                alt={current.name}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#ccbf99]/20 backdrop-blur-sm rounded-full border border-[#ccbf99]/30">
                <span className="font-sans text-[#ccbf99] text-xs uppercase tracking-wider">{current.location}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between py-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-[#ccbf99]/50 text-sm">{String(activeSlide + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-[#fdfbef] text-[3rem] max-lg:text-[2.2rem] uppercase leading-none mb-6">
                  {current.name}
                </h3>
                <p className="font-sans text-[#fdfbef]/70 leading-relaxed text-[0.98rem]">
                  {lang === 'sr' ? current.sr : current.en}
                </p>
              </div>

              {/* Nav Arrows */}
              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-[#ccbf99]/30 flex items-center justify-center text-[#ccbf99] hover:bg-[#ccbf99]/10 transition-colors cursor-pointer"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-[#ccbf99]/30 flex items-center justify-center text-[#ccbf99] hover:bg-[#ccbf99]/10 transition-colors cursor-pointer"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot indicators */}
                <div className="flex gap-2 ml-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${i === activeSlide ? 'bg-[#ccbf99] w-5' : 'bg-[#ccbf99]/30'}`}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Closing Statement */}
      <section className="bg-[#fdfbef] py-24 max-lg:py-16">
        <div className="wrapper text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-[2.2rem] max-lg:text-[1.7rem] text-[#2f3a26] leading-snug mb-8">
            {'We believe that quality projects are born through dedication to excellence, a responsible approach and long-term thinking.'}
          </h2>
          <p className="font-sans text-[#2f3a26]/70 leading-relaxed text-[1rem] mb-12">
            {'Through every project we build, our goal is to create spaces that bring long-term value and contribute to a better everyday life for those who use them.'}
          </p>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2f3a26] text-[#ccbf99] font-sans uppercase text-sm tracking-wider hover:bg-[#1f261e] transition-colors cursor-pointer"
          >
            {"Contact us"}
            <svg width="20" height="8" viewBox="0 0 25 10" fill="none" className="h-2 w-4">
              <path d="M0.5 5L24.5 5" stroke="currentColor" strokeLinecap="round" />
              <path d="M19.5 0.5L24.5 5L19.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" />
            </svg>
          </button>
        </div>
      </section>

    </div>
  );
}
