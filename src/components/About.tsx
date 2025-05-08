import React from 'react';
import { Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title text-black">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start mt-16">
        <div className="md:w-1/3 mb-10 md:mb-0">
          <div className="relative">
            <div className="w-full max-w-md mx-auto overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/7055954/pexels-photo-7055954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Ziv Mahluf" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3 md:pl-16">
          <p className="text-lg text-gray-700 mb-6">
            As a passionate and experienced Unity Developer specializing in AR and VR development, 
            I have a proven track record of building projects from scratch and collaborating with design teams to deliver immersive experiences. 
            My portfolio includes projects in 2D, 3D, VR, AR, Web and more.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            I'm a former lecturer and researcher at the Hebrew University of Jerusalem, where I taught VR development
            and researched Redirected Walking techniques.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            My diverse background in software development, combined with a strong foundation in Computer Science,
            allows me to approach problems with both creative and technical perspectives.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="tech-badge bg-gray-800">Unity</span>
            <span className="tech-badge bg-gray-800">C#</span>
            <span className="tech-badge bg-gray-800">AR</span>
            <span className="tech-badge bg-gray-800">VR</span>
            <span className="tech-badge bg-gray-800">Oculus SDK</span>
            <span className="tech-badge bg-gray-800">Mobile Dev</span>
            <span className="tech-badge bg-gray-800">AR Foundation</span>
            <span className="tech-badge bg-gray-800">3D Modeling</span>
            <span className="tech-badge bg-gray-800">VRTK</span>
            <span className="tech-badge bg-gray-800">XR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;