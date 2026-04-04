import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center py-20 px-4">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg" 
            alt="Ethiopia Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
            Discover the Beauty of Ethiopia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Explore ancient history, stunning landscapes, and vibrant culture
          </p>
          <Link
            to="/destinations"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Visit Ethiopia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Rich History
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore ancient civilizations, rock-hewn churches, and UNESCO World Heritage sites that tell the story of one of Africa's oldest nations.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Natural Wonders
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                From the stunning Simien Mountains to the otherworldly Danakil Depression, experience landscapes unlike anywhere else on Earth.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Vibrant Culture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Immerse yourself in unique traditions, festivals, and the warm hospitality of the Ethiopian people. Experience authentic coffee ceremonies and traditional cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Ethiopian Travel Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg"
                alt="Ethiopian landscape"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Ethiopian Travel Guide is your comprehensive resource for discovering the wonders of Ethiopia. We provide detailed information about destinations, cultural insights, and practical travel tips to help you plan your perfect Ethiopian adventure.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Whether you're interested in ancient history, breathtaking landscapes, or vibrant culture, our guide will help you explore the best that Ethiopia has to offer.
              </p>
              <Link
                to="/destinations"
                className="inline-block px-6 py-3 bg-white text-primary-600 dark:bg-primary-600 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-primary-700 transition-colors"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have questions about traveling to Ethiopia? We're here to help you plan your journey.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white mb-6"
            ></textarea>
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors w-full md:w-auto">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
