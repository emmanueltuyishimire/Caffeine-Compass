
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
             <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Compass Homepage">
                <Image src="/logo.png" alt="Caffeine Compass Logo" width={32} height={32} />
                <span className="inline-block text-xl font-bold font-headline">Caffeine Compass</span>
            </Link>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                {mainNav.map((link) => (
                    <SidebarMenuItem key={link.href}>
                        <Link href={link.href}>
                            <SidebarMenuButton isActive={pathname === link.href} icon={<link.icon />} tooltip={link.label}>
                                {link.label}
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                ))}
                <SidebarSeparator />
                 <SidebarMenuItem>
                    <Link href="/calculators">
                        <SidebarMenuButton isActive={pathname === '/calculators'} icon={<Calculator />} tooltip="All Calculators">
                            Calculators
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                {calculatorNav.map((item) => (
                    <SidebarMenuItem key={item.href}>
                         <Link href={item.href}>
                            <SidebarMenuButton isActive={pathname === item.href} icon={<item.icon />} tooltip={item.title}>
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
