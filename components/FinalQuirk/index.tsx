import clsx from "clsx";
import Image from "next/image";
import Grape5 from "public/images/grape5.svg";
import { getInfoByPath } from "members/getInfoByPath";
import disco from "public/images/disco.gif";
import { getPath } from "helpers/getPath";
import styles from "./styles.module.css";

export function FinalQuirk() {
  const path = getPath();
  const { wayToSay } = getInfoByPath(path);
  const aged = wayToSay === "respectful";
  return (
    <section className={clsx("block-section relative", styles.quirk)}>
      <p className="pt-2">Долистал{aged && "и"} до конца? </p>
      <p>Держи{aged && "те"} диско!</p>

      <Image src={disco} width={200} height={200} className={styles.discoball} alt="диско!" />
      <Grape5 className={styles.adornment} />
    </section>
  );
}
