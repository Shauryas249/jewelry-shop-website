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
    "name": "Heritage Jewels - Traditional Indian Jewelry",
    "description": "Discover our heritage collection of handcrafted gold, diamond, and precious stone jewelry. Traditional Indian craftsmanship meets timeless elegance.",
    "url": "https://heritagejewels.com",
    "mainEntity": {
      "@type": "JewelryStore",
      "name": "Heritage Jewels",
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
          "item": "https://heritagejewels.com"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Heritage Jewels - Exquisite Traditional Indian Jewelry Since 1952"
        description="Discover our heritage collection of handcrafted gold, diamond, and precious stone jewelry. Traditional Indian craftsmanship meets timeless elegance. Trusted for over 70 years."
        keywords="heritage jewels, indian jewelry, gold jewelry, diamond jewelry, bridal jewelry, traditional jewelry, handcrafted jewelry, mumbai jewelry store, BIS hallmark jewelry"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section with Slider */}
        <HeroSlider />

        {/* Featured Collections Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-4">
                Featured Collections
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Discover our most cherished jewelry collections, each piece crafted with love and tradition
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Bridal Collection",
                  description: "Complete bridal sets for your most precious moments",
                  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Heart,
                  lifestyle: true
                },
                {
                  title: "Gold Jewelry",
                  description: "Traditional and contemporary gold designs",
                  image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Crown,
                  lifestyle: true
                },
                {
                  title: "Diamond Jewelry",
                  description: "Brilliant diamonds in exquisite settings",
                  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Gem,
                  lifestyle: true
                }
              ].map((collection, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="jewelry-card group cursor-pointer h-full overflow-hidden">
                    <div className="relative overflow-hidden h-80">
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
                          View Collection
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center space-x-3 mb-3">
                          <collection.icon className="h-6 w-6 text-gold" />
                          <h3 className="text-2xl font-playfair font-bold">
                            {collection.title}
                          </h3>
                        </div>
                        <p className="text-cream/90 leading-relaxed">
                          {collection.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, hsl(350, 35%, 95%) 0%, hsl(45, 95%, 96%) 100%)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-4">
                Why Choose Heritage Jewels
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Seven decades of trust, quality, and exceptional craftsmanship
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              {[
                {
                  icon: Award,
                  title: "70+ Years",
                  subtitle: "of Excellence",
                  color: "text-rose-gold"
                },
                {
                  icon: Shield,
                  title: "BIS Hallmark",
                  subtitle: "Certified",
                  color: "text-gold"
                },
                {
                  icon: Users,
                  title: "10,000+",
                  subtitle: "Happy Customers",
                  color: "text-rose-gold"
                },
                {
                  icon: Sparkles,
                  title: "Handcrafted",
                  subtitle: "Excellence",
                  color: "text-gold"
                }
              ].map((badge, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="jewelry-card text-center h-full">
                    <CardContent className="luxury-spacing">
                      <badge.icon className={`h-12 w-12 ${badge.color} mx-auto mb-4`} />
                      <h3 className="text-2xl font-playfair font-bold text-charcoal mb-1">
                        {badge.title}
                      </h3>
                      <p className="text-charcoal/70 font-medium">
                        {badge.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Handcrafted Excellence Promise */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 jewelry-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Sparkles className="h-8 w-8 text-rose-gold" />
                    <h3 className="text-3xl font-playfair font-bold text-rose-gold">
                      Handcrafted Excellence Promise
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "100% authentic materials with certification",
                      "Traditional techniques passed down through generations",
                      "Lifetime authenticity and quality guarantee",
                      "Custom design services for unique pieces",
                      "Expert consultation and after-sales support"
                    ].map((promise, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-rose-gold flex-shrink-0" />
                        <span className="text-charcoal/80">{promise}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Master craftsman at Heritage Jewels working on traditional Indian jewelry with precision and care"
                    width={600}
                    height={450}
                    className="w-full rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 rounded-xl border-2 border-rose-gold/30"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <TestimonialsCarousel />

        {/* About Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Heritage Jewels legacy - Traditional Indian gold jewelry showcasing 70+ years of craftsmanship excellence"
                  width={800}
                  height={600}
                  className="w-full rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-rose-gold/30"></div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-rose-gold text-white p-6 rounded-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-playfair font-bold">1952</div>
                    <div className="text-sm">Established</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-6">
                  A Legacy of Excellence
                </h2>
                
                <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                  <p>
                    For over seven decades, Heritage Jewels has been synonymous with exceptional 
                    craftsmanship and authentic Indian jewelry. Founded in 1952, our family business 
                    has preserved traditional techniques while embracing contemporary elegance.
                  </p>
                  
                  <p>
                    Each piece in our collection tells a story of heritage, passion, and meticulous 
                    attention to detail. From bridal sets that celebrate life's most precious moments 
                    to everyday elegance that enhances your natural beauty.
                  </p>
                  
                  <p>
                    Our master craftsmen, trained in age-old techniques, ensure that every piece 
                    meets the highest standards of quality and authenticity that our customers 
                    have trusted for generations.
                  </p>
                </div>

                <div className="mt-8">
                  <Link href="/about">
                    <Button 
                      size="lg" 
                      className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8"
                    >
                      Learn More About Our Heritage
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-charcoal text-cream">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Visit Our Heritage Showroom
              </h2>
              <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                Experience our collection in person and receive personalized consultation from our experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  details: ["info@heritagejewels.com", "custom@heritagejewels.com", "Response within 24 hours"]
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-cream/10 border-rose-gold text-center h-full">
                    <CardContent className="luxury-spacing">
                      <contact.icon className="h-12 w-12 text-rose-gold mx-auto mb-4" />
                      <h3 className="text-xl font-playfair font-semibold mb-4">
                        {contact.title}
                      </h3>
                      <div className="space-y-2">
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-cream/80">
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
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button 
                    size="lg" 
                    className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8"
                  >
                    Browse Our Catalog
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-cream text-cream hover:bg-cream hover:text-charcoal px-8"
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
                    Heritage Jewels
                  </span>
                  <span className="text-sm text-white/70">Since 1952</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/90">© 2024 Heritage Jewels. All rights reserved.</p>
                <p className="text-white/70 text-sm mt-1">Crafting dreams for over seven decades</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}