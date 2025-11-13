'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Sidebar, SidebarInset } from '../ui/sidebar';
import SidebarNav from './SidebarNav';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
    </>
  );
};

export default AppLayout;
