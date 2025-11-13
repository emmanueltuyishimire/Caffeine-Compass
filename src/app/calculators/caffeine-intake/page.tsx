
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { Droplet, Lightbulb, User } from 'lucide-react';
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
            Caffeine Intake Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Log your drinks, measure your total daily caffeine load, and understand how it compares to safe limits for optimal health and performance.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <div className="sticky top-20">
                    <IntakeCalculator />
                </div>
            </div>

            <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
                <section id="how-it-works" aria-labelledby="how-it-works-heading">
                    <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
                    <p>This tool makes it easy to track your caffeine consumption throughout the day.</p>
                    <ol>
                        <li><strong>Search & Add Drinks:</strong> Use the search bar to find a caffeinated beverage from our database of over 1,000 items. Click to add it to your daily log.</li>
                        <li><strong>Add Custom Items:</strong> If your drink isn't in the database, use the "Add Custom Drink" section to enter its name and caffeine content in milligrams (mg).</li>
                        <li><strong>Adjust Quantities:</strong> Use the number input next to each drink to specify how many servings you've had.</li>
                        <li><strong>Monitor Your Total:</strong> The calculator automatically sums up the total caffeine from all your logged drinks. The progress bar gives you a quick visual of your consumption relative to the FDA's recommended 400mg daily limit for healthy adults.</li>
                        <li><strong>Reset:</strong> Click the "Reset" button to clear your log and start a new day.</li>
                    </ol>
                </section>

                <Separator />
          
                <section id="expert-insights" aria-labelledby="expert-insights-heading">
                    <h2 id="expert-insights-heading" className="text-3xl font-bold">Quick Hacks & Expert Insights</h2>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Droplet aria-hidden="true"/> Hydrate Alongside Caffeine</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Caffeine is a mild diuretic. Drink a glass of water for every caffeinated beverage to stay hydrated and reduce side effects like jitteriness.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Lightbulb aria-hidden="true"/> Delay Your First Coffee</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Your body produces high cortisol levels upon waking. Wait 90 minutes for your first coffee to get a more significant energy boost and reduce tolerance buildup.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><User aria-hidden="true"/> Master the "Coffee Nap"</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Drink a coffee and immediately take a 20-minute nap. You’ll wake up as the caffeine kicks in, feeling remarkably refreshed and alert.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator />
                
                <section id="related-tools" aria-labelledby="related-tools-heading">
                    <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools</h2>
                    <div className="space-y-4">
                         <p><Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link> - Visualize how caffeine decays in your system.</p>
                         <p><Link href="/calculators/caffeine-drink-comparison">Drink Comparison Tool</Link> - Compare the caffeine content of your favorite beverages.</p>
                         <p><Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> - Create a plan to gradually reduce your intake.</p>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </>
  );
}
