import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact & Book Spa Appointment | Best Spa Mahipalpur | Near Delhi Airport"
        description="Book your luxury spa appointment in Mahipalpur. Call +91 98189 31148 or WhatsApp. Open 24/7. Near Delhi airport. Easy booking, instant confirmation."
        keywords="book spa Mahipalpur, spa appointment Delhi airport, contact spa Mahipalpur, Russian spa phone number, WhatsApp booking spa"
        canonical="https://mahipalpurspacentre.com/contact"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <Location />
          <BookingForm />
        </div>
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default ContactPage;
