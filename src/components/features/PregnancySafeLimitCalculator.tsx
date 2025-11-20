
'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { drinks } from '@/lib/drinks';
import type { ConsumedDrink } from '@/lib/types';
import { ChevronsUpDown, Trash2, HeartPulse, ShieldAlert, ShieldCheck, PlusCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';

const RECOMMENDED_PREGNANCY_LIMIT = 200; // mg, as per ACOG guidelines

export default function PregnancySafeLimitCalculator() {
  const [consumed, setConsumed] = useState<ConsumedDrink[]>([]);
  const [open, setOpen] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customCaffeine, setCustomCaffeine] = useState('');

  const totalCaffeine = useMemo(() => {
    return consumed.reduce((total, drink) => total + drink.caffeine * drink.quantity, 0);
  }, [consumed]);

  const progress = useMemo(() => {
    return (totalCaffeine / RECOMMENDED_PREGNANCY_LIMIT) * 100;
  }, [totalCaffeine]);

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
            size: 0,
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

  const StatusAlert = useMemo(() => {
    if (totalCaffeine === 0) {
      return (
         <Alert>
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <AlertTitle>You're off to a great start!</AlertTitle>
            <AlertDescription>
                Add drinks to track your caffeine intake throughout the day. The goal is to stay below 200mg.
            </AlertDescription>
        </Alert>
      )
    }
    if (totalCaffeine > RECOMMENDED_PREGNANCY_LIMIT) {
       return (
        <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
            <AlertTitle>Above Recommended Limit</AlertTitle>
            <AlertDescription>
                You are <strong>{totalCaffeine - RECOMMENDED_PREGNANCY_LIMIT}mg over</strong> the generally recommended 200mg daily limit for pregnancy. Consider switching to decaf or caffeine-free options.
            </AlertDescription>
        </Alert>
       )
    }
     return (
        <Alert className="border-green-500/50 text-green-700 dark:text-green-400">
            <ShieldCheck className="h-4 w-4 text-green-500" aria-hidden="true" />
            <AlertTitle className="text-green-600 dark:text-green-500">Within Safe Limit</AlertTitle>
            <AlertDescription>
                You are <strong>{RECOMMENDED_PREGNANCY_LIMIT - totalCaffeine}mg under</strong> the recommended 200mg daily limit.
            </AlertDescription>
        </Alert>
     )
  }, [totalCaffeine]);

  return (
    <Card className="max-w-4xl mx-auto border-primary/20" aria-labelledby="pregnancy-calculator-title">
      <CardHeader>
        <CardTitle id="pregnancy-calculator-title" className="flex items-center gap-2"><HeartPulse aria-hidden="true"/> Pregnancy Caffeine Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-2">
           <div>
            <Label htmlFor="drink-search" className="sr-only">Search for a drink</Label>
            <Button id="drink-search" variant="outline" onClick={() => setOpen(true)} className="w-full sm:w-[300px] justify-between" aria-haspopup="dialog">
                Search for a drink to add...
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen} title="Search for a drink" description="Search and select an item to add to your pregnancy intake log.">
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
            </CommandDialog>
          </div>
           <Button onClick={() => setConsumed([])} variant="secondary">Reset Day</Button>
        </div>
        
        <div className="p-4 border rounded-lg bg-muted/50 space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground" id="custom-item-heading">Add Custom Item</h3>
            <div className="flex flex-col sm:flex-row gap-2" aria-labelledby="custom-item-heading">
                <Label htmlFor="custom-item-name" className="sr-only">Custom item name</Label>
                <Input id="custom-item-name" placeholder="Item Name (e.g., Chocolate Bar)" value={customName} onChange={e => setCustomName(e.target.value)} />
                <Label htmlFor="custom-caffeine-amount" className="sr-only">Custom caffeine amount</Label>
                <Input id="custom-caffeine-amount" type="number" placeholder="Caffeine (mg)" value={customCaffeine} onChange={e => setCustomCaffeine(e.target.value)} className="w-full sm:w-32"/>
                <Button onClick={addCustomDrink} disabled={!customName || !customCaffeine}>
                    <PlusCircle className="mr-2 h-4 w-4"/> Add
                </Button>
            </div>
        </div>

        <div className="space-y-4" role="list">
          {consumed.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">Log your drinks and other caffeinated items to track your daily intake.</p>
          ) : (
            consumed.map((drink, index) => (
              <div key={drink.id} role="listitem" className="flex items-center gap-4 p-2 rounded-md border">
                <drink.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <div className="flex-grow">
                  <p className="font-medium">{drink.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {drink.caffeine}mg {drink.size > 0 ? `per serving` : ''}
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
      <CardFooter className="flex-col items-start gap-4 pt-6 border-t">
        <div className="w-full" role="status" aria-live="polite">
            <div className="flex justify-between items-end mb-1">
                 <h3 className="text-2xl font-bold font-headline text-primary">{totalCaffeine} mg</h3>
                <span className="text-sm text-muted-foreground">/ {RECOMMENDED_PREGNANCY_LIMIT} mg Recommended Limit</span>
            </div>
          <Progress value={progress} className={cn(progress > 100 && '[&>div]:bg-destructive')} aria-valuenow={totalCaffeine} aria-valuemin={0} aria-valuemax={RECOMMENDED_PREGNANCY_LIMIT} />
          <div className="flex justify-between text-xs text-muted-foreground mt-1" aria-hidden="true">
             <span>0mg</span>
             <span>{RECOMMENDED_PREGNANCY_LIMIT}mg</span>
          </div>
        </div>
        <div className="w-full" role="alert">
            {StatusAlert}
        </div>
      </CardFooter>
    </Card>
  );
}
