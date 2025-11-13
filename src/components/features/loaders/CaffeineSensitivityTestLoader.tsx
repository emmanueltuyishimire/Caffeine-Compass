
'use client';

import dynamic from 'next/dynamic';

const CaffeineSensitivityTest = dynamic(() => import('@/components/features/CaffeineSensitivityTest'), {
    ssr: false,
    loading: () => <div className="max-w-2xl mx-auto h-[480px] bg-muted rounded-lg animate-pulse" />,
});

export default function CaffeineSensitivityTestLoader() {
    return <CaffeineSensitivityTest />;
}
