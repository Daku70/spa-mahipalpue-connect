import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import banyaImage from "@/assets/banya.jpg";
import massageImage from "@/assets/massage.jpg";
import aromatherapyImage from "@/assets/aromatherapy.jpg";
import deepTissueImage from "@/assets/deep-tissue.jpg";
import swedishImage from "@/assets/swedish.jpg";
import coupleSpaImage from "@/assets/couple-spa.jpg";

const services = [
  {
    title: "Traditional Russian Banya",
    description: `Immerse yourself in the centuries-old tradition of the Russian Banya, an authentic steam bath experience that detoxifies and rejuvenates your entire body. Our skilled therapists use the traditional Venik technique, gently massaging you with aromatic birch leaves that have been soaked in hot water to release their natural oils and healing properties. The intense heat of the banya opens your pores, allowing deep cleansing and improved circulation throughout your body. This ancient ritual promotes lymphatic drainage, eliminates toxins, and strengthens your immune system. The combination of heat therapy and the therapeutic touch of birch leaves creates a deeply relaxing experience that relieves muscle tension and stress. Feel your worries melt away as the steam envelops you in a cocoon of warmth and tranquility. After your session, enjoy the traditional contrast therapy with a cool shower to invigorate your senses and tighten your skin. This authentic experience is perfect for those seeking both physical detoxification and mental relaxation. Our banya treatment improves skin elasticity, reduces inflammation, and leaves you feeling completely renewed. Experience the same wellness ritual that has kept Russians healthy and vibrant for generations. Each session includes complimentary herbal tea to complete your authentic Russian spa journey.`,
    price: "₹2,500",
    duration: "60 minutes",
    image: banyaImage,
    alt: "Authentic Russian Banya steam bath treatment with traditional Venik birch leaves at Russian Spa Centre Mahipalpur near Delhi Airport",
  },
  {
    title: "Deep Tissue Massage",
    description: `Experience the profound healing power of our signature Deep Tissue Massage, expertly designed to target chronic muscle tension and pain deep within your body. Our highly trained therapists use specialized techniques including slow, deliberate strokes and deep finger pressure to reach the innermost layers of your muscles and connective tissues. This therapeutic massage is particularly effective for addressing chronic pain conditions, sports injuries, and postural problems that have developed over time. The focused pressure breaks down adhesions and scar tissue, restoring proper blood flow and flexibility to affected areas. Feel the release of deeply held tension as our therapists work methodically through each muscle group, paying special attention to problem areas such as the lower back, shoulders, and neck. This intensive treatment promotes faster healing of damaged muscles, reduces inflammation, and significantly improves your range of motion. While you may experience some temporary soreness after the session, most clients report substantial relief from long-standing pain and stiffness within 24-48 hours. Our therapists customize the pressure level to your comfort while ensuring maximum therapeutic benefit. This massage is ideal for athletes, office workers with chronic tension, and anyone suffering from repetitive strain injuries or stress-related muscle pain.`,
    price: "₹3,500",
    duration: "90 minutes",
    image: deepTissueImage,
    alt: "Professional deep tissue massage therapy for chronic pain relief and muscle tension at Russian Spa Mahipalpur Aerocity",
  },
  {
    title: "Hot Stone Therapy",
    description: `Surrender to the ancient art of Hot Stone Therapy, where smooth, heated volcanic stones become instruments of deep relaxation and healing. Our therapists carefully place warm basalt stones along your spine, in your palms, and between your toes, allowing the penetrating heat to melt away tension from your muscles and calm your nervous system. The stones are heated to the perfect temperature and combined with expert massage techniques to provide a deeply therapeutic experience. The heat from the stones expands blood vessels, encouraging blood flow throughout your body and promoting the delivery of oxygen and nutrients to tired, aching muscles. As the warmth penetrates deep into your muscle tissue, chronic tension patterns begin to release, allowing our therapists to work more effectively on stubborn knots and tight areas. This unique therapy is particularly beneficial for people with muscle pain, insomnia, and circulation problems. The combination of heat therapy and massage provides relief from arthritis pain, reduces muscle spasms, and promotes deep relaxation of both body and mind. Feel your stress dissolve as the smooth, warm stones glide across your skin in rhythmic, flowing movements. The treatment also helps flush toxins from your body and boosts your immune system. Experience profound tranquility as this ancient healing modality balances your energy and restores harmony to your entire being.`,
    price: "₹4,000",
    duration: "90 minutes",
    image: massageImage,
    alt: "Hot stone massage therapy with heated volcanic basalt stones for deep relaxation and muscle tension relief at Russian Spa Centre Mahipalpur",
  },
  {
    title: "Aromatherapy Massage",
    description: `Indulge in the luxurious world of Aromatherapy Massage, where the healing power of touch combines with the therapeutic properties of pure essential oils to create a transformative wellness experience. Our expert therapists carefully select premium essential oils tailored to your specific needs, whether you seek relaxation, energy boost, pain relief, or emotional balance. Each oil blend is uniquely customized based on your consultation, ensuring maximum therapeutic benefit. The gentle, flowing massage techniques combined with aromatic oils work synergistically to reduce stress, anxiety, and promote overall wellbeing. As you breathe in the natural fragrances, your limbic system responds, triggering emotional and physiological responses that enhance relaxation and healing. The essential oils are absorbed through your skin during the massage, delivering their therapeutic compounds directly to your bloodstream. Choose from our selection of oils including lavender for relaxation, eucalyptus for respiratory health, peppermint for energy, or rosemary for mental clarity. This holistic treatment improves circulation, eases muscle tension, and supports your immune system while providing profound mental and emotional benefits. The combination of touch therapy and aromatherapy reduces cortisol levels, improves sleep quality, and enhances your mood. Leave feeling balanced, refreshed, and surrounded by a subtle aromatic aura that continues to benefit you long after your session ends.`,
    price: "₹3,000",
    duration: "75 minutes",
    image: aromatherapyImage,
    alt: "Aromatherapy massage with premium essential oils and therapeutic touch for stress relief at Russian Spa Mahipalpur Aerocity Delhi",
  },
  {
    title: "Swedish Massage",
    description: `Discover the timeless benefits of Swedish Massage, the most popular and widely practiced massage therapy technique in the world, now available at our premium spa center. This classic full-body massage uses five fundamental techniques including long flowing strokes, kneading, friction, tapping, and gentle stretching to promote complete relaxation and wellbeing. Our certified therapists apply these techniques in a carefully orchestrated sequence designed to improve circulation, ease muscle tension, and calm your nervous system. The gentle yet effective pressure used in Swedish massage increases oxygen flow in your blood, helping to release toxins from your muscles while promoting flexibility and reducing stress. This therapeutic approach is perfect for first-time massage clients or anyone seeking a relaxing, rejuvenating experience without the intensity of deep tissue work. Feel your muscles relax as tension melts away under the skilled hands of our experienced therapists. The rhythmic, flowing strokes create a meditative state that quiets your mind and allows for deep mental relaxation. Swedish massage has been scientifically proven to reduce cortisol levels, boost immunity, and improve sleep quality. It is particularly effective for managing stress-related conditions, reducing anxiety, and promoting overall health and wellness. Experience improved joint flexibility, reduced muscle stiffness, and a profound sense of calm that lasts for days after your treatment. This is the perfect introduction to massage therapy or a wonderful regular wellness routine.`,
    price: "₹2,800",
    duration: "60 minutes",
    image: swedishImage,
    alt: "Swedish massage therapy with long flowing strokes for relaxation and stress relief at Russian Spa Centre near Delhi Airport",
  },
  {
    title: "Couple's Spa Package",
    description: `Celebrate your relationship with our exclusive Couple's Spa Package, a romantic wellness journey designed for two people to experience simultaneously in our beautiful couples treatment room. Begin your experience together with our signature Russian Banya steam bath, where you will relax side by side in the warmth and tranquility of this ancient healing tradition. Following the detoxifying banya session, you and your partner will each receive a customized full-body massage performed by two of our expert therapists working in perfect synchronization. Choose from Swedish, aromatherapy, or hot stone massage techniques based on your individual preferences. The shared experience of relaxation deepens your connection while allowing each person to receive personalized attention and care. Our couples room features ambient lighting, soothing music, and aromatherapy diffusers to create the perfect romantic atmosphere. This package is ideal for anniversaries, honeymoons, special celebrations, or simply quality time together. The treatment promotes bonding and intimacy while addressing individual wellness needs. Enjoy complimentary champagne and chocolate-covered strawberries after your treatments as you relax in our private lounge area. The package includes access to our sauna, steam room, and relaxation areas throughout your visit. Create lasting memories while investing in your individual and collective wellbeing. This comprehensive experience leaves both partners feeling refreshed, connected, and deeply relaxed.`,
    price: "₹7,500",
    duration: "120 minutes",
    image: coupleSpaImage,
    alt: "Romantic couples spa package with synchronized massage and Russian Banya for anniversary celebration at Russian Spa Mahipalpur",
  },
  {
    title: "Thai Massage",
    description: `Experience the dynamic healing art of Traditional Thai Massage, an ancient therapy that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures to create a uniquely energizing and therapeutic experience. Unlike Western massage styles, Thai massage is performed on a comfortable mat on the floor with you fully clothed in loose, comfortable attire. Our certified Thai massage practitioners use their hands, knees, legs, and feet to move you through a series of yoga-like stretches while applying rhythmic pressure along your body's energy lines, known as Sen lines. This comprehensive treatment addresses your entire body, promoting flexibility, releasing tension, and balancing your energy flow. The combination of stretching and pressure work provides a workout for your body while simultaneously promoting deep relaxation for your mind. Thai massage improves circulation, enhances joint mobility, and releases blocked energy throughout your body. The assisted stretching component increases flexibility more effectively than passive stretching alone, as the therapist can safely guide you deeper into positions than you could achieve on your own. This treatment is particularly beneficial for athletes, yoga practitioners, and anyone experiencing stiffness or limited range of motion. Feel revitalized and energized as this active form of massage stimulates your body's natural healing abilities. The session leaves you feeling both relaxed and invigorated, with improved posture, increased energy, and a profound sense of wellbeing.`,
    price: "₹3,200",
    duration: "75 minutes",
    image: massageImage,
    alt: "Traditional Thai massage with acupressure and assisted yoga stretching for flexibility and energy at Russian Spa Aerocity Delhi",
  },
  {
    title: "Sports Massage",
    description: `Optimize your athletic performance and accelerate recovery with our specialized Sports Massage, designed specifically for active individuals and athletes at all levels. Our sports massage therapists understand the unique demands placed on an athlete's body and use targeted techniques to address sport-specific muscle groups and movement patterns. This intensive treatment combines elements of deep tissue massage, stretching, and trigger point therapy to enhance performance, prevent injuries, and speed recovery after intense physical activity. Whether you are preparing for competition, recovering from training, or dealing with a sports injury, our customized approach addresses your specific needs and goals. The treatment focuses on areas of the body that are overused and stressed from repetitive and often aggressive movements typical in sports activities. Pre-event sports massage uses stimulating techniques to warm up muscles and increase circulation, preparing your body for optimal performance. Post-event massage focuses on reducing muscle soreness, preventing stiffness, and promoting faster recovery by flushing out metabolic waste products. Our therapists are trained to identify and treat common sports injuries including muscle strains, tendonitis, and overuse injuries. The massage improves flexibility, reduces muscle tension, and enhances your body's natural healing processes. Experience decreased recovery time between workouts, improved range of motion, and reduced risk of future injuries. This essential treatment is perfect for runners, cyclists, swimmers, gym enthusiasts, and anyone with an active lifestyle.`,
    price: "₹3,800",
    duration: "60 minutes",
    image: deepTissueImage,
    alt: "Sports massage therapy for athletes with targeted muscle work for performance and injury prevention at Russian Spa Mahipalpur",
  },
  {
    title: "Reflexology",
    description: `Discover the profound healing power of Reflexology, an ancient therapeutic practice that treats your entire body through carefully applied pressure to specific reflex points on your feet, hands, and ears. Based on the principle that these reflex points correspond to different organs, glands, and systems throughout your body, this specialized treatment promotes healing and balance in corresponding areas. Our certified reflexologists use their thumbs, fingers, and hands to apply precise pressure and massage techniques to these reflex zones, stimulating your body's natural healing abilities and promoting overall wellness. As pressure is applied to specific points, blocked energy pathways open up, allowing healing energy to flow freely throughout your body. This treatment is remarkably effective for reducing stress, improving circulation, promoting better sleep, and supporting your body's natural detoxification processes. Many clients experience relief from headaches, digestive issues, hormonal imbalances, and chronic pain through regular reflexology sessions. The treatment begins with a warm foot bath infused with essential oils, followed by a detailed assessment of your feet to identify areas of tenderness or imbalance. The session concludes with a relaxing foot and lower leg massage that leaves you feeling grounded and centered. Reflexology is particularly beneficial for those who cannot receive full-body massage due to health conditions, as well as anyone seeking a deeply relaxing yet highly therapeutic treatment. Experience improved energy levels, enhanced immunity, and a profound sense of balance and wellbeing.`,
    price: "₹2,200",
    duration: "45 minutes",
    image: swedishImage,
    alt: "Reflexology foot massage therapy targeting pressure points for healing and stress relief at Russian Spa Centre Delhi",
  },
  {
    title: "Shiatsu Massage",
    description: `Embrace the ancient Japanese healing art of Shiatsu, a therapeutic massage technique that uses finger pressure on specific acupressure points to balance your body's energy flow and promote natural healing. The word Shiatsu translates to finger pressure, and our skilled practitioners use their thumbs, fingers, palms, and sometimes elbows and knees to apply rhythmic pressure along your body's meridian lines. This traditional therapy is rooted in Chinese medicine principles and works to unblock and regulate the flow of Qi (life energy) throughout your body. Unlike Western massage that focuses primarily on muscles, Shiatsu addresses your entire being, treating physical symptoms while also promoting emotional and spiritual balance. The treatment is performed on a comfortable mat with you fully clothed in loose attire, allowing for unrestricted movement and pressure application. Our therapists assess your energy imbalances before beginning and customize the treatment to address your specific needs. Shiatsu is particularly effective for relieving stress, anxiety, headaches, digestive problems, and musculoskeletal pain. The gentle yet firm pressure stimulates your body's natural healing mechanisms, improves circulation, and strengthens your immune system. Many clients report feeling a sense of deep calm and mental clarity following their session. Regular Shiatsu treatments can help manage chronic conditions, improve sleep quality, boost energy levels, and enhance overall vitality. Experience this holistic approach to wellness that treats not just symptoms but addresses the root causes of imbalance in your body and mind.`,
    price: "₹3,500",
    duration: "60 minutes",
    image: aromatherapyImage,
    alt: "Shiatsu massage with Japanese finger pressure technique for energy balance and natural healing at Russian Spa Mahipalpur Aerocity",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-spa-brown" id="services" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gold mb-4">Our Premium Spa Services</h2>
          <p className="text-xl text-spa-cream max-w-2xl mx-auto font-light">
            Experience authentic Russian spa treatments designed to rejuvenate your body and mind
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border overflow-hidden hover:shadow-gold transition-smooth hover:scale-105"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
                role="img"
                aria-label={service.alt}
              >
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="sr-only"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-gold text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-gold">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                </div>
                <Button 
                  onClick={() => window.location.href = "tel:+919818931148"}
                  className="w-full bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold transition-smooth"
                  aria-label={`Book ${service.title} appointment`}
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Call Now to Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
