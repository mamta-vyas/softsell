import React from "react";
import { motion as Motion } from "framer-motion";

const Hero = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20 px-4 md:px-10 text-center transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Sell Your Unused Software Licenses Easily
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Turn unused licenses into cash with SoftSell – a fast, secure platform
          to resell enterprise software.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white dark:text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
          Get a Quote
        </button>
      </div>
    </Motion.section>
  );
};

export default Hero;
