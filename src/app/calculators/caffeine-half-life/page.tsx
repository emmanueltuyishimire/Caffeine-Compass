
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { BrainCircuit, Moon, ZapOff } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import HalfLifeEstimatorLoader from '@/components/features/loaders/HalfLifeEstimatorLoader';


export const metadata: Metadata = {
  title:
    'Caffeine Half-Life Calculator — Find Out How Long Caffeine Stays in Your System',
  description:
    'Use our free, science-based calculator to estimate caffeine’s half-life in your body. Learn how metabolism, genetics, and timing affect focus and sleep.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Half-Life Calculator — Find Out How Long Caffeine Stays in Your System",
  "author": {
    "@type": "Person",
    "name": "T. Emmanuel"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Caffeine Compass",
    "logo": {
      "@type": "ImageObject",
      "url": "https://calculation.site/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://calculation.site/calculators/caffeine-half-life"
  },
  "description": "Visualize how caffeine decays in your body over time to optimize intake and protect sleep quality.",
  "articleBody": "This tool gives you a clear, visual representation of how long caffeine really sticks around. It answers a crucial question: 'How long will that coffee affect me?' by using a standard pharmacokinetic model to estimate caffeine clearance."
};

export default function HalfLifeCalculatorPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Half-Life Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize how caffeine decays in your body. Use this tool to optimize your intake for peak performance and protect your sleep quality.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <div className="sticky top-20">
                    <HalfLifeEstimatorLoader />
                </div>
            </div>
            <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
                <section id="how-it-works" aria-labelledby="how-it-works-heading">
                    <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
                    <p>This calculator models how caffeine is eliminated from your body over a 12-hour period. It's based on the pharmacological concept of "half-life."</p>
                    <ol>
                        <li><strong>Enter Dose:</strong> Input the amount of caffeine you consumed in milligrams (mg). If you don't know the exact amount, find it in our <Link href="/calculators/caffeine-drinks-database">Drinks Database</Link>.</li>
                        <li><strong>Enter Half-Life:</strong> Input your estimated caffeine half-life in hours. The average for a healthy adult is 5 hours. If you're sensitive to caffeine, you might be a "slow metabolizer" (e.g., 6-8 hours). If you have high tolerance, you could be a "fast metabolizer" (e.g., 3-4 hours). Our <Link href="/calculators/caffeine-sensitivity-test">Sensitivity Test</Link> can help you estimate this.</li>
                        <li><strong>Analyze the Chart:</strong> The calculator generates a bar chart showing the estimated amount of caffeine remaining in your system for each hour after consumption. This visual decay curve helps you understand the long-lasting impact of caffeine.</li>
                        <li><strong>Check Your Bedtime:</strong> Use the chart to see how much caffeine will still be active when you go to sleep. For best results, this number should be as low as possible (ideally under 20-30mg).</li>
                    </ol>
                </section>

                <Separator />

                <section id="expert-insights" aria-labelledby="expert-insights-heading">
                    <h2 id="expert-insights-heading" className="text-3xl font-bold">Quick Hacks & Expert Insights</h2>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><BrainCircuit aria-hidden="true"/> Know Your "Quarter-Life"</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>For sleep, the "quarter-life" (time to 25% remaining) is often more relevant. For a 5-hour half-life, that's 10 hours. A 200 mg coffee at noon will leave 50 mg at 10 PM—enough to disrupt deep sleep.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Moon aria-hidden="true"/> 10-Hour Rule</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>For most people, a good rule of thumb is to set your caffeine curfew for 10 hours before your target bedtime. This allows your body to clear 75% of the caffeine.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><ZapOff aria-hidden="true"/> Use Decaf to Your Advantage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Craving the ritual of an afternoon coffee? Switch to decaf. It has a negligible amount of caffeine and won't sabotage your sleep.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                
                <Separator />
                
                <section id="related-tools" aria-labelledby="related-tools-heading">
                    <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools</h2>
                    <div className="space-y-4">
                         <p><Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> - First, find out how much caffeine you're consuming.</p>
                         <p><Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> - Discover if you are a "fast" or "slow" metabolizer.</p>
                         <p><Link href="/calculators/caffeine-drink-comparison">Drink Comparison Tool</Link> - Compare the caffeine content of your favorite beverages.</p>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </>
  );
}
