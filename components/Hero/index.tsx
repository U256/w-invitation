import clsx from "clsx";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import { DATE } from "config";
import { InfoColumns } from "components/InfoColumns";
import styles from "./styles.module.css";

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
      <InfoColumns
        id="plan"
        title="Программа"
        contentLeft={
          <>
            <p className="text-1xl font-semibold">{dayjs(DATE).format("DD MMMM YYYY")}</p>
            <p>12:20 - ЗАГС</p>
            <p>15:00 - тусаджуса</p>
          </>
        }
        contentRight={
          <>
            <p>Цвет-любой</p>
            <p>ул. Клюшкина</p>
            <p className="text-1xl font-semibold">Владивосток</p>
          </>
        }
      />
    </div>
  );
}
