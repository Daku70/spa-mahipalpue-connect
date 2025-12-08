import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, User, Clock } from "lucide-react";

const articles = [
  {
    title: "What is a Russian Banya and Why It's Unique",
    slug: "what-is-russian-banya-unique",
    date: "November 8, 2025",
    author: "Dr. Svetlana Petrova, Spa Director",
    readTime: "8 min read",
    excerpt: "Discover the centuries-old tradition of the Russian Banya and why it's one of the most effective wellness treatments available today.",
    content: `
      <h2>The Ancient Tradition of Russian Banya</h2>
      <p>The Russian Banya is not just a steam bath – it's a deeply rooted cultural tradition that has been practiced for over a thousand years. This authentic wellness ritual combines intense heat, steam, and the therapeutic application of birch or oak branches (called Venik) to create one of the most powerful detoxification and rejuvenation experiences available.</p>
      
      <h3>What Makes the Russian Banya Different?</h3>
      <p>Unlike typical saunas or steam rooms, the Russian Banya operates at specific temperature and humidity levels (typically 60-90°C with 40-65% humidity) that optimize the therapeutic benefits. The real magic happens with the Venik treatment – trained specialists gently strike and massage your body with soaked birch leaves, releasing essential oils and creating a unique aromatherapy experience.</p>
      
      <h3>Health Benefits Backed by Science</h3>
      <ul>
        <li><strong>Deep Detoxification:</strong> The intense heat opens pores and promotes sweating, eliminating toxins, heavy metals, and impurities from your body at a cellular level.</li>
        <li><strong>Improved Circulation:</strong> Heat therapy dilates blood vessels, improving blood flow and oxygen delivery to all organs and tissues.</li>
        <li><strong>Immune System Boost:</strong> Regular Banya sessions strengthen immunity by stimulating white blood cell production.</li>
        <li><strong>Respiratory Health:</strong> The humid heat and birch leaf aromatics clear airways and benefit those with asthma or bronchitis.</li>
        <li><strong>Skin Rejuvenation:</strong> Deep cleansing combined with improved circulation gives you glowing, healthy skin.</li>
        <li><strong>Stress Relief:</strong> The ritual promotes deep mental relaxation and reduces cortisol levels significantly.</li>
      </ul>
      
      <h3>The Authentic Banya Experience</h3>
      <p>At Russian Spa Centre in Mahipalpur, we've recreated an authentic Russian Banya using traditional construction methods and materials. Our therapists are trained in the proper Venik techniques passed down through generations. Each session includes:</p>
      <ul>
        <li>Pre-banya consultation and preparation</li>
        <li>Multiple heat exposure cycles with rest periods</li>
        <li>Traditional Venik massage with birch or oak leaves</li>
        <li>Contrast therapy (cool shower between sessions)</li>
        <li>Complimentary herbal tea to replenish fluids</li>
      </ul>
      
      <h3>Who Should Try the Russian Banya?</h3>
      <p>The Banya is beneficial for almost everyone – from business travelers seeking stress relief to wellness enthusiasts looking for authentic detoxification. It's particularly effective for those with chronic muscle tension, poor circulation, respiratory issues, or skin conditions. However, pregnant women and individuals with certain heart conditions should consult their physician first.</p>
      
      <h3>Experience Centuries of Wellness Wisdom</h3>
      <p>The Russian Banya is more than a spa treatment – it's an immersion into a wellness tradition that has kept Russians healthy and vibrant for generations. Located conveniently near Delhi Airport in Mahipalpur, our authentic Banya facility offers Delhi NCR residents and travelers the opportunity to experience this transformative ritual.</p>
      
      <p><strong>Ready to experience the authentic Russian Banya?</strong> Book your session today by calling <a href="tel:+919818931148">+91 98189 31148</a> or via WhatsApp. Your journey to complete rejuvenation begins here.</p>
    `
  },
  {
    title: "How to Choose the Best Spa Near Delhi Airport",
    slug: "choose-best-spa-near-delhi-airport",
    date: "November 5, 2025",
    author: "Ananya Sharma, Wellness Consultant",
    readTime: "6 min read",
    excerpt: "A comprehensive guide to selecting the perfect spa in Mahipalpur and Aerocity for business travelers and local residents.",
    content: `
      <h2>Your Guide to Finding the Perfect Spa Experience</h2>
      <p>With dozens of spas in the Mahipalpur and Aerocity area near Delhi Airport, choosing the right one can be overwhelming. Whether you're a business traveler with limited time or a local resident seeking regular wellness treatments, this guide will help you make an informed decision.</p>
      
      <h3>1. Verify Credentials and Certifications</h3>
      <p>The first and most important factor is ensuring the spa and its therapists are properly licensed and certified. Look for:</p>
      <ul>
        <li>Valid spa establishment licenses from local authorities</li>
        <li>Therapists with certifications from recognized institutions</li>
        <li>Specialized training in the techniques they offer (Russian Banya, Thai massage, etc.)</li>
        <li>Membership in professional spa associations</li>
      </ul>
      
      <h3>2. Assess Hygiene and Safety Standards</h3>
      <p>Your health and safety should be paramount. During your visit or consultation, check:</p>
      <ul>
        <li>Cleanliness of treatment rooms, bathrooms, and common areas</li>
        <li>Sanitization protocols between clients</li>
        <li>Use of fresh linens and towels for each session</li>
        <li>Quality and hypoallergenic nature of products used</li>
        <li>Proper ventilation and temperature control</li>
      </ul>
      
      <h3>3. Evaluate Therapist Expertise</h3>
      <p>The skill of your therapist makes all the difference. Quality spas will:</p>
      <ul>
        <li>Conduct thorough consultations before treatment</li>
        <li>Customize treatments based on your specific needs</li>
        <li>Demonstrate deep knowledge of techniques and benefits</li>
        <li>Communicate clearly about pressure levels and comfort</li>
        <li>Show genuine care for your wellbeing</li>
      </ul>
      
      <h3>4. Consider Location and Accessibility</h3>
      <p>For airport travelers and busy professionals:</p>
      <ul>
        <li>Proximity to your hotel or airport (Mahipalpur is ideal)</li>
        <li>Ease of parking and accessibility</li>
        <li>Flexible hours to accommodate early/late flights</li>
        <li>Quick booking process (phone, WhatsApp, online)</li>
      </ul>
      
      <h3>5. Review Authentic Services Offered</h3>
      <p>Look beyond generic massage to find specialized, authentic treatments:</p>
      <ul>
        <li>Traditional techniques like Russian Banya or Thai massage</li>
        <li>Variety of therapeutic and relaxation options</li>
        <li>Couples packages for romantic getaways</li>
        <li>Customization based on your specific health goals</li>
      </ul>
      
      <h3>6. Check Reviews and Reputation</h3>
      <p>Research online presence and customer feedback:</p>
      <ul>
        <li>Google reviews and ratings from verified customers</li>
        <li>Social media presence and engagement</li>
        <li>Word-of-mouth recommendations from locals</li>
        <li>Response to customer feedback and complaints</li>
        <li>Awards or recognition from wellness organizations</li>
      </ul>
      
      <h3>7. Assess Value, Not Just Price</h3>
      <p>While budget matters, focus on value:</p>
      <ul>
        <li>Quality of products and facilities versus price</li>
        <li>Duration and comprehensiveness of treatments</li>
        <li>Additional amenities (steam room, sauna, refreshments)</li>
        <li>Transparent pricing without hidden charges</li>
        <li>Package deals and loyalty programs</li>
      </ul>
      
      <h3>Why Choose Russian Spa Centre in Mahipalpur?</h3>
      <p>At Russian Spa Centre, we excel in all these areas. We're conveniently located near Delhi Airport with certified therapists, hospital-grade hygiene, authentic Russian Banya, and personalized treatments. Our 4.8-star rating from over 350 satisfied clients speaks to our commitment to excellence.</p>
      
      <p><strong>Experience the difference yourself.</strong> Book a consultation at <a href="tel:+919818931148">+91 98189 31148</a> and discover why we're the preferred spa choice in Mahipalpur and Aerocity.</p>
    `
  },
  {
    title: "Hygiene and Wellness Standards at Russian Spa Centre",
    slug: "hygiene-wellness-standards-russian-spa",
    date: "November 2, 2025",
    author: "Dr. Rajesh Kumar, Health & Safety Officer",
    readTime: "7 min read",
    excerpt: "Learn about our comprehensive hygiene protocols and wellness standards that make us the safest spa choice in Delhi NCR.",
    content: `
      <h2>Your Safety is Our Priority</h2>
      <p>In the wellness industry, hygiene and safety aren't optional – they're fundamental. At Russian Spa Centre in Mahipalpur, we've implemented comprehensive protocols that exceed industry standards, ensuring every client enjoys a safe, clean, and worry-free experience.</p>
      
      <h3>Our Multi-Layered Hygiene Approach</h3>
      
      <h4>1. Treatment Room Sanitization</h4>
      <p>Between each client, our treatment rooms undergo rigorous cleaning:</p>
      <ul>
        <li>Complete surface disinfection using hospital-grade, non-toxic cleaners</li>
        <li>UV sterilization of all equipment and tools</li>
        <li>Air purification with HEPA filters to remove airborne contaminants</li>
        <li>Fresh linen setup including sheets, towels, and face cradle covers</li>
        <li>Temperature and humidity optimization for comfort and safety</li>
      </ul>
      
      <h4>2. Linen and Textile Management</h4>
      <p>We maintain the highest standards for all fabrics:</p>
      <ul>
        <li>Single-use policy – no linen is ever reused without laundering</li>
        <li>Industrial washing at 80°C to eliminate all bacteria and pathogens</li>
        <li>Hypoallergenic, fragrance-free detergents</li>
        <li>Separate storage for clean and used linens</li>
        <li>Regular replacement to maintain quality and softness</li>
      </ul>
      
      <h4>3. Product Quality and Safety</h4>
      <p>Every product that touches your skin is carefully selected:</p>
      <ul>
        <li>100% pure, therapeutic-grade essential oils</li>
        <li>Organic, hypoallergenic massage oils and lotions</li>
        <li>Dermatologically tested products free from parabens and sulfates</li>
        <li>Proper storage to maintain product integrity and freshness</li>
        <li>Individual product dispensing to prevent cross-contamination</li>
      </ul>
      
      <h4>4. Therapist Hygiene Protocols</h4>
      <p>Our certified therapists follow strict personal hygiene standards:</p>
      <ul>
        <li>Mandatory hand washing before and after each session</li>
        <li>Clean uniforms changed daily</li>
        <li>Short, maintained nails without polish</li>
        <li>No jewelry during treatments to prevent scratching or contamination</li>
        <li>Regular health check-ups and vaccinations</li>
        <li>Immediate reporting of any illness symptoms</li>
      </ul>
      
      <h4>5. Russian Banya Specific Standards</h4>
      <p>Our authentic Russian Banya requires specialized hygiene measures:</p>
      <ul>
        <li>Daily deep cleaning of all Banya surfaces</li>
        <li>Fresh Venik (birch leaves) for each session or sterilized reusable options</li>
        <li>Water quality testing and treatment</li>
        <li>Proper ventilation to prevent moisture buildup and mold</li>
        <li>Client shower requirement before Banya entry</li>
        <li>Designated clean pathways and foot protection</li>
      </ul>
      
      <h3>Wellness Standards Beyond Cleanliness</h3>
      
      <h4>Client Consultation and Screening</h4>
      <p>We conduct thorough pre-treatment consultations to ensure safety:</p>
      <ul>
        <li>Health history review and condition assessment</li>
        <li>Identification of contraindications or special needs</li>
        <li>Customization of treatment approach and pressure</li>
        <li>Clear communication about what to expect</li>
        <li>Post-treatment care instructions</li>
      </ul>
      
      <h4>Therapist Training and Certification</h4>
      <p>Our wellness team maintains the highest professional standards:</p>
      <ul>
        <li>Internationally recognized certifications in specialized techniques</li>
        <li>Continuous education in anatomy, physiology, and wellness trends</li>
        <li>Training in client safety, emergency procedures, and first aid</li>
        <li>Regular skill assessment and peer reviews</li>
        <li>Ethical conduct and professional boundary training</li>
      </ul>
      
      <h4>Facility Maintenance</h4>
      <p>Our Mahipalpur facility undergoes regular inspections and upgrades:</p>
      <ul>
        <li>Monthly third-party hygiene audits</li>
        <li>Quarterly equipment servicing and calibration</li>
        <li>Annual facility upgrades to incorporate latest wellness technology</li>
        <li>Pest control and environmental management</li>
        <li>Emergency preparedness and safety equipment</li>
      </ul>
      
      <h3>Your Peace of Mind Matters</h3>
      <p>We understand that choosing a spa near Delhi Airport means trusting strangers with your wellbeing. That's why we've made transparency and accountability core to our operations. Our hygiene and wellness standards aren't just policies – they're promises we keep to every single client who walks through our doors.</p>
      
      <h3>Industry Recognition</h3>
      <p>Our commitment to excellence has earned us:</p>
      <ul>
        <li>5-star hygiene rating from local health authorities</li>
        <li>National Wellness Association certification</li>
        <li>Multiple "Best Spa in NCR" awards</li>
        <li>Consistent 4.8+ ratings from verified customers</li>
      </ul>
      
      <p><strong>Experience the Russian Spa Centre difference.</strong> Visit our facility in Mahipalpur to see our standards firsthand, or book your appointment at <a href="tel:+919818931148">+91 98189 31148</a>. We're conveniently located near Delhi Airport and Aerocity, open 7 days a week.</p>
    `
  }
];

const BlogPage = () => {
  // Structured data for blog
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Russian Spa Centre Wellness Blog",
    "description": "Expert wellness articles on Russian Banya, spa treatments, and holistic health",
    "url": "https://mahipalpurspacentre.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Russian Spa Centre - Mahipalpur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mahipalpurspacentre.com/assets/logo.png"
      }
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "datePublished": new Date(article.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "description": article.excerpt,
      "url": `https://mahipalpurspacentre.com/blog#${article.slug}`,
      "image": "https://mahipalpurspacentre.com/assets/hero-spa.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Russian Spa Centre - Mahipalpur"
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Spa & Wellness Blog | Russian Banya, Massage Tips | Russian Spa Centre Mahipalpur"
        description="Expert wellness articles on Russian Banya benefits, choosing the best spa near Delhi Airport, hygiene standards, massage techniques, and holistic health from Russian Spa Centre."
        keywords="Russian Banya benefits, spa near Delhi airport, wellness blog Delhi, massage tips, spa hygiene standards, Russian spa articles, Mahipalpur wellness"
        canonical="https://mahipalpurspacentre.com/blog"
        ogType="blog"
      />
      
      {/* Structured Data for Blog */}
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="bg-spa-dark py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
                Wellness & Spa Knowledge Center
              </h1>
              <p className="text-xl text-spa-cream max-w-3xl mx-auto font-light">
                Expert insights on Russian Banya, spa treatments, wellness practices, and holistic health from our certified therapists in Mahipalpur
              </p>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16 bg-spa-brown">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {articles.map((article, index) => (
                  <Card 
                    key={index} 
                    className="bg-card border-border overflow-hidden hover:shadow-gold transition-smooth hover:scale-105"
                  >
                    <CardHeader>
                      <CardTitle className="text-gold text-2xl mb-3">
                        {article.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <CardDescription className="text-base text-muted-foreground">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Full Articles */}
              <div className="space-y-12 max-w-4xl mx-auto">
                {articles.map((article, index) => (
                  <article 
                    key={index} 
                    id={article.slug}
                    className="bg-card border border-border rounded-lg p-8 shadow-lg"
                  >
                    <header className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
                        {article.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </header>
                    <CardContent 
                      className="prose prose-lg prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </article>
                ))}
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

export default BlogPage;
