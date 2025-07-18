import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Heart, Eye, X, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';

// Mock data for bridal jewelry items
const bridalJewelry = [
  {
    id: 1,
    code: 'GN001',
    title: 'Traditional Gold Necklace',
    category: 'Necklace',
    metalType: 'Gold',
    occasion: 'Bridal',
    type: 'Traditional',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
    isNew: true,
    isPopular: false,
    isBridal: true
  },
  {
    id: 4,
    code: 'DB004',
    title: 'Bridal Diamond Set',
    category: 'Set',
    metalType: 'Diamond',
    occasion: 'Bridal',
    type: 'Traditional',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=500&fit=crop',
    isNew: true,
    isPopular: true,
    isBridal: true
  },
  {
    id: 7,
    code: 'PE007',
    title: 'Platinum Engagement Ring',
    category: 'Ring',
    metalType: 'Platinum',
    occasion: 'Bridal',
    type: 'Modern',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
    isNew: false,
    isPopular: true,
    isBridal: true
  },
  {
    id: 9,
    code: 'GE009',
    title: 'Gold Temple Earrings',
    category: 'Earrings',
    metalType: 'Gold',
    occasion: 'Traditional',
    type: 'Traditional',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=500&fit=crop',
    isNew: false,
    isPopular: true,
    isBridal: true
  },
  {
    id: 13,
    code: 'DR013',
    title: 'Diamond Engagement Ring',
    category: 'Ring',
    metalType: 'Diamond',
    occasion: 'Bridal',
    type: 'Modern',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
    isNew: false,
    isPopular: true,
    isBridal: true
  },
  {
    id: 14,
    code: 'DS014',
    title: 'Diamond Solitaire Ring',
    category: 'Ring',
    metalType: 'Diamond',
    occasion: 'Bridal',
    type: 'Modern',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
    isNew: true,
    isPopular: true,
    isBridal: true
  },
  {
    id: 15,
    code: 'RN015',
    title: 'Ruby Necklace Set',
    category: 'Necklace',
    metalType: 'Ruby',
    occasion: 'Bridal',
    type: 'Traditional',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
    isNew: true,
    isPopular: true,
    isBridal: true
  },
  {
    id: 19,
    code: 'RB019',
    title: 'Ruby Bangles',
    category: 'Bangles',
    metalType: 'Ruby',
    occasion: 'Bridal',
    type: 'Traditional',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&h=500&fit=crop',
    isNew: true,
    isPopular: false,
    isBridal: true
  },
  {
    id: 21,
    code: 'MT021',
    title: 'Maang Tikka Set',
    category: 'Maang Tikka',
    metalType: 'Gold',
    occasion: 'Bridal',
    type: 'Traditional',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    isNew: false,
    isPopular: true,
    isBridal: true
  },
  {
    id: 22,
    code: 'NR022',
    title: 'Traditional Nose Ring',
    category: 'Nose Ring',
    metalType: 'Gold',
    occasion: 'Bridal',
    type: 'Traditional',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=500&fit=crop',
    isNew: true,
    isPopular: false,
    isBridal: true
  }
];

const categories = ['Necklace', 'Earrings', 'Ring', 'Set', 'Bangles', 'Maang Tikka', 'Nose Ring'];
const metalTypes = ['Gold', 'Diamond', 'Platinum', 'Ruby'];
const jewelryTypes = ['Traditional', 'Modern'];

const BridalCollectionPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMetalTypes, setSelectedMetalTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickFilter, setQuickFilter] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState({
    category: true,
    metalType: true,
    type: true,
    price: true
  });

  // Search suggestions
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularSearches = ['Bridal Set', 'Wedding Jewelry', 'Maang Tikka', 'Engagement Ring'];

  useEffect(() => {
    if (searchTerm.length > 0) {
      const suggestions = bridalJewelry
        .filter(item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(item => item.title)
        .slice(0, 5);
      
      const filteredPopularSearches = popularSearches.filter(p => 
        p.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const allSuggestions = suggestions.concat(filteredPopularSearches);
      const uniqueSuggestions = Array.from(new Set(allSuggestions));
      setSearchSuggestions(uniqueSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const filteredJewelry = useMemo(() => {
    let filtered = bridalJewelry.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const matchesMetalType = selectedMetalTypes.length === 0 || selectedMetalTypes.includes(item.metalType);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type);
      
      const matchesQuickFilter = !quickFilter || 
        (quickFilter === 'new' && item.isNew) ||
        (quickFilter === 'popular' && item.isPopular) ||
        (quickFilter === 'complete-sets' && item.category === 'Set');

      return matchesSearch && matchesCategory && matchesMetalType && matchesType && matchesQuickFilter;
    });

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategories, selectedMetalTypes, selectedTypes, quickFilter, sortBy]);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleFilter = (filterType: string, value: string) => {
    switch (filterType) {
      case 'category':
        setSelectedCategories(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'metalType':
        setSelectedMetalTypes(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
      case 'type':
        setSelectedTypes(prev => 
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
        break;
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedMetalTypes([]);
    setSelectedTypes([]);
    setPriceRange([0, 100000]);
    setQuickFilter(null);
    setSearchTerm('');
  };

  const FilterSection = ({ title, items, selectedItems, filterType, expanded, onToggle }: any) => (
    <div className="space-y-3">
      <button
        onClick={() => onToggle(filterType)}
        className="flex items-center justify-between w-full text-left font-medium text-charcoal hover:text-burgundy transition-colors"
      >
        {title}
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-2 overflow-hidden"
          >
            {items.map((item: string) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox
                  id={`${filterType}-${item}`}
                  checked={selectedItems.includes(item)}
                  onCheckedChange={() => toggleFilter(filterType, item)}
                  className="border-charcoal data-[state=checked]:bg-burgundy data-[state=checked]:border-burgundy"
                />
                <label
                  htmlFor={`${filterType}-${item}`}
                  className="text-sm text-charcoal cursor-pointer hover:text-burgundy transition-colors"
                >
                  {item}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const FiltersContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-playfair text-lg font-semibold text-charcoal">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="text-burgundy hover:text-burgundy/80 hover:bg-burgundy/10"
        >
          Clear All
        </Button>
      </div>

      {/* Quick Filters */}
      <div className="space-y-3">
        <h4 className="font-medium text-charcoal">Quick Filters</h4>
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'new', label: 'New Arrivals' },
            { key: 'popular', label: 'Most Popular' },
            { key: 'complete-sets', label: 'Complete Sets' }
          ].map(filter => (
            <Button
              key={filter.key}
              variant={quickFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setQuickFilter(quickFilter === filter.key ? null : filter.key)}
              className={quickFilter === filter.key 
                ? "bg-burgundy hover:bg-burgundy/90 text-cream" 
                : "border-charcoal text-charcoal hover:bg-burgundy/10"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <FilterSection
        title="Category"
        items={categories}
        selectedItems={selectedCategories}
        filterType="category"
        expanded={expandedFilters.category}
        onToggle={(type: string) => setExpandedFilters(prev => ({ ...prev, [type]: !prev[type as keyof typeof prev] }))}
      />

      <Separator />

      <FilterSection
        title="Metal Type"
        items={metalTypes}
        selectedItems={selectedMetalTypes}
        filterType="metalType"
        expanded={expandedFilters.metalType}
        onToggle={(type: string) => setExpandedFilters(prev => ({ ...prev, [type]: !prev[type as keyof typeof prev] }))}
      />

      <Separator />

      <FilterSection
        title="Jewelry Type"
        items={jewelryTypes}
        selectedItems={selectedTypes}
        filterType="type"
        expanded={expandedFilters.type}
        onToggle={(type: string) => setExpandedFilters(prev => ({ ...prev, [type]: !prev[type as keyof typeof prev] }))}
      />

      <Separator />

      {/* Price Range */}
      <div className="space-y-3">
        <button
          onClick={() => setExpandedFilters(prev => ({ ...prev, price: !prev.price }))}
          className="flex items-center justify-between w-full text-left font-medium text-charcoal hover:text-burgundy transition-colors"
        >
          Price Range (Optional)
          {expandedFilters.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        <AnimatePresence>
          {expandedFilters.price && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 overflow-hidden"
            >
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-charcoal">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  const ProductCard = ({ item }: { item: any }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`group relative bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
        viewMode === 'list' ? 'flex' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'}`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Item Code Badge */}
        <div className="absolute top-2 right-2 bg-burgundy text-cream px-2 py-1 rounded text-xs font-mono">
          {item.code}
        </div>

        {/* Status Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <Badge className="bg-rose-gold text-charcoal text-xs">Bridal</Badge>
          {item.isNew && (
            <Badge className="bg-gold text-charcoal text-xs">New</Badge>
          )}
          {item.isPopular && (
            <Badge className="bg-burgundy text-cream text-xs">Popular</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(item.id)}
          className="absolute top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cream/90 p-2 rounded-full hover:bg-cream"
        >
          <Heart
            className={`h-4 w-4 ${
              wishlist.includes(item.id) ? 'fill-burgundy text-burgundy' : 'text-charcoal'
            }`}
          />
        </button>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="bg-cream/90 text-charcoal hover:bg-cream"
                onClick={() => setSelectedItem(item)}
              >
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>

      <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2 group-hover:text-burgundy transition-colors">
          {item.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className="text-xs border-charcoal text-charcoal">
            {item.category}
          </Badge>
          <Badge variant="outline" className="text-xs border-rose-gold text-rose-gold">
            {item.metalType}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <Button
            size="sm"
            onClick={() => router.push(`/product/${item.id}`)}
            className="bg-burgundy hover:bg-burgundy/90 text-cream"
          >
            View Details
          </Button>
          
          <button
            onClick={() => toggleWishlist(item.id)}
            className="p-2 hover:bg-burgundy/10 rounded-full transition-colors"
          >
            <Heart
              className={`h-4 w-4 ${
                wishlist.includes(item.id) ? 'fill-burgundy text-burgundy' : 'text-charcoal'
              }`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Bridal Collection - Heritage Jewels"
        description="Discover our exquisite bridal jewelry collection featuring complete sets, maang tikka, nose rings, and traditional wedding jewelry. Perfect for your special day."
        keywords="bridal jewelry, wedding jewelry, bridal sets, maang tikka, nose rings, traditional bridal jewelry, indian wedding jewelry"
        canonical="/collections/bridal-collection"
      />
      
      <div className="min-h-screen bg-cream">
        <Navigation />
        
        {/* Page Header */}
        <div className="bg-white border-b border-rose-gold/20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-12 w-12 text-rose-gold mr-4" />
                <h1 className="font-playfair text-4xl font-bold text-burgundy">
                  Bridal Collection
                </h1>
              </div>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Make your special day unforgettable with our exquisite bridal jewelry collection. 
                Each piece is crafted to celebrate love, tradition, and the beauty of new beginnings.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-8 bg-white rounded-lg p-6 shadow-sm">
                <FiltersContent />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/60" />
                      <Input
                        placeholder="Search bridal jewelry..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-charcoal/20 focus:border-burgundy"
                      />
                    </div>
                    
                    {/* Search Suggestions */}
                    <AnimatePresence>
                      {showSuggestions && searchSuggestions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 bg-white border border-charcoal/20 rounded-md mt-1 shadow-lg z-10"
                        >
                          {searchSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchTerm(suggestion);
                                setShowSuggestions(false);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-burgundy/10 text-charcoal transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4">
                    {/* Mobile Filter Button */}
                    <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="lg:hidden border-charcoal text-charcoal">
                          <SlidersHorizontal className="h-4 w-4 mr-2" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-80">
                        <SheetHeader>
                          <SheetTitle>Filters</SheetTitle>
                        </SheetHeader>
                        <div className="mt-6">
                          <FiltersContent />
                        </div>
                      </SheetContent>
                    </Sheet>

                    {/* Sort */}
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40 border-charcoal/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="name">Name A-Z</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* View Toggle */}
                    <div className="flex border border-charcoal/20 rounded-md">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className={viewMode === 'grid' ? 'bg-burgundy text-cream' : 'text-charcoal hover:bg-burgundy/10'}
                      >
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                        className={viewMode === 'list' ? 'bg-burgundy text-cream' : 'text-charcoal hover:bg-burgundy/10'}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm text-charcoal/70">
                  Showing {filteredJewelry.length} bridal jewelry items
                </div>

                {/* Active Filters */}
                {(selectedCategories.length > 0 || selectedMetalTypes.length > 0 || selectedTypes.length > 0 || quickFilter) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedCategories.map(category => (
                      <Badge key={category} variant="secondary" className="bg-burgundy/10 text-burgundy">
                        {category}
                        <button
                          onClick={() => toggleFilter('category', category)}
                          className="ml-2 hover:text-burgundy/70"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {selectedMetalTypes.map(metal => (
                      <Badge key={metal} variant="secondary" className="bg-burgundy/10 text-burgundy">
                        {metal}
                        <button
                          onClick={() => toggleFilter('metalType', metal)}
                          className="ml-2 hover:text-burgundy/70"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {quickFilter && (
                      <Badge variant="secondary" className="bg-burgundy/10 text-burgundy">
                        {quickFilter === 'new' ? 'New Arrivals' : quickFilter === 'popular' ? 'Most Popular' : 'Complete Sets'}
                        <button
                          onClick={() => setQuickFilter(null)}
                          className="ml-2 hover:text-burgundy/70"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Product Grid */}
              <AnimatePresence mode="wait">
                {filteredJewelry.length > 0 ? (
                  <motion.div
                    key="products"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'
                    }
                  >
                    {filteredJewelry.map(item => (
                      <ProductCard key={item.id} item={item} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="max-w-md mx-auto">
                      <Heart className="h-16 w-16 text-rose-gold mx-auto mb-4" />
                      <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4">
                        No bridal jewelry found
                      </h3>
                      <p className="text-charcoal/70 mb-6">
                        Try adjusting your filters or search terms to find the perfect bridal piece.
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-charcoal">Popular categories:</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {categories.slice(0, 4).map(category => (
                            <Button
                              key={category}
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedCategories([category]);
                                setSearchTerm('');
                              }}
                              className="border-charcoal text-charcoal hover:bg-burgundy/10"
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Quick View Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-2xl">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-playfair text-xl">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-charcoal/70">Item Code</p>
                      <p className="font-mono text-lg font-semibold text-burgundy">
                        {selectedItem.code}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-charcoal/70">Category</p>
                        <p className="font-medium">{selectedItem.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/70">Metal Type</p>
                        <p className="font-medium text-rose-gold">{selectedItem.metalType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/70">Occasion</p>
                        <p className="font-medium">Bridal</p>
                      </div>
                      <div>
                        <p className="text-sm text-charcoal/70">Type</p>
                        <p className="font-medium">{selectedItem.type}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1 bg-burgundy hover:bg-burgundy/90 text-cream">
                        Inquire Now
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => toggleWishlist(selectedItem.id)}
                        className="border-charcoal text-charcoal hover:bg-burgundy/10"
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            wishlist.includes(selectedItem.id) ? 'fill-burgundy text-burgundy' : ''
                          }`}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default BridalCollectionPage;