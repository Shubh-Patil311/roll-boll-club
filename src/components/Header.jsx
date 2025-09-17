import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function for Join Now button
  const handleJoinNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function for Logo click
  const handleLogoClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Top contact bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>7947126892</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@rollballclub.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>9/C Kesarkar Peth, Satara</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            onClick={handleLogoClick}
          >
            <motion.img
              src={logo}
              alt="Roll Ball Club Logo"
              className="w-14 h-14 object-contain"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
            />
            <div>
              <motion.h1
                className="text-2xl font-bold text-slate-800"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Amature Roll Ball
              </motion.h1>
              <motion.p
                className="text-sm text-slate-600"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Skating Club Satara
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#teams"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
            >
              Teams
            </a>
            <a
              href="#PhotoGallery"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
            >
              Photo Gallery
            </a>
            {/* <a
              href="#training"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
            >
              Training
            </a> */}
            <a
              href="#contact"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
            >
              Contact
            </a>
            <button
              onClick={handleJoinNow}
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors font-medium"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                className="text-slate-700 hover:text-orange-600 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-orange-600 font-medium"
              >
                About
              </a>
              <a
                href="#teams"
                className="text-slate-700 hover:text-orange-600 font-medium"
              >
                Teams
              </a>
              {/* <a
                href="#events"
                className="text-slate-700 hover:text-orange-600 font-medium"
              >
                Events
              </a> */}
              <a
                href="#training"
                className="text-slate-700 hover:text-orange-600 font-medium"
              >
                Training
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-orange-600 font-medium"
              >
                Contact
              </a>
              <button
                onClick={handleJoinNow}
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors font-medium w-fit"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
