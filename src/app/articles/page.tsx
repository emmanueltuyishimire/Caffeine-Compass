
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { BookText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Caffeine Articles — Science-Backed Guides for Health & Performance',
    description: 'Explore in-depth articles on caffeine, from its effects on sleep and metabolism to strategies for optimizing your intake for health, focus, and productivity.',
};

const articles = [
  {
    title: "Caffeine's Effect on REM Sleep",
    href: "/articles/caffeine-effect-on-rem-sleep",
    description: "A deep dive into how caffeine impacts your dreams and brain health.",
    icon: BookText,
  },
];

const articlesPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Articles",
  "description": "Explore in-depth articles on caffeine, from its effects on sleep and metabolism to strategies for optimizing your intake for health, focus, and productivity.",
  "url": "https://caffeine-calculation-site.com/articles",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": articles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": article.title,
      "url": `https://caffeine-calculation-site.com${article.href}`
    }))
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://caffeine-calculation-site.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://caffeine-calculation-site.com/articles"
      }
    ]
  }
};


export default function ArticlesPage() {
  return (
    <>
      <JsonLd data={articlesPageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Caffeine Articles</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            In-depth, science-backed guides to help you understand and master your relationship with caffeine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link key={article.title} href={article.href} className="block">
              <Card className="h-full hover:border-primary hover:bg-card/95 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
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
    </>
  );
}
