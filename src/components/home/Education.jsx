import React from 'react';
import { educationList } from '../../data/resumeData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {educationList.map((item, index) => {
            const delay = index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3';

            return (
              <div
                key={index}
                className={`reveal ${delay} card-h rounded-2xl p-7 border transition-all flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-zinc-900 dark:bg-zinc-800/90 text-white border-zinc-700/80 shadow-lg'
                    : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-100 dark:border-zinc-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        item.highlight
                          ? 'bg-accent text-white'
                          : 'bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700'
                      }`}
                    >
                      {item.status}
                    </span>
                    <span
                      className={`text-xs flex items-center gap-1 ${
                        item.highlight ? 'text-zinc-400' : 'text-zinc-500'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl mb-2 leading-snug">
                    {item.degree}
                  </h3>

                  <p
                    className={`text-sm font-medium mb-3 ${
                      item.highlight ? 'text-zinc-300' : 'text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    {item.institution}
                  </p>

                  <p
                    className={`text-xs flex items-center gap-1.5 mb-6 ${
                      item.highlight ? 'text-zinc-400' : 'text-zinc-500'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {item.location}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t ${
                    item.highlight
                      ? 'border-zinc-700/80 text-white'
                      : 'border-zinc-200/80 dark:border-zinc-800 text-zinc-900 dark:text-white'
                  }`}
                >
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {item.score}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

