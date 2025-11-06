/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode - Nature/Mountain theme
        'light-bg': '#F0F4F0',
        'light-surface': '#E8F0E8',
        'light-primary': '#2D5F3F',
        'light-secondary': '#5A8A6F',
        'light-accent': '#87CEEB',
        'light-snow': '#ffffffff',
        'light-pine': '#1E4D2B',
        'light-moss': '#7CB342',
        
        // Dark mode - Cozy Bookstore theme
        'warm-cream': '#F5F1E8',
        'warm-beige': '#E8DCC4',
        'warm-brown': '#8B6F47',
        'warm-terracotta': '#C97C5D',
        'warm-rust': '#A64B2A',
        'warm-sage': '#9CAF88',
        'warm-maroon': '#6B2C2C',
        'warm-burnt-orange': '#CC5500',
        'dark-bg': '#2A1810',
        'dark-surface': '#3D2817',
        'dark-border': '#8B6F47',
        'dark-text': '#F5F1E8',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'display': ['Abril Fatface', 'serif'],
        'handwriting': ['Caveat', 'cursive'],
        'mono': ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [],
}
