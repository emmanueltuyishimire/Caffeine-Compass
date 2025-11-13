
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from '../theme-toggle';
import { MobileNav } from './MobileNav';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/calculators', label: 'Calculators' },
  { href: '/articles', label: 'Guide' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Calculation Site Homepage">
            <Image src="/logo.png" alt="Caffeine Calculation Site Logo" width={32} height={32} />
            <span className="hidden sm:inline-block text-xl font-bold font-headline">Caffeine Calculation Site</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} passHref>
                    <NavigationMenuLink 
                      asChild
                      className={navigationMenuTriggerStyle()}
                      active={pathname === link.href}
                    >
                      <a>{link.label}</a>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
