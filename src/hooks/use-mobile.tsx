
'use client';

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    function MQL_CHANGE_EVENT() {
      setIsMobile(mql.matches);
    }
    mql.addEventListener("change", MQL_CHANGE_EVENT);

    // Set initial value after mount
    setIsMobile(mql.matches);

    return () => {
      mql.removeEventListener("change", MQL_CHANGE_EVENT);
    };
  }, []);

  return isMobile
}
