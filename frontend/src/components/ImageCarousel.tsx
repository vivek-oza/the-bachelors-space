'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

// Import carousel images
import img1 from '../assets/Carousel/1.webp'
import img2 from '../assets/Carousel/2.webp'
import img3 from '../assets/Carousel/3.webp'
import img4 from '../assets/Carousel/4.webp'
import img5 from '../assets/Carousel/5.webp'
import img6 from '../assets/Carousel/6.webp'
import img7 from '../assets/Carousel/7.webp'
import img8 from '../assets/Carousel/8.webp'

const carouselImages = [
  { src: img1, aspectRatio: 'horizontal' },
  { src: img2, aspectRatio: 'horizontal' },
  { src: img3, aspectRatio: 'horizontal' },
  { src: img4, aspectRatio: 'vertical' },
  { src: img5, aspectRatio: 'vertical' },
  { src: img6, aspectRatio: 'vertical' },
  { src: img7, aspectRatio: 'vertical' },
  { src: img8, aspectRatio: 'vertical' }
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  const AUTOPLAY_DELAY = 3000

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
    
    setProgress(0)
    
    // Progress animation
    progressRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0
        return prev + (100 / (AUTOPLAY_DELAY / 50))
      })
    }, 50)

    // Slide change
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % carouselImages.length)
      setProgress(0)
    }, AUTOPLAY_DELAY)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
  }

  useEffect(() => {
    if (isPlaying) {
      startAutoplay()
    } else {
      stopAutoplay()
    }

    return () => {
      stopAutoplay()
    }
  }, [isPlaying, currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? carouselImages.length - 1 : prev - 1)
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % carouselImages.length)
  }

  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying)
  // }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">📸</span>
            <span className="font-medium font-body">Gallery</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-purple-900 mb-6 font-heading">
            Experience Our Space
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Take a visual tour of our modern facilities and comfortable living spaces
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative mb-8 rounded-2xl overflow-hidden bg-gray-100">
            <div className="relative w-full" style={{ height: 'clamp(250px, 50vw, 400px)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={carouselImages[currentIndex].src}
                    alt={`Carousel image ${currentIndex + 1}`}
                    className={`rounded-2xl ${
                      carouselImages[currentIndex].aspectRatio === 'horizontal'
                        ? 'w-full h-full object-contain md:object-cover'
                        : 'h-full w-auto object-cover'
                    }`}
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

            {/* Play/Pause Button */}
            {/* <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button> */}
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
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%'
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
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {carouselImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-purple-500 scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-16 object-cover"
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
  )
}