'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import SidebarNav from './SidebarNav';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';


const Header = () => {
  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Caffeine Compass Homepage"
          >
            <Image
              src="/logo.png"
              alt="Caffeine Compass Logo"
              width={28}
              height={28}
            />
            <span className="text-lg font-bold font-headline">
              Caffeine Compass
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm ml-6">
            <SidebarNav isMobile={false} />
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
               <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
               <SidebarNav isMobile={true} />
            </SheetContent>
          </Sheet>
        </div>
         <div className="flex flex-1 items-center justify-end md:justify-end space-x-2">
           <Link href="/" className="md:hidden flex items-center gap-2" aria-label="Caffeine Compass Homepage">
                <Image
                src="/logo.png"
                alt="Caffeine Compass Logo"
                width={28}
                height={28}
                />
            </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
