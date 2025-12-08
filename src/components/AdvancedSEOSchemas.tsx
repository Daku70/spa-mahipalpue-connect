import { useEffect } from 'react';

const AdvancedSEOSchemas = () => {
  useEffect(() => {
    // WebSite Schema with SearchAction for Sitelinks Search Box
    const websiteSchema = document.createElement('script');
    websiteSchema.type = 'application/ld+json';
    websiteSchema.id = 'website-schema';
    websiteSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://mahipalpurspacentre.com/#website",
      "name": "Russian Spa Centre Mahipalpur",
      "url": "https://mahipalpurspacentre.com",
      "description": "Best Russian Spa in Mahipalpur & Aerocity offering authentic Russian Banya, luxury massage therapy near Delhi Airport",
      "publisher": {
        "@id": "https://mahipalpurspacentre.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://mahipalpurspacentre.com/services?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-IN"
    });
    document.head.appendChild(websiteSchema);

    // HealthAndBeautyBusiness Schema (more specific than DaySpa)
    const healthBeautySchema = document.createElement('script');
    healthBeautySchema.type = 'application/ld+json';
    healthBeautySchema.id = 'health-beauty-schema';
    healthBeautySchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://mahipalpurspacentre.com/#healthbusiness",
      "name": "Russian Spa Centre - Premium Wellness & Massage Therapy",
      "alternateName": [
        "Russian Spa Aerocity",
        "Mahipalpur Russian Spa",
        "Best Body Massage Mahipalpur",
        "Spa Near Delhi Airport",
        "Russian Banya Delhi"
      ],
      "url": "https://mahipalpurspacentre.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mahipalpurspacentre.com/assets/logo.png",
        "width": 300,
        "height": 100
      },
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://mahipalpurspacentre.com/assets/hero-spa.jpg",
          "width": 1920,
          "height": 1080,
          "caption": "Luxury Russian Spa Centre Interior in Mahipalpur"
        },
        {
          "@type": "ImageObject",
          "url": "https://mahipalpurspacentre.com/assets/banya.jpg",
          "width": 800,
          "height": 600,
          "caption": "Authentic Russian Banya Steam Room"
        },
        {
          "@type": "ImageObject",
          "url": "https://mahipalpurspacentre.com/assets/massage.jpg",
          "width": 800,
          "height": 600,
          "caption": "Professional Body Massage Therapy"
        }
      ],
      "description": "Delhi NCR's #1 rated Russian Spa offering authentic Russian Banya, Swedish massage, Thai massage, deep tissue therapy, aromatherapy, and couples spa packages. Located 10 minutes from Delhi Airport in Mahipalpur. ISO certified with 10,000+ satisfied clients.",
      "telephone": "+919818931148",
      "email": "contact@mahipalpurspacentre.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mahipalpur Extension",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110037",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5478,
        "longitude": 77.1200
      },
      "hasMap": "https://www.google.com/maps?q=28.5478,77.1200",
      "priceRange": "₹2500-₹15000",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe, Paytm",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "isAccessibleForFree": false,
      "publicAccess": true,
      "smokingAllowed": false,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Private Rooms", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Couple's Suite", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Steam Room", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Shower Facilities", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Complimentary Refreshments", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true }
      ],
      "areaServed": [
        { "@type": "City", "name": "New Delhi", "sameAs": "https://en.wikipedia.org/wiki/New_Delhi" },
        { "@type": "City", "name": "Mahipalpur" },
        { "@type": "City", "name": "Aerocity" },
        { "@type": "City", "name": "Dwarka" },
        { "@type": "City", "name": "Vasant Kunj" },
        { "@type": "City", "name": "Gurgaon", "sameAs": "https://en.wikipedia.org/wiki/Gurgaon" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "South Delhi" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "487",
        "reviewCount": "412"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rajesh Kumar" },
          "datePublished": "2025-11-01",
          "reviewBody": "Best Russian spa experience in Delhi! The Banya treatment was authentic and the therapists are highly professional. Perfect location near the airport for business travelers.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "name": "Excellent Russian Banya Experience"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priya Sharma" },
          "datePublished": "2025-10-28",
          "reviewBody": "Amazing couples spa package! We celebrated our anniversary here and it was perfect. The ambiance, service, and massage quality exceeded our expectations.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "name": "Perfect Anniversary Celebration"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Michael Chen" },
          "datePublished": "2025-10-25",
          "reviewBody": "Had a layover in Delhi and found this spa. The deep tissue massage was exactly what I needed after a long flight. Clean facilities and friendly staff.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "name": "Great for Travelers"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Amit Verma" },
          "datePublished": "2025-10-20",
          "reviewBody": "Regular visitor here. The Thai massage and Swedish massage are world-class. Highly recommend for anyone looking for quality spa services in Mahipalpur.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "name": "World-Class Massage Quality"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/russianspacentremahipalpur",
        "https://www.instagram.com/russianspacentremahipalpur",
        "https://www.youtube.com/@russianspacentremahipalpur",
        "https://www.justdial.com/Delhi/Russian-Spa-Centre-Mahipalpur",
        "https://www.google.com/maps?cid=russianspacentremahipalpur"
      ],
      "founder": {
        "@type": "Person",
        "name": "Russian Spa Centre Team"
      },
      "foundingDate": "2018",
      "slogan": "Experience Authentic Russian Wellness Near Delhi Airport",
      "knowsAbout": [
        "Russian Banya",
        "Swedish Massage",
        "Thai Massage",
        "Deep Tissue Massage",
        "Aromatherapy",
        "Couples Spa",
        "Body Massage",
        "Relaxation Therapy",
        "Wellness Treatment"
      ],
      "award": [
        "Best Spa in Mahipalpur 2024",
        "Top Rated Wellness Centre Delhi NCR",
        "ISO 9001:2015 Certified"
      ]
    });
    document.head.appendChild(healthBeautySchema);

    // SiteNavigationElement Schema
    const navSchema = document.createElement('script');
    navSchema.type = 'application/ld+json';
    navSchema.id = 'nav-schema';
    navSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": ["Home", "About Us", "Services", "Prices", "Gallery", "Contact", "Blog"],
      "url": [
        "https://mahipalpurspacentre.com/",
        "https://mahipalpurspacentre.com/about",
        "https://mahipalpurspacentre.com/services",
        "https://mahipalpurspacentre.com/prices",
        "https://mahipalpurspacentre.com/gallery",
        "https://mahipalpurspacentre.com/contact",
        "https://mahipalpurspacentre.com/blog"
      ]
    });
    document.head.appendChild(navSchema);

    // SpecialOffer Schema for promotions
    const offerSchema = document.createElement('script');
    offerSchema.type = 'application/ld+json';
    offerSchema.id = 'offer-schema';
    offerSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "First Visit Special - 15% Off",
      "description": "Get 15% off on your first visit to Russian Spa Centre. Valid for all services including Russian Banya, massages, and spa packages.",
      "url": "https://mahipalpurspacentre.com/prices",
      "priceCurrency": "INR",
      "price": "2125",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "seller": {
        "@type": "Organization",
        "name": "Russian Spa Centre Mahipalpur"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Russian Banya Treatment",
        "description": "Authentic Russian steam bath with Venik birch leaf massage"
      }
    });
    document.head.appendChild(offerSchema);

    // HowTo Schema for booking
    const howToSchema = document.createElement('script');
    howToSchema.type = 'application/ld+json';
    howToSchema.id = 'howto-schema';
    howToSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Book an Appointment at Russian Spa Centre",
      "description": "Simple steps to book your spa appointment at Russian Spa Centre Mahipalpur",
      "image": "https://mahipalpurspacentre.com/assets/hero-spa.jpg",
      "totalTime": "PT5M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "2500"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Choose Your Service",
          "text": "Browse our services including Russian Banya, Swedish massage, Thai massage, deep tissue massage, and couples spa packages."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Contact Us",
          "text": "Call us at +91 98189 31148, WhatsApp, or use the online booking form on our website."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Select Date & Time",
          "text": "Choose your preferred appointment slot. We're open 24/7 for your convenience."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Confirm & Visit",
          "text": "Receive confirmation and visit our spa located just 10 minutes from Delhi Airport in Mahipalpur."
        }
      ]
    });
    document.head.appendChild(howToSchema);

    // ItemList Schema for services
    const itemListSchema = document.createElement('script');
    itemListSchema.type = 'application/ld+json';
    itemListSchema.id = 'itemlist-schema';
    itemListSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Popular Spa Services at Russian Spa Centre",
      "description": "Most popular spa treatments and massage services offered at Russian Spa Centre Mahipalpur",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Traditional Russian Banya",
            "description": "Authentic Russian steam bath with Venik birch leaf massage for detoxification",
            "url": "https://mahipalpurspacentre.com/services#russian-banya",
            "offers": { "@type": "Offer", "price": "2500", "priceCurrency": "INR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Deep Tissue Massage",
            "description": "Therapeutic massage targeting chronic muscle tension and pain",
            "url": "https://mahipalpurspacentre.com/services#deep-tissue",
            "offers": { "@type": "Offer", "price": "3500", "priceCurrency": "INR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Swedish Massage",
            "description": "Classic relaxation massage with long flowing strokes",
            "url": "https://mahipalpurspacentre.com/services#swedish",
            "offers": { "@type": "Offer", "price": "3000", "priceCurrency": "INR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Thai Massage",
            "description": "Traditional Thai massage with stretching and acupressure",
            "url": "https://mahipalpurspacentre.com/services#thai",
            "offers": { "@type": "Offer", "price": "3200", "priceCurrency": "INR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "Aromatherapy Massage",
            "description": "Relaxation massage with premium essential oils",
            "url": "https://mahipalpurspacentre.com/services#aromatherapy",
            "offers": { "@type": "Offer", "price": "3000", "priceCurrency": "INR" }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "name": "Couples Spa Package",
            "description": "Romantic spa experience for two with synchronized treatments",
            "url": "https://mahipalpurspacentre.com/services#couples",
            "offers": { "@type": "Offer", "price": "7500", "priceCurrency": "INR" }
          }
        }
      ]
    });
    document.head.appendChild(itemListSchema);

    // Video Schema (if you have promotional videos)
    const videoSchema = document.createElement('script');
    videoSchema.type = 'application/ld+json';
    videoSchema.id = 'video-schema';
    videoSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Russian Spa Centre Mahipalpur - Virtual Tour",
      "description": "Take a virtual tour of Russian Spa Centre, the best Russian spa in Mahipalpur near Delhi Airport. Experience our luxurious facilities, Russian Banya, and world-class massage therapy rooms.",
      "thumbnailUrl": "https://mahipalpurspacentre.com/assets/hero-spa.jpg",
      "uploadDate": "2024-01-15",
      "duration": "PT3M45S",
      "contentUrl": "https://www.youtube.com/@russianspacentremahipalpur",
      "embedUrl": "https://www.youtube.com/embed/russianspacentremahipalpur",
      "publisher": {
        "@type": "Organization",
        "name": "Russian Spa Centre Mahipalpur",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mahipalpurspacentre.com/assets/logo.png"
        }
      }
    });
    document.head.appendChild(videoSchema);

    return () => {
      // Clean up all schemas
      const schemas = ['website-schema', 'health-beauty-schema', 'nav-schema', 'offer-schema', 'howto-schema', 'itemlist-schema', 'video-schema'];
      schemas.forEach(id => {
        const el = document.getElementById(id);
        if (el) document.head.removeChild(el);
      });
    };
  }, []);

  return null;
};

export default AdvancedSEOSchemas;
