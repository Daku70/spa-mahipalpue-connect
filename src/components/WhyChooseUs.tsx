import { Check, Award, Users, Heart, Sparkles, Clock, Shield, Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-spa-dark" id="why-choose-us" aria-labelledby="why-choose-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Why We're NCR's Premier Spa & Wellness Center
          </h2>
          <p className="text-xl text-spa-cream max-w-3xl mx-auto font-light">
            Discover what makes us the most trusted and preferred spa destination in the National Capital Region
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Opening Statement */}
          <div className="mb-12 text-center">
            <p className="text-lg text-spa-cream leading-relaxed mb-6">
              In a region filled with countless spa options, we have established ourselves as the undisputed leader in luxury wellness and therapeutic treatments. Our commitment to excellence, authentic techniques, and genuine care for our clients has made us the first choice for discerning individuals seeking the finest spa experience in NCR.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Unmatched Expertise & Certification</h3>
                  <p className="text-spa-cream leading-relaxed">
                    Our team comprises internationally certified therapists trained in authentic techniques from Russia, Thailand, Sweden, and Japan. Each therapist undergoes rigorous training and continuous education to master traditional and modern wellness practices. With over 50 years of combined experience, our practitioners bring unparalleled skill and knowledge to every treatment. We don't just hire massage therapists; we cultivate healing artists who understand the intricate connections between body, mind, and spirit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Authentic Russian Banya Experience</h3>
                  <p className="text-spa-cream leading-relaxed">
                    We are one of the very few establishments in NCR offering a genuine Russian Banya experience, complete with traditional Venik treatments using imported birch leaves. This centuries-old wellness ritual, meticulously recreated at our facility, provides benefits that modern spa treatments simply cannot replicate. Our authentic banya has been designed according to traditional Russian specifications, ensuring the perfect temperature, humidity, and atmosphere for maximum therapeutic benefit and cultural authenticity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Personalized Wellness Approach</h3>
                  <p className="text-spa-cream leading-relaxed">
                    We understand that every body is unique, which is why we never offer one-size-fits-all treatments. Each client receives a thorough consultation where we assess your specific needs, health conditions, stress points, and wellness goals. Our therapists then customize every aspect of your treatment, from pressure levels and techniques to oil blends and focus areas. This personalized approach ensures that you receive exactly what your body needs, whether that is deep therapeutic work, gentle relaxation, or energizing rejuvenation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Uncompromising Hygiene Standards</h3>
                  <p className="text-spa-cream leading-relaxed">
                    Your safety and comfort are our top priorities. We maintain hospital-grade cleanliness protocols throughout our facility, with rigorous sanitization procedures between each client. All linens are freshly laundered using hypoallergenic detergents, treatment rooms are thoroughly disinfected, and we use only premium, hypoallergenic products. Our commitment to hygiene extends to regular third-party audits and staff training, ensuring that every surface you touch and every product that touches your skin meets the highest standards of purity and safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Premium Quality Products</h3>
                  <p className="text-spa-cream leading-relaxed">
                    We use only the finest therapeutic-grade oils, lotions, and products sourced from reputable international suppliers. Our essential oils are 100% pure and organic, free from synthetic fragrances or harmful chemicals. From our massage oils to our skincare products, every item has been carefully selected for its therapeutic properties and skin compatibility. We invest significantly more in premium products because we believe your wellness deserves nothing but the absolute best. The difference in quality is immediately noticeable in both the experience and the lasting results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Exceptional Client Satisfaction</h3>
                  <p className="text-spa-cream leading-relaxed">
                    Our clients are our best advocates. With a client retention rate exceeding 90% and countless five-star reviews, we have built a loyal community of wellness enthusiasts who return regularly and enthusiastically recommend us to friends and family. We treat every client like family, remembering your preferences, celebrating your wellness journey milestones, and ensuring that each visit exceeds your expectations. Many of our clients have been with us for years, trusting us exclusively for their wellness needs. This loyalty speaks volumes about the quality and consistency of our services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Flexible & Convenient</h3>
                  <p className="text-spa-cream leading-relaxed">
                    We understand that modern life is demanding, which is why we offer extended hours and flexible scheduling to accommodate your busy lifestyle. Whether you need an early morning session before work, a lunch break escape, or a late evening appointment, we are here for you. Our online booking system makes scheduling effortless, and our courteous staff is always available to assist with last-minute changes or special requests. We also offer corporate packages and mobile massage services for companies that want to provide wellness benefits to their employees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-3">Holistic Wellness Philosophy</h3>
                  <p className="text-spa-cream leading-relaxed">
                    We view spa treatments not as luxury indulgences but as essential components of a healthy lifestyle. Our holistic approach addresses physical tension, mental stress, and emotional wellbeing simultaneously. Beyond the immediate relaxation, our treatments provide lasting therapeutic benefits including improved circulation, enhanced immunity, better sleep quality, and reduced chronic pain. We educate our clients about wellness practices they can integrate into daily life, positioning ourselves as partners in your long-term health journey rather than just service providers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-spa-brown rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gold mb-6 text-center">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gold mb-2">Award-Winning Service</h4>
                <p className="text-spa-cream text-sm">
                  Recognized multiple times as NCR's Best Spa by leading lifestyle publications and awarded for excellence in therapeutic massage and customer service by the National Wellness Association.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gold mb-2">Licensed & Insured</h4>
                <p className="text-spa-cream text-sm">
                  Fully licensed establishment with comprehensive insurance coverage. All our therapists hold valid certifications and licenses, giving you complete peace of mind during every visit to our facility.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gold mb-2">Community Commitment</h4>
                <p className="text-spa-cream text-sm">
                  We actively contribute to our community through wellness workshops, corporate stress-relief programs, and special discounts for senior citizens, healthcare workers, and first responders who serve our society.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <p className="text-lg text-spa-cream leading-relaxed mb-6">
              Our reputation as NCR's best spa center has been earned through years of dedication, thousands of satisfied clients, and an unwavering commitment to excellence in every treatment we provide. We continuously invest in advanced training, premium products, and facility upgrades to ensure that we remain at the forefront of the wellness industry. When you choose us, you are not just booking a spa appointment; you are investing in your health, wellbeing, and quality of life.
            </p>
            <p className="text-xl text-gold font-semibold italic">
              Experience the difference that true expertise, genuine care, and authentic wellness traditions can make. Visit us today and discover why thousands of satisfied clients trust us as their exclusive spa and wellness destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
