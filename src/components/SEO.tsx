import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  canonical?: string;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Heritage Jewels - Exquisite Traditional Indian Jewelry Since 1952',
  description = 'Discover our heritage collection of handcrafted gold, diamond, and precious stone jewelry. Traditional Indian craftsmanship meets timeless elegance. Trusted for over 70 years.',
  keywords = 'indian jewelry, gold jewelry, diamond jewelry, bridal jewelry, traditional jewelry, handcrafted jewelry, mumbai jewelry store, BIS hallmark, precious stones, heritage jewels',
  image = 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  article = false,
  noindex = false,
  canonical,
  structuredData
}) => {
  const router = useRouter();
  const siteUrl = 'https://heritagejewels.com';
  const fullUrl = `${siteUrl}${router.asPath}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Heritage Jewels" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Heritage Jewels" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@heritagejewels" />
      <meta name="twitter:creator" content="@heritagejewels" />
      
      {/* Additional Meta Tags for Jewelry Business */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Heritage Street" />
      <meta name="business:contact_data:locality" content="Mumbai" />
      <meta name="business:contact_data:region" content="Maharashtra" />
      <meta name="business:contact_data:postal_code" content="400001" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content="+91-98765-43210" />
      <meta name="business:contact_data:email" content="info@heritagejewels.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        as="style"
      />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Head>
  );
};

export default SEO;