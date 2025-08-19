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
        <source src={"https://res.cloudinary.com/dzczhbca6/video/upload/v1755526709/hero_video_sq84eo.mp4"}/>
      </video>
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video> */}

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

      <div className="relative z-10 w-full h-full flex items-end justify-start">
        <div className="max-w-[2560px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 w-full">
          <div className="max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-xl 2xl:max-w-full flex justify-center sm:justify-start">
            <div className="space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 2xl:space-y-12 3xl:space-y-16 py-12 md:py-14 lg:py-16 xl:py-10 2xl:py-24 3xl:py-28 flex max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl 3xl:max-w-8xl flex-col">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-7xl flex md:flex-row flex-col md:gap-x-3 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6 gap-x-2 w-full justify-start text-white leading-tight font-sans font-semibold">
                  Find Your Perfect Hostel Space
                </h1>
              </motion.div>

              <motion.p
                className="text-base  sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-4xl 3xl:text-5xl text-center sm:text-start 3xl:text-5xl text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl 3xl:max-w-6xl font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Live, learn, and grow in comfort and community. Choose the right
                plan for you, with all-inclusive facilities, security, and
                vibrant living spaces.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 3xl:gap-12 justify-start items-center"
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
                    className="bg-white text-indigo-800 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-8 lg:py-6 xl:px-16 xl:py-8 2xl:px-20 2xl:py-10 3xl:px-24 3xl:py-12 rounded-2xl lg:rounded-3xl font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl shadow-lg hover:shadow-2xl hover:bg-yellow-400 transition-all duration-300 font-body"
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
