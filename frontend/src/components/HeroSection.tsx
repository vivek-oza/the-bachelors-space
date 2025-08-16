"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import heroVideo from "../assets/Hero/hero_video.mp4";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

      <div className="relative z-10 w-full h-full flex items-end justify-start">
        <div className="max-w-[2560px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 w-full">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex justify-start">
            <div className="space-y-3 lg:space-y-4 xl:space-y-6 py-14 lg:py-16 xl:py-20 flex max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex-col">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex md:flex-row flex-col md:gap-x-3 gap-x-1 w-full justify-start text-white leading-tight font-sans font-semibold">
                  Find Your Perfect Hostel Space
                </h1>
              </motion.div>

              <motion.p
                className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-start md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Live, learn, and grow in comfort and community. Choose the right
                plan for you, with all-inclusive facilities, security, and
                vibrant living spaces.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="default"
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
                    className="bg-white text-indigo-800 px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 rounded-2xl font-medium text-lg lg:text-xl xl:text-2xl shadow-lg hover:shadow-2xl hover:bg-yellow-400 transition-all duration-300 font-body"
                  >
                    <motion.span
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Explore Plans
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
