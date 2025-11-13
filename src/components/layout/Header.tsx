
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import React from 'react';

const calculatorLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Intake Calculator",
    href: "/calculators/intake",
    description: "Track your total daily caffeine consumption against safe limits.",
  },
  {
    title: "Caffeine Sleep Calculator",
    href: "/calculators/caffeine-sleep-calculator",
    description: "See how much caffeine will be in your system at bedtime.",
  },
  {
    title: "Half-Life Calculator",
    href: "/calculators/half-life",
    description: "Visualize how long caffeine stays in your body.",
  },
  {
    title: "Caffeine Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Estimate your genetic tolerance to caffeine.",
  },
];

const articleLinks: { title: string; href: string; description: string }[] = [
  {
    title: "How Long Before Bed to Stop Caffeine",
    href: "/articles/how-long-before-bed-to-stop-caffeine",
    description: "Find your personal caffeine curfew for better sleep.",
  },
  {
    title: "Caffeine's Effect on REM Sleep",
    href: "/articles/caffeine-effect-on-rem-sleep",
    description: "Learn how caffeine impacts your dreams and brain health.",
  },
  {
    title: "Caffeine Half-Life & Sleep",
    href: "/articles/caffeine-half-life-sleep",
    description: "Understand the science of how long caffeine affects you.",
  },
];


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Compass Homepage">
            <Image src="/logo.png" alt="Caffeine Compass Logo" width={32} height={32} />
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
                <NavigationMenuTrigger>Calculators</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {calculatorLinks.map((component) => (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        >
                        {component.description}
                        </ListItem>
                    ))}
                     <ListItem href="/calculators" title="All Calculators" className="bg-muted hover:bg-muted/90">
                        Explore our full suite of caffeine tools.
                    </ListItem>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                         <ListItem href="/articles" title="All Articles">
                           Browse our in-depth guides on caffeine science, health, and optimization.
                        </ListItem>
                         <ListItem href="/calculators/drinks-database" title="Drinks Database">
                           Find the caffeine content of over 1,000 drinks.
                        </ListItem>
                        <ListItem href="/calculators/drink-comparison" title="Drink Comparison">
                           Compare caffeine in coffee, tea, and energy drinks side-by-side.
                        </ListItem>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default Header;
