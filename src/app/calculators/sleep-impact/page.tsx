

import SleepImpactPredictor from '@/components/features/SleepImpactPredictor';
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
import { BrainCircuit, Briefcase, CheckCircle, GraduationCap, Heart, Lightbulb, Moon, ZapOff } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Caffeine Sleep Impact Calculator — Predict Caffeine’s Effect on Your Rest',
  description:
    'Use our free, science-based calculator to see how much caffeine is in your system at bedtime. Optimize your intake timing for better sleep quality and faster sleep onset.',
};


export default function SleepImpactCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Sleep Impact Calculator — Predict How Caffeine Affects Your Sleep
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Calculate the exact amount of caffeine remaining in your system at bedtime to protect your sleep quality, reduce sleep latency, and wake up refreshed.
        </p>
      </header>

      <SleepImpactPredictor />

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
        <section id="introduction">
          <h2 className="text-3xl font-bold">
            The Hidden Thief of Rest: Is Your Coffee Stealing Your Sleep?
          </h2>
          <p>
            You meticulously dim the lights, put away your screens, and settle into bed at a reasonable hour, yet you find yourself tossing and turning. The next morning, you feel groggy and unrefreshed, reaching for an extra cup of coffee just to get through the day. This vicious cycle is all too common, and the hidden culprit is often the caffeine you consumed hours earlier. This <b>Sleep Impact Calculator</b> is designed to expose this invisible threat to your rest, giving you a precise, scientific estimate of how much caffeine will be in your system when your head hits the pillow.
          </p>
          <p>
            The problem this tool solves is one of timing. Most people know that drinking an espresso right before bed is a bad idea, but what about that 3 PM latte? Or the afternoon iced tea? Because caffeine’s effects feel like they wear off after a few hours, we assume it's gone from our system. This is a critical mistake. Caffeine has a long half-life, meaning it lingers in your bloodstream for many hours, continuing to block the sleep-inducing chemicals in your brain even when you no longer feel its buzz. This leads to what sleep scientists call poor "sleep architecture" — less deep sleep, more frequent awakenings, and a feeling of being unrested.
          </p>
          <p>
            This calculator puts the power of sleep science in your hands. It helps you answer crucial questions like, "Is my 2 PM coffee habit the reason I can't fall asleep at 10 PM?" or "How late is too late for a caffeinated drink?" By inputting your drink, consumption time, and bedtime, you get a clear, data-driven answer. This tool is essential for anyone looking to optimize their sleep, improve their energy levels, and take back control from a substance that should be a tool for focus, not a saboteur of rest. For a deeper understanding of this process, you can also explore our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link> to visualize the decay curve over time and our <Link href="/calculators/intake">Caffeine Intake Calculator</Link> to track your total daily load.
          </p>
        </section>

        <Separator />

        <section id="how-it-works">
            <h2 className="text-3xl font-bold">How This Calculator Works: The Science of Sleep and Caffeine</h2>
            <p>
                This calculator combines the principles of pharmacokinetics (how a substance moves through the body) with sleep science to give you a personalized sleep risk assessment. It moves beyond simple advice like "don't drink coffee at night" to provide a quantifiable estimate of your specific situation. Here’s the science it uses.
            </p>

            <h3 className="text-2xl font-semibold">Inputs Explained: The Variables of Your Sleep Equation</h3>
            <p>
                To predict your sleep impact, the calculator needs three simple but critical pieces of information:
            </p>
            <ul>
                <li><b>Caffeine Consumed (mg):</b> The initial dose. The more caffeine you consume, the more will be left at bedtime. Our <Link href="/calculators/drink-comparison">Drink Comparison Tool</Link> can help you find the exact amount in your favorite beverage.</li>
                <li><b>Time of Consumption:</b> This is the starting line for the countdown. Even a 30-minute difference in intake time can significantly change the amount of caffeine in your system by the end of the day.</li>
                <li><b>Target Bedtime:</b> This is the finish line. The calculator measures the time elapsed between consumption and your intended bedtime to determine the decay period.</li>
            </ul>
             <p>
                The calculator then uses a standard scientific formula to model caffeine elimination:
                <br />
                <b>Caffeine at Bedtime = Initial Dose &times; (0.5) ^ (Hours Until Bedtime / Half-Life)</b>
                <br />
                For this tool, we assume an average half-life of <b>5 hours</b>, which is a common median for healthy adults. For a more personalized decay curve based on your metabolism, our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link> is the perfect complementary tool.
            </p>
            <p>
                For example: if you drink a <b>150 mg</b> coffee at <b>3 PM</b> and plan to go to sleep at <b>11 PM</b>, there are 8 hours for the caffeine to decay. Using the formula: 150 &times; (0.5) ^ (8 / 5) = 150 &times; (0.5) ^ 1.6 ≈ <b>49.5 mg</b>. The calculator will tell you that you still have nearly 50 mg of caffeine — equivalent to half a cup of coffee — active in your brain just as you're trying to fall asleep.
            </p>

            <Card className="my-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Lightbulb className="text-accent"/>Caffeine Smart Tip</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">
                        Many sleep researchers recommend having less than <b>20 mg</b> of caffeine in your system at bedtime to minimize sleep disruption. Use this calculator to find the "caffeine curfew" that gets you below this threshold.
                    </p>
                </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold">The Scientific Background: Adenosine and Sleep Pressure</h3>
            <p>
                The primary way caffeine disrupts sleep is by interfering with a neurotransmitter called <b>adenosine</b>. Throughout your waking hours, your brain is busy, and as it works, it produces adenosine as a byproduct. This adenosine gradually builds up in your brain and binds to specific receptors. When adenosine binds to these receptors, it signals your neurons to slow down, promoting drowsiness and preparing your body for sleep. This process is called <b>sleep pressure</b>: the longer you are awake, the more adenosine accumulates, and the higher your sleep pressure becomes.
            </p>
            <p>
                Caffeine’s molecular structure is very similar to adenosine. When you consume caffeine, it travels to your brain and fits into the same receptors that adenosine is trying to bind to. By blocking adenosine, caffeine effectively mutes the "you're getting sleepy" signal. Your brain doesn't slow down; in fact, its natural stimulants like dopamine get a boost, and you feel alert and focused.
            </p>
            <p>
                However, while caffeine is occupying the receptors, adenosine doesn't just disappear. It continues to build up in the background, waiting. When the caffeine is finally metabolized and cleared from the receptors hours later, all that accumulated adenosine rushes in at once. This is what causes the infamous "caffeine crash."
            </p>
            <p>
                The problem for sleep is that even a small amount of caffeine can be enough to block a significant number of adenosine receptors. If you have 50 mg of caffeine in your system at bedtime, it's like having a bouncer at the door of your sleep club, turning away the adenosine molecules that are trying to get in and start the "winding down" process. This can lead to:
            </p>
             <ul>
                <li><b>Increased Sleep Latency:</b> It takes you longer to fall asleep.</li>
                <li><b>Reduced Deep Sleep (Slow-Wave Sleep):</b> Caffeine has been shown to decrease the amount of deep sleep you get, particularly in the first half of the night. This is the most restorative stage of sleep, crucial for physical recovery and memory consolidation.</li>
                <li><b>More Frequent Awakenings:</b> You might wake up more often during the night, even if you don’t remember it in the morning.</li>
            </ul>
             <p>
                This calculator provides a quantitative measure of the "bouncer" at your sleep club door. By knowing the estimated milligrams of caffeine still active, you can make an informed choice about whether that afternoon pick-me-up is worth the potential cost to your night's rest.
            </p>
        </section>

        <Separator />

        <section id="features">
            <h2 className="text-3xl font-bold">Key Features of the Tool</h2>
            <p>
                This calculator is designed for simplicity and scientific accuracy, providing you with actionable data about your sleep.
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
                        <TableCell className="font-medium">Precise Bedtime Calculation</TableCell>
                        <TableCell>Calculates the exact caffeine level (mg) estimated to be in your system at your target bedtime.</TableCell>
                        <TableCell>Turns abstract half-life data into a concrete, sleep-relevant number you can act on.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Three-Tier Risk Assessment</TableCell>
                        <TableCell>Categorizes your sleep disruption risk as Low, Medium, or High based on the remaining caffeine.</TableCell>
                        <TableCell>Provides a simple, color-coded, and easy-to-understand verdict on your sleep hygiene for that day.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Actionable Risk Explanations</TableCell>
                        <TableCell>Offers a brief, science-based explanation for each risk level.</TableCell>
                        <TableCell>Educates you on *why* a certain caffeine level is risky, reinforcing better habits.</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Customizable Time Inputs</TableCell>
                        <TableCell>Allows you to set both your consumption time and bedtime to the exact minute.</TableCell>
                        <TableCell>Enables precise planning for shift workers, students, or anyone with a non-traditional schedule.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>

        <Separator />

        <section id="instructions">
            <h2 className="text-3xl font-bold">Step-by-Step Instructions: How to Use the Calculator</h2>
            <p>Find out your sleep impact score in just a few clicks. Follow these simple steps:</p>
            <ol className="list-decimal pl-5 space-y-2">
                <li>
                    <b>Enter Caffeine Amount:</b> In the "Caffeine Consumed (mg)" field, input the total milligrams of caffeine for the drink in question. A standard coffee is ~95 mg, and a strong energy drink can be 300 mg. Use our <Link href="/calculators/drink-comparison">comparison tool</Link> if unsure.
                </li>
                <li>
                    <b>Set Consumption Time:</b> In the "Time of Consumption" field, enter the time you drank your caffeinated beverage using a 24-hour format (e.g., 15:00 for 3 PM).
                </li>
                <li>
                    <b>Set Your Bedtime:</b> In the "Target Bedtime" field, enter the time you plan to go to sleep (e.g., 23:00 for 11 PM). The calculator will handle bedtimes that fall on the next calendar day.
                </li>
                <li>
                    <b>Calculate Your Impact:</b> Click the "Calculate Sleep Impact" button.
                </li>
                <li>
                    <b>Review Your Results:</b> The calculator will display the estimated milligrams of caffeine remaining in your system at bedtime and assign a "Low," "Medium," or "High" risk level for sleep disruption, along with a brief explanation.
                </li>
            </ol>
        </section>

        <Separator />

        <section id="examples">
            <h2 className="text-3xl font-bold">Worked Examples: See the Calculator in Action</h2>
            <p>
                How does a simple coffee affect different people's sleep? Here are some scenarios that show the power of timing.
            </p>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><GraduationCap /> The Student's All-Nighter Fuel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><b>Scenario:</b> Chloe, a university student, drinks a 200 mg energy drink at 8 PM to study for a final exam. Her planned bedtime is 1 AM.</p>
                    <p><b>Calculator Result:</b> At 1 AM (5 hours after consumption), she still has <b>100 mg</b> of caffeine in her system. The risk level is <b>High</b>.</p>
                    <p><b>Interpretation:</b> The calculator shows that even though she feels tired, a huge amount of caffeine is still blocking her adenosine receptors. This will make it extremely difficult to fall asleep and will drastically reduce the quality of any sleep she does get, impairing memory consolidation for her exam.</p>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Briefcase /> The Executive's "Safe" Afternoon Coffee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><b>Scenario:</b> David, an office manager, has a 100 mg coffee at 4 PM to get through the end of his workday. He goes to bed at 11 PM.</p>
                     <p><b>Calculator Result:</b> At 11 PM (7 hours later), he has approximately <b>38 mg</b> of caffeine in his system. The risk is <b>Medium</b>.</p>
                    <p><b>Interpretation:</b> David thinks 4 PM is early enough, but the calculator reveals he's entering the "Medium Risk" zone. While he might fall asleep, this level of caffeine is enough to reduce his deep sleep. He might wonder why he feels tired despite getting 8 hours in bed. This is the reason.</p>
                </CardContent>
            </Card>
            
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Heart /> The Early Bird's Morning Ritual</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><b>Scenario:</b> Sarah loves her 9 AM latte (64 mg). Her bedtime is 10 PM.</p>
                     <p><b>Calculator Result:</b> At 10 PM (13 hours later), she will have only <b>12 mg</b> of caffeine left in her system. The risk is <b>Low</b>.</p>
                    <p><b>Interpretation:</b> The calculator gives Sarah peace of mind. Her morning coffee habit is perfectly timed to give her a boost without interfering with her sleep 13 hours later. The remaining amount is negligible and well below the threshold for sleep disruption.</p>
                </CardContent>
            </Card>
        </section>
        
        <Separator />

        <section id="use-cases">
            <h2 className="text-3xl font-bold">Real-Life Use Cases: Putting Your Sleep Data to Work</h2>
            <p>
                This calculator isn't just for curiosity; it's a tool for behavioral change. Here's how to apply your results.
            </p>
            <h3 className="text-2xl font-semibold">1. Establishing a Personalized Caffeine Curfew</h3>
            <p>
                This is the most powerful application. A common rule of thumb is "no caffeine after 2 PM," but this is generic. Your ideal curfew depends on your bedtime and sensitivity. Use the calculator to work backward. If you want to have less than 20 mg of caffeine in your system by your 10:30 PM bedtime, what is the latest you can have a 100 mg coffee? The calculator will show you it's around 2 PM. For a 150 mg drink, your curfew would have to be even earlier, around noon. This gives you a data-driven, personal rule to live by.
            </p>
            <h3 className="text-2xl font-semibold">2. Making Smarter Afternoon Choices</h3>
            <p>
                You feel the 3 PM slump and need a pick-me-up. Before you grab a coffee, run the scenario through the calculator. You'll likely see a "Medium" or "High" risk. This visual feedback can be the nudge you need to make a better choice. Instead of coffee, maybe opt for a 15-minute walk outside, a glass of cold water, or a caffeine-free herbal tea. Or, if you need caffeine, choose a lower-dose option like green tea (~28 mg) and see how that impacts your sleep score.
            </p>
            <h3 className="text-2xl font-semibold">3. Educating Friends and Family</h3>
            <p>
                Do you have a friend who complains about poor sleep but drinks diet soda all evening? Or a partner who insists their 5 PM espresso doesn't affect them? This calculator is a great, non-confrontational educational tool. You can show them visually how their habits might be sabotaging their rest. Seeing the actual milligrams remaining at bedtime is often more impactful than a simple verbal suggestion.
            </p>
            <h3 className="text-2xl font-semibold">4. Optimizing Naps</h3>
            <p>
                 If you take "coffee naps" (consuming caffeine right before a short 20-minute nap), you can use this tool to ensure that nap doesn't load your system with caffeine too late in the day. If a coffee nap at 4 PM means you'll have 80 mg of caffeine at bedtime, it's a bad trade-off. This helps you restrict energizing naps to earlier in the afternoon.
            </p>
        </section>

        <Separator />

        <section id="common-mistakes">
            <h2 className="text-3xl font-bold">Common Mistakes in Caffeine Timing & How to Avoid Them</h2>
            <p>
                Many people make simple errors in judgment when it comes to caffeine and sleep. This calculator helps you avoid them.
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
                        <TableCell className="font-medium">"The buzz is gone, so the caffeine is gone"</TableCell>
                        <TableCell>The acute, noticeable effects of alertness wear off in a few hours, but the caffeine is still chemically active in your brain, blocking adenosine receptors.</TableCell>
                        <TableCell>Trust the science, not your feeling. Use the calculator to see the actual amount of caffeine still present in your system, even when you don't feel stimulated.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">"A small coffee won't hurt"</TableCell>
                        <TableCell>Even a "small" 64 mg espresso can leave 20-30 mg in your system hours later, which is enough to disrupt the sleep of a sensitive individual.</TableCell>
                        <TableCell>Define "small" by running it through the calculator. See how that "small" amount translates to a specific milligram level at bedtime and a risk assessment.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">"I'm a fast metabolizer, so I'm immune"</TableCell>
                        <TableCell>While fast metabolizers clear caffeine quicker, a large enough dose late enough in the day can still leave a problematic amount at bedtime. A 300mg energy drink at 6 PM will affect anyone's sleep.</TableCell>
                        <TableCell>Even if you are a fast metabolizer, use the calculator to understand your limits. You can find your ideal half-life using our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link>.</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-medium">Forgetting about tea and soda</TableCell>
                        <TableCell>People focus on coffee but forget that a few cans of diet soda or cups of black tea in the afternoon can add up to a significant dose.</TableCell>
                        <TableCell>Log all potential sources. Use our <Link href="/calculators/intake">Caffeine Intake Calculator</Link> to get your total daily load, then analyze the timing of your last dose here.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>

        <Separator />

        <section id="expert-insights">
            <h2 className="text-3xl font-bold">Quick Hacks & Expert Insights for Better Sleep</h2>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Moon /> The 10-Hour Rule</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Most sleep experts, including Dr. Andrew Huberman of Stanford, recommend ceasing caffeine intake 8 to 10 hours before your planned bedtime. For a 10 PM bedtime, this means your last sip of caffeine should be no later than 2 PM. Use this calculator to confirm this rule of thumb for your specific drink of choice.</p>
                </CardContent>
            </Card>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BrainCircuit /> Know the "Quarter-Life"</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>While half-life is the time to 50% reduction, the "quarter-life" (time to 25% reduction) is often more relevant for sleep. This takes two full half-lives. For an average person (5-hour half-life), it takes <b>10 hours</b> to clear 75% of the caffeine. This is the scientific basis for the 10-hour rule.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><ZapOff /> Switch to Decaf or Herbal Tea</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>If you crave the ritual of a warm drink in the evening, switch to a high-quality decaf coffee or a caffeine-free herbal tea like chamomile or peppermint. A cup of decaf contains only 2-7 mg of caffeine, an amount so small it's highly unlikely to impact your sleep.</p>
                </CardContent>
            </Card>
        </section>

        <Separator />
        
        <section id="terminologies">
            <h2 className="text-3xl font-bold">Key Terminologies & Concepts</h2>
            <ul className="space-y-4">
                <li>
                    <h3 className="text-xl font-semibold">Sleep Latency</h3>
                    <p>Also known as sleep onset latency (SOL), this is the amount of time it takes to fall asleep after the lights have been turned off. Caffeine can significantly increase sleep latency.</p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold">Sleep Architecture</h3>
                    <p>The structural organization of sleep, characterized by the cyclical pattern of different sleep stages (e.g., Light, Deep, REM). Caffeine disrupts this architecture, particularly by reducing deep sleep.</p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold">Deep Sleep (Slow-Wave Sleep)</h3>
                    <p>The most restorative stage of sleep, crucial for physical recovery, immune function, and memory consolidation. Caffeine is a potent suppressor of deep sleep.</p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold">REM Sleep</h3>
                    <p>The stage of sleep associated with vivid dreaming, emotional regulation, and memory processing. Caffeine can also reduce the amount of REM sleep.</p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold">Adenosine & Sleep Pressure</h3>
                    <p>Adenosine is a neurotransmitter that builds up during wakefulness, creating "sleep pressure" that makes you feel tired. Caffeine works by blocking adenosine receptors, artificially reducing this pressure.</p>
                </li>
                <li>
                    <h3 className="text-xl font-semibold">Circadian Rhythm</h3>
                    <p>The body's internal 24-hour clock that regulates the sleep-wake cycle and other physiological processes. Caffeine consumed in the afternoon or evening can delay this rhythm, making it harder to fall asleep.</p>
                </li>
                 <li>
                    <h3 className="text-xl font-semibold">Caffeine Curfew</h3>
                    <p>A personal cutoff time for caffeine consumption to prevent it from interfering with sleep. A common recommendation is 8-10 hours before bedtime.</p>
                </li>
            </ul>
        </section>

        <Separator />

        <section id="faq">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the best "caffeine curfew" to protect sleep?</AccordionTrigger>
              <AccordionContent>
                Most sleep scientists recommend stopping all caffeine intake 8 to 10 hours before your intended bedtime. For a 10 PM bedtime, that means your last coffee should be no later than 2 PM. Use this calculator to see why that rule is so effective.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How much caffeine is too much before bed?</AccordionTrigger>
              <AccordionContent>
                While any amount can have an effect, most research suggests that levels above 20-30 mg at bedtime can start to negatively impact sleep architecture, especially in sensitive individuals. This tool helps you see if you're above that threshold.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>I drink coffee late and sleep fine. Does it still affect me?</AccordionTrigger>
              <AccordionContent>
                Even if you can fall asleep easily, caffeine is likely still reducing the quality of your sleep, particularly your deep sleep. You may not notice it consciously, but you might feel less refreshed in the morning. Use our <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> to better understand your personal tolerance.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Does the calculator account for my body weight or metabolism?</AccordionTrigger>
              <AccordionContent>
                This specific calculator uses an average caffeine half-life of 5 hours for its predictions. For a more personalized estimate based on your metabolism, please use our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link>, which allows you to adjust the decay rate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What's the difference between this and the Half-Life Calculator?</AccordionTrigger>
              <AccordionContent>
                The <Link href="/calculators/half-life">Half-Life Calculator</Link> shows you a visual chart of how caffeine decays over 12 hours. This Sleep Impact Calculator is more specific: it calculates the precise amount of caffeine left at a single point in time — your bedtime — to give you a clear risk score for your sleep.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can I use this for energy drinks or tea?</AccordionTrigger>
              <AccordionContent>
                Absolutely. The calculator works for any caffeinated beverage. You just need to know the caffeine content in milligrams. Our <Link href="/calculators/drink-comparison">Drink Comparison Tool</Link> can help you find the caffeine amount for thousands of different drinks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>How does caffeine affect deep sleep?</AccordionTrigger>
              <AccordionContent>
                Caffeine is a potent suppressor of slow-wave (deep) sleep, especially in the early part of the night. It does this by blocking adenosine, a chemical that helps initiate and maintain deep sleep. Less deep sleep means less physical restoration overnight.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>What if my bedtime is after midnight?</AccordionTrigger>
              <AccordionContent>
                The calculator automatically handles this. If your consumption time is 3 PM (15:00) and your bedtime is 1 AM (01:00), it will correctly calculate the 10-hour duration and give you an accurate result.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Why do I feel groggy even after 8 hours in bed?</AccordionTrigger>
              <AccordionContent>
                This is a classic sign of poor sleep quality, and late-day caffeine is a common cause. Even though you were unconscious, caffeine may have prevented you from getting enough restorative deep sleep. Tracking your intake with our <Link href="/calculators/intake">Caffeine Intake Calculator</Link> can help identify the problem.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>Does eating food with my coffee change the sleep impact?</AccordionTrigger>
              <AccordionContent>
                Food can slow the <i>absorption</i> of caffeine, making its initial peak less intense but potentially prolonging its effects slightly. However, it doesn't change the total amount of caffeine or its half-life, so the overall sleep impact calculated here remains a very strong estimate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>Is "coffee nap" a good idea in the afternoon?</AccordionTrigger>
              <AccordionContent>
                A "coffee nap" (drinking coffee then taking a 20-minute nap) can be effective. However, use this calculator to check if an afternoon coffee nap will leave too much caffeine in your system at bedtime. A nap after 3 PM is generally discouraged as it can disrupt nighttime sleep.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>Does decaf coffee affect sleep?</AccordionTrigger>
              <AccordionContent>
                Decaf coffee contains a very small amount of caffeine (typically 2-7 mg). For most people, this amount is too low to have any noticeable effect on sleep, making it a safe evening alternative.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-13">
              <AccordionTrigger>How accurate is the 5-hour half-life assumption?</AccordionTrigger>
              <AccordionContent>
                 A 5-hour half-life is a population average. Your personal half-life could range from 3 to 7 hours based on genetics. If you're very sensitive to caffeine, your half-life is likely longer. Our <Link href="/calculators/half-life">Caffeine Half-Life Calculator</Link> allows you to experiment with different values to find what best fits you.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-14">
              <AccordionTrigger>What are the signs of caffeine dependence?</AccordionTrigger>
              <AccordionContent>
                The most common sign is experiencing withdrawal symptoms like headaches, fatigue, and irritability when you skip your usual dose. If you're trying to reduce your intake, our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> can help you do so gradually.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-15">
              <AccordionTrigger>Can caffeine affect my dreams (REM sleep)?</AccordionTrigger>
              <AccordionContent>
                 Yes, research indicates that caffeine can also suppress REM sleep, particularly in the later parts of the night. Since REM is crucial for emotional regulation and learning, disrupting it can leave you feeling mentally fatigued.
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
                        <p>Visualize the full decay curve of caffeine in your system over a 12-hour period.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle><Link href="/calculators/intake" className="hover:underline">Caffeine Intake Calculator</Link></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Track your total daily consumption to see if you're within the recommended safe limits.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle><Link href="/calculators/caffeine-sensitivity-test" className="hover:underline">Caffeine Sensitivity Test</Link></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Discover if you are a "fast" or "slow" metabolizer of caffeine.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </div>
  );
}
