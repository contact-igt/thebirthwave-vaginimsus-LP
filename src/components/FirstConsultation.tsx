import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const FirstConsultation: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: "Share What You're Experiencing",
      badgeBg: 'bg-[#CA9585]', // Rose Sand
    },
    {
      step: '02',
      title: 'Arrange Your First Appointment',
      badgeBg: 'bg-[#8C594A]', // Sand Dark
    },
    {
      step: '03',
      title: 'Talk at Your Own Pace',
      badgeBg: 'bg-[#F88379]', // Coral
    },
    {
      step: '04',
      title: 'Discuss Your Care Options',
      badgeBg: 'bg-[#5A372C]', // Sand Deep
    },
  ];

  return (
    <section id="first-visit" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centred at the top */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            FIRST CONSULTATION
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[34px] leading-[1.18] text-charcoal tracking-tight">
            What Happens at Your First Vaginismus Consultation?
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-xl mx-auto">
            Discuss your concerns and explore your next steps at your own pace.
          </p>
        </div>

        {/* Two-Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch max-w-4xl mx-auto mb-6 sm:mb-8">
          
          {/* Left Column – Consultation Image: Cropped to focus on upper body and vertically matching the 4 steps */}
          <div className="lg:col-span-5 relative w-full min-h-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:absolute lg:inset-0 rounded-2xl overflow-hidden shadow-xs border border-sand/20">
              <img
                src="/images/clinic/first-consultation.webp"
                alt="Clinician taking notes during a confidential vaginismus consultation"
                className="w-full h-full object-cover object-[center_15%] select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column – Four Numbered Consultation Headings */}
          <div className="lg:col-span-7 flex flex-col justify-between pl-5 sm:pl-6 pr-1 space-y-2.5 sm:space-y-3">
            {steps.map((st) => (
              <div
                key={st.step}
                className="group relative flex items-center pl-7 sm:pl-8 pr-4 sm:pr-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white border border-sand/20 shadow-2xs hover:shadow-xs hover:border-sand/40 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-default"
              >
                {/* Overlapping Numbered Circular Badge */}
                <div
                  className={`absolute -left-3.5 sm:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${st.badgeBg} flex items-center justify-center font-heading font-bold text-xs sm:text-[13px] text-white shadow-2xs select-none`}
                  aria-hidden="true"
                >
                  {st.step}
                </div>

                {/* Left-Aligned Heading */}
                <h3 className="font-heading text-sm sm:text-base font-semibold text-charcoal leading-snug">
                  {st.title}
                </h3>
              </div>
            ))}
          </div>

        </div>

        {/* Patient Comfort & Informed Consent Note (Compact Reassurance Panel) */}
        <div className="max-w-4xl mx-auto p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF1EC]/80 border border-sand/25 flex items-start sm:items-center gap-3 sm:gap-3.5 shadow-2xs">
          <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white border border-sand/30 flex items-center justify-center text-sand-dark shrink-0 shadow-2xs">
            <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-sand-dark" />
          </div>
          <div className="space-y-0.5 text-left">
            <h3 className="font-heading text-xs sm:text-sm font-semibold text-charcoal">
              Your Comfort and Consent Come First
            </h3>
            <p className="font-body text-xs sm:text-[13px] text-charcoal/80 leading-relaxed">
              An internal examination is not automatic. Any examination requires your informed consent, and you can pause or decline.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
