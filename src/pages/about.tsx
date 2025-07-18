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
      "name": "Heritage Jewels",
      "description": "A family-owned jewelry business established in 1952, specializing in traditional Indian jewelry with over 70 years of craftsmanship excellence.",
      "foundingDate": "1952",
      "founder": {
        "@type": "Person",
        "name": "Heritage Jewels Founder"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Heritage Street",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "telephone": "+91-98765-43210",
      "email": "info@heritagejewels.com",
      "url": "https://heritagejewels.com",
      "sameAs": [
        "https://www.facebook.com/heritagejewels",
        "https://www.instagram.com/heritagejewels"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Heritage Jewels Collection",
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
        title="About Heritage Jewels - 70+ Years of Traditional Indian Jewelry Excellence"
        description="Learn about Heritage Jewels' rich history since 1952. Discover our commitment to traditional Indian craftsmanship, quality, and authentic jewelry making. Family-owned business with over 70 years of excellence."
        keywords="heritage jewels history, traditional indian jewelry, family jewelry business, handcrafted jewelry mumbai, jewelry craftsmanship, BIS certified jewelry, authentic indian jewelry"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-burgundy via-burgundy/90 to-burgundy/80 text-cream overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFD700" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="bg-gold/20 text-gold border-gold/30 mb-6 text-lg px-6 py-2">
                Established 1952
              </Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
                Our Heritage Story
              </h1>
              <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
                Seven decades of preserving traditional Indian jewelry craftsmanship while creating timeless pieces that celebrate life's most precious moments
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
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-4">
                A Journey Through Time
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                From humble beginnings to becoming Mumbai's trusted jewelry destination
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Heritage Jewels founder working on traditional jewelry"
                  width={800}
                  height={600}
                  className="rounded-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-burgundy text-cream rounded-full p-3 flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-burgundy mb-2">1952 - The Beginning</h3>
                      <p className="text-charcoal/80 leading-relaxed">
                        Founded by a master craftsman with a vision to preserve traditional Indian jewelry techniques. Started with a small workshop in Mumbai's jewelry district, focusing on authentic handcrafted pieces.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-charcoal rounded-full p-3 flex-shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-burgundy mb-2">1970s - Recognition</h3>
                      <p className="text-charcoal/80 leading-relaxed">
                        Gained recognition for exceptional craftsmanship and authentic designs. Became the preferred choice for traditional bridal jewelry among Mumbai's families.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-burgundy text-cream rounded-full p-3 flex-shrink-0">
                      <Crown className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-burgundy mb-2">1990s - Expansion</h3>
                      <p className="text-charcoal/80 leading-relaxed">
                        Expanded our collection to include contemporary designs while maintaining traditional roots. Introduced diamond jewelry and precious stone collections.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gold text-charcoal rounded-full p-3 flex-shrink-0">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-burgundy mb-2">2020s - Digital Heritage</h3>
                      <p className="text-charcoal/80 leading-relaxed">
                        Embraced digital transformation while preserving our heritage values. Now serving customers worldwide with the same commitment to quality and authenticity.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-4">
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
                  color: "text-burgundy"
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
                  color: "text-burgundy"
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
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-4">
                The Art of Creation
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Discover the meticulous process behind every Heritage Jewels masterpiece
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Design & Conceptualization",
                  description: "Our master designers create unique pieces inspired by traditional Indian motifs and contemporary aesthetics. Each design is carefully planned to ensure perfect proportions and cultural authenticity.",
                  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  icon: Eye
                },
                {
                  step: "02",
                  title: "Handcrafted Excellence",
                  description: "Skilled artisans with decades of experience bring each design to life using time-honored techniques passed down through generations. Every detail is meticulously crafted by hand.",
                  image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  icon: Hammer
                },
                {
                  step: "03",
                  title: "Quality Assurance",
                  description: "Each piece undergoes rigorous quality checks and certification processes. We ensure every item meets our exacting standards before it reaches our valued customers.",
                  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  icon: CheckCircle
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="jewelry-card h-full overflow-hidden">
                    <div className="relative h-64">
                      <OptimizedImage
                        src={process.image}
                        alt={process.title}
                        width={600}
                        height={400}
                        className="w-full h-full"
                      />
                      <div className="absolute top-4 left-4 bg-burgundy text-cream rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold text-lg">
                        {process.step}
                      </div>
                    </div>
                    <CardContent className="luxury-spacing">
                      <div className="flex items-center space-x-3 mb-4">
                        <process.icon className="h-8 w-8 text-gold" />
                        <h3 className="text-2xl font-playfair font-bold text-charcoal">
                          {process.title}
                        </h3>
                      </div>
                      <p className="text-charcoal/70 leading-relaxed">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                  title: "70+ Years",
                  subtitle: "Industry Experience",
                  description: "Seven decades of trusted jewelry craftsmanship"
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
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-burgundy mb-6">
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
                    className="bg-burgundy hover:bg-burgundy/90 text-cream px-8"
                  >
                    Browse Our Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-burgundy text-burgundy hover:bg-burgundy hover:text-cream px-8"
                  >
                    Visit Our Showroom
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-burgundy text-cream py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <Crown className="h-10 w-10 text-gold" />
                <div>
                  <span className="text-2xl font-playfair font-bold block leading-tight">
                    Heritage Jewels
                  </span>
                  <span className="text-sm text-cream/70">Since 1952</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-cream/90">© 2024 Heritage Jewels. All rights reserved.</p>
                <p className="text-cream/70 text-sm mt-1">Crafting dreams for over seven decades</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}