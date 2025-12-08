import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes your Russian Banya experience authentic?",
      answer: "Our Russian Banya is designed according to traditional specifications with proper temperature and humidity controls. We use authentic Venik bundles made from imported birch leaves, following centuries-old Russian wellness traditions. Our therapists are trained in traditional Russian bathing rituals, ensuring you receive a genuine cultural and therapeutic experience that's rare to find in Delhi NCR."
    },
    {
      question: "Do you offer couple's spa packages?",
      answer: "Yes! Our luxurious couple's spa packages are perfect for anniversaries, special occasions, or quality time together. The package includes synchronized massages in a beautifully appointed couples room, access to our Russian Banya, aromatherapy, and complimentary refreshments. We can also customize packages based on your preferences and celebrate special occasions with champagne and roses."
    },
    {
      question: "How close are you to Delhi Airport?",
      answer: "We are conveniently located in Mahipalpur, just 10-15 minutes from Indira Gandhi International Airport. This makes us the perfect choice for travelers with layovers, business travelers needing to unwind after flights, or anyone in the Aerocity area. Many international travelers visit us before or after their flights for a rejuvenating experience."
    },
    {
      question: "What are your hygiene and safety standards?",
      answer: "We maintain hospital-grade hygiene standards throughout our facility. All treatment rooms are thoroughly sanitized between clients, linens are freshly laundered with hypoallergenic detergents, and we use only premium, hypoallergenic products. Our therapists follow strict hygiene protocols, and we conduct regular third-party hygiene audits. Your safety and comfort are our top priorities."
    },
    {
      question: "What types of massage therapy do you offer?",
      answer: "We offer a comprehensive range of therapeutic massages including Swedish massage for relaxation, Deep Tissue massage for chronic pain and muscle tension, Thai massage for flexibility and energy flow, Sports massage for athletes, Hot Stone therapy for deep relaxation, Aromatherapy massage with essential oils, and our signature Russian Banya experience with Venik treatment. Each treatment can be customized to your specific needs."
    },
    {
      question: "How do I book an appointment?",
      answer: "Booking is easy! You can call us directly at +91 98189 31148, send us a WhatsApp message for quick booking, use our online booking form on this website, or simply walk in. We recommend booking in advance, especially for couples packages or weekend appointments. Our staff is available 24/7 to assist with bookings and answer any questions."
    },
    {
      question: "Are your therapists certified and professional?",
      answer: "Absolutely. All our therapists hold valid certifications and licenses in their respective specialties. They undergo continuous training in both traditional and modern wellness techniques from Russia, Thailand, Sweden, and other countries. Our team has over 50 years of combined experience, and we carefully select therapists not just for their technical skills but also for their professionalism, empathy, and dedication to client wellbeing."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit begins with a warm welcome and consultation where we discuss your health history, any specific concerns, and your wellness goals. We'll recommend appropriate treatments and customize them to your needs. You'll be provided with fresh robes and towels, shown to private changing facilities, and guided through the entire experience. Our therapists will explain each step and ensure you're comfortable throughout. First-time visitors often mention how relaxed and cared for they feel from the moment they arrive."
    },
    {
      question: "Do you offer any special packages or memberships?",
      answer: "Yes! We offer various packages including couple's spa packages, birthday and anniversary specials, corporate wellness packages for companies, and regular client loyalty programs. We also provide special discounts for senior citizens, healthcare workers, and first responders. Contact us to learn about our current offers and membership options that provide significant savings for regular visitors."
    },
    {
      question: "What is the price range for your services?",
      answer: "Our services are competitively priced to offer exceptional value. Individual massage sessions typically range from ₹2,000 to ₹5,000 depending on the type and duration. Couple's packages start from ₹8,000. The Russian Banya experience with Venik treatment is ₹4,500. We believe in transparent pricing with no hidden charges. Visit our Prices page or contact us for detailed pricing information and current promotional offers."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open 24/7 to accommodate your schedule, whether you need an early morning session before work, a lunch break escape, late evening relaxation, or even a midnight appointment. Our flexible hours are especially convenient for travelers arriving on late flights or those with busy schedules. We recommend calling ahead for late-night appointments to ensure therapist availability."
    },
    {
      question: "Is parking available at your facility?",
      answer: "Yes, we provide complimentary parking for all our clients. Our facility has secure, dedicated parking spaces, making your visit convenient and hassle-free. The parking area is well-lit and monitored for your safety and peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-background" id="faq" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Everything you need to know about Russian Spa Centre - Your trusted wellness destination in Mahipalpur, Delhi NCR
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gold hover:text-gold-light transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="tel:+919818931148"
            className="inline-block bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold px-8 py-4 rounded-lg transition-smooth"
          >
            Call Us: +91 98189 31148
          </a>
        </div>
      </div>

      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
};

export default FAQ;