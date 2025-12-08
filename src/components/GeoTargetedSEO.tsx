import { useEffect } from 'react';

/**
 * GeoTargetedSEO Component
 * Creates location-specific structured data for multiple service areas
 * This helps rank for "near me" and location-specific searches
 */
const GeoTargetedSEO = () => {
  useEffect(() => {
    // Multiple Location Schema for service areas
    const locationSchema = document.createElement('script');
    locationSchema.type = 'application/ld+json';
    locationSchema.id = 'geo-location-schema';
    locationSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://mahipalpurspacentre.com/#localbusiness",
      "name": "Russian Spa Centre",
      "description": "Best Russian Spa and Body Massage Centre serving Mahipalpur, Aerocity, Delhi Airport area, Dwarka, Vasant Kunj, and Gurgaon",
      "url": "https://mahipalpurspacentre.com",
      "telephone": "+919818931148",
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
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 28.5478,
            "longitude": 77.1200
          },
          "geoRadius": "30000"
        },
        {
          "@type": "AdministrativeArea",
          "name": "South West Delhi"
        },
        {
          "@type": "Place",
          "name": "Mahipalpur",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mahipalpur",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Place",
          "name": "Aerocity",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Aerocity",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Place",
          "name": "Dwarka",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dwarka",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Place",
          "name": "Vasant Kunj",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vasant Kunj",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Place",
          "name": "Gurgaon",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurgaon",
            "addressRegion": "Haryana",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Place",
          "name": "IGI Airport Area",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Indira Gandhi International Airport",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          }
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 28.5665,
          "longitude": 77.1030
        },
        "geoRadius": "25000"
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://mahipalpurspacentre.com/#booking",
          "inLanguage": "en-IN",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Spa Appointment"
        }
      }
    });
    document.head.appendChild(locationSchema);

    // Product Schema for top services
    const productSchema = document.createElement('script');
    productSchema.type = 'application/ld+json';
    productSchema.id = 'product-schema';
    productSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Russian Banya Treatment Package",
      "description": "Authentic Russian steam bath experience with traditional Venik birch leaf massage. Includes steam room access, Venik treatment, cold plunge, and relaxation area. Duration: 90 minutes.",
      "image": "https://mahipalpurspacentre.com/assets/banya.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Russian Spa Centre"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Russian Spa Centre Mahipalpur"
      },
      "sku": "RSC-BANYA-001",
      "mpn": "BANYA-PREMIUM",
      "offers": {
        "@type": "Offer",
        "url": "https://mahipalpurspacentre.com/prices",
        "priceCurrency": "INR",
        "price": "2500",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Russian Spa Centre Mahipalpur"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "IN",
            "addressRegion": "DL"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 0,
              "unitCode": "d"
            }
          }
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "487",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Vikram Singh"
          },
          "reviewBody": "The authentic Russian Banya experience was incredible. The Venik treatment really detoxifies and the staff are very professional."
        }
      ]
    });
    document.head.appendChild(productSchema);

    // Event Schema for special promotions
    const eventSchema = document.createElement('script');
    eventSchema.type = 'application/ld+json';
    eventSchema.id = 'event-schema';
    eventSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "First Visit Special - 15% Off All Spa Services",
      "description": "New customers get 15% discount on all spa services including Russian Banya, massages, and spa packages at Russian Spa Centre Mahipalpur",
      "image": "https://mahipalpurspacentre.com/assets/hero-spa.jpg",
      "startDate": "2025-01-01",
      "endDate": "2025-12-31",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Russian Spa Centre Mahipalpur",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mahipalpur Extension",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110037",
          "addressCountry": "IN"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "Russian Spa Centre",
        "url": "https://mahipalpurspacentre.com"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://mahipalpurspacentre.com/prices",
        "price": "2125",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01"
      },
      "performer": {
        "@type": "Organization",
        "name": "Russian Spa Centre Professional Therapists"
      }
    });
    document.head.appendChild(eventSchema);

    // Speakable Schema for voice search optimization
    const speakableSchema = document.createElement('script');
    speakableSchema.type = 'application/ld+json';
    speakableSchema.id = 'speakable-schema';
    speakableSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Russian Spa Centre Mahipalpur - Best Russian Spa Near Delhi Airport",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".hero-description", ".services-list"]
      },
      "url": "https://mahipalpurspacentre.com"
    });
    document.head.appendChild(speakableSchema);

    return () => {
      const schemas = ['geo-location-schema', 'product-schema', 'event-schema', 'speakable-schema'];
      schemas.forEach(id => {
        const el = document.getElementById(id);
        if (el) document.head.removeChild(el);
      });
    };
  }, []);

  return null;
};

export default GeoTargetedSEO;
