export type ProjectCategory = 'website' | 'saas' | 'ai-tool' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  technologies: Array<{
    name: string;
    color: string;
  }>;
  githubUrl?: string;
  demoUrl?: string;
  status: 'completed' | 'in‑progress' | 'planned';
}

export const projects: Project[] = [
  // SaaS Applications
  {
    id: 'malmo-marine',
    title: 'Malmo Marine',
    category: 'saas',
    description: 'Specialized job platform and career management system for the maritime industry in New Zealand',
    problem: 'Maritime professionals lack a centralized platform for job searching, qualification management, and career development specific to their industry',
    solution: 'Built a comprehensive SaaS platform that connects marine professionals with employers while providing tools for qualification tracking and career management',
    technologies: [
      { name: 'Next.js', color: 'bg-accent-purple-50 text-accent-purple-700' },
      { name: 'TypeScript', color: 'bg-accent-purple-100 text-accent-purple-800' },
      { name: 'Prisma', color: 'bg-accent-secondary-50 text-accent-secondary-700' },
      { name: 'PostgreSQL', color: 'bg-accent-secondary-100 text-accent-secondary-800' },
      { name: 'NextAuth.js', color: 'bg-accent-purple-50 text-accent-purple-700' }
    ],
    demoUrl: 'https://www.malmomarine.co.nz',
    status: 'in‑progress'
  },

  // Websites
  {
    id: 'salazar-marine',
    title: 'Salazar Marine Website',
    category: 'website',
    description: 'Professional website for a marine services company in Tauranga, showcasing their boat building, repairs, and maintenance services',
    problem: 'Need for a modern, professional online presence to showcase marine services and attract potential customers in the Tauranga region',
    solution: 'Developed a clean, responsive website with clear service categorization, project showcase, and easy contact options. Optimized for local SEO and marine industry-specific content',
    technologies: [
      { name: 'Next.js', color: 'bg-accent-purple-50 text-accent-purple-700' },
      { name: 'TypeScript', color: 'bg-accent-purple-100 text-accent-purple-800' },
      { name: 'Tailwind CSS', color: 'bg-accent-secondary-50 text-accent-secondary-700' },
      { name: 'Framer Motion', color: 'bg-accent-secondary-100 text-accent-secondary-800' }
    ],
    demoUrl: 'https://www.smarine.co.nz',
    status: 'completed'
  },
  {
    id: 'debbie-hunt-celebrant',
    title: 'Debbie Hunt Celebrant',
    category: 'website',
    description: 'Modern, elegant website for a professional marriage celebrant showcasing ceremony services and packages in the Bay of Plenty region',
    problem: 'Need for a professional online presence that reflects the celebrant\'s modern and personalized approach to ceremonies while making it easy for couples to learn about services',
    solution: 'Created an elegant, user-friendly website with clear service descriptions, testimonials, and easy contact options. Focused on showcasing the celebrant\'s unique approach to ceremonies',
    technologies: [
      { name: 'Next.js', color: 'bg-accent-purple-50 text-accent-purple-700' },
      { name: 'TypeScript', color: 'bg-accent-purple-100 text-accent-purple-800' },
      { name: 'Tailwind CSS', color: 'bg-accent-secondary-50 text-accent-secondary-700' }
    ],
    demoUrl: 'https://dhcelebrant.vercel.app',
    status: 'completed'
  },

  // Other Projects
  {
    id: 'exercise-search',
    title: 'Exercise Search App',
    category: 'other',
    description: 'Exercise discovery platform integrating ExerciseDB and YouTube APIs to provide comprehensive exercise information with video demonstrations',
    problem: 'Users need a centralized way to find exercises and watch proper form demonstrations through video content',
    solution: 'Built a React application that combines ExerciseDB for exercise data and YouTube API for related video content, providing a seamless exercise discovery experience',
    technologies: [
      { name: 'React', color: 'bg-accent-purple-50 text-accent-purple-700' },
      { name: 'Material UI', color: 'bg-accent-purple-100 text-accent-purple-800' },
      { name: 'ExerciseDB API', color: 'bg-accent-secondary-50 text-accent-secondary-700' },
      { name: 'YouTube API', color: 'bg-accent-secondary-100 text-accent-secondary-800' },
      { name: 'Firebase', color: 'bg-accent-purple-50 text-accent-purple-700' }
    ],
    demoUrl: 'https://bpcv-exerciseapp.firebaseapp.com',
    status: 'completed'
  },


  // AI Tools
  {
    id: 'ai-email-summariser',
    title: 'AI Email Summariser',
    category: 'ai-tool',
    description: 'Email management tool that uses AI to provide concise summaries and generate contextual response suggestions',
    problem: 'Email overload leads to inefficient communication and time management, especially with lengthy email threads',
    solution: 'Built a web application integrating Gmail API and GPT-4 to automatically summarize emails and suggest appropriate responses based on email context and history',
    technologies: [
      { name: 'Next.js', color: 'bg-accent-purple-50 text-accent-purple-700' },
      { name: 'Gmail API', color: 'bg-accent-purple-100 text-accent-purple-800' },
      { name: 'GPT-4 API', color: 'bg-accent-secondary-50 text-accent-secondary-700' },
      { name: 'NextAuth.js', color: 'bg-accent-secondary-100 text-accent-secondary-800' }
    ],
    status: 'in‑progress'
  },
  {
    id: 'maritime-career-ai',
    title: 'Maritime Career AI Assistant',
    category: 'ai-tool',
    description: 'AI-powered career guidance system for maritime professionals, providing personalized career path recommendations and certification planning',
    problem: 'Maritime professionals struggle to plan their career progression and understand the complex certification requirements for different roles in the industry',
    solution: 'Developing an AI assistant that analyzes user qualifications and experience to suggest optimal career paths, required certifications, and personalized development plans',
    technologies: [
      { name: 'Next.js', color: 'bg-accent-purple-50 text-accent-purple-700' },
      { name: 'TypeScript', color: 'bg-accent-purple-100 text-accent-purple-800' },
      { name: 'GPT-4 API', color: 'bg-accent-secondary-50 text-accent-secondary-700' },
      { name: 'PostgreSQL', color: 'bg-accent-secondary-100 text-accent-secondary-800' }
    ],
    status: 'planned'
  }
];
