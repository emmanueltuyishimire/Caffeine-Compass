
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

const categoryIcons = {
  Coffee: <Coffee className="h-5 w-5" aria-hidden="true" />,
  Tea: <Leaf className="h-5 w-5" aria-hidden="true" />,
  Soda: <CupSoda className="h-5 w-5" aria-hidden="true" />,
  'Energy Drink': <Zap className="h-5 w-5" aria-hidden="true" />,
  'Other': <PlusCircle className="h-5 w-5" aria-hidden="true" />,
};

type Category = 'Coffee' | 'Tea' | 'Soda' | 'Energy Drink' | 'Other';
type SortOption = 'caffeine_desc' | 'caffeine_asc' | 'name_asc' | 'name_desc';

const getIconForCategory = (category: Category) => {
    switch (category) {
        case 'Coffee': return Coffee;
        case 'Tea': return Leaf;
        case 'Soda': return CupSoda;
        case 'Energy Drink': return Zap;
        default: return PlusCircle;
    }
};

export default function DrinksDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>('caffeine_desc');
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
      case 'caffeine_asc':
        filtered.sort((a, b) => a.caffeine - b.caffeine);
        break;
      case 'name_asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'caffeine_desc':
      default:
        filtered.sort((a, b) => b.caffeine - a.caffeine);
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortOption, allDrinks]);

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Search the Drinks Database</CardTitle>
        <CardDescription>
          Find the caffeine content of over 1,000 beverages, or add your own.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor='search-drink'>Search for a drink</Label>
                <Input
                    id='search-drink'
                    placeholder="e.g., 'Starbucks Latte'"
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
                    <SelectItem value="caffeine_desc">Caffeine: High to Low</SelectItem>
                    <SelectItem value="caffeine_asc">Caffeine: Low to High</SelectItem>
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
                 <ToggleGroupItem value="Other" aria-label="Filter by Other">
                <PlusCircle className="h-4 w-4 mr-2" aria-hidden="true" /> Other
                </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <Collapsible open={isCustomFormOpen} onOpenChange={setIsCustomFormOpen} className="mb-4">
            <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full">
                    <ChevronsUpDown className="h-4 w-4 mr-2"/>
                    {isCustomFormOpen ? 'Close' : 'Add Custom Drink'}
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 p-4 border rounded-md">
                <div className="space-y-4">
                     <h3 className="font-semibold">Add a New Drink</h3>
                     <p className="text-sm text-muted-foreground">Your custom drinks will be saved in your browser for future use.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                             <Label htmlFor="custom-name">Drink Name</Label>
                             <Input id="custom-name" value={customName} onChange={e => setCustomName(e.target.value)} placeholder="e.g., Local Cafe Latte" />
                        </div>
                        <div className="space-y-1">
                             <Label htmlFor="custom-category">Category</Label>
                             <Select value={customCategory} onValueChange={(value) => setCustomCategory(value as Category)}>
                                <SelectTrigger id="custom-category"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Coffee">Coffee</SelectItem>
                                    <SelectItem value="Tea">Tea</SelectItem>
                                    <SelectItem value="Soda">Soda</SelectItem>
                                    <SelectItem value="Energy Drink">Energy Drink</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                             </Select>
                        </div>
                         <div className="space-y-1">
                             <Label htmlFor="custom-caffeine">Caffeine (mg)</Label>
                             <Input id="custom-caffeine" type="number" value={customCaffeine} onChange={e => setCustomCaffeine(e.target.value)} placeholder="e.g., 150" />
                        </div>
                         <div className="space-y-1">
                             <Label htmlFor="custom-size">Serving Size (ml)</Label>
                             <Input id="custom-size" type="number" value={customSize} onChange={e => setCustomSize(e.target.value)} placeholder="e.g., 473" />
                        </div>
                     </div>
                     <Button onClick={handleAddCustomDrink} disabled={!customName || !customCaffeine || !customSize}>Add Drink</Button>
                </div>
            </CollapsibleContent>
        </Collapsible>

        <ScrollArea className="h-[400px] border rounded-md mt-4">
          <div className="p-4 space-y-2" role="list">
            {filteredDrinks.length > 0 ? (
              filteredDrinks.map((drink) => {
                const Icon = drink.icon || getIconForCategory(drink.category as Category);
                return (
                    <div
                    key={drink.id}
                    role="listitem"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted group"
                    >
                    <div className="flex items-center gap-4">
                        <div className="text-muted-foreground" aria-hidden="true">
                            <Icon className="h-5 w-5" />
                        </div>
                        <div>
                        <p className="font-semibold">{drink.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {drink.size}ml
                        </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-primary text-lg">{drink.caffeine} mg</p>
                        {drink.id.startsWith('custom-') && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100" onClick={() => handleRemoveCustomDrink(drink.id)} aria-label={`Delete ${drink.name}`}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                        )}
                    </div>
                    </div>
                )
              })
            ) : (
              <div className="text-center text-muted-foreground py-10" role="alert">
                <p>No drinks found.</p>
                <p className="text-sm">Try broadening your search or adding a custom drink.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
