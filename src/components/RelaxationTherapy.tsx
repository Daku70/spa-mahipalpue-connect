import { Sparkles, Heart, Brain, Waves } from "lucide-react";

const RelaxationTherapy = () => {
  const therapies = [
    {
      icon: Brain,
      title: "Stress Relief Therapy",
      description: "Professional relaxation therapy designed to reduce stress and anxiety, promoting mental clarity and emotional balance."
    },
    {
      icon: Heart,
      title: "Wellness & Healing",
      description: "Holistic relaxation therapy combining Russian Banya traditions with modern wellness techniques for complete rejuvenation."
    },
    {
      icon: Waves,
      title: "Deep Relaxation Sessions",
      description: "Expert relaxation therapy sessions using aromatherapy, hot stone therapy, and specialized massage techniques."
    },
    {
      icon: Sparkles,
      title: "Mind-Body Balance",
      description: "Therapeutic relaxation programs focusing on restoring harmony between mind, body, and spirit through proven techniques."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-spa-dark/20" id="relaxation-therapy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Relaxation Therapy in Aerocity & Mahipalpur
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience premium relaxation therapy at our Russian Spa in Aerocity and Mahipalpur. 
            Book your appointment for specialized relaxation treatments designed to restore balance and promote deep healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapies.map((therapy, index) => {
            const Icon = therapy.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-gold/50 transition-smooth hover:shadow-elegant"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gold mb-3 text-center">
                  {therapy.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {therapy.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground mb-6">
            Our relaxation therapy services in Aerocity and Mahipalpur are available 24/7. 
            Book your appointment online or call us for immediate scheduling.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ Certified Relaxation Therapists</span>
            <span>✓ Customized Therapy Programs</span>
            <span>✓ Premium Aerocity Location</span>
            <span>✓ Book Appointment Online</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelaxationTherapy;
