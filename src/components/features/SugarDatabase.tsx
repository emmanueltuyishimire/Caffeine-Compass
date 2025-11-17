
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { drinks as staticDrinks } from '@/lib/drinks';
import type { Drink } from '@/lib/types';
import { Coffee, Leaf, CupSoda, Zap, PlusCircle, Trash2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const categoryIcons = {
  Coffee: <Coffee className="h-5 w-5" aria-hidden="true" />,
  Tea: <Leaf className="h-5 w-5" aria-hidden="true" />,
  Soda: <CupSoda className="h-5 w-5" aria-hidden="true" />,
  'Energy Drink': <Zap className="h-5 w-5" aria-hidden="true" />,
  'Other': <PlusCircle className="h-5 w-5" aria-hidden="true" />,
};

type Category = 'Coffee' | 'Tea' | 'Soda' | 'Energy Drink' | 'Other';
type SortOption = 'sugar_desc' | 'sugar_asc' | 'name_asc' | 'name_desc' | 'calories_desc' | 'calories_asc';

const getIconForCategory = (category: Category) => {
    switch (category) {
        case 'Coffee': return Coffee;
        case 'Tea': return Leaf;
        case 'Soda': return CupSoda;
        case 'Energy Drink': return Zap;
        default: return PlusCircle;
    }
};

const getSugarLevel = (sugarGrams?: number) => {
    if (sugarGrams === undefined) return { label: 'N/A', color: 'bg-gray-400' };
    if (sugarGrams === 0) return { label: 'Zero', color: 'bg-green-500' };
    if (sugarGrams <= 15) return { label: 'Low', color: 'bg-yellow-500' };
    if (sugarGrams <= 35) return { label: 'Moderate', color: 'bg-orange-500' };
    if (sugarGrams <= 50) return { label: 'High', color: 'bg-red-500' };
    return { label: 'Very High', color: 'bg-purple-700' };
};

export default function SugarDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('sugar_desc');
  const [allDrinks, setAllDrinks] = useState<Drink[]>([]);
  const [isCustomFormOpen, setIsCustomFormOpen] = useState(false);

  // Form state for custom drink
  const [customName, setCustomName] = useState('');
  const [customCategory, setCustomCategory] = useState<Category>('Coffee');
  const [customCaffeine, setCustomCaffeine] = useState('');
  const [customSize, setCustomSize] = useState('');

  useEffect(() => {
    // Load custom drinks from local storage on initial render
    try {
        const customDrinksJSON = localStorage.getItem('customDrinks');
        const loadedCustomDrinks = customDrinksJSON ? JSON.parse(customDrinksJSON) : [];
        const combinedDrinks = [...staticDrinks, ...loadedCustomDrinks.map((d: any) => ({...d, icon: getIconForCategory(d.category)}))];
        setAllDrinks(combinedDrinks);
    } catch (error) {
        console.error("Failed to load custom drinks from localStorage", error);
        setAllDrinks(staticDrinks);
    }
  }, []);

  const handleAddCustomDrink = () => {
    const caffeine = parseInt(customCaffeine, 10);
    const size = parseInt(customSize, 10);
    if (customName && !isNaN(caffeine) && caffeine >= 0 && !isNaN(size) && size >= 0) {
      const newDrink: Drink = {
        id: `custom-${Date.now()}`,
        name: customName,
        category: customCategory,
        caffeine: caffeine,
        size: size,
        icon: getIconForCategory(customCategory),
      };

      setAllDrinks(prevDrinks => {
          const updatedDrinks = [...prevDrinks, newDrink];
          // Save only custom drinks to local storage
          const customDrinksToSave = updatedDrinks.filter(d => d.id.startsWith('custom-'));
          localStorage.setItem('customDrinks', JSON.stringify(customDrinksToSave.map(({ icon, ...rest }) => rest))); // Don't save icon component
          return updatedDrinks;
      });
      
      // Reset form
      setCustomName('');
      setCustomCategory('Coffee');
      setCustomCaffeine('');
      setCustomSize('');
      setIsCustomFormOpen(false);
    }
  };

  const handleRemoveCustomDrink = (drinkId: string) => {
    setAllDrinks(prevDrinks => {
        const updatedDrinks = prevDrinks.filter(d => d.id !== drinkId);
        const customDrinksToSave = updatedDrinks.filter(d => d.id.startsWith('custom-'));
        localStorage.setItem('customDrinks', JSON.stringify(customDrinksToSave.map(({ icon, ...rest }) => rest)));
        return updatedDrinks;
    });
  };

  const filteredDrinks = useMemo(() => {
    let filtered = allDrinks
      .filter((drink) =>
        drink.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((drink) =>
        selectedCategory ? drink.category === selectedCategory : true
      );

    switch (sortOption) {
      case 'sugar_asc':
        filtered.sort((a, b) => (a.sugar ?? 0) - (b.sugar ?? 0));
        break;
      case 'name_asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'calories_desc':
        filtered.sort((a, b) => (b.calories ?? 0) - (a.calories ?? 0));
        break;
      case 'calories_asc':
        filtered.sort((a, b) => (a.calories ?? 0) - (b.calories ?? 0));
        break;
      case 'sugar_desc':
      default:
        filtered.sort((a, b) => (b.sugar ?? 0) - (a.sugar ?? 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortOption, allDrinks]);

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Sugar & Calorie Database</CardTitle>
        <CardDescription>
          Find the sugar and calorie content of hundreds of popular beverages.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor='search-drink'>Search for a drink</Label>
                <Input
                    id='search-drink'
                    placeholder="e.g., 'Coca-Cola'"
                    className="flex-grow mt-1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor='sort-by'>Sort by</Label>
                 <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                  <SelectTrigger id='sort-by' className="mt-1">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sugar_desc">Sugar: High to Low</SelectItem>
                    <SelectItem value="sugar_asc">Sugar: Low to High</SelectItem>
                     <SelectItem value="calories_desc">Calories: High to Low</SelectItem>
                    <SelectItem value="calories_asc">Calories: Low to High</SelectItem>
                    <SelectItem value="name_asc">Name: A-Z</SelectItem>
                    <SelectItem value="name_desc">Name: Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
          </div>
          <div>
            <Label id="filter-category-label">Filter by Category</Label>
             <ToggleGroup
                type="single"
                value={selectedCategory || ''}
                onValueChange={(value) => setSelectedCategory(value || null)}
                className="justify-start mt-1 flex-wrap"
                aria-labelledby="filter-category-label"
            >
                <ToggleGroupItem value="Coffee" aria-label="Filter by Coffee">
                <Coffee className="h-4 w-4 mr-2" aria-hidden="true" /> Coffee
                </ToggleGroupItem>
                <ToggleGroupItem value="Tea" aria-label="Filter by Tea">
                <Leaf className="h-4 w-4 mr-2" aria-hidden="true" /> Tea
                </ToggleGroupItem>
                <ToggleGroupItem value="Soda" aria-label="Filter by Soda">
                <CupSoda className="h-4 w-4 mr-2" aria-hidden="true" /> Soda
                </ToggleGroupItem>
                <ToggleGroupItem value="Energy Drink" aria-label="Filter by Energy Drink">
                <Zap className="h-4 w-4 mr-2" aria-hidden="true" /> Energy
                </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <ScrollArea className="h-[400px] border rounded-md mt-4">
          <div className="p-1 sm:p-4" role="list">
            {filteredDrinks.length > 0 ? (
              filteredDrinks.map((drink) => {
                const Icon = drink.icon || categoryIcons[drink.category as keyof typeof categoryIcons];
                const sugarLevel = getSugarLevel(drink.sugar);
                const sugarPerOz = drink.sugar !== undefined && drink.size > 0 ? (drink.sugar / (drink.size / 29.5735)).toFixed(1) : 'N/A';
                return (
                    <div
                        key={drink.id}
                        role="listitem"
                        className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-muted"
                    >
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="text-muted-foreground" aria-hidden="true">
                                <Icon />
                            </div>
                            <div>
                                <p className="font-semibold">{drink.name}</p>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    {drink.size}ml
                                    {drink.sugar !== undefined && drink.size > 0 && (
                                        <>
                                            <span className="mx-1 sm:mx-2">|</span>
                                            <span>{sugarPerOz}g sugar/oz</span>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="text-right flex items-center gap-2 sm:gap-4">
                             <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={cn("w-4 h-4 rounded-full", sugarLevel.color)} aria-label={`Sugar level: ${sugarLevel.label}`}></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Sugar Level: {sugarLevel.label}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <div>
                                <p className="font-bold text-primary text-base sm:text-lg">{drink.sugar}g Sugar</p>
                                <p className="text-xs sm:text-sm text-muted-foreground">{drink.calories} Calories</p>
                            </div>
                        </div>
                    </div>
                )
              })
            ) : (
              <div className="text-center text-muted-foreground py-10" role="alert">
                <p>No drinks found for your criteria.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
