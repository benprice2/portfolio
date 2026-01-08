'use client';

import { AuroraBackground } from '@/components/AuroraBackground';
import { ProjectCard } from '@/components/ProjectCard';
import { StatusIndicator } from '@/components/StatusIndicator';
import { projects } from '@/data/projects';
import { TechnologyScroll } from '@/components/TechnologyScroll';

export default function Home() {
  return (
    <>
    <div className="min-h-screen relative">
      <div className="container mx-auto px-8 sm:px-10 lg:px-12 py-8 relative">
        {/* Overview Section */}
        <header id="overview" className="mb-16 pt-12 relative">
          <div className="max-w-3xl">
            <h1 className="heading-xl gradient-text mb-6">Ben Price</h1>
            <p className="text-2xl font-clash tracking-tight dark:text-accent-purple-300 text-amber-300 mb-8">AI-Focused Web Developer & Solutions Engineer</p>
            
            <p className="text-lg font-satoshi leading-relaxed dark:text-gray-300 text-white/90 mb-12 max-w-2xl">
              Building AI solutions that solve real world problems whilst developing my skills as a developer by building websites and SaaS applications that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="/BenCV.pdf" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 dark:border-white/20 border-amber-300/30 rounded-lg text-base font-medium dark:text-white text-amber-100 dark:bg-white/5 bg-amber-400/10 dark:hover:bg-white/10 hover:bg-amber-400/20 focus:outline-none focus:ring-2 dark:focus:ring-white/30 focus:ring-amber-300/30 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <a 
                href="https://github.com/benprice2" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 dark:border-white/10 border-amber-300/20 rounded-lg text-base font-medium dark:text-white/80 text-amber-100/90 dark:bg-white/5 bg-amber-400/5 dark:hover:bg-white/10 hover:bg-amber-400/10 focus:outline-none focus:ring-2 dark:focus:ring-white/30 focus:ring-amber-300/20 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center dark:text-white/70 text-amber-100/90">
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Auckland, New Zealand
              </div>
              <div className="flex items-center dark:text-purple-300 text-amber-300">
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Available for Full-Time Positions & Freelance Work
              </div>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" className="mb-12 space-y-12">
          <h2 className="text-3xl font-clash font-bold tracking-tight text-white mb-8">Projects</h2>
          
          {/* SaaS Applications */}
          <div>
            <h3 className="text-2xl font-clash tracking-tight font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <path d="m19 9-5 5-4-4-3 3"/>
              </svg>
              SaaS Applications
            </h3>
            <div className="space-y-6">
              {projects.filter(p => p.category === 'saas').map((project) => (
                <div key={project.id} className="w-full mx-auto">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Websites */}
          <div>
            <h3 className="text-2xl font-clash tracking-tight font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
                <path d="M7 7h.01"/>
              </svg>
              Websites
            </h3>
            <div className="space-y-6">
              {projects.filter(p => p.category === 'website').map((project) => (
                <div key={project.id} className="w-full mx-auto">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-2xl font-clash tracking-tight font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"/>
                <path d="M2 12h20"/>
                <path d="m12 2 4 4"/>
                <path d="m12 2-4 4"/>
                <path d="m12 22 4-4"/>
                <path d="m12 22-4-4"/>
                <path d="m2 12 4 4"/>
                <path d="m2 12 4-4"/>
                <path d="m22 12-4 4"/>
                <path d="m22 12-4-4"/>
              </svg>
              AI Tools
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {projects.filter(p => p.category === 'ai-tool').map((project) => (
                <div key={project.id} className="w-full h-full">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-clash tracking-tight font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                <path d="M5 3v4"/>
                <path d="M19 17v4"/>
                <path d="M3 5h4"/>
                <path d="M17 19h4"/>
              </svg>
              Other Projects
            </h3>
            <div className="space-y-6">
              {projects.filter(p => p.category === 'other').map((project) => (
                <div key={project.id} className="w-full mx-auto">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Scroll */}
        <section className="mb-8">
          <h2 className="text-3xl font-clash font-bold tracking-tight text-white flex items-center gap-2">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 6.1H3"/>
              <path d="M21 12.1H3"/>
              <path d="M15.1 18H3"/>
            </svg>
            Technologies
          </h2>
          <div className="relative p-4 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden max-w-[100vw]">
            <TechnologyScroll />
          </div>
        </section>

        {/* Developer's Memo Section */}
        <section id="process" className="mb-12">
          <h2 className="text-3xl font-clash tracking-tight font-bold dark:text-white text-amber-100 mb-6 flex items-center gap-3">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Developer's Memo
          </h2>
          <div className="backdrop-blur-sm dark:bg-white/5 bg-amber-400/5 rounded-lg dark:border-white/10 border-amber-300/20 p-8 shadow-xl">
            <div className="prose prose-invert max-w-none space-y-6">
              <div>
                <h3 className="text-xl font-clash tracking-tight font-semibold dark:text-white text-amber-100 mb-3">Vision</h3>
                <p className="font-satoshi leading-relaxed dark:text-white/80 text-amber-100/90">
                  I envision a future where AI enhances human creativity rather than replacing it. My goal is to bridge the gap between cutting-edge AI technology and practical, user-focused applications that solve real-world problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-clash tracking-tight font-semibold dark:text-white text-amber-100 mb-3">Core Values</h3>
                <ul className="mt-4 space-y-2 dark:text-white/80 text-amber-100/90 list-none">
                  <li className="flex items-start gap-2">
                    <span className="dark:text-accent-purple-400 text-yellow-500 mt-1">◆</span>
                    <span><strong className="dark:text-accent-purple-400 text-yellow-500">Human-Centered Design:</strong> Creating intuitive interfaces that make complex AI capabilities accessible to everyone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="dark:text-accent-purple-400 text-yellow-500 mt-1">◆</span>
                    <span><strong className="dark:text-accent-purple-400 text-yellow-500">Ethical AI Development:</strong> Prioritizing transparency, fairness, and user privacy in all AI implementations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="dark:text-accent-purple-400 text-yellow-500 mt-1">◆</span>
                    <span><strong className="dark:text-accent-purple-400 text-yellow-500">Continuous Learning:</strong> Staying at the forefront of AI and web technologies through constant experimentation and learning</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-clash tracking-tight font-semibold dark:text-white text-amber-100 mb-3">Future Focus</h3>
                <p className="font-satoshi leading-relaxed dark:text-white/80 text-amber-100/90">
                  I'm particularly excited about developing AI-powered tools that augment human capabilities in creative and knowledge work. My current focus is on building applications that make AI more accessible and practical for everyday use, while maintaining high standards of performance and user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
