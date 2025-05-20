import { FaUpload, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUpload className="text-3xl text-blue-600 mb-2" />,
    title: 'Upload License',
    description: 'Share your unused software license details securely.',
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-600 mb-2" />,
    title: 'Get Valuation',
    description: 'We evaluate your license and offer you a fair price.',
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-blue-600 mb-2" />,
    title: 'Get Paid',
    description: 'Receive payment quickly via your preferred method.',
  },
];

const HowItWorks = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="how"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-2 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
};

export default HowItWorks;
