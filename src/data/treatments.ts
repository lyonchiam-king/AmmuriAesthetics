import { Treatment } from '../types';
import prpImage from '../assets/images/prp_hair_treatment_1788340066069.jpg';
import boosterImage from '../assets/images/skin_booster_treatment_1788340085528.jpg';
import heroImage from '../assets/images/ealing_clinic_hero_1788340022407.jpg';

export const TREATMENTS: Treatment[] = [
  {
    id: 'prp-hair',
    name: 'PRP Hair Treatment',
    subtitle: 'Platelet-Rich Plasma scalp therapy for natural hair density & follicle stimulation',
    tags: ['Regrowth', 'Natural'],
    priceTag: 'From [TO CONFIRM]',
    description: 'Utilises your body’s own growth factors to stimulate dormant hair follicles, strengthen existing strands, and promote natural regrowth without chemical additives or invasive surgery.',
    details: [
      'Gently extracts nutrient-rich growth plasma from a quick blood sample',
      'Micro-target areas of thinning along the scalp or hairline',
      'Completely natural procedure using zero synthetic chemicals',
      'Helps slow down hair shedding and encourages thicker shaft diameter'
    ],
    duration: '45 - 60 mins',
    downtime: 'Minimal (mild redness for 12-24 hours)',
    results: 'Noticeable reduction in shedding within 4 weeks; fuller regrowth at 3 months',
    beforeImage: prpImage,
    afterImage: prpImage
  },
  {
    id: 'lemon-bottle',
    name: 'Lemon Bottle',
    subtitle: 'Targeted fat dissolver for refined facial contouring & stubborn pockets',
    tags: ['Fat Dissolver', 'Contour'],
    priceTag: 'From [TO CONFIRM]',
    description: 'A high-concentration lipolysis solution designed to break down localized fat cells under the chin, jawline, or cheeks gently and naturally.',
    details: [
      'Formulated with natural ingredients like Riboflavin (Vitamin B2), Bromelain, and Lecithin',
      'Fast-acting formulation with minimal swelling compared to traditional dissolvers',
      'Precision micro-injections tailored to your natural bone structure',
      'Metabolizes and naturally flushes targeted fat cells through your lymphatic system'
    ],
    duration: '30 - 45 mins',
    downtime: 'Mild tenderness or localized swelling for 24-48 hours',
    results: 'Visible contour definition in 7-14 days',
    beforeImage: heroImage,
    afterImage: heroImage
  },
  {
    id: 'masseters-btox',
    name: 'Masseters Btox',
    subtitle: 'Jawline slimming & tension relief for teeth grinding or clenching',
    tags: ['Jaw Slimming', 'Relax'],
    priceTag: 'From [TO CONFIRM]',
    description: 'Relaxes overactive masseter jaw muscles to alleviate involuntary jaw clenching and tension while providing a softer, slighter jawline contour.',
    details: [
      'Relieves jaw soreness, tension headaches, and nocturnal teeth grinding (bruxism)',
      'Subtly softens square or bulky jawline appearance over 2 to 4 weeks',
      'Administered with micro-fine needles for maximum comfort',
      'Preserves completely natural facial expressions and smile'
    ],
    duration: '20 - 30 mins',
    downtime: 'None (return to work immediately)',
    results: 'Muscle relaxation in 5-7 days; jaw slimming visible at 3-4 weeks',
    beforeImage: boosterImage,
    afterImage: boosterImage
  },
  {
    id: 'vitaran-eyes',
    name: 'Vitaran Eyes',
    subtitle: 'Advanced polynucleotide skin booster for delicate under-eye brightening',
    tags: ['Skin Booster', 'Hydrate'],
    priceTag: 'From [TO CONFIRM]',
    description: 'A bio-rejuvenating salmon DNA polynucleotide injectable specifically engineered to repair, firm, and deeply hydrate thin under-eye skin.',
    details: [
      'Targets dark circles, fine crepey skin, and hollow under-eye troughs',
      'Stimulates collagen and elastin synthesis at deep cellular level',
      'Improves micro-circulation and skin elasticity',
      'Gentle formulation suited for sensitive under-eye skin'
    ],
    duration: '30 mins',
    downtime: 'Minor bumpiness at injection points settling within 24-36 hours',
    results: 'Refreshed skin texture in 2 weeks; peak collagen buildup after 2-3 sessions',
    beforeImage: boosterImage,
    afterImage: boosterImage
  }
];
