import IntakeCalculator from '@/components/features/IntakeCalculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, Lightbulb, User, Briefcase, GraduationCap, Heart, Droplet } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Caffeine Intake Calculator — Accurate Caffeine Tracking Tool (Free & Science-Based)',
  description:
    'Use this free calculator to measure your caffeine intake, half-life, and safe limits. Backed by sleep science and metabolic research.',
};


export default function IntakeCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Caffeine Intake Calculator — Track Your Daily Consumption
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Log your drinks, measure your total daily caffeine load, and understand how it compares to safe limits for optimal health and performance.
        </p>
      </header>

      <IntakeCalculator />

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
        <section id="introduction">
          <h2 className="text-3xl font-bold">
            Why Tracking Your Caffeine Is a Game-Changer
          </h2>
          <p>
            For millions, caffeine is the invisible engine of modern life. It kickstarts our mornings, powers through afternoon slumps, and fuels late-night study sessions. But how much is too much? And more importantly, how much are you *really* consuming? This Caffeine Intake Calculator is designed to answer that question with scientific precision. It’s more than just a counter; it’s a powerful tool to help you master your energy, sharpen your focus, and protect your sleep.
          </p>
          <p>
            Most people dramatically underestimate their daily caffeine intake. A morning coffee, a lunchtime soda, an afternoon tea, and a piece of dark chocolate can easily push you over the recommended daily limit of 400 mg without you even realizing it. This overconsumption is often the hidden culprit behind anxiety, jitteriness, digestive issues, and, most commonly, poor sleep. The problem is that caffeine’s effects are subtle but cumulative. While one cup might feel fine, the third or fourth can have consequences that linger long after you’ve finished the drink.
          </p>
          <p>
            The truth is, caffeine affects everyone differently. Your body weight, genetics, age, and even the time of day you consume it can alter its impact. That’s why a one-size-fits-all approach to caffeine management simply doesn’t work. Most people underestimate how long caffeine lingers in their bloodstream—leading to restless nights or mid-day crashes. This calculator removes the guesswork, giving you a personalized, data-driven look at your habits. By understanding your intake, you can begin to optimize it for your specific goals, whether that’s boosting productivity, enhancing athletic performance, or simply getting a better night’s sleep. If you're curious about how long that afternoon coffee will stick around, explore our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link> or the <Link href="/calculators/sleep-impact">Sleep Impact Calculator</Link> to see how timing affects your rest.
          </p>
        </section>

        <Separator />

        <section id="how-it-works">
            <h2 className="text-3xl font-bold">How This Calculator Works: The Science of Caffeine Tracking</h2>
            <p>
                This calculator may seem simple on the surface, but it’s powered by a robust database of common beverages and a clear understanding of how the body processes caffeine. Its goal is to transform your vague sense of “a few cups a day” into a precise, actionable number. Here’s a breakdown of the science and logic that make it work.
            </p>

            <h3 className="text-2xl font-semibold">Inputs Explained: What the Calculator Needs to Know</h3>
            <p>
                To give you an accurate picture of your caffeine load, the calculator relies on a few key inputs:
            </p>
            <ul>
                <li><b>Drink Type & Serving Size:</b> The foundation of the calculation. We’ve pre-loaded our database with hundreds of common drinks—from a standard brewed coffee to a can of energy drink—each with a verified caffeine content and standard serving size (e.g., 240ml for a cup of coffee). When you select a drink, you’re selecting a specific caffeine amount.</li>
                <li><b>Quantity:</b> This is where the cumulative effect comes into play. The calculator multiplies the caffeine content of a single serving by the number of servings you’ve had. This simple step is crucial, as it’s where most people’s estimates fall short.</li>
                <li><b>Custom Input:</b> Not all drinks are in our database. The "Custom" input allows you to add any beverage by manually entering its caffeine content in milligrams. This is perfect for specialty coffees, pre-workout supplements, or other caffeinated products with clear labeling.</li>
            </ul>

            <Card className="my-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Lightbulb className="text-accent"/>Caffeine Smart Tip</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">
                        Always log your caffeine after each cup—small doses add up faster than most people realize. Treat it like tracking calories or steps; consistency is key to uncovering patterns in your energy and sleep.
                    </p>
                </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold">The Scientific Background: How Your Body Handles Caffeine</h3>
            <p>
                When you consume caffeine, it’s quickly absorbed from your gut into your bloodstream. From there, it travels to your liver, where it’s metabolized (broken down) by a specific enzyme called <b>CYP1A2</b>. This enzyme is the main character in the story of your caffeine tolerance.
            </p>
            <p>
                The efficiency of your CYP1A2 enzyme is largely determined by your genetics. This is why you might have a friend who can drink an espresso after dinner and sleep soundly, while you’re left staring at the ceiling after a 4 PM latte.
            </p>
            <ul>
                <li><b>Fast Metabolizers:</b> Possess a version of the CYP1A2 gene that produces a highly efficient enzyme. They clear caffeine from their system quickly and are less likely to experience negative side effects like anxiety or sleep disruption.</li>
                <li><b>Slow Metabolizers:</b> Have a less efficient version of the enzyme. Caffeine lingers in their bloodstream for much longer, making them more susceptible to its stimulating effects. For them, even a morning coffee can potentially interfere with their sleep that night.</li>
            </ul>
            <p>
                This calculator, while not a genetic test, helps you quantify the <i>dose</i> of caffeine your body has to deal with. By knowing your total intake, you can make smarter decisions based on how you personally feel, effectively tailoring your consumption to your unique metabolism.
            </p>
            <p>
                This concept of caffeine clearance is often described using the term "half-life." A caffeine half-life is the time it takes for the amount of caffeine in your body to be reduced by half. For the average, healthy adult, the half-life of caffeine is about <b>3 to 5 hours</b>. This means if you drink a coffee with 200 mg of caffeine at 9 AM, you’ll still have 100 mg in your system around 12 PM to 2 PM. By evening, a significant amount could still be active. Our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link> provides a visual representation of this decay process.
            </p>
        </section>

        <Separator />

        <section id="features">
            <h2 className="text-3xl font-bold">Key Features of the Tool</h2>
            <p>
                This calculator is more than just an adding machine. It’s a suite of features designed to provide a holistic view of your caffeine habits.
            </p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Why It Matters</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Comprehensive Drink Database</TableCell>
                        <TableCell>Includes a wide variety of coffee, tea, sodas, and energy drinks with verified caffeine amounts.</TableCell>
                        <TableCell>Saves you time and removes the guesswork of estimating caffeine content in common beverages.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Real-Time Total Calculation</TableCell>
                        <TableCell>Instantly sums up the caffeine from all logged drinks, providing a running total for your day.</TableCell>
                        <TableCell>Helps you see how quickly individual drinks add up, preventing accidental overconsumption.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Progress Bar vs. Daily Limit</TableCell>
                        <TableCell>Visually compares your current intake against the FDA-recommended daily limit of 400 mg.</TableCell>
                        <TableCell>Provides a clear, immediate benchmark for safe consumption and helps you moderate your intake.</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Multi-Drink Input Support</TableCell>
                        <TableCell>Log different types and quantities of drinks throughout the day, just like in real life.</TableCell>
                        <TableCell>Reflects realistic consumption patterns, providing a more accurate daily total than single-drink estimates.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Mobile-Friendly Design</TableCell>
                        <TableCell>The interface is optimized for quick and easy use on your phone, tablet, or desktop.</TableCell>
                        <TableCell>Enables you to track your caffeine on the go, whether you’re a student in the library or a professional between meetings.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>

        <Separator />

        <section id="instructions">
            <h2 className="text-3xl font-bold">Step-by-Step Instructions: How to Use the Calculator</h2>
            <p>Getting a clear picture of your caffeine intake is easy. Follow these simple steps:</p>
            <ol className="list-decimal pl-5 space-y-2">
                <li>
                    <b>Select Your Drink:</b> Use the search bar to find your beverage. Click on the drink name from the dropdown list to add it to your log. The list includes coffees, teas, sodas, and energy drinks.
                </li>
                <li>
                    <b>Adjust the Quantity:</b> Once a drink is added, it defaults to a quantity of one. If you had more than one, use the number input field to adjust the quantity accordingly. The total caffeine will update automatically.
                </li>
                <li>
                    <b>Add More Drinks:</b> Continue adding every caffeinated beverage you consume throughout the day to build a complete log. Don’t forget less obvious sources like diet sodas or green tea.
                </li>
                <li>
                    <b>Review Your Total:</b> The "Daily Caffeine Intake" card prominently displays your total consumed milligrams of caffeine.
                </li>
                <li>
                    <b>Check Against the Limit:</b> The progress bar gives you a quick visual reference of how your intake compares to the 400 mg daily recommended limit for healthy adults. The text below the bar will tell you exactly how much you are over or under the limit.
                </li>
                <li>
                    <b>Reset for a New Day:</b> Click the "Reset" button to clear your log and start fresh the next day.
                </li>
            </ol>
        </section>

        <Separator />

        <section id="examples">
            <h2 className="text-3xl font-bold">Worked Examples: See the Calculator in Action</h2>
            <p>
                The true power of this calculator comes from seeing how seemingly normal consumption patterns can lead to surprisingly high caffeine totals. Let’s walk through a few personas.
            </p>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><GraduationCap /> The Student: Fueling a Late-Night Study Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><b>Scenario:</b> Maria, a college student, has a big exam tomorrow. To stay awake and study, she drinks a large brewed coffee (16 oz, ~190 mg) at 3 PM and then an energy drink (~160 mg) at 8 PM.</p>
                    <p><b>Calculator Input:</b></p>
                    <ul className="list-disc pl-5">
                        <li>Brewed Coffee (x2 standard 8oz servings)</li>
                        <li>Energy Drink (x2 standard servings)</li>
                    </ul>
                    <p><b>Result:</b> Maria’s total intake is around <b>350 mg</b>. While this is within the 400 mg daily limit, the timing is problematic. With a large dose of caffeine consumed at 8 PM, she will likely have over 80 mg still in her system when she tries to go to sleep at midnight, severely disrupting her sleep quality and memory consolidation for the exam.</p>
                    <p><b>Interpretation:</b> The calculator would show Maria that while her total dose isn't excessive, her timing is setting her up for a poor night's sleep. A better strategy would have been to consume her caffeine earlier in the day.</p>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Briefcase /> The Office Worker: The Cumulative Effect of "Just One More Cup"</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><b>Scenario:</b> David, an office worker, starts his day with an espresso at 8 AM. He has another at 11 AM to power through meetings, a diet cola with lunch at 1 PM, and a final espresso at 3 PM to beat the afternoon slump.</p>
                     <p><b>Calculator Input:</b></p>
                    <ul className="list-disc pl-5">
                        <li>Espresso (x3)</li>
                        <li>Cola (x1)</li>
                    </ul>
                    <p><b>Result:</b> David’s intake totals approximately <b>226 mg</b> (64 mg x 3 + 34 mg). He thinks he’s only having "a few small coffees," but the calculator reveals a moderate daily load. If he were a slow metabolizer, this amount could be enough to cause subtle anxiety or make it harder to unwind in the evening.</p>
                    <p><b>Interpretation:</b> The tool helps David see that his "small" drinks add up. He might decide to switch his 3 PM espresso to a decaf or a caffeine-free herbal tea to reduce his total load and improve his evening relaxation.</p>
                </CardContent>
            </Card>
            
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Heart /> The Health-Conscious Individual: Staying Within Safe Limits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><b>Scenario:</b> Sarah is pregnant and her doctor advised her to limit her caffeine intake to under 200 mg per day. She enjoys a morning latte and sometimes a green tea in the afternoon.</p>
                     <p><b>Calculator Input:</b></p>
                    <ul className="list-disc pl-5">
                        <li>Latte (x1)</li>
                        <li>Green Tea (x1)</li>
                    </ul>
                    <p><b>Result:</b> Her daily total is about <b>92 mg</b> (64 mg + 28 mg). The progress bar on the calculator would show her she is well under both the standard 400 mg limit and her personal 200 mg limit.</p>
                    <p><b>Interpretation:</b> For Sarah, the calculator provides peace of mind. It allows her to enjoy her daily ritual without the stress of accidentally consuming too much caffeine, ensuring she’s following her doctor’s advice for a healthy pregnancy.</p>
                </CardContent>
            </Card>
        </section>
        
        <Separator />

        <section id="use-cases">
            <h2 className="text-3xl font-bold">Real-Life Use Cases: Putting Caffeine Data to Work</h2>
            <p>
                Knowing your daily caffeine number is the first step. The real benefit comes from using that information to make tangible improvements to your life. Here are some practical ways to apply the insights from this calculator.
            </p>
            <h3 className="text-2xl font-semibold">1. Improving Your Sleep Hygiene</h3>
            <p>
                This is perhaps the most critical use case. Poor sleep is a modern epidemic, and late-day caffeine is a primary contributor. By tracking your intake, you can identify your personal caffeine "curfew." For most people, this is 6-8 hours before bed. Use this calculator in conjunction with our <Link href="/calculators/sleep-impact">Sleep Impact Calculator</Link> to determine exactly how much caffeine will be left in your system by bedtime. Seeing the number in black and white (e.g., "75 mg still active at 10 PM") is a powerful motivator to skip that afternoon coffee.
            </p>
            <h3 className="text-2xl font-semibold">2. Managing and Reducing Tolerance</h3>
            <p>
                If you find yourself needing more and more caffeine to achieve the same level of alertness, you’re experiencing tolerance. The body adapts to a constant influx of caffeine by increasing the number of adenosine receptors, making you less sensitive to its effects. To reset your tolerance, you need to reduce your intake. This calculator is the perfect tool for a "caffeine taper." You can strategically reduce your daily total by a small amount each day (e.g., from 400 mg to 350 mg, then to 300 mg) to minimize withdrawal symptoms like headaches and fatigue.
            </p>
            <h3 className="text-2xl font-semibold">3. Avoiding the Afternoon Crash</h3>
            <p>
                The dreaded 3 PM crash is often a result of a large morning dose of caffeine wearing off. By using the calculator, you might notice a pattern: the days you have a 300+ mg morning, you crash hard. You could experiment with a smaller initial dose and a small, well-timed top-up after lunch. Spreading your intake can lead to more stable energy levels throughout the day.
            </p>
            <h3 className="text-2xl font-semibold">4. Optimizing for Athletic Performance</h3>
            <p>
                Caffeine is a well-documented ergogenic aid, meaning it can enhance physical performance. Athletes can use this calculator to dial in their pre-workout dosage. The typical recommendation is 3-6 mg of caffeine per kilogram of body weight, consumed about 60 minutes before exercise. By tracking their intake, an athlete can ensure they hit this target without overconsuming, which could lead to jitters and a loss of fine motor control.
            </p>
        </section>

        <Separator />

        <section id="common-mistakes">
            <h2 className="text-3xl font-bold">Common Mistakes in Tracking Caffeine & How to Avoid Them</h2>
            <p>
                Accurate tracking requires awareness. Here are some common pitfalls and how to steer clear of them.
            </p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Mistake</TableHead>
                        <TableHead>Why It Happens</TableHead>
                        <TableHead>How to Fix</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Forgetting Non-Coffee Sources</TableCell>
                        <TableCell>People often don't think of tea, soda, chocolate, or even some medications (like Excedrin) as significant caffeine sources.</TableCell>
                        <TableCell>Make it a habit to log *everything* you consume that might contain caffeine. Our calculator includes many of these less obvious sources.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Underestimating Serving Sizes</TableCell>
                        <TableCell>A "cup" of coffee can range from 8 oz to 20 oz or more. Many people log a large coffee as a single serving.</TableCell>
                        <TableCell>Pay attention to the volume (ml or oz) of your drink. If you have a 16 oz coffee, log it as two 8 oz servings if that’s the base unit.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Inconsistent Logging</TableCell>
                        <TableCell>Tracking for one day isn’t enough. Daily habits can fluctuate wildly based on workload, sleep, and social plans.</TableCell>
                        <TableCell>Use the calculator consistently for at least a week to establish a baseline. This will reveal your true average intake and patterns.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Assuming All Coffee Is Equal</TableCell>
                        <TableCell>A light roast has more caffeine than a dark roast. A cold brew can have double the caffeine of a regular brewed coffee.</TableCell>
                        <TableCell>When in doubt, use a conservative (higher) estimate or look up the specific caffeine content for your favorite coffee shop or brand.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>

        <Separator />

        <section id="expert-insights">
            <h2 className="text-3xl font-bold">Quick Hacks & Expert Insights for Smart Caffeine Use</h2>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Droplet /> Hydrate Alongside Caffeine</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Caffeine is a mild diuretic, which means it can cause you to lose fluid. To counteract this and reduce feelings of jitteriness, drink a glass of water for every caffeinated beverage you consume. Staying hydrated also supports stable energy levels.</p>
                </CardContent>
            </Card>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Delay Your First Coffee</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your body naturally produces a high level of cortisol (a wakefulness hormone) in the first 60-90 minutes after you wake up. Drinking coffee during this peak can blunt its effects and increase your tolerance. Try waiting 90 minutes after waking before your first cup. You’ll get a much more significant energy boost.</p>
                </CardContent>
            </Card>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Master the "Coffee Nap"</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>It sounds counterintuitive, but it’s scientifically validated. Drink a cup of coffee and immediately take a 20-minute nap. The caffeine takes about 20-30 minutes to kick in. During your nap, your brain clears out adenosine (the molecule that makes you feel sleepy). You’ll wake up just as the caffeine hits, feeling refreshed and doubly alert.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pair Caffeine with L-Theanine</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>L-Theanine is an amino acid found in green tea that promotes relaxation without drowsiness. When combined with caffeine, it can smooth out the "jitters" and enhance focus, creating a state of calm alertness. This is why many people report a more pleasant buzz from green tea compared to coffee.</p>
                </CardContent>
            </Card>
        </section>

        <Separator />
        
        <section id="deep-dive">
            <h2 className="text-3xl font-bold">The Deep Dive: Caffeine and Your Physiology</h2>
            <p>
                To truly master your caffeine intake, it helps to understand what’s happening inside your body on a molecular level. Caffeine is a powerful psychoactive substance, and its effects are a direct result of its interaction with your brain chemistry.
            </p>
            <h3 className="text-2xl font-semibold">The Adenosine Blockade: Caffeine’s Primary Mechanism</h3>
            <p>
                Throughout the day, as your brain works, it produces a byproduct called <b>adenosine</b>. This molecule binds to specific adenosine receptors in your brain, which in turn slows down neural activity and makes you feel tired. This is a natural process called "sleep pressure"—the longer you’re awake, the more adenosine builds up, and the sleepier you get.
            </p>
            <p>
                Caffeine’s chemical structure is remarkably similar to adenosine. So similar, in fact, that it can fit perfectly into the adenosine receptors. When you drink a coffee, caffeine molecules enter your bloodstream, cross the blood-brain barrier, and dock in these receptors, effectively blocking adenosine from binding. With the "sleepy" molecule blocked, your brain’s natural stimulants, like dopamine and norepinephrine, can flow more freely. This leads to increased alertness, improved mood, and enhanced cognitive function. However, the adenosine doesn’t disappear. It continues to build up in the background. When the caffeine finally wears off, the accumulated adenosine floods the receptors, leading to the infamous "caffeine crash."
            </p>
            <h3 className="text-2xl font-semibold">The Role of Cortisol and Dopamine</h3>
            <p>
                Caffeine also stimulates the adrenal glands to produce more cortisol and adrenaline, the body's "fight or flight" hormones. This is why you feel a jolt of energy and heightened focus shortly after consumption. In the short term, this is great for performance. However, chronic overconsumption can lead to dysregulated cortisol patterns, contributing to feelings of stress and burnout.
            </p>
            <p>
                Simultaneously, by blocking adenosine, caffeine allows for an increase in dopamine activity. Dopamine is a neurotransmitter associated with pleasure, motivation, and reward. This is part of what makes caffeine feel so good and why it can become habit-forming. The brain begins to associate caffeine with a state of heightened reward and motivation, reinforcing the desire to consume it again.
            </p>
            <h3 className="text-2xl font-semibold">Natural vs. Synthetic Caffeine: Is There a Difference?</h3>
            <p>
                Chemically, natural caffeine (from coffee beans or tea leaves) and synthetic caffeine (produced in a lab and added to energy drinks and sodas) are identical. Your body cannot tell the difference between them. However, the <i>source</i> of the caffeine matters. Natural sources like coffee and tea contain other compounds—such as antioxidants and polyphenols—that can modulate caffeine’s effects and offer other health benefits. For example, the L-theanine in tea works synergistically with caffeine to promote a smoother, less jittery focus. Synthetic caffeine in sodas and energy drinks is often paired with large amounts of sugar or artificial sweeteners, which can have their own negative health consequences.
            </p>
            <p>
                Understanding these dynamics empowers you to use caffeine as a performance enhancer—not a crutch. By tracking your intake, you can provide your body with the optimal dose at the optimal time, reaping all the benefits of alertness and focus while minimizing the downsides of anxiety, tolerance, and sleep disruption.
            </p>
        </section>

        <Separator />

        <section id="faq">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does caffeine stay in your system?</AccordionTrigger>
              <AccordionContent>
                The effects of caffeine can be felt within 15-30 minutes, but its duration varies. On average, caffeine has a half-life of 3-5 hours, meaning half the dose is cleared in that time. However, it can take 10 hours or more to fully clear from your bloodstream. To visualize this decay for a specific dose, use our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the safe daily limit for caffeine?</AccordionTrigger>
              <AccordionContent>
                For healthy adults, the FDA and other health organizations recommend a maximum of 400 milligrams (mg) of caffeine per day. For pregnant or breastfeeding women, the recommendation is typically under 200 mg per day. This calculator helps you track your intake against these guidelines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does caffeine affect everyone the same way?</AccordionTrigger>
              <AccordionContent>
                No. Genetics play a huge role, particularly the CYP1A2 gene, which controls the primary enzyme that metabolizes caffeine. "Fast metabolizers" clear caffeine quickly, while "slow metabolizers" are more sensitive to its effects and for longer. Body weight, age, and liver health also influence your response.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Can I get addicted to caffeine?</AccordionTrigger>
              <AccordionContent>
                Yes, you can develop a physical dependence on caffeine. Over time, your brain adapts to its presence, and you may experience withdrawal symptoms like headaches, fatigue, and irritability if you suddenly stop. Our forthcoming Caffeine Withdrawal Tracker can help you taper off safely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I tell how much caffeine is in my drink?</AccordionTrigger>
              <AccordionContent>
                It can be tricky, as amounts vary widely. Our calculator's database provides verified averages for many common beverages. For a quick comparison of different drinks, check out our Drink Comparison Tool. If a product has a label, it will often list the caffeine content in milligrams (mg).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Is it okay to drink coffee right before sleep?</AccordionTrigger>
              <AccordionContent>
                It is generally not recommended. Caffeine blocks sleep-inducing chemicals in the brain, which can delay the onset of sleep, reduce deep sleep, and disrupt your natural circadian rhythm. To see how much caffeine from an afternoon drink might still be in your system at bedtime, use our <Link href="/calculators/sleep-impact">Sleep Impact Calculator</Link>.
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
                        <CardTitle><Link href="/calculators/half-life" className="hover:underline">Caffeine Half-Life Calculator</Link></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Visualize how caffeine decays in your system over time to better understand its long-lasting effects.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle><Link href="/calculators/sleep-impact" className="hover:underline">Sleep Impact Calculator</Link></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Calculate your caffeine levels at bedtime to protect your sleep quality and optimize your rest.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Drink Comparison Tool</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Compare the caffeine content of your favorite beverages side-by-side. (Coming soon)</p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </div>
  );
}
