"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Home,
  Utensils,
  Wifi,
  Shirt,
  Wrench,
  Zap,
  Star,
  Users,
} from "lucide-react";

const facilities = [
  {
    icon: Home,
    name: "Accommodation",
    description: "Comfortable shared rooms with modern amenities",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Utensils,
    name: "Food",
    description: "Nutritious meals provided daily",
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: Wifi,
    name: "High-Speed WiFi",
    description: "Reliable internet throughout the facility",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Shirt,
    name: "Laundry Service",
    description: "Regular cleaning and maintenance",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Wrench,
    name: "Security & Safety",
    description: "24/7 CCTV, maintenance and support",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Zap,
    name: "Activites",
    description: "Gym, Indoor Games, Library",
    color: "from-purple-400 to-purple-600",
  },
];

// Payment methods and extra services moved to PaymentMethods.tsx

export function FacilitiesPayment() {
  return (
    <section
      id="facilities"
      className="w-full py-16 lg:py-16 xl:py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[2560px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Facilities Section */}
        <motion.div
          className="text-center mb-10 lg:mb-14 xl:mb-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-3 lg:mb-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
            <span className="font-medium font-body text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-2xl">All Inclusive</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-purple-900 mb-4 lg:mb-6 font-heading">
            Included Facilities
          </h2>
          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto font-body">
            Everything you need for comfortable living, all included in your
            plan.
          </p>
        </motion.div>

        {/* Community Section with Image */}
        <motion.div
          className="mb-14 lg:mb-18 xl:mb-22"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-18 items-center">
            <div className="flex flex-col items-center h-full w-full gap-y-3 lg:gap-y-4 xl:gap-y-12 lg:items-start justify-center">
              <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-5xl lg:text-start text-center text-purple-900 mb-4 font-heading">
                Join Our Vibrant Community
              </h3>
              <p className="text-center lg:text-start text-base sm:text-base md:text-base lg:text-lg xl:text-2xl text-gray-600 mb-5 font-body">
                Experience the joy of living with like-minded students in our
                modern, well-equipped hostel. Build friendships, share
                experiences, and create memories that will last a lifetime.
              </p>
              <div className="grid w-full grid-cols-2 gap-3 lg:gap-4">
                {[
                  {
                    number: "500+",
                    label: "Happy Students",
                    color: "text-yellow-600",
                  },
                  { number: "24/7", label: "Support", color: "text-teal-600" },
                  {
                    number: "98%",
                    label: "Satisfaction",
                    color: "text-pink-600",
                  },
                  { number: "5★", label: "Rating", color: "text-cyan-600" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-white py-2 md:py-3 xl:py-16 rounded-xl shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl ${stat.color} font-heading`}>
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm lg:text-sm xl:text-lg 2xl:text-lg text-gray-600 font-body">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1637862006547-e9c15e733fab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students enjoying hostel community life"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>

                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Badge className="bg-white/90 text-purple-900 font-body">
                    <Users className="w-3 h-3 mr-1" />
                    Community Life
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-14 lg:mb-18">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                <CardContent className="p-5 text-center">
                  <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${facility.color} text-white mb-3`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <facility.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-3xl 2xl:text-3xl text-purple-900 mb-1 font-heading">
                    {facility.name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-xl 2xl:text-xl text-gray-600 font-body">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Payment and Extra Services moved to PaymentMethods section */}
      </div>
    </section>
  );
}
