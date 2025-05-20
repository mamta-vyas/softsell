import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import ChatBot from "./components/ChatBot";  // Import Chatbot

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ChatBot />  
   <DarkModeToggle />
    </div>
  );
}

export default App;
