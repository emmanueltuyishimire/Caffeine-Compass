
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, Coffee } from 'lucide-react';
import { useState } from 'react';


const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/calculators', label: 'Calculators' },
    { href: '/articles', label: 'Articles' }
];

const Header = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Calculation Site Homepage">
            <Image src="/logo.png" alt="Caffeine Calculation Site Logo" width={32} height={32} />
            <span className="hidden sm:inline-block text-xl font-bold font-headline">Caffeine Compass</span>
          </Link>
           <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <Link href={link.href} legacyBehavior passHref>
                                <NavigationMenuLink 
                                className={navigationMenuTriggerStyle()}
                                active={pathname === link.href}
                                >
                                {link.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
                 <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" aria-label="Open mobile menu">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium mt-8">
                             <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                                <Coffee className="h-6 w-6" />
                                <span className="">Caffeine Compass</span>
                            </Link>
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`hover:text-foreground ${pathname === link.href ? 'text-foreground' : 'text-muted-foreground'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
