import { Check, X } from "lucide-react";

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
    <section className="py-16 bg-spa-light/5" id="comparison">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Russian Spa Centre Over Other Spas in Mahipalpur?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Compare what sets us apart from other spa centers in Mahipalpur, Aerocity, and Delhi NCR. See why thousands choose us for authentic Russian spa treatments.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-3 gap-4 p-4 bg-spa-dark border-b border-gold/30">
              <div className="text-spa-cream font-semibold">Features & Services</div>
              <div className="text-center">
                <div className="text-gold font-bold text-lg mb-1">Russian Spa Centre</div>
                <div className="text-xs text-spa-cream/70">Mahipalpur</div>
              </div>
              <div className="text-center">
                <div className="text-muted-foreground font-bold text-lg mb-1">Other Spas</div>
                <div className="text-xs text-muted-foreground/70">Mahipalpur Area</div>
              </div>
            </div>

            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 gap-4 p-4 ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                } border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors`}
              >
                <div className="text-foreground text-sm">{item.feature}</div>
                <div className="flex justify-center">
                  {item.us ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.others ? (
                    <Check className="w-6 h-6 text-green-500/50" />
                  ) : (
                    <X className="w-6 h-6 text-red-500/50" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm italic">
              * Comparison based on services offered by leading spa centers in Mahipalpur, Aerocity, and surrounding areas as of November 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
