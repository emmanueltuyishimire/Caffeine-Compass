
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
    Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Caffeine Compass — Calculators, Coffee Business Resources, and Blog',
    description: 'Your central hub for caffeine calculators, coffee shop business management, product reviews, and in-depth articles. Solve problems and find answers for your personal and professional coffee needs.',
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Compass Homepage",
  "description": "Your central hub for caffeine calculators, coffee shop business management, product reviews, and in-depth articles.",
  "url": "https://calculation.site/",
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
    title: "Daily Intake Calculator",
    href: "/calculators/caffeine-intake",
    description: "Track your personal consumption against safe limits.",
    icon: Coffee,
  },
  {
    title: "Half-Life Calculator",
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
    title: "Overdose Risk Calculator",
    href: "/calculators/caffeine-overdose-risk",
    description: "Estimate toxic levels based on your body weight.",
    icon: Shield,
  },
  {
    title: "Withdrawal Management",
    href: "/calculators/caffeine-withdrawal-tracker",
    description: "Create a tapering plan to quit caffeine safely.",
    icon: TrendingDown,
  },
   {
    title: "Peak Timing Optimizer",
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
              Your Hub for Coffee Knowledge & Business.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-black">
              Explore powerful calculators, in-depth product reviews, and essential resources for managing your coffee shop business—all in one place.
            </p>
            <Link href="/calculators">
              <Button size="lg">Explore Our Tools</Button>
            </Link>
          </div>
        </section>

        <section id="calculators" className="py-12 md:py-20 bg-background" role="region" aria-labelledby="calculators-heading">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 id="calculators-heading" className="text-3xl md:text-4xl font-bold font-headline">A Comprehensive Toolkit for Every Need</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    From personal health management to professional tools, we have a calculator for every question.
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
                <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold font-headline">Your Path to Answers</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Whatever your goal, our platform provides the resources to help you achieve it.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div className="relative">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                        <BookOpen className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Explore Our Blog</h3>
                      <p className="text-muted-foreground">Dive into expert product reviews, in-depth articles, and practical guides on our <Link href="/blog" className="text-accent underline hover:text-accent/80">Blog</Link> to stay informed.</p>
                  </div>
                  <div className="relative">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                        <Briefcase className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Grow Your Business</h3>
                      <p className="text-muted-foreground">Access resources for coffee shop management, worker scheduling, and industry trends on <Link href="/business" className="text-accent underline hover:text-accent/80">CoffeeBizz</Link>.</p>
                  </div>
                  <div className="relative">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                        <Coffee className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Optimize Your Intake</h3>
                      <p className="text-muted-foreground">Use our suite of <Link href="/calculators" className="text-accent underline hover:text-accent/80">Calculators</Link> to manage your personal caffeine consumption for better health and focus.</p>
                  </div>
              </div>
            </div>
        </section>

        <section id="platforms" className="py-12 md:py-20 bg-background" role="region" aria-labelledby="platforms-heading">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 id="platforms-heading" className="text-3xl md:text-4xl font-bold font-headline">Explore Our Platforms</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Dive deeper into the world of caffeine with our specialized content hubs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <BookOpen className="h-8 w-8 text-primary" />
                                <CardTitle>Our Blog</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-muted-foreground">Explore in-depth articles, scientific explainers, and practical guides on everything from caffeine's effect on REM sleep to the history of coffee.</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Link href="/blog">
                                <Button className="w-full">Visit the Blog</Button>
                            </Link>
                        </div>
                    </Card>
                    <Card className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Briefcase className="h-8 w-8 text-accent" />
                                <CardTitle>CoffeeBizz</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">Your resource for the business of coffee. Discover insights into running a coffee shop, industry trends, and the economics of the world's favorite beverage.</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                             <Link href="/business">
                                <Button className="w-full" variant="secondary">Explore CoffeeBizz</Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-20" role="region" aria-labelledby="why-us-heading">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-last md:order-first">
                <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold font-headline mb-8">
                  Why Choose Us?
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
                          Comprehensive & Data-Driven
                        </h3>
                        <p className="text-muted-foreground">
                          Our tools and content are built on reliable data and scientific research to provide you with trustworthy information for personal and professional use.
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
                          For Enthusiasts & Professionals
                        </h3>
                        <p className="text-muted-foreground">
                          Whether you're managing your personal health, writing an article, or running a business, our platform provides tools and resources for every need.
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
                          We believe that by understanding how caffeine and the coffee industry work, you can make smarter decisions for your health, your content, and your business.
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
