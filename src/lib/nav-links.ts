
import { Home, Compass, BookOpen, Database, BarChart2, Zap, Coffee } from 'lucide-react';
import type { Drink } from './types';

export const mainNav = [
  {
    href: '/',
    label: 'Home',
    icon: Home
  },
  {
    href: '/calculators',
    label: 'Calculators',
    icon: Compass
  },
  {
    label: 'Data',
    icon: Database,
    links: [
        {
            href: '/calculators/caffeine-drinks-database',
            label: 'Caffeine in Drinks',
            description: 'Search our database of over 1,000 beverages to find their exact caffeine content.',
            icon: Coffee
        },
        {
            href: '/data/sugar-in-drinks',
            label: 'Sugar in Drinks',
            description: 'Explore the sugar and calorie content of hundreds of popular drinks.',
            icon: Zap
        }
    ]
  },
  {
    href: '/articles',
    label: 'Articles',
    icon: BookOpen
  },
];
