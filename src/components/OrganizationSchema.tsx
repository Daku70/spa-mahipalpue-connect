import { useEffect } from 'react';

const OrganizationSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Russian Spa Centre Mahipalpur",
      "alternateName": ["Russian Spa Aerocity", "Mahipalpur Spa Centre", "Russian Banya Delhi"],
      "url": "https://mahipalpurspacentre.com",
      "logo": "https://mahipalpurspacentre.com/assets/logo.png",
      "image": "https://mahipalpurspacentre.com/assets/hero-spa.jpg",
      "description": "Premier Russian Spa in Mahipalpur offering authentic Russian Banya, luxury massage therapy, and wellness treatments near Delhi Airport and Aerocity",
      "telephone": "+919818931148",
      "email": "info@mahipalpurspacentre.com",
      "priceRange": "₹₹₹",
      "sameAs": [
        "https://www.facebook.com/russianspacentre",
        "https://www.instagram.com/russianspacentre",
        "https://www.youtube.com/@russianspacentre"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mahipalpur",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110037",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.5478",
        "longitude": "77.1200"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Mahipalpur"
        },
        {
          "@type": "City",
          "name": "Aerocity"
        },
        {
          "@type": "City",
          "name": "Dwarka"
        },
        {
          "@type": "City",
          "name": "Vasant Kunj"
        },
        {
          "@type": "City",
          "name": "Gurgaon"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "22:00"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Russian Spa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Russian Banya Treatment",
              "description": "Authentic Russian steam bath with Venik treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Body Massage",
              "description": "Professional body massage therapy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Couples Spa Package",
              "description": "Luxury couples spa experience"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default OrganizationSchema;
