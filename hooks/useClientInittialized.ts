import { useEffect, useState } from "react";

export function useClientInitialized() {
  const [onClient, setOnClient] = useState(false);

  const typeofWindow = typeof window;
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOnClient(true);
    }
  }, [typeofWindow]);

  return onClient;
}
