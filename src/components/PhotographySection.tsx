import React from 'react';
import PhotoGallery from './PhotoGallery';

const PhotographySection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h2 className="section-title text-black mb-2">Photography</h2>
        <p className="text-gray-600">Capturing moments through my lens</p>
      </div>
      <PhotoGallery />
    </div>
  );
};

export default PhotographySection;