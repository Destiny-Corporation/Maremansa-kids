// MusicPlayer.jsx
import React, { useState } from 'react';
import { MusicProvider } from "../routes/MusicContext.jsx";

const MusicPlayer = () => {
  const [isPlaying, setPlaying] = useMusic();

  const togglePlay = () => {
    const audio = document.getElementById('myAudio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!isPlaying);
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 999,
    background: '#48A3A9',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    width: '40px', // Ajuste a largura conforme necessário
    height: '40px', // Ajuste a altura conforme necessário
  };

  const imageStyle = {
    width: '20px',
    height: '20px',
    objectFit: 'contain', // Ajuste o valor conforme necessário ('cover', 'fill', 'contain', 'none', etc.)
    marginLeft: '-10px',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={togglePlay}>
        {isPlaying ? (
          <img
            src="/assets/volume.png"
            alt="Pause"
            style={imageStyle}
          />
        ) : (
          <img
            src="/assets/mute.png"
            alt="Play"
            style={imageStyle}
          />
        )}
      </button>
      <audio id="myAudio" loop>
        <source src="/assets/audio.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default MusicPlayer;

