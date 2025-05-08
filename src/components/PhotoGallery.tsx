import React, { useEffect, useState } from 'react';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { Camera } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface Photo {
  public_id: string;
  secure_url: string;
  context?: {
    custom?: {
      caption?: string;
      alt?: string;
    }
  }
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize Cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }
  });

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-photos');
        
        if (error) throw error;
        
        if (data?.resources) {
          setPhotos(data.resources);
        } else {
          setError('No photos found');
        }
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError('Failed to load photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !photos.length) {
    return (
      <div className="text-center text-gray-600">
        <Camera size={48} className="mx-auto mb-4 text-gray-400" />
        <p>{error || 'No photos available at the moment.'}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <div 
          key={photo.public_id}
          className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <AdvancedImage
            cldImg={cld.image(photo.public_id).resize(fill().width(400).height(300))}
            plugins={[lazyload()]}
            className="w-full h-full object-cover"
            alt={photo.context?.custom?.alt || 'Photography portfolio image'}
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={photo.secure_url}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white text-center p-4"
            >
              <Camera className="mx-auto mb-2" size={24} />
              <p className="text-sm">View Full Size</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;