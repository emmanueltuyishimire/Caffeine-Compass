
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Coffee, BrainCircuit, Shield, TrendingDown, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Caffeine Calculators — Tools to Optimize Your Caffeine Intake',
    description: 'A comprehensive suite of free, science-based caffeine calculators to help you track intake, manage tolerance, improve sleep, and optimize your energy levels.',
};

const calculatorLinks = [
  {
    title: "Caffeine Intake Calculator",
    href: "/calculators/caffeine-intake",
    description: "Track your total daily consumption against the 400mg safe limit.",
    icon: Coffee,
  },
  {
    title: "Caffeine Half-Life Calculator",
    href: "/calculators/caffeine-half-life",
    description: "Visualize how long caffeine stays in your system to protect your sleep.",
    icon: BarChart2,
  },
  {
    title: "Caffeine Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Discover if you are a fast, average, or slow metabolizer of caffeine.",
    icon: BrainCircuit,
  },
  {
    title: "Caffeine Overdose Risk Calculator",
    href: "/calculators/caffeine-overdose-risk",
    description: "Estimate toxic caffeine levels based on your body weight for safety awareness.",
    icon: Shield,
  },
  {
    title: "Caffeine Withdrawal Tracker",
    href: "/calculators/caffeine-withdrawal-tracker",
    description: "Create a personalized tapering plan to quit caffeine without the headaches.",
    icon: TrendingDown,
  },
   {
    title: "Caffeine Timing Optimizer",
    href: "/calculators/caffeine-timing-optimizer",
    description: "Find the scientifically optimal time to drink coffee for peak focus on a specific task.",
    icon: Clock,
  },
   {
    title: "Caffeine Drink Comparison",
    href: "/calculators/caffeine-drink-comparison",
    description: "Visually compare the caffeine content of different drinks side-by-side.",
    icon: BarChart2,
  },
   {
    title: "Caffeine Sleep Calculator",
    href: "/calculators/caffeine-sleep-calculator",
    description: "Find out exactly how much caffeine is left in your system at bedtime.",
    icon: Clock,
  },
  {
    title: "Pregnancy Caffeine Calculator",
    href: "/calculators/pregnancy-caffeine-safe-limit",
    description: "Track your caffeine intake to stay within the 200mg limit for a healthy pregnancy.",
    icon: Shield,
  },
];

const calculatorsPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Calculators",
  "description": "A comprehensive suite of free, science-based caffeine calculators to help you track intake, manage tolerance, improve sleep, and optimize your energy levels.",
  "url": "https://calculation.site/calculators",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": calculatorLinks.map((calc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": calc.title,
      "url": `https://calculation.site${calc.href}`
    }))
  },
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
      }
    ]
  }
};


export default function CalculatorsPage() {
  return (
    <>
      <JsonLd data={calculatorsPageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-12" role="banner">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Caffeine Calculators</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete toolkit of science-based calculators to help you manage your caffeine intake, improve your sleep, and optimize your energy.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {calculatorLinks.sort((a, b) => a.title.localeCompare(b.title)).map((calc) => (
                <div role="listitem" key={calc.title}>
                  <Link href={calc.href} className="block group h-full">
                      <Card className="h-full group-hover:border-primary group-hover:bg-card/95 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
                          <CardHeader>
                              <div className="flex items-center gap-4">
                                  <calc.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                                  <CardTitle>{calc.title}</CardTitle>
                              </div>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{calc.description}</p>
                          </CardContent>
                      </Card>
                  </Link>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}
