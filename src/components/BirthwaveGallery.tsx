import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { file: 'workshop-partner.webp', alt: 'A hands-on partner support demonstration during a childbirth workshop' },
  { file: 'yoga-stretch.jpg', alt: 'Prenatal yoga participants practicing a standing side stretch together' },
  { file: 'workshop-educator.webp', alt: 'Dr. Santoshi Nandigam speaking to expectant parents about comfort during labour' },
  { file: 'yoga-seated.jpg', alt: 'An instructor demonstrating an arm movement to a seated group' },
  { file: 'workshop-movement.webp', alt: 'A childbirth workshop session about balance and movement during labour' },
  { file: 'yoga-movement.jpg', alt: 'Participants following an instructor during standing movement practice' },
  { file: 'workshop-questions.webp', alt: 'Dr. Santoshi Nandigam answering questions from workshop attendees' },
  { file: 'pelvic-health-demonstration.webp', alt: 'An instructor guides a participant in a supported movement using an exercise ball' },
];

function scrollGallery(rail: HTMLDivElement, direction: number) {
  const first = rail.firstElementChild;
  const second = first?.nextElementSibling;
  if (!first || !second) return;

  const step = second.getBoundingClientRect().left - first.getBoundingClientRect().left;
  const end = rail.scrollWidth - rail.clientWidth;
  let next = rail.scrollLeft + direction * step;
  if (direction > 0 && rail.scrollLeft >= end - 1) next = 0;
  if (direction < 0 && rail.scrollLeft <= 1) next = end;

  rail.scrollTo({
    left: Math.max(0, Math.min(end, next)),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  });
}

export const BirthwaveGallery: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(rail);

    const timer = window.setInterval(() => {
      if (!visible || document.hidden || rail.matches(':active, :focus-within') || performance.now() - lastScroll.current < 3000) return;
      if (window.matchMedia('(hover: hover)').matches && rail.matches(':hover')) return;

      scrollGallery(rail, 1);
    }, 4500);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto mb-6 flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-sand-dark">Photo Gallery</p>
          <h2 id="gallery-title" className="mt-2 font-heading text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
            Inside The BirthWave
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Guided movement.<br />
          Pelvic health education.<br />
          Supportive vaginismus care.
        </p>
      </div>

      <div
        id="birthwave-gallery-photos"
        ref={railRef}
        role="region"
        aria-label="Childbirth workshop and prenatal yoga photos"
        tabIndex={0}
        onScroll={() => { lastScroll.current = performance.now(); }}
        className="mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-sand-dark sm:mx-6 sm:gap-6 lg:mx-8"
      >
        {photos.map(({ file, alt }) => (
          <figure key={file} className="w-[82%] shrink-0 snap-start sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]">
            <img
              src={`/images/gallery/${file}`}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-lg border border-border-soft bg-sand-pale object-cover"
            />
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-3 flex max-w-7xl justify-end gap-2 px-4 sm:px-6 lg:px-8">
        <button type="button" aria-label="Previous photo" aria-controls="birthwave-gallery-photos" onClick={() => railRef.current && scrollGallery(railRef.current, -1)} className="grid h-11 w-11 place-items-center rounded-full border border-border-soft bg-white text-sand-dark hover:bg-sand-pale">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button type="button" aria-label="Next photo" aria-controls="birthwave-gallery-photos" onClick={() => railRef.current && scrollGallery(railRef.current, 1)} className="grid h-11 w-11 place-items-center rounded-full border border-border-soft bg-white text-sand-dark hover:bg-sand-pale">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
