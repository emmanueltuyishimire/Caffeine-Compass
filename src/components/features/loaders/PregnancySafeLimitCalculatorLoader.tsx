
'use client';

import dynamic from 'next/dynamic';

const PregnancySafeLimitCalculator = dynamic(() => import('@/components/features/PregnancySafeLimitCalculator'), {
    ssr: false,
    loading: () => <div className="max-w-4xl mx-auto h-[500px] bg-muted rounded-lg animate-pulse" />,
});

export default function PregnancySafeLimitCalculatorLoader() {
    return <PregnancySafeLimitCalculator />;
}
