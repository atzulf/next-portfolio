'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/lib/project';
import { projectContainerVariants, projectCardVariants, projectHeaderVariants, buttonVariants } from '@/lib/animations';

const Project = () => {

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
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-circle btn-primary btn-sm"
                    >
                      <i className="ri-external-link-line text-lg"></i>
                    </motion.a>
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
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors"
                    >
                      Live Demo
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
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
    </div>
  );
}

export default Project;
