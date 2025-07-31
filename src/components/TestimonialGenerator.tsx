import { generateTestimonial } from '@/ai/flows/generate-testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export async function TestimonialGenerator({ sector }: { sector: string }) {
  let testimonial = `We've seen amazing results in the ${sector.toLowerCase()} sector with Surveyr! It's completely changed how we connect with our community.`;

  try {
    const result = await generateTestimonial({ sector });
    if (result?.testimonial) {
      testimonial = result.testimonial;
    }
  } catch (error) {
    console.error(`Failed to generate testimonial for ${sector}:`, error);
    // Fallback testimonial is already set
  }


  return (
    <section className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-3xl bg-card shadow-lg">
          <CardContent className="p-8 text-center md:p-12">
            <Quote className="mx-auto mb-4 h-10 w-10 text-primary" />
            <blockquote className="text-xl font-medium italic text-foreground md:text-2xl">
              “{testimonial}”
            </blockquote>
            <footer className="mt-6 text-base text-muted-foreground">
              — A Happy Customer in the {sector} Sector
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
