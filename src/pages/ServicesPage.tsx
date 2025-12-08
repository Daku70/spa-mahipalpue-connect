import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Services from "@/components/Services";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Spa Services in Mahipalpur | Russian Massage, Body Spa | Near Delhi Airport"
        description="Best spa services in Mahipalpur: Russian Banya, body massage, deep tissue, Thai therapy, couples spa. Airport-friendly location. Open 24/7. Book: +91 98189 31148"
        keywords="body massage Mahipalpur, Russian Banya Delhi, spa services near airport, deep tissue massage NCR, couples spa Mahipalpur, Thai massage Delhi"
        canonical="https://mahipalpurspacentre.com/services"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <Services />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default ServicesPage;
