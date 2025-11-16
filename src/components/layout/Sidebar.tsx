
'use client';

import { Sheet, SheetContent } from '@/components/ui/sheet';
import SidebarNav from './SidebarNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { PanelLeftClose, PanelRightClose } from 'lucide-react';

export default function Sidebar() {
  const isMobile = useIsMobile();
  const { isOpen, setIsOpen } = useSidebar();

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarNav />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className={cn(
        "relative hidden md:block border-r transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-20"
    )}>
        <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-16 -right-5 z-10"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <PanelLeftClose /> : <PanelRightClose />}
        </Button>
        <SidebarNav />
    </div>
  );
}
