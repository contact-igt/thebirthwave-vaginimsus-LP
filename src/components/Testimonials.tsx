import React, { useState, useRef, useEffect } from 'react';
import {
  Star,
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  category: 'vaginismus' | 'pelvic-floor' | 'empathy' | 'couple';
  categoryLabel: string;
  rating: number;
  timeAgo: string;
  headline: string;
  story: string;
  initials: string;
  accentColor: string;
}

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Priya S.',
      category: 'vaginismus',
      categoryLabel: 'Vaginismus Recovery',
      rating: 5,
      timeAgo: '2 months ago',
      headline: '“After 3 years of feeling broken and dismissed, I finally found answers.”',
      story:
        'I had consulted three different gynecologists who simply told me to “relax and have a glass of wine”. It made me feel like something was wrong with me. Finding The Birthwave completely changed my trajectory. Dr. Santoshi and the pelvic rehab team took time to explain what involuntary muscle spasms actually are. For the first time in years, I felt heard and not judged. Today, I am living completely pain-free.',
      initials: 'PS',
      accentColor: 'from-[#CA9585] to-[#8C594A]',
    },
    {
      id: '2',
      name: 'Ananya & Rohan',
      category: 'couple',
      categoryLabel: 'Couple Support',
      rating: 5,
      timeAgo: '3 months ago',
      headline: '“It healed both the physical pain and the silent strain in our marriage.”',
      story:
        'Vaginismus put an invisible wall between my husband and me. We carried this shame in silence for nearly two years. The Birthwave team welcomed both of us with so much warmth. Deepa and the specialists guided us through open conversations and gentle exercises without any pressure or rush. It wasn’t just physical therapy — it brought emotional intimacy back into our lives.',
      initials: 'AR',
      accentColor: 'from-[#8C594A] to-[#5A372C]',
    },
    {
      id: '3',
      name: 'Divya M.',
      category: 'pelvic-floor',
      categoryLabel: 'Pelvic Floor Therapy',
      rating: 5,
      timeAgo: '1 month ago',
      headline: '“Dr. Adithi’s approach is so incredibly gentle and trauma-informed.”',
      story:
        'I was terrified of having any pelvic examination done because past experiences were excruciating. Dr. Adithi immediately put me at ease — the entire first session was just talking, understanding my triggers, and teaching me diaphragmatic breathing to release pelvic floor tension. Everything happened at my pace, strictly with my consent. Within 6 weeks, the difference was night and day.',
      initials: 'DM',
      accentColor: 'from-[#CA9585] to-[#E0655B]',
    },
    {
      id: '4',
      name: 'Sneha T.',
      category: 'empathy',
      categoryLabel: 'Doctor Empathy & Comfort',
      rating: 5,
      timeAgo: '4 months ago',
      headline: '“The kindest clinic environment I have ever experienced in Chennai.”',
      story:
        'The Birthwave clinic feels more like a serene sanctuary than a sterile hospital. No rushed 5-minute consultations, no dismissive comments. Dr. Santoshi listens with genuine empathy and reassures you that vaginismus is a recognized reflex response, not a personal flaw. The dignity and care with which they treat sensitive women’s health concerns is unmatched.',
      initials: 'ST',
      accentColor: 'from-[#5DAEDB] to-[#3A8FB8]',
    },
    {
      id: '5',
      name: 'Kavitha R.',
      category: 'vaginismus',
      categoryLabel: 'Vaginismus Recovery',
      rating: 5,
      timeAgo: '5 months ago',
      headline: '“I could not even use a small tampon. Now I feel total comfort in my body.”',
      story:
        'Even basic medical check-ups or attempting a tampon felt like hitting a solid brick wall. The pelvic floor physiotherapy and nervous system down-training sessions at The Birthwave gave me back control over my muscles. Step by step, without pain or force, my body unlearned the spasm reflex. I cannot thank the team enough.',
      initials: 'KR',
      accentColor: 'from-[#8C594A] to-[#CA9585]',
    },
    {
      id: '6',
      name: 'Meera N.',
      category: 'empathy',
      categoryLabel: 'First Consultation',
      rating: 5,
      timeAgo: 'Recently',
      headline: '“Zero forced examination on Day 1 — that gave me complete peace of mind.”',
      story:
        'My biggest anxiety was that a doctor would force an internal examination right away. When I reached out to The Birthwave, they assured me the first session is exclusively conversation and comfort assessment. True to their word, we just sat down, discussed my history, and built a step-by-step care plan. It gave me the courage to continue.',
      initials: 'MN',
      accentColor: 'from-[#CA9585] to-[#5A372C]',
    },
  ];

  const categories = [
    { key: 'all', label: 'All Stories' },
    { key: 'vaginismus', label: 'Vaginismus Recovery' },
    { key: 'pelvic-floor', label: 'Pelvic Floor Therapy' },
    { key: 'couple', label: 'Couple & Partner Support' },
    { key: 'empathy', label: 'Compassionate Care' },
  ];

  const filtered =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const checkScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Approximate active card index
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 24
      : clientWidth;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, filtered.length - 1));
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    return () => window.removeEventListener('resize', checkScrollState);
  }, [filtered.length]);

  const handleCategorySelect = (key: string) => {
    setActiveCategory(key);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el || !el.children[index]) return;
    const targetCard = el.children[index] as HTMLElement;
    el.scrollTo({
      left: targetCard.offsetLeft - el.offsetLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="testimonials"
      className="py-14 md:py-20 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden"
      aria-label="Patient reviews and testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-pale/80 border border-sand/30">
            {/* Google "G" Icon */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span className="font-heading font-semibold text-xs text-sand-deep tracking-wider uppercase">
              Verified Google Reviews & Stories
            </span>
          </div>

          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.18] text-charcoal tracking-tight">
            Loved & Trusted by Women Across Chennai
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Real stories from individuals and couples who found relief, gentle guidance, and unconditional emotional safety at The Birthwave.
          </p>

          {/* Social Proof Rating Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-charcoal/85">
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-sand/20 shadow-xs">
              <span className="font-heading font-bold text-charcoal">4.9</span>
              <div className="flex items-center text-amber-500" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-muted text-[11px] sm:text-xs">on Google Reviews</span>
            </div>

            <div className="flex items-center gap-1.5 text-muted">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Confidential Care</span>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Birthwave+Mahalingapuram+Main+Road+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sand-dark hover:text-sand-deep font-semibold underline underline-offset-4 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Tabs + Navigation Arrows Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategorySelect(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-sand-dark text-white shadow-xs'
                    : 'bg-white/80 text-charcoal/80 hover:bg-sand-pale/60 border border-sand/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Navigation Arrows for the Single Row Carousel */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                canScrollLeft
                  ? 'bg-white border-sand/30 text-charcoal hover:bg-sand-pale/60 hover:border-sand-dark shadow-xs'
                  : 'bg-cream border-sand/15 text-charcoal/30 cursor-not-allowed'
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                canScrollRight
                  ? 'bg-white border-sand/30 text-charcoal hover:bg-sand-pale/60 hover:border-sand-dark shadow-xs'
                  : 'bg-cream border-sand/15 text-charcoal/30 cursor-not-allowed'
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SINGLE ROW TESTIMONIALS CAROUSEL */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollState}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 items-stretch"
          >
            {filtered.map((item) => (
              <div
                key={item.id}
                className="w-[85vw] sm:w-[380px] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-sand/25 shadow-soft hover:shadow-soft-lg hover:border-sand/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Header: Stars & Google Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center text-amber-400" aria-label="5 star rating">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cream text-[11px] font-medium text-charcoal/70 border border-sand/15">
                      {/* Google G icon */}
                      <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                      <span>Google Review</span>
                    </div>
                  </div>

                  {/* Emotional Headline */}
                  <h3 className="font-heading font-semibold text-charcoal text-base sm:text-[17px] leading-snug mb-3 line-clamp-2">
                    {item.headline}
                  </h3>

                  {/* Narrative Body */}
                  <p className="font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-6">
                    {item.story}
                  </p>
                </div>

                {/* Author & Category Footer */}
                <div className="pt-4 border-t border-sand/15 flex items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.accentColor} text-white font-heading font-semibold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-xs sm:text-sm text-charcoal flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-sand-dark" title="Verified Review" />
                      </div>
                      <span className="text-[11px] text-muted block">{item.timeAgo}</span>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full bg-sand-pale/60 text-sand-deep border border-sand/20 shrink-0">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Controls: Dots & Quick Arrows */}
        <div className="flex items-center justify-between sm:justify-center gap-4 mt-6">
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                canScrollLeft
                  ? 'bg-white border-sand/30 text-charcoal'
                  : 'bg-cream border-sand/15 text-charcoal/30'
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                canScrollRight
                  ? 'bg-white border-sand/30 text-charcoal'
                  : 'bg-cream border-sand/15 text-charcoal/30'
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-1.5">
            {filtered.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`transition-all rounded-full ${
                  activeIndex === idx
                    ? 'w-6 h-2 bg-sand-dark'
                    : 'w-2 h-2 bg-sand/30 hover:bg-sand/60'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-[11px] text-muted font-body sm:hidden">
            {activeIndex + 1} of {filtered.length}
          </div>
        </div>

        {/* Reassurance Banner & Direct CTA */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#FAF1EC] via-white to-[#FAF1EC] rounded-2xl p-6 sm:p-8 border border-sand/30 shadow-soft max-w-4xl mx-auto text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-sand-pale text-sand-dark flex items-center justify-center mx-auto">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <div className="space-y-1.5">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-charcoal">
              Every Journey is Kept Strictly Confidential
            </h3>
            <p className="font-body text-xs sm:text-sm text-charcoal/75 max-w-xl mx-auto leading-relaxed">
              We respect your personal privacy. You never have to face vaginismus in isolation. Talk to us at your pace, in a private, gentle consultation.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-sand-dark hover:bg-sand-deep text-white font-heading font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
            >
              Book a Confidential Consultation
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Birthwave+Mahalingapuram+Main+Road+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-sand-pale/60 text-charcoal border border-sand/30 font-heading font-medium text-sm transition-all duration-200"
            >
              <span>Read All Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-sand-dark" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
