import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { sectors } from '@/lib/sector-data';
import { SectorPageHeader } from '@/components/layout/SectorPageHeader';
import { SectorPageFooter } from '@/components/layout/SectorPageFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialGenerator } from '@/components/TestimonialGenerator';
import { PricingTable } from '@/components/PricingTable';
import { Skeleton } from '@/components/ui/skeleton';
import { Quote } from 'lucide-react';
import { EngagementPopup } from '@/components/EngagementPopup';

export async function generateMetadata({
  params,
}: {
  params: { sector: string };
}): Promise<Metadata> {
  const sector = sectors.find((s) => s.slug === params.sector);

  if (!sector) {
    return {
      title: 'Sector Not Found',
    };
  }

  const title = `Surveyr for ${sector.name}`;
  const description = sector.heroDescription;
  const url = `https://surveyr.africa/${sector.slug}`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: 'Surveyr',
      type: 'website',
    },
  };
}

export default function SectorPage({ params }: { params: { sector: string } }) {
  const sector = sectors.find((s) => s.slug === params.sector);

  if (!sector) {
    notFound();
  }

  const ctaUrl = `/signup?src=${sector.slug}&utm_source=sectorpage&utm_medium=cta&utm_campaign=${sector.slug}`;

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background text-foreground animate-in fade-in duration-500">
        <SectorPageHeader />
        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-background to-secondary">
            <div className="container mx-auto px-4 py-20 text-center lg:py-32">
              <h1 className="font-headline text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl mb-4">
                {sector.heroTitle}
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
                {sector.heroDescription}
              </p>
              <Button asChild size="lg" className="px-8 py-7 text-lg">
                <Link href={ctaUrl}>Start 7-Day Free Trial</Link>
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {sector.features.map((feature) => (
                  <div key={feature.title} className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <feature.Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <Suspense fallback={<TestimonialSkeleton />}>
            <TestimonialGenerator sector={sector.name} />
          </Suspense>

          {/* Pricing Section */}
          <PricingTable sectorName={sector.name} ctaUrl={ctaUrl} />
        </main>
        <SectorPageFooter />
      </div>
      <EngagementPopup />
    </>
  );
}

const TestimonialSkeleton = () => (
  <section className="w-full bg-secondary py-16 md:py-24">
    <div className="container mx-auto px-4">
      <Card className="mx-auto max-w-3xl bg-card shadow-lg">
        <CardContent className="p-8 text-center md:p-12">
          <Quote className="mx-auto mb-4 h-10 w-10 text-primary" />
          <div className="space-y-3">
            <Skeleton className="mx-auto h-6 w-3/4" />
            <Skeleton className="mx-auto h-6 w-1/2" />
          </div>
          <Skeleton className="mx-auto mt-6 h-5 w-1/3" />
        </CardContent>
      </Card>
    </div>
  </section>
);

export function generateStaticParams() {
  return sectors.map((sector) => ({
    sector: sector.slug,
  }));
}
