import React from 'react';
import { FixedBackgroundLines } from './components/FixedBackgroundLines';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Understanding } from './components/Understanding';
import { RecognisingExperiences } from './components/RecognisingExperiences';
import { WhenToConsiderConversation } from './components/WhenToConsiderConversation';
import { InteractiveAssessment } from './components/InteractiveAssessment';
import { CareApproach } from './components/CareApproach';
import { FirstConsultation } from './components/FirstConsultation';
import { CareTeam } from './components/CareTeam';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-cream text-charcoal font-body antialiased selection:bg-sand/25 selection:text-sand-deep">
      {/* Continuous Fixed Line-Art Background Across Entire Page */}
      <FixedBackgroundLines />

      <Navbar />
      <main className="relative z-10 flex-grow">
        <Hero />
        <Understanding />
        <RecognisingExperiences />
        <WhenToConsiderConversation />
        <InteractiveAssessment />
        <CareApproach />
        <FirstConsultation />
        <CareTeam />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
