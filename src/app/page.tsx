import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IntakeCalculator from '@/components/features/IntakeCalculator';
import HalfLifeEstimator from '@/components/features/HalfLifeEstimator';
import SleepImpactPredictor from '@/components/features/SleepImpactPredictor';
import CaffeineAssistant from '@/components/features/CaffeineAssistant';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BarChart2, BedDouble, Bot, Coffee } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative text-center rounded-lg overflow-hidden mb-12 p-8 min-h-[300px] flex flex-col justify-center items-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Welcome to Caffeine Compass
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering you to understand, calculate, and optimize your caffeine habits for better focus, health, and sleep.
          </p>
        </div>
      </section>

      <Tabs defaultValue="intake" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto md:h-12">
          <TabsTrigger value="intake" className="py-2.5">
            <Coffee className="mr-2" />
            Intake
          </TabsTrigger>
          <TabsTrigger value="half-life" className="py-2.5">
            <BarChart2 className="mr-2" />
            Half-Life
          </TabsTrigger>
          <TabsTrigger value="sleep-impact" className="py-2.5">
            <BedDouble className="mr-2" />
            Sleep Impact
          </TabsTrigger>
          <TabsTrigger value="assistant" className="py-2.5">
            <Bot className="mr-2" />
            AI Assistant
          </TabsTrigger>
        </TabsList>
        <TabsContent value="intake" className="pt-6">
          <IntakeCalculator />
        </TabsContent>
        <TabsContent value="half-life" className="pt-6">
          <HalfLifeEstimator />
        </TabsContent>
        <TabsContent value="sleep-impact" className="pt-6">
          <SleepImpactPredictor />
        </TabsContent>
        <TabsContent value="assistant" className="pt-6">
          <CaffeineAssistant />
        </TabsContent>
      </Tabs>
    </div>
  );
}
