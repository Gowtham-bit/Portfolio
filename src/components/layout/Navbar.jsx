import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
        if (atBottom) {
          setActiveSection('contact');
          return;
        }
        const sections = ['contact', 'achievements', 'work', 'education', 'skills', 'about', 'hero'];
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && window.scrollY >= el.offsetTop - 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenu(false);

    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const isHome = location.pathname === '/';
  const isWorkPage = location.pathname.startsWith('/projects') || location.pathname.startsWith('/case-study');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="font-display font-bold text-xl tracking-tight relative z-10"
        >
          <span className="text-zinc-900 dark:text-white">Gow</span>
          <span className="text-accent">tham</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-7 text-sm" role="list">
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                isHome && activeSection === 'about' ? 'active !text-zinc-900 dark:!text-white' : ''
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                isHome && activeSection === 'skills' ? 'active !text-zinc-900 dark:!text-white' : ''
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, 'education')}
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                isHome && activeSection === 'education' ? 'active !text-zinc-900 dark:!text-white' : ''
              }`}
            >
              Education
            </a>
          </li>
          <li>
            <Link
              to="/projects"
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                isWorkPage || (isHome && activeSection === 'work') ? 'active !text-accent' : ''
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="#achievements"
              onClick={(e) => handleNavClick(e, 'achievements')}
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                isHome && activeSection === 'achievements' ? 'active !text-zinc-900 dark:!text-white' : ''
              }`}
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                isHome && activeSection === 'contact' ? 'active !text-zinc-900 dark:!text-white' : ''
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
            aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>

          {/* Connect CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Connect <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
            aria-expanded={mobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-all duration-200 shadow-xl">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => handleNavClick(e, 'education')}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setMobileMenu(false)}
                className={`block transition-colors ${
                  isWorkPage ? 'text-accent font-medium' : 'text-zinc-700 dark:text-zinc-300 hover:text-accent'
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href="#achievements"
                onClick={(e) => handleNavClick(e, 'achievements')}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-accent-light transition-colors w-full justify-center"
              >
                Connect →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
