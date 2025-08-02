'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { CheckCircle, Calendar, Users, Wifi, Utensils, Shirt, Wrench, Star, TrendingDown } from 'lucide-react'
import { useState } from 'react'

const yearlyPlans = [
  {
    sharing: 2,
    actualFees: '₹2,28,000',
    oneTimePayment: '₹2,16,000',
    twoInstallments: '₹1,11,000 ×2',
    securityDeposit: '₹10,000',
    color: 'from-yellow-400 to-yellow-500',
    popular: true,
    savings: '₹12,000'
  },
  {
    sharing: 3,
    actualFees: '₹1,80,000',
    oneTimePayment: '₹1,62,000',
    twoInstallments: '₹84,000 ×2',
    securityDeposit: '₹10,000',
    color: 'from-teal-400 to-teal-500',
    savings: '₹18,000'
  },
  {
    sharing: 4,
    actualFees: '₹1,68,000',
    oneTimePayment: '₹1,50,000',
    twoInstallments: '₹78,000 ×2',
    securityDeposit: '₹10,000',
    color: 'from-pink-400 to-pink-500',
    savings: '₹18,000'
  },
  {
    sharing: 5,
    actualFees: '₹1,50,000',
    oneTimePayment: '₹1,38,000',
    twoInstallments: '₹72,000 ×2',
    securityDeposit: '₹10,000',
    color: 'from-cyan-400 to-cyan-500',
    savings: '₹12,000'
  },
  {
    sharing: 6,
    actualFees: '₹1,26,000',
    oneTimePayment: '₹1,20,000',
    twoInstallments: '₹61,500 ×2',
    securityDeposit: '₹10,000',
    color: 'from-purple-400 to-purple-500',
    savings: '₹6,000'
  }
]

const facilities = [
  { icon: Utensils, name: 'Food' },
  { icon: Wifi, name: 'WiFi' },
  { icon: Shirt, name: 'Laundry' },
  { icon: Wrench, name: 'Maintenance' }
]

export function YearlyPlans() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="yearly" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-4 h-4" />
            <span className="font-medium font-body">Yearly Plans</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-purple-900 mb-6 font-heading">
            Yearly Accommodation Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Pick from flexible room-sharing options (2 to 6 beds), all-inclusive annual fees. 
            Enjoy accommodation, food, WiFi, laundry and more in one hassle-free package!
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {yearlyPlans.map((plan, index) => (
            <motion.div
              key={plan.sharing}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative bg-white">
                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                
                {plan.popular && (
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-medium font-body">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </motion.div>
                )}

                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-4 rounded-full bg-gradient-to-r ${plan.color} text-white`}>
                      <Users className="w-8 h-8" />
                    </div>
                  </motion.div>
                  <CardTitle className="text-2xl text-purple-900 font-heading">
                    {plan.sharing} Sharing
                  </CardTitle>
                  <motion.div 
                    className="flex items-center justify-center gap-2 text-sm text-gray-500"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingDown className="w-4 h-4 text-green-500" />
                    <span className="line-through font-body">{plan.actualFees}</span>
                    <Badge variant="outline" className="text-green-600 border-green-300 font-body">
                      Save {plan.savings}
                    </Badge>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <motion.div 
                      className="flex justify-between items-center"
                      whileHover={{ x: 2 }}
                    >
                      <span className="text-sm text-gray-600 font-body">One-Time:</span>
                      <span className="font-medium text-teal-600 font-body">{plan.oneTimePayment}</span>
                    </motion.div>
                    <motion.div 
                      className="flex justify-between items-center"
                      whileHover={{ x: 2 }}
                    >
                      <span className="text-sm text-gray-600 font-body">2 Installments:</span>
                      <span className="font-medium text-cyan-600 font-body">{plan.twoInstallments}</span>
                    </motion.div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm text-gray-600 font-body">Security:</span>
                      <Badge variant="outline" className="border-purple-300 text-purple-700 font-body">{plan.securityDeposit}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {facilities.map((facility, fIndex) => (
                      <motion.div 
                        key={facility.name} 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        <facility.icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 font-body">{facility.name}</span>
                      </motion.div>
                    ))}
                  </div>


                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-900 mb-4 font-body">
            <strong>Security deposit refundable post checkout.</strong> Fees include everything you need for a peaceful stay.
          </p>
          <p className="text-sm text-gray-600 font-body">
            Additional charges may apply for extra laundry, transport, or electricity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}