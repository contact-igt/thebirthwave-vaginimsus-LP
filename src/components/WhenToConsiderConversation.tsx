import React from 'react';
import { Check } from 'lucide-react';

export const WhenToConsiderConversation: React.FC = () => {
  const headings = [
    'Penetration Feels Painful or Difficult',
    'Everyday Vaginal Activities Feel Uncomfortable',
    'You Feel Worried About Intimacy',
    'You Avoid Physical Closeness',
    'Your Concerns Continue Despite Trying to Relax',
    'You Want a Supportive Conversation',
  ];

  return (
    <section
      id="when-to-seek"
      className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto pl-4 pr-12 sm:pl-6 sm:pr-14 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 mb-8 md:mb-10">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.14em] block">
            WHEN TO SEEK SUPPORT
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] leading-[1.2] text-charcoal tracking-tight">
            When Might It Help to Talk to Someone?
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-xl mx-auto">
            You can seek support whenever pain, discomfort or worry affects your comfort or intimacy.
          </p>
        </div>

        {/* Centred, Single-Column Vertical Stack of Six Compact Heading Cards */}
        <div className="max-w-xl sm:max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
          {headings.map((title) => (
            <div
              key={title}
              className="py-3 px-4 sm:py-3.5 sm:px-5 rounded-xl sm:rounded-2xl bg-white border border-sand/20 shadow-soft hover:shadow-soft-lg hover:border-sand/35 transition-all duration-200 flex items-center gap-3.5 sm:gap-4"
            >
              {/* Distinct circular background with darker rose-sand checkmark */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF1EC] border border-sand/25 flex items-center justify-center shrink-0 shadow-2xs">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sand-dark" strokeWidth={2.5} />
              </div>

              {/* Vertically centred prominent heading beside icon */}
              <h3 className="font-heading font-semibold text-sm sm:text-[15px] md:text-base text-charcoal leading-snug tracking-tight text-left min-w-0 flex-1">
                {title}
              </h3>
            </div>
          ))}
        </div>

        {/* Closing Reassurance Centred Beneath the Cards */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-sand/20 text-center max-w-2xl mx-auto">
          <p className="font-body text-xs sm:text-sm md:text-[15px] font-medium text-charcoal/85 leading-relaxed">
            You do not need to identify or diagnose your condition before arranging a consultation.
          </p>
        </div>

      </div>
    </section>
  );
};
