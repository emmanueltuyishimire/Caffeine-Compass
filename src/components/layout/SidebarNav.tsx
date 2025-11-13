
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator } from "../ui/sidebar";
import { Coffee, BookText, Calculator, Home, BookOpen, BarChart2, BrainCircuit, Shield, TrendingDown, Clock, Baby, Zap, Moon } from "lucide-react";
import Image from "next/image";

const mainNav = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/articles', label: 'Articles', icon: BookText },
];

const calculatorNav = [
    { title: "Intake Calculator", href: "/calculators/caffeine-intake", icon: Coffee },
    { title: "Half-Life Calculator", href: "/calculators/caffeine-half-life", icon: BarChart2 },
    { title: "Sleep Calculator", href: "/calculators/caffeine-sleep-calculator", icon: Moon },
    { title: "Sensitivity Test", href: "/calculators/caffeine-sensitivity-test", icon: BrainCircuit },
    { title: "Timing Optimizer", href: "/calculators/caffeine-timing-optimizer", icon: Clock },
    { title: "Withdrawal Tracker", href: "/calculators/caffeine-withdrawal-tracker", icon: TrendingDown },
    { title: "Overdose Risk", href: "/calculators/caffeine-overdose-risk", icon: Shield },
    { title: "Pregnancy Safe Limit", href: "/calculators/pregnancy-caffeine-safe-limit", icon: Baby },
    { title: "Drinks Database", href: "/calculators/caffeine-drinks-database", icon: BookOpen },
    { title: "Drink Comparison", href: "/calculators/caffeine-drink-comparison", icon: Zap },
];

export default function SidebarNav() {
    const pathname = usePathname();

    return (
        <>
        <SidebarHeader>
             <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Compass Homepage">
                <Image src="/logo.png" alt="Caffeine Compass Logo" width={32} height={32} />
                <span className="inline-block text-xl font-bold font-headline">Caffeine Compass</span>
            </Link>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                {mainNav.map((link) => (
                    <SidebarMenuItem key={link.href}>
                        <Link href={link.href} passHref legacyBehavior>
                            <SidebarMenuButton as="a" isActive={pathname === link.href} icon={<link.icon />} tooltip={link.label}>
                                {link.label}
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                    <SidebarSeparator />
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <Link href="/calculators" passHref legacyBehavior>
                        <SidebarMenuButton as="a" isActive={pathname === '/calculators'} icon={<Calculator />} tooltip="All Calculators">
                           Calculators
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                {calculatorNav.map((item) => (
                    <SidebarMenuItem key={item.href}>
                         <Link href={item.href} passHref legacyBehavior>
                            <SidebarMenuButton as="a" isActive={pathname === item.href} icon={<item.icon />} tooltip={item.title}>
                                {item.title}
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarContent>
        </>
    );
}
