
'use client';

import dynamic from 'next/dynamic';

const HalfLifeEstimator = dynamic(() => import('@/components/features/HalfLifeEstimator'), {
    ssr: false,
    loading: () => <div className="max-w-4xl mx-auto h-[480px] bg-muted rounded-lg animate-pulse" />,
});

export default function HalfLifeEstimatorLoader() {
    return <HalfLifeEstimator />;
}
