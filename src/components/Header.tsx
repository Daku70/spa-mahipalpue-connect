import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Prices", path: "/prices" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="flex items-center justify-between p-4 bg-navy/90 backdrop-blur-md border-b border-turquoise/20">
        {/* Logo/Brand */}
        <button 
          onClick={() => navigate('/')}
          className="text-xl font-bold bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Lisa Spa
        </button>

        {/* Center - Call Button */}
        <a 
          href="tel:+919355125143" 
          className="flex items-center gap-2 bg-turquoise/20 hover:bg-turquoise/30 border border-turquoise/40 rounded-full px-4 py-2 transition-all hover:scale-105"
          aria-label="Call Lisa Spa Mahipalpur at +91 93551 25143"
        >
          <Phone className="h-4 w-4 text-turquoise" aria-hidden="true" />
          <span className="text-sm font-semibold text-spa-cream hidden sm:inline">+91 93551 25143</span>
          <span className="text-sm font-semibold text-spa-cream sm:hidden">Call</span>
        </a>
        
        {/* Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-gradient-to-r from-turquoise to-coral border-0 hover:opacity-90 shadow-lg"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 text-white" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-navy border-l border-turquoise/30 z-[100]">
            <SheetHeader className="text-left">
              <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-8" aria-label="Main navigation">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start text-lg text-spa-cream hover:text-turquoise hover:bg-turquoise/10 rounded-xl transition-all py-6"
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-coral mr-3" />
                  {item.label}
                </Button>
              ))}
            </nav>
            
            {/* Contact Info in Menu */}
            <div className="mt-8 p-4 bg-turquoise/10 rounded-2xl border border-turquoise/20">
              <p className="text-spa-cream/80 text-sm mb-2">Ready to relax?</p>
              <a 
                href="tel:+919355125143"
                className="text-turquoise font-bold text-lg hover:text-turquoise-light transition-colors"
              >
                +91 93551 25143
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;