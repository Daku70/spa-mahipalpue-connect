import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Services from "@/components/Services";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Spa Services in Mahipalpur | Body Massage, Wellness Treatments | Near Delhi Airport"
        description="Best spa services in Mahipalpur: Banya, body massage, deep tissue, Thai therapy, couples spa. Airport-friendly location. Open 24/7. Book: +91 93551 25143"
        keywords="body massage Mahipalpur, Banya Delhi, spa services near airport, deep tissue massage NCR, couples spa Mahipalpur, Thai massage Delhi"
        canonical="https://lisaspamahipalpur.com/services"
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
