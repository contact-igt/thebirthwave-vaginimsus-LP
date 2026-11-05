import React from 'react';
import { Calendar, ClipboardCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Service Tag, Headline, Narrative, Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Approved Service Label */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-sand-pale/70 text-sand-deep font-heading text-xs font-semibold uppercase tracking-[0.12em] border border-sand/20">
              <span>VAGINISMUS CARE · THE BIRTHWAVE</span>
            </div>

            {/* Approved H1 Heading (No Wavy Underline) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.12] max-w-2xl">
              Vaginismus: Understanding Painful Penetration and Care Options
            </h1>

            {/* Mobile-Only Uterus-and-Heart Symbol with Soft Spreading Pink Glow (Between Heading & Description) */}
            <div className="block lg:hidden my-6 sm:my-8 px-2">
              <div className="relative isolate w-full max-w-[280px] sm:max-w-[340px] mx-auto flex items-center justify-center py-4">
                {/* Soft Spreading Brand-Colour Diffusion Glow Behind Symbol */}
                <div
                  className="absolute -z-10 pointer-events-none select-none w-[130%] h-[130%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(202, 149, 133, 0.70) 0%, rgba(248, 131, 121, 0.46) 32%, rgba(202, 149, 133, 0.22) 55%, transparent 75%)',
                    filter: 'blur(35px)',
                  }}
                  aria-hidden="true"
                />

                {/* Exact Uterus-and-Heart Symbol */}
                <img
                  src="/brand/uterus-heart-symbol.png"
                  alt="The Birthwave — Intimate Health & Vaginismus Care"
                  className="relative z-10 w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Approved Narrative Description */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal/85 leading-relaxed font-normal max-w-2xl font-body">
              Vaginismus can make penetration or vaginal examinations painful or difficult. Learn about common experiences, possible care approaches and what to expect when discussing your concerns with The Birthwave in Chennai.
            </p>

            {/* Clear Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-heading font-semibold text-white bg-sand-dark hover:bg-[#F88379] rounded-full transition-all duration-200 shadow-xs hover:shadow-md text-center tracking-[0.01em]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Consultation</span>
              </a>

              <a
                href="#assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-heading font-semibold text-sand-deep bg-sand-pale hover:bg-sand-light/60 border border-sand/30 rounded-full transition-all text-center tracking-[0.01em]"
              >
                <ClipboardCheck className="w-4 h-4 text-sand" />
                <span>Start Self-Assessment</span>
              </a>
            </div>

            {/* Factual, Clinic-Aligned Supporting Information */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-muted font-normal sm:font-medium font-body">
              <span>Doctor-led consultations by appointment • Nungambakkam, Chennai</span>
            </div>

          </div>

          {/* Right Column: Desktop Uterus-and-Heart Symbol with Soft Spreading Pink Glow (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="relative isolate w-full max-w-sm sm:max-w-md lg:max-w-[460px] xl:max-w-[490px] mx-auto flex items-center justify-center py-4 sm:py-6 lg:py-8">
              
              {/* Soft Spreading Brand-Colour Diffusion Glow Behind Symbol */}
              <div
                className="absolute -z-10 pointer-events-none select-none w-[135%] h-[135%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(202, 149, 133, 0.70) 0%, rgba(248, 131, 121, 0.46) 32%, rgba(202, 149, 133, 0.22) 55%, transparent 75%)',
                  filter: 'blur(40px)',
                }}
                aria-hidden="true"
              />

              {/* Exact Uterus-and-Heart Symbol Isolated with Transparent Background */}
              <img
                src="/brand/uterus-heart-symbol.png"
                alt="The Birthwave — Intimate Health & Vaginismus Care"
                className="relative z-10 w-full h-auto max-h-[360px] lg:max-h-[400px] object-contain select-none pointer-events-none"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
