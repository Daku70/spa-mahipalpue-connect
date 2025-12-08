import { Shield, Award, Users, ThumbsUp, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSignals = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Clients Served", description: "Across Delhi NCR" },
    { icon: Star, value: "4.9/5", label: "Average Rating", description: "From 350+ Reviews" },
    { icon: Award, value: "15+", label: "Certified Therapists", description: "International Training" },
    { icon: Clock, value: "24/7", label: "Always Open", description: "Book Anytime" },
  ];

  const certifications = [
    { title: "ISO Certified Spa", description: "International quality standards for hygiene and service excellence" },
    { title: "Certified Therapists", description: "Russian, Thai, Swedish, and Ayurvedic massage certifications" },
    { title: "Hygiene Excellence", description: "Hospital-grade sanitation protocols and fresh linens every session" },
    { title: "Privacy Guaranteed", description: "Individual treatment rooms with complete privacy and discretion" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-spa-dark to-spa-dark/95" id="trust-signals">
      <div className="container mx-auto px-4">
        {/* Trust Stats */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Delhi NCR's Most Trusted Russian Spa Center
          </h2>
          <p className="text-spa-cream text-lg max-w-3xl mx-auto">
            Over a decade of excellence in authentic Russian Banya treatments and luxury spa services near Delhi Airport, Aerocity, and Mahipalpur
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-spa-light/10 border-gold/20 hover:border-gold/50 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-spa-cream mb-1">{stat.label}</div>
                <div className="text-xs text-spa-cream/70">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gold text-center mb-8">
            Our Certifications & Quality Standards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-spa-light/5 border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gold mb-2">{cert.title}</h4>
                    <p className="text-sm text-spa-cream/80 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-3">
            <ThumbsUp className="w-5 h-5 text-gold" />
            <span className="text-spa-cream">
              <strong className="text-gold">350+ Five-Star Reviews</strong> on Google & Facebook
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
