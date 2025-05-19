import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          SoftSell
        </div>

        {/* Nav Links (can add later if needed) */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#how" className="hover:text-blue-600">How It Works</a>
          <a href="#why" className="hover:text-blue-600">Why Choose Us</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Get a Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
