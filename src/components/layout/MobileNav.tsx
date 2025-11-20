
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { mainNav } from '@/lib/nav-links';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          aria-label="Toggle mobile navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
            <svg
              className="h-6 w-6 text-primary mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m15.5 8.5-7 7" />
              <path d="m8.5 8.5 7 7" />
            </svg>
          <span className="font-bold">Caffeine Compass</span>
        </MobileLink>
        <div className="flex flex-col gap-3 pt-6">
          {mainNav.map((item) => (
            <MobileLink key={item.href} href={item.href} onOpenChange={setOpen}>
              {item.label}
            </MobileLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

function MobileLink({ href, onOpenChange, children, className, ...props }: MobileLinkProps) {
  const router = useRouter();
  const isExternal = typeof href === 'string' && href.startsWith('http');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isExternal) {
        e.preventDefault();
        router.push(href.toString());
    }
    onOpenChange(false);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={isExternal ? '_blank' : '_self'}
      className={cn("text-muted-foreground transition-colors hover:text-primary", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
