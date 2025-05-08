import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { TowerControl as GameController } from 'lucide-react';

interface Game {
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  appid: number;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const SteamGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await supabase.functions.invoke('get-steam-games');
        if (data?.games) {
          setGames(data.games.slice(0, 3));
        }
      } catch (err) {
        setError('Failed to load Steam games');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {games.map((game) => (
        <div 
          key={game.appid}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="relative h-48 bg-gradient-to-br from-primary-600 to-accent-500">
            <img
              src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
              alt={game.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a
                href={`https://store.steampowered.com/app/${game.appid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center space-x-2 bg-primary-600 px-4 py-2 rounded-full hover:bg-primary-700 transition-colors"
              >
                <GameController size={20} />
                <span>View on Steam</span>
              </a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{game.name}</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Recent: {Math.round(game.playtime_2weeks / 60)}h</span>
              <span>Total: {Math.round(game.playtime_forever / 60)}h</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SteamGames;