import { Phone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919818931148";
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gold via-gold-light to-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-spa-dark mb-4">
            Ready to Experience India's Best Russian Spa?
          </h2>
          <p className="text-lg md:text-xl text-spa-dark/90 mb-8 max-w-3xl mx-auto">
            Join 10,000+ satisfied clients who trust Russian Spa Centre for authentic wellness treatments. 
            Book your appointment today and discover why we're rated #1 in Mahipalpur & Aerocity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg" 
              onClick={handleCallNow}
              className="bg-spa-dark hover:bg-spa-dark/90 text-gold font-bold text-lg px-8 py-6 shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 98189 31148
            </Button>
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              variant="outline"
              className="border-2 border-spa-dark text-spa-dark hover:bg-spa-dark hover:text-gold font-bold text-lg px-8 py-6"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Online Instantly
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-spa-dark text-sm font-semibold">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>10 Min from Delhi Airport</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Open 24/7 - Even on Holidays</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Free Parking Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>15% Off First Visit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
