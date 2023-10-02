import React from 'react';
import YouTube from 'react-youtube';

interface YoutubePlayerProps {
  videoLink: string;
  className?: string; // Prop para classes CSS personalizadas
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoLink, className }) => {
  const onPlayerReady = (event: any) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const videoId = extractVideoIdFromLink(videoLink);

  const opts: any = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  // Classe CSS para centralizar o vídeo
  const centerVideoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <div className={className} style={centerVideoStyle}>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

// Helper function to extract video ID from YouTube link
const extractVideoIdFromLink = (link: string): string => {
  const videoIdMatch = link.match(/v=([a-zA-Z0-9_-]+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return videoIdMatch[1];
  }
  // Handle other types of YouTube links or invalid links
  return '';
};

export default YoutubePlayer;
