
'use client';

import dynamic from 'next/dynamic';

const DrinkComparison = dynamic(() => import('@/components/features/DrinkComparison'), {
    ssr: false,
    loading: () => <div className="max-w-4xl mx-auto h-[400px] bg-muted rounded-lg animate-pulse" />,
});

export default function DrinkComparisonLoader() {
    return <DrinkComparison />;
}
