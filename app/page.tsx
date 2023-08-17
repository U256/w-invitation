import { UNKNOWN_GUEST } from "config";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${UNKNOWN_GUEST}`);

  return null;
}
