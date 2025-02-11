export interface SkillModel {
  developerId: number;
  skills: Skill[];
}

export interface Skill {
  languageId: number;
  frameworkId: number;
}
