import React from 'react';
import { HeartHandshake, Shield, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export const DismissiveCareBridge: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream via-sand-pale/30 to-cream relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border-soft shadow-soft-lg relative overflow-hidden">
          {/* Decorative side accent bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-sand" />

          <div className="space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-pale text-sand-deep text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-coral" />
              <span>When Seeking Help Has Felt Difficult</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight leading-snug">
              If a Previous Doctor Left You Feeling Unheard,{' '}
              <span className="text-sand-dark">Your Next Conversation Can Begin Differently.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal">
              <p>
                Talking about painful intimacy is not always easy. Many women seeking help for vaginismus 
                have endured uncomfortable examinations, dismissive reactions, or well-meaning advice that 
                failed to address their genuine physical pain.
              </p>
              <p>
                Being told to <em className="text-charcoal font-medium">“just relax,” “have a glass of wine,”</em> or <em className="text-charcoal font-medium">“simply keep trying”</em> can leave a woman feeling isolated, misunderstood, or at fault. For many, this hesitation continues for months or years. The thought of visiting another gynaecologist can itself become overwhelming.
              </p>
              <p className="font-medium text-charcoal">
                At The Birthwave, we believe your concerns deserve serious, thoughtful, and dignified attention.
              </p>
            </div>

            {/* 3 Pillars of Respect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border-soft/70">
              <div className="p-4 rounded-xl bg-cream border border-border-soft/60">
                <div className="flex items-center gap-2 font-bold text-sm text-sand-dark mb-1">
                  <MessageSquare className="w-4 h-4 text-coral" />
                  <span>Start with Conversation</span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Explain what has been difficult and what you are comfortable discussing, completely in your own words.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream border border-border-soft/60">
                <div className="flex items-center gap-2 font-bold text-sm text-sand-dark mb-1">
                  <Shield className="w-4 h-4 text-sky-dark" />
                  <span>Ask Before Proceeding</span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Understand why an assessment or treatment is suggested. You have the right to decline or pause at any second.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream border border-border-soft/60">
                <div className="flex items-center gap-2 font-bold text-sm text-sand-dark mb-1">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>Your Boundaries Respected</span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  A history of painful penetration deserves thoughtful clinical assessment, not rushed assumptions.
                </p>
              </div>
            </div>

            <div className="pt-2 text-center sm:text-left">
              <a
                href="#care-approach"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sand-dark hover:text-sand-deep"
              >
                <span>Explore our multidisciplinary care approach</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

