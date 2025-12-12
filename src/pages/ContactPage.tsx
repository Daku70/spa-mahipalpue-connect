import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import SEO from "@/components/SEO";
import { Sparkles } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact & Book Spa Appointment | Best Spa Mahipalpur | Near Delhi Airport"
        description="Book your luxury spa appointment in Mahipalpur. Call +91 93551 25143 or WhatsApp. Open 24/7. Near Delhi airport. Easy booking, instant confirmation."
        keywords="book spa Mahipalpur, spa appointment Delhi airport, contact spa Mahipalpur, spa phone number, WhatsApp booking spa"
        canonical="https://lisaspamahipalpur.com/contact"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container relative mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-turquoise/10 border border-turquoise/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-turquoise" />
                <span className="text-sm font-medium text-foreground">Get In Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're here to help you book your perfect spa experience. Open 24/7.
              </p>
            </div>
          </section>

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
