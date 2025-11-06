import React, { useState, useEffect } from 'react';
import { FontManager, AnimationController, NameAnimator } from '../utils/AnimationUtils';

const AnimatedName = ({ name }) => {
  const [fontManager] = useState(() => new FontManager());
  const [animationController] = useState(() => new AnimationController(1500));
  const [nameAnimator] = useState(() => new NameAnimator(name, fontManager));
  const [letterFonts, setLetterFonts] = useState(nameAnimator.getLetterFonts());
  
  useEffect(() => {
    animationController.start(() => {
      const newFonts = nameAnimator.changeRandomLetter();
      setLetterFonts(newFonts);
    });
    
    return () => {
      animationController.stop();
    };
  }, [animationController, nameAnimator]);
  
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight whitespace-nowrap" style={{ color: '#656996' }}>
      {name.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${fontManager.getFontByIndex(letterFonts[index])} px-1`}
          style={{ minWidth: letter === ' ' ? '1rem' : 'auto' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
