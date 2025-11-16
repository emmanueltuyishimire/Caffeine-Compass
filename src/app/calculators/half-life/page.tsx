
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { BrainCircuit, Moon, ZapOff } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import HalfLifeEstimator from '@/components/features/HalfLifeEstimator';


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
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://calculation.site/calculators/half-life"
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
            Caffeine Half-Life Calculator — How Long Does Caffeine Stay in Your System?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize how caffeine decays in your body over time. Use this tool to optimize your intake for peak performance and protect your sleep quality.
          </p>
        </header>

        <HalfLifeEstimator />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading" className="text-3xl font-bold">
              The Invisible Clock: Decoding Your Body's Response to Caffeine
            </h2>
            <p>
              You drink a coffee at 3 PM for a much-needed boost, but find yourself staring at the ceiling at 11 PM. Sound familiar? The culprit is often a simple misunderstanding of caffeine's lingering presence in your body. This Caffeine Half-Life Calculator is designed to demystify that process, giving you a clear, visual representation of how long caffeine really sticks around. It answers a crucial question: <strong>"How long will that coffee affect me?"</strong>
            </p>
            <p>
              Most people underestimate how long caffeine remains active in their bloodstream, leading to restless nights, mid-day crashes, or unexplained anxiety. The concept of "half-life" is the key to understanding this. It’s the time it takes for your body to eliminate half of the caffeine you consumed. While the average half-life is around 5 hours, this can vary dramatically based on your genetics, age, body weight, and even medications you take. This calculator puts that scientific principle into your hands, transforming abstract numbers into a personalized timeline of your body's caffeine clearance.
            </p>
            <p>
              Understanding your personal caffeine decay curve is a superpower. It allows you to strategically time your intake for maximum focus when you need it, and ensure it has faded by the time you want to rest. Whether you're trying to avoid disrupting your sleep, manage your tolerance, or simply gain more control over your energy levels, this tool is your first step. By visualizing the process, you can make smarter decisions that align with your health goals. To get a complete picture, you can also use our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> to track your total dose.
            </p>
          </section>

          <Separator />
          
          <section id="expert-insights" aria-labelledby="expert-insights-heading">
              <h2 id="expert-insights-heading" className="text-3xl font-bold">Quick Hacks & Expert Insights for Mastering Caffeine Timing</h2>
              <Card className="mb-4">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2"><BrainCircuit aria-hidden="true"/> Know Your "Quarter-Life"</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>While half-life is the time to 50% reduction, the "quarter-life" (time to 25% remaining) is often more relevant for sleep. If your half-life is 5 hours, your quarter-life is 10 hours. This means a 200 mg coffee at noon will still leave you with 50 mg of caffeine at 10 PM — enough to disrupt deep sleep for many people.</p>
                  </CardContent>
              </Card>
              <Card className="mb-4">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2"><Moon aria-hidden="true"/> Your Last Coffee Should Be 10 Hours Before Bed</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>For most people, a good rule of thumb is to set your caffeine curfew for 10 hours before your target bedtime. This is based on two average half-lives (5 hours x 2), which is enough time to clear 75% of the caffeine from your system. Use the calculator to confirm this for your specific metabolism.</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2"><ZapOff aria-hidden="true"/> Use Decaf to Your Advantage</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>Craving the taste or ritual of coffee in the afternoon? Switch to decaf. A cup of decaf has only 2-7 mg of caffeine, a negligible amount that won't show up on the decay curve in any meaningful way. It's a great way to satisfy the habit without sacrificing your sleep.</p>
                  </CardContent>
              </Card>
          </section>
          
          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-intake" className="hover:underline">Caffeine Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>First, find out how much caffeine you're consuming. Track your daily drinks to get a total dose.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-drink-comparison" className="hover:underline">Drink Comparison Tool</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Compare the caffeine content of your favorite beverages side-by-side.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-sensitivity-test" className="hover:underline">Caffeine Sensitivity Test</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Discover if you are a "fast" or "slow" metabolizer of caffeine to better understand your half-life.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
