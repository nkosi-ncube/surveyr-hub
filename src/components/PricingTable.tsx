import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export function PricingTable({
  sectorName,
  ctaUrl,
}: {
  sectorName: string;
  ctaUrl: string;
}) {
  return (
    <section id="pricing" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Simple pricing for {sectorName}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Get started for free. No credit card required. Upgrade when you're
            ready.
          </p>
        </div>
        <div className="mx-auto max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-4xl font-bold">
                Free Trial
              </CardTitle>
              <CardDescription>7 days, all features included</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Unlimited Contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Automated Messaging</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Interactive Polls & Quizzes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Real-time Analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full py-6 text-lg">
                <Link href={ctaUrl}>Start 7-Day Free Trial</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
