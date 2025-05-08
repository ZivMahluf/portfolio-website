import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await supabase.functions.invoke('send-email', {
        body: formData
      });

      if (response.error) throw new Error(response.error.message);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8">
          <div className="bg-tech-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <p className="text-tech-300 mb-8">
              I'm interested in freelance opportunities and full-time positions. However, if you have other requests or questions, don't hesitate to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-tech-300">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-white hover:text-tech-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-tech-300">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-lg font-medium text-white hover:text-tech-300 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href={personalInfo.socialLinks.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-tech-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Send Me A Message</h3>
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-tech-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-tech-800 border border-tech-700 text-white rounded-md focus:outline-none focus:border-white"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-tech-300 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-tech-800 border border-tech-700 text-white rounded-md focus:outline-none focus:border-white"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-tech-300 mb-2">Your Message</label>
              <textarea 
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-tech-800 border border-tech-700 text-white rounded-md focus:outline-none focus:border-white"
                placeholder="I'd like to talk about..."
                required
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500">
                {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}

            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded text-green-500">
                Message sent successfully!
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;