import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X, User, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const primaryPhone = "8979953557";
  const formattedPrimaryPhone = "+91 89799 53557";
  const whatsappPhone1 = "8979953557";
  const whatsappPhone2 = "9718865748";
  const formattedWhatsapp2 = "+91 97188 65748";
  const officialEmail = "cleardeal.property@gmail.com";

  const defaultMessage = encodeURIComponent(
    "Hello ClearDeal Property, I am interested in Golden Luxury Homes plots (Muradnagar Dasna Road). Please share the layout map and price details."
  );

  return (
    <>
      {/* Floating Action Container - Fixed Bottom Right */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        
        {/* Quick Popover Card when opened */}
        {isOpen && (
          <div className="w-[340px] max-w-[calc(100vw-2rem)] rounded-3xl bg-[#0d1424] text-white border-2 border-[#b8892a]/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-5 mb-2 animate-fade-in backdrop-blur-xl relative overflow-hidden">
            {/* Header glow accent */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#b8892a]/20 rounded-full blur-2xl pointer-events-none" />
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div>
                  <h4 className="font-serif text-sm text-[#e8dfc8] font-normal leading-tight">
                    ClearDeal Property Desk
                  </h4>
                  <p className="text-[10px] text-emerald-400 font-sans">
                    Available for Call & WhatsApp
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close contact popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Contacts List */}
            <div className="mt-3.5 space-y-2.5">
              
              {/* Contact 1: Er. Mohd Shakib */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#b8892a]/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#b8892a]" />
                    <span className="font-sans text-xs font-semibold text-white">
                      Er. Mohd Shakib
                    </span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#b8892a]/20 text-[#e8dfc8]">
                    Senior Executive
                  </span>
                </div>

                <p className="text-xs font-mono text-[#b8892a] font-semibold mb-2">
                  {formattedPrimaryPhone}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:+91${primaryPhone}`}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#111e36] hover:bg-[#b8892a] hover:text-[#0d1424] text-white text-[11px] font-semibold transition-all border border-white/10"
                  >
                    <Phone className="w-3 h-3 text-[#b8892a] group-hover:text-inherit" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/91${whatsappPhone1}?text=${defaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Contact 2: Abdul Hamid */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#b8892a]/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#25D366]" />
                    <span className="font-sans text-xs font-semibold text-white">
                      Abdul Hamid
                    </span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#25D366]/20 text-emerald-300">
                    Site Demarcation
                  </span>
                </div>

                <p className="text-xs font-mono text-white/90 font-semibold mb-2">
                  {formattedWhatsapp2}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:+91${whatsappPhone2}`}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#111e36] hover:bg-[#b8892a] hover:text-[#0d1424] text-white text-[11px] font-semibold transition-all border border-white/10"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>

                  <a
                    href={`https://wa.me/91${whatsappPhone2}?text=${defaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Email Button */}
              <a
                href={`mailto:${officialEmail}?subject=Inquiry%20regarding%20Golden%20Luxury%20Homes%20Plots`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#b8892a]" />
                  <span className="font-mono text-[11px] text-white/80">{officialEmail}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
              </a>

            </div>

            {/* Bottom note */}
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
              <span>Golden Luxury Homes • Ghaziabad</span>
              <span className="text-[#b8892a]">Instant Response</span>
            </div>

          </div>
        )}

        {/* Dual Floating Buttons (WhatsApp + Call) */}
        <div className="flex items-center gap-2.5">
          
          {/* Quick Call Button */}
          <a
            href={`tel:+91${primaryPhone}`}
            className="group relative flex items-center gap-2 px-3.5 py-3 rounded-full bg-[#111e36] text-[#e8dfc8] border border-[#b8892a] shadow-2xl hover:bg-[#b8892a] hover:text-[#0d1424] transition-all transform hover:scale-105 cursor-pointer"
            aria-label={`Call Er. Mohd Shakib at ${formattedPrimaryPhone}`}
          >
            <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#b8892a] text-[#0d1424] group-hover:bg-[#0d1424] group-hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 animate-pulse" />
            </span>
            <div className="hidden sm:flex flex-col text-left pr-1">
              <span className="text-[9px] uppercase tracking-wider text-[#b8892a] group-hover:text-[#0d1424] font-bold leading-tight font-sans">
                Call Direct
              </span>
              <span className="text-xs font-mono font-bold leading-tight">
                89799 53557
              </span>
            </div>
          </a>

          {/* Quick WhatsApp Chat Button */}
          <a
            href={`https://wa.me/91${whatsappPhone1}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-3.5 py-3 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] hover:bg-[#20ba59] transition-all transform hover:scale-105 cursor-pointer"
            aria-label="Chat on WhatsApp with ClearDeal Property"
          >
            <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
              <MessageCircle className="w-4 h-4 fill-white" />
              {/* Online Green Pulsing Indicator */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#25D366] shadow" />
            </span>
            <div className="hidden sm:flex flex-col text-left pr-1">
              <span className="text-[9px] uppercase tracking-wider text-emerald-100 font-bold leading-tight font-sans">
                WhatsApp
              </span>
              <span className="text-xs font-bold leading-tight font-sans">
                Chat Online
              </span>
            </div>
          </a>

          {/* More Contact Options (Toggle Popover) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xl ${
              isOpen
                ? 'bg-white text-[#0d1424] rotate-90'
                : 'bg-[#0d1424] text-[#b8892a] border border-[#b8892a] hover:bg-[#b8892a] hover:text-[#0d1424]'
            }`}
            aria-label="Toggle contact details"
            title="All Contact Numbers"
          >
            {isOpen ? <X className="w-5 h-5" /> : <User className="w-5 h-5" />}
          </button>

        </div>

      </aside>
    </>
  );
}
