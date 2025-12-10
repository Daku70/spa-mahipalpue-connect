import { IndianRupee, Clock, Gift, Phone, Sparkles, ArrowRight } from "lucide-react";
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
      color: "turquoise",
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
      color: "coral",
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
      color: "sunny",
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
      color: "turquoise",
    },
  ];

  const colorClasses = {
    turquoise: {
      border: "border-turquoise",
      bg: "bg-turquoise",
      text: "text-turquoise",
      gradient: "from-turquoise to-turquoise-light",
    },
    coral: {
      border: "border-coral",
      bg: "bg-coral",
      text: "text-coral",
      gradient: "from-coral to-coral-light",
    },
    sunny: {
      border: "border-sunny",
      bg: "bg-sunny",
      text: "text-sunny",
      gradient: "from-sunny to-sunny-light",
    },
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCallNow = () => {
    window.location.href = "tel:+919355125143";
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="pricing">
      {/* Background decorations */}
      <div className="absolute top-0 right-20 w-72 h-72 bg-sunny/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-turquoise/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sunny/10 border border-sunny/30 rounded-full px-4 py-2 mb-6">
            <IndianRupee className="w-4 h-4 text-sunny" />
            <span className="text-sm font-medium text-foreground">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
              No Hidden Charges
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            Experience premium spa treatments at honest prices. All packages include complimentary amenities.
          </p>
          <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/30 rounded-full px-6 py-3">
            <Gift className="w-5 h-5 text-coral" />
            <span className="text-foreground font-medium">
              <strong className="text-coral">15% OFF</strong> on first visit - Mention this website
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {packages.map((pkg, index) => {
            const colors = colorClasses[pkg.color as keyof typeof colorClasses];
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl border-2 ${
                  pkg.popular 
                    ? `${colors.border} shadow-lg` 
                    : 'border-border hover:border-turquoise/50'
                }`}
              >
                {pkg.popular && (
                  <div className={`absolute top-0 right-0 bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold px-4 py-2 rounded-bl-2xl`}>
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-4xl font-extrabold ${colors.text}`}>{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">/ {pkg.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className={`w-5 h-5 rounded-full ${colors.bg}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className={colors.text}>✓</span>
                        </span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToBooking}
                    className={`w-full bg-gradient-to-r ${colors.gradient} text-white hover:opacity-90 font-semibold rounded-xl`}
                  >
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* What's Included Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-navy border-turquoise/20 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">
                  What's Included in All Packages
                </span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-14 h-14 mx-auto bg-turquoise/20 rounded-2xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-turquoise" />
                  </div>
                  <div>
                    <p className="text-spa-cream font-semibold">No Rush Service</p>
                    <p className="text-spa-cream/60 text-sm">Full treatment time guaranteed</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="w-14 h-14 mx-auto bg-coral/20 rounded-2xl flex items-center justify-center">
                    <Gift className="w-7 h-7 text-coral" />
                  </div>
                  <div>
                    <p className="text-spa-cream font-semibold">Complimentary Extras</p>
                    <p className="text-spa-cream/60 text-sm">Tea, refreshments, & locker</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="w-14 h-14 mx-auto bg-sunny/20 rounded-2xl flex items-center justify-center">
                    <IndianRupee className="w-7 h-7 text-sunny" />
                  </div>
                  <div>
                    <p className="text-spa-cream font-semibold">All Inclusive Pricing</p>
                    <p className="text-spa-cream/60 text-sm">No hidden fees or charges</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-spa-cream/70 mb-4">Need a custom package or group booking?</p>
                <Button 
                  variant="outline"
                  onClick={handleCallNow}
                  className="border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-navy rounded-xl font-semibold"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Custom Packages: +91 93551 25143
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