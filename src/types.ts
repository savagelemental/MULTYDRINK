export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface VitalMethodStep {
  letter: 'V' | 'I' | 'T' | 'A' | 'L';
  title: string;
  description: string;
  extendedDescription: string;
}

export interface StepCard {
  stepNumber: number;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  stars: number;
  text: string;
  image: string;
  designation: string;
  metrics?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Lead {
  name: string;
  email: string;
  whatsapp?: string;
  status: 'new' | 'contacted';
  createdAt: string;
}
