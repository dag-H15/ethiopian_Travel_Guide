import { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    fetchDestinations();
  }, []);

  useEffect(() => {
    filterDestinations();
  }, [searchTerm, category, city, destinations]);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      setDestinations([]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      setLoading(false);
    }
  };

  const filterDestinations = () => {
    let filtered = [...destinations];

    if (searchTerm) {
      filtered = filtered.filter((dest) =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((dest) => dest.category === category);
    }

    if (city) {
      filtered = filtered.filter((dest) =>
        dest.location.toLowerCase().includes(city.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Ethiopian Destinations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover amazing places across Ethiopia
          </p>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          city={city}
          setCity={setCity}
        />

        {loading ? (
          <Loader />
        ) : filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination._id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No destinations found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {destinations.length === 0
                ? 'Connect your API to see destinations'
                : 'Try adjusting your search filters'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
