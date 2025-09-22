import React from "react";
import { Star, Medal } from "lucide-react";
import { motion } from "framer-motion";

// Import your player images
import ShubhamImg from "../assets/ProfilePic2.jpg";
import AmrutaImg from "../assets/ProfilePic1.jpg";
import PranavImg from "../assets/ProfilePic4.jpg";
import SnehaImg from "../assets/ProfilePic3.jpg";

const Teams = () => {
  const teams = [
    {
      name: "Men's Senior Team",
      category: "Men's Senior Team",
      achievements: "State Champions 2024",
      players: 12,
      captain: "Shubham Patil",
      color: "orange",
    },
    {
      name: "Women's Senior Team",
      category: "Women's Senior Team",
      achievements: "Regional Champions 2024",
      players: 10,
      captain: "Amruta Deshmukh",
      color: "blue",
    },
    {
      name: "Junior Team (U-18)",
      category: "Junior Team (U-18)",
      achievements: "Youth League Winners",
      players: 15,
      captain: "Pranav Patil",
      color: "green",
    },
  ];

  const players = [
    {
      name: "Shubham Patil",
      position: "Center Forward",
      team: "Thunder Seniors",
      experience: "8 years",
      achievements: "MVP 2024",
      image: ShubhamImg,
      color: "orange",
      hoverColor: "#FFE5D1",
    },
    {
      name: "Amruta Deshmukh",
      position: "Wing Defense",
      team: "Lightning Ladies",
      experience: "6 years",
      achievements: "Best Defender 2023",
      image: AmrutaImg,
      color: "blue",
      hoverColor: "#D0E6FF",
    },
    {
      name: "Pranav Patil",
      position: "Goal Shooter",
      team: "Storm Juniors",
      experience: "3 years",
      achievements: "Rising Star 2024",
      image: PranavImg,
      color: "green",
      hoverColor: "#D5F5E3",
    },
    {
      name: "Sneha Kulkarni",
      position: "Midfielder",
      team: "Lightning Ladies",
      experience: "5 years",
      achievements: "Captain's Award",
      image: SnehaImg,
      color: "purple",
      hoverColor: "#EAD1FF",
    },
  ];

  return (
    <section id="teams" className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Championship
            </span>{" "}
            Teams
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the talented athletes who represent Amature roll ball Club in
            competitions across the state and beyond.
          </p>
        </motion.div>

        {/* Teams grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {teams.map((team, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 40 }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor:
                  team.color === "orange"
                    ? "#FFE5D1"
                    : team.color === "blue"
                    ? "#D0E6FF"
                    : "#D5F5E3",
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${
                  team.color === "orange"
                    ? "from-orange-500 to-red-500"
                    : team.color === "blue"
                    ? "from-blue-500 to-indigo-500"
                    : "from-green-500 to-emerald-500"
                } rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Medal size={28} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {team.name}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Captain:</span>
                  <span className="font-medium text-slate-800">
                    {team.captain}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Players:</span>
                  <span className="font-medium text-slate-800">
                    {team.players}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Latest Achievement:</span>
                  <span className="font-medium text-green-600">
                    {team.achievements}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Player spotlight */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Player Spotlight
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get to know some of our star players who make Amature roll ball
              Club a force to be reckoned with.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: true }}
          >
            {players.map((player, index) => (
              <motion.div
                key={index}
                className="text-center rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6 },
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: player.hoverColor,
                }}
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-slate-200 group-hover:scale-110 transition-transform"
                />
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {player.name}
                </h4>
                <p className="text-slate-600 mb-2">{player.position}</p>
                <p className="text-sm text-slate-500 mb-2">{player.team}</p>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star size={16} className="text-yellow-500" />
                  <span className="text-sm text-slate-600">
                    {player.experience}
                  </span>
                </div>
                <p className="text-sm font-medium text-orange-600">
                  {player.achievements}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;
