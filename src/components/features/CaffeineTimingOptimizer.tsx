'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Coffee, Clock, Bed } from 'lucide-react';
import { add, format, sub } from 'date-fns';

const PEAK_EFFECT_TIME = 45; // minutes until peak effect
const HALF_LIFE_MAP = {
  fast: 4,
  average: 5,
  slow: 6,
};

export default function CaffeineTimingOptimizer() {
  const [taskStartTime, setTaskStartTime] = useState('09:00');
  const [bedtime, setBedtime] = useState('23:00');
  const [metabolism, setMetabolism] = useState('average');
  const [result, setResult] = useState<string | null>(null);

  const calculateOptimalTime = () => {
    const [startHour, startMinute] = taskStartTime.split(':').map(Number);
    const taskDate = new Date();
    taskDate.setHours(startHour, startMinute, 0, 0);

    const optimalTime = sub(taskDate, { minutes: PEAK_EFFECT_TIME });
    
    const [bedHour, bedMinute] = bedtime.split(':').map(Number);
    const bedDate = new Date();
    bedDate.setHours(bedHour, bedMinute, 0, 0);
    if(bedDate < taskDate) {
        bedDate.setDate(bedDate.getDate() + 1);
    }
    
    const halfLife = HALF_LIFE_MAP[metabolism as keyof typeof HALF_LIFE_MAP];
    const sleepCutoff = sub(bedDate, {hours: halfLife * 2}); // 2 half-lives for 75% clearance

    if (optimalTime > sleepCutoff) {
       setResult(
         `Warning: The ideal time to drink caffeine for your task is ${format(
           optimalTime,
           'p'
         )}, but this is after your recommended sleep cutoff time of ${format(sleepCutoff, 'p')}. Consider a smaller dose or a caffeine-free alternative to protect your sleep.`
       );
    } else {
       setResult(`For peak focus, you should consume your caffeine at approximately ${format(optimalTime, 'p')}. This allows it to reach peak effect right as your task begins.`);
    }
  };


  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Caffeine Timing Optimizer</CardTitle>
        <CardDescription>
          Find the perfect time to drink caffeine for maximum productivity.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="task-time" className='flex items-center gap-2'><Clock/> When does your task start?</Label>
                <Input
                id="task-time"
                type="time"
                value={taskStartTime}
                onChange={(e) => setTaskStartTime(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="bedtime" className='flex items-center gap-2'><Bed/> What time do you go to bed?</Label>
                <Input
                id="bedtime"
                type="time"
                value={bedtime}
                onChange={(e) => setBedtime(e.target.value)}
                />
            </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="metabolism">What is your caffeine sensitivity?</Label>
          <Select onValueChange={setMetabolism} defaultValue={metabolism}>
            <SelectTrigger id="metabolism">
              <SelectValue placeholder="Select your metabolism speed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fast">Low Sensitivity (Fast Metabolizer)</SelectItem>
              <SelectItem value="average">Average Sensitivity (Average Metabolizer)</SelectItem>
              <SelectItem value="slow">High Sensitivity (Slow Metabolizer)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={calculateOptimalTime} className="w-full">
            <Coffee className="mr-2 h-4 w-4" /> Calculate Optimal Time
        </Button>
      </CardContent>

      {result && (
        <CardFooter>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Recommendation</AlertTitle>
            <AlertDescription>{result}</AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </Card>
  );
}
