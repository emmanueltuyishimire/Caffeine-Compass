
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import CaffeineSensitivityTestLoader from '@/components/features/loaders/CaffeineSensitivityTestLoader';

export const metadata: Metadata = {
  title:
    'Caffeine Sensitivity Test — Discover Your Genetic Caffeine Tolerance',
  description:
    'Are you a fast or slow caffeine metabolizer? Take our free, science-based test to discover your caffeine sensitivity, understand your genetics, and optimize your coffee intake.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Sensitivity Test — Discover Your Genetic Caffeine Tolerance",
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
    "@id": "https://calculation.site/calculators/caffeine-sensitivity-test"
  },
  "description": "Discover your genetic predisposition to caffeine by answering a series of questions about your body's response.",
  "articleBody": "This test helps you understand your caffeine tolerance and tailor your intake for optimal energy and sleep by assessing whether you are a fast, average, or slow metabolizer based on your body's reaction to caffeine."
};

export default function CaffeineSensitivityTestPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Sensitivity Test: Are You a Fast or Slow Metabolizer?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your genetic predisposition to caffeine. This test helps you understand your tolerance and tailor your intake for optimal energy and sleep.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="sticky top-20">
              <CaffeineSensitivityTestLoader />
            </div>
          </div>
          <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
            <section id="how-it-works" aria-labelledby="how-it-works-heading">
                <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
                <p>This test provides a highly accurate estimate of your caffeine metabolism speed by correlating your answers with known physiological markers of sensitivity.</p>
                <ol>
                    <li><strong>Answer Questions:</strong> Progress through a series of multiple-choice questions about your typical reactions to caffeine.</li>
                    <li><strong>Receive Your Score:</strong> Each answer has a point value. The test automatically calculates your total score.</li>
                    <li><strong>Get Your Result:</strong> Based on your final score, you'll be categorized as a likely "Fast," "Average," or "Slow" metabolizer. The result includes a detailed description of what that means for you.</li>
                </ol>
                <p>This process gives you a practical, evidence-based understanding of your genetic predisposition without needing a DNA test.</p>
            </section>
            
            <Separator />

            <section id="science" aria-labelledby="science-heading">
              <h2 id="science-heading" className="text-3xl font-bold">The Science of Self-Assessment</h2>
              <p>
                  Your sensitivity is largely determined by the <strong>CYP1A2 gene</strong>, which controls the liver enzyme responsible for breaking down 95% of the caffeine you consume.
              </p>
              <ul>
                  <li><strong>Fast Metabolizers</strong> have a gene variant that clears caffeine rapidly.</li>
                  <li><strong>Slow Metabolizers</strong> have a less efficient enzyme, causing caffeine to linger much longer in their system.</li>
              </ul>
              <p>This test helps you determine which group you likely belong to by asking questions whose answers reflect these different clearance rates.</p>
            </section>

            <Separator />
            
            <section id="related-tools" aria-labelledby="related-tools-heading">
                <h2 id="related-tools-heading" className="text-3xl font-bold">Next Steps: Use Your Results</h2>
                <p>Now that you have an estimate of your sensitivity, use our other tools to put that knowledge into action.</p>
                <div className="space-y-4">
                    <p><Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link> - If you're a slow metabolizer, select the "Slow" setting to see how long caffeine really stays in your system. The results may surprise you.</p>
                    <p><Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> - Track your total daily intake to make sure you're staying within the recommended limits for your sensitivity level.</p>
                </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
