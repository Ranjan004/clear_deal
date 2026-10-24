import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, MapPin } from 'lucide-react';
import ArborLogo from './ArborLogo';

export default function InquiryModal({ isOpen, onClose, lang, t }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    unitType: 'two-room',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please agree to the privacy policy.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const footer = t.Footer || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      
      <div className="relative w-full max-w-2xl bg-[#1f261e] text-[#fdfbef] rounded-3xl overflow-hidden border border-[#ccbf99]/40 shadow-2xl p-6 sm:p-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-[#ccbf99] hover:text-[#1f261e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#ccbf99]/20 text-[#ccbf99] flex items-center justify-center mx-auto mb-4 border border-[#ccbf99]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#fdfbef]">
              {"Thank You For Your Inquiry"}
            </h3>
            <p className="font-sans text-sm text-[#fdfbef]/80 max-w-md mx-auto leading-relaxed">
              {'Your inquiry has been successfully received. Our senior property advisor will reach out to you within 24 hours.'}
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-gold !py-3 !px-8 text-xs"
              >
                {"Close"}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#ccbf99] font-bold block">
                GOLDEN LUXURY HOMES • GHAZIABAD NCR
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#fdfbef]">
                {"Book Your Freehold Plot / Site Visit"}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#fdfbef]/70 font-light">
                {'Complete the form to receive plot pricing, immediate registry details, or schedule an on-ground site visit.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#ccbf99] block mb-1">
                    {"First Name*"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ccbf99] transition-colors"
                    placeholder="Rahul"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#ccbf99] block mb-1">
                    {"Last Name*"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ccbf99] transition-colors"
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#ccbf99] block mb-1">
                    {"Email*"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ccbf99] transition-colors"
                    placeholder="rahul@example.com"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-sans uppercase tracking-wider text-[#ccbf99] block mb-1">
                    {"Phone / WhatsApp*"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ccbf99] transition-colors"
                    placeholder="+91 98..."
                  />
                </div>
              </div>

              {/* Unit Type Selection */}
              <div>
                <label className="text-[11px] font-sans uppercase tracking-wider text-[#ccbf99] block mb-1">
                  {"Interested In:"}
                </label>
                <select
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#171e16] border border-white/15 text-white text-sm focus:outline-none focus:border-[#ccbf99] transition-colors"
                >
                  <option value="plot-compact">{"Compact Plot (58 - 75 Sq. Yards)"}</option>
                  <option value="plot-executive">{"Executive Villa Plot (78 - 100 Sq. Yards)"}</option>
                  <option value="plot-premium">{"Premium Plot (110 - 135 Sq. Yards)"}</option>
                  <option value="plot-corner">{"Luxury Corner Plot (139 - 195 Sq. Yards)"}</option>
                  <option value="commercial-shop">{"Commercial / Road Frontage Plot"}</option>
                  <option value="site-visit">{"Book Free Site Visit (Pickup available)"}</option>
                </select>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-white/20 accent-[#ccbf99] cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-[#fdfbef]/70 font-sans cursor-pointer">
                  {footer.consent || ("I consent to the collection and processing of my personal data in accordance with the ClearDeal Property Privacy Policy.")}
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold !w-full !py-3.5 text-xs font-semibold shadow-xl"
                >
                  {loading 
                    ? ('Submitting...')
                    : (footer.submit || ("Take the First Step"))}
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
