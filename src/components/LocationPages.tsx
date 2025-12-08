import { MapPin, Phone, Clock, Award } from "lucide-react";

const LocationPages = () => {
  const locations = [
    {
      name: "Russian Spa in Mahipalpur",
      highlight: "10 Minutes from Delhi Airport",
      description: "Our flagship Russian spa in Mahipalpur is strategically located just minutes from Indira Gandhi International Airport, making it the perfect destination for travelers seeking relaxation. As the premier Russian spa in Mahipalpur, we offer authentic Russian Banya experiences, luxury body massages, and comprehensive wellness treatments.",
      features: [
        "Authentic Russian Banya with traditional Venik treatment",
        "24/7 service for airport travelers and locals",
        "Couples spa packages in private luxury rooms",
        "Professional Russian-trained therapists",
        "Premium hygiene standards",
        "Complimentary refreshments and amenities"
      ],
      keywords: "Best Russian spa in Mahipalpur, spa near Delhi Airport, body massage Mahipalpur"
    },
    {
      name: "Russian Spa in Aerocity",
      highlight: "Luxury Hotel District Location",
      description: "Located in the heart of Delhi's hospitality hub, our Russian spa in Aerocity serves international business travelers and luxury hotel guests. Experience world-class Russian spa treatments in Aerocity, where traditional Russian wellness meets modern luxury.",
      features: [
        "Walking distance from 5-star hotels",
        "International standard treatments",
        "Express spa packages for business travelers",
        "Late night appointments available",
        "VIP privacy and discretion",
        "Multi-lingual staff"
      ],
      keywords: "Russian spa Aerocity, luxury spa near hotels, business spa Aerocity"
    },
    {
      name: "Russian Spa Near Me",
      highlight: "Easy to Find, Quick to Reach",
      description: "When you search for 'Russian spa near me' in Delhi NCR, our convenient locations ensure you're never far from authentic Russian wellness. With centers in Mahipalpur, Aerocity, and easy access from Gurgaon, Dwarka, and Vasant Kunj, we're your nearest Russian spa destination.",
      features: [
        "Multiple accessible locations",
        "Easy parking facilities",
        "Metro connectivity nearby",
        "Quick booking via phone or WhatsApp",
        "Same-day appointments available",
        "Landmark-based directions"
      ],
      keywords: "Russian spa near me, closest Russian spa, find Russian spa Delhi"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-spa-light/20 to-background" id="location-pages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your Nearest Russian Spa Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're searching for Russian spa in Mahipalpur, Russian spa in Aerocity, or simply "Russian spa near me," we're conveniently located to serve you across Delhi NCR with authentic Russian wellness experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-gold/20 rounded-xl p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gold font-semibold text-lg flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {location.highlight}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {location.description}
              </p>

              <div className="bg-spa-dark/5 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Why Choose This Location:
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {location.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-gold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="font-semibold">Open 24/7</span>
                </div>
                <a 
                  href="tel:+919818931148"
                  className="flex items-center gap-2 bg-gold text-spa-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +91 98189 31148
                </a>
              </div>

              <p className="text-sm text-muted-foreground italic mt-4">
                Popular searches: {location.keywords}
              </p>
            </div>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="max-w-6xl mx-auto mt-16 bg-gradient-to-br from-spa-dark to-spa-dark/90 rounded-xl p-8 md:p-12 text-spa-cream">
          <h3 className="text-3xl font-bold mb-6 text-gold">
            Why Our Russian Spa Locations Are Highly Rated Across Delhi NCR
          </h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              When you search for <strong className="text-gold">"Russian spa near me"</strong> or <strong className="text-gold">"Russian spa in Mahipalpur"</strong>, you're looking for more than just a massage—you want an authentic Russian wellness experience. Our Russian spa locations in Mahipalpur and Aerocity have earned their reputation as the finest Russian spa destinations in Delhi NCR through years of delivering exceptional service.
            </p>
            <p>
              Each of our Russian spa in Mahipalpur and Russian spa in Aerocity locations features authentic Russian Banya facilities, imported from Russia and designed according to traditional specifications. This commitment to authenticity is what sets our Russian spa apart from regular massage centers. Whether you're visiting our Russian spa in Aerocity after an international flight or our Russian spa in Mahipalpur for a weekend retreat, you'll experience genuine Russian wellness traditions.
            </p>
            <p>
              Our strategic locations mean that residents and visitors from Gurgaon, Dwarka, and Vasant Kunj can easily find a <strong className="text-gold">Russian spa near me</strong> without traveling far. The Russian spa in Mahipalpur is particularly popular with Delhi Airport travelers, while our Russian spa in Aerocity serves the business district perfectly. Both locations maintain the same high standards that make us the preferred choice for Russian spa in Delhi NCR.
            </p>
            <p>
              What truly distinguishes our Russian spa locations is our team of certified therapists, trained in authentic Russian massage techniques and Banya rituals. When you visit our Russian spa in Mahipalpur or Russian spa in Aerocity, you're not just getting a massage—you're experiencing centuries-old Russian wellness wisdom combined with modern luxury amenities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPages;
