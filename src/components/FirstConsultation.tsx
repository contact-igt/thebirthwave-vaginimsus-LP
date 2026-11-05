import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const FirstConsultation: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Share Your Concerns',
      detail:
        'Think about what you have been experiencing. You do not need medical terms or all the answers.',
      badgeBg: 'bg-[#CA9585]', // Rose Sand
    },
    {
      step: '02',
      title: 'Book Your First Conversation',
      detail:
        'Arrange an appointment at our clinic or contact our care team through WhatsApp.',
      badgeBg: 'bg-[#8C594A]', // Sand Dark
    },
    {
      step: '03',
      title: 'Talk at Your Own Pace',
      detail:
        'Share as much or as little as you feel comfortable with. Your concerns will be heard without judgement.',
      badgeBg: 'bg-[#F88379]', // Coral
    },
    {
      step: '04',
      title: 'Understand Your Next Steps',
      detail:
        'Discuss suitable care options with your clinician and decide together how to proceed.',
      badgeBg: 'bg-[#5A372C]', // Sand Deep
    },
  ];

  return (
    <section id="first-visit" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 sm:mb-10">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            FIRST CONSULTATION
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[34px] leading-[1.18] text-charcoal tracking-tight">
            What Happens at Your First Vaginismus Consultation?
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">
            Your first visit is an opportunity to discuss pain, discomfort or difficulty with intimacy. Our care team will listen to your concerns, answer your questions and help you understand the next steps at your own pace.
          </p>
        </div>

        {/* Vertical List of Horizontal Rounded Boxes with Overlapping Number Badges */}
        <div className="max-w-3xl mx-auto pl-6 sm:pl-8 pr-2 sm:pr-4 mb-8 sm:mb-10">
          <div className="space-y-4 sm:space-y-5">
            {steps.map((st) => (
              <div
                key={st.step}
                className="relative flex items-center min-h-[88px] sm:min-h-[92px] pl-8 sm:pl-10 pr-5 sm:pr-8 py-4 sm:py-5 rounded-2xl sm:rounded-3xl bg-white border border-sand/20 shadow-2xs hover:shadow-soft hover:border-sand/35 transition-all duration-200"
              >
                {/* Overlapping Numbered Circular Badge */}
                <div
                  className={`absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${st.badgeBg} flex items-center justify-center font-heading font-bold text-xs sm:text-sm text-white shadow-2xs select-none`}
                  aria-hidden="true"
                >
                  {st.step}
                </div>

                {/* Left-Aligned Heading and Full Description */}
                <div className="space-y-1 text-left min-w-0">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-charcoal leading-snug">
                    {st.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {st.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Comfort & Informed Consent Note (Separate Reassurance Panel) */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF1EC]/75 border border-sand/25 flex items-start gap-3.5 sm:gap-4 shadow-2xs">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-sand/30 flex items-center justify-center text-sand-dark shrink-0 mt-0.5 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-sand-dark" />
          </div>
          <div className="space-y-1 text-left">
            <h3 className="font-heading text-sm sm:text-base font-semibold text-charcoal">
              Your Comfort and Consent Come First
            </h3>
            <p className="font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              An internal examination is not automatically required during your first conversation. Any examination will be discussed with you and requires your informed consent. You can ask questions, pause or decline.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
