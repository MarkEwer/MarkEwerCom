import React from 'react';
import { cn } from '../lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Mark Ewer
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
                Senior Software Architect & Developer passionate about building scalable solutions 
                and sharing insights on software design patterns and agile methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/projects" className="btn-primary">
                  View My Work
                </a>
                <a href="/about" className="btn-secondary">
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white p-2">
                    <img 
                      src="/profile-image.jpg" 
                      alt="Mark Ewer Profile" 
                      className="w-full h-full rounded-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-400 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills/Technologies */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'TypeScript', 'React', 'Vue.js', 'Node.js', 
              '.NET', 'Azure', 'Microservices', 'CQRS'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
