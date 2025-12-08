import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Malhotra",
    location: "Gurgaon, Delhi NCR",
    rating: 5,
    date: "October 2025",
    text: "The Russian Banya experience here is absolutely authentic! I've been to spas all over Delhi, but nothing compares to the traditional Venik treatment they offer. The therapists are highly skilled and the facility is impeccably clean. Perfect location near the airport too. Highly recommend for anyone seeking genuine wellness.",
    service: "Russian Banya & Aromatherapy"
  },
  {
    name: "James Mitchell",
    location: "Business Traveler, UK",
    rating: 5,
    date: "November 2025",
    text: "As a frequent traveler to Delhi, I always book a session here during my layovers. The location near the airport is incredibly convenient, and the deep tissue massage is exactly what I need after long flights. Professional staff, luxurious ambiance, and excellent value. This is now my go-to spa whenever I'm in Delhi NCR.",
    service: "Deep Tissue Massage"
  },
  {
    name: "Rahul & Sneha Kapoor",
    location: "South Delhi",
    rating: 5,
    date: "September 2025",
    text: "We celebrated our anniversary with the Couple's Spa Package and it was magical! The synchronized massage in the beautiful couples room was so relaxing. The Russian Banya beforehand was a unique experience we'll never forget. The complimentary champagne and the entire ambiance made it truly special. Best spa experience in Mahipalpur!",
    service: "Couple's Spa Package"
  },
  {
    name: "Dr. Anita Sharma",
    location: "Aerocity, New Delhi",
    rating: 5,
    date: "October 2025",
    text: "As a physician, I'm particular about hygiene and professionalism. Russian Spa Centre exceeds all expectations. Their therapists are certified, knowledgeable, and truly understand therapeutic massage. The hygiene standards are hospital-grade. I've been coming here monthly for the past year for stress relief and chronic back pain – remarkable improvement!",
    service: "Thai Massage & Sports Massage"
  },
  {
    name: "Vikram Singh",
    location: "Mahipalpur, Delhi",
    rating: 5,
    date: "November 2025",
    text: "Local resident here and I've tried many spas in the area. Russian Spa Centre is hands down the best in Mahipalpur. The Swedish massage is divine, and their aromatherapy oils are premium quality. What I appreciate most is the personalized approach – they remember my preferences and adjust treatments to my needs. Exceptional service every single time.",
    service: "Swedish Massage"
  },
  {
    name: "Sarah Thompson",
    location: "Business Traveler, USA",
    rating: 5,
    date: "October 2025",
    text: "Found this gem while staying in Aerocity for work. The hot stone therapy was absolutely heavenly after a stressful week of meetings. The therapist was professional and the treatment room was spotless. Very easy to book via WhatsApp. Will definitely return on my next Delhi trip. Best spa near Delhi Airport without question!",
    service: "Hot Stone Therapy"
  },
  {
    name: "Amit Verma",
    location: "Gurgaon, Haryana",
    rating: 5,
    date: "November 2025",
    text: "I drive from Gurgaon monthly for their sports massage and it's worth every minute of the journey. As a marathon runner, I need serious therapeutic work, not just relaxation. Their therapist understands sports injuries and muscle recovery perfectly. The deep tissue work has significantly improved my performance and recovery time. Highly professional establishment with reasonable prices for the quality provided.",
    service: "Sports Massage"
  },
  {
    name: "Neha & Rohan",
    location: "Vasant Kunj, Delhi",
    rating: 5,
    date: "September 2025",
    text: "We've tried many couple's spa packages across Delhi, but Russian Spa Centre offers the best value and experience. The couples room is beautifully designed, very private and romantic. Both therapists were synchronized perfectly, and they remembered it was our anniversary with a special setup. The Russian Banya before the massage was an incredible unique experience. We're now regular monthly visitors!",
    service: "Couple's Spa Package"
  },
  {
    name: "David Chen",
    location: "Business Traveler, Singapore",
    rating: 5,
    date: "October 2025",
    text: "I travel to Delhi frequently for work and have visited many spas near the airport. This is by far the best. The Thai massage was authentic - the therapist clearly trained in Thailand. Facility is modern, clean, and the location is incredibly convenient. I always book a session during my Delhi trips now. Pricing is also very reasonable compared to hotel spas in Aerocity.",
    service: "Thai Massage"
  },
  {
    name: "Mrs. Kavita Mehta",
    location: "Defence Colony, Delhi",
    rating: 5,
    date: "November 2025",
    text: "At 65, I was hesitant about massage therapy, but my daughter insisted we try. I'm so glad we did! The therapist was gentle, respectful, and explained everything. They customized the Swedish massage perfectly for my arthritis and mobility issues. I felt 20 years younger afterwards! The senior citizen discount is much appreciated. I now come twice a month and it's helped my joint pain tremendously.",
    service: "Swedish Massage"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-spa-dark" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-gold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-spa-cream max-w-3xl mx-auto font-light">
            Join thousands of satisfied clients who trust Russian Spa Centre for their wellness journey in Delhi NCR
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gold">4.8</span>
            <span className="text-spa-cream">based on 350+ reviews</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-gold transition-smooth relative overflow-hidden"
            >
              <CardContent className="p-6">
                <Quote className="w-12 h-12 text-gold/20 absolute top-4 right-4" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-gold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-gold/70 mt-1">{testimonial.service}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-spa-cream text-lg mb-4">
            Ready to experience the best spa in Mahipalpur? Join our growing community of wellness enthusiasts.
          </p>
          <a 
            href="tel:+919818931148"
            className="inline-block bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold px-8 py-4 rounded-lg transition-smooth"
          >
            Book Your Appointment Now
          </a>
        </div>
      </div>

      {/* Structured Data for Reviews */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "DaySpa",
            "name": "Russian Spa Centre - Mahipalpur",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mahipalpur, New Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110037",
              "addressCountry": "IN"
            }
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.8",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Verified Customers"
          },
          "reviewBody": "Best Russian spa in Mahipalpur with authentic Banya, professional therapists, and exceptional hygiene standards."
        })}
      </script>
    </section>
  );
};

export default Testimonials;
