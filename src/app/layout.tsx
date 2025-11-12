import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://caffeine-compass.com'),
  title: {
    default: 'Caffeine Compass — Optimize Your Caffeine for Better Energy & Sleep',
    template: '%s | Caffeine Compass',
  },
  description:
    'Empowering people to understand, calculate, and optimize their caffeine habits for better focus, health, and sleep.',
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Caffeine Compass",
  "url": "https://caffeine-compass.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://caffeine-compass.com/support?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className={`font-body antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
