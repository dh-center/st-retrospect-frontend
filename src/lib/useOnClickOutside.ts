import { MutableRefObject, useEffect } from 'react';

/**
 * Hook handles outside click and executes handler function
 *
 * @param ref - element ref
 * @param handler - executable function onClickOutside
 *
 * @example
 * const ref = useRef(document.createElement('div'));
 * useOnClickOutside(ref, () => doSomething());
 */
export default function useOnClickOutside<T extends HTMLElement>(ref: MutableRefObject<T>, handler: (event: Event) => void): void {
  useEffect(
    () => {
      const listener = (event: Event): void => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || (event.target instanceof Node && ref.current.contains(event.target))) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
}
