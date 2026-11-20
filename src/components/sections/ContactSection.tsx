import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageCard } from '../common/HeritageCard';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  FileDown, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { email, location, socials, resumeUrl } = personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate clean dispatch / mailto link fallback
    setTimeout(() => {
      setStatus('success');
      // Create mailto link as direct action
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-heritage-900/60 border-t border-gold-500/10">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          badgeTamil="தொடர்பு கொள்ள"
          title="START A CONVERSATION"
          titleTamil="இணைந்திருப்போம் • புதிய வாய்ப்புகள்"
          subtitle="Whether you have an internship opportunity, full-stack project, or want to discuss AI integration, I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Direct Links (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <HeritageCard className="p-7">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-gold-400" />
                <span>DIRECT CHANNELS</span>
              </h3>

              <div className="space-y-5">
                {/* Email item */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-lg bg-heritage-950/80 border border-gold-500/20 hover:border-gold-400 hover:bg-heritage-800 transition-all group"
                >
                  <div className="p-2 rounded bg-gold-900/30 border border-gold-500/30 text-gold-400 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-gold-antique">Official Email</p>
                    <p className="text-sm font-sans font-medium text-slate-200 group-hover:text-gold-200 transition-colors">
                      {email}
                    </p>
                  </div>
                </a>

                {/* Location item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-heritage-950/80 border border-gold-500/20">
                  <div className="p-2 rounded bg-gold-900/30 border border-gold-500/30 text-gold-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-gold-antique">Location</p>
                    <p className="text-sm font-sans font-medium text-slate-200">
                      {location}
                    </p>
                  </div>
                </div>

                {/* Resume Download Action */}
                <a
                  href={resumeUrl}
                  download
                  className="flex items-center justify-between p-3.5 rounded-lg bg-gold-900/20 border border-gold-400/50 hover:bg-gold-500/20 hover:border-gold-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileDown size={18} className="text-gold-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs font-serif font-bold text-gold-200 uppercase tracking-wider">
                        Curriculum Vitae
                      </p>
                      <p className="text-[11px] text-slate-400">PDF Document</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gold-300 uppercase">Download</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-gold-500/20">
                <p className="text-xs font-mono text-gold-antique/70 uppercase tracking-widest mb-3">
                  Connect on Platforms
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-300 hover:text-gold-300 hover:border-gold-400 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-300 hover:text-gold-300 hover:border-gold-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="p-3 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-300 hover:text-gold-300 hover:border-gold-400 transition-all"
                    aria-label="Email Direct"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </HeritageCard>
          </div>

          {/* Interactive Contact Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <HeritageCard className="p-7 sm:p-8">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
                <MessageSquare size={18} className="text-gold-400" />
                <span>SEND DIRECT MESSAGE</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                Fill out the details below. This will prepare your message directly for review.
              </p>

              {status === 'success' ? (
                <div className="p-8 text-center rounded-xl bg-heritage-950/90 border border-emerald-500/40">
                  <CheckCircle2 size={36} className="text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-serif text-lg font-bold text-slate-100 mb-1">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans mb-4">
                    Your message draft has been prepared. I will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-heritage-900 border border-gold-500/40 text-gold-300 text-xs font-serif uppercase tracking-wider hover:bg-gold-500/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-2.5 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-400 text-sm font-sans"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-400 text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-2.5 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-400 text-sm font-sans"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, job opportunity, or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-400 text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-heritage-950 font-serif font-bold text-xs sm:text-sm tracking-[0.16em] uppercase hover:shadow-gold-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'PREPARING...' : 'DISPATCH MESSAGE'}</span>
                    <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </HeritageCard>
          </div>

        </div>

      </div>
    </section>
  );
};
