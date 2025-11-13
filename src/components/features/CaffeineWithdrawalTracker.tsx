
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, ChevronsUpDown, PlusCircle, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from '@/lib/utils';
import { addDays, format } from 'date-fns';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { drinks } from '@/lib/drinks';
import type { ConsumedDrink } from '@/lib/types';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

interface TaperStep {
  day: number;
  date: string;
  caffeine: number;
}

const chartConfig = {
  caffeine: {
    label: 'Caffeine (mg)',
    color: 'hsl(var(--primary))',
  },
};

export default function CaffeineWithdrawalTracker() {
  const [consumed, setConsumed] = useState<ConsumedDrink[]>([]);
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(14);
  const [frequency, setFrequency] = useState(2);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [schedule, setSchedule] = useState<TaperStep[]>([]);
  
  const intake = useMemo(() => {
    return consumed.reduce((total, drink) => total + drink.caffeine * drink.quantity, 0);
  }, [consumed]);

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


  const generateSchedule = () => {
    if (intake <= 0) {
      setSchedule([]);
      return;
    }
    const newSchedule: TaperStep[] = [];
    const reductionSteps = Math.floor(duration / frequency);
    const reductionAmount = intake / (reductionSteps + 1);

    let currentCaffeine = intake;

    for (let i = 1; i <= duration; i++) {
       if ((i - 1) % frequency === 0 && i > 1) {
           currentCaffeine -= reductionAmount;
       }
      newSchedule.push({
        day: i,
        date: format(addDays(startDate, i - 1), 'MMM d'),
        caffeine: Math.max(0, Math.round(currentCaffeine)),
      });
    }

    if(newSchedule.length > 0) {
        newSchedule[newSchedule.length - 1].caffeine = 0;
    }

    setSchedule(newSchedule);
  };

  return (
    <Card className="max-w-4xl mx-auto" aria-labelledby="withdrawal-tracker-title">
      <CardHeader>
        <CardTitle id="withdrawal-tracker-title">Caffeine Tapering Plan Generator</CardTitle>
        <CardDescription>
            Create a personalized schedule to gradually reduce your caffeine intake and minimize withdrawal symptoms.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <Label>What's your current daily intake?</Label>
            <p className="text-sm text-muted-foreground mb-2" id="intake-description">Add the drinks you consume on a typical day to calculate your starting intake.</p>
            <div className="space-y-2 p-4 border rounded-md" aria-describedby="intake-description">
                {consumed.length > 0 && (
                    <div className="space-y-2 mb-4">
                        {consumed.map((drink, index) => (
                        <div key={drink.id} role="listitem" className="flex items-center gap-2 text-sm">
                            <drink.icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                            <div className="flex-grow">
                            <p className="font-medium">{drink.name}</p>
                            </div>
                            <div className="flex items-center gap-2">
                            <Label htmlFor={`quantity-${index}`} className="sr-only">Quantity of {drink.name}</Label>
                            <Input
                                id={`quantity-${index}`}
                                type="number"
                                min="1"
                                value={drink.quantity}
                                onChange={(e) => updateQuantity(drink.id, parseInt(e.target.value, 10))}
                                className="w-14 h-8 text-center"
                                aria-label={`Quantity of ${drink.name}`}
                            />
                            <Button variant="ghost" size="icon" onClick={() => removeDrink(drink.id)} aria-label={`Remove ${drink.name}`}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                            </div>
                        </div>
                        ))}
                    </div>
                )}
                <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button id="drink-search" variant="outline" role="combobox" aria-expanded={open} className="w-full sm:w-[300px] justify-between">
                        Add a drink...
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
                 <div className="mt-4 p-4 border-t" role="status" aria-live="polite">
                    <p className="text-sm font-medium text-muted-foreground">Total Daily Intake:</p>
                    <p className="text-2xl font-bold text-primary">{intake} mg</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="taper-duration">Tapering Duration (Days)</Label>
             <Select onValueChange={(value) => setDuration(Number(value))} defaultValue={String(duration)}>
                <SelectTrigger id="taper-duration" aria-label="Select tapering duration">
                    <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="7">7 Days (Aggressive)</SelectItem>
                    <SelectItem value="14">14 Days (Recommended)</SelectItem>
                    <SelectItem value="21">21 Days (Gradual)</SelectItem>
                    <SelectItem value="28">28 Days (Very Gradual)</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reduction-frequency">Reduce Every (Days)</Label>
             <Select onValueChange={(value) => setFrequency(Number(value))} defaultValue={String(frequency)}>
                <SelectTrigger id="reduction-frequency" aria-label="Select reduction frequency">
                    <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1 Day</SelectItem>
                    <SelectItem value="2">2 Days</SelectItem>
                    <SelectItem value="3">3 Days</SelectItem>
                    <SelectItem value="4">4 Days</SelectItem>
                </SelectContent>
            </Select>
          </div>
           <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
             <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="start-date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                  aria-label="Select start date for tapering plan"
                >
                  <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
                  {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => setStartDate(date || new Date())}
                  initialFocus
                  aria-label="Tapering plan start date"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Button onClick={generateSchedule} className="w-full sm:w-auto" disabled={intake <= 0}>
          <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
          Generate Tapering Plan
        </Button>
      </CardContent>

      {schedule.length > 0 && (
        <CardFooter className="flex-col items-start gap-6 pt-6 border-t" role="region" aria-labelledby="tapering-schedule-title">
          <h3 id="tapering-schedule-title" className="text-xl font-semibold">Your Personalized Tapering Schedule</h3>
           <ChartContainer config={chartConfig} className="h-[250px] w-full" aria-label="Caffeine tapering schedule chart">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart accessibilityLayer data={schedule} margin={{ top: 20, right: 20, bottom: 20, left: -10 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis
                    domain={[0, 'dataMax + 20']}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    label={{ value: 'Caffeine (mg)', angle: -90, position: 'insideLeft', offset: 10, style: { textAnchor: 'middle' } }}
                 />
                 <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                 <Bar dataKey="caffeine" fill="var(--color-caffeine)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="w-full border rounded-md">
            <Table>
                <caption className="sr-only">Daily caffeine tapering schedule</caption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Day</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Max Caffeine (mg)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {schedule.map((step) => (
                    <TableRow key={step.day}>
                        <TableCell className="font-medium">{step.day}</TableCell>
                        <TableCell>{format(addDays(startDate, step.day - 1), 'MMM d, yyyy')}</TableCell>
                        <TableCell className="text-right font-bold text-primary">{step.caffeine} mg</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
          </div>
           <p className="text-xs text-muted-foreground pt-2" id="tapering-advice">
            Try to stay at or below the maximum caffeine amount each day. You can achieve these numbers by reducing serving sizes, switching to lower-caffeine drinks (like green tea), or mixing regular coffee with decaf.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
