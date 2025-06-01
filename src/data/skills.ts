export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  icon?: string;
}

export const skills: Skill[] = [
  {
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: 'react'
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
    icon: 'typescript'
  },
  {
    name: 'Node.js',
    level: 80,
    category: 'backend',
    icon: 'nodejs'
  },
  {
    name: 'MongoDB',
    level: 75,
    category: 'database',
    icon: 'mongodb'
  },
  {
    name: 'Docker',
    level: 70,
    category: 'devops',
    icon: 'docker'
  },
  {
    name: 'AWS',
    level: 65,
    category: 'devops',
    icon: 'aws'
  },
  {
    name: 'GraphQL',
    level: 75,
    category: 'backend',
    icon: 'graphql'
  },
  {
    name: 'PostgreSQL',
    level: 70,
    category: 'database',
    icon: 'postgresql'
  }
];