
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import dynamic from 'next/dynamic';

const CaffeineSensitivityTest = dynamic(() => import('@/components/features/CaffeineSensitivityTest'), {
  ssr: false,
  loading: () => <div className="max-w-2xl mx-auto h-[480px] bg-muted rounded-lg animate-pulse" />,
});


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

              <h3 className="text-2xl font-semibold">The Scoring System Explained</h3>
              <p>
                  Each question in the test explores a different facet of your relationship with caffeine. Your answers are assigned a point value, and your total score places you into one of three categories:
              </p>
              <ul>
                  <li><strong>Fast Metabolizer (High Tolerance):</strong> You process caffeine quickly. You likely experience a pleasant buzz but few negative side effects, and caffeine's effects wear off relatively fast.</li>
                  <li><strong>Average Metabolizer (Moderate Tolerance):</strong> You fall in the middle. You can enjoy caffeine in moderation but need to be mindful of your dosage and timing to avoid sleep disruption.</li>
                  <li><strong>Slow Metabolizer (Low Tolerance/High Sensitivity):</strong> Your body clears caffeine very slowly. You are prone to jitters, anxiety, and sleep problems, even from small amounts consumed early in the day.</li>
              </ul>
              <p>
                  This self-assessment is based on common symptoms and timelines associated with different metabolic rates, providing a practical, real-world indication of your genetic predisposition.
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

          <section id="interpreting-results" aria-labelledby="interpreting-results-heading">
              <h2 id="interpreting-results-heading" className="text-3xl font-bold">Interpreting Your Results: What Your Sensitivity Level Means</h2>
              <Card className="mb-6">
                  <CardHeader>
                      <CardTitle>Fast Metabolizer (High Tolerance)</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p><strong>Profile:</strong> You won the genetic lottery for caffeine consumption. Your body processes caffeine efficiently, meaning you get the alertness boost without many of the negative side effects. The effects of a morning coffee likely wear off by early afternoon.</p>
                      <p><strong>Recommendations:</strong></p>
                      <ul>
                          <li>You can likely handle caffeine later in the day than others, but it's still wise to set a curfew. </li>
                          <li>You may be less susceptible to caffeine's cardiovascular risks, but the 400 mg daily limit is still a good guideline to follow.</li>
                          <li>Be aware that you might not feel the "buzz" as strongly, which can lead to overconsumption. Track your total intake with our <Link href="/calculators/intake">Intake Calculator</Link>.</li>
                      </ul>
                  </CardContent>
              </Card>
              <Card className="mb-6">
                  <CardHeader>
                      <CardTitle>Average Metabolizer (Moderate Tolerance)</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p><strong>Profile:</strong> You represent the typical response to caffeine. You enjoy the benefits of alertness but need to be mindful of your intake. An afternoon coffee could be a gamble for your sleep.</p>
                      <p><strong>Recommendations:</strong></p>
                      <ul>
                          <li>A "no caffeine after 2 PM" rule is an excellent starting point for you.</li>
                          <li>Pay close attention to dose. One or two cups in the morning may be your sweet spot.</li>
                          <li>Use the <Link href="/calculators/half-life">Half-Life Calculator</Link> set to a 5-hour half-life to accurately model how caffeine decays in your system.</li>
                      </ul>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle>Slow Metabolizer (High Sensitivity)</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p><strong>Profile:</strong> You are highly sensitive to caffeine. Small amounts can feel potent, and the effects last a very long time. You are more prone to caffeine-induced anxiety, jitters, and significant sleep disruption.</p>
                      <p><strong>Recommendations:</strong></p>
                      <ul>
                          <li>Consider limiting caffeine to one small serving in the very early morning (e.g., before 10 AM).</li>
                          <li>Be cautious with high-caffeine drinks like cold brew or large energy drinks. They can easily overwhelm your system.</li>
                          <li>Explore caffeine-free alternatives like herbal tea or decaf coffee to satisfy the ritual without the side effects.</li>
                          <li>A half-life of 6-8 hours is a more accurate model for you. Use this setting in the <Link href="/calculators/half-life">Half-Life Calculator</Link> to see just how long caffeine lingers.</li>
                          <li>If you decide to quit, a gradual plan from our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> is essential to avoid severe withdrawal.</li>
                      </ul>
                  </CardContent>
              </Card>
          </section>

          <Separator />

          <section id="terminologies" aria-labelledby="terminologies-heading">
              <h2 id="terminologies-heading" className="text-3xl font-bold">Key Terminologies & Concepts</h2>
              <ul className="space-y-4">
                  <li>
                      <h3 className="text-xl font-semibold">Caffeine Sensitivity</h3>
                      <p>The degree to which an individual experiences the effects of caffeine. High sensitivity (low tolerance) means strong effects from small doses, while low sensitivity (high tolerance) means weaker effects.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Caffeine Metabolism</h3>
                      <p>The process by which the body, primarily the liver, breaks down caffeine into its metabolites for elimination. The speed of this process determines how long caffeine's effects last.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">CYP1A2 Gene</h3>
                      <p>Known as the "coffee gene," it provides the instructions for building the CYP1A2 enzyme, which is responsible for metabolizing about 95% of caffeine. Variations in this gene determine if you are a fast or slow metabolizer.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Fast Metabolizer</h3>
                      <p>An individual whose body processes and eliminates caffeine quickly due to a highly efficient CYP1A2 enzyme. They generally have a higher tolerance for caffeine.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Slow Metabolizer</h3>
                      <p>An individual whose body processes caffeine slowly due to a less efficient CYP1A2 enzyme. They are more sensitive to caffeine's effects, which last much longer.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Polymorphism</h3>
                      <p>A slight variation in a specific gene's DNA sequence that is common in the population. The different variants of the CYP1A2 gene are examples of polymorphisms.</p>
                  </li>
              </ul>
          </section>

          <Separator />

          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How accurate is this test compared to a DNA test?</AccordionTrigger>
                <AccordionContent>
                  While a DNA test provides a definitive genetic result, this symptomatic questionnaire is a highly effective and accessible proxy. It assesses how your body <strong>actually</strong> responds to caffeine in the real world, which is the most practical measure of your sensitivity. For most people, the results of this test will align closely with their genetic makeup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can my caffeine sensitivity change over time?</AccordionTrigger>
                <AccordionContent>
                  Your underlying genetics (your CYP1A2 variant) do not change. However, your perceived sensitivity can be influenced by other factors. For example, pregnancy dramatically slows caffeine metabolism. Certain medications can inhibit the CYP1A2 enzyme, and liver health also plays a role. Your tolerance can also change if you increase or decrease your regular intake.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it better to be a fast or slow metabolizer?</AccordionTrigger>
                <AccordionContent>
                  Neither is inherently "better," but they have different implications. Fast metabolizers can enjoy caffeine with fewer side effects. However, some research suggests that for slow metabolizers, high caffeine intake may be linked to a higher risk of hypertension and heart attack. Knowing your type allows you to make health choices that are right for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>I'm a slow metabolizer. Does this mean I have to quit caffeine?</AccordionTrigger>
                <AccordionContent>
                  Not necessarily. It just means you need to be much more strategic. You might find that a single, small coffee in the morning is perfectly fine. The goal is knowledge, not prohibition. Use this information to find a routine that works for your body.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does this test work for tea, energy drinks, and other sources?</AccordionTrigger>
                <AccordionContent>
                  Yes. The caffeine molecule is identical regardless of its source. The questions are about your body's reaction to the chemical itself, so it applies whether you're drinking coffee, tea, soda, or energy drinks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Why do I get headaches when I skip coffee?</AccordionTrigger>
                <AccordionContent>
                  This is a classic sign of caffeine withdrawal, which can happen to both fast and slow metabolizers. Your body becomes dependent on caffeine's effects, and when it's taken away, withdrawal symptoms occur. Our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> is designed to help you reduce your intake without these unpleasant side effects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Next Steps: Use Your Results</h2>
              <p>Now that you have an estimate of your sensitivity, use our other tools to put that knowledge into action.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/half-life" className="hover:underline">Half-Life Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>If you're a slow metabolizer, select the "Slow" setting to see how long caffeine really stays in your system. The results may surprise you.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/intake" className="hover:underline">Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Track your total daily intake to make sure you're staying within the recommended limits for your sensitivity level.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/drink-comparison" className="hover:underline">Drink Comparison</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Compare the caffeine content of your favorite beverages side-by-side.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
