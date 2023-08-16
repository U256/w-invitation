import clsx from "clsx";
import type { Member } from "members/member.type";
import Grape5 from "public/images/grape5.svg";
import styles from "./styles.module.css";

interface Props {
  category: Member["ageCategory"];
}

export function FinalQuirk({ category }: Props) {
  const aged = category === "parent";
  return (
    <section className={clsx("block-section relative", styles.quirk)}>
      <p>Долистал{aged && "и"} до конца? </p>
      <p>Держи{aged && "те"} дискошар!</p>

      <span className={styles.discoball}></span>
      <Grape5 className={styles.adornment} />
    </section>
  );
}
