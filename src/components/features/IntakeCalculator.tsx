
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
import { ChevronsUpDown, Trash2, TrendingUp, TrendingDown, PlusCircle } from 'lucide-react';
import { Label } from '../ui/label';

const RECOMMENDED_LIMIT = 400; // mg

export default function IntakeCalculator() {
  const [consumed, setConsumed] = useState<ConsumedDrink[]>([]);
  const [open, setOpen] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customCaffeine, setCustomCaffeine] = useState('');

  const totalCaffeine = useMemo(() => {
    return consumed.reduce((total, drink) => total + drink.caffeine * drink.quantity, 0);
  }, [consumed]);

  const progress = (totalCaffeine / RECOMMENDED_LIMIT) * 100;

  const addDrink = (drinkId: string) => {
    setConsumed((currentConsumed) => {
      const existing = currentConsumed.find((d) => d.id === drinkId);
      if (existing) {
        return currentConsumed.map((d) =>
          d.id === drinkId ? { ...d, quantity: d.quantity + 1 } : d
        );
      } else {
        const drinkToAdd = drinks.find((d) => d.id === drinkId);
        return drinkToAdd ? [...currentConsumed, { ...drinkToAdd, quantity: 1 }] : currentConsumed;
      }
    });
  };
  
  const addCustomDrink = () => {
    const caffeine = parseInt(customCaffeine, 10);
    if (customName && !isNaN(caffeine) && caffeine > 0) {
        const customDrink: ConsumedDrink = {
            id: `custom-${Date.now()}`,
            name: customName,
            category: 'Other',
            caffeine: caffeine,
            size: 0, // No standard size for custom
            icon: PlusCircle,
            quantity: 1,
        };
        setConsumed(current => [...current, customDrink]);
        setCustomName('');
        setCustomCaffeine('');
    }
  };

  const removeDrink = (drinkId: string) => {
    setConsumed((currentConsumed) => currentConsumed.filter((d) => d.id !== drinkId));
  };

  const updateQuantity = (drinkId: string, quantity: number) => {
    const newQuantity = Math.max(1, quantity);
    setConsumed((currentConsumed) =>
      currentConsumed.map((d) =>
        d.id === drinkId ? { ...d, quantity: newQuantity } : d
      )
    );
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Daily Caffeine Intake</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <div>
            <Label htmlFor="drink-search" className="sr-only">Search for a drink</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button id="drink-search" variant="outline" role="combobox" aria-expanded={open} className="w-full sm:w-[300px] justify-between">
                  Search for a drink...
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
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
                            <drink.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
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
          </div>
           <Button onClick={() => setConsumed([])} variant="secondary">Reset</Button>
        </div>

        <div className="p-4 border rounded-lg bg-muted/50 space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Add Custom Drink</h3>
            <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Drink Name (e.g., My Pre-workout)" value={customName} onChange={e => setCustomName(e.target.value)} />
                <Input type="number" placeholder="Caffeine (mg)" value={customCaffeine} onChange={e => setCustomCaffeine(e.target.value)} className="w-full sm:w-32"/>
                <Button onClick={addCustomDrink} disabled={!customName || !customCaffeine}>
                    <PlusCircle className="mr-2 h-4 w-4"/> Add
                </Button>
            </div>
        </div>

        <div className="space-y-4" role="list">
          {consumed.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">Add a drink to get started.</p>
          ) : (
            consumed.map((drink, index) => (
              <div key={drink.id} role="listitem" className="flex items-center gap-4 p-2 rounded-md border">
                <drink.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <div className="flex-grow">
                  <p className="font-medium">{drink.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {drink.caffeine}mg {drink.size > 0 ? `per ${drink.size}ml` : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                   <Label htmlFor={`quantity-${index}`} className="sr-only">Quantity of {drink.name}</Label>
                   <Input
                    id={`quantity-${index}`}
                    type="number"
                    min="1"
                    value={drink.quantity}
                    onChange={(e) => updateQuantity(drink.id, parseInt(e.target.value, 10))}
                    className="w-16 h-9 text-center"
                    aria-label={`Quantity of ${drink.name}`}
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeDrink(drink.id)} aria-label={`Remove ${drink.name}`}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 pt-6">
        <div className="w-full" role="status" aria-live="polite">
            <div className="flex justify-between items-end mb-1">
                 <h3 className="text-2xl font-bold font-headline text-primary">{totalCaffeine} mg</h3>
                <span className="text-sm text-muted-foreground">/ {RECOMMENDED_LIMIT} mg limit</span>
            </div>
          <Progress value={progress} className="w-full" aria-valuenow={totalCaffeine} aria-valuemin={0} aria-valuemax={RECOMMENDED_LIMIT} />
          <div className="flex justify-between text-xs text-muted-foreground mt-1" aria-hidden="true">
             <span>0mg</span>
             <span>{RECOMMENDED_LIMIT}mg</span>
          </div>
        </div>
        {totalCaffeine > 0 && (
          <div className="text-sm text-muted-foreground flex items-center gap-2" role="status">
            {totalCaffeine > RECOMMENDED_LIMIT ? <TrendingUp className="h-4 w-4 text-destructive" aria-hidden="true"/> : <TrendingDown className="h-4 w-4 text-accent" aria-hidden="true"/>}
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
