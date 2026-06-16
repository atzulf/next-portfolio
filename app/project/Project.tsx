'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects, type Project as ProjectType } from '@/lib/project';
import { projectContainerVariants, projectCardVariants, projectHeaderVariants, buttonVariants } from '@/lib/animations';

const CardImageCarousel = ({ project }: { project: ProjectType }) => {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src={images[index]}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </motion.div>
    </AnimatePresence>
  );
};

const ModalImageCarousel = ({ project }: { project: ProjectType }) => {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [index, setIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length <= 1) {
    return (
      <Image 
        src={images[0]} 
        alt={project.title} 
        fill 
        className="object-cover hover:scale-105 transition-transform duration-700" 
      />
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image 
            src={images[index]} 
            alt={`${project.title} - image ${index + 1}`} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-700" 
          />
        </motion.div>
      </AnimatePresence>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 rounded-full flex items-center justify-center transition-all z-10 shadow-xl border border-gray-100 dark:border-slate-600 backdrop-blur-sm group">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 rounded-full flex items-center justify-center transition-all z-10 shadow-xl border border-gray-100 dark:border-slate-600 backdrop-blur-sm group">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg">
        {images.map((_, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>
    </>
  );
};

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Define main categories
  const categories = ['All', 'Website Dev','Mobile Dev', 'UI UX'];

  // Define category mappings
  const categoryMapping: Record<string, string[]> = {
    'Website Dev': ['TypeScript', 'NextJS', 'React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'Framer Motion', 'Python', 'Streamlit', 'Web App', 'PHP', 'Laravel', 'Filament', 'RAG', 'AI', 'API', 'LLM', 'Langchain', 'SvelteKit', 'AngularJS', 'Fullstack App', 'FastAPI'],
    'Mobile Dev': ['Kotlin', 'Firebase', 'MVVM', 'Retrofit', 'Google Maps', 'Paging 3'],
    'UI UX': ['Figma', 'UI Design', 'UX Design']
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => categoryMapping[selectedCategory]?.includes(tag))
      );

  return (
    <div id="project" className="min-h-screen transition-colors py-20">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 mt-10 max-w-8xl">
        
        {/* Header */}
        <motion.div 
          variants={projectHeaderVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-sky-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            variants={projectContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="card bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-700 h-full">
                
                {/* Image Container */}
                <figure className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-sky-500 via-blue-500 to-indigo-600">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <i className="ri-code-s-slash-line text-white/20 text-8xl"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Carousel */}
                  <CardImageCarousel project={project} />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-circle btn-ghost btn-sm bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="ri-github-line text-lg"></i>
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold bg-sky-700 text-white rounded-full shadow-lg border-2 border-sky-900">
                        <i className="ri-star-fill"></i>
                        Featured
                      </span>
                    </div>
                  )}
                </figure>

                {/* Card Body */}
                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mt-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-xs font-medium bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="divider my-3"></div>

                  {/* Action Links */}
                  <div className="flex items-center justify-start gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveProject(project); }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <i className="ri-information-line"></i>
                      Details
                    </button>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-500 hover:text-white bg-white dark:bg-slate-800 hover:bg-sky-500 dark:hover:bg-sky-500 border-2 border-sky-500 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="ri-github-line"></i>
                      Code
                    </a>
                  </div>  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <i className="ri-folder-open-line text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category
            </p>
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div 
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/atzulf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-lg btn-outline border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-sky-500 gap-2 rounded-full px-8"
          >
            <i className="ri-github-line text-xl"></i>
            View More on GitHub
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-24 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-500 via-blue-500 to-sky-500"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
            Interested in <span className="text-sky-500">Working</span> Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-sky-500/30 hover:-translate-y-1 relative z-10"
          >
            <i className="ri-mail-send-line text-lg"></i> Get In Touch
          </a>
        </motion.div>

        {/* Modal Popup for Details */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 scrollbar-hide"
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-700">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{activeProject.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activeProject.tags.map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 text-xs font-medium bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="w-10 h-10 bg-rose-500 text-white hover:bg-rose-600 rounded-full flex items-center justify-center transition-all flex-shrink-0 ml-4 shadow-md hover:shadow-lg"
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 space-y-8">
                  
                  {/* Overview Section */}
                  <div className="flex flex-col gap-8">
                    <div className="relative w-full aspect-video md:aspect-[16/7] rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-700 bg-sky-50 dark:bg-slate-900 flex items-center justify-center shadow-lg">
                      <ModalImageCarousel project={activeProject} />
                    </div>
                    <div className="space-y-6">
                      {/* Overview is always shown */}
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <i className="ri-information-line text-sky-500"></i> Overview
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{activeProject.description}</p>
                      </div>

                      {/* Problem and Solution shown if they exist */}
                      {activeProject.details?.problem && (
                        <>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <i className="ri-error-warning-line text-amber-500"></i> The Problem
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{activeProject.details.problem}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <i className="ri-lightbulb-flash-line text-sky-500"></i> The Solution
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{activeProject.details.solution}</p>
                          </div>
                        </>
                      )}
                      
                      {/* Action Button */}
                      <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                        <a 
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-sky-500/30"
                        >
                          <i className="ri-external-link-line"></i> View Source / Demo
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* FAQ / Features Section */}
                  {(activeProject.details?.faq || activeProject.details?.features) && (
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                        Project Details & FAQ
                      </h4>
                      
                      <div className="space-y-4 max-w-3xl mx-auto">
                        {activeProject.details?.faq?.map((faqItem, idx) => (
                          <div 
                            key={idx} 
                            className="border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800/50"
                          >
                            <button
                              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                              className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
                            >
                              <span className="font-medium text-slate-900 dark:text-white">{faqItem.question}</span>
                              <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-sky-500' : 'text-gray-400'}`}></i>
                            </button>
                            <AnimatePresence>
                              {activeFaq === idx && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="p-5 pt-0 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-slate-700">
                                    {faqItem.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}

                        {activeProject.details?.features && activeProject.details.faq?.length === 0 && (
                          <div className="p-6 bg-sky-50 dark:bg-sky-900/10 rounded-2xl border border-sky-100 dark:border-sky-900/30">
                            <h5 className="font-bold text-sky-900 dark:text-sky-100 mb-4 flex items-center gap-2">
                              <i className="ri-star-line text-sky-500"></i> Key Highlights
                            </h5>
                            <ul className="space-y-3">
                              {activeProject.details.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                  <i className="ri-checkbox-circle-fill text-sky-500 mt-0.5"></i>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default Project;