import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import CommunityBanner from "./components/CommunityBanner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <CommunityBanner />
      <Footer />
    </main>
  );
};

export default App;
