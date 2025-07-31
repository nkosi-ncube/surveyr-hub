import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/sector-data';
import { SectorPageFooter } from '@/components/layout/SectorPageFooter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex flex-col items-center animate-in fade-in duration-500">
        <section className="text-center py-20 lg:py-28 container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline text-foreground">
            Surveyr: Connect with every audience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pick your sector and see exactly how we help.
          </p>
        </section>

        <section className="px-4 md:px-6 w-full max-w-6xl mb-20 lg:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
