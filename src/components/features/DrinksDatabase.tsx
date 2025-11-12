
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { drinks } from '@/lib/drinks';
import type { Drink } from '@/lib/types';
import { Coffee, Leaf, CupSoda, Zap } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const categoryIcons = {
  Coffee: <Coffee className="h-5 w-5" />,
  Tea: <Leaf className="h-5 w-5" />,
  Soda: <CupSoda className="h-5 w-5" />,
  'Energy Drink': <Zap className="h-5 w-5" />,
};

export default function DrinksDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredDrinks = useMemo(() => {
    return drinks
      .filter((drink) =>
        drink.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((drink) =>
        selectedCategory ? drink.category === selectedCategory : true
      )
      .sort((a, b) => b.caffeine - a.caffeine);
  }, [searchTerm, selectedCategory]);

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Search the Drinks Database</CardTitle>
        <CardDescription>
          Find the caffeine content of over 1,000 beverages.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Search for a drink (e.g., 'Starbucks Latte')"
            className="flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ToggleGroup
            type="single"
            value={selectedCategory || ''}
            onValueChange={(value) => setSelectedCategory(value || null)}
          >
            <ToggleGroupItem value="Coffee" aria-label="Filter by Coffee">
              <Coffee className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="Tea" aria-label="Filter by Tea">
              <Leaf className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="Soda" aria-label="Filter by Soda">
              <CupSoda className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="Energy Drink" aria-label="Filter by Energy Drink">
              <Zap className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <ScrollArea className="h-[400px] border rounded-md">
          <div className="p-4 space-y-2">
            {filteredDrinks.length > 0 ? (
              filteredDrinks.map((drink) => (
                <div
                  key={drink.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-muted-foreground">
                      {categoryIcons[drink.category as keyof typeof categoryIcons] || <Coffee className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-semibold">{drink.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {drink.size}ml
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                     <p className="font-bold text-primary text-lg">{drink.caffeine} mg</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground py-10">
                <p>No drinks found.</p>
                <p className="text-sm">Try broadening your search.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

