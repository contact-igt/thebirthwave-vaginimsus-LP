import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitLead } from '../utils/leadSubmission';

interface AppointmentFormProps {
  idPrefix: string;
  title?: string;
  className?: string;
  onSubmitted?: (info: { name: string; service: string }) => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  idPrefix,
  title = 'Book a Consultation',
  className = '',
  onSubmitted,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    helpOption: 'Vaginismus & Intimate Health',
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
      await submitLead(formData);

      const params = new URLSearchParams();
      if (formData.name) params.set('name', formData.name);
      if (formData.helpOption) params.set('service', formData.helpOption);
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
            <option value="Vaginismus & Intimate Health">Vaginismus &amp; Intimate Health (General Evaluation)</option>
            <option value="Pelvic Floor Physiotherapy">Pelvic-Floor Physiotherapy Assessment</option>
            <option value="Gynaecological Assessment">Doctor-Led Gynaecological Review</option>
            <option value="Emotional Well-being Support">Emotional &amp; Psychological Guidance</option>
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
            disabled={submitting}
            className="w-full h-[46px] sm:h-[48px] inline-flex items-center justify-center gap-2 font-heading font-semibold text-white bg-sand-dark hover:bg-coral rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-xs sm:text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{submitting ? 'Submitting...' : 'Book Consultation'}</span>
          </button>
          {submitError && <p className="mt-2 text-xs text-red-700 font-medium" role="alert">{submitError}</p>}
        </div>
      </form>
    </div>
  );
};
