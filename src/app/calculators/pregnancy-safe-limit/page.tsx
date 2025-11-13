
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
import { AlertTriangle, HeartPulse, Baby } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import dynamic from 'next/dynamic';

const PregnancySafeLimitCalculator = dynamic(() => import('@/components/features/PregnancySafeLimitCalculator'), {
  ssr: false,
  loading: () => <div className="max-w-4xl mx-auto h-[600px] bg-muted rounded-lg animate-pulse" />,
});


export const metadata: Metadata = {
  title: 'Pregnancy Caffeine Calculator — Track Your Daily Intake Safely',
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
    "@id": "https://calculation.site/calculators/pregnancy-safe-limit"
  },
  "description": "Track your daily caffeine intake to ensure you're staying within the recommended safe limits for a healthy pregnancy.",
  "articleBody": "Major health bodies recommend limiting caffeine intake to less than 200 milligrams (mg) per day during pregnancy. This calculator provides a clear, visual way to log your drinks and see your total consumption in real-time, helping you manage it wisely for the health of both you and your baby."
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

        <PregnancySafeLimitCalculator />
        
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction" aria-labelledby="introduction-heading">
              <h2 id="introduction-heading" className="text-3xl font-bold">
                  Navigating Caffeine with Confidence During Pregnancy
              </h2>
              <p>
                  Pregnancy is a time of joy, anticipation, and countless questions—especially when it comes to diet. One of the most common concerns for expectant mothers is caffeine. "Can I still have my morning coffee?" "How much is too much?" The anxiety around these questions is valid. This <strong>Pregnancy Caffeine Calculator</strong> is designed to replace that uncertainty with clarity and confidence. It’s a simple, science-backed tool to help you track your daily intake and ensure it stays within the safe limits recommended by leading health organizations.
              </p>
              <p>
                  The primary problem this tool solves is the difficulty of tracking caffeine consumption from various sources. Most people are surprised to learn how quickly caffeine can add up from coffee, tea, soda, chocolate, and even some medications. For pregnant women, this tracking is particularly crucial. Major health bodies, including the American College of Obstetricians and Gynecologists (ACOG), recommend limiting caffeine intake to <strong>less than 200 milligrams (mg) per day</strong> during pregnancy. This is because caffeine can cross the placenta, and a developing baby's metabolism is not yet mature enough to process it effectively.
              </p>
              <p>
                  This calculator provides a clear, visual way to log your drinks and see your total consumption in real-time. It helps you make mindful choices throughout the day, so you can enjoy a comforting cup of tea or a small coffee without the stress of wondering if you've had too much. It’s not about eliminating caffeine entirely, but about managing it wisely for the health of both you and your baby. For a broader view of your habits, you can also use our main <Link href="/calculators/intake">Caffeine Intake Calculator</Link> when not pregnant.
              </p>
          </section>

          <Separator />

          <section id="how-it-works" aria-labelledby="how-it-works-heading">
              <h2 id="how-it-works-heading" className="text-3xl font-bold">How This Calculator Works: The Science of Safety</h2>
              <p>
                  This tool is built on the clear guideline of a 200mg daily limit. Its purpose is to provide a simple, accurate summation of your caffeine intake from various beverages, giving you a running total and a visual progress bar against this crucial threshold.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-3"><Baby className="text-primary" aria-hidden="true"/>Why the 200mg Limit?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                          When you consume caffeine, it is absorbed into your bloodstream and crosses the placenta to your baby. A mature adult body clears caffeine with relative efficiency (a half-life of about 3-5 hours). However, a fetus lacks the necessary enzymes to metabolize caffeine effectively. This means caffeine and its byproducts can accumulate in the baby’s system, where they remain for a much longer period.
                      </p>
                      <p>
                          High levels of caffeine have been associated with potential risks, including restricted fetal growth and low birth weight. Some studies have also suggested a link between very high caffeine intake (well above 200mg) and an increased risk of miscarriage. The 200mg guideline is a conservative, evidence-based recommendation designed to minimize these potential risks. It represents a level of consumption that has not been linked to significant adverse effects in major studies.
                      </p>
                  </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold">Inputs Explained</h3>
              <ul>
                  <li><strong>Drink Selection:</strong> You can choose from a comprehensive database of hundreds of drinks, from a standard coffee to a specific brand of soda. Each item has its caffeine content pre-loaded for accuracy.</li>
                  <li><strong>Quantity:</strong> Log the number of each drink you've had. This is key to understanding your cumulative daily total.</li>
              </ul>
              <p>
                  The calculator simply adds up the caffeine from all your logged drinks to provide a total for the day. This number is then displayed and compared against the 200mg limit, so you always know where you stand.
              </p>

              <h3 className="text-2xl font-semibold">Factors That Can Influence Sensitivity</h3>
              <p>
                  During pregnancy, your body undergoes significant changes, including how it processes caffeine.
              </p>
              <ul>
                  <li><strong>Slower Metabolism:</strong> Caffeine metabolism can slow dramatically during pregnancy. In the third trimester, the half-life of caffeine can increase to as long as 15 hours, compared to 3-5 hours for a non-pregnant adult. This means you might feel the effects of a morning coffee well into the evening.</li>
                  <li><strong>Individual Sensitivity:</strong> Your pre-pregnancy sensitivity, which you can explore with our <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link>, still plays a role. If you were a "slow metabolizer" before pregnancy, you may feel the effects even more profoundly now.</li>
              </ul>
          </section>

          <Separator />
          
          <section id="instructions" aria-labelledby="instructions-heading">
              <h2 id="instructions-heading" className="text-3xl font-bold">Step-by-Step Instructions: How to Use the Tracker</h2>
              <ol className="list-decimal pl-5 space-y-2">
                  <li>
                      <strong>Add a Drink:</strong> Use the "Search for a drink" button to open the list of beverages.
                  </li>
                  <li>
                      <strong>Select Your Beverage:</strong> Click on the name of the drink you consumed. It will be added to your daily log.
                  </li>
                  <li>
                      <strong>Adjust Quantity:</strong> If you had more than one serving, update the number in the input field next to the drink name.
                  </li>
                  <li>
                      <strong>Review Your Total:</strong> The calculator will automatically update your total daily caffeine intake. The progress bar gives you a quick visual of how close you are to the 200mg limit.
                  </li>
                  <li>
                      <strong>Check Your Status:</strong> The alert box at the bottom provides immediate feedback, letting you know if you are within the safe limit or have exceeded it.
                  </li>
              </ol>
          </section>

          <Separator />

          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold">Frequently Asked Questions About Caffeine and Pregnancy</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the official recommended caffeine limit during pregnancy?</AccordionTrigger>
                <AccordionContent>
                  Most major health organizations, including the American College of Obstetricians and Gynecologists (ACOG), recommend that pregnant women limit their caffeine intake to <strong>less than 200 milligrams (mg) per day</strong>. This calculator is built around that guideline.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How much caffeine is in a typical cup of coffee or tea?</AccordionTrigger>
                <AccordionContent>
                  It varies greatly. A standard 8 oz (240 ml) cup of brewed coffee can have about 95mg. The same size cup of black tea has around 47mg, and green tea has about 28mg. It's best to use our <Link href="/calculators/drinks-database">Caffeine in Drinks Database</Link> or this calculator's search feature to find specific values.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is decaf coffee completely caffeine-free?</AccordionTrigger>
                <AccordionContent>
                  No, decaf coffee still contains a small amount of caffeine, typically 2-7mg per cup. While this is a very low amount, it's good to be aware of if you drink multiple cups of decaf per day.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Does caffeine affect the baby?</AccordionTrigger>
                <AccordionContent>
                  Yes. Caffeine crosses the placenta and enters the baby's bloodstream. A developing fetus cannot metabolize caffeine efficiently, so it stays in their system longer. This is why limiting intake is recommended to reduce potential risks like low birth weight.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Are energy drinks safe during pregnancy?</AccordionTrigger>
                <AccordionContent>
                  Energy drinks are generally not recommended during pregnancy. They often contain very high levels of caffeine (some up to 300mg, exceeding the daily limit in one can) as well as other stimulants and ingredients whose effects on a developing fetus have not been well-studied. You can use our <Link href="/calculators/drink-comparison">Drink Comparison Tool</Link> to see just how potent they are.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>I accidentally went over the 200mg limit. What should I do?</AccordionTrigger>
                <AccordionContent>
                  Try not to worry. The 200mg limit is a conservative guideline, and exceeding it on a single occasion is unlikely to cause harm. Simply be more mindful of your intake for the following days. If you have any concerns, always speak with your healthcare provider. This tool is for tracking, not for medical advice.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/intake" className="hover:underline">Daily Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Our main calculator for tracking caffeine against the standard 400mg limit for non-pregnant adults.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/drinks-database" className="hover:underline">Caffeine in Drinks Database</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Search our extensive database to find the caffeine content of your favorite beverages.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-withdrawal-tracker" className="hover:underline">Withdrawal Tracker</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>If you're looking to reduce your intake, this tool helps you create a tapering plan to minimize headaches.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
