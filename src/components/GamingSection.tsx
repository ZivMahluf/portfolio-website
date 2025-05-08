import React from 'react';
import SteamGames from './SteamGames';

const GamingSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h2 className="section-title mb-2">My Gaming Activity</h2>
        <p className="text-tech-300">Check out my most played games on Steam in the past two weeks</p>
      </div>
      <SteamGames />
    </div>
  );
};

export default GamingSection;