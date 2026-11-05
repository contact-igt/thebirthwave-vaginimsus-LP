import React from 'react';
import { Flame, ShieldBan, Stethoscope, AlertCircle, HeartCrack, Info } from 'lucide-react';

export const Symptoms: React.FC = () => {
  const symptomList = [
    {
      icon: Flame,
      title: 'Pain, Burning, or Stinging Discomfort',
      description: 'A sharp, burning, or intense aching sensation at the vaginal entrance whenever insertion or penetration is attempted.',
      accent: 'text-coral bg-coral-light border-coral/30',
    },
    {
      icon: ShieldBan,
      title: 'Involuntary Muscle Tightening or "Blocked" Sensation',
      description: 'A distinct physical feeling that penetration is blocked by an impenetrable muscular wall, despite conscious desire to relax.',
      accent: 'text-sand-dark bg-sand-pale border-sand/40',
    },
    {
      icon: Stethoscope,
      title: 'Severe Difficulty with Medical Examinations',
      description: 'Pelvic examinations, transvaginal ultrasounds, Pap smears, or swab tests feel painful, frightening, or impossible to tolerate.',
      accent: 'text-sky-dark bg-sky-light border-sky/30',
    },
    {
      icon: AlertCircle,
      title: 'Fear & Anticipatory Anxiety Around Penetration',
      description: 'Previous painful experiences trigger an involuntary fight-or-flight muscular response before penetration is even initiated.',
      accent: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      icon: HeartCrack,
      title: 'Avoidance of Physical Intimacy',
      description: 'The expectation of pain leads to stress, emotional withdrawal, guilt, or tension between partners regarding sexual closeness.',
      accent: 'text-rose-700 bg-rose-50 border-rose-200',
    },
  ];

  return (
    <section id="symptoms" className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-pale text-sand-dark text-xs font-semibold uppercase tracking-wider">
            <span>Signs & Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            Symptoms & Concerns You May Be Experiencing
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Every woman’s experience of vaginismus is unique. These are the most common physical and emotional responses reported by our patients.
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {symptomList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-border-soft shadow-soft hover:shadow-soft-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${item.accent}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-charcoal mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border-soft/40 flex items-center text-xs text-muted font-medium">
                  <span>Recognised Clinical Pattern</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Empathetic Reassurance Note */}
          <div className="bg-sand-pale/60 p-6 rounded-2xl border-2 border-dashed border-sand/40 flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-sand-dark shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-sand-deep uppercase tracking-wider mb-1">
                  Important Clinical Note
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  You do not need to diagnose yourself before reaching out. 
                  Understanding your specific physical reactions and personal comfort level 
                  is an integral part of the initial consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

