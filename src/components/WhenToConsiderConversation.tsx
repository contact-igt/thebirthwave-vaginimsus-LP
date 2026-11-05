import React from 'react';
import { Check } from 'lucide-react';

export const WhenToConsiderConversation: React.FC = () => {
  const supportPoints = [
    {
      title: 'Penetration Feels Painful or Difficult',
      description:
        'Penetration causes pain, discomfort or feels difficult even when you want it to happen.',
    },
    {
      title: 'Everyday Vaginal Activities Feel Uncomfortable',
      description:
        'Tampon use or vaginal examinations are uncomfortable or difficult.',
    },
    {
      title: 'You Feel Worried About Intimacy',
      description:
        'Previous discomfort makes you anxious or worried about physical intimacy.',
    },
    {
      title: 'You Avoid Physical Closeness',
      description:
        'You sometimes avoid intimate situations because you are worried about experiencing pain.',
    },
    {
      title: 'Your Concerns Continue Despite Trying to Relax',
      description:
        'You have been told to simply relax, but your discomfort or concerns continue.',
    },
    {
      title: 'You Want a Supportive Conversation',
      description:
        'You would like to discuss your concerns with a healthcare professional in a respectful and non-judgmental setting.',
    },
  ];

  return (
    <section id="when-to-seek" className="pt-12 pb-8 md:pt-16 md:pb-10 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-12">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            WHEN TO SEEK SUPPORT
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
            When Might It Help to Talk to Someone?
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            You do not have to wait until your concerns become overwhelming. Speaking with a healthcare professional may help you understand what you are experiencing and discuss suitable next steps.
          </p>
        </div>

        {/* Editorial Content Container */}
        <div className="max-w-5xl mx-auto bg-[#FAF1EC]/50 rounded-3xl p-6 sm:p-10 border border-sand/20 shadow-soft">
          
          {/* Introductory Subheading */}
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-xs sm:text-sm text-sand-dark uppercase tracking-[0.10em]">
              You may consider a consultation if:
            </h3>
          </div>

          {/* 6 Information Points in a 2-Column Conversational Grid with #FFFEFD Card Background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {supportPoints.map((point) => (
              <div
                key={point.title}
                className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFD] border border-[#CA9585]/20 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200 motion-reduce:hover:transform-none flex items-start gap-3.5 sm:gap-4 h-full"
              >
                {/* Subtle Circular Background with Brand Rose Sand (#CA9585) Checkmark */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F8EDE7] border border-[#CA9585]/25 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#CA9585]" strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-semibold sm:font-bold text-sm sm:text-base text-charcoal leading-snug">
                    {point.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-charcoal/75 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Reassurance */}
          <div className="mt-8 pt-6 border-t border-sand/20 text-center">
            <p className="font-body text-sm sm:text-base font-medium text-charcoal/90 leading-relaxed max-w-2xl mx-auto">
              You do not need to identify or diagnose your condition before arranging a consultation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
