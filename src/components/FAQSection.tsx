import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // Pinned index keeps track of an answer explicitly opened via click/tap
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  // Hovered index tracks current desktop mouse hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Suppressed index prevents instant re-hover if a user clicks an open item to close it
  const [suppressedHoverIndex, setSuppressedHoverIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is vaginismus, and how does it affect intimacy?',
      a: 'Vaginismus involves involuntary contraction or clamping of the pelvic-floor muscles around the vaginal opening when penetration is attempted or anticipated. It can make penetrative intercourse, tampon use, or gynaecological examinations painful or impossible. It is an automatic physical reflex, not an emotional flaw or personal failure.',
    },
    {
      q: 'What sensations do women commonly experience?',
      a: 'Many describe sharp, burning, or stinging pain at the vaginal opening, or a physical feeling that penetration is hitting an immovable wall. Attempting to force penetration against this involuntary contraction causes severe discomfort and distress.',
    },
    {
      q: 'Can vaginismus be treated effectively?',
      a: 'Yes. With appropriate multidisciplinary care that addresses involuntary muscle overactivity, emotional comfort, and body awareness, many women experience significant improvement in comfort, relaxation, and ease of penetration.',
    },
    {
      q: 'How does pelvic-floor physiotherapy help with vaginismus?',
      a: 'A specialist pelvic-floor physiotherapist helps you identify and consciously relax hypertonic (chronically tightened) pelvic muscles. Care includes breathing-muscle coordination, gentle down-training, and, when appropriate and agreed upon, graded desensitisation exercises.',
    },
    {
      q: 'Will I need an internal physical examination during my first appointment?',
      a: 'Not necessarily. Your first appointment is dedicated to an unhurried conversation about your history, symptoms, and comfort boundaries. Any proposed intimate physical examination is discussed beforehand and requires your explicit informed consent. You can choose to talk only.',
    },
    {
      q: 'Why is emotional or psychosexual support recommended?',
      a: 'Chronic pain and intimacy difficulties naturally trigger anticipatory anxiety and stress. Psychological and psychosexual guidance helps unpack performance pressure, fear of pain, and emotional boundaries, supporting physical rehabilitation.',
    },
    {
      q: 'Can my husband or partner be involved in consultations?',
      a: 'Yes, if you wish. Involving a partner in educational sessions can help remove pressure and foster mutual understanding. However, partner participation is entirely optional, and private individual sessions are always available.',
    },
    {
      q: 'How many sessions are typically required?',
      a: 'Because every woman’s body and nervous system respond at their own pace, the number of sessions varies. Your care team coordinates a realistic, individualized follow-up plan after your initial assessment. Fixed numbers or guaranteed timelines are never promised.',
    },
    {
      q: 'Can a woman with vaginismus conceive or deliver vaginally?',
      a: 'Yes. Penetrative intercourse is not the only route to conception, and vaginismus does not mean vaginal birth is out of the question. Discussing your symptoms during antenatal care helps our maternity team plan supportive, trauma-informed care for pregnancy and birth.',
    },
    {
      q: 'Are consultations kept strictly private and confidential?',
      a: 'Yes. All consultations at The Birthwave adhere to strict professional medical confidentiality and privacy standards. Your personal concerns and medical history are never shared without your permission.',
    },
  ];

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

  return (
    <section id="faqs" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
            Clear Answers to Your Questions
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Concise, medically verified information regarding vaginismus, our care approach, and what to expect.
          </p>
        </div>

        {/* Compact Accordion List with Responsive Hover & Click Reveal */}
        <div className="space-y-2.5 mb-8" role="region" aria-label="Frequently Asked Questions list">
          {faqs.map((faq, idx) => {
            const isOpen = activeOpenIndex === idx;
            const isPinned = pinnedIndex === idx;
            const isHovered = activeHoverIndex === idx;

            // Brand color treatment:
            // - Active/Pinned: slightly stronger warm rose tint (#FAF0EB) + refined border accent
            // - Hovered: subtle warm rose tint (#FDF6F3) + soft border accent
            // - Default: clean white (#FFFEFD) + subtle brand border
            let itemStyleClasses = 'bg-[#FFFEFD] border-sand/20 shadow-sm';
            if (isPinned) {
              itemStyleClasses = 'bg-[#FAF0EB] border-[#CA9585]/55 shadow-sm';
            } else if (isHovered) {
              itemStyleClasses = 'bg-[#FDF6F3] border-[#CA9585]/35 shadow-sm';
            }

            return (
              <div
                key={idx}
                onPointerEnter={(e) => handlePointerEnter(e, idx)}
                onPointerLeave={(e) => handlePointerLeave(e, idx)}
                className={`group rounded-xl border transition-all duration-300 ease-in-out motion-reduce:transition-none overflow-hidden ${itemStyleClasses}`}
              >
                <button
                  type="button"
                  id={`faq-question-${idx}`}
                  onClick={() => handleClick(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CA9585] focus-visible:ring-offset-2 transition-colors duration-250 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-charcoal leading-snug pr-2">
                    {faq.q}
                  </span>
                  <span
                    className={`p-1.5 rounded-full transition-all duration-300 ease-in-out motion-reduce:transition-none shrink-0 ${
                      isOpen
                        ? 'bg-[#CA9585] text-white rotate-180'
                        : 'bg-sand-pale/70 text-sand-dark rotate-0 group-hover:bg-[#CA9585]/15'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 ease-in-out motion-reduce:transition-none" />
                  </span>
                </button>

                {/* Animated smooth expansion / collapse using CSS grid */}
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2.5 font-body text-sm text-charcoal/80 leading-relaxed border-t border-[#CA9585]/15">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discreet Inquiry Note */}
        <div className="p-4 rounded-xl bg-sand-pale/40 border border-sand/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
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
