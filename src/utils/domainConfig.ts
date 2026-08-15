import { useState, useEffect } from 'react';

/**
 * Helper to check if current domain is hanoonhaani.netlify.app
 * or if query parameter includes hanoonhaani for testing.
 */
export function isHanoonHaaniDomain(): boolean {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname.toLowerCase();
  const search = window.location.search.toLowerCase();

  return hostname.includes('hanoonhaani') || search.includes('hanoonhaani');
}

/**
 * React hook to reactively track domain matching
 */
export function useIsHanoonHaaniDomain(): boolean {
  const [isMatch, setIsMatch] = useState<boolean>(() => isHanoonHaaniDomain());

  useEffect(() => {
    setIsMatch(isHanoonHaaniDomain());
  }, []);

  return isMatch;
}
