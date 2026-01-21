'use client';

import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion"; 
import Image from 'next/image';
import { 
  containerVariants, 
  itemVariants, 
  imageVariants, 
  floatAnimation, 
  typewriterConfig 
} from '@/lib/animations';

const Dashboard = () => {
  const [text] = useTypewriter(typewriterConfig);

  return (
    <div id="dashboard" className='home min-h-screen flex items-center justify-center transition-colors overflow-hidden'> 
      <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-8xl">
        
        <div className="hero grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          <motion.div 
            className="box text-center lg:text-left lg:col-span-2 order-2 lg:order-1"
            variants={containerVariants} 
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-slate-900 dark:text-white"
            >
              Hello I&apos;m <br />
              <span className="text-sky-500 inline-block mt-2">Ataka Dzulfikar</span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-sky-600 dark:text-sky-400 mb-4 h-10"
            >
              <span>{text}</span>
              <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#0ea5e9"
              />
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-base text-gray-600 dark:text-gray-300 mb-8 text-justify leading-relaxed"
            >
              As a passionate about UI UX Design, Frontend Web Development and Mobile Development, I focus on crafting innovative and impactful solutions for the digital world.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}  
                className="inline-flex items-center text-white bg-sky-500 px-8 py-3 rounded-full font-medium shadow-lg hover:bg-sky-600 hover:shadow-sky-500/30 transition-colors cursor-pointer"
              >
                About Me <i className="ri-eye-line ms-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="box flex justify-center lg:justify-end lg:col-span-3 order-1 lg:order-2 mb-8 lg:mb-0 relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants} 

            whileHover={{ 
              rotate: 0.2,
              scale: 1.02, 
            }}
 
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <motion.div 
              animate={floatAnimation} 
              className="w-full max-w-md aspect-square bg-linear-to-br from-sky-400 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center relative z-10 cursor-pointer overflow-hidden"
            >
                <div className="absolute -inset-1 bg-sky-500/20 blur-xl rounded-2xl -z-5"></div>
                <Image 
                  src="/mapoto.jpeg"  
                  alt="Ataka Dzulfikar"
                  fill 
                  className="object-cover"
                  priority 
                />
                <p className="text-white text-xl font-bold tracking-wider">Photo Placement</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard