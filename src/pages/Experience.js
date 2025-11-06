import React from 'react';
import PatchworkBackground from '../components/PatchworkBackground';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Research',
      company: 'IES Pathways',
      location: 'San Antonio, TX',
      period: 'Oct 2025 – Current',
      description: '',
      achievements: [
        'Leveraging technical skills to develop tools and solutions that support equitable access to education',
      ],
      color: 'bg-light-accent dark:bg-warm-burnt-orange',
    },
    {
      id: 2,
      role: 'Marketing Lead Volunteer',
      company: 'TX Duo PM',
      location: 'San Antonio, TX',
      period: 'Jul 2025',
      description: 'Listened to company needs and led marketing efforts to enhance brand presence.',
      achievements: [
        'Led UI/UX redesign of the organization\'s website to improve accessibility, mobile responsiveness, and brand consistency',
        'Created bilingual tutorials and documentation, enabling non-technical staff adoption',
      ],
      color: 'bg-light-moss dark:bg-warm-sage',
    },
    {
      id: 3,
      role: 'Computer Science Grader & Tutor',
      company: 'UTSA',
      location: 'San Antonio, TX',
      period: 'Jan 2024 – May 2025',
      description: 'Assisted students in understanding core computer science concepts and debugging code.',
      achievements: [
        'Facilitated targeted tutoring in Java and C to improve debugging and algorithmic problem-solving skills',
        'Provided detailed code reviews and feedback that enhanced student understanding and coding quality',
      ],
      color: 'bg-light-secondary dark:bg-warm-terracotta',
    },
    {
      id: 4,
      role: 'Web Development',
      company: 'The Global Tech Experience',
      location: 'Remote',
      period: 'Jan 2024 – Jul 2024',
      description: 'Worked in an international collaborative setting to create web experiences.',
      achievements: [
        'Built responsive, cross-browser websites with enhanced accessibility for users with disabilities by applying UX/UI design principles',
        'Integrated REST APIs and interactive e-commerce features, improving usability and visual appeal',
      ],
      color: 'bg-light-primary dark:bg-warm-rust',
    },
  ];

  const organizations = [
    'Reboot Representation',
    'IES Pathways',
    'CodePath',
    'SHPE',
    'ACM',
    'Women in STEM',
  ];
  
  return (
    <PatchworkBackground pattern="grid">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display text-light-primary dark:text-warm-rust mb-4">Work Experience</h1>
            <p className="text-xl font-serif text-light-secondary dark:text-warm-brown">My professional journey</p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-light-primary dark:bg-warm-brown opacity-30" />
            
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`mb-12 md:mb-16 flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div className="book-card">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-light-pine dark:text-warm-cream mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-light-primary dark:text-warm-rust">{exp.company}</p>
                        <p className="text-sm text-light-secondary dark:text-warm-brown">{exp.location}</p>
                      </div>
                      <div className={`${exp.color} text-white px-3 py-1 rounded-sm text-sm font-bold transform rotate-3`}>
                        {exp.period}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-light-pine dark:text-warm-cream mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="bg-light-snow dark:bg-warm-cream bg-opacity-50 p-4 rounded">
                      <h4 className="font-serif font-bold text-light-primary dark:text-warm-brown mb-2">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2 text-light-pine dark:text-warm-maroon">
                            <span className="text-light-secondary dark:text-warm-terracotta">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 justify-center">
                  <div className={`w-12 h-12 ${exp.color} rounded-full border-4 border-white dark:border-warm-cream flex items-center justify-center text-white font-bold transform rotate-12 warm-shadow`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
          
          {/* Skills Section */}
          <div className="mt-16">
            <div className="book-card text-center">
              <h2 className="text-3xl font-display text-light-primary dark:text-warm-rust mb-8">Technical Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    category: 'Languages',
                    skills: ['Python', 'Java', 'SQL', 'C', 'JavaScript', 'HTML/CSS', 'Dart', 'C#'],
                  },
                  {
                    category: 'Tools & Platforms',
                    skills: ['Git/GitHub', 'Google Colab', 'VS Code', 'Unity', 'Supabase', 'MySQL', 'Android Studio', 'Lucidchart', 'Plaid API', 'PostgreSQL', 'Eclipse', 'DrJava', 'Maven'],
                  },
                  {
                    category: 'Frameworks & Libraries',
                    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'TensorFlow', 'Scikit-learn', 'Flutter', 'FastAPI', 'Flet'],
                  },
                  {
                    category: 'Other',
                    skills: ['REST APIs', 'Agile/Scrum', 'CodePath Technical Interview Prep', 'OOP', 'ERD/DDD', 'UI/UX Principles', 'Bilingual (English/Spanish)', 'Debugging', 'Technical Documentation', 'Web Development Certification'],
                  },
                ].map((skillSet) => (
                  <div key={skillSet.category} className="collage-card">
                    <h3 className="font-serif text-xl font-bold text-light-primary dark:text-warm-brown mb-4">
                      {skillSet.category}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillSet.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-light-moss dark:bg-warm-sage bg-opacity-40 rounded-full text-sm font-semibold text-light-pine dark:text-warm-maroon"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Organizations Section */}
          <div className="mt-16">
            <div className="book-card text-center">
              <h2 className="text-3xl font-display text-light-primary dark:text-warm-rust mb-6">Organizations</h2>
              <p className="text-lg text-light-secondary dark:text-warm-brown mb-6">2024 – Current</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {organizations.map((org) => (
                  <span
                    key={org}
                    className="px-4 py-2 bg-light-accent dark:bg-warm-terracotta text-white rounded-full font-semibold transform hover:-rotate-2 transition-transform"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PatchworkBackground>
  );
};

export default Experience;
