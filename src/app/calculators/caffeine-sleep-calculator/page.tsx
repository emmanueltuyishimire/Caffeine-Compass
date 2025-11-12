
import HalfLifeEstimator from '@/components/features/HalfLifeEstimator';
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
import { Moon, Clock, BrainCircuit } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title:
    'Caffeine Sleep Calculator — How Much Caffeine Is Left at Bedtime?',
  description:
    'Calculate how much caffeine is still in your system at bedtime. Use our science-based tool to optimize your coffee timing and protect your sleep quality.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Sleep Calculator — How Much Caffeine Is Left at Bedtime?",
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
    "@id": "https://caffeine-calculation-site.com/calculators/caffeine-sleep-calculator"
  },
  "description": "Calculate how much residual caffeine will be in your system at bedtime to protect and improve your sleep quality.",
  "articleBody": "This calculator helps you determine the amount of caffeine left in your body at bedtime based on the dose and timing of your last caffeinated drink and your personal metabolism speed. It visualizes the caffeine decay curve, empowering you to make smarter choices about your caffeine consumption to ensure it does not interfere with deep, restorative sleep."
};

export default function CaffeineSleepCalculatorPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Sleep Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            That afternoon coffee could be sabotaging your rest. Use this calculator to see exactly how much caffeine will still be in your system at bedtime.
          </p>
        </header>

        <HalfLifeEstimator />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
          <section id="introduction">
            <h2 className="text-3xl font-bold">
              The Invisible Thief: How Lingering Caffeine Steals Your Sleep
            </h2>
            <p>
              It's a frustratingly common scenario: you feel exhausted, you go to bed on time, but you just can't get high-quality, restorative sleep. You might toss and turn, or you might sleep through the night but wake up feeling groggy and unrefreshed. The culprit is often the "ghost" of a coffee you drank hours earlier. This <strong>Caffeine Sleep Calculator</strong> is designed to expose this invisible thief by showing you just how much caffeine is left in your body when your head hits the pillow.
            </p>
            <p>
              The biggest problem users face is the disconnect between the <em>feeling</em> of being stimulated and the <em>biological reality</em> of caffeine's presence. The initial "buzz" might wear off in a couple of hours, but the caffeine itself hasn't disappeared. It remains in your system, silently blocking adenosine receptors in your brain and preventing you from entering the deep, restorative stages of sleep like SWS and REM sleep. This is why you can feel tired but still get poor-quality rest.
            </p>
            <p>
              This calculator solves that problem by giving you a concrete number. By inputting the dose and time of your last drink, you can visualize how the caffeine decays over time. This empowers you to make data-driven decisions. Instead of guessing, you'll know that a 3 PM coffee might leave 50mg in your system at 11 PM—more than enough to disrupt sleep. Understanding this is the first and most critical step to reclaiming your nights. This tool is a practical application of the concepts discussed in our <Link href="/articles/caffeine-half-life-sleep">Caffeine Half-Life & Sleep article</Link>.
            </p>
          </section>

          <Separator />
          
          <section id="how-to-use">
              <h2 className="text-3xl font-bold">How to Use the Caffeine Sleep Calculator</h2>
              <p>This calculator is essentially a specialized version of our <Link href="/calculators/half-life">Half-Life Calculator</Link>, framed to answer one specific question: "How much caffeine will be in my system at bedtime?"</p>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                    <strong>Enter Your Last Dose:</strong> In the "Caffeine Consumed (mg)" field, enter the amount of caffeine from your last caffeinated beverage of the day. If you're unsure, use our <Link href="/calculators/drinks-database">Drinks Database</Link> to find the amount.
                </li>
                <li>
                    <strong>Select Your Sensitivity:</strong> In the "Metabolism Speed" dropdown, choose the half-life that best matches your personal experience. If you get jittery easily, you're likely a "Slow" metabolizer. If caffeine has little effect on you, you might be "Fast." If you're unsure, take our <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> or start with "Average."
                </li>
                <li>
                    <strong>Interpret the Chart for Sleep:</strong> The chart shows the caffeine decaying hour by hour. To use this as a sleep calculator, find the bar on the chart that corresponds to your bedtime. For example, if you had your coffee 8 hours before bed, look at the "8h" bar. The value shown is the approximate amount of caffeine that will be interfering with your sleep.
                </li>
              </ol>
              <Card className="my-8 bg-primary/5 border-primary/20">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2"><Moon className="text-primary"/>What's a "Safe" Level for Sleep?</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>While there's no official number, most sleep scientists agree that for optimal sleep quality, the amount of caffeine in your system should be as close to zero as possible. Many experts suggest aiming for <strong>less than 20-30mg</strong> at bedtime. Even small amounts can suppress deep sleep and REM sleep, reducing the restorative power of your rest.</p>
                  </CardContent>
              </Card>
          </section>
          
          <Separator />

          <section id="faq">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Why does caffeine disrupt sleep even if I fall asleep easily?</AccordionTrigger>
                <AccordionContent>
                  This is the most common misconception. Falling asleep is only part of the story. Caffeine's main negative effect is on your <strong>sleep architecture</strong>. It reduces the amount of time you spend in deep slow-wave sleep (SWS) and REM sleep. These are the most mentally and physically restorative stages. So, you can "sleep" for 8 hours but wake up feeling unrefreshed because the quality of that sleep was poor.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>What is the best time to have my last coffee?</AccordionTrigger>
                <AccordionContent>
                  The best way to determine this is to use this calculator and work backward from your bedtime. A good rule of thumb for most people is to establish a "caffeine curfew" <strong>10-12 hours</strong> before bed. This gives your body time for at least two half-lives, clearing 75% or more of the caffeine. Read our full article on <Link href="/articles/how-long-before-bed-to-stop-caffeine">when to stop caffeine</Link> for a deep dive.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>I'm a slow metabolizer. What does that mean for my sleep?</AccordionTrigger>
                <AccordionContent>
                  It means you must be extra careful. As a slow metabolizer, your caffeine half-life could be 6-8 hours or more. For you, a coffee at noon could leave a significant amount of caffeine in your system at 10 PM, almost guaranteeing sleep disruption. Your caffeine curfew should be much earlier, likely before 10 or 11 AM.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>Does the food I eat with coffee affect how it impacts my sleep?</AccordionTrigger>
                <AccordionContent>
                  Food can slow the <em>absorption</em> of caffeine, meaning the peak effect might be less intense but more drawn out. However, it does not significantly change the half-life or the rate at which your liver eliminates the caffeine. The total amount your body has to deal with remains the same, so the impact on sleep over many hours is largely unchanged.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />

          <section id="related-tools">
              <h2 className="text-3xl font-bold">Related Tools & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-sensitivity-test" className="hover:underline">Caffeine Sensitivity Test</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Not sure if you're a fast, average, or slow metabolizer? Take this test to get a personalized estimate to use in the calculator.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-timing-optimizer" className="hover:underline">Caffeine Timing Optimizer</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Find the perfect time to drink coffee to boost productivity for a specific task without sabotaging your night.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/articles/caffeine-effect-on-rem-sleep" className="hover:underline">Article: Effect on REM Sleep</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Dive deeper into the science of how lingering caffeine specifically damages the vital REM stage of sleep.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>
        </div>
      </div>
    </>
  );
}
