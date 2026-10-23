export type ServiceCategory =
  | 'business-website'
  | 'landing-page'
  | 'ecommerce'
  | 'web-application'
  | 'redesign'
  | 'maintenance';

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  startingPriceKES: string;
  startingPriceUSD: string;
  idealFor: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: ServiceCategory;
  categoryLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  featured: boolean;
  deliverables: string[];
  year: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'email' | 'whatsapp' | 'phone';
}

export interface QuoteFormData {
  projectType: ServiceCategory;
  budgetRange: string;
  currency: 'KES' | 'USD';
  timeline: string;
  features: string[];
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  projectDescription: string;
}
