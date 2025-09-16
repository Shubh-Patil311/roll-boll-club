import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RB</span>
              </div> */}
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Roll Ball Club Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Amature Roll Ball </h3>
                <p className="text-slate-400"> Skating Club Satara</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Leading the way in roll ball excellence since 2012. Join our
              community of passionate athletes and experience the thrill of
              competitive roll ball in a supportive environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a
                href="#about"
                className="block text-slate-300 hover:text-orange-400 transition-colors"
              >
                About Us
              </a>
              <a
                href="#teams"
                className="block text-slate-300 hover:text-orange-400 transition-colors"
              >
                Our Teams
              </a>
              <a
                href="#PhotoGallery"
                className="block text-slate-300 hover:text-orange-400 transition-colors"
              >
                Photo Gallery
              </a>
              {/* <a
                href="#events"
                className="block text-slate-300 hover:text-orange-400 transition-colors"
              >
                Events
              </a> */}
              {/* <a
                href="#"
                className="block text-slate-300 hover:text-orange-400 transition-colors"
              >
                News & Updates
              </a> */}
              {/* <a
                href="#"
                className="block text-slate-300 hover:text-orange-400 transition-colors"
              >
                Gallery
              </a> */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-orange-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-slate-300">Gymkhana Sports Complex</p>
                  <p className="text-slate-400 text-sm">123 Champions Drive</p>
                  <p className="text-slate-400 text-sm">
                    Karve Nagar, MC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-400" />
                <span className="text-slate-300">9309716179</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-400" />
                <span className="text-slate-300">info@thunderrollball.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Training Schedule */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-8">
          <h4 className="text-lg font-bold mb-4">Training Schedule</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <div className="text-orange-400 font-medium text-sm mb-1">
                Monday & Wednesday
              </div>
              <div className="text-slate-300 text-sm">6:00 PM - 8:00 PM</div>
            </div>
            <div>
              <div className="text-orange-400 font-medium text-sm mb-1">
                Friday
              </div>
              <div className="text-slate-300 text-sm">7:00 PM - 9:00 PM</div>
            </div>
            <div>
              <div className="text-orange-400 font-medium text-sm mb-1">
                Saturday (Juniors)
              </div>
              <div className="text-slate-300 text-sm">10:00 AM - 12:00 PM</div>
            </div>
            <div>
              <div className="text-orange-400 font-medium text-sm mb-1">
                Sunday (All Teams)
              </div>
              <div className="text-slate-300 text-sm">2:00 PM - 5:00 PM</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 Amature Roll Ball Club. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
