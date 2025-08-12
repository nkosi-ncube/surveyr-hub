
import { SectorCard } from '@/components/SectorCard';
import { sectors } from '@/lib/sector-data';
import { SectorPageHeader } from '@/components/layout/SectorPageHeader';
import { SectorPageFooter } from '@/components/layout/SectorPageFooter';

export default function UseCasesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SectorPageHeader />
      <main className="flex-1 pt-20">
        <section className="py-20 lg:py-28">
            <div className="container mx-auto px-4 text-center">
                 <h1 className="text-3xl md:text-5xl font-bold mb-4">Solutions for Every Sector</h1>
                 <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Discover how Surveyr drives results across different industries. Click on a sector to see tailored solutions.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector) => (
                        <SectorCard key={sector.slug} sector={sector} />
                    ))}
                </div>
            </div>
        </section>
      </main>
      <SectorPageFooter />
    </div>
  );
}
