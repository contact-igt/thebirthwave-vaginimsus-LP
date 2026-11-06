import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface AppointmentFormProps {
  idPrefix: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  idPrefix,
  title = 'Request a Private Consultation',
  subtitle = 'Share your basic details and our team will help you with the next step.',
  compact = false,
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
      className={`rounded-3xl bg-white/95 backdrop-blur-xs border border-sand/20 shadow-soft hover:shadow-soft-lg hover:border-sand/35 transition-all duration-300 ${
        compact ? 'p-5 sm:p-5.5 lg:p-5.5 xl:p-6' : 'p-6 sm:p-7 lg:p-8'
      } ${className}`}
    >
      {submitted ? (
        <div className={`${compact ? 'py-6' : 'py-8 sm:py-10'} text-center space-y-2.5 animate-fadeIn`}>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-heading text-base sm:text-lg font-bold text-charcoal">
            Thank You for Contacting Us
          </h3>
          <p className="font-body text-xs text-muted max-w-xs mx-auto leading-relaxed">
            We have received your enquiry in strict confidence. Our care coordinator will contact you shortly to coordinate your private appointment.
          </p>
          <div className="pt-1.5">
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
              className="font-heading text-xs font-semibold text-sand-dark hover:text-sand-deep underline underline-offset-4 cursor-pointer transition-colors"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`${compact ? 'space-y-2.5 lg:space-y-2.5' : 'space-y-3.5 sm:space-y-4'} text-left`}
        >
          {/* Form Header */}
          <div className={compact ? 'space-y-1 pb-1' : 'space-y-1 mb-2'}>
            <h3 className={`font-heading font-semibold text-charcoal ${compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>
              {title}
            </h3>
            {subtitle && (
              <p className="font-body text-[11px] sm:text-xs text-muted leading-tight">
                {subtitle}
              </p>
            )}
          </div>

          {/* Name Field */}
          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className={`block font-heading font-semibold text-charcoal ${compact ? 'text-[11px] sm:text-xs mb-1' : 'text-xs mb-1'}`}
            >
              Your Name / Preferred Name <span className="text-coral">*</span>
            </label>
            <input
              type="text"
              id={`${idPrefix}-name`}
              required
              placeholder="e.g., Priya"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3 rounded-lg bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white ${
                compact ? 'py-1.5 sm:py-2' : 'py-2 sm:py-2.5'
              }`}
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor={`${idPrefix}-phone`}
              className={`block font-heading font-semibold text-charcoal ${compact ? 'text-[11px] sm:text-xs mb-1' : 'text-xs mb-1'}`}
            >
              Phone Number (Call / WhatsApp) <span className="text-coral">*</span>
            </label>
            <input
              type="tel"
              id={`${idPrefix}-phone`}
              required
              placeholder="e.g., +91 93630 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3 rounded-lg bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white ${
                compact ? 'py-1.5 sm:py-2' : 'py-2 sm:py-2.5'
              }`}
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className={`block font-heading font-semibold text-charcoal ${compact ? 'text-[11px] sm:text-xs mb-1' : 'text-xs mb-1'}`}
            >
              Email Address <span className="text-muted font-normal text-[10px] sm:text-[11px]">(Optional)</span>
            </label>
            <input
              type="email"
              id={`${idPrefix}-email`}
              placeholder="e.g., name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3 rounded-lg bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white ${
                compact ? 'py-1.5 sm:py-2' : 'py-2 sm:py-2.5'
              }`}
            />
          </div>

          {/* Preferred Focus Dropdown */}
          <div>
            <label
              htmlFor={`${idPrefix}-care`}
              className={`block font-heading font-semibold text-charcoal ${compact ? 'text-[11px] sm:text-xs mb-1' : 'text-xs mb-1'}`}
            >
              Preferred Consultation Focus
            </label>
            <select
              id={`${idPrefix}-care`}
              value={formData.helpOption}
              onChange={(e) => setFormData({ ...formData, helpOption: e.target.value })}
              className={`w-full px-3 rounded-lg bg-cream/60 border border-sand/20 text-charcoal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white cursor-pointer ${
                compact ? 'py-1.5 sm:py-2' : 'py-2 sm:py-2.5'
              }`}
            >
              <option value="Vaginismus & Intimate Health">Vaginismus & Intimate Health (General Evaluation)</option>
              <option value="Pelvic Floor Physiotherapy">Pelvic-Floor Physiotherapy Assessment</option>
              <option value="Gynaecological Assessment">Doctor-Led Gynaecological Review</option>
              <option value="Emotional Well-being Support">Emotional & Psychological Guidance</option>
              <option value="Not sure yet - would like guidance">Not sure yet — I would like clinician guidance</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor={`${idPrefix}-message`}
              className={`block font-heading font-semibold text-charcoal ${compact ? 'text-[11px] sm:text-xs mb-1' : 'text-xs mb-1'}`}
            >
              Brief Message or Questions <span className="text-muted font-normal text-[10px] sm:text-[11px]">(Optional)</span>
            </label>
            <textarea
              id={`${idPrefix}-message`}
              rows={2}
              placeholder="Share anything you'd feel comfortable telling us..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-3 rounded-lg bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white resize-none ${
                compact ? 'py-1.5 sm:py-2 min-h-[50px] max-h-[58px]' : 'py-2 sm:py-2.5'
              }`}
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 pt-1">
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
              className={`font-body text-muted leading-tight cursor-pointer select-none ${compact ? 'text-[10.5px] sm:text-[11px]' : 'text-xs'}`}
            >
              The Birthwave team may contact me regarding this confidential consultation request. <span className="text-coral">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center gap-2 font-heading font-semibold text-white bg-sand-dark hover:bg-coral rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer ${
                compact ? 'py-2.5 sm:py-3 px-5 text-xs sm:text-sm' : 'py-3 px-6 text-xs sm:text-sm'
              }`}
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Submit Confidential Request</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
