import React, { useState, useEffect } from 'react';
import { FixedBackgroundLines } from './components/FixedBackgroundLines';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Understanding } from './components/Understanding';
import { RecognisingExperiences } from './components/RecognisingExperiences';
import { WhenToConsiderConversation } from './components/WhenToConsiderConversation';
import { InteractiveAssessment } from './components/InteractiveAssessment';
import { FirstConsultation } from './components/FirstConsultation';
import { CareTeam } from './components/CareTeam';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { ThankYouPage } from './components/ThankYouPage';

const isThankYouRoute = (): boolean => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const search = new URLSearchParams(window.location.search);
  const hash = window.location.hash.toLowerCase();
  return (
    path.endsWith('/thank-you') ||
    path.endsWith('/thankyou') ||
    search.get('page') === 'thank-you' ||
    search.get('thankyou') === 'true' ||
    hash === '#thank-you' ||
    hash === '#thankyou'
  );
};

export const App: React.FC = () => {
  const [isThankYou, setIsThankYou] = useState(isThankYouRoute);
  const [service, setService] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return new URLSearchParams(window.location.search).get('service') || '';
  });
  const [name, setName] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return new URLSearchParams(window.location.search).get('name') || '';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const isThankYouActive = isThankYouRoute();
      setIsThankYou(isThankYouActive);
      if (isThankYouActive) {
        const query = new URLSearchParams(window.location.search);
        setService(query.get('service') || 'Vaginismus & Intimate Health');
        setName(query.get('name') || '');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-cream text-charcoal font-body antialiased selection:bg-sand/25 selection:text-sand-deep pb-24 md:pb-0">
      {/* Continuous Fixed Line-Art Background Across Entire Page */}
      <FixedBackgroundLines />

      <Navbar onLogoClick={isThankYou ? navigateToHome : undefined} />

      <main className="relative z-10 flex-grow">
        {isThankYou ? (
          <ThankYouPage
            onBackToHome={navigateToHome}
            service={service || 'Vaginismus & Intimate Health'}
            name={name}
          />
        ) : (
          <>
            <Hero />
            <Understanding />
            <RecognisingExperiences />
            <WhenToConsiderConversation />
            <InteractiveAssessment />
            <FirstConsultation />
            <CareTeam />
            <Testimonials />
            <FAQSection />
            <ContactSection />
          </>
        )}
      </main>

      <Footer />
      {!isThankYou && <FloatingContactBar />}
    </div>
  );
};

export default App;
