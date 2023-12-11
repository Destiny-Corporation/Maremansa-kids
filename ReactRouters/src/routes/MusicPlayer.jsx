// MusicPlayer.jsx
import React, { useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById('myAudio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <audio id="myAudio" autoPlay loop>
        <source src="/assets/audio.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default MusicPlayer;
