import React, { useState } from 'react';
import {
  ArrowRight, ArrowLeft, RotateCcw,
  Calendar, MessageCircle, Check
} from 'lucide-react';
import {
  Q1_OPTIONS,
  Q2_OPTIONS,
  Q3_OPTIONS,
  Q4_OPTIONS,
  Q1_EXCLUSIVE_NONE,
  Q2_EXCLUSIVE_NONE,
  Q4_EXCLUSIVES,
  evaluateAssessment,
  AssessmentResult,
} from '../utils/assessmentLogic';

export const InteractiveAssessment: React.FC = () => {
  // State: 0 (intro) | 1 (Q1) | 2 (Q2) | 3 (Q3) | 4 (Q4) | 5 (result)
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Selected Answers
  const [step1Answers, setStep1Answers] = useState<string[]>([]);
  const [step2Answers, setStep2Answers] = useState<string[]>([]);
  const [step3Answer, setStep3Answer] = useState<string>('');
  const [step4Answers, setStep4Answers] = useState<string[]>([]);

  // Stored Result - generated fresh on submission of Q4
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  // Q1 Multi-select handler with mutual exclusivity
  const handleToggleQ1 = (option: string) => {
    setStep1Answers((prev) => {
      if (option === Q1_EXCLUSIVE_NONE) {
        return prev.includes(option) ? [] : [option];
      }
      // If selecting a non-exclusive option, clear the exclusive "no difficulties" option
      const filtered = prev.filter((item) => item !== Q1_EXCLUSIVE_NONE);
      return filtered.includes(option)
        ? filtered.filter((item) => item !== option)
        : [...filtered, option];
    });
  };

  // Q2 Multi-select handler with mutual exclusivity
  const handleToggleQ2 = (option: string) => {
    setStep2Answers((prev) => {
      if (option === Q2_EXCLUSIVE_NONE) {
        return prev.includes(option) ? [] : [option];
      }
      // If selecting a non-exclusive option, clear the exclusive "no difficulties" option
      const filtered = prev.filter((item) => item !== Q2_EXCLUSIVE_NONE);
      return filtered.includes(option)
        ? filtered.filter((item) => item !== option)
        : [...filtered, option];
    });
  };

  // Q4 Multi-select handler with mutual exclusivity
  const handleToggleQ4 = (option: string) => {
    setStep4Answers((prev) => {
      if (Q4_EXCLUSIVES.includes(option)) {
        return prev.includes(option) ? [] : [option];
      }
      // If selecting an impact option, clear any exclusive options (e.g., none, unsure, prefer not to answer)
      const filtered = prev.filter((item) => !Q4_EXCLUSIVES.includes(item));
      return filtered.includes(option)
        ? filtered.filter((item) => item !== option)
        : [...filtered, option];
    });
  };

  // Validation: Determine if Continue button is active
  const isContinueEnabled = () => {
    if (currentStep === 1) return step1Answers.length > 0;
    if (currentStep === 2) return step2Answers.length > 0;
    if (currentStep === 3) return step3Answer !== '';
    if (currentStep === 4) return step4Answers.length > 0;
    return false;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 4) {
      // Generate result fresh from answers across all four questions
      const finalResult = evaluateAssessment(
        step1Answers,
        step2Answers,
        step3Answer,
        step4Answers
      );
      setAssessmentResult(finalResult);
      setCurrentStep(5); // Result screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0); // Back to intro
    }
  };

  // Section 8: Retake Assessment Behaviour
  // Clear every previously selected answer, clear result, reset progress bar to 25%, return to Q1
  const handleReset = () => {
    setStep1Answers([]);
    setStep2Answers([]);
    setStep3Answer('');
    setStep4Answers([]);
    setAssessmentResult(null);
    setCurrentStep(1); // Return directly to Question 1 with 25% progress
  };

  return (
    <section id="assessment" className="pt-8 pb-14 md:pt-12 md:pb-20 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl lg:max-w-5xl mx-auto pl-4 pr-12 sm:pl-6 sm:pr-14 lg:px-8">

        {/* ================= STAGE 0: INTRO (Wide, Horizontal, Translucent Card) ================= */}
        {currentStep === 0 && (
          <div className="w-full rounded-3xl bg-[#FAF1EC]/65 backdrop-blur-xs border border-sand/25 p-7 sm:p-10 lg:p-12 shadow-soft hover:border-sand/35 transition-all duration-300">
            <div className="max-w-2xl mx-auto text-center space-y-3 sm:space-y-3.5">
              <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.14em] block">
                PRIVATE SELF-REFLECTION TOOL
              </span>

              <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] leading-[1.2] text-charcoal tracking-tight">
                Not Sure Where to Begin?
              </h2>

              <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-xl mx-auto">
                Reflect on your experiences with pain or difficulty with penetration.
              </p>

              <p className="font-body text-xs text-muted">
                This assessment does not provide a medical diagnosis.
              </p>

              <div className="pt-3 sm:pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-heading text-sm sm:text-base font-semibold text-white bg-sand-dark hover:bg-sand-deep rounded-full transition-all shadow-soft hover:shadow-soft-lg cursor-pointer"
                >
                  <span>Start Self-Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= STAGES 1 TO 5: QUESTIONS & RESULTS (Card Container) ================= */}
        {currentStep > 0 && (
          <div className="bg-white/95 backdrop-blur-xs rounded-3xl border border-sand/25 p-6 sm:p-10 shadow-soft">

          {/* ================= STAGES 1 TO 4: QUESTIONS ================= */}
          {currentStep >= 1 && currentStep <= 4 && (
            <div className="space-y-6">

              {/* Step & Progress Indicator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-heading font-semibold text-muted">
                  <span className="uppercase tracking-[0.12em] text-sand-dark">
                    Question {currentStep} of 4
                  </span>
                  <span>{currentStep * 25}% Complete</span>
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full h-2 rounded-full bg-sand-pale overflow-hidden">
                  <div
                    className="h-full bg-sand transition-all duration-300 rounded-full"
                    style={{ width: `${currentStep * 25}%` }}
                  />
                </div>
              </div>

              {/* Question 1: What do you experience during vaginal penetration or when something is inserted? (Multi-select) */}
              {currentStep === 1 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      What do you experience during vaginal penetration or when something is inserted?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">
                      Select all experiences that sound familiar to you.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {Q1_OPTIONS.map((opt, idx) => {
                      const isSelected = step1Answers.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleToggleQ1(opt)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                            }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
                              }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Question 2: In which situations do you notice these experiences? (Multi-select) */}
              {currentStep === 2 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      In which situations do you notice these experiences?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">
                      Select all situations that apply to you.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {Q2_OPTIONS.map((opt, idx) => {
                      const isSelected = step2Answers.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleToggleQ2(opt)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                            }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
                              }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Question 3: What happens when you try to relax or feel comfortable? (Single-select) */}
              {currentStep === 3 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      What happens when you try to relax or feel comfortable?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">
                      Select the option that best describes your experience.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {Q3_OPTIONS.map((opt, idx) => {
                      const isSelected = step3Answer === opt;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setStep3Answer(opt)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                            }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
                              }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Question 4: How do these experiences affect your comfort or everyday life? (Multi-select) */}
              {currentStep === 4 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      How do these experiences affect your comfort or everyday life?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">
                      Select all options that reflect your current feelings.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {Q4_OPTIONS.map((opt, idx) => {
                      const isSelected = step4Answers.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleToggleQ4(opt)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                            }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
                              }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div className="pt-4 border-t border-sand/15 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-heading text-xs sm:text-sm font-semibold text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isContinueEnabled()}
                  className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all ${isContinueEnabled()
                      ? 'bg-sand-dark text-white hover:bg-sand-deep shadow-xs'
                      : 'bg-sand-pale/60 text-muted/60 cursor-not-allowed'
                    }`}
                >
                  <span>{currentStep === 4 ? 'View Your Summary' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* ================= STAGE 5: RESULT SCREEN ================= */}
          {currentStep === 5 && assessmentResult && (
            <div className="space-y-6 animate-fadeIn">

              {/* Header Label & Retake */}
              <div className="flex items-center justify-between border-b border-sand/15 pb-3">
                <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em] block">
                  YOUR ASSESSMENT SUMMARY
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 font-heading text-xs text-muted hover:text-charcoal transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>

              {/* Result-Specific Heading */}
              <div className="space-y-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal leading-snug">
                  {assessmentResult.heading}
                </h3>
              </div>

              {/* What It May Mean */}
              <div className="space-y-1.5">
                <h4 className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.10em]">
                  What it may mean
                </h4>
                <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  {assessmentResult.explanation}
                </p>
              </div>

              {/* Next Step */}
              <div className="space-y-1.5">
                <h4 className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.10em]">
                  Next step
                </h4>
                <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  {assessmentResult.nextStep}
                </p>
              </div>

              {/* Short Medical Disclaimer */}
              <p className="font-body text-xs text-muted pt-1">
                This assessment is not a medical diagnosis. A healthcare professional can help assess your concerns.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 font-heading text-xs sm:text-sm font-semibold text-white bg-sand-dark hover:bg-sand-deep rounded-full shadow-xs text-center"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Consultation</span>
                  </a>

                  <a
                    href="https://wa.me/917904251378?text=Hello%20The%20Birthwave%20team,%20I%20completed%20the%20online%20self-assessment%20and%20would%20like%20to%20discuss%20my%20concerns%20privately."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 font-heading text-xs sm:text-sm font-medium text-[#1E5E3A] bg-[#E8F5E9] hover:bg-[#D4EDDA] rounded-full text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="font-heading text-xs font-semibold text-sand-dark hover:text-sand-deep text-center py-2"
                >
                  Retake Assessment
                </button>
              </div>

            </div>
          )}

          </div>
        )}

      </div>
    </section>
  );
};
