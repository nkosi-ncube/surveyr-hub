import type { Sector } from '@/lib/sector-data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link href={`/${sector.slug}`} className="group block">
      <Card className="h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 bg-white text-foreground">
        <CardHeader>
          <div className="mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
              <sector.Icon className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="font-headline text-xl">{sector.name}</CardTitle>
          <CardDescription className="pt-2">
            {sector.cardDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex justify-end pt-2">
                <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </div>
        </CardContent>
      </Card>
    </Link>
  );
}
