
import CaffeineTimingOptimizer from '@/components/features/CaffeineTimingOptimizer';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

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
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Timing Optimizer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the scientifically-backed optimal time to consume caffeine to boost your productivity and focus for any task.
          </p>
        </header>

        <CaffeineTimingOptimizer />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
            <section>
                <h2 className="text-3xl font-bold">The Science of Perfect Timing</h2>
                <p>
                    Caffeine is a powerful tool for enhancing cognitive performance, but its effectiveness is all about timing. Consuming it too early can lead to a crash before your most important tasks, while consuming it too late can sabotage your sleep. This calculator helps you answer the crucial question: <strong>"When should I drink coffee for energy?"</strong> by using established scientific principles of caffeine metabolism.
                </p>
                <p>
                    The peak effect of caffeine typically occurs about 30 to 60 minutes after consumption. Our calculator works backward from your planned productivity window, suggesting a consumption time that ensures caffeine concentration in your bloodstream is highest when you need to be at your sharpest. This strategic approach helps you harness caffeine's benefits for focus and alertness precisely when it matters most.
                </p>
            </section>
        </div>
      </div>
    </>
  );
}
