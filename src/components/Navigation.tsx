import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { 
  Crown, 
  Menu, 
  Search, 
  ChevronDown, 
  MapPin, 
  Phone,
  Gem,
  Heart,
  Star,
  Sparkles
} from "lucide-react";

const megaMenuData = {
  "Gold Jewelry": {
    items: ["Necklaces", "Earrings", "Bangles", "Rings", "Chains"],
    icon: Crown
  },
  "Diamond Jewelry": {
    items: ["Solitaires", "Diamond Sets", "Pendants"],
    icon: Gem
  },
  "Precious Stones": {
    items: ["Ruby", "Emerald", "Sapphire"],
    icon: Sparkles
  },
  "Bridal Collection": {
    items: ["Complete Sets", "Maang Tikka", "Nose Rings"],
    icon: Heart
  }
};

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Crown className="h-10 w-10 text-burgundy" />
              <div>
                <span className="text-2xl font-playfair font-bold text-burgundy block leading-tight">
                  Heritage Jewels
                </span>
                <span className="text-xs text-charcoal/70 font-inter">Since 1952</span>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-charcoal hover:text-burgundy transition-colors font-medium"
              >
                Home
              </Link>
              
              {/* Collections Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu("collections")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center space-x-1 text-charcoal hover:text-burgundy transition-colors font-medium">
                  <span>Collections</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {activeMenu === "collections" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl border border-rose-gold/20 shadow-2xl p-8"
                    >
                      <div className="grid grid-cols-4 gap-8">
                        <div>
                          <Link 
                            href="/collections" 
                            className="block p-4 rounded-lg hover:bg-cream/50 transition-colors group"
                          >
                            <Star className="h-6 w-6 text-burgundy mb-2" />
                            <h3 className="font-playfair font-semibold text-charcoal group-hover:text-burgundy">
                              All Jewelry
                            </h3>
                            <p className="text-sm text-charcoal/70 mt-1">
                              Browse our complete collection
                            </p>
                          </Link>
                        </div>
                        
                        {Object.entries(megaMenuData).map(([category, data]) => (
                          <div key={category}>
                            <div className="p-4 rounded-lg hover:bg-cream/50 transition-colors group">
                              <data.icon className="h-6 w-6 text-burgundy mb-2" />
                              <h3 className="font-playfair font-semibold text-charcoal group-hover:text-burgundy mb-3">
                                {category}
                              </h3>
                              <ul className="space-y-2">
                                {data.items.map((item) => (
                                  <li key={item}>
                                    <Link 
                                      href={`/collections/${category.toLowerCase().replace(' ', '-')}/${item.toLowerCase().replace(' ', '-')}`}
                                      className="text-sm text-charcoal/70 hover:text-burgundy transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/about" 
                className="text-charcoal hover:text-burgundy transition-colors font-medium"
              >
                About Us
              </Link>
              
              <Link 
                href="/contact" 
                className="text-charcoal hover:text-burgundy transition-colors font-medium"
              >
                Contact
              </Link>
              
              <Link 
                href="/store-location" 
                className="flex items-center space-x-1 text-charcoal hover:text-burgundy transition-colors font-medium"
              >
                <MapPin className="h-4 w-4" />
                <span>Store Location</span>
              </Link>
            </div>

            {/* CTA Button */}
            <Link href="/dashboard">
              <Button className="bg-burgundy hover:bg-burgundy/90 text-cream px-6">
                View Catalog
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-gold/20">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-burgundy" />
              <div>
                <span className="text-lg font-playfair font-bold text-burgundy block leading-tight">
                  Heritage Jewels
                </span>
                <span className="text-xs text-charcoal/70 font-inter">Since 1952</span>
              </div>
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6 text-charcoal" />
                </Button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-80 p-0">
                <div className="p-6 space-y-6">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
                    <Input 
                      placeholder="Search jewelry..." 
                      className="pl-10 border-rose-gold/30"
                    />
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="space-y-4">
                    <Link 
                      href="/" 
                      className="block text-lg font-medium text-charcoal hover:text-burgundy transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>

                    {/* Mobile Collections */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-playfair font-semibold text-burgundy">Collections</h3>
                      
                      <Link 
                        href="/collections" 
                        className="block pl-4 text-charcoal hover:text-burgundy transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Jewelry
                      </Link>

                      {Object.entries(megaMenuData).map(([category, data]) => (
                        <div key={category} className="space-y-2">
                          <h4 className="pl-4 font-medium text-charcoal">{category}</h4>
                          {data.items.map((item) => (
                            <Link 
                              key={item}
                              href={`/collections/${category.toLowerCase().replace(' ', '-')}/${item.toLowerCase().replace(' ', '-')}`}
                              className="block pl-8 text-sm text-charcoal/70 hover:text-burgundy transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    <Link 
                      href="/about" 
                      className="block text-lg font-medium text-charcoal hover:text-burgundy transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    
                    <Link 
                      href="/contact" 
                      className="block text-lg font-medium text-charcoal hover:text-burgundy transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    
                    <Link 
                      href="/store-location" 
                      className="flex items-center space-x-2 text-lg font-medium text-charcoal hover:text-burgundy transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <MapPin className="h-5 w-5" />
                      <span>Store Location</span>
                    </Link>

                    {/* Mobile CTA */}
                    <div className="pt-4 border-t border-rose-gold/20">
                      <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full bg-burgundy hover:bg-burgundy/90 text-cream">
                          View Catalog
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}