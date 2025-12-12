import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import { Sparkles, Clock, Phone, Gift, Star } from "lucide-react";

const services = [
  { name: "Traditional Banya", price: "₹2,500", duration: "60 min", color: "turquoise" },
  { name: "Deep Tissue Massage", price: "₹3,500", duration: "90 min", color: "coral" },
  { name: "Hot Stone Therapy", price: "₹4,000", duration: "90 min", color: "sunny" },
  { name: "Aromatherapy Massage", price: "₹3,000", duration: "75 min", color: "turquoise" },
  { name: "Swedish Massage", price: "₹2,800", duration: "60 min", color: "coral" },
  { name: "Couple's Spa Package", price: "₹7,500", duration: "120 min", color: "sunny" },
  { name: "Thai Massage", price: "₹2,300", duration: "60 min", color: "turquoise" },
  { name: "Sports Massage", price: "₹2,600", duration: "60 min", color: "coral" },
  { name: "Reflexology", price: "₹1,800", duration: "45 min", color: "sunny" },
  { name: "Head & Scalp Massage", price: "₹1,500", duration: "30 min", color: "turquoise" },
  { name: "Body Scrub & Polish", price: "₹2,500", duration: "60 min", color: "coral" },
  { name: "Premium Facial", price: "₹3,000", duration: "60 min", color: "sunny" },
  { name: "Back, Neck & Shoulder", price: "₹1,800", duration: "30 min", color: "turquoise" },
  { name: "Full Body Oil Massage", price: "₹2,500", duration: "60 min", color: "coral" },
];

const packages = [
  {
    name: "Monthly Wellness Package",
    description: "4 sessions of any massage + 1 Banya session",
    price: "₹12,000",
    originalPrice: "₹14,500",
    popular: false,
    color: "turquoise"
  },
  {
    name: "Ultimate Relaxation Package",
    description: "Deep Tissue + Hot Stone + Aromatherapy",
    price: "₹9,500",
    originalPrice: "₹10,500",
    popular: true,
    color: "coral"
  },
  {
    name: "Couples Retreat Package",
    description: "3 couple's sessions + complimentary refreshments",
    price: "₹15,000",
    originalPrice: "₹22,500",
    popular: false,
    color: "sunny"
  },
  {
    name: "Corporate Wellness",
    description: "10 sessions (any service) for employees",
    price: "₹20,000",
    originalPrice: "₹25,000",
    popular: false,
    color: "turquoise"
  }
];

const colorClasses = {
  turquoise: "border-turquoise/30 hover:border-turquoise bg-turquoise/5",
  coral: "border-coral/30 hover:border-coral bg-coral/5",
  sunny: "border-sunny/30 hover:border-sunny bg-sunny/5"
};

const gradientClasses = {
  turquoise: "from-turquoise to-turquoise-light",
  coral: "from-coral to-coral-light",
  sunny: "from-sunny to-sunny-light"
};

const PricesPage = () => {
  return (
    <>
      <SEO 
        title="Spa Prices & Packages in Mahipalpur | Affordable Luxury Near Delhi Airport"
        description="Transparent spa pricing in Mahipalpur. Body massage ₹1,500+, Banya ₹2,500, Couples Package ₹7,500. Best value near Delhi airport. Call +91 93551 25143"
        keywords="spa prices Mahipalpur, massage rates Delhi airport, Banya cost, affordable spa packages NCR, luxury spa deals near airport"
        canonical="https://lisaspamahipalpur.com/prices"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 min-h-screen">
          {/* Hero Section */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container relative mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-sunny/10 border border-sunny/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-sunny" />
                <span className="text-sm font-medium text-foreground">Transparent Pricing</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
                  Our Pricing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium spa services at competitive prices - no hidden charges
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-foreground">Individual </span>
                <span className="text-coral">Services</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={`group p-6 rounded-3xl border-2 ${colorClasses[service.color as keyof typeof colorClasses]} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className={`text-3xl font-extrabold bg-gradient-to-r ${gradientClasses[service.color as keyof typeof gradientClasses]} bg-clip-text text-transparent`}>
                        {service.price}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packages Section */}
          <section className="py-16 px-4 bg-navy/5">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/30 rounded-full px-4 py-2 mb-6">
                  <Gift className="w-4 h-4 text-coral" />
                  <span className="text-sm font-medium text-foreground">Special Offers</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  <span className="bg-gradient-to-r from-coral to-sunny bg-clip-text text-transparent">
                    Package Deals
                  </span>
                </h2>
                <p className="text-muted-foreground">Save more with our curated wellness packages</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {packages.map((pkg, index) => (
                  <div 
                    key={index}
                    className={`relative group p-8 rounded-3xl border-2 ${colorClasses[pkg.color as keyof typeof colorClasses]} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-1 bg-gradient-to-r from-coral to-sunny text-white px-4 py-1 rounded-full text-sm font-semibold">
                          <Star className="w-4 h-4 fill-current" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-3">
                      <span className={`text-4xl font-extrabold bg-gradient-to-r ${gradientClasses[pkg.color as keyof typeof gradientClasses]} bg-clip-text text-transparent`}>
                        {pkg.price}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-navy via-navy/95 to-navy rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Book Your <span className="text-turquoise">Experience</span>?
                </h3>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Call us now or WhatsApp to book your appointment. We're open 24/7 for your convenience.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="tel:+919355125143"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise to-turquoise-light text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-5 h-5" />
                    +91 93551 25143
                  </a>
                  <a 
                    href="https://wa.me/919355125143"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-sunny text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default PricesPage;
