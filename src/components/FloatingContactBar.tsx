import React, { useState, useEffect } from 'react';
import { Phone, Instagram, Calendar, Youtube } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={className || "w-5 h-5 fill-current"}
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export const FloatingContactBar: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  // Hide mobile bottom bar when on-screen keyboard is active
  useEffect(() => {
    function onFocusIn(e: FocusEvent) {
      const el = e.target as HTMLElement | null;
      if (el && el.matches('input, textarea, select')) setHidden(true);
    }
    function onFocusOut(e: FocusEvent) {
      const el = e.target as HTMLElement | null;
      if (el && el.matches('input, textarea, select')) setHidden(false);
    }
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  const whatsappHref =
    'https://wa.me/917904251378?text=Hello%20The%20Birthwave%20team,%20I%20would%20like%20to%20enquire%20about%20a%20private%20Vaginismus%20consultation.';
  const phoneHref = 'tel:+917904251378';
  const instagramHref = 'https://www.instagram.com/thebirthwave';
  const youtubeHref = 'https://www.youtube.com/@thebirthwaveclinic';
  const bookHref = '#contact';

  const desktopLinks = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Chat',
      href: whatsappHref,
      external: true,
      icon: <WhatsAppIcon className="w-5 h-5 fill-current pointer-events-none" />,
    },
    {
      id: 'phone',
      label: 'Call +91 79042 51378',
      href: phoneHref,
      external: false,
      icon: <Phone className="w-5 h-5" />,
    },
    {
      id: 'instagram',
      label: 'Instagram @thebirthwave',
      href: instagramHref,
      external: true,
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      id: 'calendar',
      label: 'Book a Consultation',
      href: bookHref,
      external: false,
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: 'youtube',
      label: 'YouTube @thebirthwaveclinic',
      href: youtubeHref,
      external: true,
      icon: <Youtube className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Mobile Bottom Contact Bar: Call button centered, social media / contact on left & right */}
      <nav
        aria-label="Quick contact links"
        className={`fixed bottom-3.5 left-1/2 -translate-x-1/2 z-40 grid grid-cols-5 items-center w-[92%] max-w-[400px] rounded-full border border-sand/30 bg-white/95 px-2.5 py-2 shadow-soft-lg backdrop-blur-xl transition-all duration-300 md:hidden ${
          hidden ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        {/* 1. Left Social: WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          className="flex flex-col items-center justify-center gap-1 min-w-0 w-full text-center px-1 text-charcoal/75 transition-colors hover:text-sand-dark active:scale-95"
        >
          <WhatsAppIcon className="w-[18px] h-[18px] fill-current" />
          <span className="block w-full text-center text-[10px] font-heading font-medium tracking-tight truncate">
            WhatsApp
          </span>
        </a>

        {/* 2. Left Social: Instagram */}
        <a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @thebirthwave"
          className="flex flex-col items-center justify-center gap-1 min-w-0 w-full text-center px-1 text-charcoal/75 transition-colors hover:text-sand-dark active:scale-95"
        >
          <Instagram className="w-[18px] h-[18px]" />
          <span className="block w-full text-center text-[10px] font-heading font-medium tracking-tight truncate">
            Instagram
          </span>
        </a>

        {/* 3. CENTER: Call Button (Prominent, elevated circular button) */}
        <a
          href={phoneHref}
          aria-label="Call +91 79042 51378"
          className="group relative -mt-5 flex flex-col items-center justify-center min-w-0 w-full text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sand-dark text-white shadow-[0_8px_20px_rgba(140,89,74,0.45)] transition-all duration-200 group-active:scale-95 group-hover:bg-sand-deep">
            <Phone className="w-5 h-5" />
          </span>
          <span className="block w-full text-center text-[10px] font-heading font-bold text-charcoal mt-0.5">
            Call
          </span>
        </a>

        {/* 4. Right Social: YouTube */}
        <a
          href={youtubeHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube @thebirthwaveclinic"
          className="flex flex-col items-center justify-center gap-1 min-w-0 w-full text-center px-1 text-charcoal/75 transition-colors hover:text-sand-dark active:scale-95"
        >
          <Youtube className="w-[18px] h-[18px]" />
          <span className="block w-full text-center text-[10px] font-heading font-medium tracking-tight truncate">
            YouTube
          </span>
        </a>

        {/* 5. Right Action: Book */}
        <a
          href={bookHref}
          aria-label="Book a Consultation"
          className="flex flex-col items-center justify-center gap-1 min-w-0 w-full text-center px-1 text-charcoal/75 transition-colors hover:text-sand-dark active:scale-95"
        >
          <Calendar className="w-[18px] h-[18px]" />
          <span className="block w-full text-center text-[10px] font-heading font-medium tracking-tight truncate">
            Book
          </span>
        </a>
      </nav>

      {/* Desktop Fixed Right Rail */}
      <aside
        aria-label="Quick contact links"
        className="fixed right-3 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5 sm:gap-3"
      >
        {desktopLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white text-charcoal/90 border border-sand/25 shadow-soft hover:bg-sand-dark hover:text-white hover:border-sand-dark hover:scale-105 active:scale-95 transition-all duration-200 group relative focus:outline-none focus:ring-2 focus:ring-sand"
          >
            {item.icon}

            {/* Desktop Hover Tooltip */}
            <span className="hidden lg:group-hover:block absolute right-full mr-2.5 px-2.5 py-1 text-xs font-heading font-medium text-white bg-charcoal/95 rounded-md shadow-md whitespace-nowrap pointer-events-none transition-opacity">
              {item.label}
            </span>
          </a>
        ))}
      </aside>
    </>
  );
};
