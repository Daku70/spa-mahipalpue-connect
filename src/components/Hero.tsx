import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImagesLoaded(true);
  }, []);

  const handleCallNow = () => {
    window.location.href = "tel:+919818931148";
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
        role="img"
        aria-label="Luxurious spa treatment room with relaxing ambiance"
      />
      <div className="absolute inset-0 z-0 bg-spa-dark" style={{ opacity: imagesLoaded ? 0 : 1, transition: 'opacity 0.5s' }} />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src={logo} 
            alt="Russian Spa Centre - Premier Spa in NCR, Mahipalpur Delhi"
            title="Russian Spa Centre - Authentic Russian Banya & Luxury Spa Treatments" 
            className="w-full max-w-2xl mx-auto mb-8 animate-fade-in"
            loading="eager"
          />
          
          <h1 className="text-2xl md:text-4xl text-gold mb-4 animate-fade-in-delay font-bold tracking-wide">
            Russian Spa in Aerocity & Mahipalpur | Book Appointment for Relaxation Therapy
          </h1>
          <p className="text-xl md:text-2xl text-spa-cream mb-6 animate-fade-in-delay font-light tracking-wide">
            Premium Russian Spa in Aerocity & Mahipalpur. Book your appointment online for authentic relaxation therapy, Russian Banya, and therapeutic massage treatments near Delhi Airport
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-spa-cream mb-8 text-sm md:text-base">
            <span className="flex items-center gap-2">✓ 10 Min from Delhi Airport</span>
            <span className="flex items-center gap-2">✓ Open 24/7</span>
            <span className="flex items-center gap-2">✓ Certified Therapists</span>
            <span className="flex items-center gap-2">✓ Authentic Russian Banya</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold text-lg px-8 py-6 shadow-gold transition-smooth"
              aria-label="Book appointment for Russian spa in Aerocity"
            >
              Book Appointment Online
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleCallNow}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-spa-dark font-semibold text-lg px-8 py-6 transition-smooth"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
