'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { GraduationCap } from 'lucide-react'
import { useIsMobile } from './ui/use-mobile'

const institutions: string[] = [
  'Central University of Gujarat',
  'Dhirubhai Ambani Institute of Information and Communication Technology',
  'Gujarat Forensic Sciences University',
  'IIT Gandhinagar',
  'National Institute of Design, Gandhinagar',
  'National Institute Of Fashion Technology, Gandhinagar',
  'Pandit Deendayal Energy University',
  'Rashtriya Raksha University',
  'Karnavati University',
  'Swarnim Gujarat Sports University',
  'Gujarat Technological University (GTU)',
  'Navgujarat BCA College',
  'Navgujarat Commerce College',
  'VPMP Polytechnic College',
  'Indian Institute of Teacher Education (IITE)',
  'Chaudhari College of Education',
  'Kadi Sarva Vishwavidyalaya',
  'LDRP Institute of Technology and Research',
  'Government Science College, Gandhinagar',
  'Government Commerce College, Gandhinagar',
  'Government Arts College, Gandhinagar',
  'Gujarat National Law University (GNLU)',
  'Swaminarayan University',
  'Gandhinagar University',
  'Samarpan Arts and Commerce College',
]

export function NearbyInstitutions() {
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const isMobile = useIsMobile()

  const normalizedQuery = query.trim().toLowerCase()
  const filtered = normalizedQuery
    ? institutions.filter((i) => i.toLowerCase().includes(normalizedQuery))
    : institutions
  const initialCount = isMobile ? 7 : 12
  const visible = showAll || normalizedQuery ? filtered : filtered.slice(0, initialCount)

  return (
    <section id="nearby" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
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
            <GraduationCap className="w-4 h-4" />
            <span className="font-medium font-body">Nearby</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-purple-900 mb-4 font-heading">
            Nearby Colleges & Universities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Explore institutes around The Bachelor’s Space. Use search or expand to view all.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name"
            className="border border-purple-200 text-black w-full p-2 rounded-full px-5 focus-visible:ring-yellow-400"
          />
        </div>

        {visible.length === 0 ? (
          <div className="text-center text-gray-600 font-body">No institutes match your search.</div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center">
            {visible.map((name, index) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 8) * 0.03 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-purple-200 bg-white text-purple-900 text-sm shadow-sm hover:shadow transition"
              >
                <GraduationCap className="w-4 h-4 text-purple-500" />
                <span className="font-body">{name}</span>
              </motion.span>
            ))}
          </div>
        )}

        {filtered.length > initialCount && !normalizedQuery && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setShowAll((s) => !s)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-body"
            >
              {showAll ? 'Show less' : `Show all (${filtered.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}


