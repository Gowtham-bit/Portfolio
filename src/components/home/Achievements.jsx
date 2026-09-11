import React from 'react';
import { certificationsList, achievementsList, personalInfo } from '../../data/resumeData';
import { Trophy, Award, Languages, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Recognition &amp; Credentials
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Certifications &amp; Achievements
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Achievement Card (LeetCode) - 6 cols */}
          <div className="reveal d1 lg:col-span-6 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center text-accent">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-accent text-white font-semibold uppercase tracking-wider">
                  Achievement
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-3">
                Solved 300+ Coding Problems on LeetCode
              </h3>

              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Actively practicing algorithmic problem-solving with a core focus on Data Structures, Algorithms, Arrays, Strings, Dynamic Programming, and efficient time/space complexity in Java &amp; Python.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Platform: LeetCode</span>
              <a
                href="https://leetcode.com/u/sgm_2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
              >
                View Profile →
              </a>
            </div>
          </div>

          {/* Certifications & Languages - 6 cols */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Certifications Box */}
            <div className="reveal d2 bg-white dark:bg-zinc-900 rounded-3xl p-7 border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-white">
                    Certifications
                  </h4>
                  <p className="text-xs text-zinc-400">Verified Technical Accreditations</p>
                </div>
              </div>

              <div className="space-y-4">
                {certificationsList.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700/60 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h5 className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {cert.title}
                      </h5>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        Issued by <strong className="text-zinc-700 dark:text-zinc-300">{cert.issuer}</strong>
                      </p>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-zinc-700 font-mono text-accent border border-zinc-200 dark:border-zinc-600 shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Known Box */}
            <div className="reveal d3 bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center text-accent">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-zinc-900 dark:text-white">
                    Languages
                  </h4>
                  <p className="text-xs text-zinc-400">Professional Communication</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {personalInfo.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-orange-50 dark:bg-zinc-800 text-accent font-semibold border border-orange-200 dark:border-zinc-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

