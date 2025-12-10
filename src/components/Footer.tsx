import { MapPin, Phone, Mail, Clock, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-navy overflow-hidden" role="contentinfo">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      
      {/* Main Footer Content */}
      <div className="relative border-t border-turquoise/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-turquoise" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">
                  Lisa Spa Mahipalpur
                </h3>
              </div>
              <p className="text-spa-cream/70 leading-relaxed">
                Experience premium spa treatments in the heart of Mahipalpur, New Delhi. Your journey to relaxation starts here.
              </p>
              <div className="flex items-center gap-2 text-sm text-turquoise">
                <Heart className="w-4 h-4" fill="currentColor" />
                <span>10,000+ Happy Clients</span>
              </div>
            </div>

            {/* Contact Section */}
            <address className="not-italic space-y-4">
              <h3 className="text-xl font-bold text-spa-cream flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-coral" />
                Contact Us
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://maps.app.goo.gl/2LTFUUiwPaqB2Y1c7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-spa-cream/70 hover:text-turquoise transition-colors group"
                >
                  <MapPin className="h-5 w-5 text-coral shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Office No - 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi, Delhi 110037</span>
                </a>
                <a 
                  href="tel:+919355125143" 
                  className="flex items-center gap-3 text-spa-cream/70 hover:text-turquoise transition-colors group"
                >
                  <Phone className="h-5 w-5 text-coral shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">+91 93551 25143</span>
                </a>
                <a 
                  href="mailto:info@lisaspamahipalpur.com" 
                  className="flex items-center gap-3 text-spa-cream/70 hover:text-turquoise transition-colors group"
                >
                  <Mail className="h-5 w-5 text-coral shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@lisaspamahipalpur.com</span>
                </a>
              </div>
            </address>

            {/* Hours & Map Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-spa-cream flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sunny" />
                Opening Hours
              </h3>
              <div className="bg-turquoise/10 border border-turquoise/20 rounded-2xl p-4">
                <div className="flex items-center gap-3 text-spa-cream">
                  <Clock className="h-6 w-6 text-sunny" />
                  <div>
                    <p className="font-bold text-lg">Open 24 Hours</p>
                    <p className="text-spa-cream/60 text-sm">Monday - Sunday</p>
                  </div>
                </div>
              </div>
              
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-turquoise/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4234567890123!2d77.11234567890123!3d28.5412345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzI4LjQiTiA3N8KwMDYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lisa Spa Mahipalpur Location Map"
                />
              </div>
            </div>
          </div>

          {/* Popular Locations */}
          <div className="mt-12 pt-8 border-t border-turquoise/10">
            <h3 className="text-xl font-bold text-center text-spa-cream mb-6">Popular Spa Locations</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Aerocity', 'Mahipalpur', 'Dwarka', 'Vasant Kunj', 'Gurgaon'].map((location) => (
                <span 
                  key={location}
                  className="px-4 py-2 bg-turquoise/10 border border-turquoise/20 rounded-full text-sm text-spa-cream/80 hover:bg-turquoise/20 transition-colors cursor-default"
                >
                  Spa in {location}
                </span>
              ))}
            </div>
          </div>

          {/* Book CTA */}
          <div className="mt-12 pt-8 border-t border-turquoise/10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-spa-cream mb-4">Ready to Relax?</h3>
              <p className="text-spa-cream/70 mb-6">
                Call us at{' '}
                <a href="tel:+919355125143" className="text-turquoise font-bold hover:text-turquoise-light transition-colors">
                  +91 93551 25143
                </a>
                {' '}or book online. Open 24/7!
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-turquoise/10">
            <div className="text-center">
              <p className="text-spa-cream/50 mb-4">&copy; {new Date().getFullYear()} Lisa Spa Mahipalpur. All rights reserved.</p>
              <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Footer navigation">
                {['About', 'Services', 'Prices', 'Contact', 'Blog'].map((item) => (
                  <a 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="text-spa-cream/60 hover:text-turquoise transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* SEO Keywords */}
            <div className="mt-8 text-xs text-spa-cream/30 text-center space-y-2">
              <p>
                Russian Spa Centre | Authentic Russian Banya | Body Massage | Full Body Massage | Spa Services | 
                Deep Tissue Massage | Swedish Massage | Aromatherapy | Hot Stone Massage | Thai Massage | 
                Relaxation Therapy | Couples Package | Mahipalpur | Aerocity | Dwarka | Delhi NCR
              </p>
              <p>
                Serving: Mahipalpur, Aerocity, Defence Colony, South Delhi | 
                Pincodes: 110001, 110011, 110037, 110097, 122001, 201014
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;