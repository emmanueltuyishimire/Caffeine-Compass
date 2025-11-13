
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { Providers } from '@/app/providers';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://caffeine-calculation-site.com'),
  title: {
    default:
      'Caffeine Compass — Optimize Your Caffeine for Better Energy & Sleep',
    template: '%s — Caffeine Compass',
  },
  description:
    'Empowering people to understand, calculate, and optimize their caffeine habits for better focus, health, and sleep. Use our science-backed calculators and tools.',
  keywords: [
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
    icon: '/logo.png',
  },
  manifest: '/manifest.json',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Caffeine Compass',
  url: 'https://caffeine-calculation-site.com/',
  publisher: {
    '@type': 'Organization',
    name: 'Caffeine Compass',
    logo: {
      '@type': 'ImageObject',
      url: 'https://caffeine-calculation-site.com/logo.png',
    },
  },
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
