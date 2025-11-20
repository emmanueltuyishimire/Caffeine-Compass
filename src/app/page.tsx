
import './globals.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Coffee, BrainCircuit, Shield, TrendingDown, BarChart2, Zap, Leaf, Heart, Dumbbell, AlertTriangle } from 'lucide-react';
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
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
  "about": {
    "@type": "Thing",
    "name": "Caffeine",
    "description": "This page provides comprehensive information, calculators, and scientific articles about caffeine, its effects on the human body, health implications, and how to manage its consumption for optimal wellness and performance."
  },
  "publisher": {
    "@type": "Organization",
    "name": "Caffeine Compass",
    "logo": {
        "@type": "ImageObject",
        "url": "https://calculation.site/app.png"
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
  },
  "faqPage": {
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Is caffeine good or bad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Caffeine is neither inherently 'good' nor 'bad'—it's a powerful drug whose effect depends on dose, timing, and individual genetics. In moderate doses, it has proven benefits for focus and athletic performance. However, high doses or poor timing can lead to anxiety and disrupt sleep. Responsible use is key."
            }
        },
         {
            "@type": "Question",
            "name": "Is it healthier to avoid caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not necessarily. While a caffeine-free life can lead to better sleep and less anxiety for some, moderate caffeine consumption (especially from coffee and tea) has been linked in large studies to certain health benefits. The healthiest approach depends on your individual goals and sensitivity."
            }
        },
        {
            "@type": "Question",
            "name": "What are the benefits of caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The primary benefits of caffeine are increased alertness, improved concentration, reduced fatigue, and enhanced physical performance. Some long-term studies on coffee consumption have also suggested a correlation with reduced risk for certain diseases, and caffeine is good for your brain in moderate doses."
            }
        },
        {
            "@type": "Question",
            "name": "What are the side effects of too much caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Consuming too much caffeine for your personal tolerance can lead to anxiety, restlessness, a racing heart (palpitations), digestive issues, and insomnia. Two classic signs you've had too much are feeling 'jittery' and having a racing mind. Our <a href='/calculators/caffeine-sensitivity-test'>Caffeine Sensitivity Test</a> can help you better understand your tolerance."
            }
        },
        {
            "@type": "Question",
            "name": "What does caffeine do to your body?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Caffeine blocks adenosine receptors in your brain, preventing you from feeling tired. It also increases adrenaline and boosts dopamine, which enhances focus, heart rate, and blood pressure. Your liver then metabolizes it over several hours."
            }
        },
        {
            "@type": "Question",
            "name": "Which organ is most affected by caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The <strong>brain</strong> is the organ most affected by caffeine's primary psychoactive effects. The <strong>liver</strong> is the organ that removes caffeine from the body by metabolizing it, which is why liver health and genetics are key to your sensitivity."
            }
        },
        {
            "@type": "Question",
            "name": "How long does caffeine stay in your body?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Caffeine's effects can last for many hours. Its 'half-life' (the time it takes your body to eliminate 50% of the drug) is around 5 hours for the average person. This means it can take over 10 hours to clear most of the caffeine from your system. Our <a href='/calculators/caffeine-half-life'>Caffeine Half-Life Calculator</a> can give you a personalized estimate."
            }
        },
        {
            "@type": "Question",
            "name": "Does caffeine affect sleep?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, profoundly. Caffeine is a powerful sleep disruptor. Even if you can fall asleep, caffeine consumed in the afternoon or evening can reduce the quality of your deep sleep and REM sleep, leaving you feeling unrefreshed. Our <a href='/calculators/caffeine-sleep-calculator'>Caffeine Sleep Calculator</a> shows how much can be left in your system at bedtime."
            }
        },
        {
            "@type": "Question",
            "name": "What happens when you stop caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "When you stop caffeine abruptly, you can experience withdrawal symptoms like headaches, severe fatigue, irritability, and 'brain fog'. This is because your brain has adapted to caffeine's presence. To avoid this, it's best to reduce your intake gradually. Our <a href='/calculators/caffeine-withdrawal-tracker'>Caffeine Withdrawal Tracker</a> can help you create a comfortable tapering plan."
            }
        },
        {
            "@type": "Question",
            "name": "What drinks are high in caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "High-caffeine drinks include strong brewed coffee (especially from chains like Starbucks), cold brew, and many modern energy drinks like Bang or Reign, which can contain 300mg or more. Use our <a href='/calculators/caffeine-drink-comparison'>Drink Comparison Tool</a> to see how different drinks stack up."
            }
        },
        {
            "@type": "Question",
            "name": "What is the healthiest source of caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Unsweetened green tea and black coffee are generally considered the healthiest sources. They provide the cognitive benefits of caffeine along with antioxidants and other beneficial plant compounds, without the added sugar found in sodas and most energy drinks."
            }
        },
        {
            "@type": "Question",
            "name": "Who should avoid caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Certain groups should avoid or strictly limit caffeine. This includes people with underlying heart conditions, severe anxiety disorders, or those taking specific medications that interact with caffeine. Pregnant women are advised to limit their intake to under 200mg per day. Children and adolescents should also avoid caffeine."
            }
        },
        {
            "@type": "Question",
            "name": "Does caffeine increase heart rate and blood pressure?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, caffeine is a stimulant and can temporarily increase your heart rate and blood pressure. This effect is generally modest and not considered harmful for healthy individuals in moderate doses, but can be a concern for those with pre-existing heart conditions."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best time to drink caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best time depends on your goal. For productivity, drink it 45-60 minutes before a task. To protect sleep, have your last dose 8-12 hours before bed. Our <a href='/calculators/caffeine-timing-optimizer'>Caffeine Timing Optimizer</a> can find the perfect time for you."
            }
        },
        {
            "@type": "Question",
            "name": "Can drinking water flush out caffeine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Your liver metabolizes caffeine at a genetically determined rate. Drinking water is good for hydration but it will not speed up this process. Only time can clear caffeine from your system."
            }
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
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
      <div className="flex flex-col">
        <JsonLd data={homePageJsonLd} />
        
        <section className="relative bg-primary/5 py-20 md:py-28 text-center text-foreground" aria-labelledby="hero-heading">
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
              {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    fetchPriority="high"
                    className="object-cover object-center z-0 opacity-10 dark:opacity-5"
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="container relative mx-auto px-4 z-20">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                {featuredCalculators.map((calc) => (
                  <div key={calc.title} role="listitem">
                    <Link href={calc.href} className="block group h-full" aria-label={`Go to ${calc.title}`}>
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
                  </div>
                ))}
              </div>
          </div>
        </section>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-16 px-4">
            <section id="how-it-works" aria-labelledby="how-it-works-heading">
                <div className="text-center">
                    <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold font-headline">Your 3-Step Journey to Caffeine Mastery</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">We provide the tools to transform your relationship with caffeine in three simple, science-backed steps.</p>
                </div>
                <div className="mt-12 space-y-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-4xl font-bold text-primary/30" aria-hidden="true">01</div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-headline">Measure Your Intake</h3>
                            <p className="text-muted-foreground">You can't manage what you don't measure. The first step is to get an honest look at your daily consumption. Use our <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link> to log every coffee, tea, and energy drink. You might be surprised how quickly small doses add up and push you over the recommended 400mg daily limit.</p>
                        </div>
                    </div>
                     <div className="flex flex-col md:flex-row-reverse items-center gap-8 text-right md:text-left">
                        <div className="text-4xl font-bold text-primary/30" aria-hidden="true">02</div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold font-headline">Understand Your Biology</h3>
                            <p className="text-muted-foreground">Are you a fast or slow metabolizer? Your genetics are the single biggest factor in how your body handles caffeine. Take our 2-minute <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> to discover your personal profile. This crucial insight will inform every other decision you make.</p>
                        </div>
                    </div>
                     <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-4xl font-bold text-primary/30" aria-hidden="true">03</div>
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
                                <Coffee className="h-8 w-8 text-primary" aria-hidden="true"/>
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
                                <Leaf className="h-8 w-8 text-primary" aria-hidden="true"/>
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
                                <Zap className="h-8 w-8 text-primary" aria-hidden="true"/>
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
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><Dumbbell className="h-6 w-6 text-accent" aria-hidden="true"/>Athletic Performance</h3>
                        <p>Caffeine is a well-documented ergogenic aid. It can increase endurance, reduce perceived exertion, and improve power output. The key is timing and dosage. Using our <Link href="/calculators/caffeine-timing-optimizer">Timing Optimizer</Link> before a workout can help you peak at the right moment.</p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-accent" aria-hidden="true"/>Cognitive Function</h3>
                        <p>The primary reason people use caffeine: it enhances alertness, focus, and reaction time. Studies show it can improve performance on a range of cognitive tasks. However, more is not always better. Exceeding your personal limit can lead to anxiety and diminished returns.</p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><Heart className="h-6 w-6 text-accent" aria-hidden="true"/>Heart Health</h3>
                        <p>For most healthy adults, moderate caffeine intake (under 400mg/day) is not associated with adverse cardiovascular effects. However, <Link href="/calculators/caffeine-sensitivity-test">slow metabolizers</Link> who consume high amounts may have a slightly increased risk of hypertension. High doses can also cause temporary palpitations.</p>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-2xl font-bold font-headline mb-3 flex items-center gap-2"><TrendingDown className="h-6 w-6 text-accent" aria-hidden="true"/>Dependence and Withdrawal</h3>
                        <p>Daily caffeine use leads to physical dependence. When you stop, you can experience headaches, fatigue, and irritability. This is not a sign of weakness, but a predictable neurochemical response. Our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> is designed to help you avoid this with a comfortable tapering plan.</p>
                    </div>
                </div>
            </section>
            
             <section id="why-trust-us" aria-labelledby="why-trust-us-heading">
                <div className="text-center">
                    <h2 id="why-trust-us-heading" className="text-3xl md:text-4xl font-bold font-headline">Your Trusted Source for Caffeine Science</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Caffeine is a drug. We treat it with the respect it deserves, providing you with evidence-based tools and information to help you build a healthier, more intentional relationship with it.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <BrainCircuit className="h-10 w-10 mx-auto text-primary mb-4" aria-hidden="true" />
                        <h3 className="text-xl font-bold">Science-Backed</h3>
                        <p className="text-muted-foreground">Our tools and articles are built on a foundation of established scientific research. We provide links to relevant studies, empowering you to explore the data and learn more from primary sources. Explore our <Link href="/articles">caffeine articles</Link>.</p>
                    </div>
                    <div className="text-center">
                        <Heart className="h-10 w-10 mx-auto text-primary mb-4" aria-hidden="true" />
                        <h3 className="text-xl font-bold">Personal Wellness</h3>
                        <p className="text-muted-foreground">There's no one-size-fits-all answer to caffeine. Our tools emphasize personalization, helping you understand your unique tolerance and how caffeine affects your sleep and well-being. Take our <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> to start.</p>
                    </div>
                    <div className="text-center">
                        <TrendingDown className="h-10 w-10 mx-auto text-primary mb-4" aria-hidden="true" />
                        <h3 className="text-xl font-bold">Empowerment Through Knowledge</h3>
                        <p className="text-muted-foreground">Our goal is to give you the knowledge you need to make conscious, mindful decisions. Stop guessing and start optimizing your energy with tools like the <Link href="/calculators/caffeine-intake">Caffeine Intake Calculator</Link>.</p>
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
                         <AccordionItem value="myth-4">
                            <AccordionTrigger>Myth: Drinking water can flush caffeine out of your system.</AccordionTrigger>
                            <AccordionContent>
                                <strong>Fact:</strong> No. Once caffeine is in your bloodstream, only your liver can break it down. Drinking water is good for hydration but it will not speed up the metabolic process. Only time can clear caffeine from your system.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            
            <section id="alcohol-warning" aria-labelledby="alcohol-warning-heading">
                <div className="text-center">
                    <h2 id="alcohol-warning-heading" className="text-3xl md:text-4xl font-bold font-headline">Caffeine and Alcohol: A Word of Caution</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">While this site focuses on the positive, optimized use of caffeine, it is crucial to address the risks of mixing caffeine with alcohol. We strongly advise against this practice.</p>
                </div>
                <div className="mt-8 max-w-4xl mx-auto p-4 border border-destructive bg-destructive/10 rounded-lg">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="h-8 w-8 text-destructive" aria-hidden="true" />
                        <div>
                            <h3 className="font-bold text-destructive">Medical Warning</h3>
                            <p className="text-sm text-destructive/90">Mixing caffeine, a stimulant, with alcohol, a depressant, is dangerous. Caffeine can mask the intoxicating effects of alcohol, leading you to feel less drunk than you actually are. This can result in overconsumption of alcohol, impaired judgment, and an increased risk of accidents or alcohol poisoning.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 max-w-4xl mx-auto">
                    <p>The following table is provided for educational purposes only, to raise awareness of the caffeine content in common alcoholic beverages. A 2005 clinical trial showed psychoactive effects from caffeine doses as low as 9 mg.</p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Drink</TableHead>
                                <TableHead>Caffeine (mg/drink)</TableHead>
                                <TableHead>ABV</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Espresso martini</TableCell><TableCell>~217 mg</TableCell><TableCell>9.8%</TableCell></TableRow>
                            <TableRow><TableCell>Caffè corretto</TableCell><TableCell>~212 mg</TableCell><TableCell>20%</TableCell></TableRow>
                            <TableRow><TableCell>Carajillo</TableCell><TableCell>~212 mg</TableCell><TableCell>20 %</TableCell></TableRow>
                            <TableRow><TableCell>Buckfast Tonic Wine</TableCell><TableCell>~89 mg</TableCell><TableCell>14.8%</TableCell></TableRow>
                            <TableRow><TableCell>Vodka Red Bull</TableCell><TableCell>~60-80 mg</TableCell><TableCell>7.4%</TableCell></TableRow>
                            <TableRow><TableCell>Irish coffee</TableCell><TableCell>~80 mg</TableCell><TableCell>9.7%</TableCell></TableRow>
                            <TableRow><TableCell>Gunfire</TableCell><TableCell>~41 mg</TableCell><TableCell>6%</TableCell></TableRow>
                            <TableRow><TableCell>Rev</TableCell><TableCell>~38 mg</TableCell><TableCell>7%</TableCell></TableRow>
                            <TableRow><TableCell>Jägerbomb</TableCell><TableCell>~29 mg</TableCell><TableCell>3.5%</TableCell></TableRow>
                            <TableRow><TableCell>Kahlúa (1.5 oz)</TableCell><TableCell>~11 mg</TableCell><TableCell>20%</TableCell></TableRow>
                            <TableRow><TableCell>Rum and Coke</TableCell><TableCell>~10 mg</TableCell><TableCell>11.8%</TableCell></TableRow>
                        </TableBody>
                    </Table>
                    <p className="text-sm mt-2 text-muted-foreground">Source: Publicly available data and product labels. Caffeine content is approximate and can vary based on preparation.</p>
                </div>
            </section>

            <section id="faq" aria-labelledby="faq-heading">
                <div className="text-center">
                    <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions About Caffeine</h2>
                </div>
                <div className="mt-8 max-w-4xl mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="q-good-or-bad">
                            <AccordionTrigger>Is caffeine good or bad?</AccordionTrigger>
                            <AccordionContent>Caffeine is neither inherently 'good' nor 'bad'—it's a powerful drug whose effect depends on dose, timing, and individual genetics. In moderate doses, it has proven benefits for focus and athletic performance. However, high doses or poor timing can lead to anxiety and disrupt sleep. Responsible use is key.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-healthier-to-avoid">
                             <AccordionTrigger>Is it healthier to avoid caffeine?</AccordionTrigger>
                             <AccordionContent>Not necessarily. While a caffeine-free life can lead to better sleep and less anxiety for some, moderate caffeine consumption (especially from coffee and tea) has been linked in large studies to certain health benefits. The healthiest approach depends on your individual goals and sensitivity.</AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="q-benefits">
                            <AccordionTrigger>What are the benefits of caffeine?</AccordionTrigger>
                            <AccordionContent>The primary benefits of caffeine are increased alertness, improved concentration, reduced fatigue, and enhanced physical performance. Some long-term studies on coffee consumption have also suggested a correlation with reduced risk for certain diseases, and caffeine is good for your brain in moderate doses.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-side-effects">
                            <AccordionTrigger>What are the side effects of too much caffeine?</AccordionTrigger>
                            <AccordionContent>Consuming too much caffeine for your personal tolerance can lead to anxiety, restlessness, a racing heart (palpitations), digestive issues, and insomnia. Two classic signs you've had too much are feeling 'jittery' and having a racing mind. Our <Link href="/calculators/caffeine-sensitivity-test">Caffeine Sensitivity Test</Link> can help you better understand your tolerance.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-what-does-it-do">
                            <AccordionTrigger>What does caffeine do to your body?</AccordionTrigger>
                            <AccordionContent>Caffeine blocks adenosine receptors in your brain, preventing you from feeling tired. It also increases adrenaline and boosts dopamine, which enhances focus, heart rate, and blood pressure. Your liver then metabolizes it over several hours.</AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="q-organ-most-affected">
                            <AccordionTrigger>Which organ is most affected by caffeine?</AccordionTrigger>
                            <AccordionContent>The <strong>brain</strong> is the organ most affected by caffeine's primary psychoactive effects. The <strong>liver</strong> is the organ that removes caffeine from the body by metabolizing it, which is why liver health and genetics are key to your sensitivity.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-how-long-stay">
                             <AccordionTrigger>How long does caffeine stay in your body?</AccordionTrigger>
                            <AccordionContent>Caffeine's effects can last for many hours. Its 'half-life' (the time it takes your body to eliminate 50% of the drug) is around 5 hours for the average person. This means it can take over 10 hours to clear most of the caffeine from your system. Our <Link href="/calculators/caffeine-half-life">Caffeine Half-Life Calculator</Link> can give you a personalized estimate.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-affect-sleep">
                            <AccordionTrigger>Does caffeine affect sleep?</AccordionTrigger>
                            <AccordionContent>Yes, profoundly. Caffeine is a powerful sleep disruptor. Even if you can fall asleep, caffeine consumed in the afternoon or evening can reduce the quality of your deep sleep and REM sleep, leaving you feeling unrefreshed. Our <Link href="/calculators/caffeine-sleep-calculator">Caffeine Sleep Calculator</Link> shows how much can be left in your system at bedtime.</AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="q-what-happens-stop">
                            <AccordionTrigger>What happens when you stop caffeine?</AccordionTrigger>
                            <AccordionContent>When you stop caffeine abruptly, you can experience withdrawal symptoms like headaches, severe fatigue, irritability, and 'brain fog'. This is because your brain has adapted to caffeine's presence. To avoid this, it's best to reduce your intake gradually. Our <Link href="/calculators/caffeine-withdrawal-tracker">Caffeine Withdrawal Tracker</Link> can help you create a comfortable tapering plan.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-drinks-high-caffeine">
                            <AccordionTrigger>What drinks are high in caffeine?</AccordionTrigger>
                            <AccordionContent>High-caffeine drinks include strong brewed coffee (especially from chains like Starbucks), cold brew, and many modern energy drinks like Bang or Reign, which can contain 300mg or more. Use our <Link href="/calculators/caffeine-drink-comparison">Drink Comparison Tool</Link> to see how different drinks stack up.</AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="q-healthiest-source">
                            <AccordionTrigger>What is the healthiest source of caffeine?</AccordionTrigger>
                            <AccordionContent>Unsweetened green tea and black coffee are generally considered the healthiest sources. They provide the cognitive benefits of caffeine along with antioxidants and other beneficial plant compounds, without the added sugar found in sodas and most energy drinks.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-who-should-avoid">
                            <AccordionTrigger>Who should avoid caffeine?</AccordionTrigger>
                            <AccordionContent>Certain groups should avoid or strictly limit caffeine. This includes people with underlying heart conditions, severe anxiety disorders, or those taking specific medications that interact with caffeine. Pregnant women are advised to limit their intake to under 200mg per day. Children and adolescents should also avoid caffeine.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-heart-and-blood-pressure">
                            <AccordionTrigger>Does caffeine increase heart rate and blood pressure?</AccordionTrigger>
                            <AccordionContent>Yes, caffeine is a stimulant and can temporarily increase your heart rate and blood pressure. This effect is generally modest and not considered harmful for healthy individuals in moderate doses, but can be a concern for those with pre-existing heart conditions.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-best-time">
                             <AccordionTrigger>What is the best time to drink caffeine?</AccordionTrigger>
                             <AccordionContent>The best time depends on your goal. For productivity, drink it 45-60 minutes before a task. To protect sleep, have your last dose 8-12 hours before bed. Our <Link href="/calculators/caffeine-timing-optimizer">Caffeine Timing Optimizer</Link> can find the perfect time for you.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q-water-flush">
                             <AccordionTrigger>Can drinking water flush out caffeine?</AccordionTrigger>
                             <AccordionContent>No. Your liver metabolizes caffeine at a genetically determined rate. Drinking water is good for hydration but it will not speed up this process. Only time can clear caffeine from your system.</AccordionContent>
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
