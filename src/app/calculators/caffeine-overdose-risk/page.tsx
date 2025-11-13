
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlertTriangle, ShieldCheck, BookOpen } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import CaffeineOverdoseRiskCalculatorLoader from '@/components/features/loaders/CaffeineOverdoseRiskCalculatorLoader';

export const metadata: Metadata = {
  title:
    'Caffeine Overdose Risk Calculator — Estimate Safe & Toxic Levels',
  description:
    'Use our free, science-based calculator to estimate caffeine overdose levels based on your body weight. Understand the risks and stay within safe caffeine limits.',
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Caffeine Overdose Risk Calculator — Estimate Safe & Toxic Levels",
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
    "@id": "https://calculation.site/calculators/caffeine-overdose-risk"
  },
  "description": "Estimate the caffeine levels that could pose a risk to your health based on your body weight.",
  "articleBody": "This tool is for educational purposes only. It provides estimates based on established scientific literature and is not a substitute for professional medical advice, diagnosis, or treatment. Individual sensitivity and risk factors for caffeine toxicity can vary greatly due to genetics, pre-existing health conditions (especially cardiac issues), and concurrent use of medications. If you believe you or someone else has consumed a toxic amount of caffeine or is experiencing severe symptoms such as chest pain, seizures, or difficulty breathing, contact emergency medical services immediately."
};

export default function CaffeineOverdoseRiskPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Caffeine Overdose Risk Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estimate the caffeine levels that could pose a risk to your health based on your body weight. This tool is for educational purposes only.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                 <div className="sticky top-20">
                    <CaffeineOverdoseRiskCalculatorLoader />
                </div>
            </div>

            <div className="lg:col-span-1 prose prose-lg dark:prose-invert max-w-none space-y-12">
                <section id="how-it-works" aria-labelledby="how-it-works-heading">
                    <h2 id="how-it-works-heading" className="text-3xl font-bold">How It Works</h2>
                    <p>This calculator estimates caffeine toxicity levels based on scientific data, personalizing it to your body weight. The principle is a cornerstone of toxicology: "the dose makes the poison."</p>
                    <ol>
                        <li><strong>Enter Body Weight:</strong> Input your weight and select the unit (kg or lbs). The calculator uses this to determine personalized risk thresholds.</li>
                        <li><strong>Review Thresholds:</strong> The tool displays three key risk levels:
                            <ul>
                                <li><strong>Noticeable Effects (~3 mg/kg):</strong> Where side effects like jitters and anxiety often begin.</li>
                                <li><strong>Mild Toxicity (~15 mg/kg):</strong> A clinical overdose level that can cause symptoms like a racing heart (tachycardia).</li>
                                <li><strong>Severe Toxicity (~150 mg/kg):</strong> Represents the median lethal dose (LD50). This is a medical emergency.</li>
                            </ul>
                        </li>
                        <li><strong>Adjust Settings (Optional):</strong> The "Advanced Settings" allow you to modify the mg/kg values if you want to model different scenarios based on other research or personal sensitivity.</li>
                    </ol>
                    <p>This provides a personalized safety scale, helping you understand your limits.</p>
                </section>

                <Separator />

                <section id="disclaimer" aria-labelledby="disclaimer-heading">
                    <Card className="bg-destructive/10 border-destructive mt-8" role="alert">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-destructive"><AlertTriangle aria-hidden="true"/>Important Medical Disclaimer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-destructive-foreground/90">
                            <p>
                                This tool is for <strong>informational purposes only</strong> and is not a substitute for professional medical advice. Risk varies based on genetics, health conditions, and medications. <strong>If you suspect an overdose, contact emergency medical services immediately.</strong>
                            </p>
                        </CardContent>
                    </Card>
                </section>
                
                <Separator />

                <section id="related-tools" aria-labelledby="related-tools-heading">
                    <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools</h2>
                    <div className="space-y-4">
                        <p><Link href="/calculators/caffeine-intake">Intake Calculator</Link> - Track your daily consumption to stay below safe limits.</p>
                        <p><Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> - Understand your genetic predisposition to caffeine.</p>
                        <p><Link href="/calculators/caffeine-drink-comparison">Drink Comparison Tool</Link> - Be aware of high-caffeine drinks and their risks.</p>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </>
  );
}
