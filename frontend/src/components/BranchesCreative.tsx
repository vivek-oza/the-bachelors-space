'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MapPin, Phone, Navigation, ChevronLeft, ChevronRight } from 'lucide-react'

const branches = [
  {
    id: 1,
    name: 'Branch 1',
    address: 'Sanskruti Signius, Nr Siddhraj Z+, Reliance Cross Road, Opp. Aashka Hospital, Sargasan, Gandhinagar, Gujarat 382421',
    phones: ['+91 82009 64448', '+91 88669 64448'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6662325439256!2d72.61855462695313!3d23.182378800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1755198684871!5m2!1sen!2sin',
    color: 'from-violet-500 via-purple-500 to-pink-500',
    bgColor: 'from-violet-50 to-purple-50'
  },
  {
    id: 2,
    name: 'Branch 2',
    address: '5th Floor, Pramukh Avenue, Above Kishor Institute, Near Zudio, Reliance Cross Road, Sargasan, Gandhinagar - 382421',
    phones: ['+91 88669 60171', '+91 88669 60176'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6270706880737!2d72.62229709466536!3d23.18380736404195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0027446371%3A0xd636d1cf8be0d697!2sThe%20New%20Bachelor&#39;s%20Space%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1755198222841!5m2!1sen!2sin',
    color: 'from-cyan-500 via-teal-500 to-emerald-500',
    bgColor: 'from-cyan-50 to-teal-50'
  }
]

export function BranchesCreative() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextBranch = () => {
    setActiveIndex((prev) => (prev + 1) % branches.length)
  }

  const prevBranch = () => {
    setActiveIndex((prev) => (prev - 1 + branches.length) % branches.length)
  }

  const activeBranch = branches[activeIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-500/30 text-white px-6 py-3 rounded-full mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Navigation className="w-6 h-6" />
            <span className="font-semibold text-lg">Discover Our Locations</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Where Dreams Begin
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Two strategically located branches in the heart of Gandhinagar's educational hub
          </p>
        </motion.div>

        {/* Interactive Branch Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            {branches.map((branch, index) => (
              <motion.button
                key={branch.id}
                onClick={() => setActiveIndex(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {branch.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-stretch"
          >
            {/* Branch Info */}
            <div className="space-y-8 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`bg-gradient-to-br ${activeBranch.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl flex-1 flex flex-col justify-between`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeBranch.color} flex items-center justify-center shadow-lg`}>
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{activeBranch.name}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{activeBranch.address}</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      {activeBranch.phones.map((phone, phoneIndex) => (
                        <motion.a
                          key={phoneIndex}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                          whileHover={{ scale: 1.05, x: 10 }}
                        >
                          {phone}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex justify-center gap-4">
                <motion.button
                  onClick={prevBranch}
                  className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={nextBranch}
                  className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative flex flex-col"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 flex-1">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 z-10 pointer-events-none"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {activeBranch.id === 1 ? (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6662325439256!2d72.61855462695313!3d23.182378800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1755198684871!5m2!1sen!2sin" 
                    width="100%" 
                    height="500"
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                ) : (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6270706880737!2d72.62229709466536!3d23.18380736404195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0027446371%3A0xd636d1cf8be0d697!2sThe%20New%20Bachelor&#39;s%20Space%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1755198222841!5m2!1sen!2sin" 
                    width="100%" 
                    height="500"
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                )}
              </div>

              {/* Floating Info Card */}
              <motion.div
                className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-center">
                  <motion.a
                    href={`https://www.google.com/maps/embed?pb=${activeBranch.id === 1 ? '!1m18!1m12!1m3!1d3667.6662325439256!2d72.61855462695313!3d23.182378800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1755198684871!5m2!1sen!2sin' : '!1m18!1m12!1m3!1d3667.6270706880737!2d72.62229709466536!3d23.18380736404195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0027446371%3A0xd636d1cf8be0d697!2sThe%20New%20Bachelor&#39;s%20Space%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1755198222841!5m2!1sen!2sin'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-6 py-2 bg-gradient-to-r ${activeBranch.color} text-white rounded-full font-medium shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Directions
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 font-body">
            Both locations offer the same premium facilities and services
          </p>
        </motion.div>
      </div>
    </section>
  )
}