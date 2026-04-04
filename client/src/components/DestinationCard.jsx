import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const DestinationCard = ({ destination }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(destination._id);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(destination);
  };

  return (
    <Link to={`/destinations/${destination._id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={destination.image || 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg'}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <div className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {destination.category || 'Destination'}
            </div>
            <button 
              onClick={handleToggleFavorite}
              className="bg-white dark:bg-gray-800 p-1.5 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle favorite"
            >
              <svg 
                className={`w-5 h-5 ${favorite ? 'text-red-500' : 'text-gray-400'}`} 
                fill={favorite ? "currentColor" : "none"} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {destination.name}
          </h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{destination.location || 'Ethiopia'}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
            {destination.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
