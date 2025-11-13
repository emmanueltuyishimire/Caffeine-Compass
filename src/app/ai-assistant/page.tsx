
import dynamic from 'next/dynamic';
import { Bot, HelpCircle, Lightbulb, Zap } from 'lucide-react';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const CaffeineAssistant = dynamic(() => import('@/components/features/CaffeineAssistant'), {
  ssr: false,
  loading: () => (
     <Card className="max-w-4xl mx-auto h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot />
          Personalized Caffeine Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
       <CardFooter className="pt-4 border-t">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
});


export const metadata: Metadata = {
    title: 'Caffeine Assistant — AI-Powered Support for Your Caffeine Questions',
    description: 'Get instant, AI-powered answers to all your questions about caffeine. From drink contents to optimal timing and health effects, our assistant is here to help.',
};

const supportPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Assistant Support",
  "description": "Get instant, AI-powered answers to all your questions about caffeine.",
  "url": "https://caffeine-calculation-site.com/ai-assistant",
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
        "name": "AI Assistant",
        "item": "https://caffeine-calculation-site.com/ai-assistant"
      }
    ]
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much caffeine is in a grande coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The amount can vary greatly. For example, a Starbucks Grande Pike Place has about 310 mg, while a Blonde Roast has 360 mg. Our AI Assistant can give you specifics from our database."
        }
      },
      {
        "@type": "Question",
        "name": "When should I have my last coffee to protect my sleep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good rule of thumb is to have your last caffeine dose 10-12 hours before bedtime. Our AI can give you personalized advice based on your metabolism."
        }
      }
    ]
  }
};


export default function AiAssistantPage() {
  return (
    <>
      <JsonLd data={supportPageJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Bot className="h-10 w-10 mx-auto text-primary mb-4" aria-label="AI Assistant Icon" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Caffeine Assistant</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about caffeine? Our AI-powered assistant is here to help. Ask anything from drink contents to optimal timing.
          </p>
        </div>

        <CaffeineAssistant />

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-20 space-y-12">
            <section id="how-it-works" role="article" aria-labelledby="how-it-works-heading">
                <h2 id="how-it-works-heading" className="text-3xl font-bold">Your Personal Caffeine Expert</h2>
                <p>
                    Navigating the world of caffeine can be complex. From understanding the content of your favorite drinks to optimizing timing for peak performance, there's a lot to consider. Our AI-powered Caffeine Assistant is here to simplify that process. Built on a foundation of our comprehensive beverage database and the latest scientific research, it provides instant, personalized answers to your most pressing questions.
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><HelpCircle className="text-primary" aria-hidden="true"/>Ask Anything</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">From broad questions ("How does caffeine affect sleep?") to specific queries ("Is cold brew stronger than espresso?"), our assistant is ready to provide clear, concise answers.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Lightbulb className="text-primary" aria-hidden="true"/>Get Instant Insights</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">No more searching through articles. Get immediate, actionable advice tailored to you. The assistant can access all the knowledge from our site's calculators and articles.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Zap className="text-primary" aria-hidden="true"/>Optimize Your Habits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Use the assistant to fine-tune your caffeine consumption for better energy, focus, and sleep. Ask for personalized recommendations and strategies.</p>
                        </CardContent>
                    </Card>
                </div>
                <h3 className="text-2xl font-semibold">Example Questions You Can Ask:</h3>
                 <ul>
                    <li>"How much caffeine is in a 12 oz can of Monster?"</li>
                    <li>"I'm a slow metabolizer. When should I have my last coffee if I go to bed at 11 PM?"</li>
                    <li>"What are the symptoms of caffeine withdrawal?"</li>
                    <li>"Compare the caffeine in a Starbucks Latte vs. a Dunkin' Latte."</li>
                    <li>"What's a good caffeine alternative for afternoon energy?"</li>
                </ul>
                <p>
                    The Caffeine Assistant is more than just a search engine; it's a conversational partner designed to help you build a healthier, more intentional relationship with caffeine. Start a conversation today and take the first step towards mastering your energy.
                </p>
            </section>
        </div>

      </div>
    </>
  );
}
