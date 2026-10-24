import React from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the ClearDeal Property website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services. We reserve the right to update these terms at any time, and continued use of the website constitutes acceptance of the revised terms.`,
  },
  {
    title: '2. About ClearDeal Property',
    content: `ClearDeal Property is a real estate services company specialising in residential and commercial property sales and leasing. We act as a sales and marketing representative for various property developments. The information on our website is for general informational purposes and does not constitute a binding offer or contract.`,
  },
  {
    title: '3. Property Information & Accuracy',
    content: `All property descriptions, floor plans, images, renderings, pricing and availability information on our website are provided for illustrative purposes only.

• Renderings and visualisations are artistic impressions and may differ from the finished development.
• Floor plans and areas are approximate and subject to change.
• Pricing is subject to change without notice and does not include taxes, legal fees or other costs unless stated.
• Availability is updated regularly but cannot be guaranteed in real time.

Minor architectural and facade finish variations may occur upon final completion relative to artistic renders. Room numbering adheres to the Real Estate Cadastre system of the Republic of Serbia.`,
  },
  {
    title: '4. No Legal Advice',
    content: `The information provided on this website does not constitute legal, financial, tax or investment advice. We strongly recommend consulting qualified legal and financial professionals before entering into any property transaction. ClearDeal Property is not liable for any decisions made based solely on information provided on this website.`,
  },
  {
    title: '5. Enquiries & Communications',
    content: `When you submit an enquiry through our website:
• You consent to us contacting you by phone, email or messaging services (WhatsApp, Viber) as indicated.
• You confirm that the information provided is accurate and complete.
• Submission of an enquiry does not constitute a reservation or purchase agreement.
• All property reservations require a formal written agreement and reservation deposit.`,
  },
  {
    title: '6. Intellectual Property',
    content: `All content on this website — including text, images, videos, renderings, logos, brand assets and design — is the property of ClearDeal Property or its licensors and is protected by applicable intellectual property laws.

You may not:
• Copy, reproduce or distribute any content without prior written consent
• Use our brand assets or logo without authorisation
• Create derivative works based on our content
• Use our content for commercial purposes without a licence`,
  },
  {
    title: '7. Website Use',
    content: `You agree to use this website only for lawful purposes. You must not:
• Attempt to gain unauthorised access to any part of our website or systems
• Transmit any harmful, offensive or disruptive content
• Use automated tools to scrape or extract data from our website
• Interfere with the proper functioning of the website

We reserve the right to restrict or terminate access to our website at our discretion.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the fullest extent permitted by law, ClearDeal Property shall not be liable for:
• Any indirect, incidental or consequential loss arising from use of this website
• Errors, inaccuracies or omissions in property information
• Temporary unavailability of the website
• Actions taken based on information provided on the website

Our total liability in connection with these terms shall not exceed the amount paid by you for any specific service, if applicable.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our website may contain links to third-party websites for your convenience. We do not endorse, control or take responsibility for the content or practices of any linked websites. Accessing third-party links is entirely at your own risk.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Serbia. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of the Republic of Serbia.`,
  },
  {
    title: '11. Changes to These Terms',
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.`,
  },
  {
    title: '12. Contact',
    content: `For questions regarding these Terms and Conditions, please contact us:

ClearDeal Property
Email: cleardeal.property@gmail.com
Phone: +91 89799 53557 / +91 97188 65748
Address: Burhanuddin House No 1-68, Kh. No. 797, Block-I, Ground Floor, Jaitpur Extension Part-2, Badarpur, Delhi - 110044`,
  },
];

export default function TermsPage() {
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
            Terms & Conditions
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
            Please read these Terms and Conditions carefully before using the ClearDeal Property website.
            These terms govern your use of our website and services.
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

          {/* Back */}
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
