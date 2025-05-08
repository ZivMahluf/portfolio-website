import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              {project.links && (
                <div className="flex gap-2">
                  {project.links.googlePlay && (
                    <a 
                      href={project.links.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1.5 rounded-full bg-green-500 text-white flex items-center hover:bg-green-600 transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      Google Play
                    </a>
                  )}
                  {project.links.appStore && (
                    <a 
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1.5 rounded-full bg-blue-500 text-white flex items-center hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      App Store
                    </a>
                  )}
                  {project.links.video && (
                    <a 
                      href={project.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1.5 rounded-full bg-red-500 text-white flex items-center hover:bg-red-600 transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      Video
                    </a>
                  )}
                  {project.links.article && (
                    <a 
                      href={project.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1.5 rounded-full bg-purple-500 text-white flex items-center hover:bg-purple-600 transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      Article
                    </a>
                  )}
                </div>
              )}
            </div>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.categories.map((category, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;