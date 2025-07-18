import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { 
  Crown, 
  Gem, 
  Heart, 
  Star, 
  Shield, 
  Award, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bawa Jewellers - Traditional Indian Jewelry",
    "description": "Discover our heritage collection of handcrafted gold, diamond, and precious stone jewelry. Traditional Indian craftsmanship meets timeless elegance.",
    "url": "https://bawajewellers.com",
    "mainEntity": {
      "@type": "JewelryStore",
      "name": "Bawa Jewellers",
      "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Heritage Street",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "telephone": "+91-98765-43210",
      "openingHours": "Mo-Sa 10:00-20:00",
      "priceRange": "₹₹₹"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bawajewellers.com"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Bawa Jewellers - Exquisite Traditional Indian Jewelry Since 1952"
        description="Discover our heritage collection of handcrafted gold, diamond, and precious stone jewelry. Traditional Indian craftsmanship meets timeless elegance. Trusted for over 70 years."
        keywords="bawa jewellers, indian jewelry, gold jewelry, diamond jewelry, bridal jewelry, traditional jewelry, handcrafted jewelry, mumbai jewelry store, BIS hallmark jewelry"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section with Slider */}
        <HeroSlider />

        {/* Featured Collections Grid */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-rose-gold mb-3">
                Featured Collections
              </h2>
              <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
                Discover our most cherished jewelry collections, each piece crafted with love and tradition
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-2.5"
            >
              {[
                {
                  title: "Bridal Collection",
                  description: "Complete bridal sets for your special day",
                  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Heart,
                  link: "/collections/bridal-collection",
                  buttonText: "View Bridal Jewelry"
                },
                {
                  title: "Gold Jewelry",
                  description: "22K & 18K gold pieces crafted with precision",
                  image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Crown,
                  link: "/collections/gold-jewelry",
                  buttonText: "Explore Gold Collection"
                },
                {
                  title: "Diamond Jewelry",
                  description: "Certified diamonds in elegant settings",
                  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Gem,
                  link: "/collections/diamond-jewelry",
                  buttonText: "View Diamonds"
                }
              ].map((collection, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Link href={collection.link}>
                    <Card className="jewelry-card group cursor-pointer h-[300px] overflow-hidden">
                      <div className="relative overflow-hidden h-full">
                        <OptimizedImage
                          src={collection.image}
                          alt={`${collection.title} - Traditional Indian jewelry collection featuring authentic handcrafted pieces`}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-rose-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button 
                            className="bg-white hover:bg-white/90 text-rose-gold border border-rose-gold font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            {collection.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <collection.icon className="h-5 w-5 text-gold" />
                            <h3 className="text-xl font-playfair font-bold">
                              {collection.title}
                            </h3>
                          </div>
                          <p className="text-cream/90 text-sm leading-snug">
                            {collection.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators & Testimonials Combined */}
        <section className="py-10" style={{ background: 'linear-gradient(135deg, hsl(350, 35%, 95%) 0%, hsl(45, 95%, 96%) 100%)' }}>
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-rose-gold mb-3">
                Why Choose Bawa Jewellers
              </h2>
              <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
                Seven decades of trust, quality, and exceptional craftsmanship
              </p>
            </motion.div>

            {/* Why Choose Heritage Jewels - 4 Key Points */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: Award,
                    title: "70+ Years Experience",
                    description: "Seven decades of traditional craftsmanship",
                    color: "text-rose-gold"
                  },
                  {
                    icon: Shield,
                    title: "BIS Hallmarked Gold",
                    description: "All gold jewelry is BIS hallmark certified",
                    color: "text-gold"
                  },
                  {
                    icon: Gem,
                    title: "GIA Certified Diamonds",
                    description: "Authentic diamonds with GIA certification",
                    color: "text-rose-gold"
                  },
                  {
                    icon: Sparkles,
                    title: "Custom Designs",
                    description: "Bespoke jewelry tailored to your vision",
                    color: "text-gold"
                  }
                ].map((item, index) => (
                  <Card key={index} className="jewelry-card text-center h-full">
                    <CardContent className="p-6">
                      <item.icon className={`h-10 w-10 ${item.color} mx-auto mb-3`} />
                      <h3 className="text-lg font-playfair font-bold text-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <TestimonialsCarousel />
            </motion.div>
          </div>
        </section>

        {/* Excellence Promise Section - Separate Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="h-8 w-8 text-rose-gold" />
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-rose-gold">
                  Our Excellence Promise
                </h2>
              </div>
              <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
                Four pillars of quality that define every piece we create
              </p>
            </motion.div>

            {/* 4-Column Grid for Promise Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: Shield,
                  title: "100% Authentic Materials",
                  description: "Every piece crafted with certified authentic materials and proper documentation"
                },
                {
                  icon: Users,
                  title: "Traditional Techniques",
                  description: "Time-honored craftsmanship methods passed down through generations"
                },
                {
                  icon: Award,
                  title: "Lifetime Guarantee",
                  description: "Comprehensive authenticity and quality guarantee for complete peace of mind"
                },
                {
                  icon: Sparkles,
                  title: "Custom Design Services",
                  description: "Bespoke jewelry creation tailored to your unique vision and requirements"
                }
              ].map((promise, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="jewelry-card text-center h-full">
                    <CardContent className="p-6">
                      <promise.icon className="h-12 w-12 text-rose-gold mx-auto mb-4" />
                      <h3 className="text-lg font-playfair font-bold text-charcoal mb-3">
                        {promise.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm leading-relaxed">
                        {promise.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-8 lg:mb-0"
              >
                <div className="relative">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Bawa Jewellers legacy - Traditional Indian gold jewelry showcasing 70+ years of craftsmanship excellence"
                    width={800}
                    height={600}
                    className="w-full rounded-2xl shadow-lg"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-rose-gold/30"></div>
                </div>
                
                {/* Floating Badge - Fixed positioning */}
                <div className="absolute -bottom-4 -right-4 bg-rose-gold text-white p-4 rounded-xl shadow-lg z-10">
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold">1952</div>
                    <div className="text-xs">Established</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-20"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-rose-gold mb-6">
                  A Legacy of Excellence
                </h2>
                
                <div className="space-y-4 text-base text-charcoal/80 leading-relaxed mb-8">
                  <p>
                    For over seven decades, Bawa Jewellers has been synonymous with exceptional 
                    craftsmanship and authentic Indian jewelry. Founded in 1952, our family business 
                    has preserved traditional techniques while embracing contemporary elegance.
                  </p>
                  
                  <p>
                    Each piece in our collection tells a story of heritage, passion, and meticulous 
                    attention to detail. From bridal sets that celebrate life's most precious moments 
                    to everyday elegance that enhances your natural beauty.
                  </p>
                </div>

                <div>
                  <Link href="/about">
                    <Button 
                      size="default" 
                      className="bg-rose-gold hover:bg-rose-gold/90 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Learn More About Our Heritage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 bg-charcoal text-cream">
          <div className="max-w-7xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">
                Visit Our Heritage Showroom
              </h2>
              <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                Experience our collection in person and receive personalized consultation from our experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Showroom Location",
                  details: ["123 Heritage Street", "Jewelry District, Mumbai", "Maharashtra - 400001"]
                },
                {
                  icon: Phone,
                  title: "Contact Numbers",
                  details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 10:00 AM - 8:00 PM"]
                },
                {
                  icon: Mail,
                  title: "Email & Support",
                  details: ["info@bawajewellers.com", "custom@bawajewellers.com", "Response within 24 hours"]
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-cream/10 border-rose-gold text-center h-full">
                    <CardContent className="p-6">
                      <contact.icon className="h-10 w-10 text-rose-gold mx-auto mb-3" />
                      <h3 className="text-lg font-playfair font-semibold mb-3">
                        {contact.title}
                      </h3>
                      <div className="space-y-1">
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-cream/80 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/dashboard">
                  <Button 
                    size="default" 
                    className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-6"
                  >
                    Browse Our Catalog
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="border-cream text-cream hover:bg-cream hover:text-charcoal px-6"
                  >
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-rose-gold text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <Crown className="h-10 w-10 text-gold" />
                <div>
                  <span className="text-2xl font-playfair font-bold block leading-tight">
                    Bawa Jewellers
                  </span>
                  <span className="text-sm text-white/70">Since 1952</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/90">© 2024 Bawa Jewellers. All rights reserved.</p>
                <p className="text-white/70 text-sm mt-1">Crafting dreams for over seven decades</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}