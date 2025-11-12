import CaffeineAssistant from '@/components/features/CaffeineAssistant';
import { Bot } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Bot className="h-10 w-10 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Caffeine Assistant</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions about caffeine? Our AI-powered assistant is here to help. Ask anything from drink contents to optimal timing.
        </p>
      </div>
      <CaffeineAssistant />
    </div>
  );
}
