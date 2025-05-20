import React from "react";
import logo from "../assets/sslogo.png"; // adjust the path as needed

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        {/* Logo with image and text */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="SoftSell Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">SoftSell</span>
        </div>

        {/* Nav links */}
        <nav className="flex-grow hidden md:flex justify-center space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          <a href="#how" className="hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
          <a href="#why" className="hover:text-blue-600 dark:hover:text-blue-400">Why Choose Us</a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
