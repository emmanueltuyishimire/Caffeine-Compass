
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays } from 'lucide-react';
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
  const [intake, setIntake] = useState(300);
  const [duration, setDuration] = useState(14);
  const [frequency, setFrequency] = useState(2);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [schedule, setSchedule] = useState<TaperStep[]>([]);
  
  const generateSchedule = () => {
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
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Caffeine Tapering Plan Generator</CardTitle>
        <CardDescription>
            Create a personalized schedule to gradually reduce your caffeine intake and minimize withdrawal symptoms.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="current-intake">Current Daily Intake (mg)</Label>
            <Input
              id="current-intake"
              type="number"
              value={intake}
              onChange={(e) => setIntake(parseInt(e.target.value) || 0)}
              placeholder="e.g., 300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="taper-duration">Tapering Duration (Days)</Label>
             <Select onValueChange={(value) => setDuration(Number(value))} defaultValue={String(duration)}>
                <SelectTrigger id="taper-duration">
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
                <SelectTrigger id="reduction-frequency">
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
        <Button onClick={generateSchedule} className="w-full sm:w-auto">
          <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
          Generate Tapering Plan
        </Button>
      </CardContent>

      {schedule.length > 0 && (
        <CardFooter className="flex-col items-start gap-6 pt-6 border-t">
          <h3 className="text-xl font-semibold">Your Personalized Tapering Schedule</h3>
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
           <p className="text-xs text-muted-foreground pt-2">
            Try to stay at or below the maximum caffeine amount each day. You can achieve these numbers by reducing serving sizes, switching to lower-caffeine drinks (like green tea), or mixing regular coffee with decaf.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
