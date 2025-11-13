
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartConfig = {
  caffeine: {
    label: 'Caffeine (mg)',
    color: 'hsl(var(--primary))',
  },
};

export default function HalfLifeEstimator() {
  const [caffeineAmount, setCaffeineAmount] = useState(100);
  const [halfLife, setHalfLife] = useState(5);
  
  const chartData = useMemo(() => {
    const data = [];
    if (caffeineAmount <= 0 || halfLife <= 0) {
      for (let hour = 0; hour <= 12; hour++) {
        data.push({ hour: `${hour}h`, caffeine: 0 });
      }
      return data;
    }
    for (let hour = 0; hour <= 12; hour++) {
      const remainingCaffeine = caffeineAmount * Math.pow(0.5, hour / halfLife);
      data.push({
        hour: `${hour}h`,
        caffeine: Math.round(remainingCaffeine),
      });
    }
    return data;
  }, [caffeineAmount, halfLife]);

  const caffeineAt8Hours = useMemo(() => {
    if (caffeineAmount <= 0 || halfLife <= 0) return 0;
    return Math.round(caffeineAmount * Math.pow(0.5, 8 / halfLife));
  }, [caffeineAmount, halfLife]);


  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Caffeine Half-Life Estimator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="caffeine-amount">Caffeine Consumed (mg)</Label>
            <Input
              id="caffeine-amount"
              type="number"
              value={caffeineAmount}
              onChange={(e) => setCaffeineAmount(Math.max(0, parseInt(e.target.value) || 0))}
              placeholder="e.g., 100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="half-life">Caffeine Half-Life (hours)</Label>
            <Input
              id="half-life"
              type="number"
              step="0.5"
              value={halfLife}
              onChange={(e) => setHalfLife(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
              placeholder="e.g., 5"
            />
          </div>
        </div>
        <div>
          <Label>Caffeine Decay Over 12 Hours</Label>
          <ChartContainer config={chartConfig} className="h-[250px] w-full mt-2" aria-label="Caffeine decay chart">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: -10 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} />
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
        </div>
      </CardContent>
       <CardFooter className="pt-6">
         <p className="text-sm text-muted-foreground" role="status">
           After 8 hours, you will still have approximately <span className="font-bold text-primary">{caffeineAt8Hours}mg</span> of caffeine in your system.
         </p>
       </CardFooter>
    </Card>
  );
}
