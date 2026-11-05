import React from 'react';

export const Understanding: React.FC = () => {
  const items = [
    {
      title: 'The Body Anticipates Discomfort',
      description:
        'Previous pain, fear of an examination or worry about penetration can trigger a protective response.',
    },
    {
      title: 'The Muscles Tighten Automatically',
      description:
        'The pelvic-floor muscles contract without you consciously controlling them. This can make penetration painful or difficult.',
    },
    {
      title: 'The Body Needs Gentle Support',
      description:
        'Appropriate care can help the muscles gradually relax and improve comfort. This may involve physiotherapy, breathing techniques and emotional support.',
    },
  ];

  return (
    <section id="understanding" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wide Horizontal Information Panel */}
        <div className="rounded-3xl bg-[#FAF1EC]/70 border border-sand/20 p-6 sm:p-10 lg:p-12 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Context, Main Heading & Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-sand-dark block mb-2">
                  UNDERSTANDING VAGINISMUS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.15]">
                  Why Does the Body Tighten Automatically?
                </h2>
              </div>

              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal font-body">
                Vaginismus can cause the muscles around the vaginal opening to tighten on their own when penetration is expected or attempted. This is an automatic response, not something you choose or cause.
              </p>

              {/* Supporting Highlights */}
              <div className="pt-5 border-t border-sand/20 space-y-4">
                <div className="space-y-0.5">
                  <h3 className="text-sm sm:text-base font-heading font-semibold text-charcoal">
                    Not Your Fault
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal font-body">
                    The muscles tighten automatically, without conscious control.
                  </p>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-sm sm:text-base font-heading font-semibold text-charcoal">
                    Care at Your Own Pace
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal font-body">
                    Support can be adapted to your concerns and individual needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Neatly Organised Information Items */}
            <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-sand/20">
              {items.map((item, idx) => (
                <div
                  key={item.title}
                  className={`space-y-1.5 ${
                    idx === 0 ? 'pb-6' : idx === items.length - 1 ? 'pt-6' : 'py-6'
                  }`}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-heading font-semibold text-charcoal tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-[15px] text-charcoal/75 leading-relaxed font-normal font-body">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
