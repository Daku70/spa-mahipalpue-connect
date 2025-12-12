import { Award, Users, Heart, Sparkles, Clock, Shield, Star, Check } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Unmatched Expertise & Certification",
      description: "Our team comprises internationally certified therapists trained in authentic techniques from Thailand, Sweden, and Japan. Each therapist undergoes rigorous training and continuous education to master traditional and modern wellness practices. With over 50 years of combined experience, our practitioners bring unparalleled skill to every treatment.",
      color: "turquoise"
    },
    {
      icon: Sparkles,
      title: "Authentic Wellness Experience",
      description: "We are one of the very few establishments in NCR offering genuine wellness experiences. Our Banya has been designed according to traditional specifications, ensuring the perfect temperature, humidity, and atmosphere for maximum therapeutic benefit and cultural authenticity.",
      color: "coral"
    },
    {
      icon: Heart,
      title: "Personalized Wellness Approach",
      description: "We understand that every body is unique, which is why we never offer one-size-fits-all treatments. Each client receives a thorough consultation where we assess your specific needs, health conditions, stress points, and wellness goals. Our therapists then customize every aspect of your treatment.",
      color: "sunny"
    },
    {
      icon: Shield,
      title: "Uncompromising Hygiene Standards",
      description: "Your safety and comfort are our top priorities. We maintain hospital-grade cleanliness protocols throughout our facility, with rigorous sanitization procedures between each client. All linens are freshly laundered, treatment rooms are thoroughly disinfected, and we use only premium, hypoallergenic products.",
      color: "turquoise"
    },
    {
      icon: Star,
      title: "Premium Quality Products",
      description: "We use only the finest therapeutic-grade oils, lotions, and products sourced from reputable international suppliers. Our essential oils are 100% pure and organic, free from synthetic fragrances or harmful chemicals. The difference in quality is immediately noticeable in both the experience and the lasting results.",
      color: "coral"
    },
    {
      icon: Users,
      title: "Exceptional Client Satisfaction",
      description: "Our clients are our best advocates. With a client retention rate exceeding 90% and countless five-star reviews, we have built a loyal community of wellness enthusiasts who return regularly and enthusiastically recommend us to friends and family.",
      color: "sunny"
    },
    {
      icon: Clock,
      title: "Flexible & Convenient",
      description: "We understand that modern life is demanding, which is why we offer 24/7 hours and flexible scheduling to accommodate your busy lifestyle. Whether you need an early morning session before work, a lunch break escape, or a late evening appointment, we are here for you.",
      color: "turquoise"
    },
    {
      icon: Check,
      title: "Holistic Wellness Philosophy",
      description: "We view spa treatments not as luxury indulgences but as essential components of a healthy lifestyle. Our holistic approach addresses physical tension, mental stress, and emotional wellbeing simultaneously. Beyond the immediate relaxation, our treatments provide lasting therapeutic benefits.",
      color: "coral"
    }
  ];

  const colorClasses = {
    turquoise: "bg-turquoise/10 border-turquoise/30 text-turquoise",
    coral: "bg-coral/10 border-coral/30 text-coral",
    sunny: "bg-sunny/10 border-sunny/30 text-sunny"
  };

  const highlights = [
    { icon: Award, title: "Award-Winning Service", desc: "Recognized multiple times as NCR's Best Spa by leading lifestyle publications" },
    { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed with comprehensive insurance. All therapists hold valid certifications" },
    { icon: Heart, title: "Community Commitment", desc: "Special discounts for senior citizens, healthcare workers, and first responders" }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="why-choose-us" aria-labelledby="why-choose-heading">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sunny/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-foreground">Why Choose Us</span>
          </div>
          <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
              NCR's Premier Spa & Wellness Center
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Lisa Spa Mahipalpur the most trusted and preferred spa destination in the National Capital Region
          </p>
        </header>

        {/* Opening Statement */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a region filled with countless spa options, Lisa Spa has established itself as the undisputed leader in luxury wellness and therapeutic treatments. Our commitment to excellence, authentic techniques, and genuine care for our clients has made us the first choice for discerning individuals seeking the finest spa experience in NCR.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 rounded-3xl bg-card border-2 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ').slice(1, 2).join(' ')} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex gap-4">
                <div className={`w-14 h-14 rounded-2xl ${colorClasses[feature.color as keyof typeof colorClasses].split(' ').slice(0, 1).join(' ')} flex items-center justify-center shrink-0`}>
                  <feature.icon className={`w-7 h-7 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ').slice(2).join(' ')}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-r from-navy via-navy/95 to-navy rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            What Sets Us <span className="text-turquoise">Apart</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-turquoise/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-turquoise/30 transition-colors">
                  <item.icon className="w-10 h-10 text-turquoise" />
                </div>
                <h4 className="text-lg font-semibold text-coral mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Our reputation as NCR's best spa center has been earned through years of dedication, thousands of satisfied clients, and an unwavering commitment to excellence in every treatment we provide. When you choose Lisa Spa, you're investing in your health, wellbeing, and quality of life.
          </p>
          <p className="text-xl font-semibold italic bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
            Experience the difference that true expertise, genuine care, and authentic wellness traditions can make. Visit Lisa Spa Mahipalpur today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
