import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, User, Clock, Sparkles } from "lucide-react";

const articles = [
  {
    title: "What is a Banya and Why It's Unique",
    slug: "what-is-banya-unique",
    date: "November 8, 2025",
    author: "Dr. Svetlana Petrova, Spa Director",
    readTime: "8 min read",
    excerpt: "Discover the centuries-old tradition of the Banya and why it's one of the most effective wellness treatments available today.",
    content: `
      <h2>The Ancient Tradition of Banya</h2>
      <p>The Banya is not just a steam bath – it's a deeply rooted cultural tradition that has been practiced for over a thousand years. This authentic wellness ritual combines intense heat, steam, and the therapeutic application of birch or oak branches (called Venik) to create one of the most powerful detoxification and rejuvenation experiences available.</p>
      
      <h3>What Makes the Banya Different?</h3>
      <p>Unlike typical saunas or steam rooms, the Banya operates at specific temperature and humidity levels (typically 60-90°C with 40-65% humidity) that optimize the therapeutic benefits. The real magic happens with the Venik treatment – trained specialists gently strike and massage your body with soaked birch leaves, releasing essential oils and creating a unique aromatherapy experience.</p>
      
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
      <p>At Lisa Spa Mahipalpur, we've recreated an authentic Banya using traditional construction methods and materials. Our therapists are trained in the proper Venik techniques passed down through generations. Each session includes:</p>
      <ul>
        <li>Pre-banya consultation and preparation</li>
        <li>Multiple heat exposure cycles with rest periods</li>
        <li>Traditional Venik massage with birch or oak leaves</li>
        <li>Contrast therapy (cool shower between sessions)</li>
        <li>Complimentary herbal tea to replenish fluids</li>
      </ul>
      
      <h3>Who Should Try the Banya?</h3>
      <p>The Banya is beneficial for almost everyone – from business travelers seeking stress relief to wellness enthusiasts looking for authentic detoxification. It's particularly effective for those with chronic muscle tension, poor circulation, respiratory issues, or skin conditions. However, pregnant women and individuals with certain heart conditions should consult their physician first.</p>
      
      <h3>Experience Centuries of Wellness Wisdom</h3>
      <p>The Banya is more than a spa treatment – it's an immersion into a wellness tradition that has kept people healthy and vibrant for generations. Located conveniently near Delhi Airport in Mahipalpur, our authentic Banya facility offers Delhi NCR residents and travelers the opportunity to experience this transformative ritual.</p>
      
      <p><strong>Ready to experience the authentic Banya?</strong> Book your session today by calling <a href="tel:+919355125143">+91 93551 25143</a> or via WhatsApp. Your journey to complete rejuvenation begins here.</p>
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
        <li>Specialized training in the techniques they offer (Banya, Thai massage, etc.)</li>
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
      
      <h3>Why Choose Lisa Spa Mahipalpur?</h3>
      <p>At Lisa Spa, we excel in all these areas. We're conveniently located near Delhi Airport with certified therapists, hospital-grade hygiene, authentic Banya, and personalized treatments. Our 4.8-star rating from over 350 satisfied clients speaks to our commitment to excellence.</p>
      
      <p><strong>Experience the difference yourself.</strong> Book a consultation at <a href="tel:+919355125143">+91 93551 25143</a> and discover why we're the preferred spa choice in Mahipalpur and Aerocity.</p>
    `
  },
  {
    title: "Hygiene and Wellness Standards at Lisa Spa",
    slug: "hygiene-wellness-standards-lisa-spa",
    date: "November 2, 2025",
    author: "Dr. Rajesh Kumar, Health & Safety Officer",
    readTime: "7 min read",
    excerpt: "Learn about our comprehensive hygiene protocols and wellness standards that make us the safest spa choice in Delhi NCR.",
    content: `
      <h2>Your Safety is Our Priority</h2>
      <p>In the wellness industry, hygiene and safety aren't optional – they're fundamental. At Lisa Spa Mahipalpur, we've implemented comprehensive protocols that exceed industry standards, ensuring every client enjoys a safe, clean, and worry-free experience.</p>
      
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
      
      <h3>Industry Recognition</h3>
      <p>Our commitment to excellence has earned us:</p>
      <ul>
        <li>5-star hygiene rating from local health authorities</li>
        <li>National Wellness Association certification</li>
        <li>Multiple "Best Spa in NCR" awards</li>
        <li>Consistent 4.8+ ratings from verified customers</li>
      </ul>
      
      <p><strong>Experience the Lisa Spa difference.</strong> Visit our facility in Mahipalpur to see our standards firsthand, or book your appointment at <a href="tel:+919355125143">+91 93551 25143</a>. We're conveniently located near Delhi Airport and Aerocity, open 24/7.</p>
    `
  }
];

const BlogPage = () => {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Lisa Spa Mahipalpur Wellness Blog",
    "description": "Expert wellness articles on Banya, spa treatments, and holistic health",
    "url": "https://lisaspamahipalpur.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Lisa Spa Mahipalpur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lisaspamahipalpur.com/assets/logo.png"
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
      "url": `https://lisaspamahipalpur.com/blog#${article.slug}`,
      "image": "https://lisaspamahipalpur.com/assets/hero-spa.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Lisa Spa Mahipalpur"
      }
    }))
  };

  const colors = ["turquoise", "coral", "sunny"];

  return (
    <>
      <SEO 
        title="Spa & Wellness Blog | Banya, Massage Tips | Lisa Spa Mahipalpur"
        description="Expert wellness articles on Banya benefits, choosing the best spa near Delhi Airport, hygiene standards, massage techniques, and holistic health from Lisa Spa."
        keywords="Banya benefits, spa near Delhi airport, wellness blog Delhi, massage tips, spa hygiene standards, spa articles, Mahipalpur wellness"
        canonical="https://lisaspamahipalpur.com/blog"
        ogType="blog"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container relative mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium text-foreground">Wellness Blog</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-turquoise via-coral to-sunny bg-clip-text text-transparent">
                  Wellness & Spa Knowledge
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights on Banya, spa treatments, wellness practices, and holistic health from our certified therapists
              </p>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {articles.map((article, index) => {
                  const color = colors[index % colors.length];
                  const borderClass = color === "turquoise" ? "border-turquoise/30 hover:border-turquoise" : 
                                     color === "coral" ? "border-coral/30 hover:border-coral" : 
                                     "border-sunny/30 hover:border-sunny";
                  const bgClass = color === "turquoise" ? "bg-turquoise/5" : 
                                 color === "coral" ? "bg-coral/5" : "bg-sunny/5";
                  const textClass = color === "turquoise" ? "text-turquoise" : 
                                   color === "coral" ? "text-coral" : "text-sunny";
                  
                  return (
                    <Card 
                      key={index} 
                      className={`group ${bgClass} border-2 ${borderClass} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-3xl`}
                    >
                      <CardHeader>
                        <CardTitle className={`${textClass} text-xl font-bold mb-3 group-hover:opacity-80 transition-opacity`}>
                          {article.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {article.excerpt}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Full Articles */}
              <div className="space-y-16">
                {articles.map((article, index) => {
                  const color = colors[index % colors.length];
                  const gradientClass = color === "turquoise" ? "from-turquoise to-turquoise-light" : 
                                       color === "coral" ? "from-coral to-coral-light" : 
                                       "from-sunny to-sunny-light";
                  
                  return (
                    <article 
                      key={article.slug} 
                      id={article.slug}
                      className="bg-card rounded-3xl p-8 md:p-12 border-2 border-border"
                    >
                      <header className="mb-8 pb-6 border-b border-border">
                        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                          {article.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {article.readTime}
                          </div>
                        </div>
                      </header>
                      <div 
                        className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-turquoise prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                    </article>
                  );
                })}
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
