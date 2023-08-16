import { InfoColumns } from "components/InfoColumns";
import { DATE } from "config";
import dayjs from "dayjs";

export function Plan() {
  return (
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
  );
}
