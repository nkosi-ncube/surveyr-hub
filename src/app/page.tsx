import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/sector-data';
import { SectorPageFooter } from '@/components/layout/SectorPageFooter';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
       <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <Link href="/" aria-label="Back to homepage">
                    <div className="flex items-center gap-2">
                        <Image src="https://ik.imagekit.io/qamfbdbzl/surveyr-logo-small.fc888627a6e32ae314b0.png" alt="Surveyr Logo" width={44} height={44} />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-base font-medium">
                    <Link href="#use-cases" className="text-muted-foreground hover:text-foreground">Use Cases</Link>
                    <Link href="/contact-us" className="text-muted-foreground hover:text-foreground">Contact Us</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Try for free</Link>
                    </Button>
                </div>
            </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center pt-20">
        <section className="text-center pt-5 pb-10 container mx-auto w-full relative px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-headline text-foreground leading-tight">
                        Supercharge your conversations with <span className="text-gradient">Surveyr</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
                        A WhatsApp driven platform for engaging customer chats, <span className="highlight">capturing leads</span>, <span className="highlight">collecting valuable feedback</span> and boosting live events.
                    </p>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="lg" className="px-8 py-7 text-lg">
                          Select your sector
                          <ChevronDown className="ml-2 h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {sectors.map((sector) => (
                           <DropdownMenuItem key={sector.slug} asChild>
                              <Link href={`/${sector.slug}`}>{sector.name}</Link>
                           </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex items-center justify-center">
                   <Image 
                        src="https://ik.imagekit.io/qamfbdbzl/ChatGPT%20Image%20Jul%2031,%202025,%2006_17_30%20AM.png"
                        alt="Surveyr Platform Illustration"
                        width={600}
                        height={500}
                        priority
                        className="rounded-lg"
                   />
                </div>
            </div>
        </section>

        <section id="use-cases" className="py-20 lg:py-28 container mx-auto text-center w-full">
             <h2 className="text-3xl md:text-4xl font-bold mb-2">Use Cases</h2>
             <p className="text-muted-foreground mb-12">Discover how Surveyr is used by others on our WhatsApp platform</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {sectors.map((sector) => (
                <SectorCard key={sector.slug} sector={sector} />
                ))}
            </div>
        </section>
      </main>
      <SectorPageFooter />
    </div>
  );
}
