import { ExperienceItem, EducationItem, CertificationItem, PersonalDetail } from './types';
import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';

export const PERSONAL_DETAILS: PersonalDetail[] = [
  { label: 'Date of Birth', value: '1st March 1992' },
  { label: 'Gender', value: 'Male' },
  { label: 'Marital Status', value: 'Single' },
  { label: 'Nationality', value: 'Myanmar' },
  { label: 'Availability', value: '1 month' },
];

export const SUMMARY = `Professional and skilled engineer with over 9 years of progressive experience in the field of ELV (Security Alarm System, Access Control system and CCTV system). Proven ability to manage and complete projects meeting the security design, HSE standards and client's satisfaction by using excellent project management, negotiating, strong technical knowledge and problem-solving skills. Currently living in Da Nang, Vietnam and looking for a Singapore job.`;

export const CONTACT_INFO = {
  email: 'aungthuhein.engr@gmail.com',
  phone: '+6586076223',
  phoneLabel: '+65 8607 6223 (WhatsApp)',
  location: 'Da Nang, Vietnam',
};

export const EDUCATION: EducationItem = {
  degree: 'Bachelor of Electrical Engineering',
  institution: 'Technological University (Toungoo)',
  year: '2009 - 2014',
};

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'TP Link Network Associate Enterprise Routing and Switching - TPNA' },
  { name: 'TP Link Security Associate - TPSA' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Field Engineer',
    company: 'UP Communication Pte Ltd',
    location: 'Singapore',
    period: 'Feb 2023 - Oct 2025',
    description: [
      'Assist in system installation, testing, troubleshooting, and maintenance.',
      'Support configuration and upkeep of CCTV, EACS, IDS systems.',
      'Respond to fault calls and provide first-level technical support.',
      'Conduct routine inspections and preventive maintenance to uphold system performance.',
      'Interpret wiring diagrams, layouts, SOPs, and technical manuals.',
      'Prepare tools, equipment, and documentation for site works.',
      'Provide timely updates to Engineers, Supervisors, and clients.',
      'Assist in project coordination and on-site implementation works.',
      'Support backend administration of security systems.',
      'Ensure compliance with workplace safety and health requirements.'
    ]
  },
  {
    id: '2',
    role: 'Senior Technical Engineer',
    company: 'Secom Co., Ltd.',
    location: 'Myanmar',
    period: 'Feb 2017 - Jan 2023',
    description: [
      'Conduct on-site installation, software configuration, programming and repairing for Security Alarm System, CCTV and Access Control System.',
      'Supervising and instructing the subcontractors to always ensure and maintain HSE standards and comply with them.',
      'Attending site meeting and providing regular progress reports to the project manager.',
      'Inspecting, testing, commissioning, troubleshooting, preventive maintenance of the systems.',
      'Handling the technical issues for all systems and finding the proper solution to solve the problem.',
      'Support in Designing, Planning for all types of projects (industrial, commercial, residential).',
      'Performing quality control tasks on budgets, schedules, plans, personnel performance and reporting project progress.'
    ]
  }
];

export const SKILLS = [
  'ELV Systems',
  'CCTV Configuration',
  'Access Control Systems',
  'Security Alarm Systems',
  'Project Management',
  'HSE Standards',
  'Technical Troubleshooting',
  'Site Supervision',
  'AutoCAD / Drawing Interpretation'
];

export const LANGUAGES = ['English', 'Myanmar'];