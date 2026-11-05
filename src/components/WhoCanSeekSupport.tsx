import React from 'react';
import { HelpCircle, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const WhoCanSeekSupport: React.FC = () => {
  const criteria = [
    {
      title: 'Penetration feels difficult or painful',
      description: 'You experience burning, stinging, or intense discomfort during attempted intercourse, tampon insertion, or menstrual cup use.',
    },
    {
      title: 'Your body seems to tighten involuntarily',
      description: 'You notice your pelvic-floor muscles clamping shut automatically, even when you consciously want to relax and feel safe.',
    },
    {
      title: 'Intimate medical examinations feel distressing',
      description: 'The thought of a gynaecological speculum exam, Pap smear, or transvaginal ultrasound causes severe distress, panic, or fainting.',
    },
    {
      title: 'You have not been able to have penetrative sex',
      description: 'Whether recently married or in a long-term partnership, intercourse has been repeatedly painful, partial, or impossible to complete.',
    },
    {
      title: 'You avoid intimacy because you anticipate pain',
      description: 'Previous painful episodes make future attempts feel stressful or overwhelming, leading you to pull away from your partner.',
    },
    {
      title: 'You are simply unsure what is happening',
      description: 'You do not know whether it is vaginismus, pelvic-floor tension, an infection, or something else. We help bring clarity.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative border-y border-border-soft/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-light text-sky-dark text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Is This Relevant to Me?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            You Can Start with a Conversation, Even If You Aren’t Sure
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            A consultation at The Birthwave may be right for you if any of these situations sound familiar:
          </p>
        </div>

        {/* 2-Column Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-cream/70 border border-border-soft hover:bg-sand-pale/40 transition-colors duration-200"
            >
              <div className="flex items-start gap-3.5">
                <CheckCircle className="w-5 h-5 text-sand-dark shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-charcoal mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empathetic Bottom Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-sand-pale border border-border-soft text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-1.5 text-coral font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Care That Meets You Where You Are</span>
          </div>
          <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
            You do not need to arrive with a formal medical diagnosis, and you do not need to know how to explain your symptoms in technical medical terms. 
            Understanding the concern together is the primary purpose of your first visit.
          </p>
          <div className="pt-2">
            <a
              href="#first-visit"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sand-dark hover:text-sand-deep underline underline-offset-4"
            >
              <span>See how your first consultation is conducted</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

