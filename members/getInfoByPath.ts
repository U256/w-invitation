import { UNKNOWN_GUEST } from "config";

export type WayToSay = "familiar" | "respectful";

export function getInfoByPath(path: string | null | undefined): { wayToSay: WayToSay; guest: boolean } {
  return {
    wayToSay: path?.includes("familiar") ? "familiar" : "respectful",
    guest: !path || path?.includes(UNKNOWN_GUEST),
  };
}
