import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // Pinned index keeps track of an answer explicitly opened via click/tap
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  // Hovered index tracks current desktop mouse hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Suppressed index prevents instant re-hover if a user clicks an open item to close it
  const [suppressedHoverIndex, setSuppressedHoverIndex] = useState<number | null>(null);
  // Toggle between showing first 4 questions or all 10 questions
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      q: 'What is vaginismus, and how does it affect intimacy?',
      a: 'Vaginismus is an involuntary tightening or spasm of the pelvic-floor muscles around the vaginal opening when penetration is attempted or anticipated. This automatic reflex can make intercourse, tampon use, or gynaecological examinations painful or impossible. It is a physical medical response, not an emotional flaw or personal failure.',
    },
    {
      q: 'What sensations do women commonly experience?',
      a: 'Women commonly describe a sharp, burning, or stinging pain at the vaginal opening, or a feeling that penetration is blocked by an immovable wall. Attempting to force penetration against this involuntary contraction causes severe discomfort and distress.',
    },
    {
      q: 'Can vaginismus be treated effectively?',
      a: 'Yes. With multidisciplinary care addressing muscle tightening, emotional comfort, and body awareness, many women experience significant improvement in comfort and ease of penetration. Care is gradual and tailored to each individual’s comfort level.',
    },
    {
      q: 'How does pelvic-floor physiotherapy help with vaginismus?',
      a: 'A pelvic-floor physiotherapist helps you identify and consciously relax hypertonic (chronically tightened) pelvic muscles. Care includes breathing coordination, gentle muscle down-training, and gradual desensitisation guided entirely by your consent.',
    },
    {
      q: 'Will I need an internal physical examination during my first appointment?',
      a: 'Not necessarily. Your first appointment is dedicated to an unhurried conversation about your history, symptoms, and comfort boundaries. Any proposed examination is discussed in advance, requires your explicit informed consent, and you can choose conversation only.',
    },
    {
      q: 'Why is emotional or psychosexual support recommended?',
      a: 'Pain and intimacy challenges often trigger anticipatory anxiety and stress. Psychological and psychosexual guidance helps unpack performance pressure, address fear of pain, and build emotional confidence alongside physical care.',
    },
    {
      q: 'Can my husband or partner be involved in consultations?',
      a: 'Yes, if you wish. Involving a partner in educational sessions can foster understanding, relieve pressure, and strengthen mutual support. Partner participation is completely optional, and private individual consultations are always available.',
    },
    {
      q: 'How many sessions are typically required?',
      a: 'The number of sessions varies because every body and nervous system responds at its own pace. Your care team coordinates an individualised follow-up plan based on your comfort and progress, without fixed timelines or guarantees.',
    },
    {
      q: 'Can a woman with vaginismus conceive or deliver vaginally?',
      a: 'Yes. Penetrative intercourse is not the only route to conception, and vaginismus does not rule out vaginal birth. Discussing your symptoms during antenatal care helps our maternity team plan supportive, trauma-informed care for pregnancy and birth.',
    },
    {
      q: 'Are consultations kept strictly private and confidential?',
      a: 'Yes. All consultations adhere strictly to professional medical confidentiality and privacy standards. Your personal concerns and medical history are kept completely private and are never shared without your permission.',
    },
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  // Effective open item: if currently hovering an item (and not suppressed), show it;
  // otherwise fallback to any pinned item.
  const activeHoverIndex =
    hoveredIndex !== null && suppressedHoverIndex !== hoveredIndex
      ? hoveredIndex
      : null;

  const activeOpenIndex = activeHoverIndex !== null ? activeHoverIndex : pinnedIndex;

  const handlePointerEnter = (e: React.PointerEvent, idx: number) => {
    // Only trigger hover for fine pointers (mouse/pen), not touchscreens
    if (e.pointerType === 'touch') return;
    if (suppressedHoverIndex === idx) return;
    setHoveredIndex(idx);
  };

  const handlePointerLeave = (e: React.PointerEvent, idx: number) => {
    if (e.pointerType === 'touch') return;
    setHoveredIndex((curr) => (curr === idx ? null : curr));
    if (suppressedHoverIndex === idx) {
      setSuppressedHoverIndex(null);
    }
  };

  const handleClick = (idx: number) => {
    if (pinnedIndex === idx) {
      // User clicked the already-pinned item: close it and suppress hover until mouse leaves
      setPinnedIndex(null);
      setHoveredIndex(null);
      setSuppressedHoverIndex(idx);
    } else {
      // User clicked to pin this item (or switch pinned target)
      setPinnedIndex(idx);
      setSuppressedHoverIndex(null);
    }
  };

  const handleToggleShowAll = () => {
    if (showAll) {
      // If closing, clear pinned or hovered selection if it was in the hidden slice
      if (pinnedIndex !== null && pinnedIndex >= 4) {
        setPinnedIndex(null);
      }
      if (hoveredIndex !== null && hoveredIndex >= 4) {
        setHoveredIndex(null);
      }
    }
    setShowAll((prev) => !prev);
  };

  return (
    <section id="faqs" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto pl-4 pr-12 sm:pl-6 sm:pr-14 lg:px-8">
        
        {/* Two-Column Layout on Desktop & Tablet: Intro Left, Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column – FAQ Introduction (Left-aligned & vertically centred) */}
          <div className="lg:col-span-5 text-left space-y-3">
            <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
              Clear Answers to Your Questions
            </h2>
            <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-md">
              Common questions about vaginismus, care and consultations.
            </p>
          </div>

          {/* Right Column – FAQ Accordion List */}
          <div className="lg:col-span-7">
            <div className="space-y-2.5" role="region" aria-label="Frequently Asked Questions list">
              {visibleFaqs.map((faq, idx) => {
                const isOpen = activeOpenIndex === idx;
                const isPinned = pinnedIndex === idx;
                const isHovered = activeHoverIndex === idx;

                let itemStyleClasses = 'bg-[#FFFEFD] border-sand/20 shadow-xs';
                if (isPinned) {
                  itemStyleClasses = 'bg-[#FAF0EB] border-[#CA9585]/55 shadow-xs';
                } else if (isHovered) {
                  itemStyleClasses = 'bg-[#FDF6F3] border-[#CA9585]/35 shadow-xs';
                }

                return (
                  <div
                    key={idx}
                    onPointerEnter={(e) => handlePointerEnter(e, idx)}
                    onPointerLeave={(e) => handlePointerLeave(e, idx)}
                    className={`group rounded-xl border transition-all duration-200 ease-in-out motion-reduce:transition-none overflow-hidden ${itemStyleClasses}`}
                  >
                    <button
                      type="button"
                      id={`faq-question-${idx}`}
                      onClick={() => handleClick(idx)}
                      className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CA9585] focus-visible:ring-offset-2 transition-colors duration-200 cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className="font-heading font-semibold text-sm sm:text-[15px] text-charcoal leading-snug pr-2">
                        {faq.q}
                      </span>
                      <span
                        className={`p-1.5 rounded-full transition-all duration-200 ease-in-out motion-reduce:transition-none shrink-0 ${
                          isOpen
                            ? 'bg-[#CA9585] text-white rotate-180'
                            : 'bg-sand-pale/70 text-sand-dark rotate-0 group-hover:bg-[#CA9585]/15'
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 ease-in-out motion-reduce:transition-none" />
                      </span>
                    </button>

                    {/* Animated smooth expansion / collapse using CSS grid */}
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className={`grid transition-all duration-250 ease-in-out motion-reduce:transition-none ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-2 font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed border-t border-[#CA9585]/15">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View All Questions / Show Less Button */}
            <div className="mt-4 sm:mt-5 text-center sm:text-left">
              <button
                type="button"
                onClick={handleToggleShowAll}
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold text-sand-dark border border-sand-dark/30 hover:border-sand-dark hover:bg-sand-pale/40 active:scale-98 transition-all duration-200 cursor-pointer shadow-2xs"
                aria-expanded={showAll}
              >
                <span>{showAll ? 'Show Less ↑' : 'View All Questions ↓'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Discreet WhatsApp Support Inquiry Note */}
        <div className="mt-8 md:mt-12 p-3.5 sm:p-4 rounded-xl bg-sand-pale/40 border border-sand/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body text-xs sm:text-sm text-charcoal/80">
            Have a question that isn't answered here? Ask our care coordinator privately.
          </p>
          <a
            href="https://wa.me/917904251378?text=Hello%20The%20Birthwave%20team,%20I%20have%20a%20private%20question%20regarding%20vaginismus%20care."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-heading text-xs font-semibold text-[#1E5E3A] bg-[#E8F5E9] hover:bg-[#D4EDDA] shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
