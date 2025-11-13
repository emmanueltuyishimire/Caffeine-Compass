
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import PregnancySafeLimitCalculator from '@/components/features/PregnancySafeLimitCalculator';


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
    "@id": "https://calculation.site/calculators/pregnancy-caffeine-safe-limit"
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
                  This calculator provides a clear, visual way to log your drinks and see your total consumption in real-time. It helps you make mindful choices throughout the day, so you can enjoy a comforting cup of tea or a small coffee without the stress of wondering if you've had too much. It’s not about eliminating caffeine entirely, but about managing it wisely for the health of both you and your baby. For a broader view of your habits, you can also use our main <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> when not pregnant.
              </p>
          </section>

          <Separator />
          
          <section id="related-tools" aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-3xl font-bold">Related Tools & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-intake" className="hover:underline">Daily Intake Calculator</Link></CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Our main calculator for tracking caffeine against the standard 400mg limit for non-pregnant adults.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle><Link href="/calculators/caffeine-drinks-database" className="hover:underline">Caffeine in Drinks Database</Link></CardTitle>
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
