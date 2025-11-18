
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Coffee, BrainCircuit, Shield, TrendingDown, BarChart2, Zap, Leaf, Heart, Dumbbell } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

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
    title: "Intake Calculator",
    href: "/calculators/caffeine-intake",
    description: "Track your total daily consumption against the 400mg safe limit.",
    icon: Coffee,
  },
  {
    title: "Half-Life Calculator",
    href: "/calculators/caffeine-half-life",
    description: "Visualize how long caffeine stays in your system to protect your sleep.",
    icon: BarChart2,
  },
  {
    title: "Sensitivity Test",
    href: "/calculators/caffeine-sensitivity-test",
    description: "Discover if you are a fast, average, or slow metabolizer.",
    icon: BrainCircuit,
  },
   {
    title: "Timing Optimizer",
    href: "/calculators/caffeine-timing-optimizer",
    description: "Find the optimal time to drink caffeine for peak focus on a task.",
    icon: Clock,
  },
];


export default function Home() {

  return (
      <div className="flex flex-col">
        <JsonLd data={homePageJsonLd} />
        
        <section className="bg-muted/30 py-20 md:py-28 text-center" aria-labelledby="hero-heading">
            <div className="container mx-auto px-4">
                <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold font-headline mb-4 leading-tight">
                Master Your Caffeine. Master Your Day.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Your definitive, science-backed guide to caffeine. Use our expert caffeine calculators, tools, and articles to optimize your intake for better focus, sleep, and health.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link href="/calculators">
                        <Button size="lg" aria-label="Explore our suite of caffeine calculators">View All Calculators</Button>
                    </Link>
                     <Link href="/articles">
                        <Button size="lg" variant="outline" aria-label="Read our caffeine articles">Read The Guides</Button>
                    </Link>
                </div>
            </div>
        </section>

        <section id="calculators" className="py-16 md:py-24 bg-background" role="region" aria-labelledby="calculators-heading">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 id="calculators-heading" className="text-3xl md:text-4xl font-bold font-headline">A Toolkit for Mindful Caffeine Consumption</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    From tracking your daily caffeine load to understanding your genetic tolerance, our caffeine calculators provide the data you need to make smarter choices.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </section>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-16 px-4">
            <section id="how-caffeine-works" aria-labelledby="how-caffeine-works-heading">
                <div className="text-center">
                    <h2 id="how-caffeine-works-heading" className="text-3xl md:text-4xl font-bold font-headline">Understand the Science, Master Your Energy</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Caffeine isn't magic; it's chemistry. Understanding key concepts like adenosine, half-life, and your own metabolism is the secret to turning caffeine from a daily gamble into a precision tool.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3">Adenosine: Your Brain's Fatigue Signal</h3>
                        <p>Throughout the day, your brain produces a chemical called <strong>adenosine</strong>. As it builds up, it plugs into receptors on your neurons, creating "sleep pressure"—that familiar feeling of tiredness. Caffeine works by impersonating adenosine and blocking these receptors, tricking your brain into feeling alert. However, adenosine continues to build in the background. When the caffeine wears off, all that accumulated adenosine floods your receptors at once, causing the dreaded <Link href="/articles/caffeine-makes-you-tired">"caffeine crash."</Link> Caffeine also indirectly boosts dopamine, which enhances focus and mood, but this effect is secondary to its primary role as an adenosine blocker.</p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3">Half-Life: The Invisible Clock</h3>
                        <p>The <strong>half-life</strong> of caffeine is the time it takes your body to eliminate 50% of it. For most people, this is about 5 hours. This means a 200mg coffee at 2 PM leaves 100mg in your system at 7 PM, and a sleep-disrupting 50mg at midnight. This process is managed by your liver, specifically the <strong>CYP1A2 enzyme</strong>. Your genetics determine whether you have a "fast" or "slow" version of this enzyme, which dramatically alters your personal half-life. Our <Link href="/calculators/caffeine-sensitivity-test">Sensitivity Test</Link> can help you find out which you are, and our <Link href="/calculators/caffeine-half-life">Half-Life Calculator</Link> lets you visualize this process.</p>
                    </div>
                </div>
            </section>

             <section id="how-it-works" aria-labelledby="how-it-works-heading">
                <div className="text-center">
                    <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold font-headline">How It Works: Your 3-Step Journey to Caffeine Mastery</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">We provide the tools to transform your relationship with caffeine in three simple, science-backed steps.</p>
                </div>
                <div className="mt-12 space-y-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-4xl font-bold text-primary/30">01</div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-headline">Measure Your Intake</h3>
                            <p className="text-muted-foreground">You can't manage what you don't measure. The first step is to get an honest look at your daily consumption. Use our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> to log every coffee, tea, and energy drink. You might be surprised how quickly small doses add up and push you over the recommended 400mg daily limit.</p>
                        </div>
                    </div>
                     <div className="flex flex-col md:flex-row-reverse items-center gap-8 text-right md:text-left">
                        <div className="text-4xl font-bold text-primary/30">02</div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-headline">Understand Your Biology</h3>
                            <p className="text-muted-foreground">Are you a fast or slow metabolizer? Your genetics are the single biggest factor in how your body handles caffeine. Take our 2-minute <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> to discover your personal profile. This crucial insight will inform every other decision you make.</p>
                        </div>
                    </div>
                     <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-4xl font-bold text-primary/30">03</div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-headline">Optimize Your Timing</h3>
                            <p className="text-muted-foreground">Timing is everything. Use the <Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link> and your sensitivity profile to establish a personal "caffeine curfew" that protects your sleep. For peak productivity, use the <Link href="/calculators/caffeine-timing-optimizer">Caffeine Timing Optimizer</Link> to align caffeine's peak effects with your most important tasks.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="understand-your-buzz" aria-labelledby="understand-your-buzz-heading">
                <div className="text-center">
                    <h2 id="understand-your-buzz-heading" className="text-3xl md:text-4xl font-bold font-headline">Understanding Your Buzz: Coffee vs. Tea vs. Energy Drinks</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Not all caffeine is created equal. The source of your caffeine dramatically changes its effect on your body and mind.</p>
                </div>
                 <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Coffee className="h-8 w-8 text-primary"/>
                                <CardTitle>Coffee</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>Delivers a potent, fast-acting dose of caffeine, ideal for a powerful alertness boost. However, its high concentration can lead to jitters in sensitive individuals. The <Link href="/articles/how-much-caffeine-in-a-cup-of-coffee">caffeine content varies wildly</Link> by brew method.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                           <div className="flex items-center gap-4">
                                <Leaf className="h-8 w-8 text-primary"/>
                                <CardTitle>Tea</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>Contains L-theanine, an amino acid that promotes a feeling of "calm alertness." This synergy provides a smoother, less anxious energy boost, making it a great choice for sustained focus. <Link href="/articles/does-matcha-have-caffeine">Matcha</Link> is a particularly potent source.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Zap className="h-8 w-8 text-primary"/>
                                <CardTitle>Energy Drinks</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>Often combine very high doses of caffeine with sugar and other stimulants. This can provide a powerful initial rush but often leads to a severe crash. Use our <Link href="/calculators/caffeine-drink-comparison">Drink Comparison Tool</Link> to see how brands like <Link href="/articles/how-much-caffeine-in-red-bull">Red Bull</Link> and <Link href="/articles/how-much-caffeine-in-monster">Monster</Link> stack up.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
            
            <section id="health-effects" aria-labelledby="health-effects-heading">
                <div className="text-center">
                    <h2 id="health-effects-heading" className="text-3xl md:text-4xl font-bold font-headline">Caffeine and Your Health: A Balanced View</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Caffeine is a complex drug with both benefits and risks. Responsible consumption is key to harnessing its power for good.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><Dumbbell className="h-6 w-6 text-accent"/>Athletic Performance</h3>
                        <p>Caffeine is a well-documented ergogenic aid. It can increase endurance, reduce perceived exertion, and improve power output. The key is timing and dosage. Using our <Link href="/calculators/caffeine-timing-optimizer">Timing Optimizer</Link> before a workout can help you peak at the right moment.</p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-accent"/>Cognitive Function</h3>
                        <p>The primary reason people use caffeine: it enhances alertness, focus, and reaction time. Studies show it can improve performance on a range of cognitive tasks. However, more is not always better. Exceeding your personal limit can lead to anxiety and diminished returns.</p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><Heart className="h-6 w-6 text-accent"/>Heart Health</h3>
                        <p>For most healthy adults, moderate caffeine intake (under 400mg/day) is not associated with adverse cardiovascular effects. However, <Link href="/calculators/caffeine-sensitivity-test">slow metabolizers</Link> who consume high amounts may have a slightly increased risk of hypertension. High doses can also cause temporary palpitations.</p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><TrendingDown className="h-6 w-6 text-accent"/>Dependence and Withdrawal</h3>
                        <p>Daily caffeine use leads to physical dependence. When you stop, you can experience headaches, fatigue, and irritability. This is not a sign of weakness, but a predictable neurochemical response. Our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> is designed to help you avoid this with a comfortable tapering plan.</p>
                    </div>
                </div>
            </section>
            
            <section id="myths" aria-labelledby="myths-heading">
                <div className="text-center">
                    <h2 id="myths-heading" className="text-3xl md:text-4xl font-bold font-headline">Debunking Common Caffeine Myths</h2>
                </div>
                <div className="mt-8 max-w-4xl mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="myth-1">
                            <AccordionTrigger>Myth: Espresso has more caffeine than drip coffee.</AccordionTrigger>
                            <AccordionContent>
                                <strong>Fact:</strong> Per ounce, yes. But a standard serving of drip coffee (8-12 oz) has more total caffeine than a single 1oz shot of espresso. A double-shot latte (~125mg) often has more caffeine than a small 8oz coffee (~95mg). <Link href="/articles/how-much-caffeine-in-espresso">Learn more here</Link>.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="myth-2">
                            <AccordionTrigger>Myth: Dark roast coffee is stronger.</AccordionTrigger>
                            <AccordionContent>
                                <strong>Fact:</strong> The opposite is often true. The roasting process burns off a small amount of caffeine. If measured by scoops, lighter roasts are denser and thus have slightly more caffeine. The difference is minimal compared to bean type and brew method.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="myth-3">
                            <AccordionTrigger>Myth: Caffeine is dehydrating.</AccordionTrigger>
                            <AccordionContent>
                                <strong>Fact:</strong> While caffeine is a mild diuretic, the fluid you consume with it (in coffee or tea) typically more than makes up for the fluid lost through urination. It does not lead to dehydration when consumed in moderate amounts.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            
            <section id="faq" aria-labelledby="faq-heading">
                <div className="text-center">
                    <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
                </div>
                <div className="mt-8 max-w-4xl mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is a safe amount of caffeine per day?</AccordionTrigger>
                            <AccordionContent>
                            For most healthy adults, the FDA recommends a limit of 400mg of caffeine per day. This is roughly equivalent to four 8-ounce cups of coffee. Use our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> to track your daily total and stay within this guideline.
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                            <AccordionTrigger>When should I stop drinking caffeine to protect my sleep?</AccordionTrigger>
                            <AccordionContent>
                             A good rule of thumb is to have your last caffeinated beverage 8-12 hours before bedtime. This allows your body to clear most of the stimulant. Use our <Link href="/calculators/caffeine-sleep-calculator">Caffeine Sleep Calculator</Link> for a personalized estimate based on your metabolism.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Why do I get a headache when I skip coffee?</AccordionTrigger>
                            <AccordionContent>
                            This is the most common symptom of caffeine withdrawal. Your brain adapts to the daily presence of caffeine, and when it's removed, it can cause rebound effects like headaches and fatigue. The best way to quit is a gradual taper, which you can plan with our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>

        <section className="bg-muted/30 py-20 md:py-28 mt-16 text-center" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4">
                 <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Take Control?</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Stop guessing and start optimizing. Use our free, science-backed tools to build a healthier, more productive relationship with caffeine today.
                </p>
                <Link href="/calculators">
                    <Button size="lg">Explore All Calculators</Button>
                </Link>
            </div>
        </section>

      </div>
  );
}
