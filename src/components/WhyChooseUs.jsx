import React from "react";
import { FaShieldAlt, FaRocket, FaHandshake, FaThumbsUp } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600 mb-2" />,
    title: "Secure & Private",
    description: "Your data is encrypted and always handled with confidentiality.",
  },
  {
    icon: <FaRocket className="text-3xl text-blue-600 mb-2" />,
    title: "Fast Process",
    description: "Get valuations and payments within 24–48 hours.",
  },
  {
    icon: <FaHandshake className="text-3xl text-blue-600 mb-2" />,
    title: "Trusted by Sellers",
    description: "Rated highly by thousands of satisfied software resellers.",
  },
  {
    icon: <FaThumbsUp className="text-3xl text-blue-600 mb-2" />,
    title: "Fair Pricing",
    description: "We provide competitive, transparent offers for your licenses.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="py-20 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                {reason.icon}
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-1">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
