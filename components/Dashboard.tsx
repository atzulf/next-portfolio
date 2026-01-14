'use client';

import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Dashboard = () => {
  const [text] = useTypewriter({
    words: [
      "UI UX Design Enthusiast",
      "Android App Development",
      "Front End Development",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });
  
  return (
    // UBAHAN 1: Tambahkan min-h-screen, flex, dan items-center pada wrapper utama
    // Hapus py-12 jika ingin benar-benar full screen tanpa scroll berlebih
    <div className='home min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 transition-colors'> 
      <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-7-xl">
        
        {/* UBAHAN 2: Hapus pt-32 agar Flexbox yang mengatur posisi tengahnya */}
        <div className="hero grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Kolom Teks */}
          <div className="box text-center lg:text-left lg:col-span-2 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-slate-900 dark:text-white">
              Hello I&apos;m <br />
              <span className="text-sky-500 inline-block mt-2">Ataka Dzulfikar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-600 dark:text-sky-400 mb-4 h-10">
              <span>{text}</span>
              <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#0ea5e9"
              />
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-8 text-justify leading-relaxed">
              As a passionate about UI UX Design and Mobile Development, I focus on crafting innovative and impactful solutions for the digital world.
            </p>
            <a
              href="#about"
              className="inline-flex items-center text-white bg-sky-500 px-8 py-3 rounded-full font-medium shadow-lg hover:bg-sky-600 hover:shadow-sky-500/30 transition-all transform hover:-translate-y-1"
            >
              About Me <i className="ri-eye-line ms-2"></i>
            </a>
          </div>

          {/* Kolom Gambar */}
          <div className="box flex justify-center lg:justify-end lg:col-span-3 order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Perbaikan syntax gradient: bg-gradient-to-br */}
            <div className="w-full max-w-sm aspect-3/4 bg-linear-to-br from-sky-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-all duration-300">
              <p className="text-white text-xl font-bold tracking-wider">Photo Placement</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard