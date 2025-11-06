import React, { useState } from 'react';
import AnimatedName from '../components/AnimatedName';
import PatchworkBackground from '../components/PatchworkBackground';
import { Link } from 'react-router-dom';

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <PatchworkBackground pattern="dots">
      <div className="container mx-auto px-4 py-16 md:py-24 relative min-h-screen">
        {/* Decorative Harry Potter Tree - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-48 md:w-64 opacity-70 pointer-events-none z-0">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/harry_potter_decor.jpg`}
            alt=""
            className="w-full h-auto"
          />
        </div>

        {/* Little Prince Decor - Right Side */}
        <div className="absolute bottom-64 md:bottom-72 right-4 md:right-12 w-40 md:w-60 opacity-80 pointer-events-none z-0 transform -rotate-12">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/petitprince_decor.png`}
            alt=""
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Top Page Asset with Animated Name */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/Top_page_asset.png`}
                alt="This book belongs to"
                className="w-full h-auto"
              />

              {/* Animated Name positioned on the line */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ top: '50%' }}>
                <div style={{ transform: 'scale(0.505) translateX(12px)' }}>
                  <AnimatedName name="Fernanda G." />
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-12 text-center">
            <p className="text-2xl md:text-2xl font-serif italic text-gray-800 dark:text-warm-brown font-semibold">
              "Full Stack Developer"
            </p>
          </div>

          {/* Welcome Message */}
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="text-lg font-serif text-gray-800 dark:text-warm-cream leading-relaxed">
              Welcome to my collection of projects, experiences, 
              and the little things that inspire me.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 mt-16 max-w-md mx-auto">

            {[
              { to: '/about', title: 'About Me' },
              { to: '/projects', title: 'Projects' },
              { to: '/experience', title: 'Experience' },
              { to: '/contact', title: 'Contact' },
            ].map((item, index) => {
              const baseRotation = index % 2 === 0 ? -2 : 2;
              const isHovered = hoveredIndex === index;
              const rotation = isHovered ? baseRotation + 3 : baseRotation;
              
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="w-full"
                  style={{ 
                    transform: `rotate(${rotation}deg)`,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/menu_buttons.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2))',
                    transformOrigin: 'center center',
                    transition: 'transform 0.3s ease-out',
                    willChange: 'transform'
                  }}
                >
                  <h3 className="text-xl font-serif font-bold text-light-primary dark:text-warm-rust mb-2">{item.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </PatchworkBackground>
  );
};

export default Home;
