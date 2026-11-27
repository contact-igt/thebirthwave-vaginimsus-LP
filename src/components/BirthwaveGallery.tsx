import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { file: 'workshop-partner.webp', alt: 'A hands-on partner support demonstration during a childbirth workshop', source: 'Childbirth workshop' },
  { file: 'yoga-stretch.jpg', alt: 'Prenatal yoga participants practicing a standing side stretch together', source: 'Prenatal yoga' },
  { file: 'workshop-educator.webp', alt: 'Dr. Santoshi Nandigam speaking to expectant parents about comfort during labour', source: 'Childbirth workshop' },
  { file: 'yoga-seated.jpg', alt: 'An instructor demonstrating an arm movement to a seated group', source: 'Prenatal yoga' },
  { file: 'workshop-movement.webp', alt: 'A childbirth workshop session about balance and movement during labour', source: 'Childbirth workshop' },
  { file: 'yoga-movement.jpg', alt: 'Participants following an instructor during standing movement practice', source: 'Prenatal yoga' },
  { file: 'workshop-questions.webp', alt: 'Dr. Santoshi Nandigam answering questions from workshop attendees', source: 'Childbirth workshop' },
  { file: 'yoga-circle.jpg', alt: 'A facilitator leading a session with participants seated in a circle', source: 'Prenatal yoga' },
];

export const BirthwaveGallery: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: number) => {
    const rail = railRef.current;
    const first = rail?.firstElementChild;
    const second = first?.nextElementSibling;
    if (!rail || !first || !second) return;

    const step = second.getBoundingClientRect().left - first.getBoundingClientRect().left;
    rail.scrollBy({
      left: direction * step,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

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
          A look at guided movement and group learning from our childbirth workshops and prenatal yoga classes.
        </p>
      </div>

      <div
        id="birthwave-gallery-photos"
        ref={railRef}
        role="region"
        aria-label="Childbirth workshop and prenatal yoga photos"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 scroll-px-4 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-sand-dark sm:gap-6 sm:px-6 sm:scroll-px-6 lg:px-8 lg:scroll-px-8"
      >
        {photos.map(({ file, alt, source }) => (
          <figure key={file} className="w-[82vw] max-w-[560px] shrink-0 snap-start sm:w-[44vw] lg:w-[31vw]">
            <img
              src={`/images/gallery/${file}`}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-lg border border-border-soft bg-sand-pale object-cover"
            />
            <figcaption className="mt-2 text-xs font-medium text-muted sm:text-sm">{source}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-3 flex max-w-7xl justify-end gap-2 px-4 sm:px-6 lg:px-8">
        <button type="button" aria-label="Previous photo" aria-controls="birthwave-gallery-photos" onClick={() => scrollGallery(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-border-soft bg-white text-sand-dark hover:bg-sand-pale">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button type="button" aria-label="Next photo" aria-controls="birthwave-gallery-photos" onClick={() => scrollGallery(1)} className="grid h-11 w-11 place-items-center rounded-full border border-border-soft bg-white text-sand-dark hover:bg-sand-pale">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
