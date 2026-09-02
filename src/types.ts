export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  priceTag: string; // e.g. "From [TO CONFIRM]"
  description: string;
  details: string[];
  duration: string;
  downtime: string;
  results: string;
  beforeImage: string;
  afterImage: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialities: string[];
  quote: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  treatmentName?: string;
  verified: boolean;
}

export interface MatcherStep {
  step: number;
  title: string;
  options: {
    id: string;
    label: string;
    description: string;
    suggestedTreatment?: string;
  }[];
}

export interface MatcherState {
  concern: string;
  area: string;
  goal: string;
  matchedTreatment: string;
}

export interface EnquiryData {
  name: string;
  phone: string;
  treatment: string;
  area?: string;
  preferredDate?: string;
  notes?: string;
}
