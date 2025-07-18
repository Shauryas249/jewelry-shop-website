import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-TileColor" content="#8B0000" />
        
        {/* Structured Data for Jewelry Store */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "name": "Heritage Jewels",
              "description": "Exquisite Traditional Indian Jewelry Since 1952. Specializing in gold, diamond, and precious stone jewelry with authentic craftsmanship.",
              "url": "https://heritagejewels.com",
              "logo": "https://heritagejewels.com/logo.png",
              "image": "https://heritagejewels.com/storefront.jpg",
              "telephone": "+91-98765-43210",
              "email": "info@heritagejewels.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Heritage Street",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
              },
              "openingHours": "Mo-Sa 10:00-20:00",
              "priceRange": "₹₹₹",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
              "currenciesAccepted": "INR",
              "foundingDate": "1952",
              "founder": {
                "@type": "Person",
                "name": "Heritage Jewels Founder"
              },
              "sameAs": [
                "https://www.facebook.com/heritagejewels",
                "https://www.instagram.com/heritagejewels",
                "https://www.twitter.com/heritagejewels"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Heritage Jewels Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Gold Jewelry",
                      "category": "Jewelry"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Diamond Jewelry",
                      "category": "Jewelry"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Bridal Collection",
                      "category": "Jewelry"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Performance monitoring */}
        <Script id="performance-observer" strategy="afterInteractive">
          {`
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    gtag('event', 'LCP', {
                      event_category: 'Web Vitals',
                      value: Math.round(entry.startTime),
                      non_interaction: true,
                    });
                  }
                  if (entry.entryType === 'first-input') {
                    gtag('event', 'FID', {
                      event_category: 'Web Vitals',
                      value: Math.round(entry.processingStart - entry.startTime),
                      non_interaction: true,
                    });
                  }
                  if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                    gtag('event', 'CLS', {
                      event_category: 'Web Vitals',
                      value: Math.round(entry.value * 1000),
                      non_interaction: true,
                    });
                  }
                }
              });
              observer.observe({entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']});
            }
          `}
        </Script>
        
        <Script src="https://assets.co.dev/files/codevscript.js" strategy="afterInteractive" />
        <NextScript />
      </body>
    </Html>
  );
}
