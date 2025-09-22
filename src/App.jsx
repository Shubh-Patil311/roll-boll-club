import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
// import Events from "./components/";
import Contact from "./components/Contact";
import Training from "./components/Training";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import PhotoGallery from "./components/PhotoGallery";
import "./App.css";
import Events from "./components/Events";
import Committee from "./components/committee";

function App() {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main content with top padding so Hero is visible */}
      <main className="pt-[120px]">
        <Hero />
        <About />
        <Teams />
        <PhotoGallery />
        <Events />
        <Training />
        <Committee />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
