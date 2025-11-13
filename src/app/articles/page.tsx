
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { BookText, Database, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Learn About Caffeine — Articles, Guides & Tools',
    description: 'Explore in-depth articles, guides, and tools to understand caffeine. From its effects on sleep to the caffeine content of your favorite drinks, master your consumption.',
};

const articleLinks = [
  {
    title: "How Long Before Bed to Stop Caffeine",
    href: "/articles/how-long-before-bed-to-stop-caffeine",
    description: "Find your personal caffeine curfew for better sleep.",
    icon: BookText,
  },
  {
    title: "Caffeine's Effect on REM Sleep",
    href: "/articles/caffeine-effect-on-rem-sleep",
    description: "Learn how caffeine impacts your dreams and brain health.",
    icon: BookText,
  },
  {
    title: "Caffeine Half-Life & Sleep",
    href: "/articles/caffeine-half-life-sleep",
    description: "Understand the science of how long caffeine affects you.",
    icon: BookText,
  },
];

const toolLinks = [
    {
        title: "Caffeine in Drinks Database",
        href: "/calculators/caffeine-drinks-database",
        description: "Search our extensive database of over 1,000 beverages to find their exact caffeine content.",
        icon: Database,
    },
    {
        title: "Caffeine Drink Comparison Tool",
        href: "/calculators/caffeine-drink-comparison",
        description: "Visually compare the caffeine in coffee, tea, energy drinks, and more, side-by-side.",
        icon: Zap,
    },
];

const articlesPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Learn About Caffeine",
  "description": "Explore in-depth articles, guides, and tools to understand caffeine.",
  "url": "https://caffeinecompass.com/articles",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [...articleLinks, ...toolLinks].map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      "url": `https://caffeinecompass.com${item.href}`
    }))
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://caffeinecompass.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Learn",
        "item": "https://caffeinecompass.com/articles"
      }
    ]
  }
};


export default function ArticlesPage() {
  return (
    <>
      <JsonLd data={articlesPageJsonLd} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Learn & Explore</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            In-depth guides and tools to help you understand and master your relationship with caffeine.
          </p>
        </div>

         <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 border-b pb-4">Knowledge Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {toolLinks.map((tool) => (
                    <Link key={tool.title} href={tool.href} className="block group">
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
                ))}
            </div>
        </div>
        
        <div>
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 border-b pb-4">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articleLinks.map((article) => (
                    <Link key={article.title} href={article.href} className="block group">
                    <Card className="h-full group-hover:border-primary group-hover:bg-card/95 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
                        <CardHeader>
                        <div className="flex items-center gap-4">
                            <article.icon className="h-8 w-8 text-primary" aria-hidden="true" />
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
        </div>
      </div>
    </>
  );
}
