import { headers } from "next/headers";

export function getPath() {
  return headers().get("x-invoke-path");
}