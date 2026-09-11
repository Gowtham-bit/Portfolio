import React from 'react';
import { skillCategories } from '../../data/resumeData';
import { Code, Globe, Database, GitBranch } from 'lucide-react';

const categoryIcons = {
  'Programming Languages': Code,
  'Web Technologies': Globe,
  Databases: Database,
  'Version Control & Tools': GitBranch,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Technical Proficiency
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Skills &amp; Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, index) => {
            const Icon = categoryIcons[group.category] || Code;
            const delay = index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4';

            return (
              <div
                key={index}
                className={`reveal ${delay} card-h bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-zinc-800 flex items-center justify-center text-accent mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

