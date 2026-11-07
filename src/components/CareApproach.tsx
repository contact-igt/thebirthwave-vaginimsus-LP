import React, { useState, useRef } from 'react';

interface CareArea {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
}

export const CareApproach: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const careAreas: CareArea[] = [
    {
      id: 'gynaecological-assessment',
      tabLabel: 'Gynaecological Assessment',
      title: 'Gynaecological Assessment',
      description:
        'Assessing physical health and checking for other possible causes of discomfort, with examinations guided by consent.',
    },
    {
      id: 'pelvic-floor-physiotherapy',
      tabLabel: 'Pelvic-Floor Physiotherapy',
      title: 'Pelvic-Floor Physiotherapy',
      description:
        'Gentle exercises and relaxation techniques to help manage involuntary pelvic-floor muscle tightening.',
    },
    {
      id: 'emotional-psychological-support',
      tabLabel: 'Emotional & Psychological Support',
      title: 'Emotional & Psychological Support',
      description:
        'Support for anxiety, previous painful experiences and emotional concerns related to intimacy.',
    },
    {
      id: 'psychosexual-support',
      tabLabel: 'Psychosexual Support',
      title: 'Psychosexual Support',
      description:
        'Helping individuals explore intimacy, build confidence and reduce pressure around penetration.',
    },
    {
      id: 'breathwork-somatic-relaxation',
      tabLabel: 'Breathwork & Somatic Relaxation',
      title: 'Breathwork & Somatic Relaxation',
      description:
        'Breathing and gentle relaxation practices to support comfort and reduce muscle tension.',
    },
    {
      id: 'couple-partner-guidance',
      tabLabel: 'Couple & Partner Guidance',
      title: 'Couple & Partner Guidance',
      description:
        'Optional guidance to help partners communicate, understand concerns and offer support without pressure.',
    },
    {
      id: 'individualised-follow-up',
      tabLabel: 'Individualised Follow-Up',
      title: 'Individualised Follow-Up & Progression',
      description:
        'Care and follow-up are adapted to individual needs, comfort and clinical assessment.',
    },
  ];

  // Keyboard navigation for accessible tabs (WAI-ARIA)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIndex = (index + 1) % careAreas.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIndex = (index - 1 + careAreas.length) % careAreas.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = careAreas.length - 1;
    }

    if (newIndex !== index) {
      setActiveTab(newIndex);
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <section
      id="care-approach"
      className="py-10 md:py-14 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-6 md:mb-8">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            COMPREHENSIVE CARE
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[34px] leading-[1.15] text-charcoal tracking-tight">
            Support That Considers the Whole Person
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-xl mx-auto">
            Vaginismus care may involve physical, emotional and personalised support.
          </p>
        </div>

        {/* Interactive Tab List */}
        <div className="mb-5 sm:mb-6">
          <div
            role="tablist"
            aria-label="Comprehensive care disciplines"
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto"
          >
            {careAreas.map((area, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={area.id}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  role="tab"
                  id={`tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${idx}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  type="button"
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-heading text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border leading-tight ${
                    isActive
                      ? 'bg-sand-dark text-white border-sand-dark shadow-xs font-semibold'
                      : 'bg-white/70 border-sand/25 text-charcoal/80 hover:bg-white hover:text-charcoal hover:border-sand/40'
                  }`}
                >
                  <span>{area.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Care Approach Detail Panel */}
        <div className="max-w-2xl mx-auto">
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
            className="bg-white/85 backdrop-blur-xs rounded-2xl border border-sand/25 p-5 sm:p-7 shadow-soft transition-all duration-300"
          >
            <div key={activeTab} className="space-y-2 sm:space-y-2.5 animate-fadeIn">
              <h3 className="font-heading font-semibold sm:font-bold text-xl sm:text-2xl text-charcoal tracking-tight">
                {careAreas[activeTab].title}
              </h3>
              <p className="font-body text-sm sm:text-base text-charcoal/85 leading-relaxed">
                {careAreas[activeTab].description}
              </p>
            </div>
          </div>

          {/* Reassuring Closing Context Note */}
          <div className="mt-5 sm:mt-6 text-center">
            <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed max-w-lg mx-auto">
              Your care is guided by your needs, comfort and clinical assessment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
