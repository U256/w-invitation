// prettier-ignore-start
import clsx from "clsx";
import Image from "next/image";
import Grape5 from "public/images/grape5.svg";
import disco from "public/images/disco.gif";
import { Appeal } from "./Appeal";
import styles from "./styles.module.css";

export function FinalQuirk() {
  return (
    <section className={clsx("block-section relative", styles.quirk)}>
      <p className="pt-2">
        Долистал<Appeal respectfulText="и" /> до конца?
      </p>
      <p>
        Держи<Appeal respectfulText="те" /> диско!
      </p>

      <Image src={disco} width={200} height={200} className={styles.discoball} alt="диско!" />
      <Grape5 className={styles.adornment} />
    </section>
  );
}

// prettier-ignore-end
