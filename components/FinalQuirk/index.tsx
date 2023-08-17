import clsx from "clsx";
import Grape5 from "public/images/grape5.svg";
import styles from "./styles.module.css";
import { getInfoByPath } from "members/getInfoByPath";
import { getPath } from "helpers/getPath";

export function FinalQuirk() {
  const path = getPath();
  const { wayToSay } = getInfoByPath(path);
  const aged = wayToSay === "respectful";
  return (
    <section className={clsx("block-section relative", styles.quirk)}>
      <p>Долистал{aged && "и"} до конца? </p>
      <p>Держи{aged && "те"} дискошар!</p>

      <span className={styles.discoball}></span>
      <Grape5 className={styles.adornment} />
    </section>
  );
}
