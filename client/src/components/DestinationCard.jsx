import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <Link to={`/destinations/${destination._id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={destination.image || 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg'}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {destination.category || 'Destination'}
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
