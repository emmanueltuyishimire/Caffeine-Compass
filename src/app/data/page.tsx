
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { Database, Zap, Coffee } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Caffeine & Sugar Data Hub — Caffeine Compass',
    description: 'Explore our comprehensive databases for caffeine and sugar content in thousands of popular beverages. Make informed choices for your health and energy.',
};

const dataTools = [
    {
        title: "Caffeine in Drinks Database",
        href: "/calculators/caffeine-drinks-database",
        description: "Search our extensive database of over 1,000 beverages to find their exact caffeine content.",
        icon: Coffee,
    },
    {
        title: "Sugar in Drinks Database",
        href: "/data/sugar-in-drinks",
        description: "Explore the sugar and calorie content of hundreds of popular drinks to make healthier choices.",
        icon: Zap,
    },
];

const dataPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine & Sugar Data Hub",
  "description": "Explore comprehensive databases for caffeine and sugar content in beverages.",
  "url": "https://calculation.site/data",
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
        "name": "Data",
        "item": "https://calculation.site/data"
      }
    ]
  },
  "mainEntity": {
      "@type": "ItemList",
      "itemListElement": dataTools.map((tool, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": tool.title,
          "url": `https://calculation.site${tool.href}`
      }))
  }
};


export default function DataLandingPage() {
  return (
    <>
      <JsonLd data={dataPageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <Database className="h-10 w-10 mx-auto text-primary mb-4" aria-hidden="true" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Beverage Data Hub</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Knowledge is power. Use our detailed databases to understand exactly what's in your drink, from caffeine to sugar and calories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" role="list">
            {dataTools.map((tool) => (
                <div role="listitem" key={tool.title}>
                  <Link href={tool.href} className="block group h-full" aria-label={`Go to ${tool.title}`}>
                    <Card className="h-full group-hover:border-primary group-hover:bg-card/95 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <tool.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                                <CardTitle>{tool.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{tool.description}</p>
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
