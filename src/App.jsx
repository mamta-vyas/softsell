import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";

function App() {
 return (
    <div className="font-sans">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}


export default App;
