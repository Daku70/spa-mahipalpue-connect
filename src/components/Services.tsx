import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Sparkles, ArrowRight } from "lucide-react";
import banyaImage from "@/assets/banya.jpg";
import massageImage from "@/assets/massage.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import deepTissueImage from "@/assets/deep-tissue.jpg";
import swedishImage from "@/assets/swedish.jpg";
import coupleSpaImage from "@/assets/couple-spa.jpg";

const services = [
  {
    title: "Traditional Russian Banya",
    description: `Immerse yourself in the centuries-old tradition of the Russian Banya, an authentic steam bath experience that detoxifies and rejuvenates your entire body. Our skilled therapists use the traditional Venik technique, gently massaging you with aromatic birch leaves that have been soaked in hot water to release their natural oils and healing properties. The intense heat of the banya opens your pores, allowing deep cleansing and improved circulation throughout your body. This ancient ritual promotes lymphatic drainage, eliminates toxins, and strengthens your immune system. The combination of heat therapy and the therapeutic touch of birch leaves creates a deeply relaxing experience that relieves muscle tension and stress.`,
    price: "₹2,500",
    duration: "60 minutes",
    image: banyaImage,
    alt: "Authentic Russian Banya steam bath treatment with traditional Venik birch leaves at Lisa Spa Mahipalpur near Delhi Airport",
    color: "turquoise",
  },
  {
    title: "Deep Tissue Massage",
    description: `Experience the profound healing power of our signature Deep Tissue Massage, expertly designed to target chronic muscle tension and pain deep within your body. Our highly trained therapists use specialized techniques including slow, deliberate strokes and deep finger pressure to reach the innermost layers of your muscles and connective tissues. This therapeutic massage is particularly effective for addressing chronic pain conditions, sports injuries, and postural problems that have developed over time.`,
    price: "₹3,500",
    duration: "90 minutes",
    image: deepTissueImage,
    alt: "Professional deep tissue massage therapy for chronic pain relief and muscle tension at Lisa Spa Mahipalpur Aerocity",
    color: "coral",
  },
  {
    title: "Hot Stone Therapy",
    description: `Surrender to the ancient art of Hot Stone Therapy, where smooth, heated volcanic stones become instruments of deep relaxation and healing. Our therapists carefully place warm basalt stones along your spine, in your palms, and between your toes, allowing the penetrating heat to melt away tension from your muscles and calm your nervous system. The stones are heated to the perfect temperature and combined with expert massage techniques to provide a deeply therapeutic experience.`,
    price: "₹4,000",
    duration: "90 minutes",
    image: massageImage,
    alt: "Hot stone massage therapy with heated volcanic basalt stones for deep relaxation at Lisa Spa Mahipalpur",
    color: "sunny",
  },
  {
    title: "Aromatherapy Massage",
    description: `Indulge in the luxurious world of Aromatherapy Massage, where the healing power of touch combines with the therapeutic properties of pure essential oils to create a transformative wellness experience. Our expert therapists carefully select premium essential oils tailored to your specific needs, whether you seek relaxation, energy boost, pain relief, or emotional balance.`,
    price: "₹3,000",
    duration: "75 minutes",
    image: aromatherapyImage,
    alt: "Aromatherapy massage with premium essential oils at Lisa Spa Mahipalpur Aerocity Delhi",
    color: "turquoise",
  },
  {
    title: "Swedish Massage",
    description: `Discover the timeless benefits of Swedish Massage, the most popular and widely practiced massage therapy technique in the world. This classic full-body massage uses five fundamental techniques including long flowing strokes, kneading, friction, tapping, and gentle stretching to promote complete relaxation and wellbeing. Our certified therapists apply these techniques in a carefully orchestrated sequence.`,
    price: "₹2,800",
    duration: "60 minutes",
    image: swedishImage,
    alt: "Swedish massage therapy with long flowing strokes for relaxation at Lisa Spa near Delhi Airport",
    color: "coral",
  },
  {
    title: "Couple's Spa Package",
    description: `Celebrate your relationship with our exclusive Couple's Spa Package, a romantic wellness journey designed for two people to experience simultaneously in our beautiful couples treatment room. Begin your experience together with a steam bath, followed by customized full-body massage performed by two of our expert therapists working in perfect synchronization.`,
    price: "₹7,500",
    duration: "120 minutes",
    image: coupleSpaImage,
    alt: "Romantic couples spa package with synchronized massage at Lisa Spa Mahipalpur",
    color: "sunny",
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