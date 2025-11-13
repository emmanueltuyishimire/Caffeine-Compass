
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { AlertTriangle, Shield, HeartPulse, Skull } from 'lucide-react';

const LBS_TO_KG = 0.453592;

const riskLevels = {
  noticeable: {
    mgPerKg: 3,
    title: 'Noticeable Effects',
    description: 'At this level, most people begin to feel pronounced effects like jitters, anxiety, and increased heart rate.',
    icon: HeartPulse,
    color: 'text-yellow-500',
  },
  mild: {
    mgPerKg: 15,
    title: 'Mild Toxicity',
    description: 'This dose can cause symptoms like tachycardia (fast heart rate), muscle twitching, and significant anxiety.',
    icon: AlertTriangle,
    color: 'text-orange-500',
  },
  severe: {
    mgPerKg: 150,
    title: 'Severe Toxicity / Potential Lethal Dose (LD50)',
    description: 'The median lethal dose (LD50). This is a medical emergency and can cause seizures and severe arrhythmia.',
    icon: Skull,
    color: 'text-red-500',
  },
};

export default function CaffeineOverdoseRiskCalculator() {
  const [weight, setWeight] = useState(70);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');

  const weightInKg = useMemo(() => {
    return unit === 'lbs' ? weight * LBS_TO_KG : weight;
  }, [weight, unit]);

  const calculations = useMemo(() => {
    if (isNaN(weightInKg) || weightInKg <= 0) {
      return { noticeable: 0, mild: 0, severe: 0 };
    }
    return {
      noticeable: Math.round(weightInKg * riskLevels.noticeable.mgPerKg),
      mild: Math.round(weightInKg * riskLevels.mild.mgPerKg),
      severe: Math.round(weightInKg * riskLevels.severe.mgPerKg),
    };
  }, [weightInKg]);

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Overdose Risk Estimator</CardTitle>
        <CardDescription>
          Enter your body weight to estimate caffeine levels associated with different levels of risk.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1 w-full sm:w-auto">
            <Label htmlFor="weight">Your Body Weight</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 1))}
              className="mt-1"
              aria-label="Body weight"
            />
          </div>
          <div className="flex items-center space-x-2 pt-4" role="radiogroup" aria-labelledby="unit-label">
            <span id="unit-label" className="sr-only">Weight unit</span>
            <Label htmlFor="unit-switch" className={unit === 'kg' ? 'text-primary' : ''}>kg</Label>
            <Switch
              id="unit-switch"
              checked={unit === 'lbs'}
              onCheckedChange={(checked) => setUnit(checked ? 'lbs' : 'kg')}
              role="switch"
              aria-checked={unit === 'lbs'}
              aria-label="Switch between kilograms and pounds"
            />
            <Label htmlFor="unit-switch" className={unit === 'lbs' ? 'text-primary' : ''}>lbs</Label>
          </div>
        </div>
        
        <div className="space-y-4">
            <h3 className="font-semibold">Estimated Risk Thresholds:</h3>
            <div className="grid grid-cols-1 gap-4" role="list">
                {Object.entries(riskLevels).map(([key, level]) => {
                    const { icon: Icon, title, description, color } = level;
                    const value = calculations[key as keyof typeof calculations];
                    return (
                        <div key={key} role="listitem" className="flex items-start gap-4 p-4 border rounded-lg bg-card-foreground/5">
                            <Icon className={`h-8 w-8 mt-1 shrink-0 ${color}`} aria-hidden="true" />
                            <div>
                                <h4 className={`font-bold ${color}`}>{title}</h4>
                                <p className="text-2xl font-headline font-bold">{value} mg</p>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

      </CardContent>
       <CardFooter className="pt-6 border-t">
         <div className="flex items-center gap-2 text-sm text-muted-foreground">
             <Shield className="h-4 w-4 text-green-500" aria-hidden="true" />
            <span>For reference, the FDA-recommended safe daily limit for healthy adults is <strong>400 mg</strong>.</span>
         </div>
       </CardFooter>
    </Card>
  );
}
