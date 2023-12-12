// MusicContext.js
import { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(prevState => !prevState);
  };

  const value = {
    isPlaying,
    togglePlay,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
