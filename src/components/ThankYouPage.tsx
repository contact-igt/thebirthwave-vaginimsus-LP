import React, { useEffect } from 'react';
import { CheckCircle2, Phone, ArrowLeft, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';

interface ThankYouPageProps {
  onBackToHome: () => void;
  service?: string;
  name?: string;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  onBackToHome,
  service = 'In person at The BirthWave, Chennai',
  name,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Appointment Request Received | The BirthWave';
  }, []);

  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const preferredMethod = searchParams?.get('method') || '';
  const contactDetail = searchParams?.get('contact') || '';

  const whatsappMessage = encodeURIComponent(
    `Hello The Birthwave team, I just submitted an appointment request${
      name ? ` for ${name}` : ''
    }. I would like to confirm my consultation details.`
  );

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full mx-auto text-center animate-fadeIn space-y-8">
        
        {/* Top Back Link */}
        <div className="flex justify-start">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sand-dark hover:text-sand-deep transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to The Birthwave Home</span>
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-md border border-sand/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-soft-lg space-y-6 text-left">
          
          {/* Header with Icon */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 pb-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 shadow-soft">
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            <div className="text-center sm:text-left space-y-1.5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-sand-dark block">
                APPOINTMENT CONFIRMATION
              </span>
              <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-charcoal">
                Your Appointment Request Has Been Received
              </h1>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-3 font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">
            <p>
              Thank you{name ? ` ${name}` : ''}. Your request has been received. The BirthWave team will contact you through your selected method to confirm the appointment.
            </p>
            <p className="text-xs sm:text-sm text-charcoal/70">
              Please check the contact details you provided{contactDetail ? ` (${contactDetail})` : ''}. If you need to change how or when we contact you, please let the team know.
            </p>
          </div>

          {/* Consultation Summary Badge */}
          {(service || preferredMethod) && (
            <div className="bg-[#FAF1EC]/80 border border-sand/20 rounded-2xl p-4 sm:p-5 space-y-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted block">
                Consultation Summary
              </span>
              <div className="space-y-1">
                {service && (
                  <p className="font-heading font-semibold text-xs sm:text-sm text-charcoal">
                    Format:{' '}
                    <span className="font-normal text-charcoal/80">{service}</span>
                  </p>
                )}
                {preferredMethod && (
                  <p className="font-heading font-semibold text-xs sm:text-sm text-charcoal">
                    Preferred Contact Method:{' '}
                    <span className="font-normal text-charcoal/80">{preferredMethod}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Privacy Note */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-sand-pale/50 border border-sand/20 text-xs text-charcoal/75">
            <ShieldCheck className="w-4 h-4 text-sand-dark shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Strict Confidentiality:</strong> Your health and contact details are handled with complete medical privacy. No sensitive medical information is disclosed externally.
            </p>
          </div>

          {/* Immediate Action Buttons */}
          <div className="pt-2 space-y-3">
            <p className="font-heading font-semibold text-xs text-charcoal/90">
              Need immediate assistance or prefer messaging directly?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/917904251378?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] font-heading font-semibold text-xs sm:text-sm shadow-soft transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              {/* Call Primary Line */}
              <a
                href="tel:+917904251378"
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full border border-sand/40 bg-white text-charcoal hover:border-sand hover:text-sand-dark font-heading font-semibold text-xs sm:text-sm shadow-2xs transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sand" />
                <span>Call +91 79042 51378</span>
              </a>
            </div>
          </div>

          {/* Clinic Location Footer */}
          <div className="pt-3 border-t border-sand/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sand shrink-0" />
              <span>Nungambakkam, Chennai — In-Person &amp; Video Consultations</span>
            </div>
            <span>Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM</span>
          </div>

        </div>

        {/* Back to Homepage Button */}
        <div>
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-sand-dark hover:bg-sand-deep text-white font-heading text-xs sm:text-sm font-semibold shadow-soft transition-colors duration-200 cursor-pointer"
          >
            <span>Return to The Birthwave Homepage</span>
          </button>
        </div>

      </div>
    </div>
  );
};
