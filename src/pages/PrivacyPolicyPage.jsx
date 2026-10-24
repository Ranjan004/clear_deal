import React from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: '1. Introduction',
    content: `ClearDeal Property ("we", "our", "us") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store and protect information you provide when using our website and services. By using our website, you agree to the practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following personal information from you:
• Full name, first name, last name
• Email address
• Phone number / contact details
• Company name (for legal entities)
• Property preferences and enquiry details
• Communication preferences (WhatsApp, Viber, email)
• Browsing data via cookies and analytics tools`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use your personal data for the following purposes:
• To respond to your property enquiries and provide requested information
• To contact you regarding available properties and our services
• To send you updates, news and marketing communications (only with your consent)
• To improve our website and services
• To comply with our legal obligations
• To process and manage callback requests`,
  },
  {
    title: '4. Legal Basis for Processing',
    content: `We process your personal data on the following legal bases:
• Consent — where you have given explicit consent for marketing communications
• Contractual necessity — to fulfil our obligations when providing services
• Legitimate interests — to improve our services and communicate with potential clients
• Legal obligation — where required by applicable law`,
  },
  {
    title: '5. Data Sharing',
    content: `We do not sell your personal data to third parties. We may share your data with:
• Trusted service providers who assist in operating our website and business (subject to confidentiality obligations)
• Legal and regulatory authorities where required by law
• Business partners within the Perose Property Group for relevant property offerings (only with your consent)

All third parties are required to handle your data securely and in accordance with applicable data protection laws.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Enquiry data is typically retained for up to 3 years. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: '7. Cookies',
    content: `Our website uses cookies to improve your browsing experience and analyse website traffic. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain parts of our website.

Types of cookies we use:
• Essential cookies — required for the website to function
• Analytics cookies — to understand how visitors use our website
• Marketing cookies — to deliver relevant content and advertisements`,
  },
  {
    title: '8. Your Rights',
    content: `Under applicable data protection law, you have the following rights:
• Right of access — to request a copy of your personal data
• Right to rectification — to correct inaccurate or incomplete data
• Right to erasure — to request deletion of your data ("right to be forgotten")
• Right to restriction — to limit how we process your data
• Right to data portability — to receive your data in a structured format
• Right to object — to object to processing based on legitimate interests or direct marketing
• Right to withdraw consent — at any time, without affecting prior processing

To exercise any of these rights, please contact us using the details below.`,
  },
  {
    title: '9. Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction or alteration. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '10. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any external sites you visit.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a revised effective date.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:

ClearDeal Property
Email: cleardeal.property@gmail.com
Phone: +91 89799 53557 / +91 97188 65748
Address: Burhanuddin House No 1-68, Kh. No. 797, Block-I, Ground Floor, Jaitpur Extension Part-2, Badarpur, Delhi - 110044`,
  },
];

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f3ee]">

      {/* Hero */}
      <section className="bg-[#111e36] pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[#b8892a] text-xs mb-4">
            ClearDeal Property
          </p>
          <h1 className="font-serif text-[#fdf6e3] text-4xl sm:text-5xl uppercase tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-[#fdf6e3]/50 text-sm">
            Effective date: October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-[#1a2a4a]/70 text-base leading-relaxed mb-12 border-l-2 border-[#b8892a] pl-5">
            This Privacy Policy governs the collection, use and protection of personal data by ClearDeal Property.
            Please read this document carefully before submitting any personal information through our website.
          </p>

          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div key={i}>
                <h2 className="font-serif text-[#1a2a4a] text-xl sm:text-2xl mb-3 leading-snug">
                  {sec.title}
                </h2>
                <div className="font-sans text-[#1a2a4a]/70 text-[0.95rem] leading-relaxed whitespace-pre-line">
                  {sec.content}
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-10 border-b border-[#1a2a4a]/10" />
                )}
              </div>
            ))}
          </div>

          {/* Back button */}
          <div className="mt-16 pt-8 border-t border-[#1a2a4a]/10">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-3 text-[#b8892a] font-sans text-sm uppercase tracking-wider hover:gap-4 transition-all cursor-pointer"
            >
              <svg width="20" height="8" viewBox="0 0 25 10" fill="none" className="rotate-180">
                <path d="M0.5 5L24.5 5" stroke="currentColor" strokeLinecap="round" />
                <path d="M19.5 0.5L24.5 5L19.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" />
              </svg>
              Back
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
