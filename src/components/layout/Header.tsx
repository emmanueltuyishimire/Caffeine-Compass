
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
    title: "Caffeine Timing Optimizer",
    href: "/calculators/caffeine-timing-optimizer",
    description: "Suggests best caffeine timing for work or study.",
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
  },
  {
    title: "Caffeine Overdose Risk Calculator",
    href: "/calculators/caffeine-overdose-risk",
    description: "Estimate safe and toxic caffeine levels based on body weight.",
  },
  {
    title: "Pregnancy Safe Limit Calculator",
    href: "/calculators/pregnancy-safe-limit",
    description: "Track intake against the 200mg limit for pregnancy.",
  }
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Caffeine Compass Homepage">
            <Logo className="h-8 w-8 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold font-headline">Caffeine Compass</span>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
             <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
              </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/calculators">Calculators</Link>
                </NavigationMenuLink>
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
      </div>
    </header>
  );
};

export default Header;
