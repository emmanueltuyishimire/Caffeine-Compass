'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Sidebar, SidebarInset, SidebarProvider } from '../ui/sidebar';
import SidebarNav from './SidebarNav';
import { Toaster } from '../ui/toaster';
import { ThemeProvider } from 'next-themes';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 flex">
            <Sidebar>
              <SidebarNav />
            </Sidebar>
            <SidebarInset>
              <main className="flex-grow">{children}</main>
            </SidebarInset>
          </div>
          <Footer />
          <Toaster />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
