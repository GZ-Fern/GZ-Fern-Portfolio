import React from 'react';
import { useTheme } from '../context/ThemeContext';

class ThemeToggleButton {
  constructor(isDark) {
    this.isDark = isDark;
  }

  getIcon() {
    return this.isDark ? '🌙' : '☀️';
  }

  getLabel() {
    return this.isDark ? 'Dark Mode' : 'Light Mode';
  }

  getButtonImage() {
    return this.isDark 
      ? `${process.env.PUBLIC_URL}/assets/darkmode_button.jpg`
      : `${process.env.PUBLIC_URL}/assets/lightmode_button.jpg`;
  }
}

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const buttonController = new ThemeToggleButton(isDark);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 transition-all duration-300 hover:scale-110 hover:rotate-3"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        backgroundImage: `url(${buttonController.getButtonImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '80px',
        height: '80px',
        border: 'none',
        cursor: 'pointer',
        filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3))',
        padding: 0
      }}
    >
      {/* Icon is hidden but kept for accessibility */}
      <span className="sr-only">{buttonController.getIcon()}</span>
    </button>
  );
};

export default ThemeToggle;
