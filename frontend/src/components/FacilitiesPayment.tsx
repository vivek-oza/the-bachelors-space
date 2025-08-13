'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { 
  Home, 
  Utensils, 
  Wifi, 
  Shirt, 
  Wrench, 
  Zap,
  Star,
  Users
} from 'lucide-react'

const facilities = [
  {
    icon: Home,
    name: 'Accommodation',
    description: 'Comfortable shared rooms with modern amenities',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Utensils,
    name: 'Food',
    description: 'Nutritious meals provided daily',
    color: 'from-teal-400 to-teal-600'
  },
  {
    icon: Wifi,
    name: 'High-Speed WiFi',
    description: 'Reliable internet throughout the facility',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: Shirt,
    name: 'Laundry Service',
    description: 'Regular cleaning and maintenance',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Wrench,
    name: 'Maintenance',
    description: '24/7 facility maintenance and support',
    color: 'from-pink-400 to-pink-600'
  },
  {
    icon: Zap,
    name: 'Utilities',
    description: 'Electricity, water, and essential services',
    color: 'from-purple-400 to-purple-600'
  }
]

// Payment methods and extra services moved to PaymentMethods.tsx

export function FacilitiesPayment() {
  return (
    <section id='facilities' className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Facilities Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="w-4 h-4" />
            <span className="font-medium font-body">All Inclusive</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-purple-900 mb-6 font-heading">
            Included Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Everything you need for comfortable living, all included in your plan.
          </p>
        </motion.div>

        {/* Community Section with Image */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-start text-center text-purple-900 mb-6 font-heading">
                Join Our Vibrant Community
              </h3>
              <p className="text-lg text-gray-600 mb-8 font-body">
                Experience the joy of living with like-minded students in our modern, 
                well-equipped hostel. Build friendships, share experiences, and create 
                memories that will last a lifetime.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '500+', label: 'Happy Students', color: 'text-yellow-600' },
                  { number: '24/7', label: 'Support', color: 'text-teal-600' },
                  { number: '98%', label: 'Satisfaction', color: 'text-pink-600' },
                  { number: '5★', label: 'Rating', color: 'text-cyan-600' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-white rounded-xl shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-2xl ${stat.color} font-heading`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-body">{stat.label}</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${facility.color} text-white mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <facility.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl text-purple-900 mb-2 font-heading">{facility.name}</h3>
                  <p className="text-gray-600 font-body">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Payment and Extra Services moved to PaymentMethods section */}
      </div>
    </section>
  )
}