import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Crown, 
  Gem, 
  Star, 
  Heart, 
  Phone, 
  Mail, 
  User,
  Weight,
  Sparkles,
  LogOut,
  Grid3X3,
  List,
  SortAsc,
  Eye
} from "lucide-react";

// Mock data for jewelry items
const mockJewelry = [
  {
    id: "1",
    name: "Royal Kundan Necklace Set",
    description: "Exquisite kundan necklace with matching earrings, featuring traditional Rajasthani craftsmanship",
    price: 125000,
    weight: 45.5,
    purity: "22K",
    material: "Gold",
    type: "Necklace Set",
    imageUrls: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    isAvailable: true,
    isFeatured: true,
    category: "Bridal Collection"
  },
  {
    id: "2",
    name: "Diamond Solitaire Ring",
    description: "Classic solitaire ring with 1.5 carat brilliant cut diamond in platinum setting",
    price: 285000,
    weight: 3.2,
    purity: "Platinum",
    material: "Diamond",
    type: "Ring",
    imageUrls: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    isAvailable: true,
    isFeatured: true,
    category: "Diamond Jewelry"
  },
  {
    id: "3",
    name: "Temple Jewelry Earrings",
    description: "Traditional South Indian temple jewelry earrings with intricate gold work and ruby stones",
    price: 65000,
    weight: 18.7,
    purity: "22K",
    material: "Gold",
    type: "Earrings",
    imageUrls: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    isAvailable: true,
    isFeatured: false,
    category: "Traditional Collection"
  },
  {
    id: "4",
    name: "Emerald Tennis Bracelet",
    description: "Elegant tennis bracelet featuring premium emeralds set in 18K white gold",
    price: 195000,
    weight: 12.3,
    purity: "18K",
    material: "Emerald",
    type: "Bracelet",
    imageUrls: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    isAvailable: true,
    isFeatured: false,
    category: "Precious Stones"
  },
  {
    id: "5",
    name: "Antique Gold Bangles",
    description: "Set of 6 traditional antique finish gold bangles with intricate engravings",
    price: 95000,
    weight: 85.2,
    purity: "22K",
    material: "Gold",
    type: "Bangles",
    imageUrls: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    isAvailable: true,
    isFeatured: false,
    category: "Traditional Collection"
  },
  {
    id: "6",
    name: "Pearl Drop Necklace",
    description: "Elegant freshwater pearl necklace with diamond-studded gold clasp",
    price: 75000,
    weight: 25.8,
    purity: "18K",
    material: "Pearl",
    type: "Necklace",
    imageUrls: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    isAvailable: true,
    isFeatured: false,
    category: "Contemporary Collection"
  }
];

const categories = ["All", "Bridal Collection", "Diamond Jewelry", "Traditional Collection", "Precious Stones", "Contemporary Collection"];
const materials = ["All", "Gold", "Diamond", "Silver", "Platinum", "Emerald", "Pearl"];
const types = ["All", "Ring", "Necklace", "Earrings", "Bracelet", "Bangles", "Necklace Set"];

export default function Dashboard() {
  const { signOut } = useAuth();
  const [jewelry, setJewelry] = useState(mockJewelry);
  const [filteredJewelry, setFilteredJewelry] = useState(mockJewelry);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedJewelry, setSelectedJewelry] = useState<any>(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Filter and search logic
  useEffect(() => {
    let filtered = jewelry;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.material.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== "All") {
      filtered = filtered.filter(item => item.material === selectedMaterial);
    }

    // Type filter
    if (selectedType !== "All") {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Sort
    switch (sortBy) {
      case "featured":
        filtered = filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
      case "price-low":
        filtered = filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        filtered = filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "name":
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredJewelry(filtered);
  }, [searchTerm, selectedCategory, selectedMaterial, selectedType, sortBy, jewelry]);

  const handleInquiry = (jewelryItem: any) => {
    setSelectedJewelry(jewelryItem);
    setInquiryForm({
      name: "",
      email: "",
      phone: "",
      message: `I am interested in the ${jewelryItem.name}. Please provide more details about pricing and availability.`
    });
  };

  const submitInquiry = () => {
    // Here you would typically send the inquiry to your backend
    console.log("Inquiry submitted:", {
      jewelry: selectedJewelry,
      inquiry: inquiryForm
    });
    
    // Reset form
    setInquiryForm({ name: "", email: "", phone: "", message: "" });
    setSelectedJewelry(null);
    
    // Show success message (you could use a toast here)
    alert("Thank you for your inquiry! We will contact you within 24 hours.");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-burgundy" />
              <span className="text-2xl font-playfair font-bold text-burgundy">Maharaja Jewels</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-charcoal">Jewelry Catalog</span>
              <Button
                onClick={signOut}
                variant="outline"
                size="sm"
                className="border-burgundy text-burgundy hover:bg-burgundy hover:text-cream"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="luxury-spacing">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/50" />
                <Input
                  placeholder="Search jewelry by name, material, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg border-rose-gold/30 focus:border-burgundy"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-rose-gold/30">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger className="border-rose-gold/30">
                    <SelectValue placeholder="Material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map(material => (
                      <SelectItem key={material} value={material}>{material}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="border-rose-gold/30">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-rose-gold/30">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* View Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-burgundy" : "border-burgundy text-burgundy"}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-burgundy" : "border-burgundy text-burgundy"}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-charcoal/70">
                  {filteredJewelry.length} items found
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Jewelry Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredJewelry.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="jewelry-card group h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.imageUrls[0]}
                          alt={item.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 space-y-2">
                          {item.isFeatured && (
                            <Badge className="bg-burgundy text-cream">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Badge className="bg-gold text-charcoal">
                            {item.category}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <CardContent className="luxury-spacing">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                              {item.name}
                            </h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Gem className="h-4 w-4 text-burgundy" />
                              <span className="text-charcoal/70">{item.material}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Weight className="h-4 w-4 text-burgundy" />
                              <span className="text-charcoal/70">{item.weight}g</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Sparkles className="h-4 w-4 text-burgundy" />
                              <span className="text-charcoal/70">{item.purity}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Crown className="h-4 w-4 text-burgundy" />
                              <span className="text-charcoal/70">{item.type}</span>
                            </div>
                          </div>
                          
                          {item.price && (
                            <div className="text-2xl font-playfair font-bold text-burgundy">
                              {formatPrice(item.price)}
                            </div>
                          )}
                          
                          <Button
                            onClick={() => handleInquiry(item)}
                            className="w-full bg-burgundy hover:bg-burgundy/90 text-cream"
                          >
                            Inquire Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredJewelry.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="jewelry-card">
                      <CardContent className="luxury-spacing">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                          <div className="relative overflow-hidden rounded-lg">
                            <img
                              src={item.imageUrls[0]}
                              alt={item.name}
                              className="w-full h-48 lg:h-32 object-cover"
                            />
                            {item.isFeatured && (
                              <Badge className="absolute top-2 left-2 bg-burgundy text-cream">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <div className="lg:col-span-2 space-y-3">
                            <div>
                              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-1">
                                {item.name}
                              </h3>
                              <Badge className="bg-gold text-charcoal mb-2">
                                {item.category}
                              </Badge>
                              <p className="text-charcoal/70 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                              <div className="flex items-center space-x-2">
                                <Gem className="h-4 w-4 text-burgundy" />
                                <span className="text-charcoal/70">{item.material}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Weight className="h-4 w-4 text-burgundy" />
                                <span className="text-charcoal/70">{item.weight}g</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Sparkles className="h-4 w-4 text-burgundy" />
                                <span className="text-charcoal/70">{item.purity}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Crown className="h-4 w-4 text-burgundy" />
                                <span className="text-charcoal/70">{item.type}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col justify-between items-end space-y-4">
                            {item.price && (
                              <div className="text-2xl font-playfair font-bold text-burgundy">
                                {formatPrice(item.price)}
                              </div>
                            )}
                            <Button
                              onClick={() => handleInquiry(item)}
                              className="bg-burgundy hover:bg-burgundy/90 text-cream"
                            >
                              Inquire Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredJewelry.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Gem className="h-16 w-16 text-charcoal/30 mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
              No jewelry found
            </h3>
            <p className="text-charcoal/70">
              Try adjusting your search criteria or filters
            </p>
          </motion.div>
        )}
      </div>

      {/* Inquiry Dialog */}
      <Dialog open={!!selectedJewelry} onOpenChange={() => setSelectedJewelry(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair text-burgundy">
              Inquiry for {selectedJewelry?.name}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {selectedJewelry && (
              <div className="flex space-x-4">
                <img
                  src={selectedJewelry.imageUrls[0]}
                  alt={selectedJewelry.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-charcoal">{selectedJewelry.name}</h4>
                  <p className="text-charcoal/70 text-sm">{selectedJewelry.category}</p>
                  {selectedJewelry.price && (
                    <p className="text-burgundy font-bold">{formatPrice(selectedJewelry.price)}</p>
                  )}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                  placeholder="Your full name"
                  className="border-rose-gold/30"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="border-rose-gold/30"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={inquiryForm.phone}
                onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                placeholder="+91 98765 43210"
                className="border-rose-gold/30"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={inquiryForm.message}
                onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                placeholder="Please provide details about your inquiry..."
                rows={4}
                className="border-rose-gold/30"
              />
            </div>
            
            <div className="flex space-x-4">
              <Button
                onClick={() => setSelectedJewelry(null)}
                variant="outline"
                className="flex-1 border-burgundy text-burgundy"
              >
                Cancel
              </Button>
              <Button
                onClick={submitInquiry}
                disabled={!inquiryForm.name || !inquiryForm.email || !inquiryForm.message}
                className="flex-1 bg-burgundy hover:bg-burgundy/90 text-cream"
              >
                Submit Inquiry
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}