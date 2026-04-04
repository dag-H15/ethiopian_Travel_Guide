import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // Attempt to load previously saved favorites
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('favorites');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (error) {
          console.error('Failed to parse favorites from localStorage', error);
        }
      }
    }
    return [];
  });

  // Sync favorites with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id) => favorites.some((dest) => dest._id === id);

  const toggleFavorite = (destination) => {
    if (isFavorite(destination._id)) {
      setFavorites(favorites.filter((dest) => dest._id !== destination._id));
    } else {
      setFavorites([...favorites, destination]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((dest) => dest._id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
