import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gem, Crown, Star, Heart, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

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
  return (
    <>
      <Head>
        <title>Maharaja Jewels - Exquisite Indian Jewelry Collection</title>
        <meta name="description" content="Discover our heritage collection of handcrafted gold, diamond, and precious stone jewelry. Traditional Indian craftsmanship meets timeless elegance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <motion.nav 
          className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-gold/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Crown className="h-8 w-8 text-burgundy" />
                <span className="text-2xl font-playfair font-bold text-burgundy">Maharaja Jewels</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#collections" className="text-charcoal hover:text-burgundy transition-colors">Collections</Link>
                <Link href="#heritage" className="text-charcoal hover:text-burgundy transition-colors">Heritage</Link>
                <Link href="#contact" className="text-charcoal hover:text-burgundy transition-colors">Contact</Link>
                <Link href="/dashboard">
                  <Button className="bg-burgundy hover:bg-burgundy/90 text-cream">
                    View Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury Indian Jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-burgundy/80 via-burgundy/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-playfair font-bold text-cream leading-tight"
              >
                Timeless
                <span className="block text-gold">Elegance</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto leading-relaxed"
              >
                Discover our heritage collection of handcrafted gold, diamond, and precious stone jewelry. 
                Where traditional Indian craftsmanship meets contemporary sophistication.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-4 text-lg">
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-cream text-cream hover:bg-cream hover:text-charcoal px-8 py-4 text-lg"
                >
                  Book Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Categories */}
        <section id="collections" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-4">
                Our Collections
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Each piece tells a story of heritage, craftsmanship, and timeless beauty
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Bridal Collection",
                  description: "Exquisite pieces for your special day",
                  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Heart,
                  badge: "Most Popular"
                },
                {
                  title: "Diamond Jewelry",
                  description: "Brilliant diamonds in stunning settings",
                  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Gem,
                  badge: "Premium"
                },
                {
                  title: "Gold Ornaments",
                  description: "Traditional and contemporary gold designs",
                  image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  icon: Star,
                  badge: "Heritage"
                }
              ].map((category, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="jewelry-card group cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-burgundy text-cream">
                          {category.badge}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="luxury-spacing">
                      <div className="flex items-center space-x-3 mb-3">
                        <category.icon className="h-6 w-6 text-burgundy" />
                        <h3 className="text-xl font-playfair font-semibold text-charcoal">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-charcoal/70 leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Heritage Section */}
        <section id="heritage" className="py-20 luxury-gradient">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-6">
                  Three Generations of Excellence
                </h2>
                <p className="text-xl text-cream/90 leading-relaxed mb-8">
                  Since 1952, our family has been crafting jewelry that celebrates India's rich heritage. 
                  Each piece is meticulously handcrafted by master artisans who have inherited techniques 
                  passed down through generations.
                </p>
                <div className="space-y-4">
                  {[
                    "Certified authentic materials",
                    "Traditional craftsmanship techniques",
                    "Lifetime authenticity guarantee",
                    "Custom design services"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-cream/90">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Master Craftsman"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-gold/30"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-4">
                Visit Our Showroom
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Experience our collection in person and receive personalized consultation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  details: ["123 Jewelry Street", "Mumbai, Maharashtra", "India - 400001"]
                },
                {
                  icon: Phone,
                  title: "Phone",
                  details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 10AM-8PM"]
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: ["info@maharajajewels.com", "custom@maharajajewels.com", "We reply within 24 hours"]
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="jewelry-card text-center h-full">
                    <CardContent className="luxury-spacing">
                      <contact.icon className="h-12 w-12 text-burgundy mx-auto mb-4" />
                      <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">
                        {contact.title}
                      </h3>
                      <div className="space-y-2">
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-charcoal/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-charcoal text-cream py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Crown className="h-8 w-8 text-gold" />
                <span className="text-2xl font-playfair font-bold">Maharaja Jewels</span>
              </div>
              <div className="text-center md:text-right">
                <p className="text-cream/80">© 2024 Maharaja Jewels. All rights reserved.</p>
                <p className="text-cream/60 text-sm mt-1">Crafting dreams since 1952</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}