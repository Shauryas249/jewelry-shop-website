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
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  Sparkles,
  Heart,
  Gem,
  Clock,
  Tag
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

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Heritage Jewels Blog - Jewelry Care & Traditional Designs",
    "description": "Expert insights on jewelry care, traditional Indian designs, cultural significance, and craftsmanship techniques from Heritage Jewels.",
    "url": "https://heritagejewels.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Heritage Jewels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heritagejewels.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "BlogPosting",
          "headline": "The Art of Caring for Your Gold Jewelry",
          "description": "Essential tips and techniques for maintaining the beauty and longevity of your precious gold jewelry pieces.",
          "datePublished": "2024-01-15",
          "author": {
            "@type": "Person",
            "name": "Heritage Jewels Expert"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "Understanding Traditional Indian Jewelry Motifs",
          "description": "Explore the rich symbolism and cultural significance behind traditional Indian jewelry designs and patterns.",
          "datePublished": "2024-01-10",
          "author": {
            "@type": "Person",
            "name": "Heritage Jewels Expert"
          }
        }
      ]
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Caring for Your Gold Jewelry",
      excerpt: "Essential tips and techniques for maintaining the beauty and longevity of your precious gold jewelry pieces. Learn from our master craftsmen's decades of experience.",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Jewelry Care",
      author: "Heritage Jewels Expert",
      date: "January 15, 2024",
      readTime: "5 min read",
      featured: true,
      tags: ["Gold Jewelry", "Care Tips", "Maintenance"]
    },
    {
      id: 2,
      title: "Understanding Traditional Indian Jewelry Motifs",
      excerpt: "Explore the rich symbolism and cultural significance behind traditional Indian jewelry designs. From peacock motifs to lotus patterns, discover the stories they tell.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cultural Heritage",
      author: "Heritage Jewels Expert",
      date: "January 10, 2024",
      readTime: "7 min read",
      featured: true,
      tags: ["Traditional Design", "Indian Culture", "Symbolism"]
    },
    {
      id: 3,
      title: "Choosing the Perfect Bridal Jewelry Set",
      excerpt: "A comprehensive guide to selecting bridal jewelry that complements your wedding attire and personal style. Expert advice from our jewelry consultants.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Bridal Guide",
      author: "Heritage Jewels Expert",
      date: "January 5, 2024",
      readTime: "8 min read",
      featured: false,
      tags: ["Bridal Jewelry", "Wedding", "Style Guide"]
    },
    {
      id: 4,
      title: "The Journey of a Diamond: From Mine to Masterpiece",
      excerpt: "Follow the fascinating journey of diamonds from their formation deep within the earth to becoming part of exquisite jewelry pieces in our collection.",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Craftsmanship",
      author: "Heritage Jewels Expert",
      date: "December 28, 2023",
      readTime: "6 min read",
      featured: false,
      tags: ["Diamonds", "Craftsmanship", "Process"]
    },
    {
      id: 5,
      title: "Gemstone Guide: Understanding Precious Stones",
      excerpt: "Learn about the characteristics, origins, and significance of precious stones including rubies, emeralds, and sapphires in Indian jewelry traditions.",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Education",
      author: "Heritage Jewels Expert",
      date: "December 20, 2023",
      readTime: "9 min read",
      featured: false,
      tags: ["Gemstones", "Education", "Precious Stones"]
    },
    {
      id: 6,
      title: "Seasonal Jewelry Trends: What's Popular This Year",
      excerpt: "Discover the latest trends in Indian jewelry fashion while maintaining the timeless appeal of traditional craftsmanship and authentic designs.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trends",
      author: "Heritage Jewels Expert",
      date: "December 15, 2023",
      readTime: "4 min read",
      featured: false,
      tags: ["Trends", "Fashion", "Contemporary"]
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "Jewelry Care", count: 1, active: false },
    { name: "Cultural Heritage", count: 1, active: false },
    { name: "Bridal Guide", count: 1, active: false },
    { name: "Craftsmanship", count: 1, active: false },
    { name: "Education", count: 1, active: false },
    { name: "Trends", count: 1, active: false }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEO
        title="Heritage Jewels Blog - Jewelry Care, Traditional Designs & Cultural Insights"
        description="Expert insights on jewelry care, traditional Indian designs, cultural significance, and craftsmanship techniques. Learn from Heritage Jewels' 70+ years of expertise."
        keywords="jewelry care tips, traditional indian jewelry, jewelry blog, gold jewelry maintenance, diamond care, bridal jewelry guide, indian jewelry culture, jewelry craftsmanship"
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
              <div className="flex items-center justify-center space-x-3 mb-6">
                <BookOpen className="h-12 w-12 text-gold" />
                <Badge className="bg-gold/20 text-gold border-gold/30 text-lg px-6 py-2">
                  Expert Insights
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
                Jewelry Wisdom
              </h1>
              <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
                Discover the art, culture, and care of traditional Indian jewelry through expert insights and seven decades of craftsmanship knowledge
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
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
                Featured Articles
              </h2>
              <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                Essential knowledge for jewelry enthusiasts and collectors
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {featuredPosts.map((post, index) => (
                <motion.article key={post.id} variants={scaleIn}>
                  <Card className="jewelry-card h-full overflow-hidden group cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-burgundy text-cream">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gold/90 text-charcoal">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="luxury-spacing">
                      <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4 group-hover:text-burgundy transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-charcoal/70 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          className="text-burgundy hover:text-burgundy/80 p-0"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories & Regular Posts */}
        <section className="py-20 bg-cream/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Categories Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <Card className="jewelry-card sticky top-6">
                  <CardContent className="luxury-spacing">
                    <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">
                      Categories
                    </h3>
                    
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            category.active 
                              ? 'bg-burgundy text-cream' 
                              : 'hover:bg-burgundy/10 text-charcoal/80'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{category.name}</span>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                category.active ? 'border-cream text-cream' : ''
                              }`}
                            >
                              {category.count}
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-charcoal/10">
                      <h4 className="text-lg font-playfair font-semibold text-charcoal mb-4">
                        Popular Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Gold Care', 'Bridal', 'Traditional', 'Diamonds', 'Gemstones', 'Maintenance'].map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-burgundy hover:text-cream">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Posts Grid */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="jewelry-card h-full overflow-hidden group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <OptimizedImage
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-burgundy text-cream text-xs">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 text-xs text-charcoal/60 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-playfair font-bold text-charcoal mb-3 group-hover:text-burgundy transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 1).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-burgundy hover:text-burgundy/80 p-0"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.article>
                  ))}
                </div>

                {/* Load More Button */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <Button 
                    size="lg" 
                    className="bg-burgundy hover:bg-burgundy/90 text-cream px-8"
                  >
                    Load More Articles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-charcoal text-cream">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-16 w-16 text-gold mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-cream/80 mb-8 leading-relaxed">
                Subscribe to our newsletter for the latest jewelry care tips, cultural insights, 
                and exclusive content from our master craftsmen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-cream/60 text-sm mt-4">
                No spam, unsubscribe at any time. Your privacy is important to us.
              </p>
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