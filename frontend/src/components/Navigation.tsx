"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "facilities", label: "Included Facilities" },
    { id: "nearby", label: "Nearby" },
    { id: "monthly", label: "Monthly Plan" },
    { id: "yearly", label: "Yearly Plan" },
    { id: "payment", label: "Payment Method" },
    // { id: 'rules', label: 'Rules & Regulations' },
    { id: "location", label: "Location" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[2560px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex cursor-pointer items-center gap-3 lg:gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={logo}
              onClick={() => scrollToSection("hero")}
              alt="Logo"
              className="h-14 md:12 lg:h-13.5 xl:h-24 rounded w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10 xl:space-x-12">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm lg:text-base xl:text-xl  cursor-pointer font-medium transition-all duration-200 relative font-body ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-yellow-500"
                      : "text-yellow-400"
                    : isScrolled
                    ? "text-gray-700 hover:text-yellow-500"
                    : "text-gray-200 hover:text-yellow-400"
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("apply")}
                className="bg-gradient-to-r bg-yellow-500 hover:bg-yellow-400 text-white hover:text-indigo-800 px-6 py-2 lg:px-8 lg:py-3 xl:px-10 xl:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-body text-sm lg:text-base xl:text-lg"
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
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-purple-900" : "text-white"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="p-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg my-2 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg transition-colors font-body text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("apply")}
                className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-body"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
