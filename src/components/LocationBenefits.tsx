import { MapPin, Plane, Building2, Car, Train, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationBenefits = () => {
  const benefits = [
    {
      icon: Plane,
      title: "10 Minutes from Delhi Airport",
      description: "Located in Mahipalpur, we're the closest premium spa to Indira Gandhi International Airport. Perfect for travelers with layovers, arriving guests, or those departing who want to relax before their flight. Many international travelers make us their first or last stop in Delhi for a rejuvenating experience."
    },
    {
      icon: Building2,
      title: "Heart of Aerocity Business District",
      description: "Situated in the prime Mahipalpur area, we're easily accessible from Aerocity's luxury hotels and business centers. Ideal for business travelers staying at nearby hotels like JW Marriott, Roseate, Andaz, or Pullman. After stressful meetings or conferences, unwind with our therapeutic treatments just minutes away from your hotel."
    },
    {
      icon: MapPin,
      title: "Central Delhi NCR Location",
      description: "Our strategic location in South Delhi makes us easily accessible from Gurgaon, Noida, South Delhi, and Central Delhi. Well-connected via NH-8 and major arterial roads, we're the perfect wellness destination whether you're from Vasant Kunj, Dwarka, Connaught Place, or anywhere in the National Capital Region."
    },
    {
      icon: Car,
      title: "Easy Access & Free Parking",
      description: "Located on a main road with excellent connectivity, finding us is effortless. We provide complimentary secure parking for all clients. Whether you're driving from Gurgaon via NH-8, coming from the airport, or arriving from anywhere in Delhi NCR, parking is convenient and hassle-free."
    },
    {
      icon: Train,
      title: "Metro Accessible",
      description: "We're well-connected to the Delhi Metro network via the Airport Express Line and Magenta Line. The nearest metro station is just a short auto-rickshaw ride away, making public transport a viable option. This accessibility makes us a convenient choice for residents across Delhi NCR who prefer metro travel."
    },
    {
      icon: Clock,
      title: "Open 24/7 for Your Convenience",
      description: "Whether you have a late-night flight arrival, early morning departure, work odd hours, or simply prefer nighttime appointments, we're always open. Our 24/7 operation means you can book a relaxing massage or authentic Russian Banya experience at any time that suits your schedule, any day of the week."
    }
  ];

  return (
    <section className="py-20 bg-spa-dark" id="location-benefits" aria-labelledby="location-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="location-heading" className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Perfectly Located in the Heart of Delhi NCR
          </h2>
          <p className="text-xl text-spa-cream max-w-3xl mx-auto font-light">
            Strategically positioned in Mahipalpur for maximum convenience - Whether you're a traveler, business professional, or local resident
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:shadow-gold transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gold mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-spa-brown rounded-lg p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gold mb-6 text-center">
            Why Our Location Makes Us Delhi NCR's Most Accessible Premium Spa
          </h3>
          <div className="space-y-4 text-spa-cream leading-relaxed">
            <p>
              <strong className="text-gold">For International Travelers:</strong> Skip the hassle of navigating through Delhi traffic. Our proximity to the airport means you can enjoy a world-class spa experience during long layovers or immediately upon arrival. Store your luggage with us, relax with a Russian Banya session, and head to your hotel refreshed. Many pilots, flight attendants, and international business travelers make us their regular wellness stop in Delhi.
            </p>
            <p>
              <strong className="text-gold">For Business Professionals:</strong> If you're staying in Aerocity or attending meetings in the area, we're your oasis of calm amidst a busy schedule. Just 5-10 minutes from major business hotels and conference centers, you can squeeze in a therapeutic massage between meetings or unwind after a long day without wasting time in Delhi traffic.
            </p>
            <p>
              <strong className="text-gold">For Delhi NCR Residents:</strong> Whether you live in Vasant Kunj, Dwarka, Gurgaon, or anywhere in South Delhi, our location on NH-8 makes us easily accessible without the stress of navigating congested areas. Ample parking and proximity to major roads mean you spend more time relaxing and less time commuting.
            </p>
            <p>
              <strong className="text-gold">For Couples & Groups:</strong> Planning a special day out? Our central location makes us the perfect meeting point for couples from different parts of the city. Close to restaurants, shopping areas, and entertainment options in Mahipalpur and Aerocity, you can easily make a full day of relaxation and leisure activities.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-spa-cream text-lg mb-4">
            Ready to experience the most conveniently located premium spa in Delhi NCR?
          </p>
          <a 
            href="tel:+919818931148"
            className="inline-block bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold px-8 py-4 rounded-lg transition-smooth"
          >
            Book Your Visit Now
          </a>
        </div>
      </div>

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Russian Spa Centre - Mahipalpur",
          "image": "https://mahipalpurspacentre.com/og-image.jpg",
          "@id": "https://mahipalpurspacentre.com",
          "url": "https://mahipalpurspacentre.com",
          "telephone": "+919818931148",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mahipalpur",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110037",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5450,
            "longitude": 77.1200
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "priceRange": "₹₹₹",
          "servesCuisine": "Wellness & Spa Services",
          "areaServed": ["Delhi NCR", "Gurgaon", "Noida", "Aerocity", "Mahipalpur"]
        })}
      </script>
    </section>
  );
};

export default LocationBenefits;