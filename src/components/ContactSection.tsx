import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, 
  Send, CheckCircle2, Lock 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
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
    <section id="contact" className="py-14 md:py-20 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-12">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            APPOINTMENTS & INQUIRIES
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
            A Private Conversation About Your Care
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Reach out through the channel you feel most comfortable with. Our team will help you with the next step.
          </p>
        </div>

        {/* Two-Card Minimal Editorial Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Card: Verified Contact Information with Subtle Floating Animation */}
          <div className="lg:col-span-5 animate-float-card-1">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-xs border border-sand/20 shadow-soft hover:shadow-soft-lg hover:border-sand/35 transition-all duration-300 space-y-6">
              
              <div className="space-y-1.5 text-left">
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-charcoal">
                  Contact The Birthwave
                </h3>
                <p className="font-body text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  Consultations are held by prior appointment in a calm, discreet healthcare setting in Nungambakkam.
                </p>
              </div>

              {/* Clean, Non-Boxed Aligned Contact List */}
              <div className="space-y-4 text-left">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/917904251378?text=Hello%20The%20Birthwave%20team,%20I%20would%20like%20to%20enquire%20about%20a%20private%20Vaginismus%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 group transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4 fill-[#2E7D32] group-hover:fill-[#1B5E20] transition-colors pointer-events-none"
                      aria-hidden="true"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading text-xs text-muted block">
                      Discreet WhatsApp Message
                    </span>
                    <span className="font-body text-sm font-semibold text-charcoal group-hover:text-[#2E7D32] transition-colors">
                      +91 79042 51378
                    </span>
                  </div>
                </a>

                {/* Primary Clinic Line */}
                <a
                  href="tel:+919363031925"
                  className="flex items-start gap-3.5 group transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-sand-pale/60 text-sand-dark flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading text-xs text-muted block">
                      Primary Clinic Line
                    </span>
                    <span className="font-body text-sm font-semibold text-charcoal group-hover:text-sand-dark transition-colors">
                      +91 93630 31925
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:thebirthwave@gmail.com"
                  className="flex items-start gap-3.5 group transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-sky-light text-sky-dark flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading text-xs text-muted block">
                      Email Inquiries
                    </span>
                    <span className="font-body text-sm font-semibold text-charcoal group-hover:text-sand-dark transition-colors">
                      thebirthwave@gmail.com
                    </span>
                  </div>
                </a>

                {/* Physical Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-coral-light text-coral flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading text-xs text-muted block">
                      Clinic Sanctuary
                    </span>
                    <address className="font-body text-xs sm:text-sm text-charcoal/80 not-italic leading-relaxed">
                      No. 8/15, Mahalingapuram Main Road,<br />
                      Nungambakkam, Chennai – 600034
                    </address>
                  </div>
                </div>

              </div>

              {/* Confidentiality Assurance */}
              <div className="pt-3 flex items-center gap-2 font-body text-xs text-muted">
                <Lock className="w-3.5 h-3.5 text-sand-dark shrink-0" />
                <span>All inquiries are handled directly by our clinic team with discretion and care.</span>
              </div>

            </div>
          </div>

          {/* Right Card: Private Consultation Form with Offset Subtle Float */}
          <div className="lg:col-span-7 animate-float-card-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xs border border-sand/20 shadow-soft hover:shadow-soft-lg hover:border-sand/35 transition-all duration-300">
              
              {submitted ? (
                <div className="py-10 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    Thank You for Contacting Us
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted max-w-sm mx-auto leading-relaxed">
                    We have received your enquiry in strict confidence. Our care coordinator will contact you shortly to coordinate your private appointment.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="font-heading text-xs font-semibold text-sand-dark underline underline-offset-4 cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  <div className="space-y-1 mb-2">
                    <h3 className="font-heading font-semibold text-lg sm:text-xl text-charcoal">
                      Request a Private Consultation
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">
                      Share your basic details and our team will help you with the next step.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="form-name" className="block font-heading font-semibold text-xs text-charcoal mb-1">
                      Your Name / Preferred Name <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      placeholder="e.g., Priya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="form-phone" className="block font-heading font-semibold text-xs text-charcoal mb-1">
                      Phone Number (Call / WhatsApp) <span className="text-coral">*</span>
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      required
                      placeholder="e.g., +91 93630 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="form-email" className="block font-heading font-semibold text-xs text-charcoal mb-1">
                      Email Address <span className="text-muted font-normal text-[11px]">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      placeholder="e.g., name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
                    />
                  </div>

                  {/* Preferred Focus Dropdown */}
                  <div>
                    <label htmlFor="form-care" className="block font-heading font-semibold text-xs text-charcoal mb-1">
                      Preferred Consultation Focus
                    </label>
                    <select
                      id="form-care"
                      value={formData.helpOption}
                      onChange={(e) => setFormData({ ...formData, helpOption: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream/60 border border-sand/20 text-charcoal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white cursor-pointer"
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
                    <label htmlFor="form-message" className="block font-heading font-semibold text-xs text-charcoal mb-1">
                      Brief Message or Questions <span className="text-muted font-normal text-[11px]">(Optional)</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={2}
                      placeholder="Share anything you'd feel comfortable telling us..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream/60 border border-sand/20 text-charcoal placeholder:text-charcoal/30 placeholder:font-normal font-body text-xs sm:text-sm outline-none transition-all duration-200 focus:border-sand focus:ring-2 focus:ring-sand/20 focus:bg-white"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="form-consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 text-sand-dark rounded border-sand/30 focus:ring-sand cursor-pointer"
                    />
                    <label htmlFor="form-consent" className="font-body text-xs text-muted leading-relaxed cursor-pointer">
                      The Birthwave team may contact me regarding this confidential consultation request. <span className="text-coral">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 font-heading text-xs sm:text-sm font-semibold text-white bg-sand-dark hover:bg-coral rounded-full shadow-xs transition-colors duration-200 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Confidential Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
