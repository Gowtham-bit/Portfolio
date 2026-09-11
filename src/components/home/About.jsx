import React from 'react';
import { personalInfo } from '../../data/resumeData';
import { Award, BookOpen, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Highlight Card (5 cols) */}
          <div className="reveal md:col-span-5">
            <div className="rounded-3xl p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center font-display font-bold text-2xl mb-6 shadow-md">
                SG
              </div>

              <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-semibold text-accent mb-6">{personalInfo.role}</p>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white">Education</p>
                    <p className="text-xs">{personalInfo.college}</p>
                    <p className="text-xs text-zinc-500">CGPA: 7.5 (Till 6th semester)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white">Location</p>
                    <p className="text-xs">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white">Problem Solving</p>
                    <p className="text-xs">300+ Problems on LeetCode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Areas (7 cols) */}
          <div className="md:col-span-7">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Profile
            </p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
              A bit about<br />who I am
            </h2>

            <p className="reveal d2 text-zinc-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed mb-6 font-normal">
              {personalInfo.profileSummary}
            </p>

            <p className="reveal d3 text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              My engineering philosophy revolves around writing clean, testable, and maintainable code. Whether building full-stack web applications with React and Node.js or optimizing algorithmic logic in Java, I take pride in developing scalable digital solutions.
            </p>

            <div className="reveal d4 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  Core Focus
                </p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  Full-Stack MERN Architecture
                </p>
                <p className="text-xs text-zinc-500 mt-1">MongoDB, Express.js, React.js, Node.js</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  Algorithmic Practice
                </p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  Data Structures &amp; Java
                </p>
                <p className="text-xs text-zinc-500 mt-1">300+ Solved Problems on LeetCode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
