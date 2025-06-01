export interface Project {
  id?: string;
  title: string;
  description: string;
  image?: string;
  webapp?: string;
  type?: 'personal' | 'company';
} 