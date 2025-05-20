import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We'll get in touch shortly.");
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">License Type</label>
            <select
              required
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
            >
              <option value="">Select License Type</option>
              <option value="Windows">Windows</option>
              <option value="Microsoft Office">Microsoft Office</option>
              <option value="Adobe Suite">Adobe Suite</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
