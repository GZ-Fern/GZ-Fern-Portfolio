import React from 'react';
import PatchworkBackground from '../components/PatchworkBackground';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  
  return (
    <PatchworkBackground pattern="grid">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-6xl font-display text-light-primary dark:text-warm-rust mb-4">About Me</h1>
            <div className="w-24 h-1 bg-light-primary dark:bg-warm-brown mx-auto"></div>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left Column - Photo */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden transform -rotate-2">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/Aboutme_photo.png`}
                  alt="Fernanda"
                  className="w-full h-full object-cover"
                  style={{
                    filter: isDark 
                      ? 'sepia(0.3) saturate(0.9) hue-rotate(-10deg) brightness(0.95)' 
                      : 'sepia(0.15) saturate(1.1) hue-rotate(5deg) brightness(1.05)',
                    transition: 'filter 0.6s ease-in-out'
                  }}
                />
              </div>
              
              <div className="book-card">
                <h3 className="font-serif text-xl font-bold text-light-primary dark:text-warm-rust mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-light-pine dark:text-warm-cream">
                  <li>📍 Location: San Antonio, TX</li>
                  <li>🎓 Education: University of Texas at San Antonio</li>
                  <li>☕ Currently: Student, Member, and Researcher</li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Story */}
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/paragraph_card_decor.png`}
                  alt=""
                  className="w-full h-auto opacity-70"
                  style={{
                    filter: isDark 
                      ? 'sepia(0.3) saturate(0.9) hue-rotate(-10deg) brightness(0.95)' 
                      : 'sepia(0.15) saturate(1.1) hue-rotate(5deg) brightness(1.05)',
                    transition: 'filter 0.6s ease-in-out'
                  }}
                />
                <div className="absolute inset-0 p-8 flex items-center">
                  <div className="space-y-3 text-light-pine dark:text-warm-maroon leading-relaxed text-sm">
                    <p>
                      I'm a senior at UTSA pursuing a Computer Science degree with a double concentration in Software Engineering
                      and Data Science. I have a passion for creating scalable, organized, and creative digital experiences focused on human-centered design. I am proudly
                      a member of the Reboot, IES Pathways, ACM, and SHPE organizations.
                    </p>
                    <p>
                      What drives me is my curiosity and longing for growth. I believe you should never stop learning and making efforts to improve yourself, whether
                      it's professionally or personally.
                    </p>
                    <p>
                      And, I thrive in collaborative environments where I can contribute to meaningful projects with people who
                      can challenge and inspire me.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-light-moss dark:bg-warm-sage bg-opacity-30 dark:bg-opacity-30 border-2 border-light-secondary dark:border-warm-sage p-6 rounded-sm transition-colors duration-300">
                <h3 className="font-serif text-xl font-bold text-light-primary dark:text-warm-rust mb-3">Values & Approach</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Ambition','Collaboration', 'Observation', 'Quality', 'Understanding', 'Innovation'].map((value) => (
                    <div key={value} className="bg-white dark:bg-warm-beige bg-opacity-80 dark:bg-opacity-80 px-3 py-2 rounded text-center text-sm font-semibold text-light-pine dark:text-warm-maroon">
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* The Little Things Section */}
          <div className="mt-4">
            <div className="text-center mb-4">
              <h2 className="text-4xl font-display text-light-primary dark:text-warm-rust mb-2">The Little Things</h2>
              <p className="text-lg font-serif text-light-secondary dark:text-warm-brown">What makes me, me</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              {/* Goals Section */}
              <div className="book-card">
                <h3 className="font-serif text-xl font-bold text-light-primary dark:text-warm-rust mb-4 text-center">My Personal Goals</h3>
                <div className="space-y-3">
                  {[
                    { number: '1', title: 'Make a positive impact through my work at a company' },
                    { number: '2', title: 'Go to and hike Mount Rainier' },
                    { number: '3', title: 'Pursue a higher education' },
                    { number: '4', title: 'Pick up a new hobby' },
                    { number: '5', title: 'Learn to snowboard' },
                  ].map((goal, index) => (
                    <div key={index} className="flex gap-3 items-center collage-card hover:transform hover:scale-102 transition-transform">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-light-secondary to-light-accent dark:from-warm-terracotta dark:to-warm-rust flex items-center justify-center text-white font-bold text-sm transform -rotate-3 shadow-lg">
                          {goal.number}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-serif text-sm font-semibold text-light-primary dark:text-warm-brown">{goal.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests & Hobbies */}
              <div className="book-card">
                <h3 className="font-serif text-xl font-bold text-light-primary dark:text-warm-rust mb-4 text-center">
                  Interests & Hobbies
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: '🎮', text: 'Playing Video Games' },
                    { icon: '📚', text: 'Reading' },
                    { icon: '🎨', text: 'Painting & Art' },
                    { icon: '☕', text: 'Coffee' },
                    { icon: '🥾', text: 'Hiking' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-light-snow dark:bg-warm-cream rounded">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm text-light-pine dark:text-warm-maroon">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="book-card bg-light-moss dark:bg-warm-sage bg-opacity-20 dark:bg-opacity-20">
                <h3 className="font-serif text-xl font-bold text-light-primary dark:text-warm-rust mb-4 text-center">
                  Currently Learning
                </h3>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-warm-beige p-3 rounded border-l-4 border-light-secondary dark:border-warm-sage">
                    <h4 className="font-bold text-sm text-light-pine dark:text-warm-maroon mb-1">User Interface Design</h4>
                    <p className="text-xs text-light-secondary dark:text-warm-brown">Applying design principles to create intuitive UIs.</p>
                  </div>
                  <div className="bg-white dark:bg-warm-beige p-3 rounded border-l-4 border-light-primary dark:border-warm-terracotta">
                    <h4 className="font-bold text-sm text-light-pine dark:text-warm-maroon mb-1">Quality Research and Analysis</h4>
                    <p className="text-xs text-light-secondary dark:text-warm-brown">Learning to conduct thorough research and analysis in educational equity.</p>
                  </div>
                  <div className="bg-white dark:bg-warm-beige p-3 rounded border-l-4 border-light-moss dark:border-warm-rust">
                    <h4 className="font-bold text-sm text-light-pine dark:text-warm-maroon mb-1">Machine Learning</h4>
                    <p className="text-xs text-light-secondary dark:text-warm-brown">Diving deeper into AI and deep learning frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Favorite Media - Circular Showcase */}
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-serif font-bold text-light-primary dark:text-warm-rust mb-4 text-center">
                Some of my favorite things
              </h3>
              <div className="flex flex-wrap justify-center gap-6 p-2 pb-16">
                {[
                  { src: 'Fantastic_Mr_Fox_disc.png', label: 'Fantastic Mr. Fox (Movie)', rotate: -5 },
                  { src: 'meditations_book.png', label: 'Meditations (Book)', rotate: 3 },
                  { src: 'SmashingPumpkins_vinyl.png', label: 'The Smashing Pumpkins (Band)', rotate: -3 },
                  { src: 'Chetbaker_vinyl.png', label: 'Chet Baker (Jazz Trumpeter and Vocalist)', rotate: 4 },
                  { src: 'lbp_disc.png', label: 'LittleBigPlanet (Game)', rotate: -2 },
                  { src: 'overwatch_logo.png', label: 'Overwatch (Game)', rotate: 5 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative group z-20"
                    style={{
                      transform: `rotate(${item.rotate}deg)`,
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(${item.rotate}deg) scale(1.15)`}
                    onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${item.rotate}deg) scale(1)`}
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/${item.src}`}
                        alt={item.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                  bg-light-primary dark:bg-warm-rust px-4 py-2 rounded-full
                                  whitespace-nowrap text-sm font-serif text-white shadow-lg z-50">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fun Facts */}
            <div className="book-card bg-light-accent dark:bg-warm-terracotta bg-opacity-10 dark:bg-opacity-10 mt-4">
              <h2 className="text-2xl font-serif font-bold text-gray-700 dark:text-warm-rust mb-6 text-center">
                Fun Facts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Yap Seshes', text: 'I\'m happy explaining things multiple times, even if it\'s the same thing for hours straight' },
                  { title: 'Weather', text: 'Rainy days > Sunny days' },
                  { title: 'Favorite Music Genre', text: 'Jazz' },
                ].map((fact, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-light-snow dark:bg-warm-cream p-4 rounded-lg transform rotate-1 hover:-rotate-1 transition-transform">
                      <h3 className="font-serif font-bold text-gray-600 dark:text-warm-maroon mb-2">{fact.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-warm-brown">{fact.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-light-snow dark:bg-warm-beige border-2 border-light-primary dark:border-warm-rust p-6 transform -rotate-1 max-w-3xl rounded shadow-lg">
              <p className="font-serif italic text-xl text-light-pine dark:text-warm-maroon">
                "We're all different. Especially him. But there's something kind of fantastic about that, isn't there?" 
              </p>
              <p className="text-sm text-light-secondary dark:text-warm-brown mt-2">- Mrs. Fox (Fantastic Mr. Fox, 2009)</p>
            </div>
          </div>
        </div>
      </div>
    </PatchworkBackground>
  );
};

export default About;

