"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, ChevronLeft, ChevronRight, Pause, Play, ZapIcon } from "lucide-react";

// Import carousel images
import img1 from "../assets/Carousel/1.webp";
import img2 from "../assets/Carousel/2.webp";
import img3 from "../assets/Carousel/3.webp";
// import img4 from '../assets/Carousel/4.webp'
// import img5 from '../assets/Carousel/5.webp'
// import img6 from '../assets/Carousel/6.webp'
// import img7 from '../assets/Carousel/7.webp'
// import img8 from '../assets/Carousel/8.webp'

const carouselImages = [
  { src: img1, aspectRatio: "horizontal" },
  { src: img2, aspectRatio: "horizontal" },
  { src: img3, aspectRatio: "horizontal" },
  // { src: img4, aspectRatio: 'vertical' },
  // { src: img5, aspectRatio: 'vertical' },
  // { src: img6, aspectRatio: 'vertical' },
  // { src: img7, aspectRatio: 'vertical' },
  // { src: img8, aspectRatio: 'vertical' }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next/right, -1: previous/left
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const AUTOPLAY_DELAY = 3000;

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);

    // Progress animation
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (AUTOPLAY_DELAY / 50);
      });
    }, 50);

    // Slide change
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
      setProgress(0);
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [isPlaying, currentIndex]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : index < currentIndex ? -1 : direction);
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying)
  // }

  return (
    <section id="updates" className="w-full py-16 lg:py-16 xl:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-[2560px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-14 xl:mb-18"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-3 lg:mb-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><ZapIcon /></span>
            <span className="font-medium font-body text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-2xl">See Whats New</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-purple-900 mb-4 lg:mb-6 font-heading">
            Updates
          </h2>
          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto font-body">
            Take a virtual tour of our modern, well-equipped hostel facilities
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-100">
            <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] xl:aspect-[24/9] 2xl:aspect-[28/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: direction > 0 ? "100%" : "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: direction > 0 ? "-100%" : "100%" }}
                  transition={{ duration: 0.45, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center px-10 sm:px-3 box-border p-1.5 sm:p-2 bg-transparent rounded-2xl shadow-md"
                >
                  <img
                    src={carouselImages[currentIndex].src}
                    alt={`Carousel image ${currentIndex + 1}`}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
              >
                <div className="w-12 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        index === currentIndex
                          ? `${progress}%`
                          : index < currentIndex
                            ? "100%"
                            : "0%",
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-4 overflow-x-auto py-6">
            {carouselImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                    ? "ring-4 ring-purple-500 scale-110"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-20 object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-purple-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
