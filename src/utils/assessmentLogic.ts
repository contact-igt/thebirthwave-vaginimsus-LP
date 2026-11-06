export type ResultType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface AssessmentResult {
  type: ResultType;
  heading: string;
  explanation: string;
  nextStep: string;
}

export const RESULT_CONTENT: Record<ResultType, AssessmentResult> = {
  A: {
    type: 'A',
    heading: 'Possible Signs of Vaginismus',
    explanation:
      'Your symptoms may be signs of vaginismus. The muscles around the vaginal opening may tighten automatically, making penetration painful or difficult.',
    nextStep: 'Speak with a gynaecologist to understand your symptoms and suitable care.',
  },
  B: {
    type: 'B',
    heading: 'Pain or Discomfort',
    explanation:
      'Pain, burning or discomfort during vaginal insertion can happen for different reasons. It is important to find out what is causing it.',
    nextStep: 'Consult a gynaecologist for an assessment.',
  },
  C: {
    type: 'C',
    heading: 'Discomfort During Examinations',
    explanation:
      'Difficulty or discomfort during a vaginal examination does not always mean vaginismus. There may be other reasons.',
    nextStep: 'Discuss your concerns with a gynaecologist before your next examination.',
  },
  D: {
    type: 'D',
    heading: 'Difficulty Feeling Comfortable With Intimacy',
    explanation:
      'Feeling worried or uncomfortable about penetration can make intimacy difficult. You deserve support without pressure or judgement.',
    nextStep: 'Speak with a healthcare professional about your concerns.',
  },
  E: {
    type: 'E',
    heading: 'A Combination of Symptoms',
    explanation:
      'Pain, muscle tightening and difficulty with penetration can happen together. These symptoms may be related to vaginismus or another condition.',
    nextStep: 'A gynaecologist can help understand what is happening and discuss suitable care.',
  },
  F: {
    type: 'F',
    heading: 'No Clear Pattern Identified',
    explanation:
      'Your answers do not show a clear pattern at the moment. This assessment cannot determine whether you have vaginismus.',
    nextStep: 'If you still have concerns, speak with a healthcare professional.',
  },
};

export const Q1_OPTIONS = [
  'Pain at or around the vaginal opening.',
  'Burning, stinging or a sharp sensation.',
  'A feeling of tightness or involuntary muscle tightening.',
  'Penetration feels blocked or difficult.',
  'Penetration is impossible or cannot be completed.',
  'Fear or anxiety before penetration begins.',
  'I can experience penetration without pain or difficulty.',
  'I am not sure how to describe it.',
];

export const Q2_OPTIONS = [
  'During sexual penetration.',
  'When inserting a tampon.',
  'When inserting a finger.',
  'During a vaginal or pelvic examination.',
  'When penetration is expected, even before it begins.',
  'In more than one of these situations.',
  'I do not experience these difficulties in any of these situations.',
  'I am not sure.',
];

export const Q3_OPTIONS = [
  'My muscles still tighten automatically, even when I feel relaxed.',
  'I become anxious or tense before penetration begins.',
  'Pain or burning continues even when I feel relaxed.',
  'I can relax, but penetration still feels difficult.',
  'The discomfort changes depending on the situation.',
  'I have not tried or I am not sure.',
];

export const Q4_OPTIONS = [
  'They cause occasional discomfort.',
  'They make me worried about sexual intimacy.',
  'I avoid penetration because I am concerned about pain.',
  'I find vaginal examinations difficult.',
  'They affect my confidence or emotional wellbeing.',
  'They affect my relationship or intimacy.',
  'They significantly affect my everyday comfort.',
  'They do not currently affect my everyday life.',
  'I am not sure.',
  'I prefer not to answer.',
];

export const Q1_EXCLUSIVE_NONE = 'I can experience penetration without pain or difficulty.';
export const Q2_EXCLUSIVE_NONE = 'I do not experience these difficulties in any of these situations.';
export const Q4_EXCLUSIVES = [
  'They do not currently affect my everyday life.',
  'I am not sure.',
  'I prefer not to answer.',
];

/**
 * Deterministic rules-based evaluation engine for the Vaginismus Self-Assessment.
 * Evaluates combinations of answers across all four questions to assign one of 6 distinct categories.
 */
export function evaluateAssessment(
  q1: string[],
  q2: string[],
  q3: string,
  q4: string[]
): AssessmentResult {
  // 1. Validation / No symptoms reported
  const noSymptoms =
    q1.includes(Q1_EXCLUSIVE_NONE) ||
    q2.includes(Q2_EXCLUSIVE_NONE) ||
    (q4.includes('They do not currently affect my everyday life.') && q1.length === 0);

  if (noSymptoms) {
    return RESULT_CONTENT.F;
  }

  // 2. Unsure / Incomplete / Insufficient responses check
  let unsureCount = 0;
  if (q1.includes('I am not sure how to describe it.') || q1.length === 0) unsureCount += 1;
  if (q2.includes('I am not sure.') || q2.length === 0) unsureCount += 1;
  if (q3 === 'I have not tried or I am not sure.' || !q3) unsureCount += 1;
  if (q4.includes('I am not sure.') || q4.includes('I prefer not to answer.') || q4.length === 0) unsureCount += 1;

  if (unsureCount >= 3) {
    return RESULT_CONTENT.F;
  }

  // 3. Symptom Pattern Feature Extraction
  // Pain or burning
  const hasPainOpening = q1.includes('Pain at or around the vaginal opening.');
  const hasBurning = q1.includes('Burning, stinging or a sharp sensation.');
  const hasPainRelaxed = q3 === 'Pain or burning continues even when I feel relaxed.';
  const hasPain = hasPainOpening || hasBurning || hasPainRelaxed;

  // Involuntary muscle tightening
  const hasTighteningQ1 = q1.includes('A feeling of tightness or involuntary muscle tightening.');
  const hasTighteningRelaxed = q3 === 'My muscles still tighten automatically, even when I feel relaxed.';
  const hasTightening = hasTighteningQ1 || hasTighteningRelaxed;

  // Penetration difficulty / blocked / impossible
  const hasPenetrationBlocked = q1.includes('Penetration feels blocked or difficult.');
  const hasPenetrationImpossible = q1.includes('Penetration is impossible or cannot be completed.');
  const hasPenetrationDifficultRelaxed = q3 === 'I can relax, but penetration still feels difficult.';
  const hasPenetrationDifficulty =
    hasPenetrationBlocked || hasPenetrationImpossible || hasPenetrationDifficultRelaxed;

  // Fear, anxiety, avoidance
  const hasFearQ1 = q1.includes('Fear or anxiety before penetration begins.');
  const hasFearExpected = q2.includes('When penetration is expected, even before it begins.');
  const hasAnxietyQ3 = q3 === 'I become anxious or tense before penetration begins.';
  const hasIntimacyWorryQ4 = q4.includes('They make me worried about sexual intimacy.');
  const hasAvoidanceQ4 = q4.includes('I avoid penetration because I am concerned about pain.');
  const hasRelationshipQ4 = q4.includes('They affect my relationship or intimacy.');
  const hasHighComfortImpact = q4.includes('They significantly affect my everyday comfort.');

  const hasFearOrAnxiety =
    hasFearQ1 || hasFearExpected || hasAnxietyQ3 || hasIntimacyWorryQ4 || hasAvoidanceQ4;

  // Situation context
  const hasExamQ2 = q2.includes('During a vaginal or pelvic examination.');
  const hasExamQ4 = q4.includes('I find vaginal examinations difficult.');
  const hasSexualPenetration = q2.includes('During sexual penetration.');
  const hasTampon = q2.includes('When inserting a tampon.');
  const hasFinger = q2.includes('When inserting a finger.');
  const hasMultipleSituations = q2.includes('In more than one of these situations.');
  const hasOtherSituations =
    hasSexualPenetration || hasTampon || hasFinger || hasMultipleSituations;

  const isExamOnly = (hasExamQ2 || hasExamQ4) && !hasOtherSituations;

  // 4. Decision Rules by Priority

  // Rule 1: Examination-only discomfort (without broader sexual or tampon penetration difficulties)
  if (isExamOnly) {
    return RESULT_CONTENT.C;
  }

  // Rule 2: Result E – Combination of Symptoms
  // Significant overlapping patterns:
  // - Pain + involuntary muscle tightening
  // - Pain + penetration difficulty
  // - Pain + tightening + penetration difficulty + anxiety
  // - Pain + anxiety + significant impact / avoidance
  // - Tightening + penetration difficulty + high anxiety/avoidance
  if (hasPain && hasTightening) {
    return RESULT_CONTENT.E;
  }

  if (hasPain && hasPenetrationDifficulty) {
    return RESULT_CONTENT.E;
  }

  if (hasPain && hasFearOrAnxiety && (hasAvoidanceQ4 || hasRelationshipQ4 || hasIntimacyWorryQ4 || hasHighComfortImpact)) {
    return RESULT_CONTENT.E;
  }

  if (hasTightening && hasPenetrationDifficulty && hasFearOrAnxiety && (hasAvoidanceQ4 || hasRelationshipQ4)) {
    return RESULT_CONTENT.E;
  }

  // Rule 3: Result A – Possible Signs of Vaginismus
  // Strongest evidence: involuntary muscle tightening together with penetration difficulty, without prominent overlapping pain
  if (hasTightening && hasPenetrationDifficulty && !hasPain) {
    return RESULT_CONTENT.A;
  }

  // Rule 4: Result B – Pain or Discomfort
  // Pain around vaginal opening, burning or stinging without involuntary tightening or penetration difficulty
  if (hasPain && !hasTightening && !hasPenetrationDifficulty) {
    return RESULT_CONTENT.B;
  }

  // Pain during insertion that changes by situation without tightening
  if (hasPain && q3 === 'The discomfort changes depending on the situation.' && !hasTightening) {
    return RESULT_CONTENT.B;
  }

  // Rule 5: Result D – Difficulty Feeling Comfortable With Intimacy
  // Fear or anxiety before penetration / worry / avoidance without physical symptoms
  if (hasFearOrAnxiety && !hasPain && !hasTightening && !hasPenetrationDifficulty) {
    return RESULT_CONTENT.D;
  }

  // Rule 6: Fallback Result F – No Clear Pattern Identified
  return RESULT_CONTENT.F;
}

