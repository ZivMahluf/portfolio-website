import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineItem {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-black before:to-gray-300">
      {items.map((item, index) => (
        <TimelineEntry key={index} item={item} index={index} />
      ))}
    </div>
  );
};

interface TimelineEntryProps {
  item: TimelineItem;
  index: number;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ item, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className="relative mb-12 last:mb-0"
      style={{ 
        opacity: inView ? 1 : 0, 
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` 
      }}
    >
      <div className="absolute -left-8 top-0 w-3 h-3 bg-black rounded-full"></div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
          <span className="text-sm font-semibold text-white px-3 py-1 rounded-full bg-black whitespace-nowrap ml-2">
            {item.period}
          </span>
        </div>
        
        <p className="text-black font-semibold mb-4">
          {item.company || item.institution}
        </p>
        
        <ul className="space-y-2">
          {item.description.map((desc, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 mt-1 text-black">•</span>
              <span className="text-gray-600">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;