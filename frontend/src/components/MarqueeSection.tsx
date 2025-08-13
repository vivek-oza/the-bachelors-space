'use client'

import { motion } from 'motion/react'
import marquee1 from '../assets/Marquee/marquee1.png'
import marquee2 from '../assets/Marquee/marquee2.png'

export function MarqueeSection() {
  const images = [marquee1, marquee2]

  return (
    <section className="py-5 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">🏢</span>
            <span className="font-medium font-body">Our Facilities</span>
          </motion.div>
          <h2 className="text-4xl md:text-4xl text-purple-900 mb-6 font-heading">
            Modern Living Spaces
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex min-w-max"
              animate={{
                x: [0, -50 + '%']
              }}
              transition={{
                duration: 70,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...images, ...images, ...images, ...images, ...images, ...images].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0  h-34"
                >
                  <img
                    src={image}
                    alt={`Hostel facility ${(index % 2) + 1}`}
                    className="w-full h-full ps-10 object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 w-8 md:w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 w-8 md:w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  )
}