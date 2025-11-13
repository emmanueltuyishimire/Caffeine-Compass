
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { drinks as staticDrinks } from '@/lib/drinks';
import type { Drink } from '@/lib/types';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, PlusCircle, Trash2, Coffee, Leaf, CupSoda, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';


const chartConfig = {
  caffeine: {
    label: 'Caffeine (mg)',
    color: 'hsl(var(--primary))',
  },
};

type Category = 'Coffee' | 'Tea' | 'Soda' | 'Energy Drink' | 'Other';

const getIconForCategory = (category: Category) => {
    switch (category) {
        case 'Coffee': return Coffee;
        case 'Tea': return Leaf;
        case 'Soda': return CupSoda;
        case 'Energy Drink': return Zap;
        default: return PlusCircle;
    }
};


export default function DrinkComparison() {
  const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>(() => {
    return [
      staticDrinks.find((d) => d.id === 'd1')!, // Brewed Coffee
      staticDrinks.find((d) => d.id === 'd4')!, // Black Tea
      staticDrinks.find((d) => d.id === 'd38')!, // Red Bull
    ].filter(Boolean);
  });
  const [open, setOpen] = useState(false);
  const [allDrinks, setAllDrinks] = useState<Drink[]>([]);
  const [isCustomFormOpen, setIsCustomFormOpen] = useState(false);

  // Form state for custom drink
  const [customName, setCustomName] = useState('');
  const [customCategory, setCustomCategory] = useState<Category>('Coffee');
  const [customCaffeine, setCustomCaffeine] = useState('');
  const [customSize, setCustomSize] = useState('');

  useEffect(() => {
    try {
      const customDrinksJSON = localStorage.getItem('customDrinks');
      const loadedCustomDrinks = customDrinksJSON ? JSON.parse(customDrinksJSON) : [];
      const combinedDrinks = [...staticDrinks, ...loadedCustomDrinks.map((d: any) => ({...d, icon: getIconForCategory(d.category)}))];
      setAllDrinks(combinedDrinks);
    } catch (error) {
      console.error("Failed to load custom drinks from localStorage", error);
      setAllDrinks(staticDrinks);
    }
  }, []);

  const chartData = useMemo(() => {
    return selectedDrinks
      .map((drink) => ({
        name: drink.name,
        caffeine: drink.caffeine,
        fill: 'var(--color-caffeine)',
      }))
      .sort((a, b) => b.caffeine - a.caffeine);
  }, [selectedDrinks]);

  const handleSelect = (drink: Drink) => {
    setSelectedDrinks((currentSelected) => {
      if (currentSelected.some((d) => d.id === drink.id)) {
        return currentSelected.filter((d) => d.id !== drink.id);
      } else {
        return [...currentSelected, drink];
      }
    });
  };

  const handleAddCustomDrink = () => {
    const caffeine = parseInt(customCaffeine, 10);
    const size = parseInt(customSize, 10);
    if (customName && !isNaN(caffeine) && caffeine >= 0 && !isNaN(size) && size >= 0) {
      const newDrink: Drink = {
        id: `custom-${Date.now()}`,
        name: customName,
        category: customCategory,
        caffeine: caffeine,
        size: size,
        icon: getIconForCategory(customCategory),
      };

      setAllDrinks(prevDrinks => {
          const updatedDrinks = [...prevDrinks, newDrink];
          const customDrinksToSave = updatedDrinks.filter(d => d.id.startsWith('custom-'));
          localStorage.setItem('customDrinks', JSON.stringify(customDrinksToSave.map(({ icon, ...rest }) => rest)));
          return updatedDrinks;
      });
      
      setSelectedDrinks(current => [...current, newDrink]);
      setCustomName('');
      setCustomCategory('Coffee');
      setCustomCaffeine('');
      setCustomSize('');
      setIsCustomFormOpen(false);
    }
  };

  const handleRemoveCustomDrink = (drinkId: string) => {
    setAllDrinks(prevDrinks => {
        const updatedDrinks = prevDrinks.filter(d => d.id !== drinkId);
        const customDrinksToSave = updatedDrinks.filter(d => d.id.startsWith('custom-'));
        localStorage.setItem('customDrinks', JSON.stringify(customDrinksToSave.map(({ icon, ...rest }) => rest)));
        return updatedDrinks;
    });
    setSelectedDrinks(current => current.filter(d => d.id !== drinkId));
  };
  
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Caffeine Content Comparison</CardTitle>
        <CardDescription>
          Select drinks from the dropdown to compare their caffeine content in a standard serving, or add your own custom drink.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                aria-label="Select drinks to compare"
                className="w-full justify-between"
              >
                <span className="truncate">
                  {selectedDrinks.length > 0
                    ? selectedDrinks.map((d) => d.name).join(', ')
                    : 'Select drinks to compare...'}
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
              <Command>
                <CommandInput placeholder="Search for a drink..." />
                <CommandList>
                  <CommandEmpty>No drink found.</CommandEmpty>
                  <CommandGroup>
                    {allDrinks.map((drink) => (
                      <CommandItem
                        key={drink.id}
                        value={drink.name}
                        onSelect={() => handleSelect(drink)}
                        aria-selected={selectedDrinks.some(d => d.id === drink.id)}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            selectedDrinks.some((d) => d.id === drink.id)
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                          aria-hidden="true"
                        />
                        <div className="flex-1 flex justify-between items-center group/item">
                            <div className="flex items-center gap-2">
                                <drink.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                                <span>{drink.name}</span>
                            </div>
                            <div className="flex items-center">
                                <Badge variant="outline">{drink.caffeine}mg</Badge>
                                {drink.id.startsWith('custom-') && (
                                    <Button variant="ghost" size="icon" className="h-6 w-6 ml-1 opacity-0 group-hover/item:opacity-100" onClick={(e) => { e.stopPropagation(); handleRemoveCustomDrink(drink.id); }} aria-label={`Delete ${drink.name}`}>
                                        <Trash2 className="h-3 w-3 text-destructive" />
                                    </Button>
                                )}
                            </div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <Collapsible open={isCustomFormOpen} onOpenChange={setIsCustomFormOpen} className="mb-6">
            <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full text-sm text-muted-foreground">
                    <ChevronsUpDown className="h-4 w-4 mr-2"/>
                    {isCustomFormOpen ? 'Close' : 'Add a custom drink to compare'}
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-4 border rounded-md bg-muted/50">
                <div className="space-y-4">
                     <h3 className="font-semibold">Add Custom Drink</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                             <Label htmlFor="custom-name">Drink Name</Label>
                             <Input id="custom-name" value={customName} onChange={e => setCustomName(e.target.value)} placeholder="e.g., Local Cafe Latte" />
                        </div>
                        <div className="space-y-1">
                             <Label htmlFor="custom-category">Category</Label>
                             <Select value={customCategory} onValueChange={(value) => setCustomCategory(value as Category)}>
                                <SelectTrigger id="custom-category"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Coffee">Coffee</SelectItem>
                                    <SelectItem value="Tea">Tea</SelectItem>
                                    <SelectItem value="Soda">Soda</SelectItem>
                                    <SelectItem value="Energy Drink">Energy Drink</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                             </Select>
                        </div>
                         <div className="space-y-1">
                             <Label htmlFor="custom-caffeine">Caffeine (mg)</Label>
                             <Input id="custom-caffeine" type="number" value={customCaffeine} onChange={e => setCustomCaffeine(e.target.value)} placeholder="e.g., 150" />
                        </div>
                         <div className="space-y-1">
                             <Label htmlFor="custom-size">Serving Size (ml)</Label>
                             <Input id="custom-size" type="number" value={customSize} onChange={e => setCustomSize(e.target.value)} placeholder="e.g., 473" />
                        </div>
                     </div>
                     <Button onClick={handleAddCustomDrink} disabled={!customName || !customCaffeine || !customSize}>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add and Compare
                    </Button>
                </div>
            </CollapsibleContent>
        </Collapsible>


        {selectedDrinks.length > 0 ? (
          <ChartContainer config={chartConfig} className="h-[300px] w-full" aria-label="Caffeine comparison chart">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ left: 10, right: 30, top: 5, bottom: 5 }}
                aria-label={`Bar chart comparing caffeine content of ${selectedDrinks.length} drinks`}
              >
                <CartesianGrid horizontal={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--foreground))' }}
                  width={150} 
                  interval={0}
                />
                <XAxis type="number" dataKey="caffeine" domain={[0, 'dataMax + 20']} unit="mg" />
                <ChartTooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="caffeine" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-muted-foreground" role="alert">
            <p>Please select one or more drinks to see the comparison chart.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
