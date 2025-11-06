import React, { useState } from 'react';
import PatchworkBackground from '../components/PatchworkBackground';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    // EmailJS configuration
    const serviceID = 'service_sldup2k';
    const templateID = 'template_12djrgr';
    const publicKey = 'STAQHDNYrUhcy6jqe';

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Fernanda',
    }, publicKey)
    .then(() => {
      setSubmitted(true);
      setSending(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again.');
      setSending(false);
    });
  };
  
  return (
    <PatchworkBackground pattern="grid">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-light-primary dark:text-warm-rust mb-3">I'd love to hear from you!</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Form - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 book-card">
              <h2 className="text-2xl font-serif font-bold text-light-primary dark:text-warm-rust mb-6">Email me here:</h2>
              
              {submitted ? (
                <div className="bg-light-moss/30 dark:bg-warm-sage/30 border-2 border-light-moss dark:border-warm-sage p-8 rounded text-center">
                  <p className="text-xl font-semibold text-light-primary dark:text-warm-navy mb-2">
                    Message sent!
                  </p>
                  <p className="text-gray-600 dark:text-warm-cream">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-light-primary dark:text-warm-navy font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-secondary dark:border-warm-brown rounded-sm focus:outline-none focus:border-light-primary dark:focus:border-warm-rust transition-colors dark:text-gray-900"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-light-primary dark:text-warm-navy font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-secondary dark:border-warm-brown rounded-sm focus:outline-none focus:border-light-primary dark:focus:border-warm-rust transition-colors dark:text-gray-900"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-light-primary dark:text-warm-navy font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-light-secondary dark:border-warm-brown rounded-sm focus:outline-none focus:border-light-primary dark:focus:border-warm-rust transition-colors resize-none dark:text-gray-900"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  {error && (
                    <div className="bg-red-100 dark:bg-red-900/30 border-2 border-red-500 p-4 rounded text-center">
                      <p className="text-red-700 dark:text-red-300">{error}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-light-primary dark:bg-warm-rust text-white py-4 rounded-sm font-serif font-bold text-lg hover:bg-light-pine dark:hover:bg-warm-terracotta transition-all duration-300 warm-shadow transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {sending ? 'Sending...' : 'Send'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Sidebar - Contact Info & Social Links */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="collage-card">
                <h3 className="text-xl font-serif font-bold text-light-primary dark:text-warm-rust mb-4">Topics</h3>
                <ul className="space-y-2 text-gray-700 dark:text-warm-rust">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">-</span>
                    <span>Job opportunities (Part-time or Full-time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">-</span>
                    <span>Collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">-</span>
                    <span>Research projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">-</span>
                    <span>Tech discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">-</span>
                    <span>Freelance work</span>
                  </li>
                </ul>
              </div>

              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-light-moss/40 to-light-moss/20 dark:from-warm-sage/40 dark:to-warm-sage/20 border-2 border-light-moss dark:border-warm-sage p-6 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-lg font-bold text-white dark:text-warm-navy">
                    Response Time
                  </h3>
                </div>
                <p className="text-white dark:text-warm-cream">
                  I typically respond within 24-48 hours
                </p>
              </div>

              {/* Flower Decoration */}
              <div className="hidden lg:flex justify-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/flower_decor.png`}
                  alt="Flower decoration"
                  className="w-40 h-auto transform -rotate-90 opacity-80"
                />
              </div>
            </div>
          </div>
          
          {/* Social Buttons - Full Width Below */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            {/* GitHub Button */}
            <a
              href="https://github.com/GZ-Fern"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-light-primary to-light-pine dark:from-warm-rust dark:to-warm-burnt-orange text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white dark:bg-warm-cream opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="relative z-10">GitHub</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/fern-gz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-light-accent to-light-secondary dark:from-warm-terracotta dark:to-warm-maroon text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white dark:bg-warm-cream opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="relative z-10">LinkedIn</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </PatchworkBackground>
  );
};

export default Contact;
