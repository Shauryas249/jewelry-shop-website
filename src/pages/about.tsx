import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import Link from 'next/link';
import {
  Crown,
  Award,
  Users,
  Sparkles,
  Heart,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
  Gem,
  Hammer,
  Eye
} from 'lucide-react';

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

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "JewelryStore",
      "name": "Manu Bawa Jewellers",
      "description": "A family-owned jewelry business established in 1925, specializing in traditional Indian jewelry with nearly 100 years of craftsmanship excellence.",
      "foundingDate": "1925",
      "founder": {
        "@type": "Person",
        "name": "Manu Bawa Jewellers Founder"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Heritage Street",
        "addressLocality": "Rohtak",
        "addressRegion": "Haryana",
        "postalCode": "124001",
        "addressCountry": "IN"
      },
      "telephone": "+91-98765-43210",
      "email": "info@manubawajewellers.com",
      "url": "https://manubawajewellers.com",
      "sameAs": [
        "https://www.facebook.com/manubawajewellers",
        "https://www.instagram.com/manubawajewellers"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manu Bawa Jewellers Collection",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Traditional Gold Jewelry",
              "category": "Jewelry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Diamond Jewelry",
              "category": "Jewelry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Bridal Collection",
              "category": "Jewelry"
            }
          }
        ]
      }
    }
  };

  return (
    <>
      <SEO
        title="About Manu Bawa Jewellers - 99+ Years of Traditional Indian Jewelry Excellence"
        description="Learn about Manu Bawa Jewellers' rich history since 1925. Discover our commitment to traditional Indian craftsmanship, quality, and authentic jewelry making. Family-owned business with nearly 100 years of excellence."
        keywords="manu bawa jewellers history, traditional indian jewelry, family jewelry business, handcrafted jewelry rohtak, jewelry craftsmanship, BIS certified jewelry, authentic indian jewelry"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-gold via-rose-gold/90 to-rose-gold/80 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-6 text-lg px-6 py-2 shadow-lg backdrop-blur-sm">
                Established 1925
              </Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white drop-shadow-lg">
                Our Heritage Story
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Nearly a century of preserving traditional Indian jewelry craftsmanship while creating timeless pieces that celebrate life's most precious moments
              </p>
            </motion.div>
          </div>
        </section>

        {/* Heritage Timeline */}
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
                A Journey Through Time
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                From humble beginnings to becoming Rohtak's trusted jewelry destination
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
              {/* Left Side - Image Container */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 mb-12 lg:mb-0 relative z-10"
              >
                <div className="relative">
                  <OptimizedImage
                    src="https://assets.co.dev/39c721f8-c578-41cf-bd78-6033041a65ba/whatsapp-image-2025-07-28-at-23.31.15-ef16b47.jpeg"
                    alt="Owner of Manu Bawa Jewellers - Continuing the family legacy since 1925"
                    width={800}
                    height={600}
                    className="rounded-2xl w-full shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                    <p className="text-sm font-medium">Owner, Manu Bawa Jewellers</p>
                    <p className="text-xs text-white/80">Continuing the family legacy</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Timeline Content in Box */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative z-20"
              >
                <Card className="bg-white border border-rose-gold/20 shadow-xl relative z-30">
                  <CardContent className="p-8 relative z-40">
                    <div className="space-y-8">
                      {[
                        {
                          icon: Clock,
                          year: "1925 - The Beginning",
                          description: "Founded by a master craftsman with a vision to preserve traditional Indian jewelry techniques. Started with a small workshop in Rohtak's jewelry district, focusing on authentic handcrafted pieces.",
                          bgColor: "bg-rose-gold",
                          textColor: "text-white"
                        },
                        {
                          icon: Award,
                          year: "1970s - Recognition",
                          description: "Gained recognition for exceptional craftsmanship and authentic designs. Became the preferred choice for traditional bridal jewelry among Rohtak's families.",
                          bgColor: "bg-gold",
                          textColor: "text-charcoal"
                        },
                        {
                          icon: Crown,
                          year: "1990s - Expansion",
                          description: "Expanded our collection to include contemporary designs while maintaining traditional roots. Introduced diamond jewelry and precious stone collections.",
                          bgColor: "bg-rose-gold",
                          textColor: "text-white"
                        },
                        {
                          icon: Sparkles,
                          year: "2020s - Digital Heritage",
                          description: "Embraced digital transformation while preserving our heritage values. Now serving customers worldwide with the same commitment to quality and authenticity.",
                          bgColor: "bg-gold",
                          textColor: "text-charcoal"
                        }
                      ].map((timeline, index) => (
                        <div key={index} className="flex items-start space-x-4 pb-4 border-b border-rose-gold/10 last:border-b-0 last:pb-0">
                          <div className={`${timeline.bgColor} ${timeline.textColor} rounded-full p-3 flex-shrink-0 shadow-lg`}>
                            <timeline.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-playfair font-bold text-rose-gold mb-2">
                              {timeline.year}
                            </h3>
                            <p className="text-charcoal/80 leading-relaxed text-sm">
                              {timeline.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Heritage Pamphlet */}
        <section className="py-20 bg-gradient-to-br from-rose-gold/5 to-gold/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-4">
                Our Heritage Collection
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Discover our exclusive collection showcasing the finest traditional Indian jewelry craftsmanship
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full mx-auto"
            >
              <div className="relative bg-white rounded-lg shadow-2xl border border-rose-gold/20 p-6 overflow-hidden">
                <div className="w-full flex justify-center">
                  <OptimizedImage
                    src="https://assets.co.dev/39c721f8-c578-41cf-bd78-6033041a65ba/whatsapp-image-2025-07-28-at-23.31.16-ac5db24.jpeg"
                    alt="Manu Bawa Jewellers Heritage Collection Pamphlet - Traditional Indian Jewelry Showcase"
                    width={2000}
                    height={1500}
                    className="max-w-full h-auto rounded-lg"
                    style={{ 
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <div className="absolute top-8 right-8 bg-rose-gold text-white px-3 py-1 rounded-lg shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-medium">Heritage Collection</p>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                  Our heritage collection represents the pinnacle of traditional Indian jewelry artistry. 
                  Each piece is meticulously crafted using techniques passed down through generations, 
                  ensuring authenticity and unmatched quality in every design.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-cream/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                The principles that guide every piece we create and every relationship we build
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: Shield,
                  title: "Authenticity",
                  description: "Every piece is genuine, certified, and crafted with authentic materials and traditional techniques.",
                  color: "text-rose-gold"
                },
                {
                  icon: Heart,
                  title: "Heritage",
                  description: "Preserving and celebrating the rich traditions of Indian jewelry craftsmanship for future generations.",
                  color: "text-gold"
                },
                {
                  icon: Eye,
                  title: "Quality",
                  description: "Uncompromising attention to detail and quality in every aspect of our jewelry creation process.",
                  color: "text-rose-gold"
                },
                {
                  icon: Users,
                  title: "Trust",
                  description: "Building lasting relationships with our customers through transparency, honesty, and exceptional service.",
                  color: "text-gold"
                }
              ].map((value, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="jewelry-card text-center h-full">
                    <CardContent className="luxury-spacing">
                      <value.icon className={`h-16 w-16 ${value.color} mx-auto mb-6`} />
                      <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                        {value.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Craftsmanship Process */}
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
                The Art of Creation
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Discover the meticulous process behind every Manu Bawa Jewellers masterpiece
              </p>
            </motion.div>

            {/* 3-Column Grid with Proper Layout */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "Design & Sketching",
                  description: "Our master designers create unique pieces inspired by traditional Indian motifs and contemporary aesthetics.",
                  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  icon: Eye
                },
                {
                  step: "02", 
                  title: "Crafting Excellence",
                  description: "Skilled artisans bring each design to life using time-honored techniques passed down through generations.",
                  image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  icon: Hammer
                },
                {
                  step: "03",
                  title: "Quality Assurance", 
                  description: "Each piece undergoes rigorous quality checks and certification processes before reaching our customers.",
                  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  icon: CheckCircle
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex flex-col"
                >
                  <Card className="jewelry-card h-full overflow-hidden flex flex-col">
                    {/* Image Section - Fixed Height */}
                    <div className="relative h-48 flex-shrink-0">
                      <OptimizedImage
                        src={process.image}
                        alt={`${process.title} - Bawa Jewellers craftsmanship process`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-rose-gold text-white rounded-full w-10 h-10 flex items-center justify-center font-playfair font-bold text-sm shadow-lg">
                        {process.step}
                      </div>
                    </div>
                    
                    {/* Content Section - Flexible Height */}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center space-x-3 mb-3">
                        <process.icon className="h-6 w-6 text-rose-gold flex-shrink-0" />
                        <h3 className="text-lg font-playfair font-bold text-charcoal">
                          {process.title}
                        </h3>
                      </div>
                      <p className="text-charcoal/70 leading-relaxed text-sm flex-1">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications & Awards */}
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
                Certifications & Recognition
              </h2>
              <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                Our commitment to quality and authenticity is recognized by leading industry bodies
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "BIS Hallmark",
                  subtitle: "Certified Quality",
                  description: "All gold jewelry certified by Bureau of Indian Standards"
                },
                {
                  title: "GIA Certified",
                  subtitle: "Diamond Grading",
                  description: "Diamonds certified by Gemological Institute of America"
                },
                {
                  title: "99+ Years",
                  subtitle: "Industry Experience",
                  description: "Nearly a century of trusted jewelry craftsmanship"
                },
                {
                  title: "10,000+",
                  subtitle: "Happy Customers",
                  description: "Satisfied customers across generations"
                }
              ].map((cert, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="bg-cream/10 border-cream/20 text-center h-full">
                    <CardContent className="luxury-spacing">
                      <Award className="h-12 w-12 text-gold mx-auto mb-4" />
                      <h3 className="text-2xl font-playfair font-bold mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-gold font-semibold mb-2">
                        {cert.subtitle}
                      </p>
                      <p className="text-cream/80 text-sm">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-6">
                Experience Our Heritage
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Visit our showroom to experience the beauty of traditional Indian jewelry craftsmanship. 
                Our experts are ready to help you find the perfect piece for your special moments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button 
                    size="lg" 
                    className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8"
                  >
                    Browse Our Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white px-8"
                  >
                    Contact Us
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
                    Manu Bawa Jewellers
                  </span>
                  <span className="text-sm text-white/70">Since 1925</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/90">© 2024 Manu Bawa Jewellers. All rights reserved.</p>
                <p className="text-white/70 text-sm mt-1">Crafting dreams for nearly a century</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}