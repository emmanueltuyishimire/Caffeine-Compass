import type { FC, SVGProps } from 'react';

export type Icon = FC<SVGProps<SVGSVGElement>>;

export interface Drink {
  id: string;
  name: string;
  category: 'Coffee' | 'Tea' | 'Soda' | 'Energy Drink' | 'Other';
  caffeine: number; // in mg
  size: number; // in ml
  icon: Icon;
}

export interface ConsumedDrink extends Drink {
  quantity: number;
}
