import { Logo } from '@/components/icons';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline">Caffeine Compass</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
