import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ lang, setLang, t, onOpenInquiry, onOpenInvestor }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const navItems = [
    { label: 'Home',               action: () => go('/') },
    { label: 'Residences',         action: () => go('/residences') },
    { label: 'Business Spaces',    action: () => go('/business-spaces') },
    { label: 'Retail Spaces',      action: () => go('/retail-spaces') },
    { label: 'Location',           action: () => go('/location') },
    { label: 'Amenities',          action: () => go('/amenities') },
    { label: 'Contact',            action: () => go('/contact') },
    { label: 'About the Investor', action: () => go('/about') },
  ];

  return (
    <>
      {/* ── Collapsed pill navbar ── */}
      {!isOpen && (
        <header className="pointer-events-none fixed top-4 left-0 right-0 z-[200] flex justify-center px-4">
          <div
            className="pointer-events-auto flex items-center w-full max-w-[620px] rounded-full bg-[#111e36]/95 backdrop-blur-xl border border-[#b8892a]/25 shadow-xl"
            style={{ height: '56px' }}
          >
            {/* Left: Menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2.5 pl-4 pr-3 h-full text-[#b8892a] hover:text-[#fdf6e3] transition-colors cursor-pointer flex-shrink-0"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[5px] w-5">
                <span className="bg-[#b8892a] block h-[1.5px] w-full rounded-full" />
                <span className="bg-[#b8892a] block h-[1.5px] w-full rounded-full" />
                <span className="bg-[#b8892a] block h-[1.5px] w-3 rounded-full" />
              </div>
              <span className="font-sans uppercase text-[10px] tracking-widest hidden sm:block">Menu</span>
            </button>

            {/* Divider */}
            <div className="w-px h-5 bg-[#b8892a]/20 flex-shrink-0" />

            {/* Center: Logo — floats up */}
            <div className="flex-1 flex items-center justify-center">
              <button
                onClick={() => go('/')}
                aria-label="Go to homepage"
                className="relative flex items-center justify-center cursor-pointer group"
                style={{ marginTop: '-18px' }}
              >
                {/* white bg ring */}
                <span className="absolute inset-[-3px] rounded-full bg-white shadow-md" />
                <img
                  src="/logo.jpeg"
                  alt="ClearDeal Property"
                  className="relative rounded-full object-cover ring-[2px] ring-[#b8892a]/50 transition-transform duration-300 group-hover:scale-105"
                  style={{ width: '68px', height: '68px' }}
                />
              </button>
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-[#b8892a]/20 flex-shrink-0" />

            {/* Right: Inquire */}
            <div className="flex items-center pl-3 pr-4 h-full flex-shrink-0">
              {/* Desktop text button */}
              <button
                type="button"
                onClick={onOpenInquiry}
                className="hidden sm:flex items-center gap-2 border border-[#b8892a]/50 hover:border-[#b8892a] hover:bg-[#b8892a]/15 px-4 py-1.5 rounded-full text-[#b8892a] text-[10px] uppercase tracking-widest font-sans transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire
                <svg width="14" height="6" viewBox="0 0 25 10" fill="none">
                  <path d="M0.5 5L24.5 5" stroke="currentColor" strokeLinecap="round" />
                  <path d="M19.5 0.5L24.5 5L19.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" />
                </svg>
              </button>
              {/* Mobile: icon only */}
              <button
                type="button"
                onClick={onOpenInquiry}
                className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full border border-[#b8892a]/50 text-[#b8892a] hover:bg-[#b8892a]/20 transition-all cursor-pointer"
                aria-label="Inquire"
              >
                <svg width="14" height="6" viewBox="0 0 25 10" fill="none">
                  <path d="M0.5 5L24.5 5" stroke="currentColor" strokeLinecap="round" />
                  <path d="M19.5 0.5L24.5 5L19.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* ── Full-screen menu drawer ── */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] bg-[#111e36] flex flex-col overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[#b8892a]/15 flex-shrink-0">
            {/* Logo + name */}
            <button onClick={() => go('/')} className="flex items-center gap-3 cursor-pointer group">
              <img
                src="/logo.jpeg"
                alt="ClearDeal Property"
                className="rounded-full object-cover ring-2 ring-[#b8892a]/50 transition-transform group-hover:scale-105"
                style={{ width: '44px', height: '44px' }}
              />
              <span className="font-serif uppercase tracking-[0.15em] text-sm text-[#b8892a] leading-tight">
                ClearDeal<br className="sm:hidden" /><span className="hidden sm:inline"> </span>Property
              </span>
            </button>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-[#b8892a] hover:text-[#fdf6e3] transition-colors cursor-pointer p-2 -mr-2"
              aria-label="Close menu"
            >
              <span className="font-sans uppercase text-[10px] tracking-widest hidden sm:block">Close</span>
              <div className="relative w-7 h-7 flex items-center justify-center">
                <span className="absolute block w-5 h-[1.5px] bg-[#b8892a] rotate-45 rounded-full" />
                <span className="absolute block w-5 h-[1.5px] bg-[#b8892a] -rotate-45 rounded-full" />
              </div>
            </button>
          </div>

          {/* Nav links — scrollable on small screens */}
          <nav className="flex-1 flex flex-col items-center justify-center overflow-y-auto py-4">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={item.action}
                className="group relative overflow-hidden text-center py-2 px-6 cursor-pointer w-full"
                style={{ height: 'clamp(2.8rem, 9vw, 4rem)' }}
              >
                {/* Default label — slides up on hover */}
                <span className="absolute inset-0 flex items-center justify-center font-serif text-[7vw] sm:text-[2.4rem] text-[#b8892a] uppercase tracking-wide transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {item.label}
                </span>
                {/* Hover label — slides in from below */}
                <span className="absolute inset-0 flex items-center justify-center font-serif text-[7vw] sm:text-[2.4rem] text-[#fdf6e3] italic uppercase tracking-wide transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-5 sm:px-8 py-5 border-t border-[#b8892a]/15 flex-shrink-0 flex justify-center">
            <button
              onClick={() => { setIsOpen(false); onOpenInquiry(); }}
              className="px-10 py-3.5 rounded-full border border-[#b8892a] text-[#b8892a] uppercase text-xs tracking-widest font-sans hover:bg-[#b8892a] hover:text-[#111e36] transition-all cursor-pointer"
            >
              Inquire Now
            </button>
          </div>

        </div>
      )}
    </>
  );
}
