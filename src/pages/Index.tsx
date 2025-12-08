import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";
import ServiceComparison from "@/components/ServiceComparison";
import WhyChooseUs from "@/components/WhyChooseUs";
import RelaxationTherapy from "@/components/RelaxationTherapy";
import PricingTransparency from "@/components/PricingTransparency";
import LocationBenefits from "@/components/LocationBenefits";
import AdditionalContent from "@/components/AdditionalContent";
import LocationSEO from "@/components/LocationSEO";
import LocationPages from "@/components/LocationPages";
import InternalLinks from "@/components/InternalLinks";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import OrganizationSchema from "@/components/OrganizationSchema";
import ServiceSchema from "@/components/ServiceSchema";
import AdvancedSEOSchemas from "@/components/AdvancedSEOSchemas";
import GeoTargetedSEO from "@/components/GeoTargetedSEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Russian Spa in Aerocity & Mahipalpur | Book Appointment Online | Relaxation Therapy Near Delhi Airport"
        description="★★★★★ Best Russian Spa in Aerocity, Mahipalpur Delhi. Book Appointment Online for Relaxation Therapy, Russian Banya, Deep Tissue & Couples Massage. Open 24/7. ISO Certified. ☎ +91 98189 31148"
        keywords="Russian spa in Aerocity, Russian spa Aerocity Delhi, Book Appointment spa Mahipalpur, Relaxation Therapy near airport, Russian spa Mahipalpur, Russian Banya Aerocity, body massage Aerocity, couples spa Aerocity Mahipalpur, Thai massage Aerocity, deep tissue massage Delhi, spa near me Aerocity, book spa appointment online, Russian massage therapy, relaxation therapy Delhi NCR, Swedish massage Mahipalpur, aromatherapy Aerocity"
        canonical="https://mahipalpurspacentre.com/"
      />
      <OrganizationSchema />
      <ServiceSchema />
      <AdvancedSEOSchemas />
      <GeoTargetedSEO />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <TrustSignals />
        <Services />
        <RelaxationTherapy />
        <ServiceComparison />
        <WhyChooseUs />
        <PricingTransparency />
        <LocationBenefits />
        <AdditionalContent />
        <LocationPages />
        <InternalLinks />
        <LocationSEO />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <BookingForm />
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default Index;
