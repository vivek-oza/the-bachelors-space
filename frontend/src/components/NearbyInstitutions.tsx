'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { GraduationCap, MapPin, Star, Users, BookOpen, Award } from 'lucide-react'
import { useIsMobile } from './ui/use-mobile'

const institutions = [
  {
    name: 'IIT Gandhinagar',
    type: 'Engineering',
    distance: '2.5 km',
    category: 'Premier',
    icon: Award,
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'Central University of Gujarat',
    type: 'University',
    distance: '3.2 km',
    category: 'Central',
    icon: GraduationCap,
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Dhirubhai Ambani Institute of ICT',
    type: 'Technology',
    distance: '4.1 km',
    category: 'Premier',
    icon: BookOpen,
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Gujarat Forensic Sciences University',
    type: 'Specialized',
    distance: '3.8 km',
    category: 'State',
    icon: Users,
    color: 'from-teal-400 to-teal-600'
  },
  {
    name: 'National Institute of Design',
    type: 'Design',
    distance: '5.2 km',
    category: 'National',
    icon: Star,
    color: 'from-pink-400 to-pink-600'
  },
  {
    name: 'NIFT Gandhinagar',
    type: 'Fashion',
    distance: '4.7 km',
    category: 'National',
    icon: Award,
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    name: 'Pandit Deendayal Energy University',
    type: 'Energy',
    distance: '6.1 km',
    category: 'State',
    icon: BookOpen,
    color: 'from-green-400 to-green-600'
  },
  {
    name: 'Rashtriya Raksha University',
    type: 'Security',
    distance: '7.3 km',
    category: 'Central',
    icon: Users,
    color: 'from-red-400 to-red-600'
  },
  {
    name: 'Karnavati University',
    type: 'Private',
    distance: '5.8 km',
    category: 'Private',
    icon: GraduationCap,
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    name: 'Gujarat Technological University',
    type: 'Technology',
    distance: '4.3 km',
    category: 'State',
    icon: BookOpen,
    color: 'from-orange-400 to-orange-600'
  },
  {
    name: 'Gujarat National Law University',
    type: 'Law',
    distance: '6.7 km',
    category: 'State',
    icon: Award,
    color: 'from-violet-400 to-violet-600'
  },
  {
    name: 'Swaminarayan University',
    type: 'Private',
    distance: '8.2 km',
    category: 'Private',
    icon: GraduationCap,
    color: 'from-amber-400 to-amber-600'
  }
]

export function NearbyInstitutions() {
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const isMobile = useIsMobile()

  const categories = ['All', 'Premier', 'Central', 'State', 'National', 'Private']

  const normalizedQuery = query.trim().toLowerCase()
  const categoryFiltered = selectedCategory === 'All' 
    ? institutions 
    : institutions.filter(inst => inst.category === selectedCategory)
  
  const filtered = normalizedQuery
    ? categoryFiltered.filter((inst) => inst.name.toLowerCase().includes(normalizedQuery))
    : categoryFiltered

  const initialCount = isMobile ? 6 : 8
  const visible = showAll || normalizedQuery ? filtered : filtered.slice(0, initialCount)

  return (
    <section id="nearby" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium font-body">Educational Hub</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl text-purple-900 mb-6 font-heading">
            Nearby Colleges & Universities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Located in the heart of Gandhinagar's educational district - Easy access to top institutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search institutions by name..."
                className="w-full p-4 rounded-2xl border border-purple-200 bg-white text-purple-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent shadow-lg font-body"
              />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full px-4 py-2 font-body transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                      : 'border-purple-200 text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>

        {visible.length === 0 ? (
          <motion.div 
            className="text-center text-gray-600 font-body py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No institutions match your search criteria.
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visible.map((institution, index) => {
              const IconComponent = institution.icon
              return (
                <motion.div
                  key={institution.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${institution.color} shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <Badge 
                          className="bg-purple-100 text-purple-700 border-0 px-2 py-1 text-xs"
                        >
                          {institution.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-heading text-purple-900 mb-2 group-hover:text-purple-700 transition-colors">
                        {institution.name}
                      </h3>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <BookOpen className="w-4 h-4 text-purple-500" />
                          <span className="font-body">{institution.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span className="font-body">{institution.distance} away</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        )}

        {filtered.length > initialCount && !normalizedQuery && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAll((s) => !s)}
              className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-body"
            >
              {showAll ? 'Show Less' : `Show All ${filtered.length} Institutions`}
            </Button>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading text-purple-900 mb-4">
              Perfect Location for Students
            </h3>
            <p className="text-gray-600 font-body max-w-2xl mx-auto">
              Our hostel is strategically located in Gandhinagar's educational hub, providing easy access to top universities and colleges. Save time on commuting and focus on your studies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}