import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import SEO from "@/components/SEO";
import { Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <SEO 
        title="About Us - Best Spa in Mahipalpur | Why Choose Us | Near Delhi Airport"
        description="Discover why Lisa Spa Mahipalpur is the best spa near Delhi airport. Expert therapists, luxury massage, authentic wellness treatments, couples spa. Trusted since 2010."
        keywords="best spa Mahipalpur, spa near airport, luxury spa Delhi NCR, wellness centre Mahipalpur, authentic massage"
        canonical="https://lisaspamahipalpur.com/about"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container relative mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-turquoise/10 border border-turquoise/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium text-foreground">About Lisa Spa</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
                  Your Wellness Journey
                </span>
                <br />
                <span className="text-foreground">Starts Here</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Since 2010, Lisa Spa Mahipalpur has been the premier destination for luxury spa treatments 
                near Delhi Airport. Our commitment to excellence, authentic techniques, and personalized 
                care has made us the most trusted spa in NCR.
              </p>
            </div>
          </section>

          <WhyChooseUs />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default AboutUs;
