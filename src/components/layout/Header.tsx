
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';
import { Coffee } from 'lucide-react';


const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Calculation Site Homepage">
                <Image src="/logo.png" alt="Caffeine Calculation Site Logo" width={28} height={28} />
                <span className="hidden sm:inline-block text-lg font-bold font-headline">Caffeine Compass</span>
            </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
