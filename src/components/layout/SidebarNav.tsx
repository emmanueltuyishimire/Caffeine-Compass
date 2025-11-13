
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookText, Calculator, Home } from "lucide-react";
import Image from "next/image";

const mainNav = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/calculators', label: 'Calculators', icon: Calculator },
    { href: '/articles', label: 'Articles', icon: BookText },
];

interface SidebarNavProps {
  isMobile: boolean;
}

export default function SidebarNav({ isMobile }: SidebarNavProps) {
    const pathname = usePathname();

    if (isMobile) {
        return (
            <div className="flex flex-col h-full">
                <div className="flex items-center p-4 border-b">
                    <Link href="/" className="flex items-center gap-2" aria-label="Caffeine Compass Homepage">
                        <Image src="/logo.png" alt="Caffeine Compass Logo" width={32} height={32} />
                        <span className="text-xl font-bold font-headline">Caffeine Compass</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-2 p-4">
                    {mainNav.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                    isActive && "bg-muted text-primary"
                                )}
                            >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        );
    }

    return (
        <>
            {mainNav.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            isActive ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </>
    );
}
