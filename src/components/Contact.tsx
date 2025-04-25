'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setFormError('');
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1500);
  };

  const inputVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <div 
      ref={contactRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair mb-6">Let&apos;s Work Together</h2>
          <p className="text-lg text-neutral-600 font-inter">
            Have a project in mind or just want to say hello? I&apos;m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {formSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-green-50 text-green-800 rounded-sm text-center"
            >
              Thank you for your message! I&apos;ll get back to you soon.
            </motion.div>
          ) : (
            <>
              {formError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-800 rounded-sm"
                >
                  {formError}
                </motion.div>
              )}

              <motion.div 
                variants={inputVariants}
                custom={0}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2 font-inter">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-neutral-300 focus:border-neutral-900 bg-transparent outline-none transition-colors"
                  required
                />
              </motion.div>

              <motion.div 
                variants={inputVariants}
                custom={1}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2 font-inter">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-neutral-300 focus:border-neutral-900 bg-transparent outline-none transition-colors"
                  required
                />
              </motion.div>

              <motion.div 
                variants={inputVariants}
                custom={2}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2 font-inter">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-b border-neutral-300 focus:border-neutral-900 bg-transparent outline-none transition-colors resize-none"
                  required
                />
              </motion.div>

              <motion.div 
                variants={inputVariants}
                custom={3}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="text-right"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-3 border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-inter"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </motion.button>
              </motion.div>
            </>
          )}
        </motion.form>

        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 border-t border-neutral-200 pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-medium font-playfair mb-2">Email</h3>
              <p className="text-neutral-600 font-inter">kprijun@gmail.com</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium font-playfair mb-2">Location</h3>
              <p className="text-neutral-600 font-inter">Stockholm, Sweden</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium font-playfair mb-2">Social</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 border-none">
                  <span className="sr-only">Behance</span>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 4H7a3 3 0 00-3 3v10a3 3 0 003 3h7a3 3 0 003-3v-5h-2v5a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h3V4z" />
                    <path d="M16 2v6h6v2h-6v6h6v2h-8V2h2z" />
                  </svg>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 border-none">
                  <span className="sr-only">Dribbble</span>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 border-none">
                  <span className="sr-only">LinkedIn</span>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;