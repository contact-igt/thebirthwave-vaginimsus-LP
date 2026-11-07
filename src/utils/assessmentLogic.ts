export type ResultType = 'INDICATIVE_VAGINISMUS' | 'DISCOMFORT_PAIN' | 'LOW_LIKELIHOOD';

export interface AssessmentResult {
  type: ResultType;
  heading: string;
  badge: string;
  explanation: string;
  nextStep: string;
  keyPoints: string[];
}

export interface QuestionData {
  id: string;
  number: number;
  title: string;
  subtext?: string;
  options: string[];
}

export const ASSESSMENT_QUESTIONS: QuestionData[] = [
  {
    id: 'prior_evaluation',
    number: 1,
    title: 'Have you previously been assessed by a gynaecologist, doctor, or specialist for painful penetration or vaginismus?',
    subtext: 'Prior discussions or examinations help contextualise your experiences.',
    options: ['Yes', 'No'],
  },
  {
    id: 'pain_burning',
    number: 2,
    title: 'Do you experience pain, burning, stinging, soreness or a tearing sensation around the vagina during attempted penetration or intimate examinations?',
    subtext: 'This includes intercourse, tampon insertion, or pelvic examinations.',
    options: ['Yes', 'No'],
  },
  {
    id: 'physical_block',
    number: 3,
    title: 'When penetration is attempted, does it feel as though there is an immovable barrier—as if "hitting a wall" or that there is no space?',
    subtext: 'Many women describe a sensation that the opening is completely shut or too small.',
    options: ['Yes', 'No'],
  },
  {
    id: 'anxiety_hesitation',
    number: 4,
    title: 'Do you experience fear, anxiety, tension or hesitation when anticipating or preparing for vaginal penetration?',
    subtext: 'Anticipatory worry often develops after past uncomfortable or painful experiences.',
    options: ['Yes', 'No'],
  },
  {
    id: 'involuntary_reflex',
    number: 5,
    title: 'Does your body react automatically—such as your pelvic muscles, thighs, or buttocks tightening, or reflexively pulling back or pushing away?',
    subtext: 'This is an involuntary physical reflex beyond your conscious control.',
    options: ['Yes', 'No'],
  },
];

export const RESULT_CONTENT: Record<ResultType, AssessmentResult> = {
  INDICATIVE_VAGINISMUS: {
    type: 'INDICATIVE_VAGINISMUS',
    badge: 'Symptoms Indicative of Vaginismus',
    heading: 'Your Symptoms May Be Indicative of Vaginismus',
    explanation:
      'Your responses reflect experiences characteristic of vaginismus, such as involuntary pelvic-floor tightening, a sensation of physical obstruction ("hitting a wall"), and anticipatory discomfort. Vaginismus is an automatic protective reflex of the body—not a personal failing, emotional flaw, or lack of desire.',
    nextStep:
      'Because vaginismus involves involuntary muscle contraction alongside nervous system reassurance, an unhurried, multi-disciplinary consultation with a compassionate gynaecologist and pelvic-floor physiotherapist can help you understand your body and explore gentle, step-by-step care options at your own pace.',
    keyPoints: [
      'Involuntary pelvic-floor reflex, not a conscious choice',
      'Examinations are never rushed and proceed only with your consent',
      'Personalised care combining physiotherapy, emotional guidance and medical review',
    ],
  },
  DISCOMFORT_PAIN: {
    type: 'DISCOMFORT_PAIN',
    badge: 'Discomfort & Pain Evaluation',
    heading: 'Pain or Discomfort During Penetration Identified',
    explanation:
      'You reported pain, burning, or anticipatory worry during penetration or examinations without experiencing the full involuntary muscle reflex or physical obstruction. Pelvic discomfort can arise from multiple medical factors, including local skin sensitivity, hormonal variations, infections, or mild pelvic tension.',
    nextStep:
      'An unhurried conversation with a women’s health clinician can clarify the underlying causes of your discomfort, rule out common medical factors, and ensure you receive supportive, pressure-free guidance.',
    keyPoints: [
      'Pain during penetration has various treatable physiological causes',
      'First visits focus on conversation, listening and comfort boundaries',
      'Care is customised to your personal comfort level',
    ],
  },
  LOW_LIKELIHOOD: {
    type: 'LOW_LIKELIHOOD',
    badge: 'Low Likelihood Pattern',
    heading: 'Symptoms Show Low Likelihood of Vaginismus',
    explanation:
      'Based on your responses, you do not currently experience the involuntary reflex contractions, physical sensation of blockage, or persistent pain that typically characterise vaginismus.',
    nextStep:
      'If you still experience any discomfort, intimacy concerns, or questions about pelvic health that were not captured here, our clinical team is always available for a confidential consultation.',
    keyPoints: [
      'Responses do not show characteristic involuntary spasm patterns',
      'Every individual experience of comfort and intimacy is valid',
      'Confidential clinical guidance is always available whenever you have concerns',
    ],
  },
};

/**
 * Deterministic, clinically vetted scoring and evaluation engine.
 * Maps binary answers from the 5 core clinical dimensions to an appropriate reflection summary.
 */
export function evaluateAssessmentAnswers(answers: Record<string, string>): AssessmentResult {
  const hasPriorDiagnosis = answers['prior_evaluation'] === 'Yes';
  const hasPain = answers['pain_burning'] === 'Yes';
  const hasBlock = answers['physical_block'] === 'Yes';
  const hasAnxiety = answers['anxiety_hesitation'] === 'Yes';
  const hasReflex = answers['involuntary_reflex'] === 'Yes';

  const yesCount = [hasPriorDiagnosis, hasPain, hasBlock, hasAnxiety, hasReflex].filter(Boolean).length;

  // 1. All No -> Low Likelihood
  if (yesCount === 0) {
    return RESULT_CONTENT.LOW_LIKELIHOOD;
  }

  // 2. Strong indicators of vaginismus:
  // - Involuntary reflex spasm reported (Q5)
  // - Sensation of physical obstruction / hitting a wall (Q3)
  // - Prior clinical evaluation/diagnosis (Q1)
  // - Or 3+ affirmative responses across pain, block, reflex, and anxiety
  if (hasReflex || hasBlock || hasPriorDiagnosis || yesCount >= 3) {
    return RESULT_CONTENT.INDICATIVE_VAGINISMUS;
  }

  // 3. Isolated pain or anxiety without characteristic involuntary spasm or block
  return RESULT_CONTENT.DISCOMFORT_PAIN;
}
