import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Play, Youtube, X } from 'lucide-react';
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
    url: 'https://www.youtube.com/watch?v=euwj9YnQzUQ',
  },
];

const localVideoCovers: Record<string, string> = {
 '18VRfLcGT8E': '/images/services/778c833a-191e-420c-8389-1e74e8c8fd7a.png',
 'cIdZFcD4ViQ': '/images/services/b3715b52-c307-457a-ac75-80f400a2a903.png',
 'W9taElo392U': '/images/services/d72d8770-a11b-4610-87e5-c36ca0467416.png',
 'euwj9YnQzUQ': '/images/services/2ab5686a-7b8c-4c06-b83b-417dffb3d515.png',
};
// Preserve the original portrait treatment only for the unchanged Shorts thumbnail.
const portraitThumbnailIds = new Set(['euwj9YnQzUQ']);

const VideoThumbnail: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  const [fallback, setFallback] = useState(0);
  const localCover = localVideoCovers[id];
  if (localCover) return fallback === 0
    ? <img className="video-local-cover" src={localCover} width="1672" height="941" loading="lazy" decoding="async" alt={`${title} video cover`} onError={()=>setFallback(1)}/>
    : <span className="video-thumbnail-fallback">{title}</span>;
  const sources = ['maxresdefault', 'hqdefault'];
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

type Video = typeof educationalVideos[number];
// Request playback only when a visitor follows a link. YouTube/browser policies
// ultimately decide whether unmuted playback may start in the destination tab.
const getVideoPlaybackUrl = (sourceUrl: string): string => {
 const url = new URL(sourceUrl);
 url.searchParams.set('autoplay', '1');
 return url.toString();
};
interface YouTubePlayer { playVideo(): void; destroy(): void; }
interface YouTubePlayerEvent { target: YouTubePlayer; data?: number; }
interface YouTubeApi {
 Player: new (element: HTMLIFrameElement, options: { events: {
  onReady: (event: YouTubePlayerEvent) => void;
  onStateChange: (event: YouTubePlayerEvent) => void;
  onError: () => void;
  onAutoplayBlocked: () => void;
 } }) => YouTubePlayer;
}
let playerApiPromise: Promise<YouTubeApi> | undefined;
const loadPlayerApi = (): Promise<YouTubeApi> => {
 const host=window as Window & { YT?: YouTubeApi; onYouTubeIframeAPIReady?: () => void };
 if(host.YT?.Player)return Promise.resolve(host.YT);
 if(!playerApiPromise)playerApiPromise=new Promise<YouTubeApi>((resolve,reject)=>{
  const previous=host.onYouTubeIframeAPIReady;
  host.onYouTubeIframeAPIReady=()=>{previous?.();if(host.YT?.Player)resolve(host.YT);};
  const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.async=true;
  script.onerror=()=>{script.remove();playerApiPromise=undefined;reject(new Error('YouTube player API unavailable'));};
  document.head.appendChild(script);
 });
 return playerApiPromise;
};
const VideoPlaybackDialog: React.FC<{ video: Video; onDismiss: () => void }> = ({ video, onDismiss }) => {
 const dialog = useRef<HTMLDialogElement>(null);
 const frame = useRef<HTMLIFrameElement>(null);
 const [status,setStatus] = useState<'loading'|'ready'|'playing'|'blocked'|'error'>('loading');
 useEffect(()=>{
  let alive=true,failed=false;
  let player:YouTubePlayer|undefined;
  let watchdog:number;
  const fail=()=>{if(!alive||failed)return;failed=true;clearTimeout(watchdog);setStatus('error');};
  const watch=()=>{clearTimeout(watchdog);watchdog=window.setTimeout(fail,20000);};
  watch();
  loadPlayerApi().then(api=>{
   if(!alive||failed||!frame.current)return;
   player=new api.Player(frame.current,{events:{
    onReady:event=>{if(!alive||failed)return;setStatus('ready');event.target.playVideo();},
    onStateChange:event=>{
     if(!alive||failed)return;
     if(event.data===1||event.data===2||event.data===0){clearTimeout(watchdog);setStatus(event.data===1?'playing':'ready');}
     else if(event.data===3)watch();
    },
    onError:fail,
    onAutoplayBlocked:()=>{if(!alive||failed)return;clearTimeout(watchdog);setStatus('blocked');},
   }});
  }).catch(fail);
  return ()=>{alive=false;clearTimeout(watchdog);player?.destroy();};
 },[]);
 useLayoutEffect(() => {
  const element=dialog.current;if(!element)return;
  const previousFocus=document.activeElement as HTMLElement|null;
  const previousOverflow=document.body.style.overflow;
  element.showModal();document.body.style.overflow='hidden';
  return ()=>{element.close();document.body.style.overflow=previousOverflow;previousFocus?.focus({preventScroll:true});};
 },[]);
 const embedUrl=new URL(`https://www.youtube.com/embed/${video.id}`);
 embedUrl.searchParams.set('autoplay','1');
 embedUrl.searchParams.set('playsinline','1');
 embedUrl.searchParams.set('rel','0');
 embedUrl.searchParams.set('enablejsapi','1');
 embedUrl.searchParams.set('origin',window.location.origin);
 return <dialog ref={dialog} className="video-playback-dialog" aria-labelledby="video-playback-heading" onCancel={event=>{event.preventDefault();onDismiss();}}>
  <div className="video-playback-header">
   <h3 id="video-playback-heading" className="font-heading font-semibold text-lg text-sand-deep">{video.title}</h3>
   <button type="button" autoFocus className="resource-arrow" onClick={onDismiss} aria-label="Close video"><X aria-hidden="true"/></button>
  </div>
  {status==='error'
   ? <div className="video-playback-frame video-playback-error" role="status">This video cannot play here. Use Watch on YouTube below.</div>
   : <iframe ref={frame} key={video.id} className="video-playback-frame" src={embedUrl.toString()} title={video.title}
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />}
  {status==='blocked' && <p className="text-sm text-muted px-5 pt-3" role="status">Your browser requires a tap on the player, or you can watch directly on YouTube.</p>}
  <div className="video-playback-footer">
   <p className="text-sm text-muted">If playback is restricted, watch the video directly on YouTube.</p>
   <a className="video-watch" href={getVideoPlaybackUrl(video.url)} onClick={onDismiss} target="_blank" rel="noopener noreferrer"><Youtube size={19} aria-hidden="true"/>Watch on YouTube<ExternalLink size={15} aria-hidden="true"/></a>
  </div>
 </dialog>;
};
const VideoResourceCard: React.FC<{ video: Video; featured?: boolean; onPlay: (video: Video) => void }> = ({ video, featured, onPlay }) => <article className={featured ? 'video-featured' : 'video-support-card'}>
 <a className="video-thumbnail" href={getVideoPlaybackUrl(video.url)} target="_blank" rel="noopener noreferrer" aria-label={`Play ${video.title}`} aria-haspopup="dialog"
  onClick={event=>{if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();onPlay(video);}}>
  <VideoThumbnail id={video.id} title={video.title}/>
  <span className="video-play" aria-hidden="true"><Play fill="currentColor" size={24}/></span>
 </a>
 <div className="video-resource-info">
  {featured && <p className="video-featured-label font-heading text-xs font-semibold uppercase tracking-[0.12em] text-sand-dark">FEATURED VIDEO</p>}
  <h4 className={`font-heading font-semibold leading-snug ${featured ? 'text-xl sm:text-2xl' : 'text-base'}`}><a href={getVideoPlaybackUrl(video.url)} target="_blank" rel="noopener noreferrer">{video.title}</a></h4>
  {video.presenter && <p className="text-sm font-medium text-sand-dark mt-2">{video.presenter}</p>}
  {featured && <>
   <p className="text-sm leading-relaxed text-muted mt-3">{video.description}</p>
   <a className="video-watch" href={getVideoPlaybackUrl(video.url)} target="_blank" rel="noopener noreferrer"><Youtube size={19} aria-hidden="true"/>Watch on YouTube<ExternalLink size={15} aria-hidden="true"/></a>
  </>}
 </div>
</article>;
export const EducationalVideos: React.FC = () => {
 const [activeVideo,setActiveVideo] = useState<Video|null>(null);
 const row = useRef<HTMLDivElement>(null);
 const [canPrevious,setCanPrevious] = useState(false);
 const [canNext,setCanNext] = useState(true);
 useEffect(()=>{
  const element=row.current;if(!element)return;
  const update=()=>{setCanPrevious(element.scrollLeft>2);setCanNext(element.scrollLeft+element.clientWidth<element.scrollWidth-2);};
  update();const observer=new ResizeObserver(update);observer.observe(element);
  element.addEventListener('scroll',update,{passive:true});
  return ()=>{observer.disconnect();element.removeEventListener('scroll',update);};
 },[]);
 const scroll=(direction:number)=>{
  const element=row.current;if(!element)return;
  const first=element.firstElementChild as HTMLElement|null;
  const step=(first?.getBoundingClientRect().width||element.clientWidth)+16;
  element.scrollBy({left:direction*step,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 };
 return <section id="video-resources" aria-labelledby="video-resources-heading" className="video-resources py-14 md:py-20 scroll-mt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
        <p className="video-section-eyebrow font-heading font-semibold text-xs uppercase tracking-[0.12em] text-sand-dark mb-4">VAGINISMUS VIDEO RESOURCES</p>
        <h2 id="video-resources-heading" className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight mb-4">Understanding Vaginismus Through Expert Conversations</h2>
        <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">Why does penetration feel painful? What causes vaginismus, and what care options are available? Explore our specialists' videos to better understand your symptoms and the care you may need.</p>
      </header>
   <div className="text-center mb-6">
    <h3 className="video-secondary-heading font-heading font-semibold text-xl sm:text-2xl text-sand-dark mb-3"><span className="video-secondary-play" aria-hidden="true"><Play size={17}/></span><span>Your Questions, Explained by Specialists</span></h3>
    <p className="text-base text-muted leading-relaxed">Explore conversations about vaginismus, painful intercourse, pelvic floor health and treatment options.</p>
   </div>
   <VideoResourceCard video={educationalVideos[0]} featured onPlay={setActiveVideo}/>
   <div className="video-support-navigation">
    <button type="button" className="resource-arrow" aria-label="Previous videos" aria-controls="supporting-videos" disabled={!canPrevious} onClick={()=>scroll(-1)}><ChevronLeft aria-hidden="true"/></button>
    <div ref={row} id="supporting-videos" className="video-support-row no-scrollbar" role="region" aria-roledescription="carousel" aria-label="More educational videos" tabIndex={0}
     onKeyDown={event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();scroll(event.key==='ArrowRight'?1:-1);}}}>
     {educationalVideos.slice(1).map(video=><VideoResourceCard key={video.id} video={video} onPlay={setActiveVideo}/>)}
    </div>
    <button type="button" className="resource-arrow" aria-label="Next videos" aria-controls="supporting-videos" disabled={!canNext} onClick={()=>scroll(1)}><ChevronRight aria-hidden="true"/></button>
   </div>
      <div className="text-center">
        <a href="https://www.youtube.com/@thebirthwaveclinic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sand-dark hover:bg-sand-deep text-white font-heading font-medium text-sm transition-colors shadow-soft">
          <Youtube size={20} aria-hidden="true" /> Explore More Videos <ExternalLink size={16} aria-hidden="true" />
        </a>
        <p className="text-sm text-muted mt-4">These educational videos do not replace an individual medical assessment.</p>
      </div>
  </div>
  {activeVideo && <VideoPlaybackDialog key={activeVideo.id} video={activeVideo} onDismiss={()=>setActiveVideo(null)}/>}
 </section>;
};
