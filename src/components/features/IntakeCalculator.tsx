'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { drinks } from '@/lib/drinks';
import type { ConsumedDrink } from '@/lib/types';
import { ChevronsUpDown, Plus, Trash2, TrendingUp, TrendingDown } from 'lucide-react';

const RECOMMENDED_LIMIT = 400; // mg

export default function IntakeCalculator() {
  const [consumed, setConsumed] = useState<ConsumedDrink[]>([]);
  const [open, setOpen] = useState(false);

  const totalCaffeine = useMemo(() => {
    return consumed.reduce((total, drink) => total + drink.caffeine * drink.quantity, 0);
  }, [consumed]);

  const progress = (totalCaffeine / RECOMMENDED_LIMIT) * 100;

  const addDrink = (drinkId: string) => {
    const existing = consumed.find((d) => d.id === drinkId);
    if (existing) {
      updateQuantity(drinkId, existing.quantity + 1);
    } else {
      const drinkToAdd = drinks.find((d) => d.id === drinkId);
      if (drinkToAdd) {
        setConsumed([...consumed, { ...drinkToAdd, quantity: 1 }]);
      }
    }
  };

  const removeDrink = (drinkId: string) => {
    setConsumed(consumed.filter((d) => d.id !== drinkId));
  };

  const updateQuantity = (drinkId: string, quantity: number) => {
    const newQuantity = Math.max(1, quantity);
    setConsumed(consumed.map((d) => (d.id === drinkId ? { ...d, quantity: newQuantity } : d)));
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Daily Caffeine Intake</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className="w-full sm:w-[300px] justify-between">
                Search for a drink...
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="Search drink..." />
                <CommandList>
                  <CommandEmpty>No drink found.</CommandEmpty>
                  <CommandGroup>
                    {drinks.map((drink) => (
                      <CommandItem
                        key={drink.id}
                        value={drink.name}
                        onSelect={() => {
                          addDrink(drink.id);
                          setOpen(false);
                        }}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-2">
                          <drink.icon className="h-4 w-4 text-muted-foreground" />
                          <span>{drink.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{drink.caffeine}mg</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
           <Button onClick={() => setConsumed([])} variant="secondary">Reset</Button>
        </div>

        <div className="space-y-4">
          {consumed.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">Add a drink to get started.</p>
          ) : (
            consumed.map((drink) => (
              <div key={drink.id} className="flex items-center gap-4 p-2 rounded-md border">
                <drink.icon className="h-6 w-6 text-primary" />
                <div className="flex-grow">
                  <p className="font-medium">{drink.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {drink.caffeine}mg per {drink.size}ml
                  </p>
                </div>
                <div className="flex items-center gap-2">
                   <Input
                    type="number"
                    min="1"
                    value={drink.quantity}
                    onChange={(e) => updateQuantity(drink.id, parseInt(e.target.value, 10))}
                    className="w-16 h-9 text-center"
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeDrink(drink.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 pt-6">
        <div className="w-full">
            <div className="flex justify-between items-end mb-1">
                 <h3 className="text-2xl font-bold font-headline text-primary">{totalCaffeine} mg</h3>
                <span className="text-sm text-muted-foreground">/ {RECOMMENDED_LIMIT} mg limit</span>
            </div>
          <Progress value={progress} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
             <span>0mg</span>
             <span>{RECOMMENDED_LIMIT}mg</span>
          </div>
        </div>
        {totalCaffeine > 0 && (
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            {totalCaffeine > RECOMMENDED_LIMIT ? <TrendingUp className="h-4 w-4 text-destructive"/> : <TrendingDown className="h-4 w-4 text-accent"/>}
            <span>
              {totalCaffeine > RECOMMENDED_LIMIT
                ? `${totalCaffeine - RECOMMENDED_LIMIT}mg over the recommended daily limit.`
                : `${RECOMMENDED_LIMIT - totalCaffeine}mg under the recommended daily limit.`}
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
