'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/lib/project';
import { projectContainerVariants, projectCardVariants, headerVariants, buttonVariants } from '@/lib/animations';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    const modal = document.getElementById('project_modal') as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('project_modal') as HTMLDialogElement;
    modal?.close();
    setSelectedProject(null);
  };

  return (
    <div id="project" className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors py-20">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 mt-10 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          variants={projectHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-sky-500">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my latest work showcasing creative solutions and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group"
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
                  
                  {/* Uncomment when you have images */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  /> */}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button
                      onClick={() => openModal(project)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-circle btn-primary btn-sm"
                    >
                      <i className="ri-eye-line text-lg"></i>
                    </motion.button>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-circle btn-ghost btn-sm bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    >
                      <i className="ri-github-line text-lg"></i>
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="badge badge-warning gap-1 shadow-lg">
                        <i className="ri-star-fill text-xs"></i>
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
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-sky-500 transition-colors"
                    >
                      <i className="ri-github-line"></i>
                      View Code
                    </a>
                    <button 
                      onClick={() => openModal(project)}
                      className="flex items-center gap-2 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      View Details
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
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

      </div>

      {/* Modal */}
      <dialog id="project_modal" className="modal">
        <div className="modal-box max-w-4xl bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-0 overflow-hidden">
          {selectedProject && (
            <>
              {/* Modal Header with Gradient */}
              <div className="relative bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-6">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost text-white hover:bg-white/20"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.featured && (
                      <span className="badge badge-warning gap-1 shadow-lg">
                        <i className="ri-star-fill text-xs"></i>
                        Featured Project
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                {/* Project Image */}
                <div className="relative h-72 rounded-xl overflow-hidden mb-8 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 right-8 w-40 h-40 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <i className="ri-code-s-slash-line text-white/30 text-9xl"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-sky-500 rounded-full"></div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Project Description
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base pl-4">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-sky-500 rounded-full"></div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Technologies Used
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3 pl-4">
                    {selectedProject.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-600 dark:text-sky-400 rounded-lg border-2 border-sky-200 dark:border-sky-800 hover:border-sky-400 dark:hover:border-sky-600 transition-colors shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-200 dark:border-slate-700">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-0 gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <i className="ri-github-line text-xl"></i>
                    View Source Code
                  </a>
                  <button 
                    onClick={closeModal}
                    className="btn btn-lg btn-outline border-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                  >
                    <i className="ri-close-line text-lg"></i>
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop bg-black/70">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Project;
