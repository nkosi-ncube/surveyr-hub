
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface EngagementPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (selection: 'research' | 'feedback') => void;
}

export function EngagementPopup({ open, onOpenChange, onSelect }: EngagementPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>How can we help you today?</DialogTitle>
          <DialogDescription>
            Select your primary goal to see how Surveyr can be tailored for your needs.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 pt-4">
          <Button
            size="lg"
            className="w-full justify-between"
            onClick={() => onSelect('research')}
          >
            <span>Quantitative Research</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="w-full justify-between"
            onClick={() => onSelect('feedback')}
          >
            <span>Feedback Collection</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
