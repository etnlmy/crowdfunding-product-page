import { useEffect, useState } from "react";

const useDelayedUnmount = (isMounted, delay) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeout;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    }
    else if (!isMounted && shouldRender) {
      timeout = setTimeout(() => setShouldRender(false), delay);
    }
    return () => clearTimeout(timeout);
  }, [isMounted, delay, shouldRender]);

  return shouldRender;
}

export default useDelayedUnmount;