
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import DrinkComparisonLoader from '@/components/features/loaders/DrinkComparisonLoader';


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

        <DrinkComparisonLoader />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading" className="text-3xl font-bold">
              Uncovering the Buzz: A Visual Guide to Caffeine in Your Favorite Drinks
            </h2>
            <p>
              "How much caffeine is in this?" It's a question every coffee lover, tea enthusiast, and energy drink consumer has asked. The answer is often surprising. A grande coffee from Starbucks doesn't have the same kick as a medium from Dunkin'. A can of Red Bull is worlds apart from a can of Bang. This <strong>Caffeine Drink Comparison Tool</strong> is designed to eliminate the guesswork, providing a clear, visual, and interactive <strong>energy drink caffeine chart</strong> and beverage comparison tool.
            </p>
            <p>
              The problem this tool solves is the lack of a simple, direct comparison. You can look up individual drink stats, but it’s hard to grasp the scale of difference. Is a cold brew really that much stronger than an espresso? How does <strong>caffeine in coffee vs. tea</strong> actually stack up? This tool places that information side-by-side, allowing you to build your own comparison chart from our extensive database. It transforms abstract numbers into a tangible understanding of what you're consuming.
            </p>
            <p>
              Whether you're trying to moderate your intake, maximize your energy, or simply satisfy your curiosity, this comparison tool is your best friend. It’s an essential first step before using our other calculators, like the <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link>, as it gives you the foundational knowledge of your drink's potency.
            </p>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Next Steps: Put Your Knowledge to Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Link href="/calculators/caffeine-intake" className="block group">
                          <p>Now that you know the potency of your favorite drink, use the Intake Calculator to track your total daily consumption.</p>
                      </Link>
                      <Link href="/calculators/caffeine-half-life" className="block group">
                          <p>Visualize how quickly (or slowly) your body will process the caffeine from the drinks you've compared.</p>
                      </Link>
                      <Link href="/calculators/caffeine-sensitivity-test" className="block group">
                          <p>Discover if you're a fast or slow metabolizer to understand how these drinks affect you personally.</p>
                      </Link>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
