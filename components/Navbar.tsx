'use client'
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import ToggleTheme from '@/components/ToggleTheme';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollActive = scroll 
        ? "py-4 bg-white shadow-md dark:bg-slate-900 dark:shadow-slate-700" 
        : "py-6 bg-transparent shadow-sm dark:shadow-slate-700";

    return (
        <div className={`navbar fixed top-0 left-0 right-0 w-full transition-all z-50 ${scrollActive}`}>
            <div className="container mx-auto px-8 md:px-8 lg:px-24 flex items-center justify-between">
                <div className="logo">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Zoulv</h1>
                </div>

                <div className="hamburger md:hidden cursor-pointer text-slate-900 dark:text-white" onClick={handleClick}>
                    {click ? <FaTimes size={20} /> : <FaBars size={20} />}
                </div>

                <ul className={click 
                    ? "flex flex-col items-center gap-6 fixed left-0 top-16 w-full py-8 z-50 font-bold transition-all shadow-lg bg-white dark:bg-slate-900 dark:text-white shadow-slate-100 dark:shadow-blue-800" 
                    : "hidden md:flex md:gap-12 lg:gap-16 text-slate-900 dark:text-white"
                }>
                    <li>
                        <a href="#home" className="font-medium opacity-75 hover:opacity-100 hover:text-sky-500 transition-colors">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="font-medium opacity-75 hover:opacity-100 hover:text-sky-500 transition-colors">About Me</a>
                    </li>
                    <li>
                        <a href="#project" className="font-medium opacity-75 hover:opacity-100 hover:text-sky-500 transition-colors">Project</a>
                    </li>
                    <li>
                        <a href="#contact" className="font-medium opacity-75 hover:opacity-100 hover:text-sky-500 transition-colors">Contact</a>
                    </li>
                </ul>

                <div className="social hidden md:flex items-center gap-4">
                    <ToggleTheme />
                    <a href="#contact" className="bg-sky-500 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-600 transition-all">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar