import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    className={cn('h-6 w-6', props.className)}
  >
    <path d="M8 10V8h4" />
    <path d="M10 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4" />
    <path d="M14 12h2" />
    <path d="M16 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4" />
    <path d="M12 16v2" />
    <path d="M10 20h-4" />
    <path d="M6 20v-5c0-1.657 1.343-3 3-3h1" />
    <path d="m3 4 1.5 1.5" />
    <path d="M21 4l-1.5 1.5" />
    <path d="m12 2 1.5 1.5" />
    <text x="12" y="14" fill="currentColor" fontSize="4" textAnchor="middle" dominantBaseline="middle" className="font-sans font-bold">mg</text>
  </svg>
);
