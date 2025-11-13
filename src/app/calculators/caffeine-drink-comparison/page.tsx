
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import DrinkComparisonLoader from '@/components/features/loaders/DrinkComparisonLoader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export const metadata: Metadata = {
  title:
    'Caffeine Drink Comparison Tool — Compare Caffeine in Coffee, Tea, Soda & Energy Drinks',
  description:
    'Use our interactive chart to compare the caffeine content (mg) of popular drinks. See how coffee, tea, soda, and energy drinks stack up against each other.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Drink Comparison Tool — Compare Caffeine in Coffee, Tea, Soda & Energy Drinks",
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
    "@id": "https://calculation.site/calculators/caffeine-drink-comparison"
  },
  "description": "Visually compare the caffeine content of multiple beverages side-by-side using an interactive chart.",
  "articleBody": "This tool places caffeine information side-by-side, allowing you to build your own comparison chart from our extensive database. It transforms abstract numbers into a tangible understanding of what you're consuming, whether you're trying to moderate your intake, maximize your energy, or simply satisfy your curiosity."
};

export default function DrinkComparisonPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Drink Comparison Tool: Coffee vs. Tea vs. Energy Drinks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ever wondered how your morning coffee compares to an energy drink? Use our interactive chart to visualize and compare the caffeine content of hundreds of popular beverages.
          </p>
        </header>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
             <div className="sticky top-20">
                <DrinkComparisonLoader />
             </div>
          </div>

          <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
             <section id="how-it-works" aria-labelledby="how-it-works-heading">
              <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
              <p>
                This tool provides a simple, visual way to understand the relative caffeine strength of different drinks.
              </p>
              <ol>
                <li><strong>Select Drinks:</strong> Use the dropdown menu to search for and select the beverages you want to compare. You can add as many as you like from our database of over 1,000 drinks.</li>
                <li><strong>Visualize Data:</strong> The tool instantly generates a horizontal bar chart, automatically sorting the drinks from most to least caffeinated. This allows you to see at a glance which drinks are most potent.</li>
                <li><strong>Interpret the Results:</strong> The length of each bar corresponds to the milligrams (mg) of caffeine in a standard serving size. This direct comparison can help you make more informed choices, whether you're looking for a bigger boost or trying to cut back.</li>
              </ol>
            </section>
            
            <Separator />
            
            <section id="introduction" aria-labelledby="introduction-heading">
                <h2 id="introduction-heading" className="text-3xl font-bold">
                Uncovering the Buzz
                </h2>
                <p>
                The problem this tool solves is the lack of a simple, direct comparison. You can look up individual drink stats, but it’s hard to grasp the scale of difference. Is a cold brew really that much stronger than an espresso? How does <strong>caffeine in coffee vs. tea</strong> actually stack up? This tool places that information side-by-side, allowing you to build your own comparison chart.
                </p>
                <p>
                Whether you're trying to moderate your intake, maximize your energy, or simply satisfy your curiosity, this comparison tool is your best friend.
                </p>
            </section>

            <Separator />
            
            <section id="related-tools" aria-labelledby="related-tools-heading">
                <h2 id="related-tools-heading" className="text-3xl font-bold">Next Steps</h2>
                <div className="space-y-4">
                        <Link href="/calculators/caffeine-intake" className="block group">
                            <p>Now that you know the potency of your favorite drink, use the <strong>Intake Calculator</strong> to track your total daily consumption.</p>
                        </Link>
                        <Link href="/calculators/caffeine-half-life" className="block group">
                            <p>Visualize how quickly (or slowly) your body will process the caffeine from the drinks you've compared with the <strong>Half-Life Calculator</strong>.</p>
                        </Link>
                        <Link href="/calculators/caffeine-sensitivity-test" className="block group">
                            <p>Discover if you're a fast or slow metabolizer to understand how these drinks affect you personally with the <strong>Sensitivity Test</strong>.</p>
                        </Link>
                </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
