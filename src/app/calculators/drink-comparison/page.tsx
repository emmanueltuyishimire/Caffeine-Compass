
import DrinkComparison from '@/components/features/DrinkComparison';
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

export const metadata: Metadata = {
  title:
    'Drink Comparison Tool — Compare Caffeine in Coffee, Tea, Soda & Energy Drinks',
  description:
    'Use our interactive chart to compare the caffeine content (mg) of popular drinks. See how coffee, tea, soda, and energy drinks stack up against each other.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Drink Comparison Tool — Compare Caffeine in Coffee, Tea, Soda & Energy Drinks",
  "author": {
    "@type": "Person",
    "name": "T. Emmanuel"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Caffeine Calculation Site",
    "logo": {
      "@type": "ImageObject",
      "url": "https://caffeine-calculation-site.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://caffeine-calculation-site.com/calculators/drink-comparison"
  },
  "description": "Visually compare the caffeine content of multiple beverages side-by-side using an interactive chart.",
  "articleBody": "This tool places caffeine information side-by-side, allowing you to build your own comparison chart from our extensive database. It transforms abstract numbers into a tangible understanding of what you're consuming, whether you're trying to moderate your intake, maximize your energy, or simply satisfy your curiosity."
};

export default function DrinkComparisonPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Drink Comparison Tool: Caffeine in Coffee vs. Tea vs. Energy Drinks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ever wondered how your morning coffee compares to an energy drink? Use our interactive chart to visualize and compare the caffeine content of hundreds of popular beverages.
          </p>
        </header>

        <DrinkComparison />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction">
            <h2 className="text-3xl font-bold">
              Uncovering the Buzz: A Visual Guide to Caffeine in Your Favorite Drinks
            </h2>
            <p>
              "How much caffeine is in this?" It's a question every coffee lover, tea enthusiast, and energy drink consumer has asked. The answer is often surprising. A grande coffee from Starbucks doesn't have the same kick as a medium from Dunkin'. A can of Red Bull is worlds apart from a can of Bang. This <strong>Drink Comparison Tool</strong> is designed to eliminate the guesswork, providing a clear, visual, and interactive <strong>energy drink caffeine chart</strong> and beverage comparison tool.
            </p>
            <p>
              The problem this tool solves is the lack of a simple, direct comparison. You can look up individual drink stats, but it’s hard to grasp the scale of difference. Is a cold brew really that much stronger than an espresso? How does <strong>caffeine in coffee vs. tea</strong> actually stack up? This tool places that information side-by-side, allowing you to build your own comparison chart from our extensive database. It transforms abstract numbers into a tangible understanding of what you're consuming.
            </p>
            <p>
              Whether you're trying to moderate your intake, maximize your energy, or simply satisfy your curiosity, this comparison tool is your best friend. It’s an essential first step before using our other calculators, like the <Link href="/calculators/intake">Intake Calculator</Link>, as it gives you the foundational knowledge of your drink's potency.
            </p>
          </section>

          <Separator />

          <section id="how-it-works">
              <h2 className="text-3xl font-bold">How This Tool Works: Interactive Visualization</h2>
              <p>
                  This tool leverages a comprehensive database of beverages, from generic brewed coffee to specific branded energy drinks. It allows you to select multiple drinks and instantly plots them on a bar chart, giving you an immediate visual sense of their relative caffeine content.
              </p>

              <h3 className="text-2xl font-semibold">Using the Comparison Tool</h3>
              <p>
                  The process is simple:
              </p>
              <ul>
                  <li><strong>Search and Select:</strong> Use the multi-select dropdown to search for and choose the beverages you want to compare. You can add as many as you like.</li>
                  <li><strong>Analyze the Chart:</strong> As you add drinks, a dynamic bar chart is generated. Each bar represents a drink, with its height corresponding to the total caffeine in milligrams (mg) for a standard serving size.</li>
                  <li><strong>Hover for Details:</strong> Hover over any bar in the chart to see the exact caffeine amount and serving size for that specific drink.</li>
              </ul>
              <p>
                  This interactive approach allows you to create custom comparisons on the fly. You can build an <strong>energy drink caffeine chart</strong>, compare different types of tea, or see how various coffee brewing methods affect the final caffeine content.
              </p>

          </section>

          <Separator />
          
          <section id="terminologies">
              <h2 className="text-3xl font-bold">Key Terminologies & Concepts</h2>
              <ul className="space-y-4">
                  <li>
                      <h3 className="text-xl font-semibold">Milligram (mg)</h3>
                      <p>The standard unit of measurement for caffeine. This tool displays all caffeine amounts in mg for easy comparison.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Serving Size (ml)</h3>
                      <p>The standard volume for a given drink, measured in milliliters. It's important to note that caffeine content is tied to serving size; a larger drink will have more caffeine, even if the concentration is the same.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Caffeine Concentration</h3>
                      <p>The amount of caffeine per unit of volume (e.g., mg per 100ml). Some drinks, like espresso, have high concentration but are served in small volumes, while others, like cold brew, have high concentration and are served in large volumes.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Brewed Coffee</h3>
                      <p>Coffee made by pouring hot water over ground coffee beans. This is the most common type of coffee and serves as a good baseline for comparison.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Energy Drink</h3>
                      <p>A type of beverage containing stimulant compounds, usually caffeine, which is marketed as providing mental and physical stimulation. The caffeine content can vary dramatically between brands.</p>
                  </li>
              </ul>
          </section>

          <Separator />

          <section id="faq">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Which has more caffeine, coffee or tea?</AccordionTrigger>
                <AccordionContent>
                  On a per-serving basis, coffee almost always has more caffeine. A standard 240ml (8 oz) cup of brewed coffee contains about 95 mg of caffeine, while the same amount of black tea has about 47 mg. Use the tool to compare them side-by-side!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the strongest energy drink?</AccordionTrigger>
                <AccordionContent>
                  Energy drinks with 300 mg of caffeine per can are among the strongest widely available. Brands like Bang, Reign, and certain VPX products fall into this category. Be aware that this is very close to the 400 mg recommended daily limit in a single serving.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does espresso have more caffeine than coffee?</AccordionTrigger>
                <AccordionContent>
                  This is a common point of confusion. Espresso has more caffeine per ounce (higher concentration), but it's served in a much smaller volume (a 1 oz shot has ~64 mg). A standard 8 oz cup of brewed coffee has ~95 mg. So, a cup of coffee has more total caffeine than a single shot of espresso.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Why does caffeine content vary so much between coffee shops?</AccordionTrigger>
                <AccordionContent>
                  Caffeine content is affected by the type of coffee bean (Robusta has more caffeine than Arabica), the roast level (lighter roasts have slightly more caffeine), the brewing method, and the serving size. This is why we include branded options like Starbucks and Dunkin' in our database.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is the caffeine in energy drinks different from coffee?</AccordionTrigger>
                <AccordionContent>
                  No, the caffeine molecule is chemically identical whether it's naturally occurring in a coffee bean or synthetically produced for an energy drink. Your body metabolizes it in the same way. However, the other ingredients in the drinks (like sugar, taurine, etc.) can affect your overall experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />
          
          <section id="related-tools">
              <h2 className="text-3xl font-bold">Next Steps: Put Your Knowledge to Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/intake" className="hover:underline">Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Now that you know the potency of your favorite drink, use the Intake Calculator to track your total daily consumption.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/half-life" className="hover:underline">Half-Life Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Visualize how quickly (or slowly) your body will process the caffeine from the drinks you've compared.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-sensitivity-test" className="hover:underline">Caffeine Sensitivity Test</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Discover if you're a fast or slow metabolizer to understand how these drinks affect you personally.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
