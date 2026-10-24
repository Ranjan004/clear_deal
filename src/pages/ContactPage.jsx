import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage({ lang, t, onOpenInquiry }) {
  const [tab, setTab] = useState('request'); // 'request' | 'callback' | 'business'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    callTime: '',
    message: '',
    privacy: false,
    whatsapp: false,
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert('Please accept the privacy policy.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputClass = 'w-full bg-transparent border-b border-[#2f3a26]/25 py-3 font-sans text-[0.95rem] text-[#2f3a26] placeholder:text-[#2f3a26]/40 focus:outline-none focus:border-[#2f3a26] transition-colors';
  const labelClass = 'font-sans text-xs uppercase tracking-wider text-[#2f3a26]/60 mb-1 block';

  const tabs = [
    { key: 'request', label: 'Send a Request' },
    { key: 'callback', label: 'Request a Call' },
    { key: 'business', label: 'Legal Entities' },
  ];

  return (
    <div className="overflow-x-clip">

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 overflow-clip">
        <img
          src="/media/golden_luxury_gate.jpg"
          alt="Golden Luxury Homes Entrance"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111e36]/95 via-[#111e36]/60 to-[#111e36]/40" />
        <div className="wrapper relative z-10 pt-8">
          <p className="font-sans uppercase tracking-[0.3em] text-[#b8892a] text-xs mb-3 font-semibold">
            ClearDeal Property • Golden Luxury Homes
          </p>
          <h1 className="font-serif uppercase text-[#fdfbef] leading-none text-[4.5rem] max-xl:text-[3.8rem] max-lg:text-[3rem] max-md:text-[2.2rem]">
            {"Contact & Sales Lounge"}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#fdfbef] py-24 max-lg:py-16">
        <div className="wrapper">
          <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-12">

            {/* Left: Info */}
            <div>
              <h2 className="font-serif text-[2.5rem] max-lg:text-[2rem] text-[#2f3a26] leading-tight mb-4">
                <span className="text-[#a68150]">Inquire for</span> Freehold Plots
              </h2>
              <p className="font-sans text-[#2f3a26]/75 leading-relaxed text-[0.98rem] mb-8">
                Connect with our advisory desk to schedule an on-ground site inspection, check plot availability numbers (1-155), or request payment & registry details.
              </p>

              {/* Verified Addresses & Contact details */}
              <div className="space-y-6">
                
                {/* 1. Corporate / Registered Office (From Electricity Bill) */}
                <div className="p-5 rounded-2xl bg-white border border-[#2f3a26]/15 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#a68150]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-[#a68150]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#a68150] font-bold block mb-1">
                        REGISTERED & CORPORATE HEADQUARTERS
                      </span>
                      <p className="font-sans font-medium text-[#2f3a26] text-[0.95rem] leading-snug">
                        Burhanuddin House No. 1-68, Kh. No. 797, Block-I, Ground Floor, Jaitpur Extension Part-2, Badarpur, Delhi - 110044
                      </p>
                      <p className="font-sans text-xs text-[#2f3a26]/70 mt-1">
                        Nearest Landmark: Near Badarpur Metro Station Gate No. 2, Sarita Vihar Division
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Project Site Location */}
                <div className="p-5 rounded-2xl bg-white border border-[#2f3a26]/15 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2f3a26]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-[#2f3a26]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#2f3a26]/60 font-bold block mb-1">
                        PROJECT SITE & SALES OFFICE
                      </span>
                      <p className="font-sans font-medium text-[#2f3a26] text-[0.95rem] leading-snug">
                        Golden Luxury Homes, Muradnagar Dasna Main Road, Kallu Garhi, Ghaziabad (NCR), Uttar Pradesh
                      </p>
                      <p className="font-sans text-xs text-[#2f3a26]/70 mt-1">
                        Landmarks: Beside DPSG International Public School • Eastern Peripheral Expressway Junction
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp Contacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact 1 */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#2f3a26]/15 hover:border-[#a68150]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#a68150]/15 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#a68150]" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-wider text-[#2f3a26]/60 font-semibold">
                          Er. Mohd Shakib
                        </p>
                        <a href="tel:+918979953557" className="font-sans font-semibold text-[#111e36] text-xs sm:text-sm hover:text-[#a68150] transition-colors block font-mono">
                          +91 89799 53557
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/918979953557?text=Hello%20Er.%20Mohd%20Shakib,%20I%20am%20interested%20in%20Golden%20Luxury%20Homes%20plots."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-[#25D366] text-white text-[11px] font-bold hover:bg-[#20ba59] transition-all shrink-0"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* Contact 2 */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#2f3a26]/15 hover:border-[#25D366]/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-wider text-[#2f3a26]/60 font-semibold">
                          Abdul Hamid
                        </p>
                        <a href="tel:+919718865748" className="font-sans font-semibold text-[#111e36] text-xs sm:text-sm hover:text-[#25D366] transition-colors block font-mono">
                          +91 97188 65748
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/919718865748?text=Hello%20Abdul%20Hamid,%20I%20am%20interested%20in%20Golden%20Luxury%20Homes%20plots."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-[#25D366] text-white text-[11px] font-bold hover:bg-[#20ba59] transition-all shrink-0"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* Email Support Full Width */}
                  <div className="sm:col-span-2 flex items-center gap-3.5 p-4 rounded-xl bg-white border border-[#2f3a26]/15">
                    <div className="w-10 h-10 rounded-full bg-[#a68150]/15 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#a68150]" />
                    </div>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-wider text-[#2f3a26]/60 font-semibold">
                        Official Email Support
                      </p>
                      <a href="mailto:cleardeal.property@gmail.com" className="font-sans font-semibold text-[#111e36] text-xs sm:text-sm hover:text-[#a68150] transition-colors font-mono">
                        cleardeal.property@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                  <CheckCircle2 className="w-16 h-16 text-[#a68150]" />
                  <h3 className="font-serif text-[2rem] text-[#2f3a26]">
                    {"Thank you for reaching out."}
                  </h3>
                  <p className="font-sans text-[#2f3a26]/70">
                    {"We will contact you shortly!"}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 rounded-full border border-[#2f3a26]/30 text-[#2f3a26] font-sans text-sm uppercase tracking-wider hover:bg-[#2f3a26] hover:text-[#fdfbef] transition-colors cursor-pointer"
                  >
                    {"Close"}
                  </button>
                </div>
              ) : (
                <>
                  {/* Tabs */}
                  <div className="flex gap-1 mb-8 border-b border-[#2f3a26]/15 pb-0">
                    {tabs.map((tb) => (
                      <button
                        key={tb.key}
                        onClick={() => setTab(tb.key)}
                        className={`px-4 py-3 font-sans text-sm uppercase tracking-wider transition-all cursor-pointer border-b-2 -mb-px ${
                          tab === tb.key
                            ? 'border-[#a68150] text-[#2f3a26]'
                            : 'border-transparent text-[#2f3a26]/40 hover:text-[#2f3a26]/70'
                        }`}
                      >
                        {tb.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Request & Business: first + last name */}
                    {(tab === 'request' || tab === 'business') && (
                      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                        <div>
                          <label className={labelClass}>{"First name"}</label>
                          <input name="firstName" value={formData.firstName} onChange={handleChange} required placeholder={"First name"} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>{"Last name"}</label>
                          <input name="lastName" value={formData.lastName} onChange={handleChange} required placeholder={"Last name"} className={inputClass} />
                        </div>
                      </div>
                    )}

                    {/* Callback: full name */}
                    {tab === 'callback' && (
                      <div>
                        <label className={labelClass}>{"Full name"}</label>
                        <input name="fullName" value={formData.fullName} onChange={handleChange} required placeholder={"Full name"} className={inputClass} />
                      </div>
                    )}

                    {/* Business: company */}
                    {tab === 'business' && (
                      <div>
                        <label className={labelClass}>{"Company name"}</label>
                        <input name="companyName" value={formData.companyName} onChange={handleChange} required placeholder={"Company name"} className={inputClass} />
                      </div>
                    )}

                    {/* Email */}
                    <div>
                      <label className={labelClass}>Email</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" className={inputClass} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClass}>{"Phone number"}</label>
                      <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+381 XX XXX XXXX" className={inputClass} />
                    </div>

                    {/* Callback: time */}
                    {tab === 'callback' && (
                      <div>
                        <label className={labelClass}>{"Preferred call time"}</label>
                        <input name="callTime" type="text" value={formData.callTime} onChange={handleChange} placeholder="09:00 – 12:00" className={inputClass} />
                      </div>
                    )}

                    {/* Message */}
                    {tab !== 'callback' && (
                      <div>
                        <label className={labelClass}>{"Message"}</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder={"Your message..."} className={`${inputClass} resize-none`} />
                      </div>
                    )}

                    {/* Checkboxes */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="mt-0.5 accent-[#a68150]" />
                        <span className="font-sans text-xs text-[#2f3a26]/60 leading-relaxed">
                          {'I have read and understood the Privacy Policy'}
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="whatsapp" checked={formData.whatsapp} onChange={handleChange} className="mt-0.5 accent-[#a68150]" />
                        <span className="font-sans text-xs text-[#2f3a26]/60 leading-relaxed">
                          {'I wish to receive notifications via WhatsApp and Viber'}
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="marketing" checked={formData.marketing} onChange={handleChange} className="mt-0.5 accent-[#a68150]" />
                        <span className="font-sans text-xs text-[#2f3a26]/60 leading-relaxed">
                          {'I wish to be informed about other Perose Property Group projects'}
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-[#2f3a26] text-[#ccbf99] font-sans uppercase text-sm tracking-wider hover:bg-[#1f261e] transition-colors disabled:opacity-60 cursor-pointer flex items-center justify-center gap-3"
                    >
                      {loading
                        ? ('Sending…')
                        : tab === 'callback'
                          ? ('Send callback request')
                          : ('Send request')}
                    </button>

                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
