
'use client';

import dynamic from 'next/dynamic';

const CaffeineOverdoseRiskCalculator = dynamic(() => import('@/components/features/CaffeineOverdoseRiskCalculator'), {
    ssr: false,
    loading: () => <div className="max-w-2xl mx-auto h-96 bg-muted rounded-lg animate-pulse" />,
});

export default function CaffeineOverdoseRiskCalculatorLoader() {
    return <CaffeineOverdoseRiskCalculator />;
}
