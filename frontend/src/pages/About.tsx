"use client";

import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-[2560px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            className="text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2.5 rounded-full mb-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🏡</span>
              <span className="font-medium font-body">About Us</span>
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-purple-900 mb-3 font-heading">
              The Bachelor's Space
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto font-body">
              Premium hostel and PG living in Gandhinagar with focus on food, hygiene, and comfort.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Key Stats Cards */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: "2", label: "Branches", icon: "🏢" },
                { number: "350+", label: "Beds", icon: "🛏️" },
                { number: "95", label: "Rooms", icon: "🏠" },
                { number: "Separate", label: "Boys & Girls", icon: "🚻" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-purple-100"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-bold text-purple-900 font-heading">{stat.number}</div>
                  <div className="text-gray-600 font-body">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Description */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-body max-w-5xl mx-auto">
                At The Bachelors Space, we understand that a good living environment goes beyond just a bed and four walls. Located in the heart of <span className="font-semibold text-purple-600">Gandhinagar, Gujarat</span>, we provide premium hostel and PG accommodations for boys and girls, designed with a strong focus on <span className="font-semibold text-purple-600">food quality, hygiene, and comfort</span>.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100">
                <div className="text-4xl mb-4 text-center">🍽️</div>
                <h4 className="text-xl lg:text-2xl font-heading text-purple-900 mb-4 text-center">Quality Food & Hygiene</h4>
                <p className="text-gray-700 font-body leading-relaxed">
                  We serve freshly prepared meals using quality ingredients, maintain strict hygiene protocols, and offer facilities that make our residents feel at home — including RO water, daily cleaning, and well-maintained rooms.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100">
                <div className="text-4xl mb-4 text-center">📍</div>
                <h4 className="text-xl lg:text-2xl font-heading text-purple-900 mb-4 text-center">Strategic Locations</h4>
                <p className="text-gray-700 font-body leading-relaxed">
                  We operate 2 professionally managed branches in Gandhinagar, strategically located for easy access to educational institutions, coaching centers, and workplaces. All rooms are furnished with beds, clean mattresses, study desks, chairs, storage cabinets, and proper ventilation.
                </p>
              </div>
            </motion.div>

            {/* Mission, Vision, Values */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Mission */}
              <motion.div
                className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl lg:text-3xl font-heading text-purple-900 mb-6">Mission</h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  To deliver clean, hygienic, and well-managed living spaces with nutritious food and reliable services, enabling students and professionals to focus on their goals without compromising their health or comfort.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="bg-gradient-to-br from-teal-100 to-green-100 rounded-3xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl lg:text-3xl font-heading text-purple-900 mb-6">Vision</h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  To be the most trusted name in hostel and PG living in Gandhinagar, known for unmatched food quality, impeccable hygiene standards, and a warm, home-like environment that nurtures growth and well-being.
                </p>
              </motion.div>

              {/* Core Values */}
              <motion.div
                className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl lg:text-3xl font-heading text-purple-900 mb-6">Core Values</h3>
                <div className="space-y-3">
                  {[
                    { icon: "🧼", text: "Hygiene First" },
                    { icon: "🍽️", text: "Quality Food, Every Day" },
                    { icon: "🔒", text: "Safe & Secure Living" },
                    { icon: "🛋️", text: "Comfort & Convenience" },
                    { icon: "🎓", text: "Student & Professional Friendly" },
                  ].map((value, index) => (
                    <motion.div
                      key={value.text}
                      className="flex items-center justify-center gap-3 text-gray-700 font-body"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-lg">{value.icon}</span>
                      <span>{value.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
}
