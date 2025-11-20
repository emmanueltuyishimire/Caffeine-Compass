
import type { Drink } from './types';
import { Coffee, CupSoda, Leaf, Zap, Pill, Beaker } from 'lucide-react';
import { sugars } from './sugars';

const FL_OZ_TO_ML = 29.5735;

const baseDrinks: Omit<Drink, 'id' | 'icon' | 'sugar' | 'calories'>[] = [
  // Coffee (Generic)
  { name: 'Brewed Coffee', category: 'Coffee', caffeine: 95, size: 240 },
  { name: 'Espresso', category: 'Coffee', caffeine: 64, size: 30 },
  { name: 'Latte / Cappuccino', category: 'Coffee', caffeine: 64, size: 240 },
  { name: 'Decaf Coffee', category: 'Coffee', caffeine: 7, size: 240 },
  { name: 'Cold Brew', category: 'Coffee', caffeine: 200, size: 355 },
  { name: 'Instant Coffee', category: 'Coffee', caffeine: 62, size: 240 },
  { name: 'Iced Coffee', category: 'Coffee', caffeine: 165, size: 355 },
  { name: 'Americano', category: 'Coffee', caffeine: 154, size: 355 },
  { name: 'Mocha', category: 'Coffee', caffeine: 80, size: 355 },
  { name: 'Macchiato', category: 'Coffee', caffeine: 64, size: 60 },
  { name: 'Flat White', category: 'Coffee', caffeine: 130, size: 180 },
  { name: 'Nitro Cold Brew', category: 'Coffee', caffeine: 280, size: 355 },

  // Tea
  { name: 'Black Tea', category: 'Tea', caffeine: 47, size: 240 },
  { name: 'Green Tea', category: 'Tea', caffeine: 28, size: 240 },
  { name: 'White Tea', category: 'Tea', caffeine: 15, size: 240 },
  { name: 'Oolong Tea', category: 'Tea', caffeine: 37, size: 240 },
  { name: 'Matcha Tea', category: 'Tea', caffeine: 70, size: 240 },
  { name: 'Iced Tea (Black)', category: 'Tea', caffeine: 25, size: 355 },
  { name: 'Chai Tea Latte', category: 'Tea', caffeine: 95, size: 355 },
  { name: 'Herbal Tea', category: 'Tea', caffeine: 0, size: 240 },

  // Soda
  { name: 'Cola (Generic)', category: 'Soda', caffeine: 34, size: 355 },
  { name: 'Coca-Cola Classic', category: 'Soda', caffeine: 34, size: 355 },
  { name: 'Diet Coke', category: 'Soda', caffeine: 46, size: 355 },
  { name: 'Coke Zero', category: 'Soda', caffeine: 34, size: 355 },
  { name: 'Pepsi', category: 'Soda', caffeine: 38, size: 355 },
  { name: 'Diet Pepsi', category: 'Soda', caffeine: 36, size: 355 },
  { name: 'Dr Pepper', category: 'Soda', caffeine: 41, size: 355 },
  { name: 'Diet Dr Pepper', category: 'Soda', caffeine: 41, size: 355 },
  { name: 'Mountain Dew', category: 'Soda', caffeine: 54, size: 355 },
  { name: 'Diet Mountain Dew', category: 'Soda', caffeine: 54, size: 355 },
  { name: 'Sprite', category: 'Soda', caffeine: 0, size: 355 },
  { name: '7 Up', category: 'Soda', caffeine: 0, size: 355 },
  { name: 'Sunkist Orange', category: 'Soda', caffeine: 41, size: 355 },
  { name: 'A&W Cream Soda', category: 'Soda', caffeine: 29, size: 355 },
  { name: 'Barq\'s Root Beer', category: 'Soda', caffeine: 22, size: 355 },

  // Energy Drinks
  { name: '5-hour Energy', category: 'Energy Drink', caffeine: 200, size: 57 },
  { name: 'Alani Nu', category: 'Energy Drink', caffeine: 200, size: 355 },
  { name: 'AMP Energy (UK)', category: 'Energy Drink', caffeine: 155, size: 500 },
  { name: 'Bacchus-F', category: 'Energy Drink', caffeine: 30, size: 100 },
  { name: 'Bang Energy', category: 'Energy Drink', caffeine: 300, size: 473 },
  { name: 'Bawls Guarana', category: 'Energy Drink', caffeine: 56, size: 250 },
  { name: 'Beaver Buzz', category: 'Energy Drink', caffeine: 110, size: 245 },
  { name: 'Bloom Sparkling Energy', category: 'Energy Drink', caffeine: 180, size: 355 },
  { name: 'Bomb Energy Drink', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Bucked Up', category: 'Energy Drink', caffeine: 300, size: 473 },
  { name: 'Burn', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'C4 Energy', category: 'Energy Drink', caffeine: 200, size: 473 },
  { name: 'Celsius', category: 'Energy Drink', caffeine: 200, size: 355 },
  { name: 'Club-Mate', category: 'Energy Drink', caffeine: 100, size: 500 },
  { name: 'Coca-Cola Blāk', category: 'Coffee', caffeine: 69, size: 237 },
  { name: 'Cocaine Energy Supplement', category: 'Energy Drink', caffeine: 280, size: 355 },
  { name: 'Crunk Energy Drink', category: 'Energy Drink', caffeine: 100, size: 237 },
  { name: 'Emerge Stimulation Drink', category: 'Energy Drink', caffeine: 75, size: 250 },
  { name: 'Enviga', category: 'Energy Drink', caffeine: 100, size: 355 },
  { name: 'Full Throttle', category: 'Energy Drink', caffeine: 160, size: 473 },
  { name: 'G Fuel', category: 'Energy Drink', caffeine: 300, size: 473 },
  { name: 'Ghost Energy', category: 'Energy Drink', caffeine: 200, size: 473 },
  { name: 'Glacéau VitaminEnergy', category: 'Energy Drink', caffeine: 150, size: 473 },
  { name: 'Gorilla Energy', category: 'Energy Drink', caffeine: 144, size: 450 },
  { name: 'Hell Energy', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Hype Energy', category: 'Energy Drink', caffeine: 160, size: 500 },
  { name: 'Irn-Bru 32', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Jolt Cola', category: 'Soda', caffeine: 140, size: 695 },
  { name: 'Juvee', category: 'Energy Drink', caffeine: 128, size: 355 },
  { name: 'Kore', category: 'Energy Drink', caffeine: 100, size: 250 },
  { name: 'Mountain Dew AMP', category: 'Energy Drink', caffeine: 142, size: 473 },
  { name: 'Kickstart', category: 'Energy Drink', caffeine: 90, size: 473 },
  { name: 'Lift Plus', category: 'Energy Drink', caffeine: 80, size: 500 },
  { name: 'Lipovitan', category: 'Energy Drink', caffeine: 50, size: 100 },
  { name: 'Liquid X', category: 'Energy Drink', caffeine: 120, size: 355 },
  { name: 'Lucozade Sport with Caffeine Boost', category: 'Energy Drink', caffeine: 160, size: 1000 },
  { name: 'Lucky Energy', category: 'Energy Drink', caffeine: 200, size: 473 },
  { name: 'Monster', category: 'Energy Drink', caffeine: 160, size: 473 },
  { name: 'Mother', category: 'Energy Drink', caffeine: 160, size: 500 },
  { name: 'Mountain Dew Energy', category: 'Energy Drink', caffeine: 180, size: 473 },
  { name: 'Mountain Dew MDX', category: 'Soda', caffeine: 94, size: 473 },
  { name: 'NOCCO', category: 'Energy Drink', caffeine: 180, size: 330 },
  { name: 'NOS', category: 'Energy Drink', caffeine: 160, size: 473 },
  { name: 'NRG', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Ntense', category: 'Energy Drink', caffeine: 160, size: 480 },
  { name: 'Paper Boat (Sparkling Coffee)', category: 'Coffee', caffeine: 150, size: 600 },
  { name: 'Power Horse', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Prime', category: 'Energy Drink', caffeine: 200, size: 355 },
  { name: 'Pussy', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Red Bull', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Red Rooster', category: 'Energy Drink', caffeine: 75, size: 250 },
  { name: 'Reign', category: 'Energy Drink', caffeine: 300, size: 473 },
  { name: 'Relentless', category: 'Energy Drink', caffeine: 160, size: 500 },
  { name: 'RELOAD', category: 'Energy Drink', caffeine: 130, size: 330 },
  { name: 'Rich Energy', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Riot Energy', category: 'Energy Drink', caffeine: 160, size: 473 },
  { name: 'Rip It', category: 'Energy Drink', caffeine: 204, size: 473 },
  { name: 'Rockstar', category: 'Energy Drink', caffeine: 160, size: 480 },
  { name: 'Rowdy Energy', category: 'Energy Drink', caffeine: 160, size: 480 },
  { name: 'Semtex', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'Shark Energy', category: 'Energy Drink', caffeine: 80, size: 250 },
  { name: 'SoBe Adrenaline Rush', category: 'Energy Drink', caffeine: 78, size: 250 },
  { name: 'Sparks (6% ABV)', category: 'Energy Drink', caffeine: 87, size: 480 },
  { name: 'Sting Energy Drink', category: 'Energy Drink', caffeine: 82.5, size: 330 },
  { name: 'Street King', category: 'Energy Drink', caffeine: 300, size: 250 },
  { name: 'Tab Energy', category: 'Energy Drink', caffeine: 144, size: 473 },
  { name: 'Tru Energy Seltzer', category: 'Energy Drink', caffeine: 100, size: 355 },
  { name: 'Urge Intense', category: 'Energy Drink', caffeine: 75, size: 500 },
  { name: 'Uptime', category: 'Energy Drink', caffeine: 142, size: 355 },
  { name: 'V (Australia/UK/NZ/NL)', category: 'Energy Drink', caffeine: 78, size: 250 },
  { name: 'V8 +Energy', category: 'Energy Drink', caffeine: 80, size: 237 },
  { name: 'Vault', category: 'Soda', caffeine: 117.5, size: 591 },
  { name: 'Venom Energy', category: 'Energy Drink', caffeine: 160, size: 500 },
  { name: 'XS Energy Drink', category: 'Energy Drink', caffeine: 83, size: 250 },
  { name: 'Xyience', category: 'Energy Drink', caffeine: 160, size: 473 },
  { name: 'Verve', category: 'Energy Drink', caffeine: 80, size: 245 },
  { name: 'ZOA Energy', category: 'Energy Drink', caffeine: 160, size: 473 },

  // Starbucks
  { name: 'Starbucks Brewed Coffee (Grande)', category: 'Coffee', caffeine: 310, size: 473 },
  { name: 'Starbucks Blonde Roast (Grande)', category: 'Coffee', caffeine: 360, size: 473 },
  { name: 'Starbucks Pike Place (Grande)', category: 'Coffee', caffeine: 310, size: 473 },
  { name: 'Starbucks Decaf Pike Place (Grande)', category: 'Coffee', caffeine: 25, size: 473 },
  { name: 'Starbucks Espresso Shot', category: 'Coffee', caffeine: 75, size: 22 },
  { name: 'Starbucks Caffe Latte (Grande)', category: 'Coffee', caffeine: 150, size: 473 },
  { name: 'Starbucks Cappuccino (Grande)', category: 'Coffee', caffeine: 150, size: 473 },
  { name: 'Starbucks Caffe Americano (Grande)', category: 'Coffee', caffeine: 225, size: 473 },
  { name: 'Starbucks Flat White (Grande)', category: 'Coffee', caffeine: 195, size: 473 },
  { name: 'Starbucks Caffe Mocha (Grande)', category: 'Coffee', caffeine: 175, size: 473 },
  { name: 'Starbucks Iced Coffee (Grande)', category: 'Coffee', caffeine: 165, size: 473 },
  { name: 'Starbucks Cold Brew (Grande)', category: 'Coffee', caffeine: 205, size: 473 },
  { name: 'Starbucks Nitro Cold Brew (Grande)', category: 'Coffee', caffeine: 280, size: 473 },
  { name: 'Starbucks Doubleshot on Ice', category: 'Coffee', caffeine: 150, size: 236 },
  { name: 'Starbucks Frappuccino Coffee (Grande)', category: 'Coffee', caffeine: 95, size: 473 },
  { name: 'Starbucks Iced Shaken Espresso (Grande)', category: 'Coffee', caffeine: 225, size: 473 },
  { name: 'Starbucks Chai Tea Latte (Grande)', category: 'Tea', caffeine: 95, size: 473 },
  { name: 'Starbucks Matcha Tea Latte (Grande)', category: 'Tea', caffeine: 80, size: 473 },
  { name: 'Starbucks Black Iced Tea (Grande)', category: 'Tea', caffeine: 25, size: 473 },
  { name: 'Starbucks Green Iced Tea (Grande)', category: 'Tea', caffeine: 25, size: 473 },
  { name: 'Starbucks Refresher (Grande)', category: 'Energy Drink', caffeine: 45, size: 473 },

  // Dunkin'
  { name: 'Dunkin\' Brewed Coffee (Medium)', category: 'Coffee', caffeine: 210, size: 414 },
  { name: 'Dunkin\' Decaf Coffee (Medium)', category: 'Coffee', caffeine: 10, size: 414 },
  { name: 'Dunkin\' Americano (Medium)', category: 'Coffee', caffeine: 237, size: 414 },
  { name: 'Dunkin\' Latte (Medium)', category: 'Coffee', caffeine: 166, size: 414 },
  { name: 'Dunkin\' Cappuccino (Medium)', category: 'Coffee', caffeine: 166, size: 414 },
  { name: 'Dunkin\' Espresso Shot', category: 'Coffee', caffeine: 98, size: 30 },
  { name: 'Dunkin\' Iced Coffee (Medium)', category: 'Coffee', caffeine: 297, size: 710 },
  { name: 'Dunkin\' Cold Brew (Medium)', category: 'Coffee', caffeine: 260, size: 710 },
  { name: 'Dunkin\' Frozen Coffee (Medium)', category: 'Coffee', caffeine: 295, size: 710 },
  { name: 'Dunkin\' Macchiato (Medium)', category: 'Coffee', caffeine: 284, size: 414 },
  { name: 'Dunkin\' Chai Latte (Medium)', category: 'Tea', caffeine: 108, size: 414 },

  // McDonald's
  { name: 'McDonald\'s McCafé Coffee (Medium)', category: 'Coffee', caffeine: 145, size: 473 },
  { name: 'McDonald\'s Iced Coffee (Medium)', category: 'Coffee', caffeine: 133, size: 473 },
  { name: 'McDonald\'s Latte (Medium)', category: 'Coffee', caffeine: 142, size: 473 },
  { name: 'McDonald\'s Americano (Medium)', category: 'Coffee', caffeine: 114, size: 473 },
  { name: 'McDonald\'s Espresso Shot', category: 'Coffee', caffeine: 71, size: 30 },
  { name: 'McDonald\'s Frappé (Medium)', category: 'Coffee', caffeine: 130, size: 473 },
  { name: 'McDonald\'s Sweet Tea (Medium)', category: 'Tea', caffeine: 100, size: 621 },

  // Other
  { name: 'Dark Chocolate (1 oz / 28g)', category: 'Other', caffeine: 24, size: 28 },
  { name: 'Milk Chocolate (1 oz / 28g)', category: 'Other', caffeine: 6, size: 28 },
  { name: 'Hot Chocolate (240ml)', category: 'Other', caffeine: 5, size: 240 },
  { name: 'Caffeine Pill', category: 'Other', caffeine: 200, size: 1 },
  { name: 'Pre-Workout Supplement (1 scoop)', category: 'Other', caffeine: 150, size: 10 },
  { name: 'NoDoz Max Strength', category: 'Other', caffeine: 200, size: 1 },
  { name: 'Excedrin Migraine (2 tablets)', category: 'Other', caffeine: 130, size: 2 },
  { name: 'Guayaki Yerba Mate (458ml can)', category: 'Tea', caffeine: 150, size: 458 },
  { name: 'Kombucha (240ml)', category: 'Tea', caffeine: 15, size: 240 },
  { name: 'Caffeinated Water (e.g., Water Joe)', category: 'Other', caffeine: 70, size: 500 },
  { name: 'Clif Shot Energy Gel (with caffeine)', category: 'Other', caffeine: 50, size: 34 },
];

const getIcon = (category: 'Coffee' | 'Tea' | 'Soda' | 'Energy Drink' | 'Other') => {
  switch (category) {
    case 'Coffee': return Coffee;
    case 'Tea': return Leaf;
    case 'Soda': return CupSoda;
    case 'Energy Drink': return Zap;
    default: return Beaker;
  }
};

const sugarsByName = sugars.reduce((acc, sugar) => {
  acc[sugar.name] = sugar;
  return acc;
}, {} as Record<string, Omit<SugarInfo, 'id' | 'size_fl_oz' | 'calories' | 'sugar_g'> & {calories?: number; sugar_g?: number;}>);

export const drinks: Drink[] = baseDrinks.map((drink, index) => {
    const sugarInfo = sugarsByName[drink.name];
    return {
        ...drink,
        id: `d${index}`,
        icon: getIcon(drink.category),
        sugar: sugarInfo?.sugar_g,
        calories: sugarInfo?.calories,
    };
});
