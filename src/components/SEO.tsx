import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  ogType = "website",
  article,
  noindex = false
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://mahipalpurspacentre.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/assets/hero-spa.jpg`;
  
  useEffect(() => {
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update title
    if (title) {
      document.title = title;
    }
    
    // Update meta description
    if (description) {
      updateMetaTag('description', description);
    }
    
    // Update meta keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update robots tag
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }
    
    // Update canonical URL
    const canonicalUrl = canonical || fullUrl;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // Open Graph tags
    if (title) {
      updateMetaTag('og:title', title, true);
    }
    if (description) {
      updateMetaTag('og:description', description, true);
    }
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage || defaultImage, true);
    updateMetaTag('og:image:alt', title || 'Russian Spa Centre - Luxury Spa in Mahipalpur', true);
    updateMetaTag('og:site_name', 'Russian Spa Centre - Mahipalpur', true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    if (title) {
      updateMetaTag('twitter:title', title);
    }
    if (description) {
      updateMetaTag('twitter:description', description);
    }
    updateMetaTag('twitter:image', ogImage || defaultImage);
    updateMetaTag('twitter:image:alt', title || 'Russian Spa Centre');
    updateMetaTag('twitter:site', '@RussianSpaMahi');

    // Article metadata (if applicable)
    if (article) {
      updateMetaTag('article:published_time', article.publishedTime || '', true);
      updateMetaTag('article:modified_time', article.modifiedTime || '', true);
      if (article.author) {
        updateMetaTag('article:author', article.author, true);
      }
      if (article.section) {
        updateMetaTag('article:section', article.section, true);
      }
    }
  }, [title, description, keywords, canonical, location, ogImage, ogType, article, noindex, fullUrl, defaultImage]);
  
  return null;
};

export default SEO;
