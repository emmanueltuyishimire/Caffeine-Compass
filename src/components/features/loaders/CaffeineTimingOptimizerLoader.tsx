
'use client';

import dynamic from 'next/dynamic';

const CaffeineTimingOptimizer = dynamic(() => import('@/components/features/CaffeineTimingOptimizer'), {
    ssr: false,
    loading: () => <div className="max-w-2xl mx-auto h-96 bg-muted rounded-lg animate-pulse" />,
});

export default function CaffeineTimingOptimizerLoader() {
    return <CaffeineTimingOptimizer />;
}
