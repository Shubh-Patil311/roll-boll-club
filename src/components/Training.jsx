import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Clock, Star, CheckCircle } from "lucide-react";

const Training = () => {
  const programs = [
    {
      title: "Our Training Program",
      duration: "8 weeks",
      sessions: "2 per week",
      price: "Affordable Fee",
      level: "Beginner",
      description:
        "Perfect for newcomers to roll ball. Learn basic skating, ball handling, and game rules.",
      features: [
        "Basic skating techniques",
        "Fundamental ball skills",
        "Game rules and positions",
        "Safety equipment training",
        "Small group sessions (max 8 players)",
      ],
    },
  ];

  const coaches = [
    {
      name: "Patil",
      specialization: "Head Coach & Technical Director",
      experience: "15 years",
      credentials: "National Level 3 Certified",
      achievements: "Led 5 championship winning teams",
    },
    {
      name: "Deshmukh",
      specialization: "Youth Development Specialist",
      experience: "8 years",
      credentials: "Youth Coaching Certification",
      achievements: "Developed 20+ junior champions",
    },
    {
      name: "Kulkarni",
      specialization: "Fitness & Conditioning",
      experience: "12 years",
      credentials: "Sports Science Degree",
      achievements: "Injury prevention specialist",
    },
  ];

  const facilities = [
    {
      name: "Main Training Hall",
      description: "Professional size court with premium flooring",
      features: [
        "60m x 30m playing area",
        "Professional lighting",
        "Sound system",
      ],
    },
    {
      name: "Fitness Center",
      description: "Modern gym equipment for strength training",
      features: ["Cardio machines", "Free weights", "Functional training area"],
    },
    {
      name: "Recovery Zone",
      description: "Dedicated space for warm-up and cool-down",
      features: ["Massage tables", "Stretching area", "Ice bath facility"],
    },
  ];

  // Function to scroll to contact section
  const handleEnrollNow = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="training" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Training Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Develop your roll ball skills with our comprehensive training
            programs designed for all ages and skill levels. Expert coaching and
            world-class facilities await you.
          </p>
        </motion.div>

        {/* Training Program - Full Width */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white w-full lg:max-w-6xl mx-auto rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {program.title}
                </h3>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    program.level === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {program.level}
                </span>
              </div>

              <p className="text-slate-600 mb-6">{program.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-slate-50 rounded-xl">
                  <Clock className="mx-auto text-orange-600 mb-2" size={20} />
                  <div className="text-sm font-medium text-slate-800">
                    {program.duration}
                  </div>
                  <div className="text-xs text-slate-600">Duration</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl">
                  <Users className="mx-auto text-blue-600 mb-2" size={20} />
                  <div className="text-sm font-medium text-slate-800">
                    {program.sessions}
                  </div>
                  <div className="text-xs text-slate-600">Per Week</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl">
                  <Star className="mx-auto text-green-600 mb-2" size={20} />
                  <div className="text-sm font-medium text-slate-800">
                    {program.price}
                  </div>
                  <div className="text-xs text-slate-600">Total Cost</div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {program.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex items-center space-x-3 text-slate-600"
                  >
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={handleEnrollNow} // Scroll to contact section
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-transform"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Coaches & Facilities */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coaching Staff */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Expert Coaching Staff
            </h3>
            <div className="space-y-6">
              {coaches.map((coach, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Target size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800">
                        {coach.name}
                      </h4>
                      <p className="text-slate-600">{coach.specialization}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Experience:</span>
                      <span className="ml-2 font-medium text-slate-800">
                        {coach.experience}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Credentials:</span>
                      <span className="ml-2 font-medium text-slate-800">
                        {coach.credentials}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-sm text-green-600 font-medium">
                      {coach.achievements}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Facilities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              World-Class Facilities
            </h3>
            <div className="space-y-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    {facility.name}
                  </h4>
                  <p className="text-slate-600 mb-4">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h4>
              <p className="text-slate-300 mb-6">
                Join Amature roll ball Club today and take your game to the next
                level!
              </p>
              <motion.button
                onClick={handleEnrollNow} // Scroll to contact section
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Book Free Trial Session
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;
