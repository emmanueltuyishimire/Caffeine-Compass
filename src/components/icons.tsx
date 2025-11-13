import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

// This file can be used for custom SVG icons.
// For now, the Logo has been replaced with an Image component in the Header.
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
    {/* SVG content for a fallback or other icon could go here */}
  </svg>
);
