// MusicContext.js
import React, { createContext, useState, useContext } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setPlaying] = useState(false);

  const togglePlay = () => {
    // Adicione lógica para tocar ou pausar a música aqui
    setPlaying(!isPlaying);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  return useContext(MusicContext);
};
