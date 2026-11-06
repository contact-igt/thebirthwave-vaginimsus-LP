import React from 'react';
import { AppointmentForm } from './AppointmentForm';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-20 md:scroll-mt-24"
    >
      {/* 1. Top Contact Banner — Full-Width Hospital Background Image Only */}
      <div className="relative w-full overflow-hidden bg-[#22140E] py-16 sm:py-20 md:py-24">
        {/* Full-Width Edge-to-Edge Hospital Interior Photograph */}
        <img
          src="/images/clinic/clinic-hospital-bg.webp"
          alt="The Birthwave clinic interior — calm, supportive consultation sanctuary in Nungambakkam, Chennai"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Approved Dark, Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#22140E]/90 via-[#2A1810]/80 to-[#1F120A]/65 sm:from-[#22140E]/88 sm:via-[#2A1810]/78 sm:to-[#1F120A]/60" />

        {/* Foreground Content: Section Label, Heading & Description Only */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
          <span className="font-heading font-semibold text-xs text-[#E8D4C2] uppercase tracking-[0.14em] block">
            APPOINTMENTS & INQUIRIES
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[1.15] text-white tracking-tight">
            A Private Conversation About Your Care
          </h2>
          <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl mx-auto">
            Reach out through the channel you feel most comfortable with. Our team will help you with the next step.
          </p>
        </div>
      </div>

      {/* 2. Appointment Form Section on Light Background */}
      <div className="relative w-full bg-[#FFF9F6] py-14 sm:py-16 md:py-20">
        <div className="max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm
            idPrefix="contact"
            title="Request a Private Consultation"
            subtitle="Share your basic details and our team will help you with the next step."
            className="bg-white shadow-soft hover:shadow-soft-lg"
          />
        </div>
      </div>
    </section>
  );
};
