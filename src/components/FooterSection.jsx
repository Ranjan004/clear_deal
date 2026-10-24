import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react';

export default function FooterSection({ lang, onOpenInquiry, onOpenInvestor }) {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', consent: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer 
      id="Footer" 
      className="to-vanilla relative bg-linear-to-t from-[#8AB6D2] overflow-clip"
      style={{ background: 'linear-gradient(to top in oklab, rgb(138, 182, 210) 0%, rgb(253, 251, 239) 100%)' }}
    >
      <div className="scroller pointer-events-none absolute h-full w-full" />
      
      <div className="wrapper pt-25 relative z-10">
        <div className="content flex gap-5 max-2xl:gap-15 max-lg:flex-wrap max-lg:justify-start max-lg:gap-5 max-lg:gap-y-22 max-md:gap-y-12">
          
          {/* Left Column: Newsletter & Community Signup */}
          <div className="w-1/3 max-2xl:w-1/2 max-lg:w-2/3 max-md:w-full">
            <p className="heading-2 leading-tight font-light uppercase text-[#2f3a26]">
              {"Step into the world of ClearDeal Property"}
            </p>
            <p className="paragraph mt-4 text-[#2f3a26]/80 text-sm">
              {"Subscribe to join our community and stay informed on our latest plotted developments & CAD releases."}
            </p>

            {submitted ? (
              <div className="mt-8 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-[#2f3a26]/20 text-[#2f3a26]">
                <p className="font-serif text-lg font-medium">
                  {"Thank you for subscribing!"}
                </p>
                <p className="text-xs mt-1 text-[#2f3a26]/70">
                  {"We will share our newest layout updates with you soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex w-3/4 flex-col items-start gap-5 max-md:w-full">
                <div className="flex w-full gap-4 max-md:flex-wrap max-md:gap-5">
                  <div className="fadeElement w-1/2 max-md:w-full">
                    <label htmlFor="footer-first-name" className="small mb-1 block text-golden uppercase text-[11px] tracking-wider font-semibold">
                      {"First Name*"}
                    </label>
                    <input
                      id="footer-first-name"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="paragraph border-[#1a2a4a] text-[#1a2a4a] placeholder:text-[#1a2a4a] focus:border-[#2f3a26] w-full border-0 border-b border-[#2f3a26]/40 bg-transparent pb-1 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div className="fadeElement w-1/2 max-md:w-full">
                    <label htmlFor="footer-last-name" className="small mb-1 block text-golden uppercase text-[11px] tracking-wider font-semibold">
                      {"Last Name*"}
                    </label>
                    <input
                      id="footer-last-name"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="paragraph border-[#1a2a4a] text-[#1a2a4a] placeholder:text-[#1a2a4a] focus:border-[#2f3a26] w-full border-0 border-b border-[#2f3a26]/40 bg-transparent pb-1 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="fadeElement w-full">
                  <label htmlFor="footer-email" className="small mb-1 block text-golden uppercase text-[11px] tracking-wider font-semibold">
                    {"Email*"}
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="paragraph border-[#1a2a4a] text-[#1a2a4a] placeholder:text-[#1a2a4a] focus:border-[#2f3a26] w-full border-0 border-b border-[#2f3a26]/40 bg-transparent pb-1 outline-none transition-colors text-sm"
                  />
                </div>

                <label className="fadeElement my-2 flex cursor-pointer items-start gap-2.5">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 size-4 rounded-none border border-green text-[#1a2a4a] accent-[#2f3a26] cursor-pointer"
                  />
                  <span className="small text-golden text-[11px] leading-relaxed text-[#2f3a26]/80">
                    {"I consent to the collection of my data in accordance with the ClearDeal Property Privacy Policy."}
                  </span>
                </label>

                <button 
                  type="submit" 
                  className="link fadeElement font-serif text-base uppercase tracking-wider text-[#2f3a26] hover:text-[#3E562E] transition-colors border-b border-[#2f3a26] pb-1 cursor-pointer"
                >
                  {"Take the first step"}
                </button>
              </form>
            )}
          </div>

          <div className="w-1/12 max-2xl:hidden" />

          {/* Navigation Links Column */}
          <div className="w-1/6 max-lg:w-1/3 max-md:flex max-md:w-full max-md:flex-col max-md:items-center">
            <span className="text-[10px] uppercase font-bold text-[#b8892a] tracking-widest block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/">{"Home"}</Link></li>
              <li className="fadeElement max-md:text-center"><a className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" href="/#MasterPlan">{"155 Plots Layout"}</a></li>
              <li className="fadeElement max-md:text-center"><a className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" href="/#SiteVideos">{"Drone Site Videos"}</a></li>
              <li className="fadeElement max-md:text-center"><a className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" href="/#GateShowcase">{"Grand Entrance Arch"}</a></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/location">{"Location & Highways"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/amenities">{"Township Amenities"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/about">{"About ClearDeal"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/contact">{"Contact Office"}</Link></li>
            </ul>
            <Link className="paragraph fadeElement hover:text-green transition font-normal mt-6 inline-block text-[11px] text-[#2f3a26]/75" to="/privacy-policy">
              {"Privacy Policy"}
            </Link>
            <Link className="paragraph fadeElement hover:text-green transition font-normal mt-1 inline-block text-[11px] text-[#2f3a26]/75" to="/terms">
              {"Terms & Conditions"}
            </Link>
          </div>

          {/* Socials Column: Instagram updated, Facebook removed */}
          <div className="w-1/12 max-lg:w-1/6 max-md:w-full">
            <span className="text-[10px] uppercase font-bold text-[#b8892a] tracking-widest block mb-4 max-md:text-center">
              Social
            </span>
            <ul className="space-y-3 font-sans text-xs sm:text-sm max-md:flex max-md:flex-col max-md:items-center">
              <li className="fadeElement">
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#b8892a] font-normal transition text-[#2f3a26] flex items-center gap-1.5" 
                  href="https://www.instagram.com/cleardeal.property"
                >
                  <Instagram className="w-4 h-4 text-[#b8892a]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li className="fadeElement">
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#25D366] font-normal transition text-[#2f3a26] flex items-center gap-1.5" 
                  href="https://wa.me/918979953557"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/12 max-2xl:hidden" />

          {/* Legal Note & Addresses with clean backdrop card for readability */}
          <div className="w-1/3 max-lg:w-full text-xs text-[#2f3a26]/80 leading-relaxed font-sans space-y-3.5">
            
            {/* Corporate Office Address from Bill */}
            <div className="p-4 rounded-2xl bg-white/75 backdrop-blur-md border border-[#2f3a26]/15 shadow-sm">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#b8892a] block mb-1">
                REGISTERED & CORPORATE OFFICE
              </span>
              <p className="text-[12px] font-medium text-[#2f3a26] leading-snug">
                Burhanuddin House No. 1-68, Kh. No. 797, Block-I, Ground Floor, Jaitpur Extension Part-2, Badarpur, Delhi - 110044
              </p>
              <p className="text-[10px] text-[#2f3a26]/70 mt-1">
                Landmark: Near Badarpur Metro Station (Gate No. 2), Sarita Vihar Division
              </p>
            </div>

            {/* Project Site Address */}
            <div className="p-4 rounded-2xl bg-white/75 backdrop-blur-md border border-[#2f3a26]/15 shadow-sm">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#b8892a] block mb-1">
                RECENT PLOTTED TOWNSHIP SITE
              </span>
              <p className="text-[12px] font-medium text-[#2f3a26] leading-snug">
                Golden Luxury Homes, Muradnagar Dasna Main Road, Kallu Garhi, Ghaziabad (NCR), UP
              </p>
              <p className="text-[10px] text-[#2f3a26]/70 mt-1">
                Direct entry from Eastern Peripheral & Delhi-Meerut Expressway
              </p>
            </div>

            {/* Direct Sales & Contact Box */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#b8892a]/30 shadow-md">
              <span className="text-[10px] uppercase tracking-wider text-[#2f3a26]/80 font-bold block mb-2">
                DIRECT SALES & SITE VISIT INQUIRIES:
              </span>
              <div className="space-y-2">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#8f6412] block">
                    Er. Mohd Shakib (Call & WhatsApp)
                  </span>
                  <a href="tel:+918979953557" className="font-mono text-base sm:text-lg text-[#111e36] font-bold hover:text-[#8f6412] transition-colors">
                    +91 89799 53557
                  </a>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#1e7e34] block">
                    Abdul Hamid (WhatsApp / Demarcation)
                  </span>
                  <a href="https://wa.me/919718865748" target="_blank" rel="noopener noreferrer" className="font-mono text-base sm:text-lg text-[#111e36] font-bold hover:text-[#1e7e34] transition-colors">
                    +91 97188 65748
                  </a>
                </div>
                <div className="pt-1 border-t border-[#2f3a26]/10">
                  <a href="mailto:cleardeal.property@gmail.com" className="text-xs font-mono font-semibold text-[#8f6412] hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>cleardeal.property@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3D Silhouette Tree Landscape Layers (Restored as requested) */}
      <div className="pointer-events-none -mt-200 w-full overflow-clip select-none max-2xl:-mt-150 max-lg:-mt-120 max-lg:flex max-lg:items-center max-lg:justify-end max-md:-mt-70">
        <img
          alt="footer front"
          loading="eager"
          width={1920}
          height={1411}
          className="front h-auto w-full max-w-none max-lg:min-w-400 max-lg:translate-x-25 max-lg:object-cover max-lg:object-right max-md:min-w-210"
          style={{ transform: 'translate(0px, 10rem)' }}
          src="/home/footer/front.webp"
        />
        <div className="absolute bottom-0 left-0 h-auto w-full">
          <img
            alt="footer tree left"
            loading="lazy"
            width={387}
            height={559}
            className="absolute bottom-0 left-0 h-auto w-96 max-w-none max-2xl:w-75 max-lg:hidden"
            src="/home/footer/tree-l.webp"
          />
          <img
            alt="footer tree right"
            loading="lazy"
            width={1354}
            height={641}
            className="absolute right-0 bottom-0 h-auto w-335 max-w-none max-2xl:w-250 max-lg:w-[150%] max-md:w-150"
            src="/home/footer/tree-r.webp"
          />
        </div>
      </div>

      {/* Absolute Bottom Bar: Copyright & Big ClearDeal Property Title */}
      <div className="absolute bottom-15 left-0 z-10 w-full max-md:bottom-10 pointer-events-none">
        <div className="wrapper flex items-end justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:gap-5">
          <div className="small text-cream w-1/3 max-lg:w-full max-lg:text-center max-md:text-[0.625rem] text-[#FFF4D6] opacity-90 select-none">
            <p className="font-semibold">© 2026 ClearDeal Property. All rights reserved.</p>
            <p className="text-[11px] opacity-75 mt-0.5">Recent Plotted Township: Golden Luxury Homes (155 Plots)</p>
          </div>
          <div className="heading-1 text-cream w-7/12 text-right font-light uppercase max-xl:w-2/3 max-lg:w-full max-lg:text-center pointer-events-auto">
            <span 
              className="select-none leading-none block text-[#FFF4D6] tracking-normal font-light"
              style={{
                fontFamily: 'PPEditorialOld, Georgia, serif',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}
            >
              ClearDeal Property
            </span>
            <span className="block font-mono text-[11px] tracking-[0.25em] text-[#FFF4D6]/90 mt-1 uppercase">
              Recent Project: Golden Luxury Homes (155 Plots)
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
