import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

interface ExplanatoryItem {
  id: string;
  title: string;
  description: string;
}

export const Understanding: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(0);

  const activeItem = hoveredItem !== null ? hoveredItem : selectedItem;

  const items: ExplanatoryItem[] = [
    {
      id: 'tighten-automatically',
      title: 'The Body May Tighten Automatically',
      description:
        'Pelvic-floor muscles may tighten in anticipation of or during attempted penetration. This response can occur even when penetration is wanted.',
    },
    {
      id: 'different-causes',
      title: 'Pain Can Have Different Causes',
      description:
        'Dryness, infections, skin conditions and other pelvic-health concerns can also cause discomfort. Assessment helps identify what support may be appropriate.',
    },
    {
      id: 'care-begins-with-understanding',
      title: 'Care Can Begin With Understanding',
      description:
        'An initial conversation about your experiences and symptoms can help guide the next steps. An intimate examination is not automatically necessary.',
    },
  ];

  const handleMouseEnter = (idx: number) => {
    setHoveredItem(idx);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (idx: number) => {
    setSelectedItem((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="understanding"
      className="py-12 sm:py-16 md:py-18 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid: Left (Heading + Narrative + Uterus Illustration), Right (Accordions + Reassurance) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Label, Heading, Description, and Uterus Illustration */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Header Content */}
            <div className="space-y-3.5">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-sand-dark block">
                UNDERSTANDING VAGINISMUS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.2]">
                Why Can Penetration Feel Difficult or Painful?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal font-body max-w-xl">
                <p>
                  Vaginismus involves involuntary tightening of the muscles around the vaginal opening, which can make penetration difficult, uncomfortable or painful.
                </p>
                <p>
                  This can happen during attempted intimacy, tampon insertion or a vaginal examination. The muscle response is not something a person necessarily controls consciously.
                </p>
                <p>
                  Pain during penetration can also have other causes. A healthcare professional can help understand what may be contributing to your symptoms.
                </p>
              </div>
            </div>

            {/* Illustration Area: Uterus Symbol Centered Over Spreading-Colour Glow */}
            <div className="relative py-4 sm:py-6 flex items-center justify-center">
              {/* Spreading-colour glow effect */}
              <div
                className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full blur-2xl sm:blur-3xl pointer-events-none transition-all duration-700 opacity-75"
                style={{
                  background:
                    'radial-gradient(circle, rgba(202, 149, 133, 0.42) 0%, rgba(248, 131, 121, 0.24) 35%, rgba(232, 212, 194, 0.12) 65%, transparent 75%)',
                }}
                aria-hidden="true"
              />

              {/* Uterus symbol artwork */}
              <img
                src="/brand/uterus-heart-symbol.svg"
                alt="The Birthwave anatomical uterus and heart symbol"
                className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain drop-shadow-xs transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Information List + Reassurance */}
          <div className="lg:col-span-6 lg:pl-4 xl:pl-8">
            <div
              className="divide-y divide-sand/20"
              onMouseLeave={handleMouseLeave}
            >
              {items.map((item, idx) => {
                const isActive = activeItem === idx;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    className={`py-4 sm:py-5 transition-all duration-300 rounded-2xl px-3 sm:px-4 ${
                      isActive ? 'bg-sand-pale/35' : 'bg-transparent'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleClick(idx)}
                      aria-expanded={isActive}
                      aria-controls={`desc-${item.id}`}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-sand rounded-lg"
                    >
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-heading font-semibold transition-colors duration-200 tracking-tight leading-snug ${
                          isActive
                            ? 'text-sand-dark'
                            : 'text-charcoal group-hover:text-sand-dark'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          isActive
                            ? 'bg-sand-dark text-white rotate-180'
                            : 'bg-cream/80 text-sand-dark/70 group-hover:bg-sand-pale group-hover:text-sand-dark'
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </button>

                    {/* Smooth Collapsible Description */}
                    <div
                      id={`desc-${item.id}`}
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isActive
                          ? 'grid-rows-[1fr] opacity-100 mt-2.5'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-body text-xs sm:text-sm lg:text-[15px] text-charcoal/75 leading-relaxed pr-6">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* REASSURANCE: Positioned directly below the accordions */}
            <div className="mt-6 pt-5 border-t border-sand/20 px-3 sm:px-4">
              <div className="flex items-start sm:items-center gap-3 bg-sand-pale/50 rounded-xl p-3.5 sm:p-4 border border-sand/25">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sand-dark shrink-0 mt-0.5 sm:mt-0" strokeWidth={2.2} />
                <p className="font-body text-xs sm:text-sm text-charcoal/85 font-medium leading-relaxed">
                  Your concerns deserve to be understood at your own pace.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
