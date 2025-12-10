import { Phone, Sparkles, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCallNow = () => {
    window.location.href = "tel:+919355125143";
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    { icon: MapPin, text: "10 Min from Airport" },
    { icon: Clock, text: "Open 24/7" },
    { icon: Star, text: "4.9★ Rating" },
    { icon: Sparkles, text: "Premium Service" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero section">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-turquoise-dark">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-turquoise/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sunny/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Decorative circles */}
        <div className="absolute top-40 right-20 w-4 h-4 bg-coral rounded-full animate-pulse-soft" />
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-sunny rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-turquoise-light rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-turquoise/20 border border-turquoise/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-sunny" />
              <span className="text-sm font-medium text-spa-cream">Premium Wellness Experience</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-spa-cream">Welcome to</span>
                <br />
                <span className="bg-gradient-to-r from-turquoise via-turquoise-light to-sunny bg-clip-text text-transparent">
                  Lisa Spa
                </span>
                <br />
                <span className="text-coral">Mahipalpur</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-spa-cream/80 font-light max-w-xl">
                Experience ultimate relaxation with our premium spa treatments near Delhi Airport
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:border-turquoise/50 transition-all hover:scale-105"
                >
                  <feature.icon className="w-5 h-5 text-turquoise" />
                  <span className="text-sm font-medium text-spa-cream">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-turquoise to-turquoise-light hover:opacity-90 text-navy font-bold text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-turquoise/40 transition-all hover:scale-105"
                aria-label="Book appointment for spa in Mahipalpur"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleCallNow}
                className="border-2 border-coral text-coral hover:bg-coral hover:text-white font-bold text-lg px-8 py-6 rounded-2xl transition-all hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-turquoise to-coral border-2 border-navy flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" fill="white" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-spa-cream font-semibold">10,000+ Happy Clients</p>
                <p className="text-spa-cream/60 text-sm">Join our wellness family</p>
              </div>
            </div>
          </div>

          {/* Right Content - Logo & Visual */}
          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-2 border-dashed border-turquoise/30 animate-spin" style={{ animationDuration: '30s' }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-coral/20" />
            </div>
            
            {/* Logo container */}
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <img 
                src={logo} 
                alt="Lisa Spa Mahipalpur - Premier Spa in NCR, Mahipalpur Delhi"
                title="Lisa Spa Mahipalpur - Luxury Spa Treatments" 
                className="w-64 md:w-80 lg:w-96 animate-float"
                loading="eager"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-coral text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce-subtle">
                Open 24/7
              </div>
              <div className="absolute -bottom-4 -left-4 bg-sunny text-navy px-4 py-2 rounded-full font-bold text-sm animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                ₹2,500 Only
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            fill="hsl(var(--background))" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;