
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { drinks } from '@/lib/drinks';
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
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const chartConfig = {
  caffeine: {
    label: 'Caffeine (mg)',
    color: 'hsl(var(--primary))',
  },
};

export default function DrinkComparison() {
  const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>(() => {
    // Default to comparing a coffee, tea, and energy drink
    return [
      drinks.find((d) => d.id === 'd1')!, // Brewed Coffee
      drinks.find((d) => d.id === 'd4')!, // Black Tea
      drinks.find((d) => d.id === 'd38')!, // Red Bull
    ].filter(Boolean);
  });
  const [open, setOpen] = useState(false);

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
    setSelectedDrinks((currentSelected) =>
      currentSelected.some((d) => d.id === drink.id)
        ? currentSelected.filter((d) => d.id !== drink.id)
        : [...currentSelected, drink]
    );
    setOpen(false);
  };
  
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Caffeine Content Comparison</CardTitle>
        <CardDescription>
          Select drinks from the dropdown to compare their caffeine content in a standard serving.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
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
                    {drinks.map((drink) => (
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
                        <div className="flex-1 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <drink.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                                <span>{drink.name}</span>
                            </div>
                            <Badge variant="outline">{drink.caffeine}mg</Badge>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

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
