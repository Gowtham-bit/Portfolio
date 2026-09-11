import React, { useState } from 'react';
import { personalInfo } from '../../data/resumeData';
import { Mail, MapPin, Phone, CheckCircle, Send, Code2, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900 dark:bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
          {/* Background glow */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Left Info Column */}
            <div>
              <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
                Contact
              </p>
              <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
                Let's connect &amp; collaborate.
              </h2>
              <p className="reveal d2 text-zinc-400 leading-relaxed mb-10">
                Interested in full-stack development, software engineering opportunities, or technical collaboration? Reach out directly or leave a message below.
              </p>

              <div className="reveal d3 flex flex-col gap-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium hover:text-accent transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-medium hover:text-accent transition-colors"
                    >
                      {personalInfo.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Developer & Social Profiles */}
              <div className="reveal d4 pt-6 border-t border-zinc-800 flex items-center gap-3">
                <span className="text-xs text-zinc-500 uppercase tracking-wider mr-2">Profiles:</span>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-accent text-zinc-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" /> LeetCode
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-accent text-zinc-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-accent text-zinc-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="reveal d2">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-zinc-800/60 rounded-2xl border border-zinc-700/60">
                  <CheckCircle className="w-16 h-16 text-accent mb-4" />
                  <h3 className="font-display font-bold text-2xl mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Thank you for reaching out. I will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-accent hover:underline uppercase tracking-wider font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Name <span aria-hidden="true" className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Email <span aria-hidden="true" className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity inquiry / Project collaboration"
                      className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Message <span aria-hidden="true" className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
