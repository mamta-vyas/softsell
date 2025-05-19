import React from "react";
import { FaUpload, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-3xl text-blue-600 mb-2" />,
    title: "Upload License",
    description: "Share your unused software license details securely.",
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-600 mb-2" />,
    title: "Get Valuation",
    description: "We evaluate your license and offer you a fair price.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-blue-600 mb-2" />,
    title: "Get Paid",
    description: "Receive payment quickly via your preferred method.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
