'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Sidebar, SidebarInset } from '../ui/sidebar';
import SidebarNav from './SidebarNav';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </SidebarInset>
    </>
  );
};

export default AppLayout;
