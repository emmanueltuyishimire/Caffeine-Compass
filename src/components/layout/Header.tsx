'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import { mainNav } from '@/lib/nav-links';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-6">
          <NavigationMenuList>
            {mainNav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Header & Menu */}
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className='border-b pb-4 mb-4'>
                     <Link
                        href="/"
                        className="flex items-center gap-2"
                        aria-label="Caffeine Compass Homepage"
                        onClick={() => setIsMobileMenuOpen(false)}
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
                </SheetHeader>
              <nav className="flex flex-col gap-4">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                        'text-lg font-medium text-muted-foreground transition-colors hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
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
