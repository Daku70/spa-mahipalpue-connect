import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();

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
      <div className="flex items-center justify-between p-4 bg-spa-brown/95 backdrop-blur-sm border-b border-gold/20">
        <a 
          href="tel:+919818931148" 
          className="flex items-center gap-2 text-gold hover:text-gold/80 transition-smooth"
          aria-label="Call Russian Spa Centre at +91 98189 31148"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm md:text-base font-semibold">+91 98189 31148</span>
        </a>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-spa-dark/90 backdrop-blur-sm border-gold/30 hover:bg-spa-dark hover:border-gold shadow-elegant"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6 text-gold" aria-hidden="true" />
            </Button>
          </SheetTrigger>
        <SheetContent className="bg-spa-brown border-l-gold/30 z-[100]">
          <SheetHeader>
            <SheetTitle className="text-gold text-2xl">Navigation Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8" aria-label="Main navigation">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="justify-start text-lg text-spa-cream hover:text-gold hover:bg-spa-dark/50 transition-smooth"
                onClick={() => {
                  navigate(item.path);
                  // Close the sheet after clicking
                  document.body.click();
                }}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
