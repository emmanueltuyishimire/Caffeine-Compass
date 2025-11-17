
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
    href: '/data',
    label: 'Data',
    icon: Database
  },
  {
    href: '/articles',
    label: 'Articles',
    icon: BookOpen
  },
];
