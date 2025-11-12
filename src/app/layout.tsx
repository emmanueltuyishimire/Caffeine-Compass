import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Change this to your production URL
  title: {
    default: 'Caffeine Compass — Optimize Your Caffeine for Better Energy & Sleep',
    template: '%s | Caffeine Compass',
  },
  description:
    'Empowering people to understand, calculate, and optimize their caffeine habits for better focus, health, and sleep.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-body antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
