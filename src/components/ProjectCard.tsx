import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Link {
  googlePlay?: string;
  appStore?: string;
  video?: string;
  article?: string;
  github?: string;
  website?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  links?: Link;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      <div
        ref={ref}
        className="group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 flex flex-col h-full"
        style={{ 
          opacity: inView ? 1 : 0, 
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' 
        }}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            {project.links && (
              <div className="flex gap-2">
                {project.links.googlePlay && (
                  <a 
                    href={project.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-full bg-green-500 text-white flex items-center hover:bg-green-600 transition-colors"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Google Play
                  </a>
                )}
                
                {project.links.appStore && (
                  <a 
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-full bg-blue-500 text-white flex items-center hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    App Store
                  </a>
                )}
                
                {project.links.video && (
                  <a 
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-full bg-red-500 text-white flex items-center hover:bg-red-600 transition-colors"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Video
                  </a>
                )}
                
                {project.links.article && (
                  <a 
                    href={project.links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-full bg-purple-500 text-white flex items-center hover:bg-purple-600 transition-colors"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Article
                  </a>
                )}

                {project.links.github && (
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-full bg-purple-500 text-white flex items-center hover:bg-purple-600 transition-colors"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Github
                  </a>
                )}

                {project.links.website && (
                  <a 
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 rounded-full bg-purple-500 text-white flex items-center hover:bg-purple-600 transition-colors"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Website
                  </a>
                )}
              </div>
            )}
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                >
                  {category}
                </span>
              ))}
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-black font-medium hover:text-gray-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <ProjectModal 
        project={isModalOpen ? project : null}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;