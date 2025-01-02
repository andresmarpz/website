import { useEffect, useState } from 'react';

export function useIsHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return hydrated;
}
