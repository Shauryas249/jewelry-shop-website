import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The bridal jewelry set I purchased for my wedding was absolutely stunning. The craftsmanship and attention to detail exceeded my expectations. Heritage Jewels made my special day even more memorable.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Delhi",
    rating: 5,
    text: "I've been buying jewelry from Heritage Jewels for over 10 years. Their gold purity is unmatched, and the traditional designs are authentic. The family has maintained their quality standards across generations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Anita Reddy",
    location: "Bangalore",
    rating: 5,
    text: "The diamond necklace I bought for my anniversary is breathtaking. The staff was knowledgeable and helped me choose the perfect piece. The certification and quality assurance gave me complete confidence.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "Heritage Jewels combines traditional Rajasthani craftsmanship with modern elegance. The kundan jewelry I purchased reflects the rich heritage of Indian artistry. Truly exceptional work.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Meera Iyer",
    location: "Chennai",
    rating: 5,
    text: "The temple jewelry collection is authentic and beautifully crafted. Each piece tells a story of South Indian tradition. The gold work is intricate and the finishing is flawless.",
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-gold fill-gold' : 'text-charcoal/20'
        }`}
      />
    ));
  };

  return (
    <div className="relative bg-cream/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Trusted by thousands of families across India for over 70 years
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
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-8 md:p-12 jewelry-card max-w-4xl mx-auto"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Customer Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-gold/20"
                    />
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-burgundy/20 mb-4 mx-auto md:mx-0" />
                    
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-charcoal leading-relaxed mb-6 font-inter">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-burgundy">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-charcoal/70">
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-white border border-rose-gold/20 hover:bg-cream/50 transition-colors group"
          >
            <ChevronLeft className="h-6 w-6 text-burgundy group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 rounded-full bg-white border border-rose-gold/20 hover:bg-cream/50 transition-colors group"
          >
            <ChevronRight className="h-6 w-6 text-burgundy group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-burgundy scale-125'
                  : 'bg-charcoal/20 hover:bg-charcoal/40'
              }`}
            />
          ))}
        </div>

        {/* Customer Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-rose-gold/20">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={testimonial.id}
                  src={testimonial.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-charcoal/70 font-medium">
              Trusted by 10,000+ happy customers
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}