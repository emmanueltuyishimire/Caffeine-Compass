
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { mainNav } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          <span className="font-bold ml-2">Caffeine Compass</span>
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
