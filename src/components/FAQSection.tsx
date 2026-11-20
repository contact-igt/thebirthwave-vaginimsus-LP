import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

export const FAQSection: React.FC = () => {
  // Pinned index keeps track of an answer explicitly opened via click/tap
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  // Hovered index tracks current desktop mouse hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Suppressed index prevents instant re-hover if a user clicks an open item to close it
  const [suppressedHoverIndex, setSuppressedHoverIndex] = useState<number | null>(null);
  // Toggle between showing initial questions or all 11 questions
  const [showAll, setShowAll] = useState(false);

  const faqs: FAQItem[] = [
    {
      q: 'What is vaginismus?',
      a: 'Vaginismus involves involuntary tightening of muscles around the vaginal opening, making penetration difficult or painful for some people.',
    },
    {
      q: 'Does pain during intercourse always mean vaginismus?',
      a: 'No. Pain can have several causes, including other pelvic or gynaecological conditions. Assessment helps identify possible contributing factors.',
    },
    {
      q: 'Do I need to complete the self-assessment before booking?',
      a: 'No. The questionnaire is optional. You can request a consultation directly.',
    },
    {
      q: 'Will I need an internal examination during my first appointment?',
      a: 'Not necessarily. Your clinician will discuss whether an examination would be useful. Any intimate examination requires informed consent, and you can decline or stop it.',
    },
    {
      q: 'Can I have my first consultation online?',
      a: 'Yes, an initial online consultation is planned through Google Meet. Some concerns may need an in-person examination or further assessment.',
    },
    {
      q: 'Who will conduct my first consultation?',
      a: 'Your initial online consultation will be conducted by Dr. Adithi Nair our Pelvic-Floor Physiotherapy & Rehabilitation, She will listen to your concerns, understand your symptoms and help you explore the next steps. If needed, she will coordinate further assessment with the gynaecology and wider care team.',
    },
    {
      q: 'Will I need all four therapies?',
      a: 'Not necessarily. The BirthWave offers four connected areas of support, but recommendations depend on your symptoms, clinical needs and preferences.',
    },
    {
      q: 'How long does treatment take?',
      a: 'The duration varies. Your care team can discuss a suitable approach and review progress with you over time.',
    },
    {
      q: 'Do I need to bring my husband or partner?',
      a: 'Not at all. You are welcome to attend your consultation individually or with your husband or partner, whichever makes you feel most comfortable.',
    },
    {
      q: 'Can vaginismus affect pregnancy or childbirth?',
      a: (
        <div className="space-y-2">
          <p>
            Having vaginismus does not automatically prevent you from becoming pregnant or having a vaginal delivery.
          </p>
          <p>
            Many women with vaginismus can conceive, and pregnancy and childbirth outcomes depend on individual circumstances. With appropriate care and support, difficulties related to penetration and pelvic-floor discomfort may be addressed.
          </p>
          <p>
            Our care team can guide you through your concerns about intimacy, pregnancy and childbirth based on your individual needs.
          </p>
        </div>
      ),
    },
    {
      q: 'How private is my consultation?',
      a: 'Your medical information is handled confidentially under applicable professional and legal requirements. You may request a discreet method of contact and ask the clinic about its privacy procedures.',
    },
    {"q": "Is pelvic floor physiotherapy provided individually or in groups?", "a": "At The BirthWave, pelvic floor physiotherapy is provided through individualized, one-to-one sessions. Assessment and treatment are adapted to each patient's symptoms, needs and comfort."},
    {"q": "What does the vaginismus care programme include?", "a": "The BirthWave's multidisciplinary approach brings together individualized pelvic floor physiotherapy, gynaecological guidance, counselling, hypnotherapy when appropriate, yoga and meditation, along with access to a WhatsApp support group. Individual care requirements may vary."},
    {"q": "How many treatment sessions are included?", "a": "The offline programme described by The BirthWave includes 10 individualized physiotherapy sessions of 90 minutes each, 12 yoga and meditation sessions per month of 60 minutes each, and two counselling sessions per month of 60 minutes each. The appropriate treatment plan will be discussed during consultation."},
    {"q": "Can I visit The BirthWave if I live outside Chennai?", "a": "Yes. Women have travelled from Bengaluru, Madurai, Chidambaram and other locations to seek care at The BirthWave in Chennai. Contact the care team to discuss consultation availability and plan your visit."},
    {"q": "Is support available during the treatment programme?", "a": "The BirthWave offers access to a WhatsApp support group as an additional source of connection during the care journey. Speak with the care team to understand how the group works and whether you would like to participate."},
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const activeHoverIndex =
    hoveredIndex !== null && suppressedHoverIndex !== hoveredIndex
      ? hoveredIndex
      : null;

  const activeOpenIndex = activeHoverIndex !== null ? activeHoverIndex : pinnedIndex;

  const handlePointerEnter = (e: React.PointerEvent, idx: number) => {
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
      setPinnedIndex(null);
      setHoveredIndex(null);
      setSuppressedHoverIndex(idx);
    } else {
      setPinnedIndex(idx);
      setSuppressedHoverIndex(null);
    }
  };

  const handleToggleShowAll = () => {
    if (showAll) {
      if (pinnedIndex !== null && pinnedIndex >= 5) {
        setPinnedIndex(null);
      }
      if (hoveredIndex !== null && hoveredIndex >= 5) {
        setHoveredIndex(null);
      }
    }
    setShowAll((prev) => !prev);
  };

  return (
    <section id="faqs" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout on Desktop & Tablet: Intro Left, Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column – FAQ Introduction */}
          <div className="lg:col-span-5 text-left space-y-3">
            <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
              Clear Answers to Your Questions
            </h2>
            <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-md">
              Common questions about vaginismus, care, consultations and privacy.
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
                <span>{showAll ? 'Show Less ↑' : 'View All 11 Questions ↓'}</span>
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
