import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Training from "./components/Training";
import Footer from "./components/Footer";
import Teams from "./components/Teams";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <Hero />
        <About />
        <Teams />
        <Events />
        <Training />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
