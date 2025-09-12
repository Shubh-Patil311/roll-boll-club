import React from "react";
import { Play, Users, Trophy, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Master the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Art
              </span>{" "}
              of Roll Ball
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Join Thunder Roll Ball Club and experience the thrill of this
              dynamic sport. Train with professionals, compete at the highest
              level, and be part of a winning legacy.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Users size={20} />
                <span>Join the Club</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <Play size={20} />
                <span>Watch Highlights</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  150+
                </div>
                <div className="text-slate-300">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25</div>
                <div className="text-slate-300">Championships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">12</div>
                <div className="text-slate-300">Years Legacy</div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="relative">
            {/* Hero Card */}
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center border border-white/20">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Trophy size={48} className="text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Champions 2024</h3>
                <p className="text-slate-300">
                  State Roll Ball Championship Winners
                </p>
              </div>
            </div>

            {/* Floating Card - Bottom Left */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Next Match</div>
                  <div className="text-sm text-slate-600">SEP 15, 2025</div>
                </div>
              </div>
            </div>

            {/* Floating Card - Top Right */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Trophy size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Win Rate</div>
                  <div className="text-sm text-slate-600">87% This Season</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
