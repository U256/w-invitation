import clsx from "clsx";
import type { Member } from "members/member.type";
import styles from "./styles.module.css";

interface Props {
  category: Member["ageCategory"];
}

export function FinalQuirk({ category }: Props) {
  const aged = category === "parent";
  return (
    <section className={clsx("block-section", styles.quirk)}>
      <p>Долистал{aged && "и"} до конца? </p>
      <p>Держи{aged && "те"} дискошар!</p>

      <span className={styles.discoball}></span>
    </section>
  );
}
