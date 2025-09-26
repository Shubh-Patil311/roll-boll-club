// import React, { useRef } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   Facebook,
//   Instagram,
//   Twitter,
// } from "lucide-react";
// import { useForm } from "@formspree/react";

// const Contact = () => {
//   const [state, handleSubmit] = useForm("xzzawkze");
//   const formRef = useRef(null);

//   const onSubmit = async (e) => {
//     await handleSubmit(e);
//     if (state.succeeded && formRef.current) {
//       formRef.current.reset(); // reset fields after success
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Ready to join Thunder Roll Ball Club? Have questions about our
//             programs? We'd love to hear from you and help you get started on
//             your roll ball journey.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-bold text-slate-800 mb-8">
//               Contact Information
//             </h3>

//             <div className="space-y-6 mb-8">
//               {/* Location */}
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <MapPin size={24} className="text-orange-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-slate-800 mb-1">
//                     Our Location
//                   </h4>
//                   <p className="text-slate-600">Gymkhana Sports Complex</p>
//                   <p className="text-slate-600">Karve Nagar, Pune 411052</p>
//                   <p className="text-slate-600">Audhumber City</p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Phone size={24} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-slate-800 mb-1">
//                     Phone Numbers
//                   </h4>
//                   <p className="text-slate-600">Main Office: 9309716179</p>
//                   <p className="text-slate-600">
//                     Training Inquiries: 9309716179
//                   </p>
//                   <p className="text-slate-600">Emergency: 9309716179</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Mail size={24} className="text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-slate-800 mb-1">
//                     Email Addresses
//                   </h4>
//                   <p className="text-slate-600">info@thunderrollball.com</p>
//                   <p className="text-slate-600">training@thunderrollball.com</p>
//                   <p className="text-slate-600">events@thunderrollball.com</p>
//                 </div>
//               </div>

//               {/* Hours */}
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Clock size={24} className="text-purple-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-slate-800 mb-1">
//                     Office Hours
//                   </h4>
//                   <p className="text-slate-600">
//                     Monday - Friday: 9:00 AM - 8:00 PM
//                   </p>
//                   <p className="text-slate-600">Saturday: 8:00 AM - 6:00 PM</p>
//                   <p className="text-slate-600">Sunday: 10:00 AM - 4:00 PM</p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="bg-slate-50 rounded-2xl p-6">
//               <h4 className="font-semibold text-slate-800 mb-4">
//                 Follow Us on Social Media
//               </h4>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
//                 >
//                   <Facebook size={20} className="text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
//                 >
//                   <Instagram size={20} className="text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center hover:bg-sky-600 transition-colors"
//                 >
//                   <Twitter size={20} className="text-white" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-slate-50 rounded-3xl p-8">
//             <h3 className="text-2xl font-bold text-slate-800 mb-6">
//               Send us a Message
//             </h3>

//             <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                     placeholder="Your first name"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                     placeholder="Your last name"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-slate-700 mb-2"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-slate-700 mb-2"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                   placeholder="+91"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="interest"
//                   className="block text-sm font-medium text-slate-700 mb-2"
//                 >
//                   I'm Interested In
//                 </label>
//                 <select
//                   id="interest"
//                   name="interest"
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                 >
//                   <option value="">Select an option</option>
//                   <option value="beginner">Beginner Training Program</option>
//                   <option value="intermediate">Intermediate Development</option>
//                   <option value="elite">Elite Competition Training</option>
//                   <option value="youth">Youth Academy</option>
//                   <option value="membership">General Membership</option>
//                   <option value="events">Events & Tournaments</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-slate-700 mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
//                   placeholder="Tell us more about your interest..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={state.submitting}
//                 className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//               >
//                 <Send size={20} />
//                 <span>{state.submitting ? "Sending..." : "Send Message"}</span>
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Google Map Embed */}
//         <div className="mt-16 rounded-3xl overflow-hidden shadow-lg h-96">
//           <iframe
//             title="Company Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.742468246312!2d73.70717537402398!3d18.593440482514325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3db4b235679%3A0x3ad99720044fad30!2sGTasterix%20IT%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1757749303853!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useRef, useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzawkze");
  const formRef = useRef(null);

  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.interest) {
      newErrors.interest = "Please select an option";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    await handleSubmit(e);
  };

  // Reset form when submission is successful
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Touch
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join Amature Roll Ball Club? Have questions about our
            programs? We'd love to hear from you and help you get started on
            your roll ball journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Our Location
                  </h4>
                  <p className="text-slate-600">
                    Amature Roll Ball Association,
                  </p>
                  <p className="text-slate-600">9/C Kesarkar Peth </p>
                  <p className="text-slate-600">Satara, 415001 </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Phone Numbers
                  </h4>
                  <p className="text-slate-600">Main Office: 7947126892</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">
                    Email Addresses
                  </h4>
                  <p className="text-slate-600">info@thunderrollball.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-800 mb-4">
                Follow Us on Social Media
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/p/Ameya-skating-club-satara-100068504305646/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center 
                 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/satara_rollball?igsh=MWhmaTltbjZoOXNjYQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl 
                 flex items-center justify-center hover:shadow-lg transform 
                 transition-transform duration-300 hover:scale-110"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@amaturerollball2527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center 
                 hover:bg-red-600 transform transition-transform duration-300 hover:scale-110"
                >
                  <Youtube size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Contact Us
            </h3>

            <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.firstName ? "border-red-500" : "border-slate-300"
                    } focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.lastName ? "border-red-500" : "border-slate-300"
                    } focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? "border-red-500" : "border-slate-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone ? "border-red-500" : "border-slate-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                  placeholder="+91"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Interest */}
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  I'm Interested In
                </label>
                <select
                  id="interest"
                  name="interest"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.interest ? "border-red-500" : "border-slate-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors`}
                >
                  <option value="">Select an option</option>
                  <option value="beginner">Beginner Training Program</option>
                  <option value="intermediate">Intermediate Development</option>
                  <option value="elite">Elite Competition Training</option>
                  <option value="youth">Youth Academy</option>
                  <option value="membership">General Membership</option>
                  <option value="events">Events & Tournaments</option>
                  <option value="other">Other</option>
                </select>
                {errors.interest && (
                  <p className="text-red-500 text-sm mt-1">{errors.interest}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? "border-red-500" : "border-slate-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none`}
                  placeholder="Tell us more about your interest..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{state.submitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg h-96">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.392351986021!2d74.0058903739961!3d17.681499883256706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239ed116f3f8d%3A0x878d4eaf89920fb2!2sM2J5%2BJ98%2C%209%2C%20Ajinkyatara%20Fort%20Rd%2C%20Shivnery%20Colony%2C%20Radhika%20Nagar%2C%20Shahunagar%2C%20Satara%2C%20Maharashtra%20415001!5e1!3m2!1sen!2sin!4v1758025687196!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
