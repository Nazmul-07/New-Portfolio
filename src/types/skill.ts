export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}

