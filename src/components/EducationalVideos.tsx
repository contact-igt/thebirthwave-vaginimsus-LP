import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Play, Youtube } from 'lucide-react';
import { circularOffset } from './carouselUtils';
import './resource-sections.css';

// Original titles verified with YouTube oEmbed. Full transcripts were inaccessible.
// Descriptions intentionally cover only topics supported by those titles.
export const educationalVideos = [
  {
    id: '18VRfLcGT8E', title: 'What Is Vaginismus?', presenter: 'Dr. Santoshi Nandigam',
    originalTitle: 'What Is Vaginismus? The Pain No One Talks About 💬',
    description: 'An introduction to vaginismus and the pain associated with it.',
    url: 'https://www.youtube.com/watch?v=18VRfLcGT8E',
  },
  {
    id: 'cIdZFcD4ViQ', title: 'Understanding Vaginismus and Recovery', presenter: 'Dr. Santoshi Nandigam',
    originalTitle: 'Vaginismus causes involuntary pelvic muscle tightening—but recovery is possible. 🌿✨',
    description: 'A conversation about involuntary pelvic muscle tightening in vaginismus and the topic of recovery.',
    url: 'https://www.youtube.com/watch?v=cIdZFcD4ViQ',
  },
  {
    id: 'W9taElo392U', title: 'Why Does Intimacy Feel Painful?', presenter: 'Dr. Santoshi Nandigam',
    originalTitle: 'Pain during intimacy is more common than you think — and it’s not your fault. ❤️',
    description: 'A conversation about pain during intimacy and the concerns that can accompany it.',
    url: 'https://www.youtube.com/watch?v=W9taElo392U',
  },
  {
    id: 'Jl7r4gMAxiU', title: 'Understanding Vaginismus and the Pelvic Floor', presenter: 'Dr. Adithi N (PT)',
    originalTitle: 'Understanding Vaginismus | Dr. Adithi N (PT)',
    description: 'An introduction to vaginismus from a physiotherapy perspective.',
    url: 'https://www.youtube.com/watch?v=Jl7r4gMAxiU',
  },
  {
    id: 'P29TlC9lDz0', title: 'Pain During Intimacy and Vaginismus Care', presenter: 'Dr. Aditi (PT)',
    originalTitle: 'Vaginismus Explained: Why Pain During Intimacy Happens & How You Can Heal | Dr. Aditi (PT)',
    description: 'An explanation of vaginismus, pain during intimacy and care for these concerns.',
    url: 'https://www.youtube.com/watch?v=P29TlC9lDz0',
  },
  {
    id: 'euwj9YnQzUQ', title: 'Can You Use Tampons and Still Have Vaginismus?', presenter: null,
    originalTitle: 'Can You Use Tampons and Still Have Vaginismus? Understanding Pelvic Floor Tightness & Pain',
    description: 'Explore whether tampon use can coexist with vaginismus, pelvic floor tightness and penetration related pain.',
    url: 'https://www.youtube.com/shorts/euwj9YnQzUQ',
  },
];

// These four original thumbnails contain baked-in dark duplicate side imagery.
// Keep the complete central portrait sharp over a soft, darker fill of the same thumbnail.
const portraitThumbnailIds = new Set(['18VRfLcGT8E', 'cIdZFcD4ViQ', 'W9taElo392U', 'euwj9YnQzUQ']);

const VideoThumbnail: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  const [fallback, setFallback] = useState(0);
  // Video 2's own first preview frame shows its presenter instead of a review screenshot.
  const sources = id === 'cIdZFcD4ViQ' ? ['maxres1', 'hq1', 'hqdefault'] : ['maxresdefault', 'hqdefault'];
  const isPortrait = portraitThumbnailIds.has(id);
  const thumbnailUrl = `https://i.ytimg.com/vi/${id}/${sources[fallback]}.jpg`;
  return fallback < sources.length ? <>
    {isPortrait && <span className="video-thumbnail-backdrop" aria-hidden="true" style={{ backgroundImage: `url(${thumbnailUrl})` }} />}
    <img className={isPortrait ? 'video-thumbnail-portrait' : undefined}
    src={thumbnailUrl}
    width="1280" height="720" loading="lazy" decoding="async" alt={`Original YouTube thumbnail for ${title}`}
    onLoad={event => { if (event.currentTarget.naturalWidth <= 120) setFallback(value => value + 1); }}
    onError={() => setFallback(value => value + 1)} />
    </> : <span className="video-thumbnail-fallback">{title}</span>;
};

export const EducationalVideos: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const lastWheel = useRef(0);
  const wheelDistance = useRef(0);
  const select = (index: number) => { setActiveIndex(index); setExpandedId(null); };
  const move = (step: number) => { setActiveIndex(index => (index + step + educationalVideos.length) % educationalVideos.length); setExpandedId(null); };

  return <section id="video-resources" aria-labelledby="video-resources-heading" className="video-resources py-14 md:py-20 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
        <p className="font-heading font-semibold text-xs uppercase tracking-[0.12em] text-sand-dark mb-4">VAGINISMUS VIDEO RESOURCES</p>
        <h2 id="video-resources-heading" className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight mb-4">Understanding Vaginismus Through Expert Conversations</h2>
        <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">Why does penetration feel painful? What causes vaginismus, and what care options are available? Explore our specialists' videos to better understand your symptoms and the care you may need.</p>
      </header>
      <div className="video-panel">
        <div className="video-panel-heading text-center">
          <h3 className="font-heading font-semibold text-xl sm:text-2xl text-sand-deep mb-3">Your Questions, Explained by Specialists</h3>
          <p className="text-base text-muted leading-relaxed">Explore conversations about vaginismus, painful intercourse, pelvic floor health and treatment options.</p>
        </div>
        <div className="video-stage" role="region" aria-roledescription="carousel" aria-label="Educational videos" tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
          }}
          onTouchStart={event => { const touch = event.touches[0]; touchStart.current = { x: touch.clientX, y: touch.clientY }; suppressClick.current = false; }}
          onTouchEnd={event => {
            if (!touchStart.current) return;
            const dx = event.changedTouches[0].clientX - touchStart.current.x;
            const dy = event.changedTouches[0].clientY - touchStart.current.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) { suppressClick.current = true; move(dx < 0 ? 1 : -1); }
            touchStart.current = null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
          onWheel={event => {
            if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
            if (Date.now() - lastWheel.current > 450) {
              wheelDistance.current += event.deltaX;
              if (Math.abs(wheelDistance.current) > 35) { move(wheelDistance.current > 0 ? 1 : -1); lastWheel.current = Date.now(); wheelDistance.current = 0; }
            }
          }}>
          {educationalVideos.map((video, index) => {
            const offset = circularOffset(index, activeIndex, educationalVideos.length);
            const visible = Math.abs(offset) <= 1;
            const active = offset === 0;
            return <article key={video.id} className={`video-card ${active ? 'is-active' : ''} ${expandedId === video.id ? 'is-expanded' : ''}`}
              data-visible={visible} aria-hidden={!visible} aria-label={`${index + 1} of ${educationalVideos.length}: ${video.title}`}
              style={{ '--position': offset } as React.CSSProperties}
              onMouseLeave={() => { if (expandedId === video.id) setExpandedId(null); }}>
              <div className="video-card-surface" onClick={event => {
                if ((event.target as HTMLElement).closest('a, button')) return;
                if (suppressClick.current) { suppressClick.current = false; return; }
                if (!active) select(index);
                setExpandedId(expandedId === video.id ? null : video.id);
              }}>
                <div className="video-thumbnail">
                  <VideoThumbnail id={video.id} title={video.title} />
                  <a className="video-play" href={video.url} target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1}
                    aria-label={`Play ${video.title} on YouTube (opens in a new tab)`}><Play fill="currentColor" size={24} aria-hidden="true" /></a>
                </div>
                <div className="video-info">
                  <h4 className="font-heading font-semibold text-base leading-snug">
                    <button type="button" className="video-title" tabIndex={visible ? 0 : -1} aria-expanded={expandedId === video.id} aria-controls={`video-details-${video.id}`}
                      onClick={() => {
                        if (suppressClick.current) { suppressClick.current = false; return; }
                        if (!active) select(index);
                        setExpandedId(expandedId === video.id ? null : video.id);
                      }}>{video.title}</button>
                  </h4>
                  <div className="video-details" id={`video-details-${video.id}`}><div>
                    {video.presenter && <p className="text-sm font-medium text-sand-dark mt-3">{video.presenter}</p>}
                    <p className="text-sm leading-relaxed text-muted mt-2">{video.description}</p>
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-watch" tabIndex={visible ? 0 : -1}>
                      <Youtube size={19} aria-hidden="true" /> Watch on YouTube <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </div></div>
                </div>
              </div>
              {!active && visible && <button type="button" className="video-select" onClick={() => select(index)} aria-label={`Select ${video.title}`} />}
            </article>;
          })}
          <button type="button" className="resource-arrow video-prev" aria-label="Previous video" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" className="resource-arrow video-next" aria-label="Next video" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>
      <div className="video-pagination" aria-label="Choose a video">
        {educationalVideos.map((video, index) => <button key={video.id} type="button" aria-label={`Show ${video.title}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => select(index)}><span /></button>)}
      </div>
      <p className="sr-only" aria-live="polite">Video {activeIndex + 1} of 6: {educationalVideos[activeIndex].title}</p>
      <div className="text-center">
        <a href="https://www.youtube.com/@thebirthwaveclinic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sand-dark hover:bg-sand-deep text-white font-heading font-medium text-sm transition-colors shadow-soft">
          <Youtube size={20} aria-hidden="true" /> Explore More Videos <ExternalLink size={16} aria-hidden="true" />
        </a>
        <p className="text-sm text-muted mt-4">These educational videos do not replace an individual medical assessment.</p>
      </div>
    </div>
  </section>;
};
