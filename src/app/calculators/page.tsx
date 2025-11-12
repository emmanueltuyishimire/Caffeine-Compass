
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, Coffee, HeartPulse, BrainCircuit, Shield, BookOpen, Clock, TrendingDown, Baby, Moon, Zap } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Caffeine Calculators — Tools for Energy, Focus, and Health',
    description: 'Explore our complete suite of science-backed caffeine calculators. Track intake, understand your metabolism, optimize timing, and more to take control of your caffeine consumption.',
};

const calculatorsPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Calculators",
  "description": "A complete suite of science-backed tools to help you understand and optimize your caffeine consumption for better health, focus, and sleep.",
  "url": "https://caffeine-compass.com/calculators",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://caffeine-compass.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://caffeine-compass.com/calculators"
      }
    ]
  }
};


const calculatorSections = [
  {
    category: "Intake & Safety",
    calculators: [
        {
            title: "Intake Calculator",
            href: "/calculators/intake",
            description: "Calculate your total daily caffeine intake.",
            icon: Coffee,
        },
        {
            title: "Caffeine Overdose Risk Calculator",
            href: "/calculators/caffeine-overdose-risk",
            description: "Estimate safe and toxic caffeine levels based on body weight.",
            icon: Shield,
        },
    ]
  },
  {
    category: "Energy & Sleep",
    calculators: [
        {
            title: "Caffeine Sleep Calculator",
            href: "/calculators/caffeine-sleep-calculator",
            description: "See how much caffeine will be in your system at bedtime.",
            icon: Moon,
        },
        {
            title: "Caffeine Timing Optimizer",
            href: "/calculators/caffeine-timing-optimizer",
            description: "Suggests best caffeine timing for work or study.",
            icon: Clock,
        },
        {
            title: "Half-Life Calculator",
            href: "/calculators/half-life",
            description: "See how long caffeine stays in your system.",
            icon: BarChart2,
        },
    ]
  },
  {
    category: "Health & Lifestyle",
    calculators: [
        {
            title: "Caffeine Sensitivity Test",
            href: "/calculators/caffeine-sensitivity-test",
            description: "Estimate your genetic tolerance to caffeine.",
            icon: BrainCircuit,
        },
        {
            title: "Caffeine Withdrawal Tracker",
            href: "/calculators/caffeine-withdrawal-tracker",
            description: "Helps users taper down safely.",
            icon: TrendingDown,
        },
        {
            title: "Pregnancy Safe Limit Calculator",
            href: "/calculators/pregnancy-safe-limit",
            description: "Track intake against the 200mg limit for pregnancy.",
            icon: Baby,
        },
    ]
  },
   {
    category: "Knowledge & Tools",
    calculators: [
        {
            title: "Caffeine in Drinks Database",
            href: "/calculators/drinks-database",
            description: "Search 1,000+ beverages by caffeine mg.",
            icon: BookOpen,
        },
        {
            title: "Drink Comparison Tool",
            href: "/calculators/drink-comparison",
            description: "Compare caffeine in coffee, tea, and energy drinks.",
            icon: Zap,
        },
    ]
  }
];

export default function CalculatorsPage() {
  return (
    <>
      <JsonLd data={calculatorsPageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Calculators</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete suite of science-backed tools to help you understand and optimize your caffeine consumption for better health, focus, and sleep.
          </p>
        </div>

        {calculatorSections.map((section) => (
            <div key={section.category} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 border-b pb-4">{section.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.calculators.map((calc) => (
                        <Link key={calc.title} href={calc.href} className="block">
                        <Card className="h-full hover:border-primary hover:bg-card/95 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
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
                    ))}
                </div>
            </div>
        ))}
      </div>
    </>
  );
}
