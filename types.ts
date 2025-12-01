export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface CertificationItem {
  name: string;
}

export interface PersonalDetail {
  label: string;
  value: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}