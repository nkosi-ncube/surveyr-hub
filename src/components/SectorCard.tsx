import type { Sector } from '@/lib/sector-data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link href={`/${sector.slug}`} className="group block">
      <Card className="h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-primary/50">
        <CardHeader className="p-6">
          <div className="mb-4">
            <sector.Icon className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="font-headline text-xl">{sector.name}</CardTitle>
          <CardDescription className="pt-2">
            {sector.cardDescription}
          </CardDescription>
        </CardHeader>
        <div className="flex justify-end px-6 pb-6 pt-2">
          <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </Card>
    </Link>
  );
}
