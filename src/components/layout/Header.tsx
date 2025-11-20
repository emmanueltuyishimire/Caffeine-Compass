
'use client';

import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { mainNav } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
    const pathname = usePathname();
    const isMobile = useIsMobile();

  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-14 items-center">
         <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
            <span className="font-bold">Caffeine Compass</span>
        </Link>
        
        {isMobile === false && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {mainNav.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        className={cn(
                            'transition-colors hover:text-primary',
                            pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        )}

        <div className="flex flex-1 items-center justify-end space-x-2">
            {isMobile && <MobileNav />}
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
