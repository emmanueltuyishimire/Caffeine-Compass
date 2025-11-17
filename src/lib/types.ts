import type { FC, SVGProps } from 'react';

export type Icon = FC<SVGProps<SVGSVGElement>>;

export interface Drink {
  id: string;
  name: string;
  category: 'Coffee' | 'Tea' | 'Soda' | 'Energy Drink' | 'Other';
  caffeine: number; // in mg
  size: number; // in ml
  sugar?: number; // in g
  calories?: number;
  icon: Icon;
}

export interface ConsumedDrink extends Drink {
  quantity: number;
}

export interface SugarInfo {
    id: string;
    name: string;
    size_fl_oz: number;
    calories: number;
    sugar_g: number;
}
