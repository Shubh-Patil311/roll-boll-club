// import React from "react";
// import { Calendar, MapPin, Clock, Trophy, Ticket } from "lucide-react";
// import { motion } from "framer-motion";

// const Events = () => {
//   const upcomingEvents = [
//     {
//       title: "State Championship Finals",
//       date: "Feb 15, 2024",
//       time: "6:00 PM",
//       location: "Central Sports Arena",
//       type: "Championship",
//       status: "Tickets Available",
//     },
//     {
//       title: "Youth Development Camp",
//       date: "Feb 22-24, 2024",
//       time: "9:00 AM - 4:00 PM",
//       location: "Thunder Training Center",
//       type: "Training",
//       status: "Early Bird",
//     },
//     {
//       title: "Inter-Club Friendly Match",
//       date: "Mar 02, 2024",
//       time: "3:00 PM",
//       location: "Downtown Sports Complex",
//       type: "Friendly",
//       status: "Open to All",
//     },
//     {
//       title: "Annual Club Gala",
//       date: "Mar 15, 2024",
//       time: "7:00 PM",
//       location: "Grand Hotel Ballroom",
//       type: "Social",
//       status: "Limited Seats",
//     },
//   ];

//   const pastEvents = [
//     {
//       title: "Regional Tournament",
//       date: "Jan 20, 2025",
//       result: "1st Place",
//       highlights: "Undefeated tournament run",
//     },
//     {
//       title: "New Year Training Camp",
//       date: "Jan 05-07, 2025",
//       result: "Completed",
//       highlights: "45 participants attended",
//     },
//     {
//       title: "Winter League Finals",
//       date: "Dec 18, 2024",
//       result: "Champions",
//       highlights: "Third consecutive title",
//     },
//   ];

//   const getEventTypeColor = (type) => {
//     switch (type.toLowerCase()) {
//       case "championship":
//         return "from-yellow-500 to-orange-500";
//       case "training":
//         return "from-blue-500 to-indigo-500";
//       case "friendly":
//         return "from-green-500 to-emerald-500";
//       case "social":
//         return "from-purple-500 to-pink-500";
//       default:
//         return "from-gray-500 to-slate-500";
//     }
//   };

//   return (
//     <section id="events" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
//             Events & Schedule
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Stay updated with our latest matches, training sessions, and club
//             events. Join us for exciting roll ball action and community
//             activities.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Upcoming Events */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.2 } },
//             }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center space-x-3 mb-8">
//               <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
//                 <Calendar size={24} className="text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-800">
//                 Upcoming Events
//               </h3>
//             </div>

//             <div className="space-y-6">
//               {upcomingEvents.map((event, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
//                   initial={{ opacity: 0, y: 50 }}
//                   variants={{
//                     visible: {
//                       opacity: 1,
//                       y: 0,
//                       transition: { duration: 0.7 },
//                     },
//                   }}
//                   whileHover={{ scale: 1.03 }}
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
//                         {event.title}
//                       </h4>
//                       <div
//                         className={`inline-flex px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getEventTypeColor(
//                           event.type
//                         )} mb-3`}
//                       >
//                         {event.type}
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-sm text-green-600 font-medium">
//                         {event.status}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center space-x-3 text-slate-600">
//                       <Calendar size={16} />
//                       <span>{event.date}</span>
//                     </div>
//                     <div className="flex items-center space-x-3 text-slate-600">
//                       <Clock size={16} />
//                       <span>{event.time}</span>
//                     </div>
//                     <div className="flex items-center space-x-3 text-slate-600">
//                       <MapPin size={16} />
//                       <span>{event.location}</span>
//                     </div>
//                   </div>

//                   <motion.button
//                     className="w-full bg-slate-800 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <Ticket size={20} />
//                     <span>Get Tickets</span>
//                   </motion.button>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Past Events & Achievements */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center space-x-3 mb-8">
//               <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
//                 <Trophy size={24} className="text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-800">
//                 Recent Achievements
//               </h3>
//             </div>

//             <div className="space-y-6 mb-8">
//               {pastEvents.map((event, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100"
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="text-lg font-bold text-slate-800">
//                       {event.title}
//                     </h4>
//                     <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       {event.result}
//                     </span>
//                   </div>
//                   <p className="text-slate-600 mb-2">{event.date}</p>
//                   <p className="text-sm text-slate-500 italic">
//                     {event.highlights}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Training Schedule */}
//             <motion.div
//               className="bg-slate-800 rounded-2xl p-8 text-white"
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-xl font-bold mb-6">
//                 Regular Training Schedule
//               </h4>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center py-2 border-b border-slate-700">
//                   <span>Monday & Wednesday</span>
//                   <span className="text-orange-400">6:00 PM - 8:00 PM</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-slate-700">
//                   <span>Friday</span>
//                   <span className="text-orange-400">7:00 PM - 9:00 PM</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-slate-700">
//                   <span>Saturday (Juniors)</span>
//                   <span className="text-orange-400">10:00 AM - 12:00 PM</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span>Sunday (All Teams)</span>
//                   <span className="text-orange-400">2:00 PM - 5:00 PM</span>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
import React from "react";
import { motion } from "framer-motion";

// Replace with your actual images
import img1 from "../assets/gallery3.jpeg";
import img2 from "../assets/RollBall.jpeg";
import img4 from "../assets/gallery4.jpeg";
import img5 from "../assets/gallery5.jpeg";
import img6 from "../assets/gallery6.jpeg";

const images = [img1, img2, img4, img5, img6];

// Stagger animation for container children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PhotoGallery = () => {
  return (
    <section
      id="PhotoGallery"
      className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Absolute Gallery Tag */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl shadow-md">
          <span className="font-bold text-sm uppercase tracking-wider">
            Gallery
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Capturing the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Best
            </span>{" "}
            Moments
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Dive into our world through these snapshots — pure passion, style,
            and motion captured in frames!
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured large image */}
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg lg:col-span-2 lg:row-span-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={images[0]}
              alt="Featured Roll Ball action"
              className="w-full h-full object-cover min-h-[400px]"
            />
            {/* Hover overlay only */}
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Regular gallery images */}
          {images.slice(1).map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg aspect-square"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 2}`}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay only */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
