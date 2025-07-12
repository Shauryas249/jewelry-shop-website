import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    title: "Royal Bridal Collection",
    subtitle: "Exquisite pieces for your special day",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Explore Bridal Sets"
  },
  {
    id: 2,
    title: "Diamond Elegance",
    subtitle: "Brilliant diamonds in timeless settings",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "View Diamond Collection"
  },
  {
    id: 3,
    title: "Heritage Gold Jewelry",
    subtitle: "Traditional craftsmanship meets modern design",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Discover Gold Pieces"
  },
  {
    id: 4,
    title: "Precious Stone Collection",
    subtitle: "Ruby, emerald, and sapphire masterpieces",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "View Precious Stones"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800020' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-burgundy/80 via-burgundy/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-cream leading-tight">
                      Heritage Jewels
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-cream/90 font-inter">
                      Exquisite Traditional Indian Jewelry Since 1952
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-gold">
                        {heroSlides[currentSlide].title}
                      </h2>
                      <p className="text-lg text-cream/80">
                        {heroSlides[currentSlide].subtitle}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link href="/dashboard">
                        <Button 
                          size="lg" 
                          className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-4 text-lg"
                        >
                          Explore Our Collection
                        </Button>
                      </Link>
                      <Link href="/store-location">
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="border-cream text-cream hover:bg-cream hover:text-charcoal px-8 py-4 text-lg"
                        >
                          Visit Our Store
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gold scale-125' 
                    : 'bg-cream/50 hover:bg-cream/70'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-cream/20 hover:bg-cream/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-cream" />
            ) : (
              <Play className="h-4 w-4 text-cream" />
            )}
          </button>
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-cream/20 hover:bg-cream/30 transition-colors group"
      >
        <ChevronLeft className="h-6 w-6 text-cream group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-cream/20 hover:bg-cream/30 transition-colors group"
      >
        <ChevronRight className="h-6 w-6 text-cream group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-cream/20 z-20">
        <motion.div
          className="h-full bg-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: isPlaying ? 5 : 0, 
            ease: "linear",
            repeat: isPlaying ? Infinity : 0
          }}
          key={`${currentSlide}-${isPlaying}`}
        />
      </div>
    </div>
  );
}