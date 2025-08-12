
"use client"

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Zap } from "lucide-react";

export function ExitIntentPopup({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    toast({
      title: "Thank you!",
      description: "We'll keep you updated on new features and promotions.",
    });
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Zap className="h-6 w-6" />
            </div>
          </div>
          <AlertDialogTitle className="text-center text-xl font-bold pt-2">
            Don't Miss Out!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-muted-foreground pb-4">
            Get updates on new features, promotions, and exclusive content.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <Button type="submit">
                <Mail className="h-4 w-4 mr-2" />
                Notify Me
            </Button>
          </div>
        </form>
        <AlertDialogFooter className="mt-2">
           <Button variant="link" size="sm" onClick={() => onOpenChange(false)} className="w-full text-muted-foreground">
            No thanks, I'll pass
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
