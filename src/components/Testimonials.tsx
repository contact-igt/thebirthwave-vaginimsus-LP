import React, { useState } from 'react';
import { Star, ExternalLink, HeartHandshake, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './resource-sections.css';

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

  const move = (step: number) => setActiveIndex(index => (index + step + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="patient-stories py-14 md:py-20 scroll-mt-20 md:scroll-mt-24" aria-label="Patient reviews and testimonials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <p className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">Patient Stories</p>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
            Real Stories. Personal Journeys. Meaningful Support.
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Explore experiences shared by women who have sought guidance, individualized care and support at The BirthWave.
          </p>
        </header>
        <div className="stories-body">
        <div className="stories-layout">
          <div className="stories-intro gap-4">
            <div className="stories-summary">
<div className="stories-google-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-pale/80 border border-sand/30">
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
              Verified Google Reviews &amp; Stories
            </span>
          </div>
            </div>
            <div className="stories-trust-row">
              <div className="flex items-center gap-1.5 text-sm text-muted">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>100% Confidential Care</span>
              </div>
<div className="stories-google-rating shrink-0 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-sand/20 shadow-xs">
              <span className="font-heading font-bold text-charcoal">4.9</span>
              <div className="flex items-center text-amber-500" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="sr-only">on Google Reviews</span>
            </div>
            </div>
          </div>
          <div className="story-navigation">
            <button type="button" className="resource-arrow" aria-label="Previous review" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></button>
            <button type="button" className="resource-arrow" aria-label="Next review" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></button>
          </div>
          <div className="stories-display" aria-live="polite">
            {[0, 1, 2].map(offset => {
              const review = testimonials[(activeIndex + offset) % testimonials.length];
              return (
                <article key={review.id} className={offset ? 'hidden lg:block' : ''}>
                  <blockquote className="story-text">
                    <div className="story-quote-heading">
                      <Quote className="text-sand" size={28} aria-hidden="true" />
                      <div className="story-rating-meta">
                        <div className="flex items-center gap-0.5 text-amber-400" role="img" aria-label={`${review.rating} out of 5 stars`}>
                          {Array.from({ length: review.rating }, (_, index) => <Star key={index} className="h-3.5 w-3.5 fill-amber-400" aria-hidden="true" />)}
                        </div>
                        <span className="story-review-meta">{review.timeAgo}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-semibold leading-snug">{review.headline}</h3>
                    <p className="text-sm leading-relaxed text-charcoal/80">{review.story}</p>
                  </blockquote>
                  <p className="story-reviewer">{review.name}</p>
                </article>
              );
            })}
          </div>
          <div className="col-span-full flex justify-center">
            <a href="https://www.google.com/maps/search/?api=1&query=The+Birthwave+Mahalingapuram+Main+Road+Chennai"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sand-dark hover:bg-sand-deep text-white border border-transparent font-heading font-medium text-sm transition-all duration-200">
              Read All Google Reviews<ExternalLink className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </a>
          </div>
        </div>
        </div>
        {/* Reassurance Banner & Direct CTA */}
        <div className="stories-confidentiality bg-gradient-to-r from-[#FAF1EC] via-white to-[#FAF1EC] rounded-2xl p-6 sm:p-8 border border-sand/30 shadow-soft max-w-4xl mx-auto text-center space-y-4">
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
          </div>
        </div>

      </div>
    </section>
  );
};
