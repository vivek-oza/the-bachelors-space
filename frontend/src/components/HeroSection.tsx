'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Sparkles, Zap, Heart } from 'lucide-react'
import heroImage from '../assets/hero_image.png'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Enhanced Background Elements with micro-interactions */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -10, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-60" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Zap className="w-6 h-6 text-cyan-400 opacity-50" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-32"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-7 h-7 text-pink-400 opacity-60" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight font-heading">
                Find Your Perfect
                <motion.span
                  className="block bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Hostel Space
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0 font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Flexible Accommodation • Yearly & Monthly Plans
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Live, learn, and grow in comfort and community. Choose the right plan for you,
              with all-inclusive facilities, security, and vibrant living spaces.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-8 py-4 rounded-2xl font-medium text-lg shadow-lg hover:shadow-2xl transition-all duration-300 font-body"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Explore Plans
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-purple-900 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 backdrop-blur-sm font-body"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Happy students in modern hostel accommodation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>

              {/* Floating stats overlay */}
              <motion.div
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { number: '500+', label: 'Students' },
                    { number: '98%', label: 'Satisfaction' },
                    { number: '5★', label: 'Rating' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <div className="text-lg text-purple-900 font-heading">{stat.number}</div>
                      <div className="text-xs text-gray-600 font-body">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}