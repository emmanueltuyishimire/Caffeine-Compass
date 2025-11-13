
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import { BookText, Calculator, Home } from "lucide-react";
import Image from "next/image";

const mainNav = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/calculators', label: 'Calculators', icon: Calculator },
    { href: '/articles', label: 'Articles', icon: BookText },
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
                       <SidebarMenuButton asChild isActive={pathname === link.href} tooltip={link.label}>
                            <Link href={link.href}>
                                <link.icon />
                                <span className="flex-grow text-left">{link.label}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarContent>
        </>
    );
}
