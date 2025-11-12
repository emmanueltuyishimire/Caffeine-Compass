import type { Drink } from './types';
import { Coffee, CupSoda, Leaf, Zap } from 'lucide-react';

export const drinks: Drink[] = [
  {
    id: 'd1',
    name: 'Brewed Coffee',
    category: 'Coffee',
    caffeine: 95,
    size: 240,
    icon: Coffee,
  },
  {
    id: 'd2',
    name: 'Espresso',
    category: 'Coffee',
    caffeine: 64,
    size: 30,
    icon: Coffee,
  },
  {
    id: 'd3',
    name: 'Latte',
    category: 'Coffee',
    caffeine: 64,
    size: 240,
    icon: Coffee,
  },
  {
    id: 'd4',
    name: 'Black Tea',
    category: 'Tea',
    caffeine: 47,
    size: 240,
    icon: Leaf,
  },
  {
    id: 'd5',
    name: 'Green Tea',
    category: 'Tea',
    caffeine: 28,
    size: 240,
    icon: Leaf,
  },
  {
    id: 'd6',
    name: 'Cola',
    category: 'Soda',
    caffeine: 34,
    size: 355,
    icon: CupSoda,
  },
  {
    id: 'd7',
    name: 'Energy Drink',
    category: 'Energy Drink',
    caffeine: 80,
    size: 250,
    icon: Zap,
  },
  {
    id: 'd8',
    name: 'Energy Shot',
    category: 'Energy Drink',
    caffeine: 200,
    size: 60,
    icon: Zap,
  },
];
