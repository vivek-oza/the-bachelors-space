'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import img2 from '../assets/2.png'
import img4 from '../assets/4.png'
import img6 from '../assets/6.png'
import img9 from '../assets/9.png'

import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Users,
  Calendar,
  CheckCircle2
} from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: "Rahul Kumar",
    location: "Engineering Student",
    rating: 5,
    comment: "Amazing facilities and great community. The yearly plan saved me a lot of money!"
  },
  {
    name: "Priya Sharma",
    location: "Medical Student", 
    rating: 5,
    comment: "Safe, clean, and convenient. The monthly flexibility was perfect for my schedule."
  },
  {
    name: "Arjun Patel",
    location: "Working Professional",
    rating: 5,
    comment: "Best hostel experience! All inclusive pricing with no hidden costs."
  }
]

export function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    planType: '',
    roomSharing: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="apply" className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Scattered Images */}
      <div className="absolute inset-0 pointer-events-none z-5 hidden md:block">
        <motion.img
          src={img2}
          alt=""
          className="absolute top-16 left-16 w-16 h-16 opacity-50"
          animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={img4}
          alt=""
          className="absolute top-24 right-20 w-20 h-20 opacity-40"
          animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.img
          src={img6}
          alt=""
          className="absolute top-1/2 left-8 w-14 h-14 opacity-60"
          animate={{ rotate: [0, 20, -20, 0], x: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.img
          src={img9}
          alt=""
          className="absolute top-2/3 right-12 w-18 h-18 opacity-45"
          animate={{ rotate: [0, -10, 10, 0], y: [0, 8, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="font-medium font-body">Get Started</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-heading">
            Ready to Join Our
            <span className="block bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent font-serif italic py-2">
              Community?
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-body">
            Take the first step towards comfortable, affordable, and vibrant hostel living.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 mb-16">
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
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/95 backdrop-blur rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 text-xl text-purple-900 font-heading mb-4">
                  <Phone className="w-5 h-5 text-teal-500" />
                  Branch 1 Contact
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-500" />
                    <span className="text-gray-700 font-body">+91 82009 64448</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-500" />
                    <span className="text-gray-700 font-body">+91 88669 64448</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                    <span className="text-gray-700 font-body">Sanskruti Signius, Nr Siddhraj Z+, Opp. Aashka Hospital, Reliance Cross Road, Sargasan, Gandhinagar, Gujarat 382421</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 text-xl text-purple-900 font-heading mb-4">
                  <Phone className="w-5 h-5 text-teal-500" />
                  Branch 2 Contact
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-500" />
                    <span className="text-gray-700 font-body">+91 88669 60171</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-500" />
                    <span className="text-gray-700 font-body">+91 88669 60176</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                    <span className="text-gray-700 font-body">5th Floor, Pramukh Avenue, Above Kishor Institute, Near Zudio, Reliance Cross Road, Sargasan, Gandhinagar - 382421</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl text-teal-600 mb-2 font-heading">500+</div>
                  <div className="text-sm text-gray-600 font-body">Happy Residents</div>
                </div>
                <div>
                  <div className="text-3xl text-cyan-600 mb-2 font-heading">98%</div>
                  <div className="text-sm text-gray-600 font-body">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl text-yellow-600 mb-2 font-heading">24/7</div>
                  <div className="text-sm text-gray-600 font-body">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl text-pink-600 mb-2 font-heading">5★</div>
                  <div className="text-sm text-gray-600 font-body">Average Rating</div>
                </div>
              </div>
            </div>
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
          <h3 className="text-3xl text-white mb-8 font-heading">What Our Residents Say</h3>
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
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic font-body">"{testimonial.comment}"</p>
                  <div className="text-center">
                    <div className="font-medium text-purple-900 font-body">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 font-body">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}