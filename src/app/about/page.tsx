
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, Target, HeartPulse } from 'lucide-react';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'About Caffeine Compass — Our Mission and Science-Backed Approach',
    description: 'Learn about the mission behind Caffeine Compass and the team dedicated to helping you optimize your caffeine intake for better health, focus, and sleep.',
};

const team = [
    {
        name: 'Dr. Evelyn Reed',
        role: 'Founder & Lead Scientist',
        bio: 'With a Ph.D. in Chronobiology, Dr. Reed has dedicated her career to studying the effects of stimulants on human sleep cycles. She founded Caffeine Compass to translate complex science into a simple, actionable tool for everyone.',
    },
    {
        name: 'Alex Chen',
        role: 'Co-Founder & Lead Developer',
        bio: 'A former coffee-fueled startup developer, Alex experienced firsthand the highs and lows of caffeine dependency. He teamed up with Dr. Reed to build a tool that promotes mindful productivity and well-being.',
    },
];

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Caffeine Compass",
  "description": "Learn about the mission behind Caffeine Compass and the team dedicated to helping you optimize your caffeine intake for better health, focus, and sleep.",
  "url": "https://caffeine-compass.com/about",
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
        "name": "About",
        "item": "https://caffeine-compass.com/about"
      }
    ]
  }
};


export default function AboutPage() {
    return (
        <>
            <JsonLd data={aboutPageJsonLd} />
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Navigating Your Day with Precision</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Caffeine Compass was born from a simple idea: what if we could master our caffeine intake instead of letting it master us?
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-16 items-center mb-20">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Target className="h-6 w-6 text-primary" aria-label="Our Mission Icon" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-headline mb-2">Our Mission</h2>
                                <p className="text-muted-foreground">
                                    To empower people to understand, calculate, and optimize their caffeine habits for better focus, health, and sleep. We believe that with the right knowledge, caffeine can be a powerful tool for productivity, not a source of anxiety or poor rest.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-full">
                                <HeartPulse className="h-6 w-6 text-accent" aria-label="Our Philosophy Icon" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-headline mb-2">Our Philosophy</h2>
                                <p className="text-muted-foreground">
                                    We advocate for mindful consumption. Caffeine isn't inherently good or bad—it's about timing, dosage, and personal metabolism. Our tools are designed to provide personalized insights, helping you make informed decisions that align with your body and your goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="mb-20">
                    <CardHeader>
                        <CardTitle className="text-center text-3xl font-bold font-headline">Features at a Glance</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Intake Calculator</h3>
                            <p className="text-muted-foreground">Log your drinks and instantly see your total caffeine consumption against recommended daily limits.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Half-Life Estimator</h3>
                            <p className="text-muted-foreground">Visualize how caffeine decays in your system over time based on your metabolism.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Sleep Impact Predictor</h3>
                            <p className="text-muted-foreground">Calculate how much caffeine will be left in your system by bedtime to protect your sleep quality.</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="text-center mb-12">
                    <Users className="h-10 w-10 mx-auto text-primary mb-4" aria-label="Team Icon" />
                    <h2 className="text-3xl font-bold font-headline">Meet the Minds Behind the Compass</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
                            <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <p className="text-muted-foreground text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
