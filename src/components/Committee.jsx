import React from "react";
import { Star, Medal } from "lucide-react";
import { motion } from "framer-motion";

// Import your committee member images
import Member1Img from "../assets/ProfilePic1.jpg";
import Member2Img from "../assets/ProfilePic2.jpg";
import Member3Img from "../assets/ProfilePic3.jpg";
import Member4Img from "../assets/ProfilePic4.jpg";

const Committee = () => {
  const committees = [
    {
      name: "Executive Committee",
      position: "President",
      achievements: "Led multiple successful events",
      members: 5,
      head: "Sangram Patil",
      color: "orange",
    },
    {
      name: "Finance Committee",
      position: "Treasurer",
      achievements: "Maintained transparent accounting",
      members: 4,
      head: "Amruta Deshmukh",
      color: "blue",
    },
    {
      name: "Events Committee",
      position: "Coordinator",
      achievements: "Organized championship events",
      members: 6,
      head: "Pranav Patil",
      color: "green",
    },
  ];

  const members = [
    {
      name: "Sangram Patil",
      role: "President",
      experience: "8 years",
      achievements: "Excellent leadership",
      image: Member1Img,
      color: "orange",
      hoverColor: "#FFE5D1",
    },
    {
      name: "Amruta Deshmukh",
      role: "Treasurer",
      experience: "6 years",
      achievements: "Financial expert",
      image: Member2Img,
      color: "blue",
      hoverColor: "#D0E6FF",
    },
    {
      name: "Pranav Patil",
      role: "Coordinator",
      experience: "5 years",
      achievements: "Event management pro",
      image: Member3Img,
      color: "green",
      hoverColor: "#D5F5E3",
    },
    {
      name: "Sneha Kulkarni",
      role: "Secretary",
      experience: "4 years",
      achievements: "Organizational skills",
      image: Member4Img,
      color: "purple",
      hoverColor: "#EAD1FF",
    },
  ];

  return (
    <section id="committee" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
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
              Committee
            </span>{" "}
            Members
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated committee members who manage and support Amature
            Roll Ball Club’s operations and events.
          </p>
        </motion.div>

        {/* Committees grid */}
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
          {committees.map((committee, index) => (
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
                  committee.color === "orange"
                    ? "#FFE5D1"
                    : committee.color === "blue"
                    ? "#D0E6FF"
                    : "#D5F5E3",
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${
                  committee.color === "orange"
                    ? "from-orange-500 to-red-500"
                    : committee.color === "blue"
                    ? "from-blue-500 to-indigo-500"
                    : "from-green-500 to-emerald-500"
                } rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Medal size={28} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {committee.name}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Head:</span>
                  <span className="font-medium text-slate-800">
                    {committee.head}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Members:</span>
                  <span className="font-medium text-slate-800">
                    {committee.members}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Achievement:</span>
                  <span className="font-medium text-green-600">
                    {committee.achievements}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Member spotlight */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Member Spotlight
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get to know the key members of our committee who make our club
              function smoothly.
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
            {members.map((member, index) => (
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
                  backgroundColor: member.hoverColor,
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-slate-200 group-hover:scale-110 transition-transform"
                />
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {member.name}
                </h4>
                <p className="text-slate-600 mb-2">{member.role}</p>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star size={16} className="text-yellow-500" />
                  <span className="text-sm text-slate-600">
                    {member.experience}
                  </span>
                </div>
                <p className="text-sm font-medium text-orange-600">
                  {member.achievements}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Committee;
