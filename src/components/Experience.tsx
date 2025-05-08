import React from 'react';
import Timeline from './Timeline';
import { experiences } from '../data/experience';
import { education } from '../data/education';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-black">Experience & Education</h2>
      
      <div className="flex flex-col md:flex-row mt-16">
        <div className="md:w-1/2 md:pr-8 mb-12 md:mb-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-3">
              <span className="text-sm">1</span>
            </span>
            Work Experience
          </h3>
          
          <Timeline items={experiences} />
        </div>
        
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-3">
              <span className="text-sm">2</span>
            </span>
            Education
          </h3>
          
          <Timeline items={education} />
        </div>
      </div>
    </div>
  );
};

export default Experience;