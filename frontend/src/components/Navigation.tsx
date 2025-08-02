'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'monthly', label: 'Monthly Plan' },
    { id: 'yearly', label: 'Yearly Plan' },
    { id: 'rules', label: 'Rules & Regulations' },
    // { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="Logo" className="h-14 rounded w-auto" />
            {/* <span className={`text-xl ${isScrolled ? 'text-purple-900' : 'text-white'} font-heading`}>
              The Bachelor's Space
            </span> */}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative font-body ${activeSection === item.id
                  ? (isScrolled ? 'text-yellow-500' : 'text-yellow-400')
                  : (isScrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-gray-200 hover:text-yellow-400')
                  }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-teal-400 rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('apply')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-body"
              >
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Contact
                </motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-purple-900' : 'text-white'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors font-body ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-200 hover:bg-white/10'
                  }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Button
                onClick={() => scrollToSection('apply')}
                className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-body"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}