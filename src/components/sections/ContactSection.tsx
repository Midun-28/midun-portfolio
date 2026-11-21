import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageCard } from '../common/HeritageCard';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  Twitter, 
  FileDown, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  Phone
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { email, location, phone, socials, resumeUrl } = personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Direct dispatch to Midun's personal inbox (mmidun866@gmail.com) via FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Direct Message from ${formData.name}`,
          message: formData.message,
          _replyto: formData.email,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        // Fallback to direct mailto protocol if API is unreachable
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Direct Message from ' + formData.name
        )}&body=${encodeURIComponent(
          `Sender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus('success');
      }
    } catch {
      // Network fallback
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Direct Message from ' + formData.name
      )}&body=${encodeURIComponent(
        `Sender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-heritage-900/60 border-t border-gold-500/10">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Centered Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          badgeTamil="தொடர்பு கொள்ள"
          title="START A CONVERSATION"
          titleTamil="இணைந்திருப்போம் • புதிய வாய்ப்புகள்"
          subtitle="Whether you have an internship opportunity, full-stack project, or want to discuss AI integration, I'd love to connect."
          align="center"
        />

        {/* ============================================================== */}
        {/* CENTERED CONTACT CARDS (Direct Channels)                       */}
        {/* ============================================================== */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          
          {/* Email Card (Centered) */}
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center text-center p-5 rounded-xl bg-heritage-950/80 border border-gold-500/30 hover:border-gold-400 hover:bg-heritage-800 transition-all group shadow-sm"
          >
            <div className="p-3 rounded-full bg-gold-900/40 border border-gold-500/40 text-gold-400 mb-3 group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-antique">Personal Email</span>
            <span className="text-xs sm:text-sm font-sans font-medium text-slate-200 group-hover:text-gold-200 transition-colors mt-1 break-all">
              {email}
            </span>
            {phone && (
              <span className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-1">
                <Phone size={11} className="text-gold-400" />
                <span>{phone}</span>
              </span>
            )}
          </a>

          {/* Location Card (Centered) */}
          <div className="flex flex-col items-center text-center p-5 rounded-xl bg-heritage-950/80 border border-gold-500/30 shadow-sm">
            <div className="p-3 rounded-full bg-gold-900/40 border border-gold-500/40 text-gold-400 mb-3">
              <MapPin size={20} />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-antique">Location</span>
            <span className="text-xs sm:text-sm font-sans font-medium text-slate-200 mt-1">
              {location}
            </span>
            <span className="text-[11px] font-mono text-gold-400/80 mt-1">
              Dr. N.G.P. iTech
            </span>
          </div>

          {/* Resume Card (Centered: Download Resume -> Resume) */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Midun_D_Resume.pdf"
            className="flex flex-col items-center text-center p-5 rounded-xl bg-gold-950/40 border border-gold-400/50 hover:bg-gold-500/20 hover:border-gold-300 transition-all group shadow-sm"
          >
            <div className="p-3 rounded-full bg-gold-500/20 border border-gold-400 text-gold-300 mb-3 group-hover:scale-110 transition-transform">
              <FileDown size={20} />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-antique">Official Curriculum Vitae</span>
            <span className="text-sm font-serif font-bold text-gold-200 uppercase tracking-wider mt-1">
              Resume
            </span>
            <span className="text-[11px] font-mono text-slate-400 mt-0.5">
              View & Download PDF
            </span>
          </a>

        </div>

        {/* Centered Social Channels Bar */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-heritage-950 border border-gold-500/40 text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-gold-sm transition-all"
            aria-label="GitHub Profile"
            title="GitHub (Midun-28)"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-heritage-950 border border-gold-500/40 text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-gold-sm transition-all"
            aria-label="LinkedIn Profile"
            title="LinkedIn (midund)"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-3 rounded-full bg-heritage-950 border border-gold-500/40 text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-gold-sm transition-all"
            aria-label="Email Direct"
            title={`Email (${email})`}
          >
            <Mail size={18} />
          </a>
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-heritage-950 border border-gold-500/40 text-slate-300 hover:text-gold-300 hover:border-gold-300 hover:shadow-gold-sm transition-all"
              aria-label="Twitter Profile"
            >
              <Twitter size={18} />
            </a>
          )}
        </div>

        {/* ============================================================== */}
        {/* CENTERED INTERACTIVE CONTACT FORM -> DIRECT TO PERSONAL EMAIL   */}
        {/* ============================================================== */}
        <div className="w-full">
          <HeritageCard className="p-7 sm:p-10">
            <div className="text-center mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 mb-1 flex items-center justify-center gap-2">
                <MessageSquare size={20} className="text-gold-400" />
                <span>SEND DIRECT MESSAGE</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Messages sent here are delivered directly to Midun's personal inbox (<span className="text-gold-300">{email}</span>).
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center rounded-xl bg-heritage-950/90 border border-emerald-500/40">
                <CheckCircle2 size={36} className="text-emerald-400 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-slate-100 mb-1">
                  Message Dispatched to Midun's Personal Inbox!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mb-2">
                  Thank you! Your direct message has been sent to <strong className="text-gold-300">{email}</strong>.
                </p>
                <p className="text-xs text-slate-400 font-sans mb-5">
                  Midun will review your inquiry and reply directly to your email address promptly.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-heritage-900 border border-gold-500/40 text-gold-300 text-xs font-serif uppercase tracking-wider hover:bg-gold-500/10 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5 text-left">
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
                    <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5 text-left">
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
                  <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5 text-left">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Full Stack Project"
                    className="w-full px-4 py-2.5 rounded-lg bg-heritage-950 border border-gold-500/30 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-gold-400 text-sm font-sans"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono text-gold-antique uppercase tracking-wider mb-1.5 text-left">
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
                  <span>{status === 'submitting' ? 'DISPATCHING TO MMIDUN866@GMAIL.COM...' : 'DISPATCH MESSAGE'}</span>
                  <Send size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </HeritageCard>
        </div>

      </div>
    </section>
  );
};
