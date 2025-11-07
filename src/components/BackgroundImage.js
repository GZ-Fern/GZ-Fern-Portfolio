import React from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundImage = () => {
  const { isDark } = useTheme();
  
  const lightBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F4F0',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/lightmode_background.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
    opacity: isDark ? 0 : 1,
    transition: 'opacity 0.6s ease-in-out',
    willChange: 'opacity'
  };
  
  const darkBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#2A1810',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/darkmode_background.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
    opacity: isDark ? 1 : 0,
    transition: 'opacity 0.6s ease-in-out',
    willChange: 'opacity'
  };
  
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: isDark ? 'rgba(42, 24, 16, 0.92)' : 'rgba(171, 184, 171, 0.37)',
    mixBlendMode: isDark ? 'multiply' : 'normal',
    zIndex: -1,
    transition: 'background-color 0.6s ease-in-out',
    willChange: 'background-color'
  };
  
  return (
    <>
      <div style={lightBackgroundStyle} />
      <div style={darkBackgroundStyle} />
      <div style={overlayStyle} />
    </>
  );
};

export default BackgroundImage;
