
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import CaffeineTimingOptimizerLoader from '@/components/features/loaders/CaffeineTimingOptimizerLoader';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock, Moon } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Caffeine Timing Optimizer — When to Drink Coffee for Energy & Focus',
  description: 'Use our free calculator to find the perfect time to drink coffee or other caffeinated beverages for maximum energy, focus, and productivity for work or study.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Caffeine Timing Optimizer",
  "description": "Find the scientifically-backed optimal time to consume caffeine to boost your productivity and focus for any task.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Enter Task Start Time",
      "text": "Input the time your period of desired focus begins."
    },
    {
      "@type": "HowToStep",
      "name": "Enter Bedtime",
      "text": "Input your usual bedtime to ensure the recommendation doesn't interfere with your sleep."
    },
    {
      "@type": "HowToStep",
      "name": "Select Sensitivity",
      "text": "Choose your caffeine sensitivity (Fast, Average, or Slow metabolizer) for a more accurate sleep cutoff calculation."
    },
    {
      "@type": "HowToStep",
      "name": "Get Optimal Time",
      "text": "The calculator provides the ideal time to consume your caffeine for peak effect during your task, with a warning if it's too close to your bedtime."
    }
  ]
};

export default function CaffeineTimingOptimizerPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Timing Optimizer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the scientifically-backed optimal time to consume caffeine to boost your productivity and focus for any task.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="sticky top-20">
              <CaffeineTimingOptimizerLoader />
            </div>
          </div>
           <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
            <section id="how-it-works" aria-labelledby="how-it-works-heading">
                <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
                <p>This calculator helps you pinpoint the perfect time to drink caffeine by working backward from your most important tasks while respecting your sleep schedule.</p>
                <ol>
                    <li><strong>Enter Task Time:</strong> Input the time your crucial focus period begins (e.g., a big meeting, study session).</li>
                    <li><strong>Enter Bedtime:</strong> Provide your usual bedtime so the calculator can protect your sleep.</li>
                    <li><strong>Select Sensitivity:</strong> Choose your caffeine sensitivity (or use our <Link href="/calculators/caffeine-sensitivity-test">Sensitivity Test</Link> to find out). This determines your "sleep cutoff" time—the point after which caffeine is likely to disrupt sleep.</li>
                    <li><strong>Get Your Optimal Time:</strong> The tool calculates the ideal consumption time, which is <strong>45 minutes before your task starts</strong>, ensuring caffeine levels are at their peak when you need them most.</li>
                    <li><strong>Review Sleep Warning:</strong> If the optimal time falls after your sleep cutoff, the calculator will warn you, suggesting a smaller dose or a caffeine-free alternative to avoid compromising your rest.</li>
                </ol>
            </section>
            
            <Separator />

            <section id="expert-insights" aria-labelledby="expert-insights-heading">
                <h2 id="expert-insights-heading" className="text-3xl font-bold">Expert Insights</h2>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Clock aria-hidden="true"/> The 45-Minute Rule</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Caffeine is fully absorbed into the bloodstream within about 45 minutes. By timing your intake 45 minutes before a task, you align peak caffeine concentration with your period of peak demand.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Moon aria-hidden="true"/> Sleep is Non-Negotiable</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Productivity gained from late-night caffeine is often lost to poor sleep. If a task requires late-night focus, consider a smaller dose (e.g., green tea) or non-caffeinated strategies like bright light and short breaks.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
