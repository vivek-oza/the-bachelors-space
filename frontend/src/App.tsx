'use client'

import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { YearlyPlans } from './components/YearlyPlans'
import { MonthlyPlans } from './components/MonthlyPlans'
import { RulesRegulations } from './components/RulesRegulations'
import { FacilitiesPayment } from './components/FacilitiesPayment'
import { CallToAction } from './components/CallToAction'
import { Toaster } from './components/ui/sonner'
import { motion } from 'motion/react'
import { Heart, Zap, Star } from 'lucide-react'
import logo from './assets/logo.png'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />


      {/* Monthly Plans */}
      <MonthlyPlans />
      {/* Yearly Plans */}
      <YearlyPlans />

      {/* Rules & Regulations */}
      <RulesRegulations />

      {/* Facilities & Payment */}
      <FacilitiesPayment />

      {/* Call to Action */}
      <CallToAction />

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 bg-teal-400/20 rounded-full"
            animate={{ scale: [1, 1.3, 1], rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-12 h-12 bg-pink-400/20 rounded-full"
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
                <motion.h3
                  className="text-3xl font-heading"
                  whileHover={{ scale: 1.05 }}
                >
                  The Bachelor's Space
                </motion.h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg font-body">
                Your home away from home. Comfortable, affordable, and vibrant student accommodation.
              </p>
              <div className="flex space-x-4">
                {[
                  { bg: 'from-yellow-400 to-yellow-500', text: 'purple-900', label: 'FB' },
                  { bg: 'from-teal-400 to-teal-500', text: 'white', label: 'TW' },
                  { bg: 'from-pink-400 to-pink-500', text: 'white', label: 'IG' }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    className={`w-12 h-12 bg-gradient-to-r ${social.bg} rounded-full flex items-center justify-center cursor-pointer`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className={`text-${social.text} font-body`}>{social.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4 text-xl font-heading">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  { href: '#yearly', label: 'Yearly Plans', color: 'hover:text-yellow-400' },
                  { href: '#monthly', label: 'Monthly Plans', color: 'hover:text-teal-400' },
                  { href: '#rules', label: 'Rules', color: 'hover:text-cyan-400' },
                  { href: '#apply', label: 'Apply Now', color: 'hover:text-pink-400' }
                ].map((link, index) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <a href={link.href} className={`transition-colors font-body ${link.color}`}>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4 text-xl font-heading">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  '+91 98765 43210',
                  'info@bachelorsspace.com',
                  'Bachelor\'s Space',
                  'Student Area'
                ].map((contact, index) => (
                  <motion.li
                    key={contact}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 3 }}
                    className="font-body"
                  >
                    {contact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-purple-700 pt-8 mt-12 text-center text-gray-300 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="font-body">Made with love for students</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </motion.div>
            <p className="font-body">&copy; 2024 The Bachelor's Space. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}