import React from 'react';
import { AppointmentForm } from './AppointmentForm';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-[#22140E] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Full-Section Edge-to-Edge Hospital Background Image */}
      <img
        src="/images/clinic/clinic-hospital-bg.webp"
        alt="The Birthwave clinic interior — calm, supportive consultation sanctuary in Nungambakkam, Chennai"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        loading="lazy"
      />

      {/* Dark, Warm Overlay for Contrast and Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#22140E]/88 via-[#2A1810]/80 to-[#1F120A]/75 sm:from-[#22140E]/85 sm:via-[#2A1810]/76 sm:to-[#1F120A]/70" />

      {/* Two-Column Content: Form on Left, Heading on Right */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* LEFT SIDE: Appointment Form */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <AppointmentForm
              idPrefix="contact"
              className="bg-white/95 backdrop-blur-xs border border-sand/30 shadow-soft-lg"
            />
          </div>

          {/* RIGHT SIDE: Contact Heading & Description */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 text-center space-y-3.5 sm:space-y-4 px-2 sm:px-4 lg:px-6">
            <span className="font-heading font-semibold text-xs text-[#E8D4C2] uppercase tracking-[0.14em] block">
              APPOINTMENTS & INQUIRIES
            </span>
            <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] leading-[1.18] text-white tracking-tight">
              A Private Conversation About Your Care
            </h2>
            <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed max-w-md mx-auto">
              Reach out through the channel you feel most comfortable with. Our team will help you with the next step.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
