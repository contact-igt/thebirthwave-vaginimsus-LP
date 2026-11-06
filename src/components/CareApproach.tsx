import React, { useState, useRef, useEffect } from 'react';

interface CareArea {
  id: string;
  title: string;
  description: string;
}

export const CareApproach: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const careAreas: CareArea[] = [
    {
      id: 'gynaecological-assessment',
      title: 'Gynaecological Assessment',
      description:
        'Evaluating physical health, ruling out underlying pelvic conditions, and establishing a safe clinical baseline without rushed examinations.',
    },
    {
      id: 'pelvic-floor-physiotherapy',
      title: 'Pelvic-Floor Physiotherapy',
      description:
        'Gentle muscle down-training, bio-awareness, and gradual relaxation techniques to relieve involuntary pelvic hypertonicity at your pace.',
    },
    {
      id: 'emotional-psychological-support',
      title: 'Emotional & Psychological Support',
      description:
        'A compassionate space to explore anticipatory anxiety, past painful experiences, and emotional boundaries surrounding intimacy.',
    },
    {
      id: 'psychosexual-support',
      title: 'Psychosexual Support',
      description:
        'Reframing intimacy beyond penetration, expanding body comfort, and removing performance pressure between partners.',
    },
    {
      id: 'breathwork-somatic-relaxation',
      title: 'Breathwork & Somatic Relaxation',
      description:
        'Diaphragmatic breathing and gentle restorative yoga practices that soothe the autonomic nervous system and release pelvic tension.',
    },
    {
      id: 'couple-partner-guidance',
      title: 'Couple & Partner Guidance',
      description:
        'Optional educational discussions to help partners understand involuntary spasms, build mutual empathy, and communicate with zero pressure.',
    },
    {
      id: 'individualised-follow-up',
      title: 'Individualised Follow-Up & Progression',
      description:
        'Not every visitor needs all seven disciplines. Your clinician coordinates only what is relevant to your personal assessment and comfort.',
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
      className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 md:mb-10">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            COMPREHENSIVE CARE
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
            Support That Considers the Whole Person
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Because vaginismus involves both muscle responses and emotional comfort, effective care brings together multiple supportive disciplines.
          </p>
        </div>

        {/* Interactive Tab List: Responsive 2-Column Grid on Mobile, Centered Flex Wrap on Desktop */}
        <div className="mb-6 md:mb-8">
          <div
            role="tablist"
            aria-label="Comprehensive care disciplines"
            className="grid grid-cols-2 md:flex md:flex-wrap items-center md:justify-center gap-2 sm:gap-2.5"
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
                  className={`w-full md:w-auto min-h-[44px] px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-full font-heading text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border flex items-center justify-center text-center leading-tight break-words ${
                    idx === careAreas.length - 1 ? 'col-span-2 md:col-span-1 max-w-[260px] sm:max-w-xs mx-auto md:max-w-none md:mx-0' : ''
                  } ${
                    isActive
                      ? 'bg-sand-dark text-white border-sand-dark shadow-xs font-semibold'
                      : 'bg-white/70 border-sand/25 text-charcoal/80 hover:bg-white hover:text-charcoal hover:border-sand/40'
                  }`}
                >
                  <span className="max-w-[220px] sm:max-w-none">{area.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Care Approach Detail Panel */}
        <div className="max-w-3xl mx-auto">
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
            className="bg-white/80 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-sand/25 p-6 sm:p-10 shadow-soft transition-all duration-300"
          >
            <div key={activeTab} className="space-y-4 animate-fadeIn">
              
              {/* Context Tag & Counter */}
              <div className="flex items-center justify-between gap-4 border-b border-sand/15 pb-3">
                <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
                  CARE AREA 0{activeTab + 1} OF 07
                </span>
                <span className="font-heading text-xs text-muted">
                  Individualised Support
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h3 className="font-heading font-semibold sm:font-bold text-xl sm:text-2xl lg:text-[26px] text-charcoal tracking-tight">
                  {careAreas[activeTab].title}
                </h3>
                <p className="font-body text-sm sm:text-base text-charcoal/85 leading-relaxed">
                  {careAreas[activeTab].description}
                </p>
              </div>

            </div>
          </div>

          {/* Reassuring Closing Context Note */}
          <div className="mt-8 text-center">
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed max-w-xl mx-auto">
              Not every person requires every discipline. Your care is always guided by your comfort, personal preferences and clinical assessment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
