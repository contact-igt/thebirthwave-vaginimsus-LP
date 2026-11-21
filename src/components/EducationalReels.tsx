import React, { useState } from 'react';
import {
  Play,
  Instagram,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface ReelItem {
  id: string;
  title: string;
  topic: string;
  speaker: string;
  speakerRole: string;
  thumbnail: string;
  objectPosition?: string;
  reelUrl: string;
  duration: string;
}

export const EducationalReels: React.FC = () => {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

  const reels: ReelItem[] = [
    {
      id: '1',
      title: 'What Actually Is Vaginismus? It Is Not "In Your Head"',
      topic: 'Medical Explanation',
      speaker: 'Dr. Santoshi Nandigam',
      speakerRole: 'Founder · Obstetrician & Gynaecologist',
      thumbnail: '/images/doctors/dr-santoshi.jpg',
      objectPosition: '50% 25%',
      reelUrl: 'https://www.instagram.com/thebirthwave/',
      duration: '1:15',
    },
    {
      id: '2',
      title: 'How Pelvic Floor Physiotherapy Helps Muscles Relax',
      topic: 'Pelvic Physio & Rehab',
      speaker: 'Dr. Adithi Nair',
      speakerRole: 'Pelvic-Floor Physiotherapist',
      thumbnail: '/images/doctors/dr-adithi.jpg',
      objectPosition: '50% 20%',
      reelUrl: 'https://www.instagram.com/thebirthwave/',
      duration: '1:45',
    },
    {
      id: '3',
      title: 'Can You Conceive & Deliver Naturally with Vaginismus?',
      topic: 'Pregnancy & Birth',
      speaker: 'Dr. Santoshi Nandigam',
      speakerRole: 'Founder · Obstetrician & Gynaecologist',
      thumbnail: '/images/clinic/consultation.webp',
      objectPosition: '50% 50%',
      reelUrl: 'https://www.instagram.com/thebirthwave/',
      duration: '1:30',
    },
    {
      id: '4',
      title: 'First Consultation Fear: Will There Be an Internal Exam?',
      topic: 'Consent & Safety',
      speaker: 'Dr. Adithi Nair',
      speakerRole: 'Pelvic-Floor Physiotherapist',
      thumbnail: '/images/clinic/first-consultation.webp',
      objectPosition: '50% 45%',
      reelUrl: 'https://www.instagram.com/thebirthwave/',
      duration: '1:10',
    },
  ];

  return (
    <section
      id="educational-reels"
      className="py-14 sm:py-18 md:py-20 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden"
      aria-label="Instagram Educational Reels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-pale/80 border border-sand/30 shadow-2xs">
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span className="font-heading font-semibold text-xs text-sand-deep tracking-wider uppercase">
              Clinical Insights · @thebirthwave
            </span>
          </div>

          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.18] text-charcoal tracking-tight">
            Watch: Understanding Vaginismus in Simple Words
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Short, compassionate breakdowns by Dr. Santoshi Nandigam and Dr. Adithi Nair explaining symptoms, involuntary spasms, and gentle recovery approaches.
          </p>

          <div className="pt-1 flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/thebirthwave"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-heading text-xs sm:text-sm font-semibold text-sand-dark hover:text-sand-deep transition-colors underline underline-offset-4"
            >
              <span>Follow @thebirthwave on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Reel Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal border border-sand/25 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-end aspect-[9/15] sm:aspect-[9/16]"
            >
              {/* Background Thumbnail Image */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                style={{ objectPosition: reel.objectPosition || 'center' }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Rich Gradient Overlay for High Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#22140E] via-[#22140E]/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Top Bar: Topic Badge & Duration */}
              <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-heading font-semibold text-charcoal shadow-xs">
                  {reel.topic}
                </span>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[11px] font-body text-white">
                  <span>{reel.duration}</span>
                </div>
              </div>

              {/* Central Play Button Overlay */}
              <a
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center z-10 group/btn"
                aria-label={`Watch ${reel.title} on Instagram`}
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/95 text-sand-deep flex items-center justify-center shadow-soft-lg group-hover/btn:scale-110 group-hover/btn:bg-sand-dark group-hover/btn:text-white transition-all duration-300">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </a>

              {/* Bottom Card Content: Title, Speaker & Direct Watch Link */}
              <div className="relative z-10 p-4 sm:p-5 text-left space-y-2">
                <h3 className="font-heading font-semibold text-white text-sm sm:text-[15px] leading-snug line-clamp-2">
                  {reel.title}
                </h3>

                <div className="space-y-0.5 border-t border-white/20 pt-2">
                  <p className="font-heading text-xs font-semibold text-[#E8D4C2]">
                    {reel.speaker}
                  </p>
                  <p className="font-body text-[11px] text-white/70 truncate">
                    {reel.speakerRole}
                  </p>
                </div>

                <a
                  href={reel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-heading font-semibold text-white/90 hover:text-white pt-1 group-hover:text-sand-light transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Disclaimer Banner */}
        <div className="mt-8 sm:mt-10 max-w-3xl mx-auto p-4 rounded-xl bg-sand-pale/40 border border-sand/20 text-center">
          <p className="font-body text-xs sm:text-sm text-charcoal/75">
            Educational videos provide general clinical awareness. Every individual’s muscle response and comfort boundaries are unique. Consult our care team for personalized guidance.
          </p>
        </div>

      </div>
    </section>
  );
};
