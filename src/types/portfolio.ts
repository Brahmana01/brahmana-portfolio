
export type ThemeMode = "light" | "dark";

export type SocialLink = {
  platform: "GitHub" | "LinkedIn" | "Instagram" | "Facebook" | "X";
  url: string;
};

export type Profile = {
  name: string;
  headline: string;
  about: string[];
  email: string;
  photo: string;
  availabilityLabel: string;
  socialLinks: SocialLink[];
};

export type ProjectStatus = "Completed" | "In Progress";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  images: string[];
  githubUrl: string;
  status?: ProjectStatus;
  featured: boolean;
  published: boolean;

  // Optional legacy fields
  role?: string;
  contribution?: string;
  demoUrl?: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: number | null;
  category: "Certificate" | "Achievement";
  image: string;
  credentialUrl: string;
  featured: boolean;
  published: boolean;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  startYear: number | null;
  endYear: number | null;
  location: string;
  description?: string;
  status?: "ongoing" | "completed";
};

export type Experience = {
  id: string;
  role: string;
  organization: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  startYear: number | null;
  endYear: number | null;
  featured: boolean;
};
