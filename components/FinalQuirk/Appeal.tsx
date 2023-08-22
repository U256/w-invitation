"use client";

import { useClientInitialized } from "hooks/useClientInittialized";

export function Appeal({ respectfulText }: { respectfulText: string }) {
  const onClient = useClientInitialized();

  if (!onClient) return null;

  return respectfulText;
}
