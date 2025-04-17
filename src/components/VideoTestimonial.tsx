
import React from 'react';
import { Play } from 'lucide-react';

interface VideoTestimonialProps {
  thumbnailUrl: string;
  videoTitle: string;
  clientName: string;
  clientRole: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  thumbnailUrl,
  videoTitle,
  clientName,
  clientRole,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl card-hover">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={videoTitle}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/60">
          <button className="bg-white/90 hover:bg-white text-primary p-4 rounded-full transform transition-all duration-300 group-hover:scale-110">
            <Play className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h4 className="text-white font-bold mb-1">{clientName}</h4>
        <p className="text-white/80 text-sm">{clientRole}</p>
      </div>
    </div>
  );
};

export default VideoTestimonial;
