import React from 'react';
import {
  Lock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Users,
  Info,
  Calendar,
} from 'lucide-react';

export const PrivacyMatters: React.FC = () => {
  const privacyPillars = [
    {
      title: 'Private Appointment Enquiries',
      description:
        'You can request an appointment without describing sensitive symptoms in the booking form.',
      icon: Lock,
    },
    {
      title: 'Your Preferred Contact Method',
      description:
        'You can tell us whether you prefer communication by phone, WhatsApp or email, and when it is suitable to contact you.',
      icon: MessageSquare,
    },
    {
      title: 'Confidential Medical Information',
      description:
        'Medical information is handled under applicable confidentiality and data-protection requirements, with access limited to authorised personnel for legitimate purposes.',
      icon: ShieldCheck,
    },
    {
      title: 'Choice and Consent',
      description:
        'Proposed examinations and treatment options are explained before proceeding. You may ask questions and discuss alternatives.',
      icon: CheckCircle2,
    },
    {
      title: 'Partner and Family Involvement',
      description:
        'A partner or family member need not be involved unless you choose, subject to any applicable legal requirements.',
      icon: Users,
    },
  ];

  return (
    <section
      id="privacy"
      className="py-14 sm:py-18 md:py-20 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden"
      aria-label="Privacy and Confidentiality"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.14em] block">
            YOUR PRIVACY MATTERS
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.18] text-charcoal tracking-tight">
            Your Health Information Deserves Respect and Confidentiality
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            We understand that discussing intimate-health concerns can feel personal. Our aim is to provide a respectful setting where you can ask questions and discuss your health without unnecessary disclosure.
          </p>
        </div>

        {/* 5 Privacy Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10">
          {privacyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-sand/25 shadow-soft hover:shadow-soft-lg hover:border-sand/40 hover:-translate-y-0.5 transition-all duration-200 text-left flex flex-col justify-start ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-sand-pale/60 border border-sand/20 flex items-center justify-center text-sand-dark shrink-0 mb-4 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-charcoal mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Supporting Note */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-[#FAF1EC] border border-sand/30 flex items-start gap-3.5 text-left shadow-2xs">
          <Info className="w-5 h-5 text-sand-dark shrink-0 mt-0.5" />
          <p className="font-body text-xs sm:text-sm text-charcoal/85 leading-relaxed">
            <strong className="font-heading font-semibold text-charcoal">Supporting note:</strong>{' '}
            Please choose a contact method you can access privately. Appointment notifications may be visible to anyone who has access to your phone or email.
          </p>
        </div>

        {/* Direct Action CTA */}
        <div className="text-center pt-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-sand-dark hover:bg-sand-deep text-white font-heading font-semibold text-xs sm:text-sm transition-all duration-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Confidential Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
};
