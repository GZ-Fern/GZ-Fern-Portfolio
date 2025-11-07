import React, { useState } from 'react';
import PatchworkBackground from '../components/PatchworkBackground';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Big$hot',
      category: 'web',
      description: 'First Place SWIVEL challenge (24 hour) hackathon winner, 2025. Big$hot is a personal finance website with customizable features to help users, of all ages, manage and learn about their finances effectively. (Includes Plaid integration and User authentication.)',
      technologies: ['Flet', 'FastAPI', 'PostgreSQL', 'Supabase', 'Plaid API', 'GitHub/Git', 'Python', 'HTML'],
      image: 'assets/BigShot_project.png',
      github: 'https://github.com/Sneha-Karki/RowdyHacks',
    },
    {
      id: 2,
      title: 'Whisk',
      category: 'web',
      description: 'Whisk is a comprehensive, cozy recipe management application that allows users to create, view, and organize their favorite recipes while generating smart shopping lists. The app features a responsive UI with both light and dark themes, complete with custom background imagery for an enhanced user experience.',
      technologies: ['Flutter', 'Dart', 'VS Code', 'GitHub/Git'],
      image: 'assets/Whisk_project.png',
      github: 'https://github.com/GZ-Fern/Whisk',
    },
    {
      id: 3,
      title: 'Image & Text Classification',
      category: 'other',
      description: 'Deep learning models for image classification with CNN and text classification with LSTM using TensorFlow',
      technologies: ['GoogleColab', 'TensorFlow', 'NumPy', 'Matplotlib', 'Python'],
      image: 'assets/Classification_project.png',
      github: 'https://github.com/GZ-Fern/Image-Text-Classification',
    },
    {
      id: 4,
      title: 'Metroidvania Game Demo',
      category: 'other',
      description: 'A solo-developed 2D Metroidvania prototype built in Unity. Features player movement and combat, enemy AI, sanity and health systems, interactive UI, and a complete/short demo level.',
      technologies: ['Unity 6', 'Aseprite', 'VS Code', 'GitHub/Git', 'C#'],
      image: 'assets/Metroidvania_project.png',
      github: 'https://github.com/GZ-Fern/Metroidvania-SoloProject',
    },
    {
      id: 5,
      title: 'Nutrition Tracker Database',
      category: 'other',
      description: 'A health-focused relational database designed to help users track workouts, meals, hydration, and personal health metrics all in a centralized system. Built with scalability, efficiency, and real world application in mind.',
      technologies: ['MySQL', 'SQL', 'Notion', 'Github/Git', 'Lucidchart'],
      image: 'assets/SQL_project.png',
      github: 'https://github.com/GZ-Fern/Nutrition-DB-Project',
    },
    {
      id: 6,
      title: 'Cat Cafe Idle-Game',
      category: 'web',
      description: 'An idle clicker game built with Flutter where you run your own cat-themed coffee shop! Brew "Catpuccinos", train adorable server cats, and recruit cafe cats to automate your coffee empire.',
      technologies: ['Flutter', 'Dart', 'VS Code', 'GitHub/Git'],
      image: 'assets/Cat_Cafe_Idle_Game_project.png',
      github: 'https://github.com/GZ-Fern/Cat-Cafe-Game',
    },
    {
      id: 7,
      title: 'This Portfolio Website',
      category: 'web',
      description: 'YES THIS ONE! Was built with React and styled with Tailwind CSS, featuring a custom theme system with light/dark modes, smooth animations, and responsive design. It includes dynamic routing, reusable components, and a cohesive design tailored to my style.',
      technologies: ['React', 'Tailwind CSS', 'React Router', 'JavaScript', 'VS Code', 'GitHub/Git'],
      image: 'assets/portfolio_project.jpg',
      github: 'https://github.com/GZ-Fern/GZ-Fern-Portfolio',
    },
  ];

  const categories = ['all', 'web', 'other'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  return (
    <PatchworkBackground pattern="dots">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display text-light-primary dark:text-warm-rust mb-4">Projects</h1>
            <p className="text-xl font-serif text-light-secondary dark:text-warm-brown">A collection of things I've built</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-sm font-serif font-bold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-light-primary dark:bg-warm-rust text-white transform -rotate-1 warm-shadow'
                    : 'bg-light-surface dark:bg-warm-beige text-light-pine dark:text-warm-maroon hover:bg-light-secondary dark:hover:bg-warm-terracotta hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="book-card group relative animated-border"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `rotate(${index % 2 === 0 ? '-' : ''}0.5deg)`
                }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-light-snow dark:bg-warm-cream flex items-center justify-center mb-4 rounded border-2 border-light-primary dark:border-warm-brown overflow-hidden">
                  <img 
                    src={`${process.env.PUBLIC_URL}/${project.image}`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Project Info */}
                <h3 className="text-2xl font-serif font-bold text-light-primary dark:text-warm-rust mb-2 group-hover:text-emerald-500 dark:group-hover:text-warm-burnt-orange transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-light-pine dark:text-warm-cream mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-light-moss dark:bg-warm-sage bg-opacity-40 text-light-pine dark:text-warm-maroon text-sm rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-light-pine dark:bg-warm-maroon text-white rounded-sm font-semibold hover:bg-emerald-500 dark:hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-light-snow dark:bg-warm-beige border-l-4 border-light-primary dark:border-warm-rust p-6 transform -rotate-1">
              <p className="handwritten-note text-2xl">
                Fun Fact: Two projects were done collaboratively in a team of 4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PatchworkBackground>
  );
};

export default Projects;
