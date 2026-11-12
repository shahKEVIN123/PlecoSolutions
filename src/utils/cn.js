import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to cleanly merge Tailwind CSS classes
 * with conditional class resolution (via clsx) and collision avoidance (via twMerge).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
