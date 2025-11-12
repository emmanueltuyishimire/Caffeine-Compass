'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

// Assuming an average half-life of 5 hours
const CAFFEINE_HALF_LIFE_HOURS = 5;

export default function SleepImpactPredictor() {
  const [caffeineAmount, setCaffeineAmount] = useState(100);
  const [consumptionTime, setConsumptionTime] = useState('14:00');
  const [bedtime, setBedtime] = useState('22:00');
  const [result, setResult] = useState<{ remaining: number; risk: 'Low' | 'Medium' | 'High' } | null>(null);

  const timeToHours = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
  };

  const calculateImpact = () => {
    const consumptionH = timeToHours(consumptionTime);
    let bedtimeH = timeToHours(bedtime);

    if (bedtimeH < consumptionH) {
      bedtimeH += 24; // Adjust for next day bedtime
    }

    const hoursUntilBedtime = bedtimeH - consumptionH;

    if (hoursUntilBedtime < 0) {
        setResult(null); // Or show an error
        return;
    }

    const remainingCaffeine = caffeineAmount * Math.pow(0.5, hoursUntilBedtime / CAFFEINE_HALF_LIFE_HOURS);
    
    let risk: 'Low' | 'Medium' | 'High' = 'Low';
    if (remainingCaffeine > 50) {
      risk = 'High';
    } else if (remainingCaffeine > 20) {
      risk = 'Medium';
    }
    
    setResult({ remaining: Math.round(remainingCaffeine), risk });
  };
  
  const riskConfig = {
      Low: {
        badge: 'success' as const,
        icon: CheckCircle,
        text: 'Sleep disruption risk is low. Enjoy your rest!',
      },
      Medium: {
        badge: 'secondary' as const,
        icon: AlertCircle,
        text: 'Potential for light sleep disruption. You might take longer to fall asleep.',
      },
      High: {
        badge: 'destructive' as const,
        icon: AlertCircle,
        text: 'High risk of sleep disruption. May reduce deep sleep and overall sleep quality.',
      },
  };


  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Sleep Impact Predictor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="caffeine-amount-sleep">Caffeine Consumed (mg)</Label>
            <Input
              id="caffeine-amount-sleep"
              type="number"
              value={caffeineAmount}
              onChange={(e) => setCaffeineAmount(Math.max(0, parseInt(e.target.value) || 0))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="consumption-time">Time of Consumption</Label>
            <Input
              id="consumption-time"
              type="time"
              value={consumptionTime}
              onChange={(e) => setConsumptionTime(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bedtime">Target Bedtime</Label>
            <Input
              id="bedtime"
              type="time"
              value={bedtime}
              onChange={(e) => setBedtime(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={calculateImpact} className="w-full sm:w-auto">
            <Clock className="mr-2" />
            Calculate Sleep Impact
        </Button>
      </CardContent>

      {result && (
        <CardFooter className="flex-col items-start gap-4 pt-6 border-t">
          <h3 className="font-semibold">Results:</h3>
          <div className="w-full p-4 bg-muted/50 rounded-lg space-y-3">
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Caffeine at bedtime:</span>
                <span className="font-bold text-2xl text-primary">{result.remaining} mg</span>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Sleep Disruption Risk:</span>
                <Badge variant={riskConfig[result.risk].badge}>{result.risk}</Badge>
            </div>
             <div className="flex items-start gap-2 pt-2 text-sm">
                <riskConfig[result.risk].icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <span>{riskConfig[result.risk].text}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            This calculation assumes an average caffeine half-life of 5 hours. Individual results may vary.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
