
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { Lightbulb, Droplet } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import IntakeCalculator from '@/components/features/IntakeCalculator';


export const metadata: Metadata = {
  title:
    'Caffeine Intake Calculator — Accurate Caffeine Tracking Tool (Free & Science-Based)',
  description:
    'Use this free calculator to measure your caffeine intake, half-life, and safe limits. Backed by sleep science and metabolic research.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Intake Calculator — Accurate Caffeine Tracking Tool",
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
    "@id": "https://calculation.site/calculators/caffeine-intake"
  },
  "description": "Log your drinks to measure your total daily caffeine load and compare it to safe limits.",
  "articleBody": "Most people dramatically underestimate their daily caffeine intake. This overconsumption is often the hidden culprit behind anxiety, jitteriness, digestive issues, and, most commonly, poor sleep. This calculator removes the guesswork, giving you a personalized, data-driven look at your habits so you can optimize your intake."
};

export default function IntakeCalculatorPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Intake Calculator — Track Your Daily Consumption
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Log your drinks, measure your total daily caffeine load, and understand how it compares to safe limits for optimal health and performance.
          </p>
        </header>

        <IntakeCalculator />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading" className="text-3xl font-bold">
              Why Tracking Your Caffeine Is a Game-Changer
            </h2>
            <p>
              For millions, caffeine is the invisible engine of modern life. It kickstarts our mornings, powers through afternoon slumps, and fuels late-night study sessions. But how much is too much? And more importantly, how much are you <i>really</i> consuming? This Caffeine Intake Calculator is designed to answer that question with scientific precision. It’s more than just a counter; it’s a powerful tool to help you master your energy, sharpen your focus, and protect your sleep.
            </p>
            <p>
              Most people dramatically underestimate their daily caffeine intake. A morning coffee, a lunchtime soda, an afternoon tea, and a piece of dark chocolate can easily push you over the recommended daily limit of 400 mg without you even realizing it. This overconsumption is often the hidden culprit behind anxiety, jitteriness, digestive issues, and, most commonly, poor sleep. The problem is that caffeine’s effects are subtle but cumulative. While one cup might feel fine, the third or fourth can have consequences that linger long after you’ve finished the drink.
            </p>
            <p>
              The truth is, caffeine affects everyone differently. Your body weight, genetics, age, and even the time of day you consume it can alter its impact. That’s why a one-size-fits-all approach to caffeine management simply doesn’t work. Most people underestimate how long caffeine lingers in their bloodstream—leading to restless nights or mid-day crashes. This calculator removes the guesswork, giving you a personalized, data-driven look at your habits. By understanding your intake, you can begin to optimize it for your specific goals, whether that’s boosting productivity, enhancing athletic performance, or simply getting a better night’s sleep. If you're curious about how long that afternoon coffee will stick around, explore our <Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link> to see how timing affects your rest.
            </p>
          </section>

          <Separator />
          
          <section id="expert-insights" aria-labelledby="expert-insights-heading">
            <h2 id="expert-insights-heading" className="text-3xl font-bold">Quick Hacks & Expert Insights for Smart Caffeine Use</h2>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Droplet aria-hidden="true"/> Hydrate Alongside Caffeine</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Caffeine is a mild diuretic, which means it can cause you to lose fluid. To counteract this and reduce feelings of jitteriness, drink a glass of water for every caffeinated beverage you consume. Staying hydrated also supports stable energy levels.</p>
                </CardContent>
            </Card>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Delay Your First Coffee</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your body naturally produces a high level of cortisol (a wakefulness hormone) in the first 60-90 minutes after you wake up. Drinking coffee during this peak can blunt its effects and increase your tolerance. Try waiting 90 minutes after waking before your first cup. You’ll get a much more significant energy boost.</p>
                </CardContent>
            </Card>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Master the "Coffee Nap"</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>It sounds counterintuitive, but it’s scientifically validated. Drink a cup of coffee and immediately take a 20-minute nap. The caffeine takes about 20-30 minutes to kick in. During your nap, your brain clears out adenosine (the molecule that makes you feel sleepy). You’ll wake up just as the caffeine hits, feeling refreshed and doubly alert.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pair Caffeine with L-Theanine</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>L-Theanine is an amino acid found in green tea that promotes relaxation without drowsiness. When combined with caffeine, it can smooth out the "jitters" and enhance focus, creating a state of calm alertness. This is why many people report a more pleasant buzz from green tea compared to coffee.</p>
                </CardContent>
            </Card>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-half-life" className="hover:underline">Caffeine Half-Life Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Visualize how caffeine decays in your system over time to better understand its long-lasting effects.</p>
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
                          <CardTitle><Link href="/calculators/caffeine-withdrawal-tracker" className="hover:underline">Caffeine Withdrawal Tracker</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Create a plan to gradually reduce your caffeine intake to minimize withdrawal symptoms.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
