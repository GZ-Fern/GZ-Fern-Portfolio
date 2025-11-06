import React from 'react';

class BackgroundPattern {
  constructor(type) {
    this.type = type;
  }

  getGridPattern() {
    return {
      backgroundImage: `
        linear-gradient(rgba(61, 90, 108, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(61, 90, 108, 0.3) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    };
  }

  getDotsPattern() {
    return {
      backgroundImage: `radial-gradient(circle, rgba(61, 90, 108, 0.3) 1px, transparent 1px)`,
      backgroundSize: '30px 30px'
    };
  }

  getPattern() {
    return this.type === 'grid' ? this.getGridPattern() : this.getDotsPattern();
  }
}

class DecorativePatch {
  constructor(position, size, color, opacity) {
    this.position = position;
    this.size = size;
    this.color = color;
    this.opacity = opacity;
  }

  getClassName() {
    return `absolute ${this.position} ${this.size} ${this.color} ${this.opacity} rounded-full blur-3xl`;
  }
}

class BackgroundDecorator {
  constructor() {
    this.patches = [
      new DecorativePatch('top-10 left-5', 'w-32 h-32', 'bg-light-moss dark:bg-warm-burnt-orange', 'opacity-20 dark:opacity-15'),
      new DecorativePatch('top-40 right-10', 'w-40 h-40', 'bg-light-accent dark:bg-warm-terracotta', 'opacity-25 dark:opacity-20'),
      new DecorativePatch('bottom-20 left-1/4', 'w-36 h-36', 'bg-light-secondary dark:bg-warm-maroon', 'opacity-15 dark:opacity-15'),
    ];
  }

  getPatches() {
    return this.patches;
  }
}

const PatchworkBackground = ({ children, pattern = 'grid' }) => {
  const backgroundPattern = new BackgroundPattern(pattern);
  const decorator = new BackgroundDecorator();

  return (
    <div className="relative min-h-screen transition-colors duration-200">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={backgroundPattern.getPattern()}
        />
      </div>
      
      {/* Decorative patches */}
      {decorator.getPatches().map((patch, index) => (
        <div key={index} className={patch.getClassName()} />
      ))}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PatchworkBackground;
