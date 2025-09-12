import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join Thunder Roll Ball Club? Have questions about our
            programs? We'd love to hear from you and help you get started on
            your roll ball journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Our Location
                  </h4>
                  <p className="text-slate-600">Gymkhana Sports Complex</p>
                  <p className="text-slate-600">Karve Nagar, Pune 411052</p>
                  <p className="text-slate-600">Audhumbet City</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Phone Numbers
                  </h4>
                  <p className="text-slate-600">Main Office: 9309716179</p>
                  <p className="text-slate-600">
                    Training Inquiries: 9309716179
                  </p>
                  <p className="text-slate-600">Emergency: 9309716179</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Email Addresses
                  </h4>
                  <p className="text-slate-600">info@thunderrollball.com</p>
                  <p className="text-slate-600">training@thunderrollball.com</p>
                  <p className="text-slate-600">events@thunderrollball.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Office Hours
                  </h4>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 8:00 PM
                  </p>
                  <p className="text-slate-600">Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-800 mb-4">
                Follow Us on Social Media
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Twitter size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="+91"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  I'm Interested In
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="beginner">Beginner Training Program</option>
                  <option value="intermediate">Intermediate Development</option>
                  <option value="elite">Elite Competition Training</option>
                  <option value="youth">Youth Academy</option>
                  <option value="membership">General Membership</option>
                  <option value="events">Events & Tournaments</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us more about your interest..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 bg-slate-200 rounded-3xl h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-slate-500 mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Interactive Map</p>
            <p className="text-sm text-slate-500">
              Gymkhana Sports Complex Location
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
