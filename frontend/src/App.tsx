"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ImageCarousel } from "./components/ImageCarousel";
import { MarqueeSection } from "./components/MarqueeSection";
import { YearlyPlans } from "./components/YearlyPlans";
import { MonthlyPlans } from "./components/MonthlyPlans";
import { RulesRegulations } from "./components/RulesRegulations";
import { FacilitiesPayment } from "./components/FacilitiesPayment";
// import { PaymentMethods } from "./components/PaymentMethods";
// import { Branches } from "./components/Branches";
import { NearbyInstitutions } from "./components/NearbyInstitutions";
import { CallToAction } from "./components/CallToAction";
import { Toaster } from "./components/ui/sonner";
import { motion } from "motion/react";
import { Heart, Zap, Star } from "lucide-react";
import logo from "./assets/logo.avif";
import img2 from "./assets/2.avif";
import img4 from "./assets/4.avif";
import img6 from "./assets/6.avif";
import img9 from "./assets/9.avif";
import { PaymentNotice } from "./components/PaymentNotice";

export default function App() {
  const location = useLocation();

  // Scroll to hash targets reliably after route/hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const navHeight = 80;
      let attempts = 0;
      const maxAttempts = 15;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      // delay a bit to allow content to mount
      setTimeout(tryScroll, 100);
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* <PaymentNotice /> */}

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Facilities */}
      <FacilitiesPayment />

      {/* Nearby Colleges & Universities */}
      <NearbyInstitutions />

      {/* Image Carousel */}
      <ImageCarousel />

      

      {/* Monthly Plans */}
      <MonthlyPlans />

      {/* Yearly Plans */}
      <YearlyPlans />

      {/* Rules & Regulations */}
      {/* <RulesRegulations /> */}

      {/* Payment Methods & Extra Services */}
      {/* <PaymentMethods /> */}

      {/* Call to Action */}
      <CallToAction />

      {/* Branch Locations */}
      {/* <Branches /> */}

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 relative overflow-hidden">
        {/* Scattered Images */}
        <div className="absolute inset-0 pointer-events-none z-5 hidden md:block">
          <motion.img
            src={img2}
            alt=""
            className="absolute top-20 left-16 w-16 h-16 opacity-30"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={img4}
            alt=""
            className="absolute top-16 right-20 w-20 h-20 opacity-25"
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.img
            src={img6}
            alt=""
            className="absolute bottom-32 left-24 w-14 h-14 opacity-40"
            animate={{ rotate: [0, 20, -20, 0], x: [0, 10, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.img
            src={img9}
            alt=""
            className="absolute bottom-24 right-16 w-18 h-18 opacity-35"
            animate={{ rotate: [0, -10, 10, 0], y: [0, 8, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 bg-teal-400/20 rounded-full"
            animate={{ scale: [1, 1.3, 1], rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-12 h-12 bg-pink-400/20 rounded-full"
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex md:flex-row flex-col items-center gap-4 mb-4">
                <img src={logo} alt="Logo" className="h-24 w-auto" />
                <motion.h3
                  className="text-2xl font-heading font-sans italic font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  The Bachelor's Space
                </motion.h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg font-body">
                Your home away from home. Comfortable, affordable, and vibrant
                student accommodation.
              </p>
              <div>
                <h4 className="font-medium mb-4 text-xl font-heading">
                  Follow & Contact
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/the_bachelors_space/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="white"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="tel:+918200964448"
                    className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="white"
                      viewBox="0 0 256 256"
                    >
                      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4 text-xl font-heading">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  {
                    href: "#monthly",
                    label: "Monthly Plan",
                    color: "hover:text-yellow-400",
                  },
                  {
                    href: "#yearly",
                    label: "Yearly Plan",
                    color: "hover:text-teal-400",
                  },
                  // {
                  //   href: "#payment",
                  //   label: "Payment Method",
                  //   color: "hover:text-amber-400",
                  // },
                  {
                    href: "#nearby",
                    label: "Nearby",
                    color: "hover:text-purple-300",
                  },
                  {
                    href: "#facilities",
                    label: "Included Facilities",
                    color: "hover:text-pink-400",
                  },
                  {
                    href: "#location",
                    label: "Locations",
                    color: "hover:text-blue-400",
                  },
                  {
                    href: "#branch1-contact",
                    label: "Contact",
                    color: "hover:text-green-400",
                  },
                ].map((link, index) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className={`transition-colors font-body ${link.color}`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div id="location"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4 text-xl font-heading">
                Contact Info
              </h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Branch 1:",
                  "+91 82009 64448",
                  "+91 88669 64448",
                  "Branch 2:",
                  "+91 88669 60171",
                  "+91 88669 60176",
                ].map((contact, index) => (
                  <motion.li
                    key={contact}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 3 }}
                    className="font-body"
                  >
                    {contact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-purple-700 pt-8 mt-12 text-center text-gray-300 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="font-body">
                Made with love By{" "}
                <a
                  className="underline"
                  target="_blank"
                  href="https://www.digilynk.in"
                >
                  Digilynk
                </a>{" "}
              </span>
              <Star className="w-4 h-4 text-yellow-400" />
            </motion.div>
            <p className="font-body">
              &copy; 2025 The Bachelor's Space. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
