import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import AppLayout from '@/components/layout/AppLayout';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://caffeine-calculation-site.com'),
  title: {
    default: 'Caffeine Calculation Site — Optimize Your Caffeine for Better Energy & Sleep',
    template: '%s — Caffeine Calculation Site',
  },
  description:
    'Empowering people to understand, calculate, and optimize their caffeine habits for better focus, health, and sleep.',
  icons: {
    icon: '/logo.png',
  },
  manifest: '/manifest.json',
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Caffeine Calculation Site",
  "url": "https://caffeine-calculation-site.com/",
   "publisher": {
    "@type": "Organization",
    "name": "Caffeine Calculation Site",
    "logo": {
      "@type": "ImageObject",
      "url": "https://caffeine-calculation-site.com/logo.png"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-body antialiased`}>
        <JsonLd data={websiteJsonLd} />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
