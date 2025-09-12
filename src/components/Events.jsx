import React from "react";
import { Calendar, MapPin, Clock, Trophy, Ticket } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "State Championship Finals",
      date: "Feb 15, 2024",
      time: "6:00 PM",
      location: "Central Sports Arena",
      type: "Championship",

      status: "Tickets Available",
    },
    {
      title: "Youth Development Camp",
      date: "Feb 22-24, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Thunder Training Center",
      type: "Training",

      status: "Early Bird",
    },
    {
      title: "Inter-Club Friendly Match",
      date: "Mar 02, 2024",
      time: "3:00 PM",
      location: "Downtown Sports Complex",
      type: "Friendly",

      status: "Open to All",
    },
    {
      title: "Annual Club Gala",
      date: "Mar 15, 2024",
      time: "7:00 PM",
      location: "Grand Hotel Ballroom",
      type: "Social",

      status: "Limited Seats",
    },
  ];

  const pastEvents = [
    {
      title: "Regional Tournament",
      date: "Jan 20, 2025",
      result: "1st Place",
      highlights: "Undefeated tournament run",
    },
    {
      title: "New Year Training Camp",
      date: "Jan 05-07, 2025",
      result: "Completed",
      highlights: "45 participants attended",
    },
    {
      title: "Winter League Finals",
      date: "Dec 18, 2024",
      result: "Champions",
      highlights: "Third consecutive title",
    },
  ];

  const getEventTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "championship":
        return "from-yellow-500 to-orange-500";
      case "training":
        return "from-blue-500 to-indigo-500";
      case "friendly":
        return "from-green-500 to-emerald-500";
      case "social":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Events & Schedule
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest matches, training sessions, and club
            events. Join us for exciting roll ball action and community
            activities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {event.title}
                      </h4>
                      <div
                        className={`inline-flex px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getEventTypeColor(
                          event.type
                        )} mb-3`}
                      >
                        {event.type}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">
                        {event.price}
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {event.status}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full bg-slate-800 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Ticket size={20} />
                    <span>Get Tickets</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events & Achievements */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Recent Achievements
              </h3>
            </div>

            <div className="space-y-6 mb-8">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-slate-800">
                      {event.title}
                    </h4>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.result}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-2">{event.date}</p>
                  <p className="text-sm text-slate-500 italic">
                    {event.highlights}
                  </p>
                </div>
              ))}
            </div>

            {/* Training Schedule */}
            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">
                Regular Training Schedule
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span>Monday & Wednesday</span>
                  <span className="text-orange-400">6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span>Friday</span>
                  <span className="text-orange-400">7:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span>Saturday (Juniors)</span>
                  <span className="text-orange-400">10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Sunday (All Teams)</span>
                  <span className="text-orange-400">2:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
