export interface SkillGroup {
  id: string;
  title: string;
  skills: Array<{
    name: string;
    projects?: string[];
  }>;
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { 
        name: 'Next.js',
        projects: ['Malmo Marine', 'Salazar Marine', 'Debbie Hunt Celebrant']
      },
      {
        name: 'TypeScript',
        projects: ['Malmo Marine', 'Maritime Career AI']
      },
      {
        name: 'React',
        projects: ['Exercise Search App', 'AI Email Summariser']
      },
      {
        name: 'Tailwind CSS',
        projects: ['Malmo Marine', 'Salazar Marine', 'Debbie Hunt Celebrant']
      },
      {
        name: 'Framer Motion',
        projects: ['Salazar Marine']
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    skills: [
      {
        name: 'PostgreSQL',
        projects: ['Malmo Marine', 'Maritime Career AI']
      },
      {
        name: 'Prisma ORM',
        projects: ['Malmo Marine']
      },
      {
        name: 'NextAuth.js',
        projects: ['Malmo Marine', 'AI Email Summariser']
      },
      {
        name: 'Firebase',
        projects: ['Exercise Search App']
      }
    ]
  },
  {
    id: 'ai',
    title: 'AI Integration',
    skills: [
      {
        name: 'GPT-4 API',
        projects: ['AI Email Summariser', 'Maritime Career AI']
      },
      {
        name: 'LangChain',
        projects: ['Maritime Career AI']
      },
      {
        name: 'Vector Databases',
        projects: ['Maritime Career AI']
      }
    ]
  },
  {
    id: 'apis',
    title: 'API Integration',
    skills: [
      {
        name: 'Gmail API',
        projects: ['AI Email Summariser']
      },
      {
        name: 'YouTube API',
        projects: ['Exercise Search App']
      },
      {
        name: 'ExerciseDB API',
        projects: ['Exercise Search App']
      },
      {
        name: 'Contentful CMS',
        projects: ['Debbie Hunt Celebrant']
      }
    ]
  }
];
