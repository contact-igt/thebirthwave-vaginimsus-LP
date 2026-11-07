import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

interface ExplanatoryItem {
  id: string;
  title: string;
  description: string;
}

export const Understanding: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const activeItem = hoveredItem !== null ? hoveredItem : selectedItem;

  const items: ExplanatoryItem[] = [
    {
      id: 'anticipates-discomfort',
      title: 'The Body Anticipates Discomfort',
      description:
        'Past pain, examination fears or worry about penetration can trigger a protective response.',
    },
    {
      id: 'muscles-tighten',
      title: 'Muscles Tighten Automatically',
      description:
        'The pelvic-floor muscles contract without conscious control, making penetration painful or difficult.',
    },
    {
      id: 'gentle-support',
      title: 'Gentle Support Can Help',
      description:
        'Care may include physiotherapy, breathing techniques and emotional support to improve comfort.',
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
      <div className="max-w-7xl mx-auto pl-4 pr-12 sm:pl-6 sm:pr-14 lg:px-8">
        
        {/* Main 2-Column Grid: Left (Heading + Uterus Illustration), Right (Interactive List + Reassurance) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Label, Heading, Description, and Uterus Illustration */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Header Content */}
            <div className="space-y-3">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-sand-dark block">
                UNDERSTANDING VAGINISMUS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.2]">
                Why Does the Body Tighten Automatically?
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal font-body max-w-xl">
                Vaginismus can cause pelvic-floor muscles to tighten involuntarily when penetration is expected or attempted. This is an automatic response—not your fault.
              </p>
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

          {/* RIGHT COLUMN: Interactive Information List + Two Reassurance Items */}
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

            {/* TWO REASSURANCE ITEMS: Positioned directly below the third expandable item */}
            <div className="mt-5 pt-5 border-t border-sand/20 px-3 sm:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Reassurance Item 1 */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-sand-dark shrink-0 mt-0.5" strokeWidth={2.2} />
                  <div className="space-y-0.5">
                    <h4 className="font-heading font-semibold text-xs sm:text-sm text-charcoal tracking-tight">
                      Not Your Fault
                    </h4>
                    <p className="font-body text-[11px] sm:text-xs text-charcoal/70 leading-relaxed font-normal">
                      Muscle tightening is automatic, not a choice.
                    </p>
                  </div>
                </div>

                {/* Reassurance Item 2 */}
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-sand-dark shrink-0 mt-0.5" strokeWidth={2.2} />
                  <div className="space-y-0.5">
                    <h4 className="font-heading font-semibold text-xs sm:text-sm text-charcoal tracking-tight">
                      Care at Your Own Pace
                    </h4>
                    <p className="font-body text-[11px] sm:text-xs text-charcoal/70 leading-relaxed font-normal">
                      Support is guided by your needs and comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
