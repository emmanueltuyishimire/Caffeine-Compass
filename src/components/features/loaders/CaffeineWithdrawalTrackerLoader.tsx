
'use client';

import dynamic from 'next/dynamic';

const CaffeineWithdrawalTracker = dynamic(() => import('@/components/features/CaffeineWithdrawalTracker'), {
    ssr: false,
    loading: () => <div className="max-w-4xl mx-auto h-[600px] bg-muted rounded-lg animate-pulse" />,
});

export default function CaffeineWithdrawalTrackerLoader() {
    return <CaffeineWithdrawalTracker />;
}
