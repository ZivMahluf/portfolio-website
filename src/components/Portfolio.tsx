import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

interface PortfolioProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ activeFilter, setActiveFilter }) => {
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title">My Portfolio</h2>
      
      <div className="flex flex-wrap justify-center mt-8 mb-12">
        <button 
          onClick={() => setActiveFilter('All')} 
          className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveFilter('VR')} 
          className={`filter-btn ${activeFilter === 'VR' ? 'active' : ''}`}
        >
          VR
        </button>
        <button 
          onClick={() => setActiveFilter('AR')} 
          className={`filter-btn ${activeFilter === 'AR' ? 'active' : ''}`}
        >
          AR
        </button>
        <button 
          onClick={() => setActiveFilter('2D')} 
          className={`filter-btn ${activeFilter === '2D' ? 'active' : ''}`}
        >
          2D
        </button>
        <button 
          onClick={() => setActiveFilter('3D')} 
          className={`filter-btn ${activeFilter === '3D' ? 'active' : ''}`}
        >
          3D
        </button>
        <button 
          onClick={() => setActiveFilter('AI')} 
          className={`filter-btn ${activeFilter === 'AI' ? 'active' : ''}`}
        >
          AI
        </button>
        <button 
          onClick={() => setActiveFilter('Games')} 
          className={`filter-btn ${activeFilter === 'Games' ? 'active' : ''}`}
        >
          Games
        </button>
        <button 
          onClick={() => setActiveFilter('Web')} 
          className={`filter-btn ${activeFilter === 'Web' ? 'active' : ''}`}
        >
          Web
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;