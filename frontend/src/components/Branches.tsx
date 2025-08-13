'use client'

import { motion } from 'motion/react'

export function Branches() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">📍</span>
            <span className="font-medium font-body">Locations</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-purple-900 mb-4 font-heading">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">Two convenient branches in Sargasan, Gandhinagar</p>
        </motion.div>

        <div className="space-y-12 md:space-y-0 flex md:flex-row flex-col justify-between items-stretch">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl text-purple-900 mb-3 font-heading">Branch 1</h3>
              <div className="text-gray-700 font-body leading-relaxed mb-4">
                <p>Sanskruti Signius, Nr Siddhraj Z+, Reliance Cross Road,</p>
                <p>Opp. Aashka Hospital, Sargasan, Gandhinagar, Gujarat 382421</p>
              </div>
              <div className="space-y-1 text-gray-700 font-body">
                <a href="tel:+918200964448" className="hover:text-purple-600 transition-colors">+91 82009 64448</a>
                <br/>
                <a href="tel:+918866964448" className="hover:text-purple-600 transition-colors">+91 88669 64448</a>
              </div>
            </div>
            <motion.div
              className="rounded-t-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.666097938312!2d72.6200995742735!3d23.18238371034744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0042f351db%3A0x3ad6718fda18d7ef!2sThe%20Bachelor&#39;s%20Space%20-%20HOSTEL%20%26%20PG%20-%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1754192730866!5m2!1sen!2sin"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl text-purple-900 mb-3 font-heading">Branch 2</h3>
              <div className="text-gray-700 font-body leading-relaxed mb-4">
                <p>5th Floor, Pramukh Avenue, Above Kishor Institute, Near Zudio,</p>
                <p>Reliance Cross Road, Sargasan, Gandhinagar - 382421</p>
              </div>
              <div className="space-y-1 text-gray-700 font-body">
                <a href="tel:+918866960171" className="hover:text-purple-600 transition-colors">+91 88669 60171</a>
                <br/>
                <a href="tel:+918866960176" className="hover:text-purple-600 transition-colors">+91 88669 60176</a>
              </div>
            </div>
            <motion.div
              className="rounded-t-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3667.6662325439256!2d72.6226745!3d23.1823788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0027446371%3A0xd636d1cf8be0d697!2sThe%20New%20Bachelor&#39;s%20Space%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1755077576748!5m2!1sen!2sin"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


