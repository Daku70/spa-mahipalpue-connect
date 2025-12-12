import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          Office No - 118, Defence Enclave<br />
          Adjoining Aerocity, Mahipalpur<br />
          New Delhi, Delhi 110037
        </>
      ),
      extra: "Near JW Marriott Hotel New Delhi Aerocity",
      color: "turquoise"
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a href="tel:+919355125143" className="text-foreground hover:text-turquoise transition-colors text-lg font-semibold">
          +91 93551 25143
        </a>
      ),
      color: "coral"
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a href="mailto:info@lisaspamahipalpur.com" className="text-foreground hover:text-coral transition-colors">
          info@lisaspamahipalpur.com
        </a>
      ),
      color: "sunny"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: (
        <>
          Open 24 Hours<br />
          Monday - Sunday
        </>
      ),
      color: "turquoise"
    }
  ];

  const colorClasses = {
    turquoise: "bg-turquoise/10 text-turquoise",
    coral: "bg-coral/10 text-coral",
    sunny: "bg-sunny/10 text-sunny"
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden" aria-label="Our Location">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                <span className="bg-gradient-to-r from-turquoise to-coral bg-clip-text text-transparent">
                  Visit Us
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-turquoise to-coral rounded-full" />
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className={`w-14 h-14 rounded-2xl ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <div className="text-muted-foreground">{item.content}</div>
                    {item.extra && (
                      <p className="text-sm text-turquoise mt-2 font-medium">{item.extra}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Map */}
          <div className="space-y-4">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border-2 border-turquoise/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4234567890123!2d77.11234567890123!3d28.5412345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzI4LjQiTiA3N8KwMDYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lisa Spa Mahipalpur Location - Mahipalpur, New Delhi"
                className="grayscale-[0.2] contrast-[1.1]"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/2LTFUUiwPaqB2Y1c7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-turquoise hover:text-turquoise-light transition-colors font-semibold"
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
