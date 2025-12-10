import { Check, X, Sparkles } from "lucide-react";

const ServiceComparison = () => {
  const comparisons = [
    { feature: "Authentic Russian Banya with Traditional Venik Treatment", us: true, others: false },
    { feature: "Internationally Certified Therapists", us: true, others: false },
    { feature: "24/7 Open - Book Anytime", us: true, others: false },
    { feature: "Individual Private Treatment Rooms", us: true, others: true },
    { feature: "Hospital-Grade Hygiene Standards", us: true, others: false },
    { feature: "Personalized Treatment Plans", us: true, others: false },
    { feature: "Premium Imported Essential Oils", us: true, others: false },
    { feature: "Couples Spa Packages Available", us: true, others: true },
    { feature: "10 Minutes from Delhi Airport", us: true, others: false },
    { feature: "Free Parking for All Guests", us: true, others: false },
    { feature: "Complimentary Refreshments", us: true, others: false },
    { feature: "Easy Online & WhatsApp Booking", us: true, others: true },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="comparison">
      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-foreground">Why Us?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">
                Why Choose Lisa Spa Mahipalpur?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Compare what sets us apart from other spa centers in Mahipalpur, Aerocity, and Delhi NCR.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card border-2 border-turquoise/20 rounded-3xl overflow-hidden shadow-xl">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-navy">
              <div className="text-spa-cream font-semibold">Features & Services</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-turquoise/20 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-turquoise" />
                  <span className="text-turquoise font-bold">Lisa Spa</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-spa-cream/60 font-medium">Other Spas</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 gap-4 p-4 ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                } border-b border-border last:border-b-0 hover:bg-turquoise/5 transition-colors`}
              >
                <div className="text-foreground text-sm font-medium">{item.feature}</div>
                <div className="flex justify-center">
                  {item.us ? (
                    <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-turquoise" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.others ? (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Check className="w-5 h-5 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm italic">
              * Comparison based on services offered by leading spa centers in Mahipalpur, Aerocity, and surrounding areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;