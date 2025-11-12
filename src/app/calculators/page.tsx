
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, Coffee, HeartPulse, BrainCircuit, Shield, BookOpen, Clock, TrendingDown, Pregnant, Atom, Leaf, CupSoda, Zap } from 'lucide-react';
import Link from 'next/link';

const calculators = [
  {
    title: "Intake Calculator",
    href: "/calculators/intake",
    description: "Calculate your total daily caffeine intake.",
    icon: Coffee,
  },
  {
    title: "Half-Life Calculator",
    href: "/calculators/half-life",
    description: "See how long caffeine stays in your system.",
    icon: BarChart2,
  },
  {
    title: "Caffeine Timing Optimizer",
    href: "/calculators/caffeine-timing-optimizer",
    description: "Suggests best caffeine timing for work or study.",
    icon: Clock,
  },
  {
    title: "Caffeine Withdrawal Tracker",
    href: "/calculators/caffeine-withdrawal-tracker",
    description: "Helps users taper down safely.",
    icon: TrendingDown,
  },
  {
    title: "Caffeine Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Estimate your genetic tolerance to caffeine.",
    icon: BrainCircuit,
  },
  {
    title: "Drink Comparison Tool",
    href: "/calculators/drink-comparison",
    description: "Compare caffeine in coffee, tea, and energy drinks.",
    icon: Zap,
  },
  {
    title: "Caffeine in Drinks Database",
    href: "/calculators/drinks-database",
    description: "Search 1,000+ beverages by caffeine mg.",
    icon: BookOpen,
  },
  {
    title: "Caffeine Overdose Risk Calculator",
    href: "/calculators/caffeine-overdose-risk",
    description: "Estimate safe and toxic caffeine levels based on body weight.",
    icon: Shield,
  },
  {
    title: "Pregnancy Safe Limit Calculator",
    href: "/calculators/pregnancy-safe-limit",
    description: "Track intake against the 200mg limit for pregnancy.",
    icon: Pregnant,
  }
];

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Calculators</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A complete suite of science-backed tools to help you understand and optimize your caffeine consumption for better health, focus, and sleep.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {calculators.sort((a,b) => a.title.localeCompare(b.title)).map((calc) => (
          <Link key={calc.title} href={calc.href}>
            <Card className="h-full hover:border-primary hover:bg-card/95 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <calc.icon className="h-8 w-8 text-primary" />
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
  );
}
