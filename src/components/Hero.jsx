import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4 md:px-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Sell Your Unused Software Licenses Easily
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Turn unused licenses into cash with SoftSell – a fast, secure platform to resell enterprise software.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;
