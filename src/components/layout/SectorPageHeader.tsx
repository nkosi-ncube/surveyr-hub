import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M50 0C22.3857 0 0 22.3857 0 50C0 77.6143 22.3857 100 50 100C77.6143 100 100 77.6143 100 50C100 22.3857 77.6143 0 50 0ZM50 87.5C29.325 87.5 12.5 70.675 12.5 50C12.5 29.325 29.325 12.5 50 12.5C70.675 12.5 87.5 29.325 87.5 50C87.5 70.675 70.675 87.5 50 87.5Z"
      opacity="0.5"
    />
    <path d="M50 25C36.2125 25 25 36.2125 25 50C25 63.7875 36.2125 75 50 75C63.7875 75 75 63.7875 75 50C75 36.2125 63.7875 25 50 25Z" />
  </svg>
);

export function SectorPageHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2 text-sm">
              <ArrowLeft className="h-4 w-4" />
              All Sectors
            </Link>
          </Button>
          <Link href="/" aria-label="Back to homepage">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-bold text-xl text-foreground">Surveyr</span>
            </div>
          </Link>
          <div className="w-28 md:w-32" /> {/* Spacer */}
        </div>
      </div>
    </header>
  );
}
