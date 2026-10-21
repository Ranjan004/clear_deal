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
          src="/home/business/business.webp"
          alt="Contact"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111e36]/90 to-[#111e36]/30" />
        <div className="wrapper relative z-10 pt-8">
          <p className="font-sans uppercase tracking-[0.3em] text-[#ccbf99] text-xs mb-3">
            ClearDeal Property
          </p>
          <h1 className="font-serif uppercase text-[#fdfbef] leading-none text-[5rem] max-xl:text-[3.8rem] max-lg:text-[3rem] max-md:text-[2rem]">
            {"Contact"}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#fdfbef] py-24 max-lg:py-16">
        <div className="wrapper">
          <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-12">

            {/* Left: Info */}
            <div>
              <h2 className="font-serif text-[2.8rem] max-lg:text-[2.2rem] text-[#2f3a26] leading-tight mb-6">
                {lang === 'sr' ? (
                  <><span className="text-[#a68150]">Pošaljite</span> upit</>
                ) : (
                  <><span className="text-[#a68150]">Send</span> an inquiry</>
                )}
              </h2>
              <p className="font-sans text-[#2f3a26]/70 leading-relaxed text-[0.98rem] mb-12">
                {'For more information about available properties at ClearDeal Property, please fill in the form and we will contact you shortly.'}
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2f3a26]/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#a68150]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#2f3a26]/50 mb-1">
                      {"Address"}
                    </p>
                    <p className="font-sans text-[#2f3a26] text-[0.95rem]">
                      Bulevar heroja sa Košara, Novi Beograd
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2f3a26]/5 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#a68150]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#2f3a26]/50 mb-1">
                      {"Phone"}
                    </p>
                    <a href="tel:+381000000000" className="font-sans text-[#2f3a26] text-[0.95rem] hover:text-[#a68150] transition-colors">
                      +381 00 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2f3a26]/5 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#a68150]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#2f3a26]/50 mb-1">
                      Email
                    </p>
                    <a href="mailto:info@belgradearbor.com" className="font-sans text-[#2f3a26] text-[0.95rem] hover:text-[#a68150] transition-colors">
                      info@belgradearbor.com
                    </a>
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
