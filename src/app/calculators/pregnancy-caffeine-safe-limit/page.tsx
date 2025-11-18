
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlertTriangle, ShieldCheck, Coffee, TrendingDown } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import PregnancySafeLimitCalculatorLoader from '@/components/features/loaders/PregnancySafeLimitCalculatorLoader';
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

export const metadata: Metadata = {
  title: 'Pregnancy Caffeine Calculator — Track Daily Caffeine Intake Safely',
  description: 'Track your daily caffeine intake against the recommended 200mg limit for pregnancy. Make informed choices for a healthy pregnancy with our free, science-based tool.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pregnancy Caffeine Calculator — Track Your Daily Intake Safely",
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
    "@id": "https://calculation.site/calculators/pregnancy-caffeine-safe-limit"
  },
  "description": "Track your daily caffeine intake to ensure you're staying within the recommended safe limits for a healthy pregnancy.",
  "articleBody": "Major health bodies recommend limiting caffeine intake to less than 200 milligrams (mg) per day during pregnancy. This calculator provides a clear, visual way to log your drinks and see your total consumption in real-time, helping you manage it wisely for the health of both you and your baby.",
  "howTo": {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Pregnancy Caffeine Calculator",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Log Your Drinks and Snacks",
        "text": "Use the integrated search function to find and add any caffeinated items you consume throughout the day, including coffee, tea, soda, or chocolate."
      },
      {
        "@type": "HowToStep",
        "name": "Add Custom Items",
        "text": "If an item isn't in our database, use the 'Add Custom Item' feature to manually enter its name and caffeine content."
      },
      {
        "@type": "HowToStep",
        "name": "Monitor Your Total Intake",
        "text": "The calculator automatically sums your total caffeine consumption and displays it on a progress bar relative to the 200mg recommended daily limit for pregnancy."
      },
      {
        "@type": "HowToStep",
        "name": "Review Your Status",
        "text": "Check the status alert below the progress bar. It will provide immediate feedback, letting you know if you are within the safe limit or have exceeded it, helping you make informed choices for the rest of your day."
      }
    ]
  },
   "faqPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the safe limit for caffeine during pregnancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The American College of Obstetricians and Gynecologists (ACOG) and other major health organizations recommend limiting caffeine intake to less than 200 milligrams (mg) per day during pregnancy. This calculator is designed to help you track your intake against this specific guideline."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the caffeine limit lower during pregnancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During pregnancy, your body's ability to metabolize caffeine slows down significantly, meaning it stays in your system longer. Caffeine also crosses the placenta, and a developing baby cannot process it effectively. Limiting intake helps reduce potential risks."
        }
      },
      {
        "@type": "Question",
        "name": "How much caffeine is in a typical cup of coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It varies greatly. A standard 8oz (240ml) cup of brewed coffee has about 95mg, but a large coffee from a coffee shop can have over 300mg. It's crucial to check specific products, which you can do with our Caffeine in Drinks Database."
        }
      },
      {
        "@type": "Question",
        "name": "Is decaf coffee safe during pregnancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, decaf coffee is a safe choice. It contains only a very small amount of caffeine (typically 2-7mg per cup), which is not considered significant. It's an excellent way to enjoy the taste of coffee without the risk."
        }
      },
      {
        "@type": "Question",
        "name": "What about caffeine in tea or chocolate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, these sources count toward your daily limit. A cup of black tea can have around 47mg of caffeine, and a 1oz (28g) serving of dark chocolate has about 24mg. This calculator helps you track these 'hidden' sources."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for breastfeeding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While this calculator is specifically set to the 200mg pregnancy limit, the tracking function is useful for breastfeeding. Most experts recommend nursing mothers also limit their intake to around 200-300mg per day, as small amounts of caffeine can pass into breast milk."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I accidentally go over the 200mg limit one day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While it's best to consistently stay under the limit, an occasional day slightly over is not typically a cause for major concern. The guideline is based on consistent, moderate intake. Use this calculator to get back on track the next day. If you have concerns, always speak with your healthcare provider."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce my caffeine intake safely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you're used to a high caffeine intake, it's best to reduce it gradually to avoid withdrawal headaches. Our Caffeine Withdrawal Tracker can help you create a comfortable tapering plan."
        }
      },
      {
        "@type": "Question",
        "name": "Does my slower metabolism during pregnancy affect my sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Because caffeine's half-life can double or even triple during the third trimester, a morning coffee can still be in your system at bedtime, disrupting your sleep. Our Caffeine Half-Life Calculator can help you visualize this effect."
        }
      },
      {
        "@type": "Question",
        "name": "Is this tool a substitute for medical advice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. This is an informational tool only. Always consult with your obstetrician or healthcare provider about caffeine consumption and for any personalized medical advice related to your pregnancy."
        }
      }
    ]
  }
};

export default function PregnancySafeLimitPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Pregnancy Caffeine Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your daily caffeine intake to ensure you're staying within the recommended safe limits for a healthy pregnancy.
          </p>
        </header>

        <div>
            <div className="mb-12">
                <PregnancySafeLimitCalculatorLoader />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-12">
                 <section id="disclaimer" aria-labelledby="disclaimer-heading">
                    <Card className="bg-destructive/10 border-destructive" role="alert">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-destructive"><AlertTriangle aria-hidden="true"/>Medical Disclaimer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-destructive-foreground/90">
                            <p>This tool is for informational purposes only and is not a substitute for professional medical advice. Always consult with your healthcare provider or obstetrician regarding your diet and caffeine consumption during pregnancy.</p>
                        </CardContent>
                    </Card>
                </section>
                
                <section id="introduction" aria-labelledby="introduction-heading">
                    <h2 id="introduction-heading" className="text-3xl font-bold">Navigating Caffeine with Confidence During Pregnancy</h2>
                    <p>
                        Pregnancy is a time of joy, anticipation, and countless questions—especially when it comes to diet. One of the most common concerns for expectant mothers is caffeine. "Can I still have my morning coffee?" "How much is too much?" The anxiety around these questions is valid. This <strong>Pregnancy Caffeine Calculator</strong> is designed to replace that uncertainty with clarity and confidence. It’s a simple, science-backed tool to help you track your daily intake and ensure it stays within the safe limits recommended by leading health organizations.
                    </p>
                    <p>
                        The primary problem this tool solves is the difficulty of tracking caffeine consumption from various sources. Most people are surprised to learn how quickly caffeine can add up from coffee, tea, soda, chocolate, and even some medications. For pregnant women, this tracking is particularly crucial. Major health bodies, including the American College of Obstetricians and Gynecologists (ACOG), recommend limiting caffeine intake to <strong>less than 200 milligrams (mg) per day</strong> during pregnancy. This is because caffeine can cross the placenta, and a developing baby's metabolism is not yet mature enough to process it effectively.
                    </p>
                    <p>
                        This calculator provides a clear, visual way to log your drinks and see your total consumption in real-time. It helps you make mindful choices throughout the day, so you can enjoy a comforting cup of tea or a small coffee without the stress of wondering if you've had too much. It’s not about eliminating caffeine entirely, but about managing it wisely for the health of both you and your baby. For a broader view of your habits, you can also use our main <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> when not pregnant.
                    </p>
                </section>

                <Separator />
                
                 <section id="how-it-works" aria-labelledby="how-it-works-heading">
                    <h2 id="how-it-works-heading" className="text-3xl font-bold">How This Calculator Works: The Science of Safe Limits</h2>
                    <p>This calculator is a specialized version of our main intake tracker, specifically calibrated to the 200mg daily guideline for pregnancy. It provides a simple, visual, and non-judgmental way to monitor your consumption and stay within a safe range.</p>
                    <h3 className="text-2xl font-semibold">Inputs Explained: Totaling Your Daily Intake</h3>
                    <ul>
                        <li><strong>Drink & Food Selection:</strong> The core of the calculator is our comprehensive database. When you add a "Starbucks Short Coffee" or a "can of Diet Coke," you're inputting verified caffeine data. This precision is essential because generic estimates are often inaccurate.</li>
                        <li><strong>Custom Entries:</strong> The "Add Custom Item" feature is crucial for items like a specific brand of chocolate or a local bakery's tea. This ensures you can account for all sources of caffeine, not just the common ones.</li>
                        <li><strong>Quantity Tracking:</strong> By logging each item, you build a real-time picture of your cumulative intake. This helps you understand how multiple "small" sources can add up quickly.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">The Scientific Background: Why is the Limit 200mg?</h3>
                    <p>The 200mg recommendation is based on extensive research into how the body processes caffeine during pregnancy. There are two key reasons for this lower limit:</p>
                    <ol>
                        <li><strong>Slower Maternal Metabolism:</strong> During pregnancy, hormonal changes significantly reduce the activity of the CYP1A2 enzyme in your liver, which is responsible for breaking down caffeine. The half-life of caffeine—the time it takes your body to eliminate 50% of it—can increase dramatically. While it's typically 3-5 hours in a non-pregnant adult, it can extend to <strong>10-15 hours</strong> in the third trimester. This means a morning coffee can still be active in your system late at night.</li>
                        <li><strong>Caffeine Crosses the Placenta:</strong> Caffeine is a small molecule that easily passes from your bloodstream to the baby's. However, a developing fetus lacks the mature liver enzymes needed to metabolize caffeine effectively. This means the stimulant lingers in the baby's system for much longer, potentially affecting heart rate and movement patterns.</li>
                    </ol>
                    <p>Studies have shown that moderate, consistent intake below 200mg per day is not associated with an increased risk of miscarriage or preterm birth. This calculator helps you adhere to that evidence-based guideline, providing peace of mind. By seeing your total on the progress bar, you can immediately gauge whether another caffeinated item is a wise choice.</p>
                </section>

                <Separator />

                 <section id="key-features" aria-labelledby="key-features-heading">
                    <h2 id="key-features-heading" className="text-3xl font-bold">Key Features of This Tool</h2>
                    <Table>
                        <caption className='sr-only'>Features of the Pregnancy Caffeine Calculator</caption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Why It Matters for Pregnancy</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">200mg Pregnancy Limit</TableCell>
                                <TableCell>The progress bar and status alerts are specifically calibrated to the 200mg daily guideline recommended by ACOG.</TableCell>
                                <TableCell>Provides a clear, unambiguous visual cue, removing mental math and making it simple to stay within a safe range.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Comprehensive Database</TableCell>
                                <TableCell>Includes coffee, tea, sodas, energy drinks, and even items like chocolate and some medications.</TableCell>
                                <TableCell>Helps you track all potential sources of caffeine, not just the obvious ones, for a truly accurate daily total.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Real-Time Status Alerts</TableCell>
                                <TableCell>Clear, color-coded alerts tell you if you are within the limit or have exceeded it.</TableCell>
                                <TableCell>Offers instant, non-judgmental feedback to guide your choices throughout the day and reduce anxiety.</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-medium">Custom Item Entry</TableCell>
                                <TableCell>Allows you to add any food or drink with a known caffeine amount.</TableCell>
                                <TableCell>Ensures you can account for everything you consume, providing a complete and trustworthy picture of your intake.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </section>
                
                <Separator />
                
                <section id="how-to-use" aria-labelledby="how-to-use-heading">
                    <h2 id="how-to-use-heading" className="text-3xl font-bold">Step-by-Step Instructions: Tracking Your Intake Safely</h2>
                    <ol className="list-decimal pl-5 space-y-4">
                        <li>
                            <strong>Step 1: Log Your Drinks & Snacks</strong><br/>
                            Use the "Search for a drink to add..." bar to find any caffeinated items you consume. Our database includes coffee, tea, sodas, and even chocolate. Click an item to add it to your daily log.
                        </li>
                        <li>
                            <strong>Step 2: Add Custom Items as Needed</strong><br/>
                            If you have something that's not in our database, like a special brand of chocolate or a local tea, use the "Add Custom Item" section. Enter a name and the caffeine amount in milligrams (mg) from the product's label.
                        </li>
                        <li>
                            <strong>Step 3: Monitor the Progress Bar and Total</strong><br/>
                            As you add items, watch your "Total Daily Intake" number and the progress bar. The bar fills up toward the 200mg limit, giving you a quick visual reference of where you stand.
                        </li>
                         <li>
                            <strong>Step 4: Check Your Status</strong><br/>
                            The alert box at the bottom provides clear, color-coded feedback. It will tell you how much room you have left or if you've gone over the recommended limit, helping you make informed decisions for the rest of your day.
                        </li>
                    </ol>
                </section>

                <Separator />
                
                <section id="worked-examples" aria-labelledby="worked-examples-heading">
                    <h2 id="worked-examples-heading" className="text-3xl font-bold">Worked Examples: Real-World Pregnancy Scenarios</h2>
                    <p>Let's see how different expectant mothers can use this tool to manage their daily caffeine intake.</p>
                    
                    <Card className="mb-6">
                        <CardHeader><CardTitle>First Trimester: The Coffee Craving</CardTitle></CardHeader>
                        <CardContent className="space-y-2">
                            <p><strong>Persona:</strong> Anna, in her first trimester, is craving her usual morning coffee. She's worried about her intake.</p>
                            <p><strong>Her Day:</strong> She decides to have a small, 8oz (240ml) brewed coffee. She logs "Brewed Coffee" (95mg) into the calculator. Later, she has a piece of dark chocolate (24mg).</p>
                            <p><strong>Calculator Result:</strong> Her total is <strong>119 mg</strong>. The alert shows she is "Within Safe Limit."</p>
                            <p><strong>Interpretation:</strong> The calculator reassures Anna that she can enjoy her small coffee and a treat without exceeding the guideline. It removes her anxiety and allows her to manage her cravings safely.</p>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader><CardTitle>Second Trimester: The Hidden Caffeine Trap</CardTitle></CardHeader>
                        <CardContent className="space-y-2">
                            <p><strong>Persona:</strong> Maria, in her second trimester, avoids coffee but drinks several cups of black tea and a soda during her workday.</p>
                            <p><strong>Her Day:</strong> She logs two "Black Tea" (2 x 47mg = 94mg) and one "Coca-Cola Classic" (34mg). In the afternoon, she has another black tea (47mg).</p>
                            <p><strong>Calculator Result:</strong> Her total intake is <strong>175 mg</strong>.</p>
                            <p><strong>Interpretation:</strong> Maria is surprised to see how quickly the caffeine from tea and soda adds up. While she is still within the limit, the calculator makes her aware that she is close to the edge. She decides to switch her final tea to a caffeine-free herbal tea to stay comfortably under the 200mg mark.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle>Third Trimester: Navigating the Coffee Shop</CardTitle></CardHeader>
                        <CardContent className="space-y-2">
                            <p><strong>Persona:</strong> Chloe, in her third trimester, is meeting a friend at Starbucks and wants to order a safe drink.</p>
                            <p><strong>Her Plan:</strong> Before ordering, she uses the calculator's search function. She sees that a Grande Latte (150mg) is a good option, while a Grande Brewed Coffee (310mg) is far over the limit. She also sees that a Tall Latte is only 75mg.</p>
                            <p><strong>Calculator Result:</strong> She confidently orders a Tall Latte (75mg). Her total for the day is well under 200mg.</p>
                            <p><strong>Interpretation:</strong> The tool empowers Chloe to make an informed decision on the spot. Instead of guessing or avoiding the coffee shop altogether, she uses the data to choose a satisfying and safe option.</p>
                        </CardContent>
                    </Card>
                </section>
                
                <Separator />
                
                <section id="faq" aria-labelledby="faq-heading">
                    <h2 id="faq-heading" className="text-3xl font-bold">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="faq-1">
                            <AccordionTrigger>What is the safe limit for caffeine during pregnancy?</AccordionTrigger>
                            <AccordionContent>
                                The American College of Obstetricians and Gynecologists (ACOG) and other major health organizations recommend limiting caffeine intake to <strong>less than 200 milligrams (mg) per day</strong> during pregnancy. This calculator is designed to help you track your intake against this specific guideline.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                            <AccordionTrigger>Why is the caffeine limit lower during pregnancy?</AccordionTrigger>
                            <AccordionContent>
                                During pregnancy, your body's ability to metabolize caffeine slows down significantly, meaning it stays in your system longer. Caffeine also crosses the placenta, and a developing baby cannot process it effectively. Limiting intake helps reduce potential risks.
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="faq-3">
                            <AccordionTrigger>How much caffeine is in a typical cup of coffee?</AccordionTrigger>
                            <AccordionContent>
                                It varies greatly. A standard 8oz (240ml) cup of brewed coffee has about 95mg, but a large coffee from a coffee shop can have over 300mg. It's crucial to check specific products, which you can do with our <Link href="/calculators/caffeine-drinks-database">Caffeine in Drinks Database</Link>.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-4">
                            <AccordionTrigger>Is decaf coffee safe during pregnancy?</AccordionTrigger>
                            <AccordionContent>
                                Yes, decaf coffee is a safe choice. It contains only a very small amount of caffeine (typically 2-7mg per cup), which is not considered significant. It's an excellent way to enjoy the taste of coffee without the risk.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-5">
                            <AccordionTrigger>What about caffeine in tea or chocolate?</AccordionTrigger>
                            <AccordionContent>
                                Yes, these sources count toward your daily limit. A cup of black tea can have around 47mg of caffeine, and a 1oz (28g) serving of dark chocolate has about 24mg. This calculator helps you track these 'hidden' sources.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-6">
                            <AccordionTrigger>Can I use this calculator for breastfeeding?</AccordionTrigger>
                            <AccordionContent>
                                While this calculator is specifically set to the 200mg pregnancy limit, the tracking function is useful for breastfeeding. Most experts recommend nursing mothers also limit their intake to around 200-300mg per day, as small amounts of caffeine can pass into breast milk.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-7">
                            <AccordionTrigger>What happens if I accidentally go over the 200mg limit one day?</AccordionTrigger>
                            <AccordionContent>
                                While it's best to consistently stay under the limit, an occasional day slightly over is not typically a cause for major concern. The guideline is based on consistent, moderate intake. Use this calculator to get back on track the next day. If you have concerns, always speak with your healthcare provider.
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="faq-8">
                            <AccordionTrigger>How can I reduce my caffeine intake safely?</AccordionTrigger>
                            <AccordionContent>
                                If you're used to a high caffeine intake, it's best to reduce it gradually to avoid withdrawal headaches. Our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> can help you create a comfortable tapering plan.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-9">
                            <AccordionTrigger>Does my slower metabolism during pregnancy affect my sleep?</AccordionTrigger>
                            <AccordionContent>
                                Yes, absolutely. Because caffeine's half-life can double or even triple during the third trimester, a morning coffee can still be in your system at bedtime, disrupting your sleep. Our <Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link> can help you visualize this effect.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-10">
                            <AccordionTrigger>Is this tool a substitute for medical advice?</AccordionTrigger>
                            <AccordionContent>
                                No. This is an informational tool only. Always consult with your obstetrician or healthcare provider about caffeine consumption and for any personalized medical advice related to your pregnancy.
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
                            <CardTitle><Link href="/calculators/caffeine-drinks-database">Caffeine in Drinks Database</Link></CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Search our extensive database to find the exact caffeine content of thousands of coffees, teas, and other products.</p>
                          </CardContent>
                        </Card>
                         <Card>
                          <CardHeader>
                            <CardTitle><Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link></CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>If you're looking to reduce your intake before or during pregnancy, this tool helps you create a gradual tapering plan to avoid headaches.</p>
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
