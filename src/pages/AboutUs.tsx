import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import SEO from "@/components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO 
        title="About Us - Best Spa in Mahipalpur | Why Choose Us | Near Delhi Airport"
        description="Discover why Mahipalpur Spa Centre is the best spa near Delhi airport. Expert therapists, luxury Russian massage, authentic Banya, couples spa. Trusted since 2010."
        keywords="best spa Mahipalpur, Russian spa near airport, luxury spa Delhi NCR, wellness centre Mahipalpur, authentic Russian massage"
        canonical="https://mahipalpurspacentre.com/about"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <WhyChooseUs />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default AboutUs;
