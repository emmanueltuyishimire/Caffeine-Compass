
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import PregnancySafeLimitCalculatorLoader from '@/components/features/loaders/PregnancySafeLimitCalculatorLoader';


export const metadata: Metadata = {
  title: 'Pregnancy Caffeine Calculator — Track Your Daily Intake Safely',
  description: 'Track your daily caffeine intake against the recommended 200mg limit for pregnancy. Make informed choices for a healthy pregnancy with our free, science-based tool.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pregnancy Caffeine Calculator — Track Your Daily Intake Safely",
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
    "@id": "https://calculation.site/calculators/pregnancy-caffeine-safe-limit"
  },
  "description": "Track your daily caffeine intake to ensure you're staying within the recommended safe limits for a healthy pregnancy.",
  "articleBody": "Major health bodies recommend limiting caffeine intake to less than 200 milligrams (mg) per day during pregnancy. This calculator provides a clear, visual way to log your drinks and see your total consumption in real-time, helping you manage it wisely for the health of both you and your baby."
};

export default function PregnancySafeLimitPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Pregnancy Caffeine Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your daily caffeine intake to ensure you're staying within the recommended safe limits for a healthy pregnancy.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <div className="sticky top-20">
                    <PregnancySafeLimitCalculatorLoader />
                </div>
            </div>

            <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
                 <section id="how-it-works" aria-labelledby="how-it-works-heading">
                    <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
                    <p>This tool helps you monitor your daily caffeine intake against the 200mg recommended limit for pregnancy.</p>
                    <ol>
                        <li><strong>Log Your Drinks:</strong> Use the search bar to find and add any caffeinated items you consume, including coffee, tea, soda, or chocolate.</li>
                        <li><strong>Add Custom Items:</strong> If an item isn't in our database, you can add it manually with its name and caffeine content.</li>
                        <li><strong>Adjust Quantity:</strong> Specify the number of servings for each item.</li>
                        <li><strong>Monitor the Limit:</strong> The calculator sums your total intake and displays it on a progress bar. The bar and status message will clearly indicate if you are within or over the 200mg daily guideline recommended by ACOG and other health organizations.</li>
                    </ol>
                </section>

                <Separator />
                
                <section id="introduction" aria-labelledby="introduction-heading">
                    <h2 id="introduction-heading" className="text-3xl font-bold">
                        Navigating Caffeine with Confidence
                    </h2>
                    <p>
                        For pregnant women, tracking caffeine is crucial. Major health bodies recommend limiting intake to <strong>less than 200 milligrams (mg) per day</strong>. This is because caffeine crosses the placenta, and a developing baby cannot process it effectively.
                    </p>
                    <p>
                        This calculator provides a clear, visual way to log your drinks and see your total consumption in real-time. It helps you make mindful choices so you can enjoy a comforting cup of tea or a small coffee without stress.
                    </p>
                </section>

                <Separator />
                
                <section id="related-tools" aria-labelledby="related-tools-heading">
                    <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools</h2>
                    <div className="space-y-4">
                        <p><Link href="/calculators/caffeine-drinks-database">Caffeine in Drinks Database</Link> - Search our extensive database to find the caffeine content of your favorite beverages.</p>
                        <p><Link href="/calculators/caffeine-withdrawal-tracker">Withdrawal Tracker</Link> - If you're looking to reduce your intake, this tool helps you create a tapering plan.</p>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </>
  );
}
