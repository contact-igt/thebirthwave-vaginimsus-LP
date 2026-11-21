import React from 'react';
import { ShieldCheck, MapPin, Video, CheckCircle2 } from 'lucide-react';

export const FirstConsultation: React.FC = () => {
  const formats = [
    {
      title: 'In-Person Consultation',
      description: 'Meet the assigned care professional at The BirthWave, Nungambakkam, Chennai.',
      icon: MapPin,
      badge: 'At Clinic',
    },
    {
      title: 'Online Consultation',
      description:
        'Discuss your concerns through a scheduled Google Meet appointment. The clinician may recommend an in-person assessment when clinically necessary.',
      icon: Video,
      badge: 'Google Meet',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Choose Your Appointment',
      description: 'Select your preferred consultation format and an available time.',
      badgeBg: 'bg-[#CA9585]', // Rose Sand
    },
    {
      step: '02',
      title: 'Discuss Your Concerns',
      description:
        'Share your symptoms, questions and relevant history with the consulting professional in a private setting.',
      badgeBg: 'bg-[#8C594A]', // Sand Dark
    },
    {
      step: '03',
      title: 'Understand Your Assessment',
      description:
        'The clinician explains possible contributing factors and whether an examination or additional assessment would be useful.',
      badgeBg: 'bg-[#F88379]', // Coral
    },
    {
      step: '04',
      title: 'Discuss Your Care Options',
      description:
        'Understand suitable treatment approaches, recommended professionals, relevant fees and follow-up options.',
      badgeBg: 'bg-[#5A372C]', // Sand Deep
    },
  ];

  return (
    <section id="first-visit" className="py-16 md:py-20 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl lg:max-w-[1267px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-10">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            FIRST CONSULTATION
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[37.4px] leading-[1.18] text-charcoal tracking-tight">
            What Happens at Your First Vaginismus Consultation?
          </h2>
          <div className="space-y-1.5 font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            <p>
              Your first consultation is an opportunity to discuss what you have been experiencing, understand possible causes and explore appropriate next steps.
            </p>
            <p className="text-xs sm:text-sm text-sand-dark font-medium">
              You can choose from the available consultation formats.
            </p>
          </div>
        </div>

        {/* Available Consultation Formats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto mb-8 sm:mb-10">
          {formats.map((fmt) => {
            const Icon = fmt.icon;
            return (
              <div
                key={fmt.title}
                className="p-5 rounded-2xl bg-white border border-sand/25 shadow-2xs hover:shadow-soft hover:border-sand/40 transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-sand-pale/60 border border-sand/20 flex items-center justify-center text-sand-dark shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-charcoal">
                      {fmt.title}
                    </h3>
                    <span className="text-[10px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sand-pale/60 text-sand-deep border border-sand/20">
                      {fmt.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-Column Steps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch max-w-5xl lg:max-w-[1126px] mx-auto mb-6 sm:mb-8">
          
          {/* Left Column – Consultation Image */}
          <div className="lg:col-span-5 relative w-full min-h-0">
            <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:absolute lg:inset-0 rounded-2xl overflow-hidden shadow-xs border border-sand/20">
              <img
                src="/images/services/doctor-santoshi.webp"
                alt="Clinician taking notes during a confidential vaginismus consultation"
                className="w-full h-full object-cover object-[50%_45%] select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column – Four Numbered Steps with Full Descriptions */}
          <div className="lg:col-span-7 flex flex-col justify-between pl-5 sm:pl-6 pr-1 space-y-3 sm:space-y-3.5">
            {steps.map((st) => (
              <div
                key={st.step}
                className="group relative flex flex-col pl-7 sm:pl-8 pr-4 sm:pr-5 py-3.5 sm:py-4 lg:py-[22px] rounded-xl sm:rounded-2xl bg-white border border-sand/20 shadow-2xs hover:shadow-xs hover:border-sand/40 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-default text-left"
              >
                {/* Overlapping Numbered Circular Badge */}
                <div
                  className={`absolute -left-3.5 sm:-left-4 top-5 w-8 h-8 lg:w-[35.2px] lg:h-[35.2px] rounded-full ${st.badgeBg} flex items-center justify-center font-heading font-bold text-xs sm:text-[13px] text-white shadow-2xs select-none`}
                  aria-hidden="true"
                >
                  {st.step}
                </div>

                {/* Step Heading */}
                <h3 className="font-heading text-sm sm:text-base lg:text-[17.6px] font-semibold text-charcoal leading-snug">
                  {st.title}
                </h3>

                {/* Step Detailed Description */}
                <p className="font-body text-xs sm:text-[13px] text-charcoal/75 leading-relaxed mt-1">
                  {st.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Consent Reassurance Banner */}
        <div className="max-w-5xl lg:max-w-[1126px] mx-auto p-4 lg:p-[17.6px] sm:p-4.5 rounded-xl sm:rounded-2xl bg-[#FAF1EC]/85 border border-sand/25 flex items-start gap-3 sm:gap-3.5 shadow-2xs">
          <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white border border-sand/30 flex items-center justify-center text-sand-dark shrink-0 shadow-2xs mt-0.5">
            <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-sand-dark" />
          </div>
          <div className="space-y-1 text-left">
            <h3 className="font-heading text-xs sm:text-sm font-semibold text-charcoal">
              Informed Consent &amp; Comfort Reassurance
            </h3>
            <p className="font-body text-xs sm:text-[13px] text-charcoal/80 leading-relaxed">
              An internal examination is not automatic. Any proposed examination should be explained to you and requires informed consent. You can ask questions, decline or request that it stop.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
