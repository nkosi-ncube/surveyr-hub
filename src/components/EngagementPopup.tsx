'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, PieChart, Star } from 'lucide-react';

export function EngagementPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSelection = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="px-8 py-7 text-lg">
          Explore Use Cases
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            How can we help you today?
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            className="cursor-pointer hover:border-primary transition-all"
            onClick={() => handleSelection('/#use-cases')}
          >
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-fit rounded-full bg-primary/10 p-4 mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feedback Collection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gather authentic feedback from customers, employees, or event
                attendees.
              </p>
              <Button variant="ghost" size="sm" className="text-primary">
                Select <Check className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:border-primary transition-all"
            onClick={() => handleSelection('/#use-cases')}
          >
            <CardContent className="p-6 text-center">
               <div className="mx-auto w-fit rounded-full bg-primary/10 p-4 mb-4">
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Quantitative Research
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Conduct large-scale surveys for market research, academic
                studies, or polling.
              </p>
               <Button variant="ghost" size="sm" className="text-primary">
                Select <Check className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
