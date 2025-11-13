
'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from '../theme-toggle';
import { MobileNav } from './MobileNav';
import ListItem from './ListItem';
import { cn } from '@/lib/utils';
import { BookText, Calculator, Bot } from 'lucide-react';

const calculatorComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Intake Calculator",
    href: "/calculators/intake",
    description: "Track your daily consumption against safe limits.",
  },
  {
    title: "Half-Life Calculator",
    href: "/calculators/half-life",
    description: "Visualize how long caffeine stays in your system.",
  },
  {
    title: "Sleep Calculator",
    href: "/calculators/caffeine-sleep-calculator",
    description: "See how much caffeine will be in your system at bedtime.",
  },
  {
    title: "Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Discover your genetic caffeine tolerance.",
  },
];

const articleComponents: { title: string; href: string; description: string }[] = [
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
          <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Calculation Site Homepage">
            <Image src="/logo.png" alt="Caffeine Calculation Site Logo" width={32} height={32} />
            <span className="text-xl font-bold font-headline">Caffeine Calculation Site</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <Calculator className="h-4 w-4 mr-2" /> Calculators
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {calculatorComponents.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                                ))}
                                 <ListItem
                                    title="View All Calculators"
                                    href="/calculators"
                                    className="bg-primary/5 hover:bg-primary/10 col-span-2"
                                >
                                    Explore the full suite of tools for intake, safety, and timing.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <BookText className="h-4 w-4 mr-2" /> Learn
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                                {articleComponents.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                                ))}
                                <ListItem
                                    title="Explore All Articles"
                                    href="/articles"
                                    className="bg-primary/5 hover:bg-primary/10"
                                >
                                   Browse all our guides on caffeine science and health.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                     <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/ai-assistant" legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-accent/20 hover:bg-accent/30")}>
                               <Bot className="h-4 w-4 mr-2" /> AI Assistant
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
            <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
