'use client';

import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/utils/animations';

interface Skill {
  name: string;
  projects?: string[];
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <motion.div 
      className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow transition-colors duration-200 hover:shadow-md hover:shadow-accent-purple-100/20 dark:hover:shadow-accent-purple-900/10"
      role="region"
      aria-labelledby={`skill-group-${title.toLowerCase().replace(/\s+/g, '-')}`}
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      whileHover={{ y: -2 }}
    >
      <motion.h3 
        id={`skill-group-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-lg font-semibold text-gray-800 dark:text-white"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { delay: 0.1 } }
        }}
      >
        {title}
      </motion.h3>
      <motion.ul 
        className="mt-4 space-y-3" 
        role="list"
        aria-label={`${title} skills`}
        variants={stagger}
      >
        {skills.map((skill, index) => (
          <motion.li 
            key={skill.name} 
            className="flex flex-col"
            role="listitem"
            variants={{
              initial: { opacity: 0, x: -10 },
              animate: { 
                opacity: 1, 
                x: 0, 
                transition: { delay: 0.2 + (index * 0.1) } 
              }
            }}
          >
            <span className="text-sm font-medium text-accent-purple-600 dark:text-accent-purple-400">{skill.name}</span>
            {skill.projects && skill.projects.length > 0 && (
              <motion.span 
                className="mt-1 text-xs text-accent-purple-600 dark:text-accent-purple-400"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { delay: 0.1 } }
                }}
              >
                Used in: {skill.projects.join(', ')}
              </motion.span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
