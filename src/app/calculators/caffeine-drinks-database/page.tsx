
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
    "name": "Caffeine Compass",
    "logo": {
      "@type": "ImageObject",
      "url": "https://calculation.site/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://calculation.site/calculators/caffeine-drinks-database"
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
             <div className="sticky top-20">
                <DrinksDatabase />
            </div>
          </div>
          <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
            <section id="how-it-works" aria-labelledby="how-it-works-heading">
              <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
              <p>
                This database provides a fast and efficient way to find the caffeine content of your favorite drinks.
              </p>
              <ol>
                <li><strong>Search:</strong> Type the name of a drink (e.g., "Starbucks Latte") into the search bar.</li>
                <li><strong>Filter:</strong> Narrow your results by category (Coffee, Tea, Soda, Energy) using the filter buttons.</li>
                <li><strong>Sort:</strong> Organize the results by caffeine content (High to Low or Low to High) or by name to quickly find what you need.</li>
                <li><strong>Review:</strong> The list updates in real-time, showing you the drink name, serving size (in ml), and, most importantly, the caffeine content in milligrams (mg).</li>
              </ol>
            </section>

            <Separator />
            
            <section id="introduction" aria-labelledby="introduction-heading">
              <h2 id="introduction-heading" className="text-3xl font-bold">
                Know Your Buzz
              </h2>
              <p>
                This tool eliminates guesswork. By providing specific data for specific products, it empowers you to make truly informed decisions about your caffeine consumption.
              </p>
              <p>
                Accurate knowledge of your intake is the foundation of caffeine management. Whether you're tracking your daily total with our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> or trying to protect your sleep, it all starts with knowing the potency of what you're drinking.
              </p>
            </section>

            <Separator />
            
            <section id="related-tools" aria-labelledby="related-tools-heading">
                <h2 id="related-tools-heading" className="text-3xl font-bold">Next Steps</h2>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle><Link href="/calculators/caffeine-intake" className="hover:underline">Intake Calculator</Link></CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Found your drink? Now add it to our Intake Calculator to track your total daily consumption.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle><Link href="/calculators/caffeine-half-life" className="hover:underline">Half-Life Calculator</Link></CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Visualize how quickly (or slowly) your body will process the caffeine from the drink you just looked up.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle><Link href="/calculators/caffeine-drink-comparison" className="hover:underline">Drink Comparison Tool</Link></CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Compare your drink with others to understand its relative strength.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
