
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-body antialiased`}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
