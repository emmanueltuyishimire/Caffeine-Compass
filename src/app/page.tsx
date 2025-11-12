import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HalfLifeEstimator from '@/components/features/HalfLifeEstimator';
import SleepImpactPredictor from '@/components/features/SleepImpactPredictor';
import CaffeineAssistant from '@/components/features/CaffeineAssistant';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BarChart2, BedDouble, Bot, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div>
      <section className="relative text-center rounded-lg overflow-hidden mb-12 min-h-[400px] flex flex-col justify-center items-center">
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Master Your Caffeine, Master Your Day
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Use our science-backed calculators to understand your intake, optimize your energy, and improve your sleep.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/calculators/intake">
            <Card className="h-full hover:border-primary transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Coffee className="h-8 w-8 text-primary" />
                  <CardTitle>Intake Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Log your drinks to find out your total daily caffeine consumption and see how it stacks up against recommended limits.</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/calculators/half-life">
             <Card className="h-full hover:border-primary transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <CardTitle>Half-Life Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Visualize how caffeine decays in your system over time to better time your intake for peak performance.</p>
              </CardContent>
            </Card>
          </Link>

           <Link href="/calculators/sleep-impact">
             <Card className="h-full hover:border-primary transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BedDouble className="h-8 w-8 text-primary" />
                  <CardTitle>Sleep Impact Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Predict how much caffeine will be in your system at bedtime to protect your sleep quality.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        <div className="mt-20">
             <CaffeineAssistant />
        </div>
      </div>
    </div>
  );
}
