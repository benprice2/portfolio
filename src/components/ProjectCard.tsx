'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 }
};

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: Technology[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'completed' | 'in‑progress' | 'planned';
  children?: ReactNode;
}

export function ProjectCard({
  title,
  description,
  problem,
  solution,
  technologies,
  githubUrl,
  demoUrl,
  status,
  children
}: ProjectCardProps) {
  const statusColors = {
    'completed': 'dark:bg-emerald-900/20 dark:text-emerald-400 bg-emerald-100/50 text-emerald-700',
    'in‑progress': 'dark:bg-amber-900/20 dark:text-amber-400 bg-amber-100/50 text-amber-700',
    'planned': 'dark:bg-gray-800 dark:text-gray-400 bg-gray-100/50 text-gray-600'
  };

  return (
    <motion.div 
      className={`${demoUrl ? 'rounded-lg' : ''} dark:bg-gray-800 bg-white shadow-lg hover:shadow-xl transition-all focus-within:ring-2 dark:focus-within:ring-accent-purple-400 focus-within:ring-amber-300 overflow-hidden xl:grid xl:grid-cols-[1.2fr,1fr] xl:gap-0`}
      role="article"
      aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
      variants={scaleIn}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {demoUrl && (
        <motion.div
          className="relative w-full aspect-[16/9] xl:aspect-[4/3] overflow-hidden group rounded-t-lg xl:rounded-tr-none xl:rounded-l-lg bg-gray-950/50"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { delay: 0.1 } }
          }}
        >
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={demoUrl}
              className="w-[200%] h-[200%] origin-top-left scale-50"
              style={{
                pointerEvents: 'none',
                transform: 'scale(0.5) translate(-50%, -50%)',
                position: 'absolute',
                left: '50%',
                top: '50%',
                border: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-modals allow-forms allow-downloads"
              loading="lazy"
              title={`${title} website preview`}
            />
          </div>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20"
            aria-label={`Visit ${title} website`}
          />
        </motion.div>
      )}
      <div className="p-6 space-y-4 md:max-w-3xl md:mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
          <motion.h3 
            id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xl font-semibold dark:text-white text-gray-900"
          >
            {title}
          </motion.h3>
          <motion.p 
            className="mt-2 text-sm dark:text-gray-300 text-gray-600"
            variants={{
              initial: { opacity: 0, y: 5 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.1 } }
            }}
          >
            {description}
          </motion.p>
          </div>
          <motion.span 
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[status]}`}
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1, transition: { delay: 0.2 } }
          }}
        >
          {status}
        </motion.span>
        </div>
        {/* Details */}
      <motion.div 
        className="space-y-4"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        }}
      >
        <div>
          <h4 className="text-sm font-medium dark:text-white text-gray-900">Problem</h4>
          <p className="mt-1 text-sm dark:text-gray-300 text-gray-600">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium dark:text-white text-gray-900">Solution</h4>
          <p className="mt-1 text-sm dark:text-gray-300 text-gray-600">{solution}</p>
        </div>
      </motion.div>

        {/* Technologies */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        }}
      >
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech.name}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tech.color}`}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { 
                  opacity: 1, 
                  scale: 1, 
                  transition: { delay: 0.5 + (index * 0.1) } 
                }
              }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

        {(githubUrl || demoUrl) && (
        <motion.div 
          className="flex items-center space-x-4"
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { delay: 0.6 } }
          }}
        >
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium dark:text-accent-purple-400 dark:hover:text-accent-purple-300 text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 dark:focus:ring-accent-purple-500 focus:ring-blue-300 focus:ring-offset-2 rounded px-2 py-1"
              aria-label={`View source code for ${title}`}
            >
              View Source
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium dark:text-accent-purple-400 dark:hover:text-accent-purple-300 text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 dark:focus:ring-accent-purple-500 focus:ring-blue-300 focus:ring-offset-2 rounded px-2 py-1"
              aria-label={`View live demo for ${title}`}
            >
              Live Demo
            </a>
          )}
        </motion.div>
      )}

        {children}
      </div>
    </motion.div>
  );
}
