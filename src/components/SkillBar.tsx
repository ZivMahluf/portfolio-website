import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, index }) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, index]);

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      style={{ 
        opacity: inView ? 1 : 0, 
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` 
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="font-medium text-gray-600">{width}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
          style={{ 
            width: `${width}%`, 
            transition: 'width 1s ease-out' 
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;