import React from "react";
import { Mail, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";

// Import your committee member images
import Member1Img from "../assets/ProfilePic1.jpg";
import Member2Img from "../assets/ProfilePic2.jpg";
import Member3Img from "../assets/ProfilePic3.jpg";
import Member4Img from "../assets/ProfilePic4.jpg";

const Committee = () => {
  const members = [
    {
      name: "Sangram Patil",
      role: "President",
      achievements: "Excellent leadership",
      phone: "+91 9876543210",
      email: "sangram@example.com",
      image: Member1Img,
      color: "orange",
      hoverColor: "#FFE5D1",
    },
    {
      name: "Amruta Deshmukh",
      role: "Treasurer",
      achievements: "Financial expert",
      phone: "+91 9123456780",
      email: "amruta@example.com",
      image: Member2Img,
      color: "blue",
      hoverColor: "#D0E6FF",
    },
    {
      name: "Pranav Patil",
      role: "Coordinator",
      achievements: "Event management pro",
      phone: "+91 9988776655",
      email: "pranav@example.com",
      image: Member3Img,
      color: "green",
      hoverColor: "#D5F5E3",
    },
    {
      name: "Sneha Kulkarni",
      role: "Secretary",
      achievements: "Organizational skills",
      phone: "+91 9012345678",
      email: "sneha@example.com",
      image: Member4Img,
      color: "purple",
      hoverColor: "#EAD1FF",
    },
  ];

  return (
    <section id="committee" className="py-14 bg-slate-50">
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
            Meet the dedicated committee members who manage and support Amateur
            Roll Ball Club’s operations and events.
          </p>
        </motion.div>

        {/* Member cards */}
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden group transition-all"
              initial={{ opacity: 0, y: 50 }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ scale: 1.05, backgroundColor: member.hoverColor }}
            >
              <div className="p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-slate-200 group-hover:scale-110 transition-transform"
                />
                {/* Role Highlight */}
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-3 ${
                    member.color === "orange"
                      ? "bg-orange-500"
                      : member.color === "blue"
                      ? "bg-blue-500"
                      : member.color === "green"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                >
                  {member.role}
                </span>
                <h4 className="text-xl font-bold text-slate-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-orange-600 mb-3">
                  {member.achievements}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-slate-600">
                  <p className="flex items-center justify-center gap-2">
                    <Phone size={16} className="text-green-600" />
                    {member.phone}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail size={16} className="text-blue-600" />
                    {member.email}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Committee;
