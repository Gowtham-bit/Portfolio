import React from 'react';
import { personalInfo } from '../../data/resumeData';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 transition-colors py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-white">
            {personalInfo.name} — <span className="text-accent">{personalInfo.role}</span>
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            © {currentYear} S. Gowtham. All rights reserved. • {personalInfo.college}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-accent transition-colors flex items-center gap-1"
          >
            <Code2 className="w-3.5 h-3.5" /> LeetCode
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-accent transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-accent transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs text-zinc-500 hover:text-accent transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
