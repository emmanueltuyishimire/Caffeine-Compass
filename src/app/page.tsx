
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Coffee, BrainCircuit, Shield, TrendingDown, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
    BookOpen,
    HeartPulse,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Caffeine Compass — Caffeine Calculators, Articles & Science',
    description: 'Your ultimate resource for caffeine calculators, data tools, and science-backed articles. Optimize your intake, improve your sleep, and master your energy.',
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Compass — Your Ultimate Guide to Caffeine",
  "description": "The ultimate resource for caffeine calculators, data tools, and science-backed articles to optimize your intake, improve sleep, and master your energy.",
  "url": "https://calculation.site/",
  "publisher": {
    "@type": "Organization",
    "name": "Caffeine Compass",
    "logo": {
        "@type": "ImageObject",
        "url": "https://calculation.site/logo.png"
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://calculation.site/"
      }
    ]
  }
};


const featuredCalculators = [
  {
    title: "Caffeine Intake Calculator",
    href: "/calculators/caffeine-intake",
    description: "Track your personal caffeine consumption against safe limits.",
    icon: Coffee,
  },
  {
    title: "Caffeine Half-Life Calculator",
    href: "/calculators/caffeine-half-life",
    description: "Visualize how long caffeine affects your system.",
    icon: BarChart2,
  },
  {
    title: "Caffeine Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Discover your genetic caffeine tolerance.",
    icon: BrainCircuit,
  },
  {
    title: "Caffeine Overdose Risk Calculator",
    href: "/calculators/caffeine-overdose-risk",
    description: "Estimate toxic caffeine levels based on your body weight.",
    icon: Shield,
  },
  {
    title: "Caffeine Withdrawal Management",
    href: "/calculators/caffeine-withdrawal-tracker",
    description: "Create a tapering plan to quit caffeine safely.",
    icon: TrendingDown,
  },
   {
    title: "Caffeine Timing Optimizer",
    href: "/calculators/caffeine-timing-optimizer",
    description: "Find the perfect time to drink caffeine for energy.",
    icon: Clock,
  },
];

const featuredArticles = [
    {
        title: "How Much Caffeine in a Cup of Coffee?",
        href: "/articles/how-much-caffeine-in-a-cup-of-coffee",
        description: "The definitive guide to why caffeine levels vary so dramatically in coffee.",
        icon: Coffee,
    },
    {
        title: "How Long Does Caffeine Stay in Your System?",
        href: "/articles/how-long-does-caffeine-stay-in-your-system",
        description: "Understand the science of caffeine half-life and its impact on your body and sleep.",
        icon: Clock,
    },
    {
        title: "Why Does Caffeine Make Me Tired?",
        href: "/articles/caffeine-makes-you-tired",
        description: "Explore the four scientific reasons for the paradoxical caffeine crash and how to avoid it.",
        icon: BrainCircuit,
    }
];


export default function Home() {
  const whyUsImage = PlaceHolderImages.find(p => p.id === 'why-us-image');
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
      <div className="flex flex-col">
        <JsonLd data={homePageJsonLd} />
        <section className="relative text-center rounded-lg overflow-hidden min-h-[50vh] md:min-h-[500px] flex flex-col justify-center items-center text-primary-foreground p-4" style={{ backgroundColor: 'hsl(25, 45%, 25%)' }} aria-labelledby="hero-heading">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold font-headline mb-4 leading-tight">
              Master Your Caffeine. Master Your Life.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Your definitive, science-backed guide to caffeine. Use our expert caffeine calculators, tools, and articles to optimize your intake for better focus, sleep, and health.
            </p>
            <div className="flex justify-center">
              <Link href="/calculators">
                <Button size="lg" variant="secondary" aria-label="Explore our suite of caffeine calculators">Explore Caffeine Calculators</Button>
              </Link>
            </div>
        </section>

        <section id="calculators" className="py-12 md:py-20 bg-background" role="region" aria-labelledby="calculators-heading">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 id="calculators-heading" className="text-3xl md:text-4xl font-bold font-headline">A Toolkit for Mindful Caffeine Consumption</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    From tracking your daily caffeine load to understanding your genetic tolerance, our caffeine calculators provide the data you need to make smarter choices.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCalculators.map((calc) => (
                  <Link key={calc.title} href={calc.href} className="block group" aria-label={`Go to ${calc.title}`}>
                    <Card className="h-full group-hover:border-primary group-hover:bg-card/95 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <calc.icon className="h-8 w-8 text-primary" aria-hidden="true"/>
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
              <div className="text-center mt-12">
                  <Link href="/calculators">
                    <Button variant="outline">See All Caffeine Calculators</Button>
                  </Link>
              </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-12 md:py-20 bg-muted/30" role="region" aria-labelledby="why-us-heading">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold font-headline mb-12">
                Your Trusted Source for Caffeine Science
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <BookOpen
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Science-Backed & Data-Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Our caffeine tools and <Link href="/articles">articles</Link> are built on a foundation of scientific research and verifiable data to provide you with trustworthy information about caffeine.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-accent/10 rounded-full mb-4">
                    <HeartPulse
                      className="h-8 w-8 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Focused on Personal Wellness
                  </h3>
                  <p className="text-muted-foreground">
                    We believe understanding your personal reaction to caffeine is key. Our calculators, like the <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link>, help you discover what works for your unique body.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Shield
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Empowerment Through Knowledge
                  </h3>
                  <p className="text-muted-foreground">
                    We give you the data to move beyond guessing. Understand your daily caffeine intake with our <Link href="/calculators/caffeine-intake">Intake Calculator</Link> to make smarter decisions for your focus and sleep.
                  </p>
                </div>
            </div>
          </div>
        </section>

        <section id="articles" className="py-12 md:py-20 bg-background" role="region" aria-labelledby="articles-heading">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 id="articles-heading" className="text-3xl md:text-4xl font-bold font-headline">Featured Caffeine Articles & Guides</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Dive deeper into the science of caffeine with our in-depth guides, written to help you understand its impact on your body and mind.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article) => (
                  <Link key={article.title} href={article.href} className="block group" aria-label={`Read article: ${article.title}`}>
                    <Card className="h-full group-hover:border-primary group-hover:bg-card/95 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <article.icon className="h-8 w-8 text-primary" aria-hidden="true"/>
                          <CardTitle>{article.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{article.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-12">
                  <Link href="/articles">
                    <Button variant="outline">See All Caffeine Articles</Button>
                  </Link>
              </div>
          </div>
        </section>
      </div>
  );
}
