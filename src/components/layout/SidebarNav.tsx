
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "../ui/sidebar";
import { Coffee, BookText, Calculator, ChevronDown, Home, BookOpen, BarChart2, BrainCircuit, Shield, TrendingDown, Clock } from "lucide-react";
import Image from "next/image";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { cn } from "@/lib/utils";

const mainNav = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/articles', label: 'Articles', icon: BookText },
];

const calculatorNav = [
    { title: "Intake Calculator", href: "/calculators/intake", description: "Calculate your total daily caffeine intake.", icon: Coffee },
    { title: "Sleep Calculator", href: "/calculators/caffeine-sleep-calculator", description: "See how much caffeine will be in your system at bedtime.", icon: BarChart2 },
    { title: "Sensitivity Test", href: "/calculators/caffeine-sensitivity-test", description: "Estimate your genetic tolerance to caffeine.", icon: BrainCircuit },
    { title: "Overdose Risk Calculator", href: "/calculators/caffeine-overdose-risk", description: "Estimate safe and toxic caffeine levels based on body weight.", icon: Shield },
    { title: "Withdrawal Tracker", href: "/calculators/caffeine-withdrawal-tracker", description: "Helps users taper down safely.", icon: TrendingDown },
    { title: "Timing Optimizer", href: "/calculators/caffeine-timing-optimizer", description: "Suggests best caffeine timing for work or study.", icon: Clock },
    { title: "Drinks Database", href: "/calculators/drinks-database", description: "Search 1,000+ beverages by caffeine mg.", icon: BookOpen },
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
                    <CollapsibleTrigger asChild>
                         <SidebarMenuButton icon={<Calculator />} rightIcon={<ChevronDown/>} className="w-full">
                            Calculators
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {calculatorNav.map((item) => (
                                <SidebarMenuSubItem key={item.href}>
                                    <Link href={item.href} className="w-full">
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
