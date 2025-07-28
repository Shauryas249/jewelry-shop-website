import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ZoomIn, 
  Share2, 
  Heart, 
  Phone, 
  Mail, 
  MessageCircle, 
  Shield, 
  Award, 
  Star,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navigation from '@/components/Navigation';

// Mock product data
const mockProducts = {
  1: {
    id: 1,
    code: 'GN001',
    title: 'Traditional Gold Necklace',
    category: 'Necklace',
    metalType: 'Gold',
    occasion: 'Bridal',
    type: 'Traditional',
    description: 'Exquisite traditional gold necklace crafted with intricate designs, perfect for bridal occasions and special ceremonies. This piece showcases the finest Indian craftsmanship with detailed work that reflects our heritage.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: '22K Gold',
      weight: '45.5 grams',
      dimensions: '18" x 2.5"',
      purity: '91.6% Gold',
      certification: 'BIS Hallmark Certified',
      occasion: 'Bridal, Traditional',
      care: 'Store in soft cloth, avoid chemicals'
    },
    isNew: true,
    isPopular: false,
    isBridal: true,
    has360View: true
  },
  2: {
    id: 2,
    code: 'DE002',
    title: 'Diamond Solitaire Earrings',
    category: 'Earrings',
    metalType: 'Diamond',
    occasion: 'Daily wear',
    type: 'Modern',
    description: 'Elegant diamond solitaire earrings featuring brilliant cut diamonds set in premium platinum. Perfect for daily wear or special occasions, these earrings add a touch of sophistication to any outfit.',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: 'Platinum',
      weight: '3.2 grams',
      dimensions: '8mm diameter',
      purity: '95% Platinum',
      certification: 'GIA Certified Diamonds',
      occasion: 'Daily wear, Formal',
      care: 'Clean with soft brush, professional cleaning recommended'
    },
    isNew: false,
    isPopular: true,
    isBridal: false,
    has360View: false
  },
  3: {
    id: 3,
    code: 'GR003',
    title: 'Antique Gold Ring',
    category: 'Ring',
    metalType: 'Gold',
    occasion: 'Traditional',
    type: 'Antique',
    description: 'Beautiful antique gold ring featuring traditional Indian motifs and intricate craftsmanship. This piece represents the timeless elegance of vintage jewelry design.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: '18K Gold',
      weight: '8.5 grams',
      dimensions: 'Size 6 (adjustable)',
      purity: '75% Gold',
      certification: 'BIS Hallmark Certified',
      occasion: 'Traditional, Festive',
      care: 'Store separately, avoid moisture'
    },
    isNew: false,
    isPopular: true,
    isBridal: false,
    has360View: true
  },
  4: {
    id: 4,
    code: 'DB004',
    title: 'Bridal Diamond Set',
    category: 'Set',
    metalType: 'Diamond',
    occasion: 'Bridal',
    type: 'Traditional',
    description: 'Complete bridal diamond jewelry set including necklace, earrings, and maang tikka. Crafted with premium diamonds and gold, perfect for your special day.',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: '18K Gold with Diamonds',
      weight: '125 grams (complete set)',
      dimensions: 'Necklace: 16", Earrings: 2.5"',
      purity: '75% Gold, VVS Diamonds',
      certification: 'GIA Certified Diamonds, BIS Hallmark',
      occasion: 'Bridal, Wedding',
      care: 'Professional cleaning recommended'
    },
    isNew: true,
    isPopular: true,
    isBridal: true,
    has360View: true
  },
  5: {
    id: 5,
    code: 'GB005',
    title: 'Gold Bangles Set',
    category: 'Bangles',
    metalType: 'Gold',
    occasion: 'Festive',
    type: 'Traditional',
    description: 'Set of traditional gold bangles with intricate patterns and designs. Perfect for festive occasions and traditional ceremonies.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: '22K Gold',
      weight: '65 grams (set of 4)',
      dimensions: '2.5" diameter',
      purity: '91.6% Gold',
      certification: 'BIS Hallmark Certified',
      occasion: 'Festive, Traditional',
      care: 'Store in soft pouch, avoid chemicals'
    },
    isNew: false,
    isPopular: false,
    isBridal: false,
    has360View: false
  },
  6: {
    id: 6,
    code: 'SP006',
    title: 'Silver Pearl Necklace',
    category: 'Necklace',
    metalType: 'Silver',
    occasion: 'Daily wear',
    type: 'Modern',
    description: 'Elegant silver necklace adorned with natural pearls. Perfect for daily wear and formal occasions, combining classic elegance with modern design.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: '925 Sterling Silver',
      weight: '25 grams',
      dimensions: '18" length',
      purity: '92.5% Silver',
      certification: 'Sterling Silver Certified',
      occasion: 'Daily wear, Formal',
      care: 'Clean with silver cloth, store dry'
    },
    isNew: true,
    isPopular: false,
    isBridal: false,
    has360View: false
  },
  7: {
    id: 7,
    code: 'PE007',
    title: 'Platinum Engagement Ring',
    category: 'Ring',
    metalType: 'Platinum',
    occasion: 'Bridal',
    type: 'Modern',
    description: 'Stunning platinum engagement ring featuring a brilliant cut diamond. Crafted for the most special moment in your life with exceptional quality and design.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: '950 Platinum',
      weight: '4.5 grams',
      dimensions: 'Size 6 (resizable)',
      purity: '95% Platinum',
      certification: 'GIA Certified Diamond',
      occasion: 'Engagement, Bridal',
      care: 'Professional cleaning recommended'
    },
    isNew: false,
    isPopular: true,
    isBridal: true,
    has360View: true
  },
  8: {
    id: 8,
    code: 'GC008',
    title: 'Gold Chain Collection',
    category: 'Chain',
    metalType: 'Gold',
    occasion: 'Daily wear',
    type: 'Modern',
    description: 'Versatile gold chain perfect for daily wear. Can be worn alone or paired with pendants. Crafted with precision for durability and style.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop'
    ],
    specifications: {
      metal: '18K Gold',
      weight: '15 grams',
      dimensions: '20" length',
      purity: '75% Gold',
      certification: 'BIS Hallmark Certified',
      occasion: 'Daily wear, Casual',
      care: 'Store flat, avoid tangling'
    },
    isNew: true,
    isPopular: false,
    isBridal: false,
    has360View: false
  }
};

const relatedProducts = [
  {
    id: 3,
    code: 'GR003',
    title: 'Antique Gold Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
    category: 'Ring'
  },
  {
    id: 4,
    code: 'DB004',
    title: 'Bridal Diamond Set',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop',
    category: 'Set'
  },
  {
    id: 5,
    code: 'GB005',
    title: 'Gold Bangles Set',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=300&h=300&fit=crop',
    category: 'Bangles'
  }
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [is360View, setIs360View] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    contactMethod: 'phone',
    message: ''
  });

  useEffect(() => {
    if (id && typeof id === 'string') {
      const productId = parseInt(id, 10);
      const productData = mockProducts[productId as keyof typeof mockProducts];
      setProduct(productData || null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
              Product not found
            </h1>
            <Button onClick={() => router.push('/dashboard')} className="bg-rose-gold text-white">
              Back to Catalog
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', {
      product: product.code,
      inquiry: inquiryForm
    });
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setInquiryForm({
      name: '',
      phone: '',
      email: '',
      contactMethod: 'phone',
      message: ''
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out this beautiful ${product.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-charcoal/70">
            <button onClick={() => router.push('/')} className="hover:text-rose-gold">
              Home
            </button>
            <span>/</span>
            <button onClick={() => router.push('/dashboard')} className="hover:text-rose-gold">
              Catalog
            </button>
            <span>/</span>
            <span className="text-charcoal">{product.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square relative">
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                    >
                      <ChevronLeft className="h-5 w-5 text-charcoal" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                    >
                      <ChevronRight className="h-5 w-5 text-charcoal" />
                    </button>
                  </>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isWishlisted ? 'fill-rose-gold text-rose-gold' : 'text-charcoal'
                      }`}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                  >
                    <Share2 className="h-5 w-5 text-charcoal" />
                  </button>
                  {product.has360View && (
                    <button
                      onClick={() => setIs360View(!is360View)}
                      className={`p-2 rounded-full shadow-md transition-all ${
                        is360View ? 'bg-burgundy text-cream' : 'bg-white/80 hover:bg-white text-charcoal'
                      }`}
                    >
                      <RotateCcw className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Zoom Indicator */}
                {!isZoomed && (
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <ZoomIn className="h-4 w-4" />
                    Click to zoom
                  </div>
                )}

                {/* 360 View Indicator */}
                {is360View && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <RotateCcw className="h-12 w-12 mx-auto mb-4 animate-spin" />
                      <p className="text-lg font-medium">360° View</p>
                      <p className="text-sm opacity-80">Drag to rotate</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-burgundy'
                      : 'border-transparent hover:border-charcoal/30'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-burgundy text-cream font-mono text-sm">
                  {product.code}
                </Badge>
                {product.isNew && (
                  <Badge className="bg-gold text-charcoal">New</Badge>
                )}
                {product.isPopular && (
                  <Badge className="bg-rose-gold text-charcoal">Popular</Badge>
                )}
              </div>
              
              <h1 className="font-playfair text-3xl font-bold text-charcoal mb-4">
                {product.title}
              </h1>
              
              <p className="text-charcoal/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications Table */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-charcoal">
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell className="font-medium text-charcoal capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </TableCell>
                        <TableCell className="text-charcoal/80">{String(value)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <Shield className="h-8 w-8 text-burgundy mx-auto mb-2" />
                <p className="text-sm font-medium text-charcoal">BIS Certified</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Award className="h-8 w-8 text-burgundy mx-auto mb-2" />
                <p className="text-sm font-medium text-charcoal">Quality Assured</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Star className="h-8 w-8 text-burgundy mx-auto mb-2" />
                <p className="text-sm font-medium text-charcoal">Premium Craft</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-charcoal">
                  Inquire About This Piece
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        placeholder="Your full name"
                        required
                        className="border-charcoal/20 focus:border-burgundy"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        required
                        className="border-charcoal/20 focus:border-burgundy"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                      className="border-charcoal/20 focus:border-burgundy"
                    />
                  </div>

                  <div>
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup
                      value={inquiryForm.contactMethod}
                      onValueChange={(value) => setInquiryForm({...inquiryForm, contactMethod: value})}
                      className="flex gap-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-contact" />
                        <Label htmlFor="phone-contact" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Phone
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" />
                        <Label htmlFor="email-contact" className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                        <Label htmlFor="whatsapp-contact" className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      placeholder={`I'm interested in ${product.title} (${product.code}). Please provide more details about pricing and availability.`}
                      rows={3}
                      className="border-charcoal/20 focus:border-burgundy"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-burgundy hover:bg-burgundy/90 text-cream"
                  >
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => router.push(`/product/${relatedProduct.id}`)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <Badge className="bg-burgundy/10 text-burgundy text-xs mb-2">
                    {relatedProduct.code}
                  </Badge>
                  <h3 className="font-playfair font-semibold text-charcoal mb-1">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">{relatedProduct.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;