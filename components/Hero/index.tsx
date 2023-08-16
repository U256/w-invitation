import clsx from "clsx";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import styles from "./styles.module.css";

dayjs.locale(ru);

export function Hero() {
  return (
    <section id="meet" className={clsx("block-section first-section", styles.hero)}>
      <h1 className="text-2xl w-auto">
        Приглашаем вас на
        <br />
        торжественное мероприятие,
        <br />
        посвященное нашему
        <br />
        бракосочетанию
      </h1>
      <h2 className={clsx("f-handwritten", styles.h2)}>
        <span>Алексей</span>
        <span className={clsx("block divider", styles.divider)}>и</span>
        <span>Дарья</span>
      </h2>
    </section>
  );
}
