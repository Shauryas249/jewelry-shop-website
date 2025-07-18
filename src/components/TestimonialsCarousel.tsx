import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mrs. Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Exquisite craftsmanship and beautiful traditional designs. Bawa Jewellers created the perfect bridal set for my daughter's wedding.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Mr. Rajesh Gupta",
    location: "Delhi",
    rating: 5,
    text: "Outstanding quality and genuine certifications. Trusted them for over 20 years for all our jewelry needs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Ms. Kavitha Reddy",
    location: "Bangalore",
    rating: 5,
    text: "Beautiful collection of gold jewelry. The intricate work and attention to detail is remarkable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Mrs. Sunita Agarwal",
    location: "Pune",
    rating: 5,
    text: "The diamond earrings I purchased are absolutely stunning. The quality and service exceeded all expectations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  // Handle swipe gestures
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevTestimonial();
    } else if (info.offset.x < -swipeThreshold) {
      nextTestimonial();
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < rating ? 'text-gold fill-gold' : 'text-charcoal/20'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl p-6 jewelry-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <h3 className="text-xl font-playfair font-bold text-rose-gold mb-2">
          Customer Testimonials
        </h3>
        <p className="text-sm text-charcoal/70">
          Trusted by thousands across India
        </p>
      </motion.div>

      <div className="relative">
        {/* Main Testimonial Display */}
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.95 }}
            >
              <div className="flex items-start space-x-3">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-gold/20"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  {/* Quote Icon */}
                  <Quote className="h-4 w-4 text-rose-gold/30 mb-2" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-2">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-sm text-charcoal leading-relaxed mb-3">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div>
                    <h4 className="text-sm font-playfair font-semibold text-rose-gold">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-xs text-charcoal/60">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-rose-gold/10 hover:bg-rose-gold/20 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 text-rose-gold" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-rose-gold/10 hover:bg-rose-gold/20 transition-colors"
        >
          <ChevronRight className="h-4 w-4 text-rose-gold" />
        </button>
      </div>

      {/* Testimonial Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentTestimonial
                ? 'bg-rose-gold scale-125'
                : 'bg-charcoal/20 hover:bg-charcoal/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}