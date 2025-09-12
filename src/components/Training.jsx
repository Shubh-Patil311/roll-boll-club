import React from "react";
import { Target, Users, Clock, Star, CheckCircle } from "lucide-react";

const Training = () => {
  const programs = [
    {
      title: "Beginner's Program",
      duration: "8 weeks",
      sessions: "2 per week",
      price: "Rs 2000",
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
    {
      title: "Intermediate Development",
      duration: "10 weeks",
      sessions: "3 per week",
      price: "Rs 3000",
      level: "Intermediate",
      description:
        "Advance your skills with tactical training, speed work, and competitive gameplay.",
      features: [
        "Advanced skating maneuvers",
        "Tactical game understanding",
        "Speed and agility training",
        "Match simulation practices",
        "Individual skill assessment",
      ],
    },
    {
      title: "Elite Competition",
      duration: "12 weeks",
      sessions: "4 per week",
      price: "Rs 5000",
      level: "Advanced",
      description:
        "High-intensity training for competitive players aiming for tournaments.",
      features: [
        "Professional coaching techniques",
        "Competition preparation",
        "Mental performance training",
        "Strength and conditioning",
        "Tournament entry opportunities",
      ],
    },
    {
      title: "Youth Academy",
      duration: "6 months",
      sessions: "2 per week",
      price: "Rs 8000",
      level: "Youth (8-16)",
      description:
        "Comprehensive development program for young athletes with focus on fun and skill building.",
      features: [
        "Age-appropriate training methods",
        "Character development focus",
        "Parental involvement sessions",
        "Youth league participation",
        "Progress tracking and reports",
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

  return (
    <section id="training" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Training Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Develop your roll ball skills with our comprehensive training
            programs designed for all ages and skill levels. Expert coaching and
            world-class facilities await you.
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {program.title}
                </h3>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    program.level === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : program.level === "Intermediate"
                      ? "bg-blue-100 text-blue-800"
                      : program.level === "Advanced"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {program.level}
                </span>
              </div>

              <p className="text-slate-600 mb-6">{program.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
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

              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coaching Staff */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Expert Coaching Staff
            </h3>
            <div className="space-y-6">
              {coaches.map((coach, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
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
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              World-Class Facilities
            </h3>
            <div className="space-y-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
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
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h4>
              <p className="text-slate-300 mb-6">
                Join Thunder Roll Ball Club today and take your game to the next
                level!
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-xl font-semibold transition-colors">
                Book Free Trial Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
