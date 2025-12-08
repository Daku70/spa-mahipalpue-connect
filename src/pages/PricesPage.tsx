import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";

const PricesPage = () => {
  return (
    <>
      <SEO 
        title="Spa Prices & Packages in Mahipalpur | Affordable Luxury Near Delhi Airport"
        description="Transparent spa pricing in Mahipalpur. Body massage ₹2,000+, Russian Banya ₹3,500, Couples Package ₹5,500. Best value near Delhi airport. Call +91 98189 31148"
        keywords="spa prices Mahipalpur, massage rates Delhi airport, Russian Banya cost, affordable spa packages NCR, luxury spa deals near airport"
        canonical="https://mahipalpurspacentre.com/prices"
      />
      <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 min-h-screen">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-4 text-foreground">
              Our Pricing
            </h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transparent pricing for premium spa services in NCR
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Traditional Russian Banya</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹3,500</p>
                <p className="text-muted-foreground">90 minutes of authentic Russian steam therapy</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Deep Tissue Massage</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹2,500</p>
                <p className="text-muted-foreground">60 minutes of therapeutic deep tissue work</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Hot Stone Therapy</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹2,800</p>
                <p className="text-muted-foreground">75 minutes with heated basalt stones</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Aromatherapy Massage</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹2,200</p>
                <p className="text-muted-foreground">60 minutes with essential oils</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Swedish Massage</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹2,000</p>
                <p className="text-muted-foreground">60 minutes of relaxation therapy</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Couple's Spa Experience</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹5,500</p>
                <p className="text-muted-foreground">90 minutes for two people</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Thai Massage</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹2,300</p>
                <p className="text-muted-foreground">60 minutes of stretching therapy</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Sports Massage</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹2,600</p>
                <p className="text-muted-foreground">60 minutes for athletes</p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
                <h3 className="text-2xl font-serif mb-4 text-gold">Reflexology</h3>
                <p className="text-3xl font-bold mb-4 text-foreground">₹1,800</p>
                <p className="text-muted-foreground">45 minutes of foot therapy</p>
              </div>
            </div>

            <div className="mt-12 bg-gold/10 p-8 rounded-lg border border-gold/30">
              <h3 className="text-2xl font-serif mb-4 text-center text-foreground">Package Deals</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gold">Monthly Wellness Package</h4>
                  <p className="text-muted-foreground mb-2">4 sessions of any massage + 1 Russian Banya</p>
                  <p className="text-2xl font-bold text-foreground">₹12,000 <span className="text-sm text-muted-foreground line-through">₹14,500</span></p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gold">Couples Retreat Package</h4>
                  <p className="text-muted-foreground mb-2">3 couple's sessions + complimentary refreshments</p>
                  <p className="text-2xl font-bold text-foreground">₹15,000 <span className="text-sm text-muted-foreground line-through">₹16,500</span></p>
                </div>
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

export default PricesPage;
