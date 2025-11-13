'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';

const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
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
            <span className="hidden sm:inline-block text-lg font-bold font-headline">
              Caffeine Compass
            </span>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label="Open navigation menu"
        >
          <Menu />
        </Button>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
