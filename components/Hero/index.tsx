import clsx from "clsx";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import { DATE } from "config";
import styles from "./styles.module.css";
import { InfoColumns } from "components/InfoColumns";

dayjs.locale(ru);

export function Hero() {
  return (
    <div id="meet" className={clsx("block-section", styles.hero)}>
      <h1 className="text-2xl w-auto line-">
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
      {/* <InfoColumns />  */}
      <p className="mt-10 text-2xl font-semibold">{dayjs(DATE).format("DD MMMM YYYY")}</p>
    </div>
  );
}
