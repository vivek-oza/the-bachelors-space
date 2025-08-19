"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import img2 from "../assets/2.avif";
import img4 from "../assets/4.avif";
import img6 from "../assets/6.avif";
import img9 from "../assets/9.avif";

import {
  Phone,
  MapPin,
  Star,
} from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Kumar",
    location: "Engineering Student",
    rating: 5,
    comment:
      "Amazing facilities and great community. The yearly plan saved me a lot of money!",
  },
  {
    name: "Priya Sharma",
    location: "Medical Student",
    rating: 5,
    comment:
      "Safe, clean, and convenient. The monthly flexibility was perfect for my schedule.",
  },
  {
    name: "Arjun Patel",
    location: "Working Professional",
    rating: 5,
    comment:
      "Best hostel experience! All inclusive pricing with no hidden costs.",
  },
];

export function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    planType: "",
    roomSharing: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="location"
      className="relative py-10 lg:py-28 xl:py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden"
    >
      {/* Scattered Images */}
      <div className="absolute inset-0 pointer-events-none z-5 hidden md:block">
        <motion.img
          src={img2}
          alt=""
          className="absolute top-16 left-16 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 opacity-50"
          animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={img4}
          alt=""
          className="absolute top-24 right-20 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 opacity-40"
          animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.img
          src={img6}
          alt=""
          className="absolute top-1/2 left-8 w-14 h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 opacity-60"
          animate={{ rotate: [0, 20, -20, 0], x: [0, 10, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.img
          src={img9}
          alt=""
          className="absolute top-2/3 right-12 w-18 h-18 opacity-45"
          animate={{ rotate: [0, -10, 10, 0], y: [0, 8, -8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[2560px] mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-10 lg:mb-14 xl:mb-18"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-3 lg:mb-5">
              <Star className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
              <span className="font-medium font-body text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-2xl">Get Started</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white mb-4 lg:mb-6 font-heading">
              Ready to Join Our
              <span className="block bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent font-serif italic py-1">
                Community?
              </span>
            </h2>
            <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto font-body">
              Take the first step towards comfortable, affordable, and vibrant
              hostel living.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-10 mb-14">
            {/* Application Form */}
            {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
                <div className="flex items-center gap-3">
                  <Send className="w-6 h-6 text-purple-900" />
                  <h3 className="text-2xl font-heading text-purple-900">Apply Now</h3>
                </div>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Plan Type</label>
                      <select
                        value={formData.planType}
                        onChange={(e) => setFormData({...formData, planType: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 outline-none bg-white"
                      >
                        <option value="">Select plan type</option>
                        <option value="yearly">Yearly Plan</option>
                        <option value="monthly">Monthly Plan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Room Sharing</label>
                      <select
                        value={formData.roomSharing}
                        onChange={(e) => setFormData({...formData, roomSharing: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 outline-none bg-white"
                      >
                        <option value="">Select sharing</option>
                        <option value="2">2 Sharing</option>
                        <option value="3">3 Sharing</option>
                        <option value="4">4 Sharing</option>
                        <option value="5">5 Sharing</option>
                        <option value="6">6 Sharing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Any specific requirements or questions?"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-medium py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </motion.div> */}

            {/* Contact Info & Stats */}
            <motion.div
              className="space-y-6 lg:space-y-8 xl:space-y-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Contact Information */}
              <div className="space-y-8 xl:space-y-12">
                {/* Branch 1 Row */}
                <div className="backdrop-blur rounded-3xl">
                  <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
                    {/* Branch 1 Contact Info */}
                    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-lg p-6 xl:p-8 h-80 xl:h-96 flex flex-col">
                      <div className="text-xl xl:text-2xl text-purple-900 font-heading mb-4 xl:mb-6">
                        Branch 1 Contact
                      </div>
                      <div className="space-y-3 xl:space-y-4 flex-1">
                        <div className="flex items-center gap-3 xl:gap-4">
                          <Phone className="w-5 h-5 xl:w-6 xl:h-6 text-teal-500" />
                          <span className="text-gray-700 font-body text-base xl:text-lg">
                            +91 82009 64448
                          </span>
                        </div>
                        <div className="flex items-center gap-3 xl:gap-4">
                          <Phone className="w-5 h-5 xl:w-6 xl:h-6 text-teal-500" />
                          <span className="text-gray-700 font-body text-base xl:text-lg">
                            +91 88669 64448
                          </span>
                        </div>
                        <div className="flex items-start gap-3 xl:gap-4">
                          <MapPin className="w-5 h-5 xl:w-6 xl:h-6 text-pink-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-body text-sm xl:text-base leading-relaxed">
                            Sanskruti Signius, Nr Siddhraj Z+, Opp. Aashka
                            Hospital, Reliance Cross Road, Sargasan,
                            Gandhinagar, Gujarat 382421
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Branch 1 Map */}
                    <div className="bg-violet-500/35 backdrop-blur rounded-[1.2rem] shadow-lg p-1 h-80 xl:h-96">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6662325439256!2d72.6182971348877!3d23.182378800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1755338023009!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full rounded-2xl"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch 2 Row */}
                <div className="backdrop-blur rounded-3xl">
                  <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
                    {/* Branch 2 Contact Info */}
                    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-lg p-6 xl:p-8 h-80 xl:h-96 flex flex-col">
                      <div className="text-xl xl:text-2xl 2xl:text-3xl text-purple-900 font-heading mb-3 xl:mb-5">
                        Branch 2 Contact
                      </div>
                      <div className="space-y-2 lg:space-y-3 xl:space-y-4 flex-1">
                        <div className="flex items-center gap-3 xl:gap-4">
                          <Phone className="w-5 h-5 xl:w-6 xl:h-6 text-teal-500" />
                          <span className="text-gray-700 font-body text-base lg:text-lg xl:text-xl 2xl:text-xl">
                            +91 88669 60171
                          </span>
                        </div>
                        <div className="flex items-center gap-3 xl:gap-4">
                          <Phone className="w-5 h-5 xl:w-6 xl:h-6 text-teal-500" />
                          <span className="text-gray-700 font-body text-base lg:text-lg xl:text-xl 2xl:text-xl">
                            +91 88669 60176
                          </span>
                        </div>
                        <div className="flex items-start gap-3 xl:gap-4">
                          <MapPin className="w-5 h-5 xl:w-6 xl:h-6 text-pink-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-body text-sm lg:text-base xl:text-lg 2xl:text-lg leading-relaxed">
                            5th Floor, Pramukh Avenue, Above Kishor Institute,
                            Near Zudio, Reliance Cross Road, Sargasan,
                            Gandhinagar - 382421
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Branch 2 Map */}
                    <div className="bg-violet-500/35 backdrop-blur rounded-[1.2rem] shadow-lg p-1 h-80 xl:h-96">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6662325439256!2d72.6182971348877!3d23.182378800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0027446371%3A0xd636d1cf8be0d697!2sThe%20New%20Bachelor&#39;s%20Space%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1755338148872!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full rounded-2xl"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              {/* <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl text-teal-600 mb-2 font-heading">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Happy Residents
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl text-cyan-600 mb-2 font-heading">
                      98%
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Satisfaction Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl text-yellow-600 mb-2 font-heading">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Support Available
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl text-pink-600 mb-2 font-heading">
                      5★
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Average Rating
                    </div>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-white mb-8 font-heading">
              What Our Residents Say
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white/95 backdrop-blur rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6">
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic font-body">
                      "{testimonial.comment}"
                    </p>
                    <div className="text-center">
                      <div className="font-medium text-purple-900 font-body">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 font-body">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
