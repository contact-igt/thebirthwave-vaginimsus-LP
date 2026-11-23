import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Instagram,
  Play,
  VolumeX,
  X,
  Youtube,
} from 'lucide-react';
import './resource-sections.css';

const AUTO_SCROLL_SPEED = 0.58;

type SocialVideo = {
  id: string;
  platform: 'instagram' | 'youtube';
  title: string;
  topic: string;
  speaker: string;
  speakerRole: string;
  thumbnail: string;
  objectPosition?: string;
  href: string;
  youtubeId?: string;
  videoSrc?: string;
};

const youtubeVideos: SocialVideo[] = [
  {
    id: 'youtube-what-is-vaginismus',
    platform: 'youtube',
    title: 'What Is Vaginismus?',
    topic: 'Start here',
    speaker: 'Dr. Santoshi Nandigam',
    speakerRole: 'Obstetrician & Gynaecologist',
    thumbnail: '/images/services/778c833a-191e-420c-8389-1e74e8c8fd7a.png',
    href: 'https://www.youtube.com/watch?v=18VRfLcGT8E',
    youtubeId: '18VRfLcGT8E',
  },
  {
    id: 'youtube-recovery',
    platform: 'youtube',
    title: 'Understanding Vaginismus and Recovery',
    topic: 'Recovery',
    speaker: 'Dr. Santoshi Nandigam',
    speakerRole: 'Obstetrician & Gynaecologist',
    thumbnail: '/images/services/b3715b52-c307-457a-ac75-80f400a2a903.png',
    href: 'https://www.youtube.com/watch?v=cIdZFcD4ViQ',
    youtubeId: 'cIdZFcD4ViQ',
  },
  {
    id: 'youtube-painful-intimacy',
    platform: 'youtube',
    title: 'Why Does Intimacy Feel Painful?',
    topic: 'Pain & symptoms',
    speaker: 'Dr. Santoshi Nandigam',
    speakerRole: 'Obstetrician & Gynaecologist',
    thumbnail: '/images/services/d72d8770-a11b-4610-87e5-c36ca0467416.png',
    href: 'https://www.youtube.com/watch?v=W9taElo392U',
    youtubeId: 'W9taElo392U',
  },
  {
    id: 'youtube-pelvic-floor',
    platform: 'youtube',
    title: 'Vaginismus and the Pelvic Floor',
    topic: 'Pelvic floor',
    speaker: 'Dr. Adithi Nair',
    speakerRole: 'Pelvic-Floor Physiotherapist',
    thumbnail: '/images/services/c70987ee-3483-4ebe-851d-e454f06589c5.png',
    href: 'https://www.youtube.com/watch?v=Jl7r4gMAxiU',
    youtubeId: 'Jl7r4gMAxiU',
  },
  {
    id: 'youtube-vaginismus-care',
    platform: 'youtube',
    title: 'Pain During Intimacy and Vaginismus Care',
    topic: 'Care & recovery',
    speaker: 'Dr. Aditi (PT)',
    speakerRole: 'Pelvic-Floor Physiotherapist',
    thumbnail: '/images/clinic/education.webp',
    href: 'https://www.youtube.com/watch?v=P29TlC9lDz0',
    youtubeId: 'P29TlC9lDz0',
  },
  {
    id: 'youtube-tampons-vaginismus',
    platform: 'youtube',
    title: 'Can You Use Tampons and Still Have Vaginismus?',
    topic: 'Common questions',
    speaker: 'The BirthWave Care Team',
    speakerRole: 'Vaginismus education',
    thumbnail: '/images/services/2ab5686a-7b8c-4c06-b83b-417dffb3d515.png',
    href: 'https://www.youtube.com/shorts/euwj9YnQzUQ',
    youtubeId: 'euwj9YnQzUQ',
  },
];

// Instagram currently has profile-level links in the project. Instagram does not
// expose a reliable autoplay video stream from a profile URL, so add a direct
// MP4/WebM URL here when the final reel files are available.
const instagramVideos: SocialVideo[] = [
  {
    id: 'instagram-medical-explanation',
    platform: 'instagram',
    title: 'What Actually Is Vaginismus?',
    topic: 'Medical explanation',
    speaker: 'Dr. Santoshi Nandigam',
    speakerRole: 'Founder · Obstetrician & Gynaecologist',
    thumbnail: '/images/doctors/dr-santoshi.jpg',
    objectPosition: '50% 25%',
    href: 'https://www.instagram.com/thebirthwave/',
  },
  {
    id: 'instagram-pelvic-physio',
    platform: 'instagram',
    title: 'How Pelvic Floor Physiotherapy Helps',
    topic: 'Pelvic physio',
    speaker: 'Dr. Adithi Nair',
    speakerRole: 'Pelvic-Floor Physiotherapist',
    thumbnail: '/images/doctors/dr-adithi.jpg',
    objectPosition: '50% 20%',
    href: 'https://www.instagram.com/thebirthwave/',
  },
  {
    id: 'instagram-pregnancy-birth',
    platform: 'instagram',
    title: 'Can You Conceive & Deliver Naturally?',
    topic: 'Pregnancy & birth',
    speaker: 'Dr. Santoshi Nandigam',
    speakerRole: 'Founder · Obstetrician & Gynaecologist',
    thumbnail: '/images/clinic/consultation.webp',
    objectPosition: '50% 50%',
    href: 'https://www.instagram.com/thebirthwave/',
  },
  {
    id: 'instagram-consultation',
    platform: 'instagram',
    title: 'Will There Be an Internal Exam?',
    topic: 'Consent & safety',
    speaker: 'Dr. Adithi Nair',
    speakerRole: 'Pelvic-Floor Physiotherapist',
    thumbnail: '/images/clinic/first-consultation.webp',
    objectPosition: '50% 45%',
    href: 'https://www.instagram.com/thebirthwave/',
  },
];

// Only videos with real individual video URLs are rendered in the carousel.
// Profile-only social links are intentionally excluded until direct Reel URLs are available.
const mediaItems: SocialVideo[] = [...youtubeVideos];

const getYouTubeInlineUrl = (video: SocialVideo) => {
  const url = new URL(`https://www.youtube.com/embed/${video.youtubeId}`);
  url.searchParams.set('autoplay', '1');
  url.searchParams.set('mute', '1');
  url.searchParams.set('controls', '0');
  url.searchParams.set('loop', '1');
  url.searchParams.set('playlist', video.youtubeId || '');
  url.searchParams.set('playsinline', '1');
  url.searchParams.set('rel', '0');
  url.searchParams.set('modestbranding', '1');
  return url.toString();
};

const getInstagramEmbedUrl = (href: string) => {
  try {
    const url = new URL(href);
    if (!/(reel|p|tv)/.test(url.pathname)) return null;
    url.pathname = `${url.pathname.replace(/\/$/, '')}/embed/`;
    return url.toString();
  } catch {
    return null;
  }
};

const PlatformMark: React.FC<{ platform: SocialVideo['platform']; size?: number }> = ({ platform, size = 15 }) =>
  platform === 'instagram' ? <Instagram size={size} aria-hidden="true" /> : <Youtube size={size} aria-hidden="true" />;

const InlinePreview: React.FC<{ item: SocialVideo; isActive: boolean }> = ({ item, isActive }) => {
  if (isActive && item.videoSrc) {
    return (
      <video
        className="social-video-inline-frame"
        src={item.videoSrc}
        poster={item.thumbnail}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
    );
  }

  if (isActive && item.platform === 'youtube' && item.youtubeId) {
    return (
      <iframe
        className="social-video-inline-frame"
        src={getYouTubeInlineUrl(item)}
        title={`${item.title} preview`}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <img
      className="social-video-poster"
      src={item.thumbnail}
      alt=""
      loading="lazy"
      decoding="async"
      style={{ objectPosition: item.objectPosition || 'center' }}
    />
  );
};

const VideoModal: React.FC<{ item: SocialVideo; onDismiss: () => void }> = ({ item, onDismiss }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const instagramEmbedUrl = item.platform === 'instagram' ? getInstagramEmbedUrl(item.href) : null;

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="social-video-modal"
      aria-labelledby="social-video-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onDismiss();
      }}
    >
      <div className="social-video-modal-header">
        <div>
          <p className="social-video-modal-kicker"><Play size={14} fill="currentColor" aria-hidden="true" /> The BirthWave video</p>
          <h3 id="social-video-modal-title">{item.title}</h3>
        </div>
        <button type="button" className="resource-arrow" onClick={onDismiss} aria-label="Close video">
          <X aria-hidden="true" />
        </button>
      </div>

      {item.videoSrc ? (
        <video
          className="social-video-modal-frame"
          src={item.videoSrc}
          poster={item.thumbnail}
          controls
          autoPlay
          muted
          playsInline
        />
      ) : item.platform === 'youtube' && item.youtubeId ? (
        <iframe
          className="social-video-modal-frame"
          src={getYouTubeInlineUrl(item).replace('controls=0', 'controls=1')}
          title={item.title}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : instagramEmbedUrl ? (
        <iframe
          className="social-video-modal-frame social-video-instagram-frame"
          src={instagramEmbedUrl}
          title={item.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="social-video-modal-fallback">
          <img src={item.thumbnail} alt="" style={{ objectPosition: item.objectPosition || 'center' }} />
          <p>Open this reel on Instagram to watch the full video.</p>
        </div>
      )}

      <div className="social-video-modal-footer">
        <p><VolumeX size={15} aria-hidden="true" /> Video previews play silently so they do not interrupt the page.</p>
        <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onDismiss}>
          <PlatformMark platform={item.platform} /> Open on {item.platform === 'instagram' ? 'Instagram' : 'YouTube'} <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </dialog>
  );
};

const MediaCard: React.FC<{ item: SocialVideo; allowInlinePreview: boolean; onPlay: (item: SocialVideo) => void }> = ({ item, allowInlinePreview, onPlay }) => (
  <article className="social-video-card">
    <button type="button" className="social-video-visual" onClick={() => onPlay(item)} aria-label={`Play ${item.title}`}>
      <InlinePreview item={item} isActive={allowInlinePreview} />
      <span className="social-video-scrim" aria-hidden="true" />
      <span className="social-video-source"><Play size={13} fill="currentColor" aria-hidden="true" /> Watch video</span>
      {allowInlinePreview && (item.platform === 'youtube' || item.videoSrc) && <span className="social-video-muted"><VolumeX size={13} /> Muted preview</span>}
    </button>
    <div className="social-video-card-body">
      <span className="social-video-topic">{item.topic}</span>
      <h3>{item.title}</h3>
      <p>{item.speaker}</p>
      <span className="social-video-role">{item.speakerRole}</span>
    </div>
  </article>
);

export const SocialVideoCarousel: React.FC = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const resumeAutoScrollTimer = useRef<number | null>(null);
  const [activeItem, setActiveItem] = useState<SocialVideo | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.('change', update);
    return () => mediaQuery.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let frame = 0;
    const tick = () => {
      if (!isPaused && !reducedMotion && row.scrollWidth > row.clientWidth) {
        const maxScroll = row.scrollWidth - row.clientWidth;
        row.scrollLeft = Math.min(row.scrollLeft + AUTO_SCROLL_SPEED, maxScroll);
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isPaused, reducedMotion]);

  const scrollByCard = (direction: number) => {
    const row = rowRef.current;
    if (!row) return;
    const firstCard = row.querySelector<HTMLElement>('.social-video-card');
    const gap = 16;
    const amount = (firstCard?.offsetWidth || row.clientWidth * 0.8) + gap;
    const maxScroll = Math.max(0, row.scrollWidth - row.clientWidth);
    const targetScroll = Math.max(0, Math.min(row.scrollLeft + direction * amount, maxScroll));
    setIsPaused(true);
    if (resumeAutoScrollTimer.current !== null) window.clearTimeout(resumeAutoScrollTimer.current);
    row.scrollTo({ left: targetScroll, behavior: reducedMotion ? 'auto' : 'smooth' });
    resumeAutoScrollTimer.current = window.setTimeout(() => {
      setIsPaused(false);
      resumeAutoScrollTimer.current = null;
    }, 900);
  };

  return (
    <section id="social-video-carousel" className="social-video-section" aria-labelledby="social-video-heading">
      <div className="social-video-container">
        <header className="social-video-header">
          <p className="social-video-eyebrow"><span /> Video resources <span /></p>
          <h2 id="social-video-heading">Understanding Vaginismus Together</h2>
          <p>Clear, compassionate answers about vaginismus, pelvic-floor health and your care journey — in short videos from The BirthWave care team.</p>
        </header>

        <div className="social-video-carousel-shell">
          <button type="button" className="social-video-mobile-nav social-video-mobile-nav-left" onClick={() => scrollByCard(-1)} aria-label="Previous videos">
            <ChevronLeft aria-hidden="true" />
          </button>
          <div
            ref={rowRef}
            className="social-video-row no-scrollbar"
            role="region"
            aria-roledescription="carousel"
            aria-label="The BirthWave educational videos"
            tabIndex={0}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
            }}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                event.preventDefault();
                scrollByCard(event.key === 'ArrowRight' ? 1 : -1);
              }
            }}
          >
            {mediaItems.map((item) => (
              <MediaCard key={item.id} item={item} allowInlinePreview onPlay={setActiveItem} />
            ))}
          </div>
          <button type="button" className="social-video-mobile-nav social-video-mobile-nav-right" onClick={() => scrollByCard(1)} aria-label="Next videos">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="social-video-footer-row">
          <span><VolumeX size={15} aria-hidden="true" /> Auto-playing previews are muted</span>
          <span>Tap any card to open the full video</span>
          <div className="social-video-links">
            <a href="https://www.instagram.com/thebirthwave" target="_blank" rel="noopener noreferrer"><Instagram size={15} /> Instagram <ExternalLink size={13} /></a>
            <a href="https://www.youtube.com/@thebirthwaveclinic" target="_blank" rel="noopener noreferrer"><Youtube size={15} /> YouTube <ExternalLink size={13} /></a>
          </div>
        </div>
        <p className="social-video-disclaimer">Educational videos provide general clinical awareness and do not replace an individual medical assessment.</p>
      </div>
      {activeItem && <VideoModal key={activeItem.id} item={activeItem} onDismiss={() => setActiveItem(null)} />}
    </section>
  );
};

