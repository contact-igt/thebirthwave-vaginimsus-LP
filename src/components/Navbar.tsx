import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ClipboardCheck } from 'lucide-react';

interface NavbarProps {
  onLogoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Symptoms', href: '#symptoms' },
    { name: 'Self-Assessment', href: '#assessment', highlight: true },
    { name: 'Care Team', href: '#care-team' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-all duration-200 ${
        isScrolled
          ? 'shadow-xs py-2 sm:py-2.5 border-b border-sand/15'
          : 'py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
          
          {/* Left: Birthwave Logo (Noticeably larger, prominent and clearly recognizable) */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#hero"
              onClick={(e) => {
                if (onLogoClick) {
                  e.preventDefault();
                  onLogoClick();
                }
              }}
              className="flex items-center -ml-1 sm:-ml-2 cursor-pointer"
              aria-label="The Birthwave Home"
            >
              <img
                src="/brand/wordmark-mauve.png"
                alt="The Birthwave — Natural Birth & Women's Health Clinic"
                className="h-12 sm:h-16 md:h-[68px] lg:h-[76px] xl:h-[82px] w-auto object-contain transition-all duration-200"
              />
            </a>
          </div>

          {/* Center: Dedicated Landing Page Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-2.5 xl:gap-4 2xl:gap-5 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-body text-xs xl:text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                  link.highlight
                    ? 'text-sand-dark font-semibold hover:text-sand-deep flex items-center gap-1.5 bg-sand-pale/70 px-2.5 py-1.5 rounded-full'
                    : 'text-charcoal/80 hover:text-sand-dark'
                }`}
              >
                {link.highlight && <ClipboardCheck className="w-3.5 h-3.5 text-sand" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Direct Consultation Action */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-heading font-semibold text-white bg-sand-dark hover:bg-sand-deep rounded-full transition-all duration-200 shadow-soft hover:shadow-soft-lg tracking-[0.01em] whitespace-nowrap flex-shrink-0"
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="sm:hidden inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-heading font-semibold text-white bg-sand-dark hover:bg-sand-deep rounded-full whitespace-nowrap flex-shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Book</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-sand-dark focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream px-4 pt-3 pb-5 space-y-3 border-b border-sand/15 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-body text-sm font-medium py-1.5 transition-colors ${
                  link.highlight
                    ? 'text-sand-dark font-semibold flex items-center gap-2'
                    : 'text-charcoal/80 hover:text-sand-dark'
                }`}
              >
                {link.highlight && <ClipboardCheck className="w-4 h-4 text-sand" />}
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-sand/15">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-heading font-semibold text-white bg-sand-dark rounded-full"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
