
'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { sectors } from '@/lib/sector-data';

export function SectorDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" className="w-full sm:w-auto px-8 py-7 text-lg">
          Select your sector
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        {sectors.map((sector) => (
          <DropdownMenuItem key={sector.slug} asChild>
            <Link href={`/${sector.slug}`} className="flex items-center gap-3">
              <sector.Icon className="h-5 w-5 text-primary" />
              <span>{sector.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
