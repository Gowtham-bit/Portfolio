import React from 'react';
import { personalInfo } from '../../data/resumeData';
import { ArrowDown, Code2, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-72 h-72 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols): Bio & Details */}
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 dark:bg-zinc-800 border border-orange-200 dark:border-zinc-700 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Opportunities
            </div>

            <h1 className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-4">
              Hi, I'm <span className="text-accent">{personalInfo.name}</span>
            </h1>

            <p className="reveal d2 text-xl md:text-2xl font-display font-semibold text-zinc-700 dark:text-zinc-300 mb-6">
              {personalInfo.role} &amp; Computer Science Student
            </p>

            <p className="reveal d2 text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-xl mb-8">
              {personalInfo.profileSummary}
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="reveal d3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-600 dark:text-zinc-400 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                {personalInfo.formattedPhone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="reveal d3 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, 'work')}
                className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm shadow-md"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
              >
                Get in Touch
              </a>

              {/* Social / Dev Profile Links */}
              <div className="flex items-center gap-2.5 ml-2">
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-accent hover:border-accent transition-colors"
                  title="LeetCode Profile (300+ Problems)"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-accent hover:border-accent transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-accent hover:border-accent transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="reveal d4 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              {personalInfo.stats.map((stat, i) => (
                <div key={i}>
                  <p
                    className={`font-display font-bold text-2xl lg:text-3xl ${
                      stat.highlight ? 'text-accent' : 'text-zinc-900 dark:text-white'
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Visual Profile Card */}
          <div className="reveal d2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 p-6 border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Bannari Amman Inst.
                </span>
                <span className="w-3 h-3 rounded-full bg-accent" />
              </div>

              <div className="my-auto text-center py-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/15 border-2 border-accent/40 flex items-center justify-center text-accent text-3xl font-display font-bold">
                  SG
                </div>
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-accent font-medium mt-1">{personalInfo.role}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 max-w-xs mx-auto">
                  B.E - Computer Science &amp; Engineering
                </p>
              </div>

              <div className="bg-white/80 dark:bg-zinc-950/70 backdrop-blur-sm rounded-2xl p-3.5 border border-zinc-200/60 dark:border-zinc-800/60 text-xs flex items-center justify-between">
                <div>
                  <p className="text-zinc-400">Coding Problem Solver</p>
                  <p className="font-bold text-zinc-900 dark:text-white">300+ LeetCode Solved</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-accent text-white font-semibold text-[10px]">
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
