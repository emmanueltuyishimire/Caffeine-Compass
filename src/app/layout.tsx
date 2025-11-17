
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { Providers } from '@/app/providers';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://calculation.site'),
  title: {
    default: 'Caffeine Compass — Caffeine Calculators, Articles & Science',
    template: '%s',
  },
  description:
    'Your ultimate guide to caffeine. Use our science-backed calculators and read in-depth articles to understand, manage, and optimize your caffeine consumption for better health and performance.',
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
    icon: '/favicon.ico',
  },
};

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
      url: 'https://calculation.site/logo.png',
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
