"use client";

import { useClientInitialized } from "hooks/useClientInittialized";
import { getInfoByPath } from "members/getInfoByPath";

export function Appeal() {
  const onClient = useClientInitialized();

  if (!onClient) {
    return (
      <span className="relative inline-block" style={{ width: "4.4rem" }}>
        вас
        <span className="absolute top-0 w-full h-full left-0 shimmer"></span>
      </span>
    );
  }

  const { wayToSay } = getInfoByPath(window.location.href);
  return (
    <span className="inline-block" style={{ width: "4.4rem" }}>
      {wayToSay === "familiar" ? "тебя" : "вас"}
    </span>
  );
}
