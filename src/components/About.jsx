import React from "react";
import { Target, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import RollBallImg from "../assets/rollboll.gif";

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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            About Thunder Roll Ball Club
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2012, Thunder Roll Ball Club has become the premier
            destination for roll ball enthusiasts. We combine traditional
            training methods with modern techniques to develop champions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
              <motion.div
                className="bg-orange-50 p-4 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-semibold text-slate-800 mb-2">Team Size</h4>
                <p className="text-slate-600">6 players per team on court</p>
              </motion.div>
              <motion.div
                className="bg-blue-50 p-4 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-semibold text-slate-800 mb-2">
                  Match Duration
                </h4>
                <p className="text-slate-600">2 periods of 15 minutes each</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Roll Ball Action Shot */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={RollBallImg}
                alt="Roll Ball Action Shot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group"
              initial={{ opacity: 0, y: 40 }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.05 }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
