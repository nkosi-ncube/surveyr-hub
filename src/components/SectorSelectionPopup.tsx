
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { sectors } from '@/lib/sector-data';
import type { Sector } from '@/lib/sector-data';

interface SectorSelectionPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  intent: 'research' | 'feedback' | null;
}

export function SectorSelectionPopup({ isOpen, setIsOpen, intent }: SectorSelectionPopupProps) {
  const router = useRouter();

  const handleSectorSelect = (sector: Sector) => {
    setIsOpen(false);
    // Use timeout to allow the dialog to close before navigation
    setTimeout(() => {
        router.push(`/${sector.slug}?intent=${intent}`);
    }, 150);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Your Sector</DialogTitle>
          <DialogDescription>
            Choose the industry that best represents you to see tailored solutions.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {sectors.map((sector) => (
            <button
              key={sector.slug}
              onClick={() => handleSectorSelect(sector)}
              className="group flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent hover:border-primary transition-colors text-center"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-3">
                <sector.Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">{sector.name}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
