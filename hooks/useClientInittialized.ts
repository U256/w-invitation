import { useEffect, useState } from "react";

export function useClientInitialized() {
  const [onClient, setOnClient] = useState(false);

  const typeofWindow = typeof window;
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setOnClient(true);
      }, 1);
    }
  }, [typeofWindow]);

  return onClient;
}
