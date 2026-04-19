export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  year: string;
  github?: string;
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  duration: string;
  type: "leadership" | "ambassador" | "internship";
  highlights: string[];
  achievements?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}
