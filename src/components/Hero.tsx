import React from 'react';
import { Calendar, ClipboardCheck } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-7 lg:pb-14 xl:pt-8 xl:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">

          {/* Left Column: Eyebrow, Headline, Narrative, Actions, Trust line */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 xl:space-y-6 lg:pt-1">

            {/* Eyebrow */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-sand-pale/70 text-sand-deep font-heading text-xs font-semibold uppercase tracking-[0.12em] border border-sand/20">
              <span>VAGINISMUS &amp; INTIMATE HEALTH CARE · THE BIRTHWAVE</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.18] max-w-2xl">
              Understanding Vaginismus and Your Care Options
            </h1>

            {/* Narrative Description */}
            <div className="space-y-3 max-w-2xl text-charcoal/85 font-body text-sm sm:text-base lg:text-[15px] xl:text-base leading-relaxed font-normal">
              <p>
                Pain, tightness or difficulty with vaginal penetration can be uncomfortable and confusing. Understanding what you are experiencing is the first step.
              </p>
              <p>
                At The BirthWave, Chennai, you can explore your symptoms privately, learn about available care and discuss your concerns with a healthcare professional.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-heading font-semibold text-white bg-sand-dark hover:bg-sand-deep rounded-full transition-all duration-200 shadow-xs hover:shadow-md text-center tracking-[0.01em]"
              >
                <ClipboardCheck className="w-4 h-4 text-white" />
                <span>Start Private Self-Assessment</span>
              </a>

              <a
                href="#first-visit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-heading font-semibold text-sand-deep bg-sand-pale hover:bg-sand-light/60 border border-sand/30 rounded-full transition-all text-center tracking-[0.01em]"
              >
                <Calendar className="w-4 h-4 text-sand-dark" />
                <span>Explore Consultation Options</span>
              </a>
            </div>

            {/* Trust line */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-muted font-normal sm:font-medium font-body">
              <span>Private consultations · Online &amp; in person · Nungambakkam, Chennai</span>
            </div>

          </div>

          {/* Right Column: Hero Enquiry Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="animate-float-card-2">
              <AppointmentForm
                idPrefix="hero"
                title="Take Your First Step Privately"
                subtitle="Not ready to discuss your symptoms? Begin with a self-assessment, or request an appointment directly if you prefer."
                submitButtonText="Request a Consultation"
                reassuranceNote="You do not need to describe your intimate symptoms to submit an appointment request."
                className="shadow-soft lg:shadow-soft-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
