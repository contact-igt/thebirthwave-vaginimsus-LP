import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface AppointmentFormProps {
  idPrefix: string;
  title?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  idPrefix,
  title = 'Book a Consultation',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    helpOption: 'Vaginismus & Intimate Health',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className={`rounded-2xl bg-white/95 backdrop-blur-xs border border-sand/25 shadow-soft hover:shadow-soft-lg transition-all duration-300 p-5 sm:p-6 ${className}`}
    >
      {submitted ? (
        <div className="py-8 sm:py-10 text-center space-y-2.5 animate-fadeIn">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-heading text-base sm:text-lg font-bold text-charcoal">
            Thank You for Contacting Us
          </h3>
          <p className="font-body text-xs sm:text-sm text-muted max-w-xs mx-auto leading-relaxed">
            We have received your enquiry in strict confidence. Our care coordinator will contact you shortly to coordinate your private appointment.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  helpOption: 'Vaginismus & Intimate Health',
                  message: '',
                  consent: true,
                });
              }}
              className="font-heading text-xs sm:text-sm font-semibold text-sand-dark hover:text-sand-deep underline underline-offset-4 cursor-pointer transition-colors"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 text-left">
          {/* Form Header - Title only, no description */}
          <div className="pb-0.5">
            <h3 className="font-heading font-semibold text-charcoal text-lg sm:text-xl tracking-tight">
              {title}
            </h3>
          </div>

          {/* Field 1: Name (Full Width) */}
          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className="block font-heading font-semibold text-charcoal text-xs mb-1"
            >
              Name <span className="text-coral">*</span>
            </label>
            <input
              type="text"
              id={`${idPrefix}-name`}
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-[46px] sm:h-[48px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
            />
          </div>

          {/* Two-column layout for Phone & Email on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {/* Field 2: Phone Number (Required) */}
            <div>
              <label
                htmlFor={`${idPrefix}-phone`}
                className="block font-heading font-semibold text-charcoal text-xs mb-1"
              >
                Phone Number <span className="text-coral">*</span>
              </label>
              <input
                type="tel"
                id={`${idPrefix}-phone`}
                required
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-[46px] sm:h-[48px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
              />
            </div>

            {/* Field 3: Email (Optional) */}
            <div>
              <label
                htmlFor={`${idPrefix}-email`}
                className="block font-heading font-semibold text-charcoal text-xs mb-1"
              >
                Email <span className="text-muted font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                id={`${idPrefix}-email`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-[46px] sm:h-[48px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
              />
            </div>
          </div>

          {/* Field 4: Consultation Focus (Full Width) */}
          <div>
            <label
              htmlFor={`${idPrefix}-care`}
              className="block font-heading font-semibold text-charcoal text-xs mb-1"
            >
              Consultation Focus
            </label>
            <select
              id={`${idPrefix}-care`}
              value={formData.helpOption}
              onChange={(e) => setFormData({ ...formData, helpOption: e.target.value })}
              className="w-full h-[46px] sm:h-[48px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white cursor-pointer"
            >
              <option value="" disabled>Select a consultation focus</option>
              <option value="Vaginismus & Intimate Health">Vaginismus & Intimate Health (General Evaluation)</option>
              <option value="Pelvic Floor Physiotherapy">Pelvic-Floor Physiotherapy Assessment</option>
              <option value="Gynaecological Assessment">Doctor-Led Gynaecological Review</option>
              <option value="Emotional Well-being Support">Emotional & Psychological Guidance</option>
              <option value="Not sure yet - would like guidance">Not sure yet — I would like clinician guidance</option>
            </select>
          </div>

          {/* Field 5: Message (Optional, Full Width, Shorter) */}
          <div>
            <label
              htmlFor={`${idPrefix}-message`}
              className="block font-heading font-semibold text-charcoal text-xs mb-1"
            >
              Message <span className="text-muted font-normal">(Optional)</span>
            </label>
            <textarea
              id={`${idPrefix}-message`}
              rows={2}
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[50px] max-h-[62px] py-2.5 px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 pt-0.5">
            <input
              type="checkbox"
              id={`${idPrefix}-consent`}
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-0.5 w-3.5 h-3.5 text-sand-dark rounded border-sand/30 focus:ring-sand cursor-pointer"
            />
            <label
              htmlFor={`${idPrefix}-consent`}
              className="font-body text-muted text-xs leading-tight cursor-pointer select-none"
            >
              The Birthwave team may contact me about my appointment request. <span className="text-coral">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              className="w-full h-[46px] sm:h-[48px] inline-flex items-center justify-center gap-2 font-heading font-semibold text-white bg-sand-dark hover:bg-coral rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm tracking-wide"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
