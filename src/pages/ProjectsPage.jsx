import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allProjects, filterOptions } from '../data/projectsData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = selectedFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedFilter);

  useScrollReveal([selectedFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Header Section */}
      <section className="pt-36 pb-12 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="reveal font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">
            All Projects
          </h1>
          <p className="reveal text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
            A showcase of my full-stack MERN projects, web applications, and ongoing developments.
          </p>

          {/* Filter Pills */}
          <div className="reveal flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all ${
                  selectedFilter === f.value
                    ? 'bg-accent text-white border-accent shadow-sm shadow-accent/30'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent'
                }`}
              >
                {f.label}
                {f.value === 'all' ? ` (${allProjects.length})` : ''}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="card-h reveal group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="pf w-full h-52">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-0.5 rounded-full font-medium">
                        {project.categoryLabel}
                      </span>
                      {project.status && (
                        <span className="text-xs bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-medium">
                          Ongoing
                        </span>
                      )}
                      <span className="text-xs text-zinc-400 ml-auto">
                        {project.year}
                      </span>
                    </div>
                    <Link to={`/case-study/${project.slug}`}>
                      <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    to={`/case-study/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl group-hover:text-accent"
                  >
                    View case study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-20 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-14 border border-zinc-100 dark:border-zinc-800 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Let's work together to create something exceptional for your brand or product.
            </p>
            <Link
              to="/#contact"
              className="shimmer inline-flex items-center gap-2 bg-accent text-white font-medium px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
