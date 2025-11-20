
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import JsonLd from '@/components/JsonLd';
import { Providers } from '@/app/providers';
import Script from 'next/script';
import './globals.css';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://calculation.site'),
  title: {
    default: 'Caffeine Compass — Caffeine Calculators, Articles & Science',
    template: '%s',
  },
  description:
    'Your ultimate resource for caffeine calculators, data tools, and science-backed articles. Optimize your intake, improve your sleep, and master your energy.',
  keywords: [
    'caffeine',
    'caffeine calculator',
    'caffeine intake',
    'caffeine half-life',
    'caffeine and sleep',
    'how much caffeine',
    'coffee caffeine',
    'energy drinks',
    'caffeine sensitivity',
  ],
  icons: {
    icon: '/app.png',
  },
};

const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Caffeine Compass',
  url: 'https://calculation.site/',
  publisher: {
    '@type': 'Organization',
    name: 'Caffeine Compass',
    logo: {
      '@type': 'ImageObject',
      url: logoImage?.imageUrl || 'https://calculation.site/app.png',
    },
  },
};

const GA_MEASUREMENT_ID = 'G-XFXW29LKY3';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} font-body antialiased`} suppressHydrationWarning>
        <JsonLd data={websiteJsonLd} />
        <Providers>{children}</Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
