import Link from 'next/link';

export function SectorPageFooter() {
  return (
    <footer className="w-full border-t border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-center text-center text-sm text-muted-foreground">
        <span>© Surveyr 2024</span>
        <span className="mx-2">·</span>
        <Link href="/" className="transition-colors hover:text-primary">
          Other Sectors
        </Link>
      </div>
    </footer>
  );
}
