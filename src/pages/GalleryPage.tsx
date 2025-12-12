import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import { Sparkles } from "lucide-react";
import banyaImg from "@/assets/banya.jpg";
import massageImg from "@/assets/massage.jpg";
import deepTissueImg from "@/assets/deep-tissue.jpg";
import aromatherapyImg from "@/assets/aromatherapy.jpg";
import swedishImg from "@/assets/swedish.jpg";
import coupleImg from "@/assets/couple-spa.jpg";
import facialImg from "@/assets/facial.jpg";
import spaWomanFacial from "@/assets/spa-woman-facial.jpg";
import spaWomanMassage from "@/assets/spa-woman-massage.jpg";
import spaWomanRobe from "@/assets/spa-woman-robe.jpg";
import spaWomanHeadMassage from "@/assets/spa-woman-head-massage.jpg";
import spaWomanMeditation from "@/assets/spa-woman-meditation.jpg";
import spaTherapistClient from "@/assets/spa-therapist-client.jpg";

const GalleryPage = () => {
  const galleryImages = [
    { src: spaWomanFacial, alt: "Woman enjoying facial treatment at Lisa Spa Mahipalpur", title: "Facial Treatment", color: "turquoise" },
    { src: spaWomanMassage, alt: "Woman relaxing during massage therapy at Lisa Spa", title: "Massage Therapy", color: "coral" },
    { src: spaWomanRobe, alt: "Woman in spa robe relaxing at Lisa Spa wellness center", title: "Spa Relaxation", color: "sunny" },
    { src: spaWomanHeadMassage, alt: "Woman receiving head massage at Lisa Spa Mahipalpur", title: "Head Massage", color: "turquoise" },
    { src: spaWomanMeditation, alt: "Woman in meditation pose at Lisa Spa wellness center", title: "Wellness & Meditation", color: "coral" },
    { src: spaTherapistClient, alt: "Professional spa therapists at Lisa Spa Mahipalpur", title: "Our Therapists", color: "sunny" },
    { src: banyaImg, alt: "Traditional Banya experience at Lisa Spa", title: "Banya", color: "turquoise" },
    { src: massageImg, alt: "Relaxing massage therapy at Lisa Spa", title: "Massage Therapy", color: "coral" },
    { src: deepTissueImg, alt: "Deep tissue massage treatment at Lisa Spa", title: "Deep Tissue", color: "sunny" },
    { src: aromatherapyImg, alt: "Aromatherapy session with essential oils", title: "Aromatherapy", color: "turquoise" },
    { src: swedishImg, alt: "Swedish massage relaxation at Lisa Spa", title: "Swedish Massage", color: "coral" },
    { src: coupleImg, alt: "Couple's spa experience at Lisa Spa", title: "Couple's Spa", color: "sunny" },
    { src: facialImg, alt: "Premium facial treatment at Lisa Spa", title: "Facial Treatment", color: "turquoise" },
  ];

  const colorClasses = {
    turquoise: "from-turquoise to-turquoise-light",
    coral: "from-coral to-coral-light",
    sunny: "from-sunny to-sunny-light"
  };

  return (
    <>
      <SEO 
        title="Gallery - Luxury Spa Facilities in Mahipalpur | Near Delhi Airport"
        description="View our premium spa facilities, treatment rooms & authentic Banya in Mahipalpur. Experience luxury near Delhi airport. Open 24/7."
        keywords="spa gallery Mahipalpur, luxury spa photos Delhi, Banya images, spa facilities near airport, wellness centre gallery NCR"
        canonical="https://lisaspamahipalpur.com/gallery"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 min-h-screen">
          {/* Hero Section */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container relative mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-sunny/10 border border-sunny/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-sunny" />
                <span className="text-sm font-medium text-foreground">Our Gallery</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
                  Experience Luxury
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the tranquility and luxury of Lisa Spa through these moments
              </p>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-turquoise/30"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[image.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-bold text-xl p-6 drop-shadow-lg">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-navy via-navy/95 to-navy rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Experience <span className="text-turquoise">Lisa Spa</span>?
                  </h3>
                  <p className="text-white/70 mb-8">
                    Visit us to experience the luxury and tranquility firsthand
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-gradient-to-r from-turquoise to-coral text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    Book Your Experience
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default GalleryPage;
