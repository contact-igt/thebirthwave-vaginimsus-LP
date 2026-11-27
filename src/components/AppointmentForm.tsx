import React, { useState } from 'react';
import { Send, ClipboardCheck } from 'lucide-react';
import { submitLead } from '../utils/leadSubmission';

interface AppointmentFormProps {
  idPrefix: string;
  title?: string;
  subtitle?: string;
  selfAssessmentCta?: {
    label: string;
    href: string;
  };
  submitButtonText?: string;
  reassuranceNote?: string;
  className?: string;
  onSubmitted?: (info: { name: string; service: string }) => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  idPrefix,
  title = 'Arrange a Private Consultation',
  subtitle,
  selfAssessmentCta,
  submitButtonText = 'Continue to Appointment Confirmation',
  reassuranceNote,
  className = '',
  onSubmitted,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consultationFormat: 'In person at The BirthWave, Chennai',
    preferredDateTime: '',
    preferredContactMethod: 'WhatsApp message',
    message: '',
    consent: true,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        consultationFormat: formData.consultationFormat,
        preferredDateTime: formData.preferredDateTime,
        preferredContactMethod: formData.preferredContactMethod,
        message: formData.message,
        consent: formData.consent,
      });

      const params = new URLSearchParams();
      if (formData.name) params.set('name', formData.name);
      if (formData.consultationFormat) params.set('format', formData.consultationFormat);
      if (formData.preferredContactMethod) params.set('method', formData.preferredContactMethod);
      if (formData.phone) params.set('contact', formData.phone);
      const targetUrl = `/thank-you${params.toString() ? '?' + params.toString() : ''}`;
      window.location.href = targetUrl;
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit your enquiry. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`rounded-2xl bg-white/95 backdrop-blur-xs border border-sand/25 shadow-soft hover:shadow-soft-lg transition-all duration-300 p-5 sm:p-6 ${className}`}
    >
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 text-left">
        {/* Form Header */}
        <div className="space-y-1 pb-0.5">
          <h3 className="font-heading font-semibold text-charcoal text-lg sm:text-xl tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="font-body text-xs sm:text-[13px] text-charcoal/75 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Optional Self-Assessment Banner / Primary CTA */}
        {selfAssessmentCta && (
          <a
            href={selfAssessmentCta.href}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-sand-pale/60 hover:bg-sand-pale border border-sand/30 text-sand-deep transition-all group shadow-2xs"
          >
            <div className="flex items-center gap-2 min-w-0">
              <ClipboardCheck className="w-4 h-4 text-sand-dark shrink-0" />
              <span className="font-heading font-semibold text-xs sm:text-sm">
                {selfAssessmentCta.label}
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-sand-dark font-medium group-hover:translate-x-0.5 transition-transform shrink-0">
              Begin Check →
            </span>
          </a>
        )}

        {/* Field 1: Preferred Name */}
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block font-heading font-semibold text-charcoal text-xs mb-1"
          >
            Preferred Name <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            id={`${idPrefix}-name`}
            required
            placeholder="Enter your preferred name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-[44px] sm:h-[46px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
          />
        </div>

        {/* Field 2: Phone Number */}
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
            className="w-full h-[44px] sm:h-[46px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
          />
        </div>

        {/* Field 3: Consultation Format */}
        <div>
          <label
            htmlFor={`${idPrefix}-format`}
            className="block font-heading font-semibold text-charcoal text-xs mb-1"
          >
            Consultation Format
          </label>
          <select
            id={`${idPrefix}-format`}
            value={formData.consultationFormat}
            onChange={(e) => setFormData({ ...formData, consultationFormat: e.target.value })}
            className="w-full h-[44px] sm:h-[46px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white cursor-pointer"
          >
            <option value="In person at The BirthWave, Chennai">
              In person at The BirthWave, Chennai
            </option>
            <option value="Online via Google Meet">
              Online via Google Meet
            </option>
          </select>
        </div>

        {/* Two-column layout: Preferred Date & Time + Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {/* Field 4: Preferred Date and Time */}
          <div>
            <label
              htmlFor={`${idPrefix}-datetime`}
              className="block font-heading font-semibold text-charcoal text-xs mb-1"
            >
              Preferred Date &amp; Time
            </label>
            <input
              type="text"
              id={`${idPrefix}-datetime`}
              placeholder="e.g. Tuesday morning or specific date"
              value={formData.preferredDateTime}
              onChange={(e) => setFormData({ ...formData, preferredDateTime: e.target.value })}
              className="w-full h-[44px] sm:h-[46px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
            />
          </div>

          {/* Field 5: Preferred Contact Method */}
          <div>
            <label
              htmlFor={`${idPrefix}-method`}
              className="block font-heading font-semibold text-charcoal text-xs mb-1"
            >
              Preferred Contact Method
            </label>
            <select
              id={`${idPrefix}-method`}
              value={formData.preferredContactMethod}
              onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
              className="w-full h-[44px] sm:h-[46px] px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white cursor-pointer"
            >
              <option value="WhatsApp message">WhatsApp message</option>
              <option value="Phone call">Phone call</option>
            </select>
          </div>
        </div>

        {/* Field 6: Additional Message (Optional) */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor={`${idPrefix}-message`}
              className="block font-heading font-semibold text-charcoal text-xs"
            >
              Additional Message <span className="text-muted font-normal">(Optional)</span>
            </label>
          </div>
          <p className="text-[11px] text-muted font-body mb-1">
            You do not need to describe intimate symptoms here.
          </p>
          <textarea
            id={`${idPrefix}-message`}
            rows={2}
            placeholder="Share any scheduling notes or questions"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full min-h-[46px] max-h-[58px] py-2 px-3.5 sm:px-4 rounded-xl bg-cream/50 border border-sand/25 text-charcoal placeholder:text-charcoal/35 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white resize-none"
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
        <div className="pt-1 space-y-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full h-[46px] sm:h-[48px] inline-flex items-center justify-center gap-2 font-heading font-semibold text-white bg-sand-dark hover:bg-sand-deep rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{submitting ? 'Submitting...' : submitButtonText}</span>
          </button>

          {/* Reassurance Note */}
          {reassuranceNote && (
            <p className="text-[11px] sm:text-xs text-charcoal/70 font-body leading-relaxed text-center px-1">
              {reassuranceNote}
            </p>
          )}

          {submitError && (
            <p className="text-xs text-red-700 font-medium text-center" role="alert">
              {submitError}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
