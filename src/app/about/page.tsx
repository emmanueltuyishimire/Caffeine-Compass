
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Target, HeartPulse } from 'lucide-react';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

export const metadata: Metadata = {
    title: 'About Caffeine Compass — Our Mission and Science-Backed Approach',
    description: 'Learn about the mission behind Caffeine Compass and the team dedicated to helping you optimize your caffeine intake for better health, focus, and sleep using our tools.',
};

const team = [
    {
        name: 'Dr. Evelyn Reed',
        role: 'Founder & Lead Scientist',
        bio: 'With a Ph.D. in Chronobiology, Dr. Reed is a leading expert on how stimulants affect human sleep cycles. She founded Caffeine Compass to translate complex science into a simple, actionable tool that empowers everyone to master their biology, not be a victim of it.',
        imageId: 'team-evelyn'
    },
    {
        name: 'Alex Chen',
        role: 'Co-Founder & Lead Developer',
        bio: 'As a developer who survived on caffeine-fueled all-nighters, Alex experienced firsthand the burnout that comes from a mismanaged energy cycle. He partnered with Dr. Reed to build the tool he wishes he had, one that fosters sustainable productivity and genuine well-being.',
        imageId: 'team-alex'
    },
];

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Caffeine Compass — Our Mission and Science-Backed Approach",
  "description": "Learn about the mission behind Caffeine Compass and the team dedicated to helping you optimize your caffeine intake for better health, focus, and sleep using our tools.",
  "url": "https://calculation.site/about",
   "publisher": {
    "@type": "Organization",
    "name": "Caffeine Compass",
    "logo": {
      "@type": "ImageObject",
      "url": logoImage?.imageUrl || "https://calculation.site/logo.png"
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://calculation.site/about"
      }
    ]
  }
};


export default function AboutPage() {
    const missionImage = PlaceHolderImages.find(p => p.id === 'mission-image');

    return (
        <>
            <JsonLd data={aboutPageJsonLd} />
            <div className="container mx-auto px-4 py-12 md:py-20">
                <header className="text-center mb-12" role="banner">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4" id="page-title">Master Your Energy. Don't Let It Master You.</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Caffeine is the world's favorite drug, but most of us use it blindly. Caffeine Compass was born from a powerful idea: what if we could use science to harness its benefits without the costs?
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20" aria-labelledby="our-mission-heading">
                     {missionImage && (
                        <div className="relative h-full min-h-[300px]">
                            <Image
                                src={missionImage.imageUrl}
                                alt={missionImage.description}
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={missionImage.imageHint}
                                quality={80}
                            />
                        </div>
                    )}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Target className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 id="our-mission-heading" className="text-2xl font-bold font-headline mb-2">Our Mission: Precision Wellness</h2>
                                <p className="text-muted-foreground">
                                    Our mission is to empower you with the scientific tools to master your caffeine intake. We believe that with precise, personalized data, you can transform caffeine from a source of anxiety and poor sleep into a powerful ally for focus, productivity, and health.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-full">
                                <HeartPulse className="h-6 w-6 text-accent" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-headline mb-2">Our Philosophy: Mindful Consumption</h2>
                                <p className="text-muted-foreground">
                                   We reject the one-size-fits-all approach. Caffeine isn't simply "good" or "bad"—its effect is determined by your unique biology, the dose, and the timing. Our philosophy is built on providing personalized insights, helping you make conscious, informed decisions that align with your body and your goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20" aria-labelledby="toolkit-heading">
                    <Card>
                        <CardHeader>
                            <CardTitle id="toolkit-heading" className="text-center text-3xl font-bold font-headline">A Toolkit for Peak Performance</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Track with Precision</h3>
                                <p className="text-muted-foreground">Log your drinks and instantly see your total caffeine load against science-backed daily limits.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Understand Your Biology</h3>
                                <p className="text-muted-foreground">Visualize caffeine's half-life in your system and discover your unique metabolic sensitivity.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Optimize for Your Day</h3>
                                <p className="text-muted-foreground">Pinpoint the perfect time to consume caffeine for maximum focus while safeguarding your sleep.</p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section aria-labelledby="team-heading">
                    <div className="text-center mb-12">
                        <Users className="h-10 w-10 mx-auto text-primary mb-4" aria-hidden="true" />
                        <h2 id="team-heading" className="text-3xl font-bold font-headline">Meet the Minds Behind the Compass</h2>
                         <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                            Caffeine Compass was built by a team obsessed with the intersection of science and daily life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {team.map((member) => {
                            const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
                            return (
                                <div key={member.name} className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
                                    <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                                        {memberImage && (
                                            <AvatarImage src={memberImage.imageUrl} alt={`Headshot of ${member.name}, ${member.role}`} data-ai-hint={memberImage.imageHint} />
                                        )}
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary font-medium mb-2">{member.role}</p>
                                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}
