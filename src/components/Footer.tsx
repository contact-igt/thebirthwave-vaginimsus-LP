import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#2C2523] border-t border-[#3E3431] pt-14 pb-10 text-white text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Four-Column Layout Matching the Original Birthwave Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-12 items-start">
            
            {/* Column 1 – Birthwave Logo & Short Tagline */}
            <div className="lg:col-span-3 space-y-3">
              <a href="#hero" className="inline-block" aria-label="The Birthwave Home">
                <img
                  src="/brand/wordmark-cream.png"
                  alt="The Birthwave — Natural Birth & Women's Health Clinic"
                  className="h-10 w-auto object-contain"
                />
              </a>
              <p className="font-body text-xs sm:text-sm text-[#E8D4C2]/85 leading-relaxed">
                Care that meets you where you are.
              </p>

              {/* Mobile / Tablet Social Media Icons (Clean Row) */}
              <div className="flex lg:hidden items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/thebirthwave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#2C2523] shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
                  aria-label="The Birthwave on Instagram"
                  title="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#2C2523] group-hover:text-sand-dark transition-colors"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-white text-[#2C2523] shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
                  aria-label="Book an appointment with The Birthwave"
                  title="Book Consultation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#2C2523] group-hover:text-sand-dark transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M8 2v3"></path>
                    <path d="M16 2v3"></path>
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M8 13h.01"></path>
                    <path d="M12 13h.01"></path>
                    <path d="M16 13h.01"></path>
                    <path d="M8 17h.01"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M16 17h.01"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@thebirthwaveclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#2C2523] shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
                  aria-label="The Birthwave on YouTube"
                  title="YouTube"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#2C2523] group-hover:text-sand-dark transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 – Care & Services */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-semibold text-sm text-[#F8EDE7]">
                Care & Services
              </h4>
              <ul className="space-y-2.5 font-body text-xs text-[#E8D4C2]/85">
                <li>
                  <a
                    href="https://www.thebirthwave.in/services/fertility-preconception"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Fertility & Preconception
                  </a>
                </li>
                <li>
                  <a
                    href="#hero"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Vaginismus & Intimate Wellness
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thebirthwave.in/services/pregnancy-antenatal-care"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Pregnancy & Antenatal Care
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thebirthwave.in/services/natural-birth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Birth Preparation & Childbirth Education
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thebirthwave.in/services/natural-birth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Natural Birth
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thebirthwave.in/services/vbac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                  >
                    VBAC — Vaginal Birth After Caesarean
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 – Explore */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-semibold text-sm text-[#F8EDE7]">
                Explore
              </h4>
              <ul className="space-y-2.5 font-body text-xs text-[#E8D4C2]/85">
                <li>
                  <a
                    href="https://www.thebirthwave.in/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#care-team"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Our Care Team
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thebirthwave.in/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="hover:text-white transition-colors inline-block"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors inline-block"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 – Contact Info */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-heading font-semibold text-sm text-[#F8EDE7]">
                Contact Info
              </h4>
              <div className="space-y-2.5 font-body text-xs text-[#E8D4C2]/85">
                
                {/* Phone 1 / WhatsApp Number */}
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#CA9585] shrink-0" />
                  <a
                    href="https://wa.me/917904251378?text=Hello%20The%20Birthwave%20team,%20I%20would%20like%20to%20enquire%20about%20a%20private%20Vaginismus%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-[#E8D4C2]/85"
                  >
                    +91 79042 51378
                  </a>
                </div>

                {/* Email Address */}
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#CA9585] shrink-0" />
                  <a href="mailto:thebirthwave@gmail.com" className="hover:text-white transition-colors text-[#E8D4C2]/85">
                    thebirthwave@gmail.com
                  </a>
                </div>

                {/* Clinic Address */}
                <div className="flex items-start gap-2.5 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#CA9585] shrink-0 mt-0.5" />
                  <address className="not-italic text-[#E8D4C2]/85 leading-relaxed">
                    No. 8/15, Mahalingapuram Main Road,<br />
                    Nungambakkam, Chennai – 600034
                  </address>
                </div>

              </div>
            </div>

          </div>

          {/* Single Subtle Divider & Clean Bottom Copyright Row */}
          <div className="pt-6 border-t border-[#3E3431] flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-[#E8D4C2]/60 text-xs">
            <p>© 2026 The Birthwave. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.thebirthwave.in/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.thebirthwave.in/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Social Media Circular Action Rail on Right Side (Matching Original Reference) */}
      <aside
        aria-label="Social media and quick booking links"
        className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 pointer-events-auto"
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/thebirthwave"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#2C2523] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-sand"
          aria-label="The Birthwave on Instagram"
          title="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-[#2C2523] group-hover:text-sand-dark transition-colors"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* Calendar / Booking */}
        <a
          href="#contact"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#2C2523] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-sand"
          aria-label="Book an appointment with The Birthwave"
          title="Book Consultation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-[#2C2523] group-hover:text-sand-dark transition-colors"
            aria-hidden="true"
          >
            <path d="M8 2v3"></path>
            <path d="M16 2v3"></path>
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <path d="M3 9h18"></path>
            <path d="M8 13h.01"></path>
            <path d="M12 13h.01"></path>
            <path d="M16 13h.01"></path>
            <path d="M8 17h.01"></path>
            <path d="M12 17h.01"></path>
            <path d="M16 17h.01"></path>
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@thebirthwaveclinic"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#2C2523] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-sand"
          aria-label="The Birthwave on YouTube"
          title="YouTube"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-[#2C2523] group-hover:text-sand-dark transition-colors"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
        </a>
      </aside>
    </>
  );
};
