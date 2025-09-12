import React from "react";
import { Star, Medal, Users } from "lucide-react";

const Teams = () => {
  const teams = [
    {
      name: "Thunder Seniors",
      category: "Men's Senior Team",
      achievements: "State Champions 2024",
      players: 12,
      captain: "Shubham Patil",
      color: "orange",
    },
    {
      name: "Lightning Ladies",
      category: "Women's Senior Team",
      achievements: "Regional Champions 2024",
      players: 10,
      captain: "Amruta Deshmukh",
      color: "blue",
    },
    {
      name: "Storm Juniors",
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
    },
    {
      name: "Amruta Deshmukh",
      position: "Wing Defense",
      team: "Lightning Ladies",
      experience: "6 years",
      achievements: "Best Defender 2023",
    },
    {
      name: "Pranav Patil",
      position: "Goal Shooter",
      team: "Storm Juniors",
      experience: "3 years",
      achievements: "Rising Star 2024",
    },
    {
      name: "Sneha Kulkarni",
      position: "Midfielder",
      team: "Lightning Ladies",
      experience: "5 years",
      achievements: "Captain's Award",
    },
  ];

  return (
    <section id="teams" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our Championship Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the talented athletes who represent Thunder Roll Ball Club in
            competitions across the state and beyond.
          </p>
        </div>

        {/* Teams grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
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
              <p className="text-slate-600 mb-4">{team.category}</p>

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

              <button className="w-full bg-slate-800 text-white py-3 rounded-xl hover:bg-slate-700 transition-colors font-medium">
                View Team Details
              </button>
            </div>
          ))}
        </div>

        {/* Player spotlight */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Player Spotlight
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get to know some of our star players who make Thunder Roll Ball
              Club a force to be reckoned with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {players.map((player, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users size={32} className="text-slate-600" />
                </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
