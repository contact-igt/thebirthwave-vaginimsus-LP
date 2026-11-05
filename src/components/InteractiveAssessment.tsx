import React, { useState } from 'react';
import { 
  ArrowRight, ArrowLeft, RotateCcw, 
  Calendar, MessageCircle, Check
} from 'lucide-react';

export const InteractiveAssessment: React.FC = () => {
  // State: 0 (intro) | 1 (Q1) | 2 (Q2) | 3 (Q3) | 4 (Q4) | 5 (result)
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Selected Answers
  const [step1Answers, setStep1Answers] = useState<string[]>([]);
  const [step2Answers, setStep2Answers] = useState<string[]>([]);
  const [step3Answer, setStep3Answer] = useState<string>('');
  const [step4Answers, setStep4Answers] = useState<string[]>([]);

  // Question 1: What do you experience during vaginal penetration or when something is inserted?
  const step1Options = [
    'Pain, burning or stinging',
    'A feeling of tightness or involuntary muscle tightening',
    'Difficulty or inability with penetration',
    'Fear or worry about penetration',
    'I am not sure how to describe it',
    'None of these',
  ];

  // Question 2: In which situations do you notice these experiences?
  const step2Options = [
    'During sexual penetration',
    'When inserting a tampon or finger',
    'During a vaginal or pelvic examination',
    'When penetration is expected or attempted',
    'I am not sure',
  ];

  // Question 3: How long have you noticed these experiences?
  const step3Options = [
    'This is a recent experience',
    'For a few weeks or months',
    'For several months or longer',
    'It happens occasionally',
    'It has happened for as long as I can remember',
    'I am not sure',
  ];

  // Question 4: How do these experiences affect your comfort or everyday life?
  const step4Options = [
    'They cause some discomfort or worry',
    'They make me anxious about intimacy',
    'I sometimes avoid penetration or intimate situations',
    'They affect my confidence or emotional well-being',
    'They have a significant impact on my comfort or relationships',
    'I am not sure',
    'I prefer not to answer',
  ];

  // Exclusive options for multi-select
  const step1Exclusives = ['I am not sure how to describe it', 'None of these'];
  const step2Exclusives = ['I am not sure'];
  const step4Exclusives = ['I am not sure', 'I prefer not to answer'];

  // Mutually exclusive toggle for multi-select questions (functional state update prevents race conditions)
  const toggleMultiSelect = (
    item: string,
    _currentList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    exclusiveOptions: string[]
  ) => {
    setList((prev) => {
      if (exclusiveOptions.includes(item)) {
        return prev.includes(item) ? [] : [item];
      }
      const filtered = prev.filter((i) => !exclusiveOptions.includes(i));
      return filtered.includes(item)
        ? filtered.filter((i) => i !== item)
        : [...filtered, item];
    });
  };

  // Determine if Continue button is active
  const isContinueEnabled = () => {
    if (currentStep === 1) return step1Answers.length > 0;
    if (currentStep === 2) return step2Answers.length > 0;
    if (currentStep === 3) return step3Answer !== '';
    if (currentStep === 4) return step4Answers.length > 0;
    return false;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(5); // Result screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0); // Back to intro
    }
  };

  const handleReset = () => {
    setStep1Answers([]);
    setStep2Answers([]);
    setStep3Answer('');
    setStep4Answers([]);
    setCurrentStep(0);
  };

  // Rules-Based Result Generation Engine
  const getPersonalisedResult = () => {
    const hasTightening =
      step1Answers.includes('A feeling of tightness or involuntary muscle tightening') ||
      step1Answers.includes('Difficulty or inability with penetration');

    const hasPain = step1Answers.includes('Pain, burning or stinging');

    const hasFearOrAnxiety =
      step1Answers.includes('Fear or worry about penetration') ||
      step4Answers.includes('They make me anxious about intimacy') ||
      step4Answers.includes('I sometimes avoid penetration or intimate situations');

    const hasMultiplePhysical =
      step1Answers.filter((a) => !step1Exclusives.includes(a)).length >= 2;

    const hasSignificantImpact =
      step4Answers.includes('They have a significant impact on my comfort or relationships') ||
      step4Answers.includes('I sometimes avoid penetration or intimate situations') ||
      step4Answers.includes('They make me anxious about intimacy');

    const isCombinedPattern =
      (hasTightening && hasPain && hasFearOrAnxiety) ||
      (hasTightening && hasPain && hasSignificantImpact) ||
      (hasTightening && hasFearOrAnxiety && hasMultiplePhysical);

    const isExamOnly =
      step2Answers.length === 1 &&
      step2Answers.includes('During a vaginal or pelvic examination') &&
      !step2Answers.includes('During sexual penetration') &&
      !step2Answers.includes('When inserting a tampon or finger');

    const isUnsureOrNone =
      step1Answers.includes('None of these') ||
      (step1Answers.includes('I am not sure how to describe it') && step2Answers.includes('I am not sure')) ||
      (step1Answers.length === 0);

    // Contextual Duration Note
    let durationNote = '';
    if (step3Answer === 'This is a recent experience') {
      durationNote = 'Because this is a recent experience, a clinical review can help check whether a recent infection, localized irritation or sudden pelvic change is contributing.';
    } else if (step3Answer === 'It has happened for as long as I can remember') {
      durationNote = 'Because this has happened for as long as you can remember, an unhurried consultation can help understand this long-standing reflex and explore gradual, step-by-step care.';
    } else if (step3Answer === 'For several months or longer') {
      durationNote = 'Because these concerns have continued for several months or longer, seeking professional guidance can offer relief rather than managing persistent discomfort on your own.';
    }

    // Dynamic Observations: Up to 2-3 focused highlights from actual selected answers
    const highlights: { label: string; value: string }[] = [];

    // 1. Main Experience Observation
    if (step1Answers.length > 0 && !step1Answers.includes('None of these') && !step1Answers.includes('I am not sure how to describe it')) {
      highlights.push({
        label: 'Main experience:',
        value: step1Answers.slice(0, 2).join(' and '),
      });
    } else if (step1Answers.includes('I am not sure how to describe it')) {
      highlights.push({
        label: 'Main experience:',
        value: 'Uncertain about exact physical description',
      });
    }

    // 2. Situation Observation
    if (step2Answers.length > 0 && !step2Answers.includes('I am not sure')) {
      highlights.push({
        label: 'Situation:',
        value: step2Answers.length > 2 ? 'In multiple intimate and medical situations' : step2Answers.join(' and '),
      });
    }

    // 3. Personal Impact Observation
    const filteredImpact = step4Answers.filter(
      (a) => a !== 'I prefer not to answer' && a !== 'I am not sure'
    );
    if (filteredImpact.length > 0) {
      highlights.push({
        label: 'Personal impact:',
        value: filteredImpact.slice(0, 2).join(' and '),
      });
    }

    // Result Priority Engine

    // Result F: Unclear or No Clear Pattern Yet
    if (isUnsureOrNone) {
      return {
        type: 'F',
        heading: 'Your Answers Do Not Show a Clear Pattern Yet',
        explanation:
          'Your answers do not point to one clear pattern of concern. That does not mean your experience is unimportant. If something is worrying you or affecting your comfort, you can discuss it with a healthcare professional.',
        durationNote,
        highlights,
        nextStep:
          'If these concerns continue or affect your comfort, consider discussing them with a healthcare professional.',
      };
    }

    // Result C: Examination-Related Discomfort Only
    if (isExamOnly && !hasTightening) {
      return {
        type: 'C',
        heading: 'Your Answers Highlight Discomfort During Examinations',
        explanation:
          'You described difficulty or discomfort during vaginal or pelvic examinations. This may be related to pain, sensitivity, muscle tightening or anxiety about the examination. A healthcare professional can discuss ways to make an assessment more comfortable and explore possible causes. An examination should be explained and performed with your consent.',
        durationNote,
        highlights,
        nextStep:
          'You can discuss your concerns before an examination and ask about ways to make the process more comfortable.',
      };
    }

    // Result E: Combined Pattern of Pain, Tightening and Anxiety / High Impact
    if (isCombinedPattern) {
      return {
        type: 'E',
        heading: 'Your Answers Show a Combination of Experiences',
        explanation:
          'You described a combination of pain, difficulty with penetration and worry about intimacy. These experiences can sometimes occur together and may be associated with vaginismus or other pelvic and vaginal conditions. A personalised clinical assessment can help understand how these experiences are connected and what support may be appropriate.',
        durationNote,
        highlights,
        nextStep:
          'A personalised consultation can help you understand your physical and emotional concerns together.',
      };
    }

    // Result D: Worry or Anxiety About Intimacy (Without physical tightening or pain)
    if (hasFearOrAnxiety && !hasTightening && !hasPain) {
      return {
        type: 'D',
        heading: 'Your Answers Highlight Worry About Intimacy',
        explanation:
          'You described worry or anxiety around penetration or physical intimacy. Previous discomfort or concern about pain can sometimes contribute to these feelings. Your experience deserves to be understood without judgement. A healthcare professional can help you discuss both your physical comfort and emotional concerns.',
        durationNote,
        highlights,
        nextStep:
          'A supportive conversation with a healthcare professional may help you explore your concerns at your own pace.',
      };
    }

    // Result A: Experiences Associated with Involuntary Tightening
    if (hasTightening) {
      return {
        type: 'A',
        heading: 'Your Answers May Suggest a Pattern of Muscle Tightening',
        explanation:
          'You described difficulty with penetration or a feeling of tightening during vaginal insertion. These experiences can sometimes be associated with vaginismus, where the muscles around the vaginal opening tighten automatically. A healthcare professional can help understand what may be happening and whether other causes need to be considered.',
        durationNote,
        highlights,
        nextStep:
          'A gynaecologist can help assess your symptoms and discuss whether pelvic-floor support may be suitable.',
      };
    }

    // Result B: Pain, Burning or Discomfort (Without involuntary tightening)
    if (hasPain) {
      return {
        type: 'B',
        heading: 'Your Answers Highlight Pain or Discomfort',
        explanation:
          'You described pain or discomfort during vaginal insertion or related activities. This can have different causes, including irritation, infection or other pelvic or vaginal conditions. Your answers alone cannot identify the cause. A healthcare professional can help assess the symptoms and discuss appropriate next steps.',
        durationNote,
        highlights,
        nextStep:
          'A gynaecologist can help identify possible causes of the discomfort and discuss suitable care.',
      };
    }

    // Fallback Result F
    return {
      type: 'F',
      heading: 'Your Answers Do Not Show a Clear Pattern Yet',
      explanation:
        'Your answers do not point to one clear pattern of concern. That does not mean your experience is unimportant. If something is worrying you or affecting your comfort, you can discuss it with a healthcare professional.',
      durationNote,
      highlights,
      nextStep:
        'If these concerns continue or affect your comfort, consider discussing them with a healthcare professional.',
    };
  };

  const result = getPersonalisedResult();

  return (
    <section id="assessment" className="pt-8 pb-14 md:pt-12 md:pb-20 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Card Container */}
        <div className="bg-white/80 backdrop-blur-xs rounded-3xl border border-sand/25 p-6 sm:p-10 shadow-soft">
          
          {/* ================= STAGE 0: INTRO ================= */}
          {currentStep === 0 && (
            <div className="text-center space-y-4 py-4 sm:py-8 max-w-xl mx-auto">
              <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em] block">
                PRIVATE SELF-REFLECTION TOOL
              </span>

              <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[34px] leading-[1.18] text-charcoal tracking-tight">
                Not Sure Where to Begin?
              </h2>

              <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-lg mx-auto">
                Answer a few simple questions about your experiences with pain, discomfort or difficulty with penetration. This can help you prepare for a conversation with our care team.
              </p>

              <p className="font-body text-xs text-muted">
                This assessment does not provide a medical diagnosis.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-heading text-sm sm:text-base font-semibold text-white bg-sand-dark hover:bg-sand-deep rounded-full transition-all shadow-soft"
                >
                  <span>Start Self-Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

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

              {/* Question 1: What are you experiencing? (Multi-choice) */}
              {currentStep === 1 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      What do you experience during vaginal penetration or when something is inserted?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">Select all experiences that sound familiar to you.</p>
                  </div>

                  <div className="space-y-2.5">
                    {step1Options.map((opt, idx) => {
                      const isSelected = step1Answers.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleMultiSelect(opt, step1Answers, setStep1Answers, step1Exclusives)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${
                            isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                          }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
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

              {/* Question 2: In which situations do you notice these experiences? (Multi-choice) */}
              {currentStep === 2 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      In which situations do you notice these experiences?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">Select all situations that apply to you.</p>
                  </div>

                  <div className="space-y-2.5">
                    {step2Options.map((opt, idx) => {
                      const isSelected = step2Answers.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleMultiSelect(opt, step2Answers, setStep2Answers, step2Exclusives)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${
                            isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                          }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
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

              {/* Question 3: How long have you been experiencing this? (Single-choice) */}
              {currentStep === 3 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      How long have you noticed these experiences?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">Select the option that best describes your experience.</p>
                  </div>

                  <div className="space-y-2.5">
                    {step3Options.map((opt, idx) => {
                      const isSelected = step3Answer === opt;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setStep3Answer(opt)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${
                            isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                          }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
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

              {/* Question 4: How does this affect you? (Multi-choice) */}
              {currentStep === 4 && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal">
                      How do these experiences affect your comfort or everyday life?
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted">Select all options that reflect your current feelings.</p>
                  </div>

                  <div className="space-y-2.5">
                    {step4Options.map((opt, idx) => {
                      const isSelected = step4Answers.includes(opt);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleMultiSelect(opt, step4Answers, setStep4Answers, step4Exclusives)}
                          className={`w-full text-left p-4 rounded-xl border font-body text-sm transition-all duration-150 flex items-center justify-between ${
                            isSelected
                              ? 'bg-sand-pale/80 border-sand text-charcoal font-semibold shadow-2xs ring-1 ring-sand/30'
                              : 'bg-white/60 border-sand/20 hover:bg-white text-charcoal/80'
                          }`}
                        >
                          <span>{opt}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-sand bg-sand text-white' : 'border-sand/40 bg-white'
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
                  className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all ${
                    isContinueEnabled()
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

          {/* ================= STAGE 5: PERSONALISED RESULT SCREEN ================= */}
          {currentStep === 5 && (
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

              {/* Personalised Result Heading & Explanation */}
              <div className="space-y-2.5">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal leading-snug">
                  {result.heading}
                </h3>
                <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  {result.explanation}
                </p>
                {result.durationNote && (
                  <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed italic bg-sand-pale/40 p-3 rounded-xl border border-sand/15">
                    {result.durationNote}
                  </p>
                )}
              </div>

              {/* What Your Answers Highlight (Up to 2-3 focused observations) */}
              {result.highlights.length > 0 && (
                <div className="space-y-2.5 pt-1">
                  <h4 className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.10em]">
                    What Your Answers Highlight
                  </h4>
                  <div className="p-4 sm:p-5 rounded-2xl bg-cream/70 border border-sand/20 space-y-2 font-body text-xs sm:text-sm">
                    {result.highlights.map((h, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="font-heading font-semibold text-charcoal shrink-0 sm:w-36 text-muted">
                          {h.label}
                        </span>
                        <span className="text-charcoal font-medium">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What You Can Do Next */}
              <div className="space-y-1.5 pt-1">
                <h4 className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.10em]">
                  What You Can Do Next
                </h4>
                <p className="font-body text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  {result.nextStep}
                </p>
              </div>

              {/* Short Medical Disclaimer */}
              <p className="font-body text-xs text-muted pt-1">
                This is a self-reflection tool, not a medical diagnosis. A healthcare professional can help assess your concerns.
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

      </div>
    </section>
  );
};
