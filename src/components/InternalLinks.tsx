import { ArrowRight } from "lucide-react";

const InternalLinks = () => {
  const serviceLinks = [
    { name: "Russian Banya Mahipalpur", anchor: "#services", description: "Authentic Russian steam bath experience" },
    { name: "Body Massage Aerocity", anchor: "#services", description: "Professional full body massage therapy" },
    { name: "Couples Spa Delhi", anchor: "#services", description: "Romantic couples spa packages" },
    { name: "Thai Massage Near Airport", anchor: "#services", description: "Traditional Thai massage therapy" },
    { name: "Deep Tissue Massage", anchor: "#services", description: "Therapeutic deep tissue treatment" },
    { name: "Aromatherapy Spa", anchor: "#services", description: "Relaxing aromatherapy sessions" }
  ];

  const locationLinks = [
    { name: "Spa in Mahipalpur", anchor: "#locations", area: "Near Delhi Airport" },
    { name: "Russian Spa Aerocity", anchor: "#locations", area: "Luxury Hotel District" },
    { name: "Spa in Gurgaon Area", anchor: "#locations", area: "Corporate Hub" },
    { name: "Spa in Dwarka", anchor: "#locations", area: "West Delhi" },
    { name: "Spa in Vasant Kunj", anchor: "#locations", area: "South Delhi" },
    { name: "Russian Spa Near Me", anchor: "#locations", area: "Find Nearest" }
  ];

  return (
    <section className="py-16 bg-spa-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Services Quick Links */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Premium Spa Services
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {serviceLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.anchor}
                  className="group bg-card border border-border rounded-lg p-4 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location Quick Links */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Russian Spa Locations Across Delhi NCR
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {locationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.anchor}
                  className="group bg-gradient-to-br from-spa-dark to-spa-dark/80 rounded-lg p-4 hover:from-spa-dark/90 hover:to-spa-dark hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gold mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm text-spa-cream/80">
                        {link.area}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gold" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* SEO Footer Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Popular Searches:</strong> Russian spa in Mahipalpur | Russian spa in Aerocity | Russian spa near me | Russian spa in Gurgaon | Russian spa in Dwarka | Russian spa in Vasant Kunj | Body massage near Delhi Airport | Couples spa Mahipalpur | Thai massage Aerocity | Best spa in Mahipalpur | Russian Banya Delhi | Luxury spa near airport | Deep tissue massage Mahipalpur | Aromatherapy spa Aerocity | 24/7 spa Delhi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
