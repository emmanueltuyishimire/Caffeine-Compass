
'use client';

import JsonLd from '@/components/JsonLd';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import Footer from './Footer';
import Header from './Header';
import SidebarNav from './SidebarNav';

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

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <Sidebar>
                <SidebarNav />
            </Sidebar>
            <SidebarInset>
                <JsonLd data={websiteJsonLd} />
                <div className='flex flex-col min-h-screen'>
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                </div>
                <Toaster />
            </SidebarInset>
        </div>
    )
}
