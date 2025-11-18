import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

// This file can be used for custom SVG icons.
// You can add other custom SVG components here as needed.
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
    <path d="M14.5 9.5L12 2l-2.5 7.5" />
    <path d="M9.5 14.5L2 12l7.5-2.5" />
    <path d="M14.5 14.5L22 12l-7.5 2.5" />
    <path d="M12 22l2.5-7.5-5 0L12 22z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
