
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { Lightbulb } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import CaffeineWithdrawalTrackerLoader from '@/components/features/loaders/CaffeineWithdrawalTrackerLoader';


export const metadata: Metadata = {
  title:
    'Caffeine Withdrawal Tracker & Tapering Calculator | How to Quit Caffeine',
  description:
    'Use our free calculator to create a personalized caffeine tapering plan and minimize caffeine withdrawal symptoms. Learn how to quit caffeine safely and effectively.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Withdrawal Tracker & Tapering Calculator | How to Quit Caffeine",
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
    "@id": "https://calculation.site/calculators/caffeine-withdrawal-tracker"
  },
  "description": "Create a personalized tapering schedule to gradually reduce your caffeine intake, minimizing withdrawal symptoms.",
  "articleBody": "This tool helps you create a gradual, step-by-step reduction plan that weans your body off caffeine slowly. By reducing your intake in small, manageable increments, you give your brain time to readjust, dramatically reducing the severity of withdrawal symptoms like headaches, fatigue, and irritability."
};

export default function CaffeineWithdrawalTrackerPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Withdrawal Tracker & Tapering Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Create a personalized tapering schedule to gradually reduce your caffeine intake, minimize withdrawal symptoms, and successfully quit caffeine for good.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <div className="sticky top-20">
                    <CaffeineWithdrawalTrackerLoader />
                </div>
            </div>
            <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">

                <section id="how-it-works" aria-labelledby="how-it-works-heading">
                    <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
                    <p>This calculator creates a gradual, step-by-step tapering plan based on your current habits and desired timeline.</p>
                    <ol>
                        <li><strong>Calculate Your Starting Intake:</strong> First, add all the drinks you consume on a typical day to determine your starting daily caffeine total. Be thorough for an accurate plan.</li>
                        <li><strong>Set Your Timeline:</strong> Choose your desired "Tapering Duration" (e.g., 14 days) and how often you want to reduce your intake ("Reduce Every" X days). A longer, more gradual plan is often more comfortable.</li>
                        <li><strong>Pick a Start Date:</strong> Select the day you want to begin your tapering journey.</li>
                        <li><strong>Generate Your Plan:</strong> The calculator will produce a day-by-day schedule with a specific maximum caffeine target for each day. It also visualizes your reduction journey in a chart.</li>
                    </ol>
                    <p>By following the daily targets, you allow your brain to gradually adapt to lower caffeine levels, minimizing the shock that causes severe withdrawal symptoms.</p>
                </section>
                
                <Separator />
                
                <section id="science-of-tapering" aria-labelledby="science-of-tapering-heading">
                    <h2 id="science-of-tapering-heading" className="text-3xl font-bold">The Science of Tapering</h2>
                    <p>
                        Quitting "cold turkey" fails because your brain has become physically dependent on caffeine. It compensates for the constant presence of a stimulant by increasing the number of adenosine receptors (upregulation). When caffeine is suddenly removed, the brain is overwhelmed by adenosine's sleep-inducing effects, causing headaches, fatigue, and brain fog.
                    </p>
                    <p>
                        Tapering works by giving your brain time to reverse this process (downregulation) slowly. By gradually decreasing your intake, you avoid the sudden neurochemical shock, leading to a much smoother, more successful transition away from caffeine dependence.
                    </p>
                </section>

                <Separator />
                
                <section id="related-tools" aria-labelledby="related-tools-heading">
                    <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools</h2>
                    <div className="space-y-4">
                        <p><Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> - First, find out your current daily intake. This is the starting point for your tapering plan.</p>
                        <p><Link href="/calculators/caffeine-drinks-database">Caffeine in Drinks Database</Link> - Use this to find lower-caffeine alternatives to help you meet your daily tapering targets.</p>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </>
  );
}
