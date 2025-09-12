import React from "react";
import { Target, Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Professional Training",
      description:
        "Expert coaches with international experience guide players to reach their full potential.",
    },
    {
      icon: Users,
      title: "Team Spirit",
      description:
        "Build lasting friendships and develop teamwork skills in a supportive environment.",
    },
    {
      icon: Award,
      title: "Competitive Excellence",
      description:
        "Participate in local, state, and national tournaments with our championship teams.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Training sessions and matches scheduled to accommodate work and school commitments.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            About Thunder Roll Ball Club
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2012, Thunder Roll Ball Club has become the premier
            destination for roll ball enthusiasts. We combine traditional
            training methods with modern techniques to develop champions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              What is Roll Ball?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Roll ball is an exciting team sport that combines elements of
              basketball, netball, and handball. Played on roller skates, it
              requires speed, agility, and strategic thinking. Two teams of six
              players compete to score goals while skating at high speeds.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The sport originated in India and has gained popularity worldwide
              due to its fast-paced nature and inclusive gameplay. It's suitable
              for all ages and skill levels, making it perfect for recreational
              and competitive play.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-600">6 players per team on court</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Match Duration
                </h4>
                <p className="text-slate-600">2 periods of 15 minutes each</p>
              </div>
            </div>
          </div>

          {/* Right content - placeholder for sport image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target size={40} className="text-white" />
                </div>
                <p className="text-slate-600 font-medium">
                  {/* Roll Ball Action Shot */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
