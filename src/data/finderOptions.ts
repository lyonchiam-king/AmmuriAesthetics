import { MatcherStep } from '../types';

export const FINDER_STEPS: MatcherStep[] = [
  {
    step: 1,
    title: 'What is your primary skin or cosmetic concern?',
    options: [
      {
        id: 'hair-thinning',
        label: 'Hair Thinning or Shedding',
        description: 'Noticeable shedding along hairline, crown, or parting',
        suggestedTreatment: 'PRP Hair Treatment'
      },
      {
        id: 'stubborn-fat',
        label: 'Localised Fat or Jawline Softness',
        description: 'Subtle fullness under chin, jaw, or cheeks',
        suggestedTreatment: 'Lemon Bottle'
      },
      {
        id: 'jaw-tension',
        label: 'Jaw Tension & Teeth Grinding',
        description: 'Sore masseter muscles, clenching, or square jaw appearance',
        suggestedTreatment: 'Masseters Btox'
      },
      {
        id: 'eye-tiredness',
        label: 'Dark Under-Eyes & Fine Lines',
        description: 'Tired, crepey skin or dark circles under the eyes',
        suggestedTreatment: 'Vitaran Eyes'
      }
    ]
  },
  {
    step: 2,
    title: 'Which area would you like to focus on?',
    options: [
      {
        id: 'scalp-hairline',
        label: 'Scalp & Hairline',
        description: 'Scalp area requiring growth factor stimulation'
      },
      {
        id: 'chin-jawline',
        label: 'Chin & Jawline',
        description: 'Lower face definition and muscle relaxation'
      },
      {
        id: 'under-eye',
        label: 'Under-Eye & Upper Cheeks',
        description: 'Delicate peri-orbital area needing hydration and firming'
      },
      {
        id: 'full-face',
        label: 'Full Face & Skin Quality',
        description: 'Overall skin radiance, hydration, and texture improvement'
      }
    ]
  },
  {
    step: 3,
    title: 'What is your main aesthetic goal?',
    options: [
      {
        id: 'goal-natural-regrowth',
        label: '100% Natural Hair Regrowth',
        description: 'Stimulate follicles using your own natural plasma'
      },
      {
        id: 'goal-subtle-contour',
        label: 'Subtle, Refined Face Contouring',
        description: 'Gently dissolve localized fullness without surgery'
      },
      {
        id: 'goal-tension-relief',
        label: 'Jaw Relief & Softer Jawline',
        description: 'Relieve muscle tightness and achieve a relaxed contour'
      },
      {
        id: 'goal-skin-hydration',
        label: 'Deep Under-Eye Hydration',
        description: 'Brighten dark circles and smooth fine crepey lines'
      }
    ]
  }
];
