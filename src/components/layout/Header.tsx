
'use client';

import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { mainNav } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();
  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-14 items-center">
         <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.png" alt="Caffeine Compass Logo" width={28} height={28} style={{ width: 'auto', height: 'auto' }} />
            <span className="font-bold">Caffeine Compass</span>
        </Link>
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
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
