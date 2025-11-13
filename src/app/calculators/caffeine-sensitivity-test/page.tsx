
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import CaffeineSensitivityTest from '@/components/features/CaffeineSensitivityTest';

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
            Discover your genetic predisposition to caffeine. This test helps you understand your caffeine tolerance and tailor your intake for optimal energy and sleep.
          </p>
        </header>

        <CaffeineSensitivityTest />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading" className="text-3xl font-bold">
              Unlock Your Genetic Code: Why Caffeine Affects Everyone Differently
            </h2>
            <p>
              Have you ever wondered why your friend can have an espresso after dinner and sleep like a baby, while your own afternoon latte leaves you wired until midnight? The answer lies in your genes. Specifically, it comes down to how efficiently your body metabolizes caffeine, a trait largely determined by the <strong>CYP1A2 gene</strong>. This Caffeine Sensitivity Test is designed to give you powerful insights into your unique genetic makeup without needing an expensive DNA test.
            </p>
            <p>
              Most people navigate their caffeine consumption through trial and error, often enduring jitters, anxiety, or sleepless nights in the process. This tool solves that problem by providing a structured way to assess your body’s response to caffeine. By answering a series of targeted questions, you can identify whether you are a <strong>fast metabolizer</strong>, a <strong>slow metabolizer</strong>, or somewhere in between.
            </p>
            <p>
              Understanding your caffeine sensitivity is a game-changer. It empowers you to make informed decisions about how much caffeine to consume and, just as importantly, when to consume it. For a slow metabolizer, a morning coffee might be the limit, while a fast metabolizer has more flexibility. This knowledge allows you to harness the benefits of caffeine—like improved focus and alertness—while minimizing its downsides. It’s the key to optimizing your energy, protecting your sleep, and feeling your best. This test is the perfect starting point before diving into our other tools like the <Link href="/calculators/half-life">Half-Life Calculator</Link>.
            </p>
          </section>

          <Separator />

          <section id="how-it-works" aria-labelledby="how-it-works-heading">
              <h2 id="how-it-works-heading" className="text-3xl font-bold">How This Test Works: The Science of Self-Assessment</h2>
              <p>
                  While a genetic test provides a definitive answer, a carefully designed questionnaire can offer a highly accurate estimate of your caffeine metabolism speed. This test works by correlating your subjective experiences with known physiological markers of caffeine sensitivity.
              </p>
             
              <h3 className="text-2xl font-semibold">The Scientific Background: The CYP1A2 "Coffee Gene"</h3>
              <p>
                  The star of this show is an enzyme produced in your liver called <strong>Cytochrome P450 1A2</strong>, or <strong>CYP1A2</strong>. This enzyme is responsible for breaking down about 95% of the caffeine you consume. The instructions for building this enzyme are found in your CYP1A2 gene.
              </p>
              <p>
                  Slight variations (called polymorphisms) in this gene determine how efficient your CYP1A2 enzyme is.
              </p>
              <ul>
                  <li>People with the <strong>AA variant</strong> of the gene are "fast metabolizers." Their liver produces a highly efficient version of the enzyme that breaks down caffeine rapidly. This is about 40% of the population.</li>
                  <li>People with either the <strong>AC or CC variant</strong> are "slow metabolizers." Their enzyme is less efficient, causing caffeine to linger in their bloodstream for much longer. This group makes up the remaining 60% of the population.</li>
              </ul>
              <p>
                  A slow metabolizer might take twice as long to clear the same amount of caffeine as a fast metabolizer. This means a 100 mg coffee could feel like 200 mg to them, and its effects could last 8-10 hours instead of 4-5. This test helps you determine which group you likely belong to by asking questions whose answers reflect these different clearance rates.
              </p>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Next Steps: Use Your Results</h2>
              <p>Now that you have an estimate of your sensitivity, use our other tools to put that knowledge into action.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Link href="/calculators/half-life" className="block group">
                          <p>If you're a slow metabolizer, select the "Slow" setting to see how long caffeine really stays in your system. The results may surprise you.</p>
                      </Link>
                      <Link href="/calculators/intake" className="block group">
                          <p>Track your total daily intake to make sure you're staying within the recommended limits for your sensitivity level.</p>
                      </Link>
                      <Link href="/calculators/drink-comparison" className="block group">
                          <p>Compare the caffeine content of your favorite beverages side-by-side.</p>
                      </Link>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
