import { useState, useEffect } from 'react';

/**
 * Hook with debounce functionality
 * Returns last value after all changes
 *
 * @param value - debounced value
 * @param delay - delay for debounce
 */
export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [ value ]
  );

  return debouncedValue;
}
