
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
    title: 'Caffeine Compass — Optimize Your Caffeine for Better Energy & Sleep',
    description: 'Harness the power of caffeine with our suite of science-backed calculators. Track your intake, understand your metabolism, and optimize your timing for peak performance and better health.',
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Compass Homepage",
  "description": "Harness the power of caffeine with our suite of science-backed calculators. Track your intake, understand your metabolism, and optimize your timing for peak performance and better health.",
  "url": "https://caffeine-compass.com/",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://caffeine-compass.com/"
      }
    ]
  }
};


const featuredCalculators = [
  {
    title: "Intake Calculator",
    href: "/calculators/intake",
    description: "Track your daily consumption against safe limits.",
    icon: Coffee,
  },
  {
    title: "Half-Life Calculator",
    href: "/calculators/half-life",
    description: "Visualize how long caffeine stays in your system.",
    icon: BarChart2,
  },
  {
    title: "Caffeine Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Discover your genetic caffeine tolerance.",
    icon: BrainCircuit,
  },
  {
    title: "Overdose Risk Calculator",
    href: "/calculators/caffeine-overdose-risk",
    description: "Estimate toxic levels based on your body weight.",
    icon: Shield,
  },
  {
    title: "Withdrawal Tracker",
    href: "/calculators/caffeine-withdrawal-tracker",
    description: "Create a tapering plan to quit caffeine safely.",
    icon: TrendingDown,
  },
   {
    title: "Caffeine Timing Optimizer",
    href: "/calculators/caffeine-timing-optimizer",
    description: "Find the perfect time to drink coffee for energy.",
    icon: Clock,
  },
];


export default function Home() {
  const whyUsImage = PlaceHolderImages.find(p => p.id === 'why-us-image');
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
      <div className="flex flex-col">
        <JsonLd data={homePageJsonLd} />
        <section className="relative text-center rounded-lg overflow-hidden min-h-[50vh] md:min-h-[500px] flex flex-col justify-center items-center text-white bg-primary"  aria-labelledby="hero-heading">
            {heroImage && (
              <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  fill
                  className="object-cover object-center z-0"
                  priority
                  quality={100}
                  sizes="100vw"
                />
            )}
          <div className="relative z-10 p-4 max-w-4xl mx-auto rounded-xl">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold font-headline mb-4 leading-tight text-outline">
              Take Control of Your Caffeine.
              <br/>
              Unlock Your Potential.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-black">
              Harness the power of caffeine without compromising your sleep or well-being. Our science-backed tools provide personalized insights to help you optimize your energy, focus, and health.
            </p>
            <Link href="/calculators">
              <Button size="lg">Explore Our Calculators</Button>
            </Link>
          </div>
        </section>

        <section id="calculators" className="py-12 md:py-20 bg-background" role="region" aria-labelledby="calculators-heading">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 id="calculators-heading" className="text-3xl md:text-4xl font-bold font-headline">A Comprehensive Toolkit for Mindful Caffeine Use</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    From tracking your daily intake to understanding your genetic sensitivity, we have a tool for every question.
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
                    <Button variant="outline">See All Calculators</Button>
                  </Link>
              </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/30" role="region" aria-labelledby="how-it-works-heading">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold font-headline">How It Works: Your Path to Optimized Energy</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                    In three simple steps, you can transform your relationship with caffeine.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div className="relative">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                        <span className="text-2xl font-bold" aria-hidden="true">1</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Track Your Intake</h3>
                      <p className="text-muted-foreground">Use our <Link href="/calculators/intake" className="text-accent hover:underline">Intake Calculator</Link> to log your drinks and get a precise measure of your daily consumption.</p>
                  </div>
                  <div className="relative">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                        <span className="text-2xl font-bold" aria-hidden="true">2</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Understand Your Body</h3>
                      <p className="text-muted-foreground">Discover your unique metabolism with the <Link href="/calculators/caffeine-sensitivity-test" className="text-accent hover:underline">Sensitivity Test</Link> and see how long caffeine affects you.</p>
                  </div>
                  <div className="relative">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                        <span className="text-2xl font-bold" aria-hidden="true">3</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Optimize Your Timing</h3>
                      <p className="text-muted-foreground">Plan your caffeine use for peak performance and protect your sleep using the <Link href="/calculators/half-life" className="text-accent hover:underline">Half-Life Calculator</Link>.</p>
                  </div>
              </div>
            </div>
        </section>

        <section className="py-12 md:py-20" role="region" aria-labelledby="why-us-heading">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-last md:order-first">
                <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold font-headline mb-8">
                  Why Caffeine Compass?
                </h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <BookOpen
                          className="h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          Science-Backed & Data-Driven
                        </h3>
                        <p className="text-muted-foreground">
                          Our tools are built on peer-reviewed research in
                          chronobiology, toxicology, and sleep science to provide
                          you with trustworthy and accurate information.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                        <HeartPulse
                          className="h-6 w-6 text-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          Personalized For You
                        </h3>
                        <p className="text-muted-foreground">
                          Caffeine isn't one-size-fits-all. We help you understand
                          how your personal metabolism, body weight, and timing
                          influence its effects.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Shield
                          className="h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          Empowerment Through Knowledge
                        </h3>
                        <p className="text-muted-foreground">
                          We believe that by understanding how caffeine works, you
                          can make it a powerful tool for productivity, not a source
                          of anxiety or poor health.
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='order-first md:order-last'>
                {whyUsImage && (
                  <Image
                    src={whyUsImage.imageUrl}
                    alt={whyUsImage.description}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    data-ai-hint={whyUsImage.imageHint}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
