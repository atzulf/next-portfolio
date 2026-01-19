'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import { containerVariants, itemVariants } from '@/lib/animations';
import { skills, stats } from '@/lib/about';

const About = () => {

  return (
    <div id="about" className="min-h-screen flex flex-col justify-center bg-slate-50 dark:bg-slate-900 transition-colors py-20">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 mt-10 max-w-8xl">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-sky-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">

          <motion.div 
            className="lg:col-span-3 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">
              I&apos;m a Developer with a passion for <span className="text-sky-500">Design</span>.
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed mb-6">
              Hello! My Name is <strong className="font-bold text-slate-900 dark:text-white">Ataka Dzulfikar</strong>. I&apos;m an Information Technology Student at Universitas Negeri Yogyakarta. While I have a background in Mobile Development, my current passion lies in <strong className="font-bold text-sky-500">Graphic & UI/UX Design</strong> as well as <strong className="font-bold text-sky-500">Web Development</strong>. I specialize in building modern, responsive web applications using <strong className="font-bold text-sky-500">React</strong> and <strong className="font-bold text-sky-500">Next.js</strong>.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed mb-8">
              I enjoy solving complex problems through creative solutions. Whether it&apos;s designing user-friendly interfaces or developing robust web platforms, my goal is to deliver exceptional results that exceed expectations.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border-b-4 border-sky-500 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-2xl font-bold text-sky-500">{stat.value}</h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-sky-500/30"
              >
                Download CV <i className="ri-download-line"></i>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >

            <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-300 border-4 border-white dark:border-slate-800">
                <Image 
                  fill
                  src="/mapotoo.jpeg" 
                  alt="About Ataka"
                  className="object-cover"
                />
            </div>
          </motion.div>

        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700 text-center w-full max-w-5xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              Tech Stack & Skills
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              These are the technologies I use to build scalable and efficient applications.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-sky-400 rounded-lg text-sm md:text-base font-medium border border-slate-200 dark:border-slate-600 hover:border-sky-500 hover:text-sky-500 transition-colors cursor-default shadow-sm"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>

            {/* <div className="mt-10 pt-8 border-t border-gray-200 dark:border-slate-700 flex justify-center">
              <div className="w-full max-w-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Currently working on:</p>
                <div className="flex items-center gap-4 p-4 bg-sky-50 dark:bg-slate-900/50 rounded-xl border border-sky-100 dark:border-slate-700 text-left">
                  <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white shrink-0">
                    <i className="ri-code-box-line text-2xl"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-base">Portfolio Website</h5>
                    <p className="text-sm text-gray-500">NextJS, Tailwind, Framer Motion</p>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default About;