import React, { useState } from 'react';
import {
  ArrowRight, ArrowLeft, RotateCcw,
  Calendar, Check, ShieldCheck, HelpCircle
} from 'lucide-react';
import {
  ASSESSMENT_QUESTIONS,
  evaluateAssessmentAnswers,
  AssessmentResult,
} from '../utils/assessmentLogic';

export const InteractiveAssessment: React.FC = () => {
  // State: 0 (intro) | 1..5 (Questions 1 to 5) | 6 (Result)
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Store user answer ('Yes' | 'No') by question ID
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Stored Result generated on submission of Q5
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  const currentQuestion = ASSESSMENT_QUESTIONS[currentStep - 1];

  const handleSelectOption = (questionId: string, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const isCurrentQuestionAnswered = () => {
    if (!currentQuestion) return false;
    return !!answers[currentQuestion.id];
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 5) {
      // Evaluate results across all 5 clinical dimensions
      const finalResult = evaluateAssessmentAnswers(answers);
      setAssessmentResult(finalResult);
      setCurrentStep(6); // Move to Result screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0); // Return to intro
    }
  };

  const handleReset = () => {
    setAnswers({});
    setAssessmentResult(null);
    setCurrentStep(1); // Return directly to Question 1
  };

  return (
    <section id="assessment" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= STAGE 0: INTRO (Wide, Horizontal, Translucent Card) ================= */}
        {currentStep === 0 && (
          <div className="w-full rounded-2xl sm:rounded-3xl bg-[#FAF1EC]/65 backdrop-blur-xs border border-sand/25 p-6 sm:p-10 lg:p-12 shadow-soft hover:border-sand/35 transition-all duration-300">
            <div className="max-w-2xl mx-auto text-center space-y-3 sm:space-y-3.5">
              <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.14em] block">
                PRIVATE SELF-REFLECTION TOOL
              </span>

              <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] leading-[1.2] text-charcoal tracking-tight">
                Not Sure Where to Begin?
              </h2>

              <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-xl mx-auto">
                Reflect on your experiences with pain or difficulty with penetration through five confidential questions.
              </p>

              <div className="flex items-center justify-center gap-1.5 text-xs text-muted pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sand-dark" />
                <span>100% private · No medical diagnosis · Does not store personal data</span>
              </div>

              <div className="pt-3 sm:pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 font-heading text-xs sm:text-sm font-semibold text-white bg-sand-dark hover:bg-coral rounded-full transition-all shadow-soft hover:shadow-soft-lg cursor-pointer"
                >
                  <span>Start Self-Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= STAGES 1 TO 5: QUESTIONS (Card Container) ================= */}
        {currentStep >= 1 && currentStep <= 5 && currentQuestion && (
          <div className="bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-sand/25 p-5 sm:p-8 lg:p-10 shadow-soft">
            <div className="space-y-5 sm:space-y-6">

              {/* Step & Progress Indicator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-heading font-semibold text-muted">
                  <span className="uppercase tracking-[0.12em] text-sand-dark">
                    Question {currentStep} of 5
                  </span>
                  <span>{currentStep * 20}% Complete</span>
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full h-1.5 sm:h-2 rounded-full bg-sand-pale/60 overflow-hidden">
                  <div
                    className="h-full bg-sand-dark transition-all duration-300 rounded-full"
                    style={{ width: `${currentStep * 20}%` }}
                  />
                </div>
              </div>

              {/* Question Heading & Subtext */}
              <div className="space-y-1.5 pt-1">
                <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-charcoal leading-snug">
                  {currentQuestion.title}
                </h3>
                {currentQuestion.subtext && (
                  <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {currentQuestion.subtext}
                  </p>
                )}
              </div>

              {/* Yes / No Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, option)}
                      className={`w-full text-left p-4 sm:p-4.5 rounded-xl border font-heading text-sm sm:text-base font-semibold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-sand-pale/80 border-sand-dark text-charcoal shadow-2xs ring-1 ring-sand-dark/40'
                          : 'bg-white/70 border-sand/20 hover:bg-white hover:border-sand/40 text-charcoal/80'
                      }`}
                    >
                      <span>{option}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'border-sand-dark bg-sand-dark text-white'
                            : 'border-sand/40 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Navigation Buttons */}
              <div className="pt-4 border-t border-sand/15 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 font-heading text-xs sm:text-sm font-semibold text-charcoal/70 hover:text-charcoal transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentQuestionAnswered()}
                  className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isCurrentQuestionAnswered()
                      ? 'bg-sand-dark text-white hover:bg-coral shadow-xs'
                      : 'bg-sand-pale/60 text-muted/60 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === 5 ? 'View Your Summary' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ================= STAGE 6: RESULT SCREEN ================= */}
        {currentStep === 6 && assessmentResult && (
          <div className="bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-sand/25 p-5 sm:p-8 lg:p-10 shadow-soft">
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">

              {/* Header Label & Retake Button */}
              <div className="flex items-center justify-between border-b border-sand/15 pb-3">
                <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em] block">
                  YOUR ASSESSMENT SUMMARY
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 font-heading text-xs font-semibold text-sand-dark hover:text-coral transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>

              {/* Result Category Badge & Main Heading */}
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FAF1EC] border border-sand/25 font-heading text-xs font-semibold text-sand-dark">
                  {assessmentResult.badge}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal leading-snug tracking-tight">
                  {assessmentResult.heading}
                </h3>
              </div>

              {/* What It May Mean */}
              <div className="space-y-1.5 p-4 rounded-xl bg-sand-pale/35 border border-sand/20">
                <h4 className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.10em]">
                  What It May Mean
                </h4>
                <p className="font-body text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                  {assessmentResult.explanation}
                </p>
              </div>

              {/* Key Observations */}
              <div className="space-y-2">
                <h4 className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.10em]">
                  Key Considerations
                </h4>
                <ul className="space-y-1.5">
                  {assessmentResult.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-charcoal/80">
                      <div className="w-4 h-4 rounded-full bg-[#FAF1EC] border border-sand/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-sand-dark" strokeWidth={3} />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Next Steps */}
              <div className="space-y-1.5 p-4 rounded-xl bg-white border border-sand/20 shadow-2xs">
                <h4 className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.10em]">
                  Recommended Next Steps
                </h4>
                <p className="font-body text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                  {assessmentResult.nextStep}
                </p>
              </div>

              {/* Action Buttons & Confidentiality Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-sand/15">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-heading text-xs sm:text-sm font-semibold text-white bg-sand-dark hover:bg-coral transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </a>

                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <ShieldCheck className="w-4 h-4 text-sand-dark shrink-0" />
                  <span>Confidential & unhurried clinical support</span>
                </div>
              </div>

              {/* Medical Disclaimer */}
              <p className="text-[11px] sm:text-xs text-muted leading-relaxed italic border-t border-sand/10 pt-3">
                This self-reflection tool is designed for personal awareness and does not constitute a medical diagnosis. Only an unhurried, consenting evaluation by a qualified clinician can diagnose conditions related to pelvic pain.
              </p>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
