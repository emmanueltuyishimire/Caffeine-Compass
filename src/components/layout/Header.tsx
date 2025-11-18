
'use client';

import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { mainNav } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ListItem from './ListItem';

const Header = () => {
    const pathname = usePathname();
  return (
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-14 items-center">
         <Link href="/" className="mr-6 flex items-center space-x-2" aria-label="Caffeine Compass Homepage">
            <Image src="/logo.png" alt="Caffeine Compass Logo" width={28} height={28} />
            <span className="font-bold">Caffeine Compass</span>
        </Link>
        <NavigationMenu>
            <NavigationMenuList>
                {mainNav.map((item) => (
                    <NavigationMenuItem key={item.label}>
                    {item.links ? (
                        <>
                            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {item.links.map((link) => (
                                        <ListItem
                                            key={link.label}
                                            title={link.label}
                                            href={link.href}
                                        >
                                            {link.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </>
                    ) : (
                        <Link href={item.href!} asChild>
                            <NavigationMenuLink
                                className={cn(navigationMenuTriggerStyle(), {
                                    'bg-accent/50 text-foreground': pathname === item.href,
                                    'text-muted-foreground': pathname !== item.href
                                })}
                            >
                                {item.label}
                            </NavigationMenuLink>
                        </Link>
                    )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
