'use client'

import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ImageCarousel } from './components/ImageCarousel'
import { YearlyPlans } from './components/YearlyPlans'
import { MonthlyPlans } from './components/MonthlyPlans'
import { RulesRegulations } from './components/RulesRegulations'
import { FacilitiesPayment } from './components/FacilitiesPayment'
import { CallToAction } from './components/CallToAction'
import { Toaster } from './components/ui/sonner'
import { motion } from 'motion/react'
import { Heart, Zap, Star } from 'lucide-react'
import logo from './assets/logo.png'
import img2 from './assets/2.png'
import img4 from './assets/4.png'
import img6 from './assets/6.png'
import img9 from './assets/9.png'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Image Carousel */}
      <ImageCarousel />

      {/* About Us */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
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
              <span className="text-lg">🏡</span>
              <span className="font-medium font-body">About Us</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl text-purple-900 mb-6 font-heading">
              The Bachelor's Space
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Gandhinagar's premium hostel and PG destination — where luxury meets youth lifestyle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-center lg:text-left"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-body">
                Welcome to The Bachelor's Space, Gandhinagar's <span className="font-semibold text-purple-600">premium hostel and PG destination</span> — where luxury meets youth lifestyle. Designed for students and working professionals, TBS offers a balanced and vibrant living experience with top-tier amenities, modern interiors, and a community-driven atmosphere.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-body">
                Whether it's freshly cooked meals, clean rooms, or a chill lounge with a gaming zone, we make sure your stay feels like home — <span className="font-semibold text-teal-600">just a bit cooler</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-heading">Location</h3>
                    <p className="text-gray-600 font-body leading-relaxed">
                      Sanskruti Signius, Nr Siddhraj Z+, Reliance Cross Road,<br/>
                      Opp. Aashka Hospital, Sargasan, Gandhinagar, Gujarat 382421
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-heading">Contact Us</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 font-body flex items-center gap-2">
                        <span className="text-lg">📱</span>
                        <a href="tel:+918200964448" className="hover:text-purple-600 transition-colors">+91 82009 64448</a>
                      </p>
                      <p className="text-gray-600 font-body flex items-center gap-2">
                        <span className="text-lg">📱</span>
                        <a href="tel:+918866964448" className="hover:text-purple-600 transition-colors">+91 88669 64448</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

      {/* Location Map */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 text-lg">Visit us at our convenient location in Gandhinagar</p>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.666097938312!2d72.6200995742735!3d23.18238371034744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1754192730866!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 relative overflow-hidden">
        {/* Scattered Images */}
        <div className="absolute inset-0 pointer-events-none z-5 hidden md:block">
          <motion.img
            src={img2}
            alt=""
            className="absolute top-20 left-16 w-16 h-16 opacity-30"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={img4}
            alt=""
            className="absolute top-16 right-20 w-20 h-20 opacity-25"
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.img
            src={img6}
            alt=""
            className="absolute bottom-32 left-24 w-14 h-14 opacity-40"
            animate={{ rotate: [0, 20, -20, 0], x: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.img
            src={img9}
            alt=""
            className="absolute bottom-24 right-16 w-18 h-18 opacity-35"
            animate={{ rotate: [0, -10, 10, 0], y: [0, 8, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>

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
              <div className="flex md:flex-row flex-col items-center gap-4 mb-4">
                <img src={logo} alt="Logo" className="h-24 w-auto" />
                <motion.h3
                  className="text-3xl font-heading font-serif italic font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  The Bachelor's Space
                </motion.h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg font-body">
                Your home away from home. Comfortable, affordable, and vibrant student accommodation.
              </p>
              <div>
                <h4 className="font-medium mb-4 text-xl font-heading">Follow & Contact</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/the_bachelors_space/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                      fill="white" viewBox="0 0 256 256"><path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path></svg>
                  </motion.a>
                  <motion.a
                    href="tel:+918200964448"
                    className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                      fill="white" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                  </motion.a>
                </div>
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
                  { href: '#monthly', label: 'Monthly Plan', color: 'hover:text-yellow-400' },
                  { href: '#yearly', label: 'Yearly Plan', color: 'hover:text-teal-400' },
                  { href: '#rules', label: 'Rules & Regulations', color: 'hover:text-cyan-400' },
                  { href: '#facilities', label: 'Included Facilities', color: 'hover:text-pink-400' },
                  { href: '#location', label: 'Location', color: 'hover:text-blue-400' },
                  { href: '#apply', label: 'Contact', color: 'hover:text-green-400' }
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
              <h4 className="font-medium mb-4 text-xl font-heading">Contact Info</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  '+91 82009 64448',
                  '+91 88669 64448',
                  // 'info@bachelorsspace.com',
                  'Nr. Siddhraj Z+, Opp. Aashka Hospital,',
                  'Reliance Cross Road, Gandhinagar.'
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
              <span className="font-body">Made with love By <a className='underline' target='_blank' href="https://www.digilynk.in">Digilynk</a> </span>
              <Star className="w-4 h-4 text-yellow-400" />
            </motion.div>
            <p className="font-body">&copy; 2025 The Bachelor's Space. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}