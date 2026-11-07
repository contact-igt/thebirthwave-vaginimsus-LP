import React from 'react';

export const RecognisingExperiences: React.FC = () => {
  const symptomCards = [
    {
      image: '/images/experiences/transparent/pain-burning.png',
      alt: '3D clay illustration of female reproductive system with gentle coral discomfort highlight',
      title: 'Pain, Burning or Stinging',
      description:
        'Pain or burning around the vaginal opening during penetration, tampon use or examinations.',
    },
    {
      image: '/images/experiences/transparent/feeling-blocked.png',
      alt: '3D clay illustration of gently tightened pelvic-floor muscle sling suggesting involuntary tightening',
      title: 'A Feeling of Being Blocked',
      description:
        'Penetration may feel difficult, as though something is preventing it.',
    },
    {
      image: '/images/experiences/transparent/examination-discomfort.png',
      alt: '3D clay illustration of an empathetic doctor and patient discussing an examination in an unhurried consultation',
      title: 'Discomfort During Examinations',
      description:
        'Vaginal examinations or procedures may feel painful or difficult.',
    },
    {
      image: '/images/experiences/transparent/worry-anxiety.png',
      alt: '3D clay illustration of a thoughtful human profile with gentle thought swirl and heart representing emotional concern',
      title: 'Worry Before Intimacy',
      description:
        'Past discomfort may cause worry before penetration or physical contact.',
    },
    {
      image: '/images/experiences/transparent/avoiding-intimacy.png',
      alt: '3D clay illustration of two people sitting slightly apart communicating hesitation and emotional distance',
      title: 'Avoiding Physical Intimacy',
      description:
        'You may avoid intimacy because of concerns about pain or discomfort.',
    },
    {
      image: '/images/experiences/transparent/unsure-symptoms.png',
      alt: '3D clay illustration of a thoughtful woman with a question mark communicating uncertainty and seeking understanding',
      title: 'Unsure About Your Symptoms?',
      description:
        'A healthcare professional can help you understand and discuss your concerns.',
    },
  ];

  return (
    <section id="symptoms" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      {/* Anchor for backwards compatibility */}
      <div id="experiences" className="sr-only scroll-mt-20 md:scroll-mt-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 mb-10 md:mb-12">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-sand-dark block">
            COMMON EXPERIENCES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.2]">
            What Can Vaginismus Feel Like?
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-body font-normal">
            Vaginismus can cause pain, muscle tightening or difficulty with penetration and intimate examinations. Experiences vary from person to person.
          </p>
        </div>

        {/* Six Symptom Cards: Horizontal card structure with clay illustration in a soft background box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8">
          {symptomCards.map((card) => (
            <div
              key={card.title}
              className="p-5 sm:p-5.5 lg:p-6 rounded-2xl bg-white border border-sand/25 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200 motion-reduce:hover:transform-none flex flex-col justify-start"
            >
              {/* Top row: Clay illustration inside soft background box on left, heading beside it on right */}
              <div className="flex items-center gap-3.5 sm:gap-4 mb-3 sm:mb-3.5">
                {/* Illustration container: small, softly coloured Birthwave rose/neutral background */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#FAF1EC] border border-sand/20 flex items-center justify-center p-2 flex-shrink-0 shadow-2xs">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-contain select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>

                {/* Card Heading beside illustration, vertically centred */}
                <h3 className="text-base sm:text-lg font-heading font-semibold text-charcoal tracking-tight leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Bottom row: Shortened description underneath the entire top row */}
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-normal font-body">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="text-center pt-2 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed italic font-body">
            These experiences can have different causes. They do not, by themselves, confirm vaginismus.
          </p>
        </div>

      </div>
    </section>
  );
};
