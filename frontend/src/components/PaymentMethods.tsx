'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { 
  CreditCard,
  Banknote,
  Building2,
  Smartphone,
  CheckCircle,
  Star
} from 'lucide-react'

const paymentMethods = [
  {
    icon: Building2,
    name: 'Bank Transfer',
    description: 'Direct bank to bank transfers',
    color: 'text-teal-600'
  },
  {
    icon: Smartphone,
    name: 'Online Portal',
    description: 'Secure online payment gateway',
    color: 'text-cyan-600'
  },
  {
    icon: Banknote,
    name: 'Cash Payment',
    description: 'Direct cash payments accepted',
    color: 'text-yellow-600'
  },
  {
    icon: CreditCard,
    name: 'Cheque',
    description: 'Bank cheque payments welcome',
    color: 'text-pink-600'
  }
]

const extraServices = [
  'Additional Laundry Services',
  'Transportation Assistance',
  'Individual Electricity Usage',
  'Overnight Guest Accommodation',
  'Extended Stay Options'
]

export function PaymentMethods() {
  return (
    <section id="payment" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CreditCard className="w-4 h-4" />
            <span className="font-medium font-body">Payment & Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-purple-900 mb-6 font-heading">
            Payment Methods & Extra Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Flexible, convenient ways to pay and optional add-ons to tailor your stay.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              {/* <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
                <CreditCard className="w-4 h-4" />
                <span className="font-medium font-body">Payment Options</span>
              </div> */}
              <h3 className="text-3xl text-purple-900 mb-4 font-heading">Payment Methods</h3>
              <p className="text-gray-600 font-body">Multiple convenient ways to pay for your accommodation.</p>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg bg-gray-50 ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-900 font-body">{method.name}</h4>
                    <p className="text-gray-600 text-sm font-body">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              {/* <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4" />
                <span className="font-medium font-body">Additional Services</span>
              </div> */}
              <h3 className="text-3xl text-purple-900 mb-4 font-heading">Extra Services</h3>
              <p className="text-gray-600 font-body">Optional services available at additional cost.</p>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {extraServices.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700 font-body">{service}</span>
                      <Badge variant="outline" className="ml-auto text-xs border-yellow-300 text-yellow-700 font-body">
                        Extra
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


