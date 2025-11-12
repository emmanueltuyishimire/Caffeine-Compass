
'use client';

import Link from 'next/link';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react';


const calculators: { title: string; href: string; description: string }[] = [
  {
    title: "Intake Calculator",
    href: "/calculators/intake",
    description: "Calculate your total daily caffeine intake.",
  },
  {
    title: "Half-Life Calculator",
    href: "/calculators/half-life",
    description: "See how long caffeine stays in your system.",
  },
  {
    title: "Sleep Impact Calculator",
    href: "/calculators/sleep-impact",
    description: "Predict caffeine's effect on your sleep.",
  },
  {
    title: "Caffeine Withdrawal Tracker",
    href: "/calculators/caffeine-withdrawal-tracker",
    description: "Helps users taper down safely.",
  },
  {
    title: "Caffeine Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Estimate your genetic tolerance to caffeine.",
  },
  {
    title: "Drink Comparison Tool",
    href: "/calculators/drink-comparison",
    description: "Compare caffeine in coffee, tea, and energy drinks.",
  },
  {
    title: "Caffeine in Drinks Database",
    href: "/calculators/drinks-database",
    description: "Search 1,000+ beverages by caffeine mg.",
  }
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Caffeine Compass</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                 <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                  </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Calculators</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {calculators.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/about">About</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/support">Support</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || ''}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default Header;
