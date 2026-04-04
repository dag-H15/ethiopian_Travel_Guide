import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">🇪🇹</span>
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                Ethiopian Travel
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
              } hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium`}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className={`${
                isActive('/destinations') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
              } hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium`}
            >
              Destinations
            </Link>
            <Link
              to="/profile"
              className={`${
                isActive('/profile') ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
              } hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium`}
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors font-medium"
            >
              Login
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg ${
                isActive('/') ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg ${
                isActive('/destinations') ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              Destinations
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg ${
                isActive('/profile') ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              Profile
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 text-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
