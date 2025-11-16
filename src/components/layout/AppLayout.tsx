
'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { SidebarProvider } from '@/hooks/use-sidebar';
import Sidebar from './Sidebar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
