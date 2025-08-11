// src/pages/ComingSoon.jsx

import { Button } from 'antd';
import { Link } from 'react-router-dom';
import comingSoonImage from '../assets/coming soon.jpg'; // Adjust the path as necessary

const ComingSoon = ({ title = "Coming Soon", subtitle = "We're working on this page. Please check back soon." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl max-w-3xl w-full p-6 md:p-12 text-center space-y-6">
        {/* Vector Illustration */}
        <img
          src={comingSoonImage}
          alt="Coming Soon Illustration"
          className="w-40 md:w-52 mx-auto"
        />

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>

        {/* Button */}
        <Link to="/">
          <Button
            type="primary"
            size="large"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1.5 mt-2 rounded-md"
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
