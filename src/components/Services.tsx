import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Sparkles, ArrowRight } from "lucide-react";
import banyaImage from "@/assets/banya.jpg";
import massageImage from "@/assets/massage.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import deepTissueImage from "@/assets/deep-tissue.jpg";
import swedishImage from "@/assets/swedish.jpg";
import coupleSpaImage from "@/assets/couple-spa.jpg";
import facialImage from "@/assets/facial.jpg";

const services = [
  {
    title: "Traditional Banya",
    description: `Immerse yourself in the centuries-old tradition of the Banya, an authentic steam bath experience that detoxifies and rejuvenates your entire body. Our skilled therapists use the traditional Venik technique, gently massaging you with aromatic birch leaves.`,
    price: "₹2,500",
    duration: "60 minutes",
    image: banyaImage,
    alt: "Authentic Banya steam bath treatment with traditional Venik birch leaves at Lisa Spa Mahipalpur near Delhi Airport",
    color: "turquoise",
  },
  {
    title: "Deep Tissue Massage",
    description: `Experience the profound healing power of our signature Deep Tissue Massage, expertly designed to target chronic muscle tension and pain deep within your body using slow, deliberate strokes and deep finger pressure.`,
    price: "₹3,500",
    duration: "90 minutes",
    image: deepTissueImage,
    alt: "Professional deep tissue massage therapy for chronic pain relief and muscle tension at Lisa Spa Mahipalpur Aerocity",
    color: "coral",
  },
  {
    title: "Hot Stone Therapy",
    description: `Surrender to the ancient art of Hot Stone Therapy, where smooth, heated volcanic stones become instruments of deep relaxation and healing. The stones are heated to the perfect temperature and combined with expert massage techniques.`,
    price: "₹4,000",
    duration: "90 minutes",
    image: massageImage,
    alt: "Hot stone massage therapy with heated volcanic basalt stones for deep relaxation at Lisa Spa Mahipalpur",
    color: "sunny",
  },
  {
    title: "Aromatherapy Massage",
    description: `Indulge in the luxurious world of Aromatherapy Massage, where the healing power of touch combines with the therapeutic properties of pure essential oils to create a transformative wellness experience.`,
    price: "₹3,000",
    duration: "75 minutes",
    image: aromatherapyImage,
    alt: "Aromatherapy massage with premium essential oils at Lisa Spa Mahipalpur Aerocity Delhi",
    color: "turquoise",
  },
  {
    title: "Swedish Massage",
    description: `Discover the timeless benefits of Swedish Massage, the most popular massage therapy technique using five fundamental techniques including long flowing strokes, kneading, friction, tapping, and gentle stretching.`,
    price: "₹2,800",
    duration: "60 minutes",
    image: swedishImage,
    alt: "Swedish massage therapy with long flowing strokes for relaxation at Lisa Spa near Delhi Airport",
    color: "coral",
  },
  {
    title: "Couple's Spa Package",
    description: `Celebrate your relationship with our exclusive Couple's Spa Package, a romantic wellness journey designed for two people to experience simultaneously in our beautiful couples treatment room.`,
    price: "₹7,500",
    duration: "120 minutes",
    image: coupleSpaImage,
    alt: "Romantic couples spa package with synchronized massage at Lisa Spa Mahipalpur",
    color: "sunny",
  },
  {
    title: "Thai Massage",
    description: `Experience the ancient healing art of Thai Massage, combining acupressure, assisted yoga stretches, and deep compressions. This energizing treatment improves flexibility, relieves tension, and balances your body's energy flow.`,
    price: "₹2,300",
    duration: "60 minutes",
    image: massageImage,
    alt: "Traditional Thai massage with stretching therapy at Lisa Spa Mahipalpur near Delhi Airport",
    color: "turquoise",
  },
  {
    title: "Sports Massage",
    description: `Designed specifically for athletes and active individuals, our Sports Massage targets muscle groups used in your specific sport or activity. Helps prevent injuries, improves performance, and speeds up recovery.`,
    price: "₹2,600",
    duration: "60 minutes",
    image: deepTissueImage,
    alt: "Sports massage therapy for athletes at Lisa Spa Mahipalpur Aerocity Delhi",
    color: "coral",
  },
  {
    title: "Reflexology",
    description: `Discover the healing power of Reflexology, an ancient practice that applies pressure to specific points on your feet that correspond to organs and systems throughout your body, promoting natural healing.`,
    price: "₹1,800",
    duration: "45 minutes",
    image: swedishImage,
    alt: "Reflexology foot massage therapy at Lisa Spa Mahipalpur near Delhi Airport",
    color: "sunny",
  },
  {
    title: "Head & Scalp Massage",
    description: `Relieve stress and tension with our traditional Indian Champi-style Head & Scalp Massage. This rejuvenating treatment promotes hair health, improves circulation, and provides deep relaxation.`,
    price: "₹1,500",
    duration: "30 minutes",
    image: aromatherapyImage,
    alt: "Indian Champi head and scalp massage at Lisa Spa Mahipalpur Delhi",
    color: "turquoise",
  },
  {
    title: "Body Scrub & Polish",
    description: `Reveal radiant, glowing skin with our luxurious Body Scrub & Polish treatment. We gently exfoliate dead skin cells using natural ingredients, leaving your skin smooth, soft, and renewed.`,
    price: "₹2,500",
    duration: "60 minutes",
    image: facialImage,
    alt: "Body scrub and polish exfoliation treatment at Lisa Spa Mahipalpur Aerocity",
    color: "coral",
  },
  {
    title: "Premium Facial",
    description: `Pamper your skin with our Premium Facial treatment, customized to your skin type. Includes deep cleansing, exfoliation, extraction, massage, mask, and premium skincare products for a radiant glow.`,
    price: "₹3,000",
    duration: "60 minutes",
    image: facialImage,
    alt: "Premium facial treatment with skincare at Lisa Spa Mahipalpur near Delhi Airport",
    color: "sunny",
  },
  {
    title: "Back, Neck & Shoulder",
    description: `Target the most common stress areas with our focused Back, Neck & Shoulder massage. Perfect for office workers and those with upper body tension, this treatment provides targeted relief.`,
    price: "₹1,800",
    duration: "30 minutes",
    image: deepTissueImage,
    alt: "Back neck and shoulder massage therapy at Lisa Spa Mahipalpur Delhi",
    color: "turquoise",
  },
  {
    title: "Full Body Oil Massage",
    description: `Experience complete relaxation with our Full Body Oil Massage using warm, premium oils. This traditional treatment nourishes your skin, relaxes muscles, and promotes overall wellbeing.`,
    price: "₹2,500",
    duration: "60 minutes",
    image: massageImage,
    alt: "Full body oil massage therapy at Lisa Spa Mahipalpur near Delhi Airport",
    color: "coral",
  },
];

const colorClasses = {
  turquoise: "from-turquoise to-turquoise-light border-turquoise/30 hover:border-turquoise",
  coral: "from-coral to-coral-light border-coral/30 hover:border-coral",
  sunny: "from-sunny to-sunny-light border-sunny/30 hover:border-sunny",
};

const Services = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="services" aria-labelledby="services-heading">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-turquoise/10 border border-turquoise/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-foreground">Premium Services</span>
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
              Our Spa Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience world-class spa treatments designed to rejuvenate your body and mind
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group bg-card border-2 ${colorClasses[service.color as keyof typeof colorClasses]} overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[1]} text-white px-4 py-1 rounded-full font-bold text-sm`}>
                  {service.price}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {service.description}
                </CardDescription>
                
                <div className="flex gap-3">
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[1]} text-white hover:opacity-90 rounded-xl font-semibold`}
                    onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-navy rounded-2xl p-6 border border-turquoise/20">
            <Phone className="w-8 h-8 text-turquoise" />
            <div className="text-left">
              <p className="text-spa-cream/70 text-sm">Have questions about our services?</p>
              <a href="tel:+919355125143" className="text-turquoise font-bold text-xl hover:text-turquoise-light transition-colors">
                +91 93551 25143
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
