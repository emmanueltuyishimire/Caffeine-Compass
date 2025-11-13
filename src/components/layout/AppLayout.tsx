
'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Sidebar, SidebarInset, SidebarProvider } from '../ui/sidebar';
import SidebarNav from './SidebarNav';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
