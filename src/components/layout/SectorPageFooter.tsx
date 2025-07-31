import Link from 'next/link';
import Image from 'next/image';

export function SectorPageFooter() {
  return (
    <footer className="w-full border-t border-border/10 bg-secondary">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div>
                 <Link href="/" aria-label="Back to homepage">
                    <div className="flex items-center gap-2 mb-4">
                        <Image src="https://ik.imagekit.io/qamfbdbzl/surveyr-logo-small.fc888627a6e32ae314b0.png" alt="Surveyr Logo" width={32} height={32} />
                        <span className="font-bold text-xl text-foreground">surveyr</span>
                    </div>
                </Link>
                <p className="text-sm text-muted-foreground">Supercharge your conversations.</p>
            </div>
             <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
                    <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                    <li><Link href="#use-cases" className="text-muted-foreground hover:text-primary">Use Cases</Link></li>
                    <li><Link href="#faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold mb-3">Company</h4>
                 <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                    <li><Link href="/contact-us" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                 <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                </ul>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/10 text-center text-sm text-muted-foreground">
            <span>© Surveyr 2024. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
