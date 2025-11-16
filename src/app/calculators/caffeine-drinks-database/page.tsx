
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import DrinksDatabase from '@/components/features/DrinksDatabase';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { BrainCircuit, CheckCircle, Coffee, Droplet, Leaf, Lightbulb, TrendingDown, Zap } from 'lucide-react';


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
  "articleBody": "A comprehensive, searchable, and easy-to-use tool that puts the caffeine content of over 1,000 beverages right at your fingertips. By providing specific data for specific products, it empowers you to make truly informed decisions about your caffeine consumption.",
  "howTo": {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Caffeine in Drinks Database",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Search for a Drink",
        "text": "Type the name of a drink (e.g., 'Starbucks Latte') into the search bar."
      },
      {
        "@type": "HowToStep",
        "name": "Filter by Category",
        "text": "Narrow your results by category (Coffee, Tea, Soda, Energy) using the filter buttons."
      },
      {
        "@type": "HowToStep",
        "name": "Sort the Results",
        "text": "Organize the list by caffeine content or name to quickly find what you need."
      },
      {
        "@type": "HowToStep",
        "name": "Add Custom Drinks",
        "text": "If your drink isn't listed, use the 'Add Custom Drink' form to add it to the database for your personal use. It will be saved in your browser."
      }
    ]
  },
  "faqPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much caffeine is in a cup of coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The caffeine content in a cup of coffee varies widely, from 95mg in a generic 8oz brewed coffee to over 300mg in some large specialty drinks. This database provides specific values for hundreds of different coffee products to give you an accurate number."
        }
      },
      {
        "@type": "Question",
        "name": "Which has more caffeine, coffee or an energy drink?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends entirely on the specific product. A standard 8.4oz Red Bull has 80mg of caffeine, less than a typical coffee. However, a 16oz can of Bang energy drink has 300mg, which is more than most coffees. Use our Caffeine Drink Comparison Tool to see them side-by-side."
        }
      },
      {
        "@type": "Question",
        "name": "Is the caffeine data in this database accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We compile our data from brand-provided information, independent lab tests, and academic studies to be as accurate as possible. However, brands can change their formulas, so always check the product label if available. This database is an excellent guide for estimation."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add a drink that isn't listed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This tool now features an 'Add Custom Drink' form. You can enter the name, category, caffeine, and size of any beverage, and it will be saved in your browser's local storage for future use within the database."
        }
      },
      {
        "@type": "Question",
        "name": "Why is knowing the exact caffeine content important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Knowing your exact intake is the first step to managing your caffeine effectively. It's essential for staying under the 400mg daily safe limit, protecting your sleep, and avoiding side effects. Use our Caffeine Intake Calculator to track your total consumption."
        }
      },
      {
        "@type": "Question",
        "name": "How much caffeine is in decaf coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Decaf is not completely caffeine-free. A typical 8oz cup of decaf coffee contains about 2-7mg of caffeine. You can find specific decaf brands and their values by searching the database."
        }
      },
      {
        "@type": "Question",
        "name": "Does the way coffee is brewed affect its caffeine content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, significantly. Cold brew, for example, is often much higher in caffeine than standard drip-brewed coffee because of the higher coffee-to-water ratio and longer steep time. This database accounts for different preparation methods."
        }
      },
      {
        "@type": "Question",
        "name": "How does tea caffeine content compare to coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, tea has less caffeine than a similarly-sized coffee. A cup of black tea has about 47mg, and green tea has about 28mg. Compare this to a standard coffee with 95mg. You can use our Caffeine Drink Comparison Tool for a visual breakdown."
        }
      },
      {
        "@type": "Question",
        "name": "Now that I know my drink's caffeine, what's next?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The next step is to understand how your body processes that caffeine. Use our Caffeine Half-Life Calculator to see how long it will stay in your system and affect your sleep."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any caffeine-free sodas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many popular sodas like Sprite, 7 Up, Fanta, and most root beers are caffeine-free. You can filter the database by the 'Soda' category and sort by 'Caffeine: Low to High' to see all the zero-caffeine options."
        }
      }
    ]
  }
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
            How much caffeine is in your drink? Search our database of over 1,000 beverages to get an accurate answer instantly. Add your own custom drinks to personalize the list.
          </p>
        </header>
        
        <div>
            <div className="mb-12">
                <DrinksDatabase />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-12">
            <section id="introduction" aria-labelledby="introduction-heading">
                <h2 id="introduction-heading" className="text-3xl font-bold">Know Your Buzz: The Definitive Guide to Caffeine Content</h2>
                <p>
                    "How much caffeine is in this?" It's a question every coffee lover, tea enthusiast, and energy drink consumer has asked. The answer is often surprising and elusive. A grande coffee from Starbucks doesn't have the same kick as a medium from Dunkin'. A can of Red Bull is worlds apart from a can of Bang energy drink. This <strong>Caffeine in Drinks Database</strong> is designed to eliminate that guesswork, providing a clear, searchable, and comprehensive resource for over 1,000 beverages.
                </p>
                <p>
                    The problem this tool solves is ambiguity and the lack of accessible, specific data. Caffeine content varies wildly not just between categories like coffee and tea, but between brands, sizes, and preparation methods. A generic "cup of coffee" can contain anywhere from 80 mg to over 400 mg of caffeine. This database eliminates that uncertainty. By providing specific data for specific products—from a Dunkin' Iced Coffee to a can of Reign—it empowers you to make truly informed decisions about your caffeine consumption.
                </p>
                <p>
                    Accurate knowledge of your intake is the non-negotiable foundation of mindful caffeine management. Whether you're tracking your daily total with our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> to stay under the 400mg safe limit, or timing your last drink to protect your sleep with the <Link href="/calculators/caffeine-sleep-calculator">Caffeine Sleep Calculator</Link>, it all starts with knowing the potency of what you're drinking. This database is your definitive resource for that crucial first step, empowering you to move from guessing to knowing.
                </p>
            </section>

            <Separator />

            <section id="how-it-works" aria-labelledby="how-it-works-heading">
                <h2 id="how-it-works-heading" className="text-3xl font-bold">How This Database Works: From Search to Insight</h2>
                <p>This tool is designed to be a fast, intuitive, and comprehensive resource. It combines a vast, pre-populated dataset with powerful search, filtering, and sorting capabilities, along with the ability to add your own custom drinks. Here’s how it all comes together.</p>

                <h3 className="text-2xl font-semibold">Inputs Explained: Finding Your Drink</h3>
                <ul>
                    <li><strong>Search Bar:</strong> This is your primary entry point. Start typing any part of a drink's name (e.g., "cold brew," "matcha," "coke zero"), and the list will instantly update to show matching results.</li>
                    <li><strong>Category Filters:</strong> Use the toggle buttons (Coffee, Tea, Soda, Energy) to narrow your focus. Clicking a category will show only the drinks within that group, making it easy to browse or find items when you don't have a specific name in mind.</li>
                    <li><strong>Sorting Options:</strong> The "Sort by" dropdown allows you to organize the results in the most useful way for your needs. You can sort by caffeine content (from highest to lowest or vice-versa) or alphabetically by name.</li>
                    <li><strong>Custom Drink Form:</strong> This powerful feature allows you to add beverages that aren't in our main database. Simply provide a name, category, caffeine amount (mg), and serving size (ml). This data is saved in your browser's local storage, so it will be available every time you return.</li>
                </ul>

                <h3 className="text-2xl font-semibold">The Scientific Background: Why Caffeine Content Varies So Much</h3>
                <p>You might wonder why a database like this is even necessary. The reason is the extreme variability in caffeine content, which stems from several factors:</p>
                <ul>
                    <li><strong>Source Material:</strong> Different coffee beans (e.g., Robusta vs. Arabica) have different natural caffeine levels. The same applies to different types of tea leaves.</li>
                    <li><strong>Preparation Method:</strong> The way a drink is prepared has a massive impact. For example, cold brew coffee uses a much higher coffee-to-water ratio and a longer steeping time than drip coffee, resulting in a significantly higher caffeine concentration. Espresso uses finely ground beans and pressurized water, extracting a lot of caffeine into a small volume.</li>
                    <li><strong>Serving Size:</strong> This is an obvious but often overlooked factor. A "small" coffee at one chain can be 12oz, while at another it might be 16oz. The database standardizes this by showing both caffeine content and serving size in milliliters.</li>
                    <li><strong>Brand Formulation:</strong> Especially with energy drinks and sodas, each brand has a proprietary formula. There is no "standard" energy drink; they can range from 80mg to over 350mg per can.</li>
                </ul>
                <Card className="my-8 bg-primary/5 border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Lightbulb className="text-primary" />Data You Can Trust</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Our database is meticulously compiled from a variety of reliable sources, including direct information from beverage manufacturers, published nutritional data, and independent third-party lab analyses. While brands may occasionally reformulate their products, our database provides one of the most accurate and comprehensive snapshots available.</p>
                    </CardContent>
                </Card>
                <p>This database centralizes this disparate information, doing the hard work of research and verification so you can get a reliable number in seconds. By providing specific data for specific products, it empowers you to make truly informed decisions.</p>
            </section>

            <Separator/>
            
            <section id="key-features" aria-labelledby="key-features-heading">
                <h2 id="key-features-heading" className="text-3xl font-bold">Key Features of This Tool</h2>
                <Table>
                    <caption className='sr-only'>Features of the Caffeine in Drinks Database</caption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Feature</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Why It Matters</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Comprehensive Search</TableCell>
                            <TableCell>Instantly search a database of over 1,000 beverages by name.</TableCell>
                            <TableCell>Provides fast, direct access to the information you need without endless scrolling or guessing.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Filtering & Sorting</TableCell>
                            <TableCell>Filter by category (Coffee, Tea, etc.) and sort by caffeine content or name.</TableCell>
                            <TableCell>Allows for easy browsing and discovery, helping you find the strongest coffee or a caffeine-free soda quickly.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Custom Drink Entry</TableCell>
                            <TableCell>Add your own drinks with custom names and caffeine values. Data is saved in your browser.</TableCell>
                            <TableCell>Personalizes the database for your unique habits, ensuring you can track everything you consume accurately.</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Clear Data Display</TableCell>
                            <TableCell>Each entry clearly shows drink name, serving size (ml), and total caffeine (mg).</TableCell>
                            <TableCell>Removes ambiguity, giving you all the necessary data points to make an informed decision or log your intake.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
            
            <Separator />

            <section id="how-to-use" aria-labelledby="how-to-use-heading">
                <h2 id="how-to-use-heading" className="text-3xl font-bold">Step-by-Step Instructions: Finding & Adding Drinks</h2>
                 <ol className="list-decimal pl-5 space-y-4">
                    <li>
                        <strong>Step 1: Search for Your Drink</strong><br/>
                        Use the "Search for a drink" input field. As you type, the list below will automatically filter. For example, typing "latte" will show all lattes from different brands.
                    </li>
                    <li>
                        <strong>Step 2: Filter and Sort (Optional)</strong><br/>
                        To narrow your search, click on a category like "Coffee" or "Energy Drink". Use the "Sort by" dropdown to organize the list by caffeine potency or name, making it easier to find what you're looking for.
                    </li>
                    <li>
                        <strong>Step 3: Review the Results</strong><br/>
                        The list displays the drink's name, serving size in milliliters (ml), and total caffeine in milligrams (mg). This gives you the precise data needed for accurate tracking.
                    </li>
                    <li>
                        <strong>Step 4: Add a Custom Drink (If Needed)</strong><br/>
                        If your beverage isn't in the database, use the "Add Custom Drink" form. Fill in the name, select a category, and enter the caffeine and size from the product's label. Click "Add," and your custom drink will appear in the list, ready for future searches.
                    </li>
                </ol>
            </section>
          
            <Separator />
            
             <section id="worked-examples" aria-labelledby="worked-examples-heading">
                <h2 id="worked-examples-heading" className="text-3xl font-bold">Worked Examples: From Question to Answer</h2>
                <p>Let's see how different people can use this database to answer common caffeine questions.</p>
                <Card className="mb-6">
                    <CardHeader><CardTitle>The Curious Coffee Drinker</CardTitle></CardHeader>
                    <CardContent>
                        <p><strong>Question:</strong> "Is the coffee at Starbucks really stronger than at Dunkin'?"</p>
                        <p><strong>How they use the tool:</strong> The user searches for "Starbucks Brewed" and finds the Grande has 310mg. They then search for "Dunkin' Brewed" and see the medium has 210mg.</p>
                        <p><strong>Interpretation:</strong> The user gets a clear, quantitative answer. They learn that, size-for-size, Starbucks coffee is significantly more caffeinated, which helps them understand why they might feel more wired after one brand versus the other. For a visual, they could use the <Link href="/calculators/caffeine-drink-comparison">Drink Comparison Tool</Link>.</p>
                    </CardContent>
                </Card>
                <Card className="mb-6">
                    <CardHeader><CardTitle>The Energy Drink Enthusiast</CardTitle></CardHeader>
                    <CardContent>
                        <p><strong>Question:</strong> "I want a strong energy drink for my workout. Which one has the most caffeine?"</p>
                        <p><strong>How they use the tool:</strong> The user filters by the "Energy Drink" category and then sorts by "Caffeine: High to Low".</p>
                        <p><strong>Interpretation:</strong> The database instantly re-orders to show them that drinks like Bang and Reign, with 300mg of caffeine, are at the top of the list, while drinks like Red Bull (80mg) are much lower. This allows them to choose the right drink for their desired level of stimulation and also be aware of the high doses they are consuming.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>The Local Coffee Shop Patron</CardTitle></CardHeader>
                    <CardContent>
                        <p><strong>Question:</strong> "My favorite local coffee shop isn't in the database. How can I track my intake?"</p>
                        <p><strong>How they use the tool:</strong> The user's local shop, "The Daily Grind," lists their 16oz (473ml) latte as having 150mg of caffeine. The user opens the "Add Custom Drink" form, enters the details, and saves it.</p>
                        <p><strong>Interpretation:</strong> "The Daily Grind Latte" now appears in their database list every time they visit the site. They can now accurately track their intake using the <Link href="/calculators/caffeine-intake">Intake Calculator</Link> without having to guess or manually enter it each time. The tool becomes personalized to their routine.</p>
                    </CardContent>
                </Card>
            </section>
          
            <Separator />
            
             <section id="use-cases" aria-labelledby="use-cases-heading">
                <h2 id="use-cases-heading" className="text-3xl font-bold">Real-Life Use Cases: Putting Data into Action</h2>
                
                <h3 className="text-2xl font-semibold">1. Accurate Daily Tracking</h3>
                <p>The most direct use of this database is as a companion to our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link>. Before you can manage your daily load, you need to know the potency of each drink. This tool provides the exact numbers, moving you from rough estimates to precise tracking, which is essential for staying under the 400mg daily guideline.</p>
                
                <h3 className="text-2xl font-semibold">2. Making Smarter Choices for Sleep</h3>
                <p>Want an afternoon pick-me-up that won't ruin your sleep? Use the database to find low-caffeine options. You could filter by "Tea" and sort from low to high to discover that a Green Tea (28mg) is a much safer choice than a Black Tea (47mg). This knowledge is crucial when planning your "caffeine curfew" with the <Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link>.</p>

                <h3 className="text-2xl font-semibold">3. Tapering Off Caffeine Effectively</h3>
                <p>When you're trying to reduce your caffeine dependence, swapping high-caffeine drinks for lower ones is a key strategy. This database is your menu. If you're following a plan from our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link>, you can use this database to find drinks that fit perfectly into your daily declining targets.</p>
                
                <h3 className="text-2xl font-semibold">4. Comparing Products Before You Buy</h3>
                <p>Standing in a store aisle faced with a wall of energy drinks? A quick search in this database on your phone can reveal the massive difference between a Monster (160mg) and a Celsius (200mg) or a Bang (300mg). This allows you to make an informed purchasing decision based on your desired effect and personal limits.</p>
            </section>
          
             <Separator/>

            <section id="common-mistakes" aria-labelledby="common-mistakes-heading">
                <h2 id="common-mistakes-heading" className="text-3xl font-bold">Common Mistakes and Misconceptions About Caffeine Content</h2>
                <Table>
                    <caption className="sr-only">Common mistakes about caffeine content</caption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>The Mistake</TableHead>
                            <TableHead>Why It Happens</TableHead>
                            <TableHead>The Reality (What the Database Shows)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">"All Coffee is the Same"</TableCell>
                            <TableCell>People assume a "cup of coffee" is a standard unit.</TableCell>
                            <TableCell>The database shows that a medium Dunkin' coffee (210mg) is vastly different from a medium Starbucks Pike Place (310mg).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">"Espresso is Super Strong"</TableCell>
                            <TableCell>Because of its intense flavor, people think espresso has more caffeine than coffee.</TableCell>
                            <TableCell>A single shot of espresso has ~64mg of caffeine, less than a standard 8oz coffee (~95mg). It's just more concentrated.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">"Tea is Basically Caffeine-Free"</TableCell>
                            <TableCell>Tea is often perceived as a much gentler alternative.</TableCell>
                            <TableCell>While lower than coffee, a cup of black tea (47mg) still has a significant amount of caffeine—more than a can of Coke (34mg).</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">"Diet Soda Has More Caffeine"</TableCell>
                            <TableCell>A common myth, possibly due to the different taste profiles.</TableCell>
                            <TableCell>It varies. Diet Coke (46mg) does have more caffeine than classic Coke (34mg), but Diet Pepsi (36mg) has less than regular Pepsi (38mg).</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>

          <Separator />
          
            <section id="expert-insights" aria-labelledby="expert-insights-heading">
                <h2 id="expert-insights-heading" className="text-3xl font-bold">Quick Hacks & Expert Insights</h2>
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Coffee aria-hidden="true"/> For Coffee Drinkers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>If you're looking to reduce caffeine, don't just shrink your serving size—change your bean. Coffees made with 100% Arabica beans generally have less caffeine than blends that include Robusta beans.</p>
                    </CardContent>
                </Card>
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Leaf aria-hidden="true"/> For Tea Lovers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Steep time matters. A black tea steeped for 5 minutes can have nearly double the caffeine of the same tea steeped for only 1 minute. For less caffeine, use a shorter steep time.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Zap aria-hidden="true"/> For Energy Drink Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Pay close attention to serving sizes on the label. Many large cans are listed as containing "2 servings," meaning the total caffeine in the can is double what's listed in the nutrition facts per serving. Our database lists the total caffeine per can.</p>
                    </CardContent>
                </Card>
            </section>
          
          <Separator />

          <section id="deep-dive" aria-labelledby="deep-dive-heading">
            <h2 id="deep-dive-heading" className="text-3xl font-bold">Deep Dive: The Chemistry and Agriculture Behind Caffeine Content</h2>
            <p>
                The remarkable variance in caffeine from one drink to the next is not accidental; it is a direct result of biology, chemistry, and human ingenuity. Understanding these factors reveals why a tool like this database is so essential for anyone serious about managing their caffeine intake. It all begins at the source: the plant.
            </p>
            <h3 className="text-2xl font-semibold">The Tale of Two Beans: Arabica vs. Robusta</h3>
            <p>
                The two most prominent species of coffee plant, <em>Coffea arabica</em> and <em>Coffea canephora</em> (commonly known as Robusta), have a fundamental genetic difference in their caffeine production. Caffeine is a natural pesticide for the coffee plant, protecting its leaves and cherries from insects.
            </p>
            <ul>
                <li><strong>Arabica beans,</strong> which are grown at high altitudes where fewer pests reside, have a naturally lower caffeine content, typically ranging from 1% to 1.5% by weight. They are prized for their complex, aromatic, and less bitter flavor profile. Most specialty coffee is 100% Arabica.</li>
                <li><strong>Robusta beans,</strong> grown in hotter climates and at lower altitudes with more insects, evolved to produce a much more potent chemical defense. Robusta beans can contain 2.5% to 4.5% caffeine by weight—more than double that of Arabica. They have a harsher, more bitter taste and are often used in espresso blends to produce a thick crema, or in instant coffee for a cheaper, more caffeinated product.</li>
            </ul>
            <p>
                This biological difference is the first and most important variable. A coffee blend that includes Robusta beans will almost always be more caffeinated than one that is 100% Arabica.
            </p>
            <h3 className="text-2xl font-semibold">The Art of Extraction: Brewing Methods Unleashed</h3>
            <p>
                How you get the caffeine from the bean into your cup is the next critical factor. Caffeine is a water-soluble compound, but its extraction is a function of time, temperature, and surface area.
            </p>
            <ul>
                <li><strong>Drip Coffee:</strong> Hot water passes over medium-coarse grounds for a few minutes. This is a moderately efficient extraction method.</li>
                <li><strong>Espresso:</strong> Very hot, highly pressurized water is forced through very fine grounds for only 25-30 seconds. The high pressure and large surface area of the fine grind lead to a very rapid and efficient extraction, resulting in a highly concentrated liquid. A single shot has less total caffeine than a large drip coffee, but far more per ounce.</li>
                <li><strong>Cold Brew:</strong> This method uses no heat, which normally speeds up chemical reactions. To compensate, it uses a very high ratio of coffee-to-water and a very long steep time (12-24 hours). This combination results in a highly concentrated brew that is often diluted but still typically contains more caffeine than drip coffee per serving.</li>
            </ul>
            <h3 className="text-2xl font-semibold">From Leaf to Cup: The World of Tea</h3>
            <p>
                All "true" teas (black, green, white, oolong) come from the same plant, <em>Camellia sinensis</em>. The differences in caffeine content arise from the age of the leaves and the level of oxidation.
            </p>
            <ul>
                <li><strong>Younger leaves and buds,</strong> often used for white tea, actually have a higher concentration of caffeine as a defense mechanism. However, white tea is typically brewed at lower temperatures for shorter times, resulting in a lower-caffeine cup.</li>
                <li><strong>Black tea</strong> is fully oxidized, which can make the caffeine slightly more available for extraction. Brewed hot and long, it generally yields the most caffeine of all traditional teas.</li>
            </ul>
            <p>This database navigates these complexities for you. By cataloging specific products, we account for the blend of beans, the intended preparation, and the final serving size. It’s a tool that translates complex agricultural and chemical variables into a single, actionable number, empowering you to understand precisely what you’re consuming.
            </p>
          </section>

          <Separator />
          
            <section id="faq" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-3xl font-bold">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq-1">
                        <AccordionTrigger>How much caffeine is in a cup of coffee?</AccordionTrigger>
                        <AccordionContent>
                           The caffeine content in a cup of coffee varies widely, from 95mg in a generic 8oz brewed coffee to over 300mg in some large specialty drinks. This database provides specific values for hundreds of different coffee products to give you an accurate number.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                        <AccordionTrigger>Which has more caffeine, coffee or an energy drink?</AccordionTrigger>
                        <AccordionContent>
                          It depends entirely on the specific product. A standard 8.4oz Red Bull has 80mg of caffeine, less than a typical coffee. However, a 16oz can of Bang energy drink has 300mg, which is more than most coffees. Use our <Link href="/calculators/caffeine-drink-comparison">Caffeine Drink Comparison Tool</Link> to see them side-by-side.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3">
                        <AccordionTrigger>Is the caffeine data in this database accurate?</AccordionTrigger>
                        <AccordionContent>
                          We compile our data from brand-provided information, independent lab tests, and academic studies to be as accurate as possible. However, brands can change their formulas, so always check the product label if available. This database is an excellent guide for estimation.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-4">
                        <AccordionTrigger>Can I add a drink that isn't listed?</AccordionTrigger>
                        <AccordionContent>
                          Yes. This tool now features an 'Add Custom Drink' form. You can enter the name, category, caffeine, and size of any beverage, and it will be saved in your browser's local storage for future use within the database.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="faq-5">
                        <AccordionTrigger>Why is knowing the exact caffeine content important?</AccordionTrigger>
                        <AccordionContent>
                           Knowing your exact intake is the first step to managing your caffeine effectively. It's essential for staying under the 400mg daily safe limit, protecting your sleep, and avoiding side effects. Use our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> to track your total consumption.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="faq-6">
                        <AccordionTrigger>How much caffeine is in decaf coffee?</AccordionTrigger>
                        <AccordionContent>
                           Decaf is not completely caffeine-free. A typical 8oz cup of decaf coffee contains about 2-7mg of caffeine. You can find specific decaf brands and their values by searching the database.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-7">
                        <AccordionTrigger>Does the way coffee is brewed affect its caffeine content?</AccordionTrigger>
                        <AccordionContent>
                          Yes, significantly. Cold brew, for example, is often much higher in caffeine than standard drip-brewed coffee because of the higher coffee-to-water ratio and longer steep time. This database accounts for different preparation methods.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="faq-8">
                        <AccordionTrigger>How does tea caffeine content compare to coffee?</AccordionTrigger>
                        <AccordionContent>
                           Generally, tea has less caffeine than a similarly-sized coffee. A cup of black tea has about 47mg, and green tea has about 28mg. Compare this to a standard coffee with 95mg. You can use our <Link href="/calculators/caffeine-drink-comparison">Caffeine Drink Comparison Tool</Link> for a visual breakdown.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-9">
                        <AccordionTrigger>Now that I know my drink's caffeine, what's next?</AccordionTrigger>
                        <AccordionContent>
                          The next step is to understand how your body processes that caffeine. Use our <Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link> to see how long it will stay in your system and affect your sleep.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-10">
                        <AccordionTrigger>Are there any caffeine-free sodas?</AccordionTrigger>
                        <AccordionContent>
                          Yes. Many popular sodas like Sprite, 7 Up, Fanta, and most root beers are caffeine-free. You can filter the database by the 'Soda' category and sort by 'Caffeine: Low to High' to see all the zero-caffeine options.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
          
          <Separator />

          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools & Resources</h2>
              <div className="space-y-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-intake" className="hover:underline">Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Found your drink? Now add it to our Intake Calculator to track your total daily consumption against safe limits.</p>
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
                          <p>Compare your drink with others side-by-side to understand its relative strength in a visual chart.</p>
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
