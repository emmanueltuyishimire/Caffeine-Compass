
'use client';

import dynamic from 'next/dynamic';

const DrinksDatabase = dynamic(() => import('@/components/features/DrinksDatabase'), {
    ssr: false,
    loading: () => <div className="max-w-4xl mx-auto h-[600px] bg-muted rounded-lg animate-pulse" />,
});

export default function DrinksDatabaseLoader() {
    return <DrinksDatabase />;
}
