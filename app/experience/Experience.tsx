'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/lib/experience';
import { containerVariants, itemVariants } from '@/lib/animations';

const Experience = () => {
    return (
        <div id="experience" className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors py-20">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 mt-10 max-w-8xl">
            
            {/* --- HEADER --- */}
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
            >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                My <span className="text-sky-500">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                My professional journey and track record in the industry.
            </p>
            </motion.div>

            {/* --- TIMELINE WRAPPER --- */}
            <div className="relative">
            
            {/* GARIS TIMELINE */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-sky-500 via-blue-500 to-slate-200 dark:to-slate-800 opacity-30"></div>

            {/* EXPERIENCE ITEMS */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-12"
            >
                {experiences.map((exp, index) => (
                <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative flex flex-col md:grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'
                    }`}
                >
                    
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-6 h-6 bg-sky-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg relative z-10">
                            <div className="absolute inset-0 bg-sky-500 rounded-full animate-ping opacity-75"></div>
                        </div>
                    </div>

                    <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>

                    <div className={`w-full pl-12 md:pl-0 ${
                        index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'
                    }`}>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {exp.current && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-sky-100 dark:bg-sky-900/30 text-green-600 dark:text-green-400 rounded-full mb-3 border border-sky-200 dark:border-sky-800">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Currently Working
                        </span>
                        )}
                        <h3 className="text-xl text-left font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-500 transition-colors">
                        {exp.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 mb-3 text-sm font-medium">
                        {exp.companyUrl ? (
                            <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sky-600 relative z-10 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer"
                            >
                            @{exp.company}
                            <i className="ri-external-link-line text-xs"></i>
                            </a>
                        ) : (
                            <span className="text-slate-700 dark:text-slate-300">@{exp.company}</span>
                        )}
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span className="text-gray-500">{exp.type}</span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-100 dark:border-slate-700 pb-3">
                        <div className="flex items-center gap-1.5">
                            <i className="ri-calendar-line text-sky-500"></i>
                            <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <i className="ri-map-pin-line text-sky-500"></i>
                            <span>{exp.location}</span>
                        </div>
                        </div>

                        <ul className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300 text-left list-none">
                        {exp.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <i className="ri-check-line text-sky-500 mt-0.5 shrink-0"></i>
                            <span>{desc}</span>
                            </li>
                        ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, idx) => (
                            <span 
                            key={idx} 
                            className="px-2.5 py-1 text-xs font-semibold bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-600"
                            >
                            {skill}
                            </span>
                        ))}
                        </div>

                    </motion.div>
                    </div>
                </motion.div>
                ))}
            </motion.div>
            </div>

            {/* --- CTA SECTION --- */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mt-24 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden"
            >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-500 via-blue-500 to-sky-500"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                Let&apos;s Build Something <span className="text-sky-500">Amazing</span> Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a 
                href="mailto:atzulfikar45@gmail.com" 
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-sky-500/30 hover:-translate-y-1 relative z-10"
            >
                <i className="ri-mail-send-line text-lg"></i> Get In Touch
            </a>
            </motion.div>

        </div>
        </div>
    );
}

export default Experience;