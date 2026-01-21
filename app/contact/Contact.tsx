'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';
import { contactInfo, socialLinks } from '@/lib/contact';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div id="contact" className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors py-20">
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
                        Get In <span className="text-sky-500">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-linear-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
                    {/* --- LEFT: CONTACT INFO --- */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Fill out the form or reach out directly through any of the channels below.
                            </p>
                        </motion.div>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    variants={itemVariants}
                                    href={info.link}
                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all hover:shadow-lg group"
                                >
                                    <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                                        <Image src={info.icon} alt={info.title} width={48} height={48} className="w-12 h-12" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.title}</p>
                                        <p className="font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="pt-6">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect with me:</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                                    >
                                        <Image src={social.icon} alt="social" width={48} height={48} className="w-10 h-10" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Decorative Element */}
                        <motion.div
                            variants={itemVariants}
                            className="hidden lg:block relative mt-10"
                        >
                            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Available for freelance work</span>
                                </div>
                                <p className="text-slate-900 dark:text-white font-medium">
                                    Response time: Usually within 24 hours
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* --- RIGHT: CONTACT FORM --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                                    placeholder="Project Discussion"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none text-slate-900 dark:text-white"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'sending' && (
                                    <i className="ri-loader-4-line animate-spin"></i>
                                )}
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                                {status === 'success' && <i className="ri-check-line"></i>}
                            </button>

                            {/* Success Message */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg flex items-center gap-2"
                                >
                                    <i className="ri-check-double-line text-xl"></i>
                                    <span>Thank you! I&apos;ll get back to you soon.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default Contact;