
import CaffeineOverdoseRiskCalculator from '@/components/features/CaffeineOverdoseRiskCalculator';
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
import { AlertTriangle, ShieldCheck, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Caffeine Overdose Risk Calculator — Estimate Safe & Toxic Levels',
  description:
    'Use our free, science-based calculator to estimate caffeine overdose levels based on your body weight. Understand the risks and stay within safe caffeine limits.',
};


export default function CaffeineOverdoseRiskPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Caffeine Overdose Risk Calculator
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Estimate the caffeine levels that could pose a risk to your health based on your body weight. This tool is for educational purposes only.
        </p>
      </header>

      <CaffeineOverdoseRiskCalculator />

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
        <section id="introduction">
          <h2 className="text-3xl font-bold">
            Understanding Your Limits: The Science Behind Caffeine Safety
          </h2>
          <p>
            Caffeine is a powerful and widely used stimulant, but like any substance, it has its limits. Consuming too much can lead to unpleasant and even dangerous side effects. This <b>Caffeine Overdose Risk Calculator</b> is designed to demystify the numbers, providing a personalized estimate of what constitutes a low, moderate, and high-risk dose for your body.
          </p>
          <p>
            The problem this calculator solves is the ambiguity around "too much" caffeine. While health authorities recommend a general limit of 400 mg per day for healthy adults, the threshold for toxic effects is highly individual and primarily dependent on <b>body weight</b>. A dose that is perfectly fine for a 200-pound individual could be dangerous for someone who weighs 120 pounds. This tool translates general guidelines into specific, weight-based estimates, helping you understand the concept of a <b>caffeine overdose</b> in personal terms.
          </p>
          <p>
            This is not a diagnostic tool, but an educational one. By inputting your weight, you can visualize the estimated doses that are associated with increased negative effects, mild toxicity, and severe toxicity. This knowledge is crucial for making responsible decisions, especially with the rise of highly-caffeinated energy drinks and supplements. Use this tool to better understand your personal safety margins before you track your daily consumption with our <Link href="/calculators/intake">Intake Calculator</Link>.
          </p>
           <Card className="bg-destructive/10 border-destructive mt-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive"><AlertTriangle />Important Medical Disclaimer</CardTitle>
                </CardHeader>
                <CardContent className="text-destructive-foreground/90">
                    <p>
                        This calculator provides estimates based on scientific literature and is for informational purposes only. It is <strong>not a substitute for professional medical advice</strong>. Individual sensitivity to caffeine can vary greatly due to genetics, health conditions, and medications. <strong>If you believe you have consumed a toxic amount of caffeine or are experiencing severe symptoms, contact emergency medical services immediately.</strong>
                    </p>
                </CardContent>
            </Card>
        </section>

        <Separator />

        <section id="how-it-works">
            <h2 className="text-3xl font-bold">How This Calculator Works: The Dose Makes the Poison</h2>
            <p>
                This tool calculates risk thresholds based on established toxicological data, measured in milligrams of caffeine per kilogram of body weight (mg/kg).
            </p>

            <h3 className="text-2xl font-semibold">Risk Tiers Explained</h3>
            <p>The calculator presents several critical thresholds:</p>
            <ul>
                <li><b>Increased Side Effects (~3 mg/kg):</b> This is the level where many people begin to experience pronounced negative effects like anxiety, jitters, nervousness, and stomach upset. While not toxic, it's often the point where caffeine's benefits are outweighed by its downsides.</li>
                <li><b>Mild Toxicity (~15 mg/kg):</b> At this level, more serious symptoms can occur, such as a rapid heart rate (tachycardia), mild muscle tremors (fasciculations), and significant anxiety. While not typically life-threatening for healthy adults, it is a clear sign of overdose.</li>
                <li><b>Severe Toxicity / Potential Lethal Dose (LD50) (~150 mg/kg):</b> This is the median lethal dose (LD50), where 50% of a test population would be expected to die. This is an extremely high dose, equivalent to drinking about 75-100 cups of coffee in a short period. Any dose approaching this level is a medical emergency.</li>
            </ul>
             <p>
                By entering your weight, the calculator multiplies it by these mg/kg values to give you an estimated total caffeine amount (in mg) for each risk tier.
            </p>

            <h3 className="text-2xl font-semibold">The Scientific Background: Caffeine Pharmacology</h3>
            <p>
                Caffeine's stimulating effects come from blocking adenosine receptors in the brain. However, in very high doses, it begins to have more direct and dangerous effects on the central nervous system and cardiovascular system.
            </p>
             <p>
                At overdose levels, caffeine can cause a massive release of catecholamines (like adrenaline), leading to a dangerously rapid and irregular heartbeat (arrhythmia). It can also lead to seizures, vomiting, and electrolyte imbalances like hypokalemia (low potassium), which further destabilizes heart function. The cause of death in a caffeine overdose is most often ventricular fibrillation, a chaotic and ineffective heart rhythm.
            </p>
            <p>
                It is extremely difficult to reach lethal levels by drinking standard coffee or tea. The risk comes from the rapid consumption of highly concentrated caffeine sources, such as <b>caffeine powders, pills, and high-potency energy drinks</b>. For example, a single teaspoon of pure caffeine powder can contain 3,000-5,000 mg of caffeine, a potentially lethal dose for an adult.
            </p>
        </section>

        <Separator />

        <section id="symptoms">
            <h2 className="text-3xl font-bold">Symptoms of Caffeine Overdose</h2>
            <p>
                Recognizing the symptoms is key. They can range from mild to life-threatening.
            </p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Severity</TableHead>
                        <TableHead>Common Symptoms</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Mild Overdose</TableCell>
                        <TableCell>Jitters, anxiety, restlessness, flushed face, increased urination, digestive upset, rambling speech.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Moderate Overdose</TableCell>
                        <TableCell>Rapid heart rate (tachycardia), heart palpitations, muscle twitching, nervousness, insomnia.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-destructive">Severe Overdose (Medical Emergency)</TableCell>
                        <TableCell>Vomiting, disorientation, hallucinations, seizures, irregular heartbeat (arrhythmia), very rapid heart rate.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>

        <Separator />
        
        <section id="faq">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it possible to overdose on caffeine from coffee?</AccordionTrigger>
              <AccordionContent>
                While theoretically possible, it is practically very difficult. A lethal dose for an average adult would require drinking 75-100 cups of coffee in rapid succession. The real danger comes from highly concentrated sources like caffeine powders, pills, and multiple high-potency energy drinks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the safe daily limit for caffeine?</AccordionTrigger>
              <AccordionContent>
                Most health authorities, including the FDA, recommend that healthy adults limit their caffeine intake to <b>400 mg per day</b>. This is the amount not generally associated with negative effects. For pregnant individuals, the recommendation is typically under 200 mg per day.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What should I do if I think I've had too much caffeine?</AccordionTrigger>
              <AccordionContent>
                If you're experiencing mild symptoms like jitters or anxiety, stop all caffeine intake, drink water, and try some light activity like walking. Eat a snack to help slow absorption. If you are experiencing severe symptoms like a racing/irregular heartbeat, vomiting, or confusion, <strong>seek immediate medical attention</strong>.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4">
              <AccordionTrigger>Does my personal tolerance affect my overdose risk?</AccordionTrigger>
              <AccordionContent>
                Your regular habits can affect how you *feel* at lower doses (your subjective tolerance), but they do not significantly change the dose at which caffeine becomes toxic. A lethal dose is based on physiological limits that are not substantially altered by regular coffee drinking. Do not assume your high tolerance for the "buzz" means you have a high tolerance for overdose.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-5">
              <AccordionTrigger>Can children overdose on caffeine?</AccordionTrigger>
              <AccordionContent>
                Yes, and at much lower doses. Children are significantly more vulnerable due to their smaller body weight. There is no established safe level of caffeine for children, and experts recommend they avoid it. Even a single can of soda or energy drink can cause toxic effects in a small child.
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
                        <CardTitle><Link href="/calculators/intake" className="hover:underline">Intake Calculator</Link></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Track your daily consumption to ensure you stay below the 400 mg recommended limit and the risk levels estimated here.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle><Link href="/calculators/caffeine-sensitivity-test" className="hover:underline">Caffeine Sensitivity Test</Link></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Understand your genetic predisposition, which affects how you feel at lower doses of caffeine.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle><Link href="/calculators/drink-comparison" className="hover:underline">Drink Comparison Tool</Link></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Be aware of high-caffeine drinks. Use this tool to see which products carry the highest amounts.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </div>
  );
}
