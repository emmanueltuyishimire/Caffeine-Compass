
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { BrainCircuit, Moon, ZapOff, CheckCircle, Clock, Heart, User, Briefcase, GraduationCap, Droplet } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import HalfLifeEstimatorLoader from '@/components/features/loaders/HalfLifeEstimatorLoader';
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
  title:
    'Caffeine Half-Life Calculator — Find Out How Long Caffeine Stays in Your System',
  description:
    'Use our free, science-based calculator to estimate caffeine’s half-life in your body. Learn how metabolism, genetics, and timing affect focus and sleep.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Half-Life Calculator — Find Out How Long Caffeine Stays in Your System",
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
    "@id": "https://calculation.site/calculators/caffeine-half-life"
  },
  "description": "Visualize how caffeine decays in your body over time to optimize intake and protect sleep quality.",
  "articleBody": "This tool gives you a clear, visual representation of how long caffeine really sticks around. It answers a crucial question: 'How long will that coffee affect me?' by using a standard pharmacokinetic model to estimate caffeine clearance. By understanding your personal caffeine decay curve, you can strategically time your intake for maximum focus and ensure it has faded by the time you want to rest.",
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
        "name": "Calculators",
        "item": "https://calculation.site/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Caffeine Half-Life Calculator",
        "item": "https://calculation.site/calculators/caffeine-half-life"
      }
    ]
  },
  "howTo": {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Caffeine Half-Life Calculator",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Caffeine Dose",
        "text": "Input the amount of caffeine you consumed in milligrams (mg). If you don't know the exact amount, find it in our Drinks Database."
      },
      {
        "@type": "HowToStep",
        "name": "Select Your Metabolism Speed",
        "text": "Choose your estimated half-life in hours. The average is 5 hours. If you're sensitive, you might be a 'slow metabolizer' (6-8 hours). If you have high tolerance, you could be a 'fast metabolizer' (3-4 hours). Our Sensitivity Test can help."
      },
      {
        "@type": "HowToStep",
        "name": "Analyze the Decay Chart",
        "text": "The calculator generates a chart showing the estimated amount of caffeine remaining in your system for each hour after consumption."
      },
      {
        "@type": "HowToStep",
        "name": "Check Your Bedtime Level",
        "text": "Use the chart to see how much caffeine will still be active when you go to sleep. For best results, this number should be as low as possible (ideally under 20-30mg)."
      }
    ]
  },
   "faqPage": {
    "@type": "FAQPage",
    "mainEntity": [
        {
        "@type": "Question",
        "name": "What is caffeine half-life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Caffeine half-life is the amount of time it takes for your body to eliminate 50% of the caffeine you've consumed. For example, if you consume 100 mg of caffeine and have a 5-hour half-life, you will have 50 mg remaining in your system after 5 hours. This concept is crucial for understanding how long caffeine affects your sleep."
        }
      },
      {
        "@type": "Question",
        "name": "Why is caffeine half-life important for sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's important because even small amounts of caffeine remaining in your system at bedtime can disrupt your sleep architecture, particularly reducing deep sleep (SWS) and REM sleep. This leads to poor sleep quality, even if you don't have trouble falling asleep. Knowing your half-life helps you set a caffeine curfew to ensure it's cleared before bed."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average caffeine half-life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average caffeine half-life in healthy adults is around 5 hours. However, this can vary widely, from as little as 2 hours to as long as 10 hours, depending on genetics, liver health, medication use, and whether you smoke."
        }
      },
      {
        "@type": "Question",
        "name": "How can I estimate my personal caffeine half-life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a good estimate by observing your body's response. If an afternoon coffee makes you jittery or keeps you up at night, you're likely a 'slow metabolizer' with a longer half-life (6-8 hours). If it has little effect on your sleep, you're likely a 'fast metabolizer' (3-4 hours). Our Caffeine Sensitivity Test can help you get a more evidence-based estimate."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 'caffeine curfew' and how do I set one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A caffeine curfew is the latest time of day you consume any caffeine to avoid sleep disruption. A good rule of thumb is to set it 10-12 hours before your bedtime. This is based on two half-lives, which allows your body to clear at least 75% of the caffeine. Use our Half-Life Calculator to personalize this for your metabolism."
        }
      },
      {
        "@type": "Question",
        "name": "Does the amount of caffeine I drink change its half-life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the half-life is a rate of elimination, so it remains constant regardless of the dose. However, a larger initial dose means that more total milligrams of caffeine will be in your system at every point along the decay curve, prolonging the time until it's fully cleared."
        }
      },
      {
        "@type": "Question",
        "name": "If I don't feel 'buzzed' anymore, does that mean the caffeine is gone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, this is a common misconception. The noticeable psychoactive effects (the 'buzz') wear off much faster than the caffeine is actually eliminated from your system. Even low, non-perceptible levels of caffeine can be enough to interfere with the quality of your deep sleep and REM sleep."
        }
      },
      {
        "@type": "Question",
        "name": "Does being a 'slow metabolizer' of caffeine have other health implications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, some research suggests that slow metabolizers who consume high amounts of caffeine may have a slightly increased risk of certain cardiovascular issues like hypertension, as the stimulant stays in their system longer. Knowing your type can help you make better long-term health decisions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I speed up my caffeine metabolism to improve my sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not really. Your metabolic rate is primarily determined by your genetics (the CYP1A2 gene). While factors like exercise might have a minor effect, you cannot significantly speed up the process. The most effective strategy is not to speed up metabolism, but to time your intake according to your natural rate."
        }
      },
      {
        "@type": "Question",
        "name": "How does smoking or pregnancy affect caffeine half-life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smoking can induce the CYP1A2 enzyme, causing smokers to metabolize caffeine up to 50% faster (shorter half-life). Conversely, pregnancy dramatically slows down caffeine metabolism, with the half-life extending to as long as 15 hours in the third trimester."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 'quarter-life' of caffeine and why is it important for sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The quarter-life is the time it takes for 75% of the caffeine to be eliminated (or 25% to remain). This is equal to two half-lives. For sleep, this is often a more useful metric than half-life. For an average person (5-hour half-life), the quarter-life is 10 hours. This is why a 'no caffeine after 2 PM for a midnight bedtime' rule is so effective."
        }
      },
      {
        "@type": "Question",
        "name": "Does drinking water help 'flush out' caffeine faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While staying hydrated is good for overall health and can help mitigate side effects like jitteriness, it does not speed up the rate at which your liver metabolizes caffeine. Only time can clear caffeine from your system."
        }
      },
       {
        "@type": "Question",
        "name": "Is caffeine from tea metabolized differently than caffeine from coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The caffeine molecule itself is metabolized by the same enzymes at the same rate, regardless of the source. However, tea also contains L-theanine, an amino acid that has calming effects and can alter the subjective 'feel' of the caffeine, making it seem smoother and less jarring."
        }
      },
      {
        "@type": "Question",
        "name": "How much caffeine is left in my system at bedtime if I have a coffee at noon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This depends on the dose and your metabolism. For an average person with a 5-hour half-life who drinks a 100mg coffee at noon, there would be about 25mg left at 10 PM. You can get a precise, visual answer for your specific situation using our Caffeine Half-Life Calculator."
        }
      },
      {
        "@type": "Question",
        "name": "Can I trust this site's Caffeine Sensitivity Test to determine my half-life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Caffeine Sensitivity Test provides a strong estimate based on your reported symptoms, which correlate closely with genetic metabolic speed. While not a DNA test, it's a practical and accessible tool to help you select the 'Fast,' 'Average,' or 'Slow' setting in the Half-Life Calculator, giving you a much more personalized and accurate picture of your caffeine decay curve."
        }
      }
    ]
  }
};

export default function HalfLifeCalculatorPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4" id="page-title">
            Caffeine Half-Life Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize how caffeine decays in your body. Use this tool to optimize your intake for peak performance and protect your sleep quality.
          </p>
        </header>

        <div>
            <div className="mb-12">
                <HalfLifeEstimatorLoader />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-12">
                <section id="introduction" aria-labelledby="introduction-heading">
                    <h2 id="introduction-heading" className="text-3xl font-bold">The Invisible Clock: Decoding Your Body's Response to Caffeine</h2>
                    <p>
                      You drink a coffee at 3 PM for a much-needed boost, feeling sharp and productive for the rest of the workday. You don't feel "caffeinated" by the time you go to bed, yet you find yourself tossing and turning, or waking up feeling groggy and unrefreshed. Sound familiar? The culprit is often a simple but profound misunderstanding of caffeine's lingering presence in your body. The key to solving this mystery lies in a single, powerful concept: <strong>caffeine half-life</strong>. This measurement is the invisible clock that dictates how long caffeine truly affects you, and it is the single most important factor in the relationship between your daily coffee and your nightly <strong>sleep</strong> quality.
                    </p>
                    <p>
                      The primary problem that drives millions to search for terms like "caffeine and sleep" or "how long does caffeine last" is the disconnect between how they <em>feel</em> and what is happening biochemically. The noticeable "buzz" from caffeine wears off relatively quickly, but the substance itself remains active in your bloodstream for many hours, silently disrupting the delicate architecture of your sleep. It's a potent saboteur of deep sleep and REM sleep, the stages critical for physical repair, memory consolidation, and emotional regulation. This leads to a frustrating paradox where you might sleep for a full eight hours but fail to get the restorative benefits, leaving you tired and reaching for more caffeine the next morning, perpetuating a difficult cycle.
                    </p>
                    <p>
                      This calculator allows you to visualize just how long that cup of coffee sticks around. By understanding your personal caffeine decay curve, you can strategically time your intake for maximum focus when you need it and ensure it has faded by the time you want to rest. The journey to better sleep and optimized energy starts with understanding this invisible clock.
                    </p>
                </section>

                <Separator />
                
                <section id="how-it-works" aria-labelledby="how-it-works-heading">
                    <h2 id="how-it-works-heading" className="text-3xl font-bold">How This Calculator Works: The Science of Your Caffeine Decay Curve</h2>
                     <p>
                        This tool uses a standard pharmacokinetic model to visualize how the caffeine you consume is cleared from your body over time. The result is a personalized "decay curve" that shows you the amount of active caffeine remaining hour by hour.
                    </p>
                    
                    <h3 className="text-2xl font-semibold">Inputs Explained: Crafting Your Personalized Profile</h3>
                    <p>To provide an accurate estimate, the calculator relies on two key inputs from you:</p>
                    <ul>
                        <li><strong>Caffeine Consumed (mg):</strong> This is the initial dose and the starting point of the calculation. A larger dose will naturally take longer to clear. If you're unsure of the exact amount, you can find precise numbers for thousands of beverages in our <Link href="/calculators/caffeine-drinks-database">Caffeine in Drinks Database</Link>.</li>
                        <li><strong>Caffeine Half-Life (hours):</strong> This is the most important variable for personalizing your results. It's the time it takes your body to eliminate 50% of the caffeine. While the population average is around 5 hours, your personal genetics can cause this to vary significantly. If you're unsure, our <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> provides an excellent evidence-based estimate.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold">The Scientific Background: Adenosine, Half-Life, and Sleep Architecture</h3>
                    <p>
                        When you consume caffeine, it works by blocking adenosine, your brain's natural sleep-inducing chemical. The longer caffeine remains in your system to block these receptors, the more it will interfere with sleep. The duration of this effect is governed by its half-life. For instance, with a 100 mg dose and a 5-hour half-life:
                    </p>
                    <ul>
                        <li>After 5 hours, 50 mg remains.</li>
                        <li>After 10 hours, 25 mg remains.</li>
                        <li>After 15 hours, 12.5 mg remains.</li>
                    </ul>
                    <p>
                        This lingering caffeine is the saboteur of your sleep quality. Even 25 mg—the equivalent of a quarter cup of coffee—is enough to suppress the vital, restorative stages of your sleep cycle. Deep sleep (SWS) is critical for physical restoration and hormone regulation, while REM sleep is essential for memory consolidation and emotional processing. Caffeine reduces both, which is why you can sleep for a full eight hours and still wake up physically and mentally drained. This calculator shows you exactly how much of this sleep-disrupting compound is left at any given hour.
                    </p>
                </section>

                <Separator/>

                 <section id="key-features" aria-labelledby="key-features-heading">
                  <h2 id="key-features-heading" className="text-3xl font-bold">Key Features of This Tool</h2>
                  <Table>
                      <caption className='sr-only'>Features of the Caffeine Half-Life Calculator</caption>
                      <TableHeader>
                          <TableRow>
                              <TableHead>Feature</TableHead>
                              <TableHead>Description</TableHead>
                              <TableHead>Why It Matters</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          <TableRow>
                              <TableCell className="font-medium">Visual Decay Chart</TableCell>
                              <TableCell>Generates a clear bar chart showing the estimated caffeine remaining in your system hour by hour.</TableCell>
                              <TableCell>Transforms abstract numbers into a tangible, easy-to-understand visual, making the long-term impact of caffeine immediately apparent.</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell className="font-medium">Customizable Inputs</TableCell>
                              <TableCell>Allows you to input your specific caffeine dose and estimated personal half-life.</TableCell>
                              <TableCell>Provides a personalized estimate that reflects your actual consumption and unique biology, not just generic averages.</TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell className="font-medium">Real-Time Calculation</TableCell>
                              <TableCell>The chart updates instantly as you adjust the caffeine amount or half-life.</TableCell>
                              <TableCell>Enables quick experimentation, allowing you to model different scenarios and understand how dosage and metabolism speed interact.</TableCell>
                          </TableRow>
                      </TableBody>
                  </Table>
              </section>

              <Separator />

              <section id="how-to-use" aria-labelledby="how-to-use-heading">
                <h2 id="how-to-use-heading" className="text-3xl font-bold">Step-by-Step Instructions</h2>
                  <ol className="list-decimal pl-5 space-y-4">
                    <li>
                        <strong>Step 1: Enter Your Dose</strong><br/>
                        In the "Caffeine Consumed (mg)" field, enter the amount of caffeine from your beverage. Use our <Link href="/calculators/caffeine-drinks-database">Drinks Database</Link> if you're unsure.
                    </li>
                    <li>
                        <strong>Step 2: Enter Your Half-Life</strong><br/>
                        In the "Caffeine Half-Life (hours)" field, input your estimated metabolic speed. Start with 5 for average, or use the result from our <Link href="/calculators/caffeine-sensitivity-test">Sensitivity Test</Link>.
                    </li>
                    <li>
                        <strong>Step 3: Analyze the Chart</strong><br/>
                        The chart displays the caffeine decaying over 12 hours. The footer provides a summary of how much is left after 8 hours—a critical window for sleep. Use this to determine your personal "caffeine curfew."
                    </li>
                  </ol>
              </section>

               <Separator />

                <section id="worked-examples" aria-labelledby="worked-examples-heading">
                  <h2 id="worked-examples-heading" className="text-3xl font-bold">Worked Examples: Real-World Scenarios</h2>
                  
                  <Card className="mb-6">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-3"><GraduationCap aria-hidden="true"/> The Student's All-Nighter Mistake</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                          <p><strong>Persona:</strong> A 20-year-old student, Chloe, drinks a 200mg Celsius energy drink at 4 PM to fuel an evening study session for her finals. She plans to go to bed at midnight to get some rest before her exam.</p>
                          <p><strong>Calculator Result:</strong> Chloe is an average metabolizer (5-hour half-life). The calculator shows that after 8 hours (from 4 PM to 12 AM), she will still have approximately <strong>66 mg</strong> of caffeine in her system.</p>
                          <p><strong>Interpretation:</strong> This is the equivalent of drinking a full shot of espresso right before bed. While she may feel tired enough to fall asleep, this significant caffeine dose will devastate her REM sleep, which is critical for memory consolidation. The calculator reveals that her study strategy is actively working against her ability to retain information.</p>
                      </CardContent>
                  </Card>

                  <Card className="mb-6">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-3"><Briefcase aria-hidden="true"/> The Professional's "Harmless" Latte</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                          <p><strong>Persona:</strong> Mark, a 45-year-old manager who identifies as a "slow metabolizer," has a latte (containing about 64mg of caffeine) at 1 PM after lunch. He avoids coffee later in the day but still feels his sleep isn't as deep as it should be.</p>
                          <p><strong>Calculator Result:</strong> Using a 6-hour half-life, the calculator shows that after 9 hours (from 1 PM to 10 PM), he still has about <strong>23 mg</strong> of caffeine in his system.</p>
                          <p><strong>Interpretation:</strong> For a sensitive, slow metabolizer, this 23mg is enough to subtly reduce sleep quality. The calculator validates his feeling that something is "off" and empowers him to experiment with moving his last coffee even earlier, to 11 AM or noon, to get that number closer to zero.</p>
                      </CardContent>
                  </Card>
                   <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-3"><Heart aria-hidden="true" /> The Athlete's Pre-Workout Timing</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                          <p><strong>Persona:</strong> Maya, a 30-year-old athlete, is a "fast metabolizer." She wants to use caffeine to boost her performance for a 6 PM workout but is worried about sleep. Her bedtime is 11 PM.</p>
                          <p><strong>Calculator Result:</strong> Maya uses the calculator and sets the half-life to 4 hours. She wants to take a 200mg pre-workout an hour before her workout, at 5 PM. The calculator shows that after 6 hours (at 11 PM), there will be only ~35mg left in her system.</p>
                          <p><strong>Interpretation:</strong> While not zero, this is a manageable amount for a fast metabolizer. She tries it and finds that her performance is enhanced, and her sleep is not significantly affected. The calculator gave her the data-driven confidence to use caffeine strategically, something she was previously too afraid to do.</p>
                      </CardContent>
                  </Card>
              </section>

              <Separator/>

               <section id="use-cases" aria-labelledby="use-cases-heading">
                <h2 id="use-cases-heading" className="text-3xl font-bold">Real-Life Use Cases</h2>
                <h3 className="text-2xl font-semibold">1. Establishing Your Personal Caffeine Curfew</h3>
                <p>The most powerful application of this tool is to set a data-driven "caffeine curfew." Instead of a generic "no coffee after 2 PM" rule, you can find your precise cutoff. Work backward from your bedtime. If you want less than 20mg of caffeine in your system by 10 PM, when is the absolute latest you can drink a 150mg cold brew? Use the calculator to find that tipping point. This transforms your approach from guessing to strategic planning.</p>
                
                <h3 className="text-2xl font-semibold">2. Diagnosing Unexplained Sleep Issues</h3>
                <p>If you suffer from waking up groggy (a sign of poor sleep quality), this calculator is your first diagnostic step. Track your last caffeinated drink of the day—even if it's just a green tea or a piece of dark chocolate—and use the calculator to see your bedtime caffeine level. Many people are shocked to find that their seemingly harmless afternoon habit is leaving 30-50mg of caffeine in their system all night, sabotaging their rest.</p>

                <h3 className="text-2xl font-semibold">3. Managing Social and Evening Events</h3>
                <p>What about a dinner party where espresso is served after the meal? By understanding your decay curve, you can make an informed choice. A fast metabolizer might calculate that a 9 PM espresso shot (64mg) will be down to a manageable 16mg by 1 AM. A slow metabolizer, seeing the same numbers, can confidently opt for a decaf or herbal tea, knowing they are protecting their sleep.</p>
            </section>

            <Separator/>
            <section id="common-mistakes" aria-labelledby="common-mistakes-heading">
              <h2 id="common-mistakes-heading" className="text-3xl font-bold">Common Mistakes That Sabotage Sleep</h2>
              <Table>
                  <caption className="sr-only">Common mistakes related to caffeine timing and sleep</caption>
                  <TableHeader>
                      <TableRow>
                          <TableHead>Mistake</TableHead>
                          <TableHead>Why It Happens</TableHead>
                          <TableHead>How to Fix</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow>
                          <TableCell className="font-medium">The "It's Not Coffee" Fallacy</TableCell>
                          <TableCell>Forgetting that afternoon tea (47mg), diet soda (46mg), or even dark chocolate (24mg) contains enough caffeine to disrupt sleep.</TableCell>
                          <TableCell>Log <strong>all</strong> potential caffeine sources. Use our <Link href="/calculators/caffeine-intake">Intake Calculator</Link> to find hidden caffeine in your diet.</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="font-medium">Trusting How You "Feel"</TableCell>
                          <TableCell>Assuming that because you don't feel "buzzed," the caffeine is gone. The subjective feeling of alertness fades much faster than the chemical is cleared.</TableCell>
                          <TableCell>Trust the science, not the feeling. Use this calculator to see the actual amount of caffeine still active in your system at bedtime.</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell className="font-medium">Ignoring Your Metabolism</TableCell>
                          <TableCell>Following a "one-size-fits-all" rule from a friend who is a fast metabolizer, when you are a slow metabolizer.</TableCell>
                          <TableCell>Use the <Link href="/calculators/caffeine-sensitivity-test">Sensitivity Test</Link> to understand your unique biology and set a personal curfew that works for you.</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
            </section>
              
              <Separator />

                <section id="faq" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-3xl font-bold">Frequently Asked Questions</h2>
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
                      The best way to determine this is to use this calculator and work backward from your bedtime. A good rule of thumb for most people is to establish a "caffeine curfew" <strong>10-12 hours</strong> before bed. Read our full article on <Link href="/articles/how-long-before-bed-to-stop-caffeine">when to stop caffeine</Link> for a deep dive.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>I'm a slow metabolizer. What does that mean for my sleep?</AccordionTrigger>
                    <AccordionContent>
                      It means you must be extra careful. As a slow metabolizer, your caffeine half-life could be 6-8 hours or more. For you, a coffee at noon could leave a significant amount of caffeine in your system at 10 PM, almost guaranteeing sleep disruption. Your caffeine curfew should be much earlier, likely before 10 or 11 AM. You can get an estimate of your type with our <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger>Does the food I eat with coffee affect how it impacts my sleep?</AccordionTrigger>
                    <AccordionContent>
                      Food can slow the <em>absorption</em> of caffeine, meaning the peak effect might be less intense but more drawn out. However, it does not significantly change the half-life or the rate at which your liver eliminates the caffeine. The total amount your body has to deal with remains the same, so the impact on sleep over many hours is largely unchanged.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger>What is a safe level of caffeine to have in my system at bedtime?</AccordionTrigger>
                    <AccordionContent>
                      While individual sensitivity varies, most sleep experts recommend having as little as possible, ideally under 20mg. This calculator helps you see if your current coffee timing allows you to reach that goal.
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
      </div>
    </>
  );
}
