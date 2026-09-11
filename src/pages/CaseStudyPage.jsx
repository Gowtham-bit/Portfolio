import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProjects } from '../data/projectsData';
import ProgressBar from '../components/common/ProgressBar';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function CaseStudyPage() {
  const { slug } = useParams();
  useScrollReveal([slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find project by slug or fallback to the first one (Expense Tracker)
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const project = currentIndex !== -1 ? allProjects[currentIndex] : allProjects[0];

  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <>
      <ProgressBar />
      <main>
        <article>
          {/* Header Section */}
          <header className="pt-32 pb-10 max-w-4xl mx-auto px-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full font-medium">
                {project.categoryLabel}
              </span>
              {project.status && (
                <span className="text-xs bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-full font-medium">
                  {project.status}
                </span>
              )}
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs text-zinc-400 ml-1">
                {project.year} · {project.timeline || '4 weeks'}
              </span>
            </div>

            <h1 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight mb-6">
              {project.title}
            </h1>

            <p className="reveal d1 text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              {project.fullDesc || project.desc}
            </p>

            {/* Meta Row */}
            <div className="reveal d2 grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900">
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Client</p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  {project.client || 'Confidential'}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Role</p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  {project.role || 'Lead Designer & Developer'}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Timeline</p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  {project.timeline || 'Ongoing'}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Deliverables</p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  {project.deliverables || 'Figma, React Code'}
                </p>
              </div>
            </div>
          </header>

          {/* Hero Media */}
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="reveal photo-frame w-full h-72 md:h-[480px] rounded-3xl shadow-xl">
              <img
                src={project.img}
                alt={project.title}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Results Stats Banner */}
          {project.stats && (
            <div className="max-w-4xl mx-auto px-6 mb-16">
              <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.stats.map((stat, i) => (
                  <div key={i} className="stat-card bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 pl-6 border border-zinc-100 dark:border-zinc-800/80">
                    <p
                      className={`font-display font-bold text-3xl ${
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
          )}

          {/* Prose Content */}
          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>The brief</h2>
            <p>
              {project.brief ||
                'The goal of this initiative was to eliminate UX friction, establish a robust responsive design system, and ensure high conversion across desktop and mobile browsers.'}
            </p>

            {project.briefQuote && (
              <blockquote>
                <p>"{project.briefQuote}"</p>
              </blockquote>
            )}

            <h2>Discovery &amp; research</h2>
            <h3>User interviews &amp; usability evaluation</h3>
            <p>
              Working directly with product stakeholders and end users, we isolated key friction areas in navigation, onboarding drop-offs, and information architecture:
            </p>

            <ul>
              {project.userInterviews ? (
                project.userInterviews.map((item, i) => <li key={i}>{item}</li>)
              ) : (
                <>
                  <li>Users experienced high cognitive load during multi-step configuration flows.</li>
                  <li>Inconsistent UI components slowed down both users and development teams.</li>
                  <li>Page speed metrics were hampered by heavy asset loading and inefficient style sheets.</li>
                </>
              )}
            </ul>

            <h3>Architectural &amp; Design Solution</h3>
            <p>
              We established clean, reusable component hierarchies, optimized layouts for mobile responsiveness, and utilized Tailwind CSS for predictable performance and zero specificity clashes.
            </p>
          </div>

          {/* Full-width audit preview image */}
          {project.auditImg && (
            <div className="max-w-5xl mx-auto px-6 mb-16">
              <div className="reveal photo-frame w-full h-56 md:h-80 rounded-2xl shadow-md">
                <img
                  src={project.auditImg}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {project.auditCaption && (
                <p className="text-xs text-zinc-400 text-center mt-3">{project.auditCaption}</p>
              )}
            </div>
          )}

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="max-w-3xl mx-auto px-6 mb-20">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-800">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed italic mb-6">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-zinc-900 dark:text-white">
                      {project.testimonial.author}
                    </p>
                    <p className="text-xs text-zinc-500">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Next / Previous Project Navigation */}
          <div className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                to={`/case-study/${prevProject.slug}`}
                className="group flex items-center gap-3 text-left w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Previous Project</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>

              <Link
                to={`/case-study/${nextProject.slug}`}
                className="group flex items-center gap-3 text-right w-full sm:w-auto justify-end"
              >
                <div>
                  <p className="text-xs text-zinc-400">Next Project</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
