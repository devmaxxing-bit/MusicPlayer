import { useState, useEffect } from 'react';

const TRACKS = [
  {
    id: 1,
    title: "Pagan Moon",
    artist: "Satanic Warmaster",
    cover: "https://unsplash.com",
  },
  {
    id: 2,
    title: "The Somberlain",
    artist: "Dissection",
    cover: "https://unsplash.com",
  },
  {
    id: 3,
    title: "Zombie Ritual",
    artist: "Death",
    cover: "https://unsplash.com",
  }
];

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const currentTrack = TRACKS[currentTrackIndex];

  useEffect(() => {
    console.log("Player started");

    return () => {
      console.log("Player closed");
    };
  }, []);

  useEffect(() => {
    console.log(`Track changed to: ${currentTrack.title} by ${currentTrack.artist}`);
  }, [currentTrackIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % TRACKS.length);
    setIsPlaying(true);
    setProgress(0);
  };

  return (
    <div>
      <div>
        <img src={currentTrack.cover} alt={currentTrack.title} />
      </div>
      
      <h2>{currentTrack.title}</h2>
      <p>{currentTrack.artist}</p>
      
      <div>
        <progress value={progress} max="100"></progress>
        <span>{progress}%</span>
      </div>
      
      <div>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button onClick={nextTrack}>
          Следующий трек
        </button>
      </div>
    </div>
  );
}
