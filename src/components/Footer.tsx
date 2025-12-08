import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spa-dark border-t border-border py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Russian Spa Centre</h3>
            <p className="text-muted-foreground">
              Experience authentic Russian Banya traditions in the heart of New Delhi
            </p>
          </div>

          <address className="not-italic">
            <h3 className="text-gold text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                <a 
                  href="https://maps.app.goo.gl/2LTFUUiwPaqB2Y1c7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-smooth"
                  aria-label="View Russian Spa Centre location on Google Maps"
                >
                  Office No - 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi, Delhi 110037
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-gold shrink-0" aria-hidden="true" />
                <a href="tel:+919818931148" className="hover:text-gold transition-smooth" aria-label="Call Russian Spa Centre">
                  +91 98189 31148
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-gold shrink-0" aria-hidden="true" />
                <a href="mailto:info@russianspacentre.com" className="hover:text-gold transition-smooth" aria-label="Email Russian Spa Centre">
                  info@russianspacentre.com
                </a>
              </div>
            </div>
          </address>

          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold shrink-0" aria-hidden="true" />
                <time>Open 24 Hours</time>
              </div>
              <p className="ml-7">Monday - Sunday</p>
            </div>
            
            {/* Location Map */}
            <div className="mt-4">
              <div className="relative w-full aspect-square max-w-[250px] rounded-lg overflow-hidden shadow-lg border-2 border-gold/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4234567890123!2d77.11234567890123!3d28.5412345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzI4LjQiTiA3N8KwMDYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Russian Spa Centre Location Map"
                  className="grayscale-[0.2]"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/2LTFUUiwPaqB2Y1c7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light transition-smooth mt-2"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>

        {/* Popular Spa Locations Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">Popular Spa Locations in Delhi</h3>
          <div className="text-center text-lg text-muted-foreground space-y-2">
            <p>Spa in Aerocity, Delhi - Spa in Mahipalpur, Delhi - Body Massage in Dwarka, Delhi</p>
          </div>
        </div>

        {/* Our Keywords Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">Our Keywords</h3>
          <div className="text-center text-muted-foreground leading-relaxed">
            <p>
              Russian Spa Centre, Authentic Russian Banya, Body Massage, Full Body Massage, Spa Services, 
              Deep Tissue Massage, Swedish Massage, Aromatherapy Massage, Hot Stone Massage, Aroma Oil Massage, 
              Balinese Massage, Thai Massage, Relaxation Therapy, Beauty Treatments, Wellness Services, 
              Couples Package, Professional Therapists, Mahipalpur, Aerocity, Dwarka, Delhi NCR
            </p>
          </div>
        </div>

        {/* Book Your Appointment Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">Book Your Appointment</h3>
          <div className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Call us at <a href="tel:+919818931148" className="text-gold font-bold hover:text-gold-light transition-smooth">+91 98189 31148</a> or fill out our <a href="#booking" className="text-gold font-bold hover:text-gold-light transition-smooth">Online Form</a> to reserve your spot.
            </p>
            <p className="text-lg">
              Open daily <span className="font-bold text-gold">24 hours</span>, we offer <span className="font-bold">24-Hour Massage Services</span> and <span className="font-bold">Couples Packages</span> for maximum flexibility.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center text-muted-foreground mb-4">
            <p>&copy; {new Date().getFullYear()} Russian Spa Centre. All rights reserved.</p>
            <nav className="mt-4 flex justify-center gap-6 text-sm" aria-label="Footer navigation">
              <a href="/about" className="hover:text-gold transition-smooth">About</a>
              <a href="/services" className="hover:text-gold transition-smooth">Services</a>
              <a href="/prices" className="hover:text-gold transition-smooth">Prices</a>
              <a href="/contact" className="hover:text-gold transition-smooth">Contact</a>
              <a href="/blog" className="hover:text-gold transition-smooth">Blog</a>
            </nav>
          </div>
          
          {/* SEO Keywords Section */}
          <div className="text-xs text-muted-foreground/60 text-center space-y-2">
            <p>
              Russian Body | Massage Centres | Beauty Spas For Men | Russian Body Massage Centres | 
              Russian Body Massage Centres-Z | Beauty Spas For Men-A | 24 Hours Beauty Spas Massage | 
              Centres For Men | 24 Hours Beauty Spas-A | Massage Centres For Men-Z | 
              24 Hours Body Massage Centres | Beauty Spas | 24 Hours Body Massage Centres-Z | 
              Beauty Spas-A | Russian spa in mahipalpur | Russian spa in aerocity | Russian spa Mahipalpur
            </p>
            <p>
              Serving areas: Mahipalpur, Aerocity, Defence Colony, South Delhi | 
              Pincodes: 110001, 110011, 110089, 110075, 110070, 110005, 110049, 11048, 122001, 122002, 201014, 201002, 201301, 121001, 110037, 110097, 110067, 110057
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
