import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import ru from "dayjs/locale/ru";
import Grape3 from "public/images/grape3.svg";
import Ring from "public/images/ring.svg";
import Grape4 from "public/images/grape4.svg";
import we from "public/images/we.png";
import styles from "./styles.module.css";
import { getPath } from "helpers/getPath";
import { getInfoByPath } from "members/getInfoByPath";

dayjs.locale(ru);

export function Hero() {
  const path = getPath();
  const { wayToSay } = getInfoByPath(path);

  console.log({ wayToSay });

  return (
    <section id="meet" className={clsx("block-section first-section relative", styles.hero)}>
      <h1 className="text-2xl w-auto relative">
        Приглашаем {wayToSay === "familiar" ? "тебя" : "вас"}&nbsp;на
        <br />
        торжественное мероприятие,
        <br />
        посвященное нашему
        <br />
        бракосочетанию
        <Ring className={styles.ring} />
      </h1>
      <h2 className={clsx("f-handwritten", styles.h2)}>
        <span>Алексей</span>
        <span className={clsx("block divider", styles.divider)}>и</span>
        <span>Дарья</span>
      </h2>
      <Grape3 className={styles.adornment} />
      <Grape4 className={styles.adornment2} />

      <Image src={we} width={170} height={170} alt="мы" className={styles.we} />
    </section>
  );
}
