export type SocialLink = {
  label: string;
  href: string;
};

export type SiteStatus = {
  label: string;
  openToWork: boolean;
};

export type Site = {
  name: string;
  title: string;
  role: string;
  location: string;
  timezone: string;
  status: SiteStatus;
  email: string;
  socials: SocialLink[];
  documentTitle: string;
  description: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type HeroContent = {
  name: string;
  headline: string;
  supporting: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  chips: string[];
};

export type Fact = {
  label: string;
  value: string;
};

export type AboutContent = {
  paragraphs: string[];
  facts: Fact[];
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type Service = {
  title: string;
  summary: string;
};

export type ContactContent = {
  intro: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  submittingLabel: string;
  success: string;
  formError: string;
  mailtoLabel: string;
  nameError: string;
  emailError: string;
  messageError: string;
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  stack: string[];
  featured: boolean;
  role?: string;
  liveUrl?: string;
  sourceUrl?: string;
  imageSrc?: string;
};
