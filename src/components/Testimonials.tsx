import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  headline: string;
  story: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'priya',
    headline: 'After 3 years of feeling broken and dismissed, I finally found answers.',
    story:
      'I had consulted three different gynecologists who simply told me to “relax and have a glass of wine”. It made me feel like something was wrong with me. Finding The Birthwave completely changed my trajectory. Dr. Santoshi and the pelvic rehab team took time to explain what involuntary muscle spasms actually are. For the first time in years, I felt heard and not judged. Today, I am living completely pain-free.',
  },
  {
    id: 'ananya-rohan',
    headline: 'It healed both the physical pain and the silent strain in our marriage.',
    story:
      'Vaginismus put an invisible wall between my husband and me. We carried this shame in silence for nearly two years. The Birthwave team welcomed both of us with so much warmth. Deepa and the specialists guided us through open conversations and gentle exercises without any pressure or rush. It wasn’t just physical therapy — it brought emotional intimacy back into our lives.',
  },
  {
    id: 'divya',
    headline: 'Dr. Adithi’s approach is so incredibly gentle and trauma-informed.',
    story:
      'I was terrified of having any pelvic examination done because past experiences were excruciating. Dr. Adithi immediately put me at ease — the entire first session was just talking, understanding my triggers, and teaching me diaphragmatic breathing to release pelvic floor tension. Everything happened at my pace, strictly with my consent. Within 6 weeks, the difference was night and day.',
  },
  {
    id: 'sneha',
    headline: 'The kindest clinic environment I have ever experienced in Chennai.',
    story:
      'The Birthwave clinic feels more like a serene sanctuary than a sterile hospital. No rushed 5-minute consultations, no dismissive comments. Dr. Santoshi listens with genuine empathy and reassures you that vaginismus is a recognized reflex response, not a personal flaw. The dignity and care with which they treat sensitive women’s health concerns is unmatched.',
  },
  {
    id: 'kavitha',
    headline: 'I could not even use a small tampon. Now I feel total comfort in my body.',
    story:
      'Even basic medical check-ups or attempting a tampon felt like hitting a solid brick wall. The pelvic floor physiotherapy and nervous system down-training sessions at The Birthwave gave me back control over my muscles. Step by step, without pain or force, my body unlearned the spasm reflex. I cannot thank the team enough.',
  },
  {
    id: 'meera',
    headline: 'Zero forced examination on Day 1 — that gave me complete peace of mind.',
    story:
      'My biggest anxiety was that a doctor would force an internal examination right away. When I reached out to The Birthwave, they assured me the first session is exclusively conversation and comfort assessment. True to their word, we just sat down, discussed my history, and built a step-by-step care plan. It gave me the courage to continue.',
  },
  {
    id: 'adithi-consultation',
    headline: 'I’m extremely glad I chose Dr.Adithi for consultation today',
    story:
      'She was extremely patient and kind throughout our session and I personally felt the empathetic way of approach was very re-assuring for my diagnosis. Loved the fact she approached and assessed me wholly and her step by step treatment approach. Also amazed by her clinical acumen; and would definitely blindly recommend her. Thank you Dr.Adithi for being the woman you are.✨',
  },
  {
    id: 'pelvic-floor-session',
    headline: 'It was my first time taking up pelvic floor session.',
    story:
      'Hello doctor, Just reaches US. It was insightful and I really liked the way you analyzed and suggested the measures. I had come for the session absolutely clueless and left with a lot of clarity in mind. Dr. Adithi is a very good listener and extremely knowledgeable person who would guide Just as per your requirement and she will start slow initially. She makes you feel extremely comfortable which is very important for discussing such sensitive matters. Truly appreciate the opportunity to meet Dr. Adithi, Dr. Santoshi and the entire team.',
  },
  {
    id: 'exercise-progress',
    headline: 'After 6 years of marriage life my problem is solved now.',
    story:
      'I wanted to tell you this, after i tried consistently for two weeks the exercises you taught me it works well. I’m happy. Great decision I have took which is that one visit came with u. Thankyou much',
  },
  {
    id: 'adithi-support',
    headline:
      'I just wanted to personally thank you for all the support and care you gave me throughout this journey.',
    story:
      'You were always so patient in listening to my concerns, clearing my doubts, and making me feel comfortable every step of the way.\n\nWhat meant the most to me was how you constantly followed up on my progress and supported me emotionally too. You genuinely helped me build confidence in myself and motivated me to achieve this milestone successfully.\n\nI’m truly grateful for your guidance, kindness, encouragement, and for being there throughout my healing journey. Thank you so much once again.\n\nPlease continue doing this wonderful work of helping women heal and educating them, because many women are still unaware of these issues and the support available for them. The care and awareness you create truly make a difference.',
  },
  {
    id: 'exceptional-care',
    headline: 'Thank you for the exceptional care you’ve provided.',
    story:
      'Your kindness and expertise made a difficult time much easier to navigate and I am truly grateful to have you as my doctor.\n\nDefinitely I will do all these. Thank u so much.',
  },
  {
    id: 'virtual-pelvic-support',
    headline:
      'I am have completed 1 year of marriage life .. but I facing pain during sex from starting.',
    story:
      'We were trying every time but that not worked out. After one year we went hospital for normal check up.. our body health is good. So i thought I only the reason for this because of my pain.\n\nOn that time I saw birthwave in Instagram page. Then I chat with Dr.santoshini. She suggested to dr.adithi pelvic therapist.\n\nSo I had my first session with adithi on virtual because I am far away from hospital. She is so kind and she understood my situation and emotion. And she slowely guide me to do some exercise to overcome the pain.\n\nSo I started slowely and everyday I updated to her my status.. And it gave me little bit confident and I experienced that pain with self exercise..\n\nAnd we were trying meanwhile..after 1 month my periods skipped and I confirmed doctor. I am so grateful to have you doctor. Thanks for you advise and everything it means a lot to us..\n\nThanks you.',
  },
  {
    id: 'supportive-consultation',
    headline: 'I visited Dr. Adhiti today, and she was absolutely excellent.',
    story:
      'She was very supportive, professional, and reassuring throughout the consultation. I truly appreciate your recommendation.',
  },
  {
    id: 'guidance-when-helpless',
    headline: 'Thank you mam....we will never forget u in our life.',
    story:
      'Since u guide us when we stand helpless on where to start on this..',
  },
  {
    id: 'rough-journey',
    headline: 'You were one of the people who helped me through my rough journey.',
    story: 'I wanted to thank you whole heartedly.',
  },
  {
    id: 'mindful-progress',
    headline:
      'Since yesterday, I’ve been feeling a little more comfortable looking at myself mindfully.',
    story:
      'After you helped me understand the connection yesterday, I started noticing many things about myself that I hadn’t noticed before.\n\nI feel more positive, motivated, and aware. Thank you so much, Ma’am, from the bottom of my heart.',
  },
  {
    id: 'detailed-session',
    headline: 'It was really nice speaking to you..',
    story:
      'When I was searching for many detailed things,, your small small findings gave me good start to work on... Never expected/ experienced such a patient in-depth discussion.. Was little hard to pick certain things,, but will definitely work it on.. Thanks for the detailed session ..',
  },
];

const TestimonialsHeader: React.FC = () => (
  <header className="testimonials-header">
    <span className="testimonials-eyebrow">
      Client Testimonials
    </span>
    <h2>
      Loved &amp; Trusted by Women Across Chennai
    </h2>
    <p>
      Real stories from individuals and couples who found relief, gentle guidance, and
      unconditional emotional safety at The BirthWave.
    </p>
  </header>
);

interface TestimonialCardProps {
  testimonial: Testimonial;
  isExpanded: boolean;
  onToggle: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isExpanded,
  onToggle,
}) => {
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useLayoutEffect(() => {
    const body = bodyRef.current;
    if (!body || isExpanded) return;

    const updateOverflowState = () => {
      setHasOverflow(body.scrollHeight > body.clientHeight + 1);
    };

    updateOverflowState();

    const resizeObserver = new ResizeObserver(updateOverflowState);
    resizeObserver.observe(body);

    return () => resizeObserver.disconnect();
  }, [isExpanded, testimonial.story]);

  useEffect(() => {
    if (!isExpanded && bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [isExpanded]);

  return (
    <article className="testimonial-card">
      <span
        className="testimonial-quote"
        aria-hidden="true"
      >
        “
      </span>

      <h3>
        {testimonial.headline}
      </h3>

      <p
        id={`testimonial-story-${testimonial.id}`}
        ref={bodyRef}
        className={`testimonial-copy ${isExpanded ? 'is-expanded' : ''}`}
      >
        {testimonial.story}
      </p>

      {hasOverflow && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={`testimonial-story-${testimonial.id}`}
          className="testimonial-read-more"
        >
          <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
          {!isExpanded && <ChevronRight strokeWidth={2.25} aria-hidden="true" />}
        </button>
      )}
    </article>
  );
};

export const Testimonials: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [expandedTestimonialId, setExpandedTestimonialId] = useState<string | null>(null);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const visibleTestimonials = testimonials.slice(
    activePage * testimonialsPerPage,
    (activePage + 1) * testimonialsPerPage,
  );

  useEffect(() => {
    if (isAutoplayPaused || totalPages < 2) return;

    const autoplay = window.setInterval(() => {
      setExpandedTestimonialId(null);
      setActivePage((currentPage) => (currentPage + 1) % totalPages);
    }, 6000);

    return () => window.clearInterval(autoplay);
  }, [isAutoplayPaused, totalPages]);

  const handleTestimonialToggle = (testimonialId: string) => {
    setExpandedTestimonialId((currentId) =>
      currentId === testimonialId ? null : testimonialId,
    );
  };

  const handlePageChange = (pageIndex: number) => {
    setExpandedTestimonialId(null);
    setActivePage(pageIndex);
  };

  const handlePreviousPage = () => {
    setExpandedTestimonialId(null);
    setActivePage((currentPage) =>
      currentPage === 0 ? totalPages - 1 : currentPage - 1,
    );
  };

  const handleNextPage = () => {
    setExpandedTestimonialId(null);
    setActivePage((currentPage) => (currentPage + 1) % totalPages);
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section scroll-mt-20 md:scroll-mt-24"
      aria-label="Client testimonials"
    >
      <div className="testimonials-shell">
        <TestimonialsHeader />

        <div
          className="testimonials-slider"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
          onFocusCapture={() => setIsAutoplayPaused(true)}
          onBlurCapture={() => setIsAutoplayPaused(false)}
        >
          {totalPages > 1 && (
            <div className="testimonials-controls" aria-label="Testimonial carousel controls">
              <button
                type="button"
                onClick={handlePreviousPage}
                aria-label="Show previous testimonials"
              >
                <ChevronLeft aria-hidden="true" strokeWidth={2.25} />
              </button>
              <button
                type="button"
                onClick={handleNextPage}
                aria-label="Show next testimonials"
              >
                <ChevronRight aria-hidden="true" strokeWidth={2.25} />
              </button>
            </div>
          )}
          <div className="testimonials-grid">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isExpanded={expandedTestimonialId === testimonial.id}
                onToggle={() => handleTestimonialToggle(testimonial.id)}
              />
            ))}
          </div>
          <div className="testimonials-pagination" aria-label="Testimonial pages">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                className={index === activePage ? 'is-active' : ''}
                onClick={() => handlePageChange(index)}
                aria-label={`Show testimonial page ${index + 1}`}
                aria-current={index === activePage ? 'page' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
