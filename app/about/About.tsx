'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: "React / Next.js", level: "Advanced" },
    { name: "Laravel / PHP", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "UI/UX Design (Figma)", level: "Advanced" },
    { name: "SQL / Database", level: "Intermediate" },
    { name: "Git / GitHub", level: "Intermediate" },
    { name: "Framer Motion", level: "Beginner" },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 50 }
    }
  };

  return (
    <div id="about" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors py-20">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-7xl">

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-sky-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">
              I&apos;m a Developer with a passion for <span className="text-sky-500">Design</span>.
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed mb-6">
              Hello! My name is Ataka Dzulfikar. I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed mb-8">
              Fast-forward to today, I&apos;ve had the privilege of working on various web applications using modern technologies like <b>Laravel</b> and <b>React</b>. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border-b-4 border-sky-500 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-2xl font-bold text-sky-500">{stat.value}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a 
                href="/cv.pdf" // Ganti dengan link CV kamu
                download
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-sky-500/30"
              >
                Download CV <i className="ri-download-line"></i>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Tech Stack & Skills
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-sky-400 rounded-lg text-sm font-medium border border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Currently working on:</p>
                <div className="flex items-center gap-4 p-4 bg-sky-50 dark:bg-slate-900/50 rounded-xl border border-sky-100 dark:border-slate-700">
                    <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                        <i className="ri-code-box-line text-xl"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-800 dark:text-white text-sm">Portfolio Website</h5>
                        <p className="text-xs text-gray-500">NextJS, Tailwind, Framer Motion</p>
                    </div>
                </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default About;