
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SugarDatabase from '@/components/features/SugarDatabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title:
    'Sugar in Drinks: A Comprehensive Database of Sugars & Calories',
  description:
    'Explore the sugar and calorie content of hundreds of popular beverages. Our searchable database helps you make healthier, more informed choices about what you drink.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "headline": "Sugar in Drinks: A Comprehensive Database of Sugars & Calories",
  "author": {
    "@type": "Person",
    "name": "T. Emmanuel"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Caffeine Compass",
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://calculation.site/data/sugar-in-drinks"
  },
  "description": "A searchable database to find the sugar and calorie content of popular drinks like coffee, tea, soda, and energy drinks.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://calculation.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Data",
        "item": "https://calculation.site/data"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sugar in Drinks",
        "item": "https://calculation.site/data/sugar-in-drinks"
      }
    ]
  }
};

export default function SugarInDrinksPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Sugar & Calorie Content in Drinks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the hidden sugars and calories in your favorite beverages. Use our database to make healthier, more informed choices.
          </p>
        </header>

        <div className="mb-12">
            <SugarDatabase />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-12">
          <section id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading" className="text-3xl font-bold">
              Uncovering the Sweet Truth
            </h2>
            <p>
              While many of us are conscious of the caffeine in our drinks, the sugar and calorie content is an equally important, yet often overlooked, part of the equation. A single high-sugar beverage can contain more than the recommended daily intake of added sugar, contributing to a host of health issues. This database is designed to bring transparency to what you're drinking.
            </p>
            <p>
              The problem this tool solves is the lack of awareness about the sheer amount of sugar in popular drinks. A can of soda or a fancy coffee drink can be a "sugar bomb" that leads to an energy crash, weight gain, and long-term metabolic health problems. By providing clear, searchable data, this tool helps you identify high-sugar beverages and find healthier alternatives.
            </p>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Related Data & Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-drinks-database" className="hover:underline">Caffeine in Drinks Database</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Now that you know the sugar content, check the caffeine levels with our comprehensive database.</p>
                      </CardContent>
                  </Card>
                   <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-intake" className="hover:underline">Caffeine Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Track your total daily caffeine consumption from all sources to stay within healthy limits.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
