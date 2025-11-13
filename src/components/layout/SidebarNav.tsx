
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "../ui/sidebar";
import { Coffee, BookText, Calculator, ChevronDown, Home, BookOpen, BarChart2, BrainCircuit, Shield, TrendingDown, Clock, Baby, Zap, Moon } from "lucide-react";
import Image from "next/image";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { cn } from "@/lib/utils";

const mainNav = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/articles', label: 'Articles', icon: BookText },
];

const calculatorNav = [
    { title: "Intake", href: "/calculators/intake", icon: Coffee },
    { title: "Sleep Impact", href: "/calculators/caffeine-sleep-calculator", icon: Moon },
    { title: "Half-Life", href: "/calculators/half-life", icon: BarChart2 },
    { title: "Sensitivity Test", href: "/calculators/caffeine-sensitivity-test", icon: BrainCircuit },
    { title: "Timing Optimizer", href: "/calculators/caffeine-timing-optimizer", icon: Clock },
    { title: "Withdrawal Tracker", href: "/calculators/caffeine-withdrawal-tracker", icon: TrendingDown },
    { title: "Overdose Risk", href: "/calculators/caffeine-overdose-risk", icon: Shield },
    { title: "Pregnancy Safe Limit", href: "/calculators/pregnancy-safe-limit", icon: Baby },
    { title: "Drinks Database", href: "/calculators/drinks-database", icon: BookOpen },
    { title: "Drink Comparison", href: "/calculators/drink-comparison", icon: Zap },
];

export default function SidebarNav() {
    const pathname = usePathname();

    return (
        <>
        <SidebarHeader>
             <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Calculation Site Homepage">
                <Image src="/logo.png" alt="Caffeine Calculation Site Logo" width={32} height={32} />
                <span className="inline-block text-xl font-bold font-headline">Caffeine Compass</span>
            </Link>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                {mainNav.map((link) => (
                    <SidebarMenuItem key={link.href}>
                        <Link href={link.href}>
                            <SidebarMenuButton isActive={pathname === link.href} icon={<link.icon />}>
                                {link.label}
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                ))}
                 <Collapsible>
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton icon={<Calculator />} rightIcon={<ChevronDown/>} className="w-full">
                                Calculators
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                    </SidebarMenuItem>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {calculatorNav.map((item) => (
                                <SidebarMenuSubItem key={item.href}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <SidebarMenuSubButton isActive={pathname === item.href}>{item.title}</SidebarMenuSubButton>
                                    </Link>
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </Collapsible>
            </SidebarMenu>
        </SidebarContent>
        </>
    );
}
