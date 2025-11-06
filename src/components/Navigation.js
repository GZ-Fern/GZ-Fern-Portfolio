import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

class NavigationLink {
  constructor(path, label) {
    this.path = path;
    this.label = label;
  }

  isActive(currentPath) {
    return currentPath === this.path;
  }

  getClassName(currentPath) {
    const baseClasses = 'px-4 py-2 rounded-sm font-serif font-bold transition-all duration-200';
    const activeClasses = 'bg-light-primary dark:bg-warm-rust text-white transform -rotate-1';
    const inactiveClasses = 'bg-light-snow dark:bg-warm-beige text-light-pine dark:text-warm-maroon hover:bg-light-secondary dark:hover:bg-warm-terracotta hover:text-white hover:rotate-1';
    
    return `${baseClasses} ${this.isActive(currentPath) ? activeClasses : inactiveClasses}`;
  }
}

class NavigationController {
  constructor() {
    this.links = [
      new NavigationLink('/', 'Home'),
      new NavigationLink('/about', 'About Me'),
      new NavigationLink('/projects', 'Projects'),
      new NavigationLink('/experience', 'Experience'),
      new NavigationLink('/contact', 'Contact'),
    ];
  }

  getLinks() {
    return this.links;
  }
}

const Navigation = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const navController = new NavigationController();
  
  return (
    <nav className="bg-light-surface dark:bg-dark-surface border-b-4 border-light-primary dark:border-dark-border sticky top-0 z-50 warm-shadow transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {navController.getLinks().map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={link.getClassName(location.pathname)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Theme Toggle Button - Right Corner */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-sm font-serif font-bold transition-all duration-200 bg-light-snow dark:bg-warm-beige text-light-pine dark:text-warm-maroon hover:bg-light-secondary dark:hover:bg-warm-terracotta hover:text-white hover:rotate-1"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
