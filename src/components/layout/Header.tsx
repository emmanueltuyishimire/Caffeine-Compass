
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';

const Header = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Calculation Site Homepage">
            <Image src="/logo.png" alt="Caffeine Calculation Site Logo" width={32} height={32} />
            <span className="hidden sm:inline-block text-xl font-bold font-headline">Caffeine Compass</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
