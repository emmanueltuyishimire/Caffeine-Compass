
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useSidebar } from '@/hooks/use-sidebar';
import Image from 'next/image';

export default function SidebarNav() {
  const pathname = usePathname();
  const { isOpen } = useSidebar();

  return (
    <nav className="flex flex-col h-full">
      <div className="flex items-center justify-center h-16 border-b">
         <Link href="/" className="flex items-center gap-2 text-foreground">
            <Image src="/logo.png" alt="Caffeine Compass Logo" width={28} height={28} />
             {isOpen && <span className="text-lg font-bold">Caffeine Compass</span>}
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="py-4 space-y-1">
            {mainNav.map((link) => (
                <li key={link.href}>
                    <TooltipProvider delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'}>
                                    <span
                                        className={cn(
                                            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted',
                                            pathname === link.href && 'bg-muted text-primary'
                                        )}
                                    >
                                        <link.icon className="h-5 w-5" />
                                        {isOpen && <span>{link.label}</span>}
                                    </span>
                                </Link>
                            </TooltipTrigger>
                             {!isOpen && (
                                <TooltipContent side="right">
                                    <p>{link.label}</p>
                                </TooltipContent>
                             )}
                        </Tooltip>
                    </TooltipProvider>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
