import CaffeineAssistant from '@/components/features/CaffeineAssistant';
import { Bot } from 'lucide-react';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Caffeine Assistant — AI-Powered Support for Your Caffeine Questions',
    description: 'Get instant, AI-powered answers to all your questions about caffeine. From drink contents to optimal timing and health effects, our assistant is here to help.',
};

const supportPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Caffeine Assistant Support",
  "description": "Get instant, AI-powered answers to all your questions about caffeine.",
  "url": "https://caffeine-compass.com/ai-assistant",
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
        "name": "AI Assistant",
        "item": "https://caffeine-compass.com/ai-assistant"
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
      </div>
    </>
  );
}
