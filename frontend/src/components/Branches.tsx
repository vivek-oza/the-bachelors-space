'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { MapPin, Phone } from 'lucide-react'

const branches = [
  {
    id: 1,
    name: 'Branch 1',
    address: 'Sanskruti Signius, Nr Siddhraj Z+, Reliance Cross Road, Opp. Aashka Hospital, Sargasan, Gandhinagar, Gujarat 382421',
    phones: ['+91 82009 64448', '+91 88669 64448'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6662325439256!2d72.61855462695313!3d23.182378800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1755198684871!5m2!1sen!2sin',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 2,
    name: 'Branch 2',
    address: '5th Floor, Pramukh Avenue, Above Kishor Institute, Near Zudio, Reliance Cross Road, Sargasan, Gandhinagar - 382421',
    phones: ['+91 88669 60171', '+91 88669 60176'],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6270706880737!2d72.62229709466536!3d23.18380736404195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0027446371%3A0xd636d1cf8be0d697!2sThe%20New%20Bachelor&#39;s%20Space%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1755198222841!5m2!1sen!2sin',
    color: 'from-teal-400 to-teal-600'
  }
]

export function Branches() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-5 h-5" />
            <span className="font-medium font-body">Our Locations</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl text-purple-900 mb-6 font-heading">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Two convenient branches in Sargasan, Gandhinagar - Choose the location that works best for you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl text-purple-900 font-heading">
                      {branch.name}
                    </CardTitle>
                    <Badge 
                      className={`bg-gradient-to-r ${branch.color} text-white border-0 px-3 py-1`}
                    >
                      Available
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        {branch.phones.map((phone, phoneIndex) => (
                          <a 
                            key={phoneIndex}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="block text-gray-700 font-body hover:text-purple-600 transition-colors duration-200"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {branch.id === 1 ? (
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6662325439256!2d72.61855462695313!3d23.182378800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1755198684871!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6270706880737!2d72.62229709466536!3d23.18380736404195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0027446371%3A0xd636d1cf8be0d697!2sThe%20New%20Bachelor&#39;s%20Space%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1755198222841!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full transition-transform duration-300 group-hover:scale-105"
                      />
                    )}

                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 font-body">
            Both locations offer the same premium facilities and services
          </p>
        </motion.div>
      </div>
    </section>
  )
}


