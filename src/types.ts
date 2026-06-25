export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  badge: string;
}

export interface ProgramCase {
  id: number;
  title: string;
  subTitle: string;
  resultEmphasis: string;
  resultDetail: string;
  description: string;
  institution: string;
  period: string;
  tags: string[];
}

export interface StudentWork {
  id: number;
  studentName: string;
  studentGrade: string;
  workTitle: string;
  description: string;
  planningFocus: string;
  aiRendering: string;
  imageUrl: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  isHighlight?: boolean;
}

export interface NewsPost {
  id: number;
  title: string;
  category: string;
  date: string;
  snippet: string;
  readTime: string;
}
