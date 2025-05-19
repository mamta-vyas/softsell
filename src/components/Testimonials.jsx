import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "IT Manager",
    company: "TechSolutions Inc.",
    feedback:
      "SoftSell made it so easy to sell our unused licenses. Quick valuation and smooth payout. Highly recommended!",
  },
  {
    name: "Riya Kapoor",
    role: "Operations Lead",
    company: "CloudCraft Pvt Ltd",
    feedback:
      "I was skeptical at first, but SoftSell offered a fair price and the process was hassle-free. Great service!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
              <p className="text-sm text-gray-500">
                {t.role}, {t.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
