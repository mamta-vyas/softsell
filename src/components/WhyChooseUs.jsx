import { motion as Motion } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaHandshake, FaThumbsUp } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600 mb-2" />,
    title: 'Secure & Private',
    description: 'Your data is encrypted and always handled with confidentiality.',
  },
  {
    icon: <FaRocket className="text-3xl text-blue-600 mb-2" />,
    title: 'Fast Process',
    description: 'Get valuations and payments within 24–48 hours.',
  },
  {
    icon: <FaHandshake className="text-3xl text-blue-600 mb-2" />,
    title: 'Trusted by Sellers',
    description: 'Rated highly by thousands of satisfied software resellers.',
  },
  {
    icon: <FaThumbsUp className="text-3xl text-blue-600 mb-2" />,
    title: 'Fair Pricing',
    description: 'We provide competitive, transparent offers for your licenses.',
  },
];

const WhyChooseUs = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="why"
      className="py-20 px-4 bg-white dark:bg-gray-900 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Why Choose SoftSell?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                {reason.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-2 mb-1">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
};

export default WhyChooseUs;
