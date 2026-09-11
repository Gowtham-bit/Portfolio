import React from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../../data/projectsData';
import { ArrowRight } from 'lucide-react';

export default function FeaturedWork() {
  const featured = allProjects[0]; // Expense Tracker
  const project2 = allProjects[1]; // Movie Recommendation System
  const project3 = allProjects[2]; // BIT Hostel Room Allocation System

  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
              Selected work
            </h2>
          </div>
          <Link
            to="/projects"
            className="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl"
          >
            All projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Large Featured Project (Expense Tracker) */}
          <article className="card-h reveal d1 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="pf w-full h-64 md:h-80">
                <img
                  src={featured.img}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full font-medium">
                    {featured.categoryLabel}
                  </span>
                  {featured.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/case-study/${featured.slug}`}>
                  <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {featured.title}
                  </h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {featured.desc}
                </p>
              </div>
            </div>
            <div className="px-7 pb-7">
              <Link
                to={`/case-study/${featured.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl group-hover:text-accent"
              >
                View case study <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </article>

          {/* Secondary Featured Project 1 (Movie Recommendation System) */}
          <article className="card-h reveal d2 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent flex flex-col justify-between">
            <div>
              <div className="pf w-full h-48">
                <img
                  src={project2.img}
                  alt={project2.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full font-medium">
                    {project2.categoryLabel}
                  </span>
                  {project2.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/case-study/${project2.slug}`}>
                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {project2.title}
                  </h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  {project2.desc}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                to={`/case-study/${project2.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl group-hover:text-accent"
              >
                View case study →
              </Link>
            </div>
          </article>

          {/* Secondary Featured Project 2 (BIT Hostel Room Allocation System) */}
          <article className="card-h reveal d3 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent flex flex-col justify-between">
            <div>
              <div className="pf w-full h-48">
                <img
                  src={project3.img}
                  alt={project3.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full font-medium">
                    {project3.categoryLabel}
                  </span>
                  {project3.status && (
                    <span className="text-xs bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full font-medium">
                      Ongoing
                    </span>
                  )}
                  {project3.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/case-study/${project3.slug}`}>
                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {project3.title}
                  </h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  {project3.desc}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                to={`/case-study/${project3.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl group-hover:text-accent"
              >
                View case study →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
