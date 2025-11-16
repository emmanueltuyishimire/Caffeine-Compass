
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import DrinksDatabase from '@/components/features/DrinksDatabase';


export const metadata: Metadata = {
  title:
    'Caffeine in Drinks Database — Search 1,000+ Beverages by Caffeine Content',
  description:
    'Use our free, searchable database to find the exact caffeine content (mg) of over 1,000 drinks. Answer "how much caffeine is in..." for any coffee, tea, soda, or energy drink.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine in Drinks Database — Search 1,000+ Beverages by Caffeine Content",
  "author": {
    "@type": "Person",
    "name": "T. Emmanuel"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Caffeine Compass"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://calculation.site/calculators/drinks-database"
  },
  "description": "Find the caffeine content of over 1,000 beverages using a searchable database.",
  "articleBody": "A comprehensive, searchable, and easy-to-use tool that puts the caffeine content of over 1,000 beverages right at your fingertips. By providing specific data for specific products, it empowers you to make truly informed decisions about your caffeine consumption."
};

export default function DrinksDatabasePage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine in Drinks Database
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            How much caffeine is in your drink? Search our database of over 1,000 beverages to get an accurate answer instantly.
          </p>
        </header>

        <DrinksDatabase />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading" className="text-3xl font-bold">
              Know Your Buzz: The Ultimate Guide to Caffeine Content
            </h2>
            <p>
              "How much caffeine is in a Starbucks Grande Latte?" "Is a Monster energy drink stronger than a cold brew?" These are questions we ask ourselves all the time, but finding a quick, accurate answer can be surprisingly difficult. This <b>Caffeine in Drinks Database</b> is designed to solve that problem. It's a comprehensive, searchable, and easy-to-use tool that puts the caffeine content of over 1,000 beverages right at your fingertips.
            </p>
            <p>
              The problem this database solves is ambiguity. Caffeine content varies wildly not just between categories like coffee and tea, but between brands, sizes, and preparation methods. A generic "cup of coffee" can contain anywhere from 80 mg to over 300 mg of caffeine. This tool eliminates that guesswork. By providing specific data for specific products (from a Dunkin' Iced Coffee to a can of Bang), it empowers you to make truly informed decisions about your caffeine consumption.
            </p>
            <p>
              Accurate knowledge of your intake is the foundation of caffeine management. Whether you're tracking your daily total with our <Link href="/calculators/intake">Intake Calculator</Link> or trying to protect your sleep, it all starts with knowing the potency of what you're drinking. This database is your definitive resource for that crucial first step.
            </p>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Next Steps: Put Your Knowledge to Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/intake" className="hover:underline">Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Found your drink? Now add it to our Intake Calculator to track your total daily consumption.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/half-life" className="hover:underline">Half-Life Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Visualize how quickly (or slowly) your body will process the caffeine from the drink you just looked up.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/drink-comparison" className="hover:underline">Drink Comparison Tool</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Compare your drink with others to understand its relative strength.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
