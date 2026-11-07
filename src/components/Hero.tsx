import React from 'react';
import { Calendar, ClipboardCheck } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-7 lg:pb-14 xl:pt-8 xl:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto pl-4 pr-12 sm:pl-6 sm:pr-14 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">

          {/* Left Column: Service Tag, Headline, Narrative, Actions, Supporting Info */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 xl:space-y-6 lg:pt-1">

            {/* Approved Service Label */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-sand-pale/70 text-sand-deep font-heading text-xs font-semibold uppercase tracking-[0.12em] border border-sand/20">
              <span>VAGINISMUS CARE · THE BIRTHWAVE</span>
            </div>

            {/* Approved H1 Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-heading font-semibold sm:font-bold text-charcoal tracking-tight leading-[1.18] max-w-2xl">
              Vaginismus: Understanding Painful Penetration and Care Options
            </h1>

            {/* Approved Narrative Description */}
            <p className="text-sm sm:text-base lg:text-[15px] xl:text-base text-charcoal/85 leading-relaxed font-normal max-w-2xl font-body">
              Vaginismus can make penetration or vaginal examinations painful or difficult. Learn about common experiences, possible care approaches and what to expect when discussing your concerns with The Birthwave in Chennai.
            </p>

            {/* Clear Primary & Secondary CTAs */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
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

          {/* Right Column: Appointment Form (Desktop & Mobile accessible, fills vertical space gracefully) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="animate-float-card-2">
              <AppointmentForm
                idPrefix="hero"
                className="shadow-soft lg:shadow-soft-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
