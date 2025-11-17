
'use client';

import dynamic from 'next/dynamic';

const IntakeCalculator = dynamic(() => import('@/components/features/IntakeCalculator'), {
    ssr: false,
    loading: () => <div className="max-w-4xl mx-auto h-[500px] bg-muted rounded-lg animate-pulse" />,
});

export default function IntakeCalculatorLoader() {
    return <IntakeCalculator />;
}
