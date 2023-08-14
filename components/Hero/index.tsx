import clsx from "clsx";
import { Countdown } from "components/Countdown";
import dayjs from "dayjs";
import { DATE } from "config";
import { Contacts } from "components/Contacts";
import styles from "./styles.module.css";

export function Hero() {
  return (
    <section className={clsx("block-section", styles.hero)}>
      <h1 className="text-2xl w-auto">
        Приглашаем вас на торжественное мероприятие,
        <br />
        посвященное нашему бракосочетанию
      </h1>
      <p className="mt-6 mb-3 text-2xl font-bold">{dayjs(DATE).format("DD-MM-YYYY")}</p>
      <h2 className={clsx("f-handwritten", styles.h2)}>
        <span>Алексей</span>
        <span className={clsx("block divider", styles.divider)}>и</span>
        <span>Дарья</span>
      </h2>
    </section>
  );
}
