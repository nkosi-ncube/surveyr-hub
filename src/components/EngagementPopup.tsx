'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const Gauge = () => (
  <div className="relative mx-auto mb-4 h-32 w-64">
    <div className="absolute inset-x-0 top-0 h-64 w-full overflow-hidden">
      <div className="h-64 w-64 rounded-full border-[30px] border-secondary" />
    </div>
    <div className="absolute inset-x-0 top-0 h-64 w-full overflow-hidden">
      <div className="h-64 w-64 rounded-full border-[30px] border-transparent border-t-red-400 [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)] [-webkit-mask:linear-gradient(to_right,transparent_25%,white_25%,white_35%,transparent_35%),linear-gradient(to_right,white,white)] [-webkit-mask-composite:source-in]" />
    </div>
    <div className="absolute inset-x-0 top-0 h-64 w-full overflow-hidden">
      <div className="h-64 w-64 rounded-full border-[30px] border-transparent border-t-yellow-400 [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)] [-webkit-mask:linear-gradient(to_right,transparent_35%,white_35%,white_65%,transparent_65%),linear-gradient(to_right,white,white)] [-webkit-mask-composite:source-in]" />
    </div>
    <div className="absolute inset-x-0 top-0 h-64 w-full overflow-hidden">
      <div className="h-64 w-64 rounded-full border-[30px] border-transparent border-t-green-400 [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)] [-webkit-mask:linear-gradient(to_right,transparent_65%,white_65%,white_75%,transparent_75%),linear-gradient(to_right,white,white)] [-webkit-mask-composite:source-in]" />
    </div>
    <div className="absolute bottom-0 left-1/2 h-28 w-1 -translate-x-1/2 rotate-45 transform-gpu bg-foreground/80 [transform-origin:bottom_center]" />
    <div className="absolute -bottom-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-foreground" />
    <div className="absolute left-[10%] top-[35%] text-4xl">😡</div>
    <div className="absolute left-1/2 top-[5%] -translate-x-1/2 text-4xl">😐</div>
    <div className="absolute right-[10%] top-[35%] text-4xl">😀</div>
  </div>
);

export function EngagementPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem('engagementPopupShown');
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('engagementPopupShown', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 sm:max-w-[600px] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#FCD964] p-8 text-center flex flex-col justify-center">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-gray-800">
                Subscribe to get 20% off
              </DialogTitle>
            </DialogHeader>
             <div className='relative h-48 w-full'>
                <Image
                    src="https://placehold.co/100x100.png"
                    alt="Robot Mascot"
                    width={100}
                    height={100}
                    data-ai-hint="robot mascot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                />
            </div>
          </div>
          <div className="p-8 bg-background">
            <div className="text-center">
              <Gauge />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Increase engagement, through feedback collection
              </h3>
            </div>
            {isSubscribed ? (
              <div className="text-center py-8">
                <p className="text-lg font-semibold text-primary">Thank you for subscribing!</p>
                <p className="text-muted-foreground">Check your email for your discount.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="text" placeholder="Enter your name" required />
                <Input type="email" placeholder="Enter your email" required />
                <Button type="submit" className="w-full !bg-[#7D40F2] hover:!bg-[#7D40F2]/90">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
