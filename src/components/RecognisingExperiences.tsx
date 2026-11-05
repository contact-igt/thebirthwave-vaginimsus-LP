import React from 'react';

export const RecognisingExperiences: React.FC = () => {
  const symptomCards = [
    {
      image: '/images/experiences/transparent/pain-burning.png',
      alt: '3D clay illustration of female reproductive system with gentle coral discomfort highlight',
      title: 'Pain, Burning or Stinging',
      description:
        'You may feel pain, burning or discomfort around the vaginal opening when penetration, tampon use or an examination is attempted.',
    },
    {
      image: '/images/experiences/transparent/feeling-blocked.png',
      alt: '3D clay illustration of pelvic-floor muscles surrounding the vaginal passage suggesting involuntary tightening',
      title: 'A Feeling of Being Blocked',
      description:
        'Penetration may feel difficult or as though something is preventing it. This can happen when the surrounding muscles tighten involuntarily.',
    },
    {
      image: '/images/experiences/transparent/examination-discomfort.png',
      alt: '3D clay illustration of an empathetic doctor and patient discussing an examination in an unhurried consultation',
      title: 'Discomfort During Examinations',
      description:
        'Pelvic examinations or other vaginal procedures may feel painful, uncomfortable or difficult to tolerate.',
    },
    {
      image: '/images/experiences/transparent/worry-anxiety.png',
      alt: '3D clay illustration of a thoughtful human profile with gentle thought swirl and heart representing emotional concern',
      title: 'Worry Before Intimacy',
      description:
        'Past discomfort may lead to worry or fear before penetration or physical contact, even before anything begins.',
    },
    {
      image: '/images/experiences/transparent/avoiding-intimacy.png',
      alt: '3D clay illustration of two human figures with gentle personal space communicating emotional comfort and boundaries',
      title: 'Avoiding Physical Intimacy',
      description:
        'You may avoid or withdraw from intimate situations because you are worried about experiencing pain or discomfort.',
    },
    {
      image: '/images/experiences/transparent/unsure-symptoms.png',
      alt: '3D clay healthcare consultation illustration with doctor, patient, speech bubble and medical cross',
      title: 'Unsure About Your Symptoms?',
      description:
        'You do not need to know the medical term for what you are experiencing. A healthcare professional can help you discuss your concerns.',
    },
  ];

  return (
    <section id="symptoms" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      {/* Anchor for backwards compatibility */}
      <div id="experiences" className="sr-only scroll-mt-20 md:scroll-mt-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-12">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-sand-dark">
            COMMON EXPERIENCES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.15]">
            What Can Vaginismus Feel Like?
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto font-body font-normal">
            Vaginismus can affect people in different ways. Some experience pain or muscle tightening, while others find penetration or intimate examinations difficult. These experiences can also cause worry or affect intimacy.
          </p>
        </div>

        {/* Six Symptom Cards: Clean White (#FFFFFF) Background with Freestanding Transparent 3D Clay Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-8">
          {symptomCards.map((card) => (
            <div
              key={card.title}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#CA9585]/25 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200 motion-reduce:hover:transform-none flex flex-col justify-start h-full"
            >
              {/* Freestanding 3D Clay Medical Illustration - No Box, Frame or Container */}
              <img
                src={card.image}
                alt={card.alt}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain select-none mb-3 sm:mb-4 pointer-events-none"
                loading="lazy"
              />

              {/* Card Title in Existing Dark Warm Brown */}
              <h3 className="text-base sm:text-lg font-heading font-semibold sm:font-bold text-charcoal tracking-tight mb-2 sm:mb-2.5 leading-snug">
                {card.title}
              </h3>

              {/* Card Description in Existing Readable Dark Grey/Brown */}
              <p className="text-sm text-charcoal/75 leading-relaxed font-normal font-body">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Note */}
        <div className="text-center pt-2 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed italic font-body">
            These experiences can have different causes. They do not, by themselves, confirm vaginismus.
          </p>
        </div>

      </div>
    </section>
  );
};
