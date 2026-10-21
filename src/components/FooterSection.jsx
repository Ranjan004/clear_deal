import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <p className="paragraph mt-6 text-[#2f3a26]/80">
              {"Subscribe to join our community and stay informed on our latest developments."}
            </p>

            {submitted ? (
              <div className="mt-10 p-5 rounded-2xl bg-white/40 border border-[#2f3a26]/20 text-[#2f3a26]">
                <p className="font-serif text-lg font-medium">
                  {"Thank you for subscribing!"}
                </p>
                <p className="text-xs mt-1 text-[#2f3a26]/70">
                  {"We will share our newest updates with you soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 flex w-3/4 flex-col items-start gap-6 max-md:mt-15 max-md:w-full">
                <div className="flex w-full gap-4 max-md:flex-wrap max-md:gap-6">
                  <div className="fadeElement w-1/2 max-md:w-full">
                    <label htmlFor="footer-first-name" className="small mb-2 block text-golden uppercase text-xs tracking-wider font-semibold">
                      {"First Name*"}
                    </label>
                    <input
                      id="footer-first-name"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="paragraph border-[#1a2a4a] text-[#1a2a4a] placeholder:text-[#1a2a4a] focus:border-[#2f3a26] w-full border-0 border-b border-[#2f3a26]/40 bg-transparent pb-1 outline-none transition-colors"
                    />
                  </div>
                  <div className="fadeElement w-1/2 max-md:w-full">
                    <label htmlFor="footer-last-name" className="small mb-2 block text-golden uppercase text-xs tracking-wider font-semibold">
                      {"Last Name*"}
                    </label>
                    <input
                      id="footer-last-name"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="paragraph border-[#1a2a4a] text-[#1a2a4a] placeholder:text-[#1a2a4a] focus:border-[#2f3a26] w-full border-0 border-b border-[#2f3a26]/40 bg-transparent pb-1 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="fadeElement w-full">
                  <label htmlFor="footer-email" className="small mb-2 block text-golden uppercase text-xs tracking-wider font-semibold">
                    {"Email*"}
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="paragraph border-[#1a2a4a] text-[#1a2a4a] placeholder:text-[#1a2a4a] focus:border-[#2f3a26] w-full border-0 border-b border-[#2f3a26]/40 bg-transparent pb-1 outline-none transition-colors"
                  />
                </div>

                <label className="fadeElement my-4 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 size-4 rounded-none border border-green text-[#1a2a4a] accent-[#2f3a26] cursor-pointer"
                  />
                  <span className="small text-golden text-xs leading-relaxed text-[#2f3a26]/80">
                    {"I consent to the collection and processing of my personal data in accordance with the ClearDeal Property Privacy Policy."}
                  </span>
                </label>

                <button 
                  type="submit" 
                  className="link fadeElement font-serif text-lg uppercase tracking-wider text-[#2f3a26] hover:text-[#3E562E] transition-colors border-b border-[#2f3a26] pb-1 cursor-pointer"
                >
                  {"Take the first step"}
                </button>
              </form>
            )}
          </div>

          <div className="w-1/12 max-2xl:hidden" />

          {/* Navigation Links Column */}
          <div className="w-1/6 max-lg:w-1/3 max-md:flex max-md:w-full max-md:flex-col max-md:items-center">
            <ul className="space-y-3 font-sans text-sm">
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/">{"Home"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/residences">{"Residences"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/business-spaces">{"Business Spaces"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/retail-spaces">{"Retail Spaces"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/location">{"Location"}</Link></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/amenities">{"Amenities"}</Link></li>
              <li className="fadeElement max-md:text-center"><button onClick={onOpenInquiry} className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26] cursor-pointer text-left max-md:text-center">{"Contact"}</button></li>
              <li className="fadeElement max-md:text-center"><Link className="hover:text-green paragraph font-normal uppercase transition text-[#2f3a26]" to="/about">{"About the Investor"}</Link></li>
            </ul>
            <Link className="paragraph fadeElement hover:text-green transition font-normal mt-10 inline-block max-md:mt-4 text-[#2f3a26]" to="/privacy-policy">
              {"Privacy Policy"}
            </Link>
            <Link className="paragraph fadeElement hover:text-green transition font-normal mt-2 inline-block text-[#2f3a26]" to="/terms">
              {"Terms & Conditions"}
            </Link>
          </div>

          {/* Socials Column */}
          <div className="w-1/12 max-lg:w-1/6 max-md:w-full">
            <ul className="space-y-3 font-sans text-sm max-md:flex max-md:flex-col max-md:items-center">
              <li className="fadeElement"><a target="_blank" rel="noopener noreferrer" className="hover:text-green text-golden paragraph font-normal transition text-[#2f3a26]" href="https://www.instagram.com/belgradearbor/">Instagram</a></li>
              <li className="fadeElement"><a target="_blank" rel="noopener noreferrer" className="hover:text-green text-golden paragraph font-normal transition text-[#2f3a26]" href="https://www.linkedin.com/company/belgrade-arbor">Linkedin</a></li>
              <li className="fadeElement"><a target="_blank" rel="noopener noreferrer" className="hover:text-green text-golden paragraph font-normal transition text-[#2f3a26]" href="https://www.facebook.com/belgradearbor/">Facebook</a></li>
            </ul>
          </div>

          <div className="w-1/12 max-2xl:hidden" />

          {/* Legal Note & Direct Inquiries Phone */}
          <div className="w-1/4 max-lg:w-5/12 max-md:w-full text-xs text-[#2f3a26]/70 leading-relaxed font-sans">
            <p className="small">
              {"Disclaimer: Minor architectural and facade finishes variations may occur upon final completion relative to artistic renders. Room numbering adheres to the Real Estate Cadastre system of the Republic of Serbia."}
            </p>
            <div className="mt-6 flex flex-col">
              <span className="text-xs uppercase tracking-wider text-[#2f3a26]/60">
                {"For direct inquiries, contact our sales lounge:"}
              </span>
              <p className="mt-1">
                <a href="tel:+38169684444" className="text-golden font-serif text-2xl text-[#2f3a26] font-semibold hover:underline">
                  +381 69 68 44 44
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3D Silhouette Tree Landscape Layers */}
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

      {/* Absolute Bottom Bar: Copyright & Big Arbor Title */}
      <div className="absolute bottom-15 left-0 z-10 w-full max-md:bottom-10 pointer-events-none">
        <div className="wrapper flex items-end justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:gap-5">
          <div className="small text-cream w-1/6 max-lg:w-full max-lg:text-center max-md:text-[0.625rem] text-[#FFF4D6] opacity-90 select-none">
            ©2026. {"All rights reserved."}
          </div>
          <div className="heading-1 text-cream w-7/12 text-right font-light uppercase max-xl:w-2/3 max-lg:w-full max-lg:text-center pointer-events-auto">
            <span 
              className="select-none leading-none block text-[#FFF4D6] tracking-normal font-light"
              style={{
                fontFamily: 'PPEditorialOld, Georgia, serif',
                fontSize: 'clamp(3rem, 7vw, 6.25rem)',
                textShadow: '0 2px 20px rgba(0,0,0,0.2)'
              }}
            >
              ClearDeal Property
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
