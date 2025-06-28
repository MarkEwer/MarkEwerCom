import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const FeaturedProjects: React.FC = () => {
  // This would typically come from an API or markdown files
  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'CQRS System Architecture',
      description: 'A comprehensive implementation of Command Query Responsibility Segregation pattern with Event Sourcing, demonstrating scalable microservices architecture.',
      image: '/projects/cqrs-system.jpg',
      category: 'Architecture',
      technologies: ['C#', '.NET Core', 'Azure', 'Event Store', 'Docker'],
      demoUrl: '#',
      githubUrl: 'https://github.com/markewer/cqrs-system'
    },
    {
      id: '2',
      title: 'Agile Process Dashboard',
      description: 'Real-time dashboard for tracking agile metrics and team performance with integrated CI/CD pipeline monitoring.',
      image: '/projects/agile-dashboard.jpg',
      category: 'Full-Stack',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Azure DevOps'],
      demoUrl: '#',
      githubUrl: 'https://github.com/markewer/agile-dashboard'
    },
    {
      id: '3',
      title: 'SmartUI Framework',
      description: 'A modern UI framework implementing the SmartUI architecture pattern for rapid enterprise application development.',
      image: '/projects/smartui-framework.jpg',
      category: 'Framework',
      technologies: ['TypeScript', 'Vue.js', 'Vite', 'Storybook', 'Jest'],
      demoUrl: '#',
      githubUrl: 'https://github.com/markewer/smartui-framework'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in software architecture, full-stack development, and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <a 
                  href={project.demoUrl} 
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/projects" className="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
