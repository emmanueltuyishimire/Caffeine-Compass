
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import { Providers } from '@/app/providers';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://calculation.site'),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-body antialiased`} suppressHydrationWarning>
        <JsonLd data={websiteJsonLd} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
