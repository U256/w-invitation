"use client";

import { useClientInitialized } from "hooks/useClientInittialized";
import { getInfoByPath } from "members/getInfoByPath";
import styles from './styles.module.css';

export function Appeal() {
  const onClient = useClientInitialized();

  if (!onClient) {
    return (
      <span className={`relative inline-block opacity-0 ${styles.appeal}`}>
        вас
      </span>
    );
  }

  const { wayToSay } = getInfoByPath(window.location.href);
  return (
    <span className={`relative inline-block opacity-0 ${styles.appeal}`} style={{ opacity: onClient ? 1 : 0 }}>
      {wayToSay === "familiar" ? "тебя" : "вас"}
    </span>
  );
}
