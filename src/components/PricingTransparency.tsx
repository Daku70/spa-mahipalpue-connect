import { IndianRupee, Clock, Gift, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingTransparency = () => {
  const packages = [
    {
      name: "Russian Banya Experience",
      price: "₹2,500",
      duration: "60 mins",
      includes: [
        "Traditional Venik Treatment",
        "Steam Bath Session",
        "Herbal Tea",
        "Private Room"
      ],
      popular: false,
    },
    {
      name: "Full Body Massage",
      price: "₹2,000",
      duration: "60 mins", 
      includes: [
        "Swedish or Deep Tissue",
        "Premium Oils",
        "Shoulder & Neck Focus",
        "Complimentary Refreshments"
      ],
      popular: true,
    },
    {
      name: "Couples Spa Package",
      price: "₹6,000",
      duration: "120 mins",
      includes: [
        "Russian Banya Access",
        "Synchronized Massage",
        "Private Couples Room",
        "Champagne & Chocolates"
      ],
      popular: false,
    },
    {
      name: "Deep Tissue Therapy",
      price: "₹3,500",
      duration: "90 mins",
      includes: [
        "Therapeutic Deep Massage",
        "Trigger Point Release",
        "Hot Towel Treatment",
        "Pain Relief Focus"
      ],
      popular: false,
    },
  ];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCallNow = () => {
    window.location.href = "tel:+919818931148";
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-spa-light/10" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing - No Hidden Charges
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            Experience premium Russian spa treatments at honest prices. All packages include complimentary amenities with no surprise fees.
          </p>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2 text-sm">
            <Gift className="w-4 h-4 text-gold" />
            <span className="text-foreground">
              <strong className="text-gold">Special Offer:</strong> 15% off on first visit - Mention this website
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? 'border-gold border-2 shadow-lg' 
                  : 'border-border hover:border-gold/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gold text-spa-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gold">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">/ {pkg.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToBooking}
                  className="w-full bg-gold hover:bg-gold-light text-spa-dark font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-spa-dark border-gold/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">
                What's Included in All Our Spa Packages
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-spa-cream text-sm">
                    <strong>No Rush Service</strong><br/>
                    Full treatment time guaranteed
                  </p>
                </div>
                <div>
                  <Gift className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-spa-cream text-sm">
                    <strong>Complimentary Extras</strong><br/>
                    Tea, refreshments, & locker
                  </p>
                </div>
                <div>
                  <IndianRupee className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-spa-cream text-sm">
                    <strong>All Inclusive Pricing</strong><br/>
                    No hidden fees or charges
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-spa-cream mb-4">Need a custom package or group booking?</p>
                <Button 
                  variant="outline"
                  onClick={handleCallNow}
                  className="border-gold text-gold hover:bg-gold hover:text-spa-dark"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Custom Packages: +91 98189 31148
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparency;
