import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="py-16 bg-background" aria-label="Our Location">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Visit Us
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-light" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Office No - 118, Defence Enclave<br />
                    Adjoining Aerocity, Mahipalpur<br />
                    New Delhi, Delhi 110037
                  </p>
                  <p className="text-sm text-gold mt-2">
                    Near JW Marriott Hotel New Delhi Aerocity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:+919818931148" 
                    className="text-muted-foreground hover:text-gold transition-smooth text-lg"
                  >
                    +91 98189 31148
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:info@russianspacentre.com" 
                    className="text-muted-foreground hover:text-gold transition-smooth"
                  >
                    info@russianspacentre.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Open 24 Hours<br />
                    Monday - Sunday
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="space-y-4">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-elegant border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4234567890123!2d77.11234567890123!3d28.5412345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzI4LjQiTiA3N8KwMDYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Russian Spa Centre Location - Mahipalpur, New Delhi"
                className="grayscale-[0.3] contrast-[1.1]"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/2LTFUUiwPaqB2Y1c7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-smooth font-medium"
            >
              <MapPin className="h-5 w-5" />
              View larger map & Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
