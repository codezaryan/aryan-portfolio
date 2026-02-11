/**
 * Represents the type of icon used in timeline items.
 */
export type IconType = 'life' | 'education' | 'code' | 'award';

/**
 * Represents a single item in the timeline.
 */
export type TimelineItem = {
  /** The title of the timeline event. */
  title: string;
  /** The type of icon to display for this event. */
  type: IconType;
  /** The description of the timeline event. */
  event: string;
};

/**
 * Experience item interface
 */
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

/**
 * Education item interface
 */
export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
}

/**
 * Resume data containing all professional information
 */
export interface ResumeData {
  experience: ExperienceItem[];
  certifications: string[];
  skills: string[];
}

/**
 * Skill interface for individual skills
 */
export interface Skill {
  name: string;
  level: string;
  proficiency: number;
}

/**
 * Skill category interface
 */
export interface SkillCategory {
  title: string;
  icon: React.ReactElement;
  skills: Skill[];
  color: string;
}

/**
 * Project interface
 */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  problem: string;
  image: string;
}

/**
 * Quick link interface
 */
export interface QuickLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}
