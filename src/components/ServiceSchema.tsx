import { useEffect } from 'react';

const ServiceSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Russian Spa Services in Mahipalpur",
      "description": "Complete list of spa and massage services offered at Russian Spa Centre",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "@id": "https://mahipalpurspacentre.com/#russian-banya",
            "name": "Russian Banya Treatment Mahipalpur",
            "description": "Authentic Russian steam bath experience with traditional Venik treatment using imported birch leaves. Available near Delhi Airport and Aerocity",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Russian Spa Centre Mahipalpur"
            },
            "areaServed": ["Mahipalpur", "Aerocity", "Gurgaon", "Dwarka", "Vasant Kunj"],
            "serviceType": "Russian Banya Steam Bath",
            "offers": {
              "@type": "Offer",
              "price": "3500",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "@id": "https://mahipalpurspacentre.com/#full-body-massage",
            "name": "Full Body Massage in Mahipalpur",
            "description": "Professional full body massage therapy near Delhi Airport. Swedish, Deep Tissue, and Thai massage available",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Russian Spa Centre Mahipalpur"
            },
            "areaServed": ["Mahipalpur", "Aerocity", "Gurgaon", "Dwarka", "Vasant Kunj"],
            "serviceType": "Body Massage Therapy",
            "offers": {
              "@type": "Offer",
              "price": "2500",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "@id": "https://mahipalpurspacentre.com/#couples-spa",
            "name": "Couples Spa Package Mahipalpur",
            "description": "Luxury couples spa experience with synchronized massage, Russian Banya access, and romantic ambiance near Aerocity Delhi",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Russian Spa Centre Mahipalpur"
            },
            "areaServed": ["Mahipalpur", "Aerocity", "Gurgaon", "Dwarka", "Vasant Kunj"],
            "serviceType": "Couples Spa Treatment",
            "offers": {
              "@type": "Offer",
              "price": "6000",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "@id": "https://mahipalpurspacentre.com/#deep-tissue",
            "name": "Deep Tissue Massage Mahipalpur",
            "description": "Therapeutic deep tissue massage for chronic pain relief and muscle tension. Expert therapists near Delhi Airport",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Russian Spa Centre Mahipalpur"
            },
            "areaServed": ["Mahipalpur", "Aerocity", "Gurgaon", "Dwarka", "Vasant Kunj"],
            "serviceType": "Deep Tissue Massage",
            "offers": {
              "@type": "Offer",
              "price": "3000",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "@id": "https://mahipalpurspacentre.com/#thai-massage",
            "name": "Thai Massage in Mahipalpur Aerocity",
            "description": "Traditional Thai massage with acupressure and assisted stretching for flexibility and energy flow. Near Delhi Airport",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Russian Spa Centre Mahipalpur"
            },
            "areaServed": ["Mahipalpur", "Aerocity", "Gurgaon", "Dwarka", "Vasant Kunj"],
            "serviceType": "Thai Massage Therapy",
            "offers": {
              "@type": "Offer",
              "price": "3200",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "@id": "https://mahipalpurspacentre.com/#aromatherapy",
            "name": "Aromatherapy Massage Mahipalpur",
            "description": "Luxury aromatherapy massage with premium essential oils for relaxation and stress relief near Aerocity",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Russian Spa Centre Mahipalpur"
            },
            "areaServed": ["Mahipalpur", "Aerocity", "Gurgaon", "Dwarka", "Vasant Kunj"],
            "serviceType": "Aromatherapy Massage",
            "offers": {
              "@type": "Offer",
              "price": "2800",
              "priceCurrency": "INR"
            }
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default ServiceSchema;
