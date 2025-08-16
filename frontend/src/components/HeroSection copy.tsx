"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles, Zap, Heart } from "lucide-react";
import heroBgImage from "../assets/Hero/hero_image.webp";
import heroBgImageTablet from "../assets/Hero/hero_image_tablet.webp";
import heroBgImagePhone from "../assets/Hero/hero_image_phone.webp";
import img2 from "../assets/2.png";
import img4 from "../assets/4.png";
import img6 from "../assets/6.png";
import img9 from "../assets/9.png";

export function HeroSectionCopy() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
      style={{
        backgroundImage: `url(${heroBgImagePhone})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          #hero {
            background-image: url(${heroBgImageTablet}) !important;
          }
        }
        @media (min-width: 1024px) {
          #hero {
            background-image: url(${heroBgImage}) !important;
          }
        }
      `}</style>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-900/70 to-blue-900/70"></div>
      {/* Grid Background Effect */}
      {/* <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(circle_at_50%_20%,black_20%,transparent_40%)]"></div> */}

      {/* Enhanced Background Elements with micro-interactions */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -10, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-40 left-32"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-7 h-7 text-pink-400 opacity-60" />
        </motion.div>
      </div>

      {/* Scattered Images around heading */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <motion.img
          src={img2}
          alt=""
          className="absolute top-32 left-2 md:left-20 w-12 md:w-16 h-12 md:h-16 opacity-60"
          animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={img4}
          alt=""
          className="absolute top-20 right-2 md:right-24 w-14 md:w-20 h-14 md:h-20 opacity-50"
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
          className="absolute top-60 left-4 md:left-32 w-10 md:w-14 h-10 md:h-14 opacity-70"
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
          className="absolute top-48 right-4 md:right-16 w-12 md:w-18 h-12 md:h-18 opacity-55"
          animate={{ rotate: [0, -10, 10, 0], y: [0, 8, -8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto px-6 md:pt-44 ">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 py-14 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-6xl lg:text-6xl flex md:flex-row flex-col md:gap-x-3 gap-x-1 w-full justify-center items-center text-white leading-tight font-serif italic">
                Find Your Perfect
                <motion.span
                  className=" flex gap-x-1 justify-center items-center bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Hostel Space
                </motion.span>
              </h1>
            </motion.div>
            <div className="flex flex-col items-center justify-center space-y-6">
              <motion.p
                className="text-xl text-center md:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0 font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Flexible Accommodation • Yearly & Monthly Plans
              </motion.p>

              <motion.p
                className="text-lg text-center md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Live, learn, and grow in comfort and community. Choose the right
                plan for you, with all-inclusive facilities, security, and
                vibrant living spaces.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById("monthly");
                      if (element) {
                        const navHeight = 80;
                        const elementPosition = element.offsetTop - navHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-8 py-4 rounded-2xl font-medium text-lg shadow-lg hover:shadow-2xl transition-all duration-300 font-body"
                  >
                    <motion.span
                      // animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Explore Plans
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          {/* <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-100 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Happy students in modern hostel accommodation"
                className="w-full h-auto max-h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
          </motion.div> */}
          {/* Floating stats overlay */}
          {/* <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="grid grid-cols-3 gap-2">
              {[
                { number: '500+', label: 'Students' },
                { number: '98%', label: 'Satisfaction' },
                { number: '5★', label: 'Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-lg text-purple-900 font-heading">{stat.number}</div>
                  <div className="text-xs text-gray-600 font-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
