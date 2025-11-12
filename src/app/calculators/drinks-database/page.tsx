
import DrinksDatabase from '@/components/features/DrinksDatabase';
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
    'Caffeine in Drinks Database — Search 1,000+ Beverages by Caffeine Content',
  description:
    'Use our free, searchable database to find the exact caffeine content (mg) of over 1,000 drinks. Answer "how much caffeine is in..." for any coffee, tea, soda, or energy drink.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Caffeine in Drinks Database",
  "description": "Find the caffeine content of over 1,000 beverages using a searchable database.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Search",
      "text": "Start typing the name of any drink, brand, or category into the search bar."
    },
    {
      "@type": "HowToStep",
      "name": "Filter and Sort",
      "text": "Optionally, filter by category (e.g., Coffee, Tea) and sort the results by caffeine content or name."
    },
    {
      "@type": "HowToStep",
      "name": "View Results",
      "text": "The list will update in real-time, showing each drink's name, category, caffeine content (mg), and serving size (ml)."
    }
  ]
};

export default function DrinksDatabasePage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine in Drinks Database
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            How much caffeine is in your drink? Search our database of over 1,000 beverages to get an accurate answer instantly.
          </p>
        </header>

        <DrinksDatabase />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction">
            <h2 className="text-3xl font-bold">
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

          <section id="how-it-works">
              <h2 className="text-3xl font-bold">How This Database Works: Simple Search, Powerful Data</h2>
              <p>
                  Our database is a curated collection of caffeine information from official brand websites, nutritional data providers, and independent lab tests. We've organized it into a simple, searchable interface.
              </p>

              <h3 className="text-2xl font-semibold">Using the Database</h3>
              <p>
                  The process couldn't be easier:
              </p>
              <ul>
                  <li><b>Search:</b> Start typing the name of any drink, brand, or category into the search bar. The list will filter in real-time. For example, typing "Starbucks cold brew" will instantly show you the results.</li>
                  <li><b>Filter:</b> You can use the category buttons (Coffee, Tea, Soda, Energy Drinks) to narrow down your search and explore different types of beverages.</li>
                  <li><b>View Results:</b> The list displays each drink's name, category, caffeine content (in mg), and standard serving size (in ml), giving you all the key information at a glance.</li>
              </ul>
              <p>
                  This tool is designed for speed and accuracy, so you can look up a drink while you're standing in line at the coffee shop and make a smarter choice on the spot.
              </p>
          </section>

          <Separator />
          
          <section id="terminologies">
              <h2 className="text-3xl font-bold">Key Terminologies & Concepts</h2>
              <ul className="space-y-4">
                  <li>
                      <h3 className="text-xl font-semibold">Milligram (mg)</h3>
                      <p>The standard unit of measurement for caffeine. This database displays all caffeine amounts in mg for easy comparison and tracking.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Serving Size (ml)</h3>
                      <p>The standard volume for a given drink, measured in milliliters. It's crucial to consider serving size, as a larger drink will have more total caffeine even if the concentration is lower than a smaller drink.</p>
                  </li>
                  <li>
                      <h3 className="text-xl font-semibold">Caffeine Concentration</h3>
                      <p>The amount of caffeine per unit of volume (e.g., mg per 100ml). Some drinks, like espresso, have a high concentration but are served in small volumes, while others, like cold brew, have both high concentration and large serving sizes.</p>
                  </li>
              </ul>
          </section>

          <Separator />

          <section id="faq">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Where does this caffeine data come from?</AccordionTrigger>
                <AccordionContent>
                  Our data is compiled from multiple sources, including the official websites of beverage brands, USDA nutritional databases, and publicly available lab test results. We strive to provide the most accurate and up-to-date information possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why is there such a big range of caffeine in coffee?</AccordionTrigger>
                <AccordionContent>
                  The caffeine in coffee is affected by many factors: the type of bean (Robusta has more caffeine than Arabica), the roast level (lighter roasts have slightly more caffeine by weight), the brewing method (drip, pour-over, cold brew), and the serving size. That's why searching for a specific branded coffee is always more accurate.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How much caffeine is in decaf coffee?</AccordionTrigger>
                <AccordionContent>
                  Decaffeinated coffee is not caffeine-free. The decaffeination process removes about 97% of the caffeine. A standard cup of decaf coffee typically contains 2-7 mg of caffeine.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What's the strongest drink in the database?</AccordionTrigger>
                <AccordionContent>
                  Some of the strongest drinks are high-potency energy drinks and certain brands of cold brew concentrate. Drinks with 300 mg or more of a single serving are considered very high and approach the FDA's recommended daily limit of 400 mg.
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
                          <p>Found your drink? Now add it to our Intake Calculator to track your total daily consumption against safe limits.</p>
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
