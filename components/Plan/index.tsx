import { InfoColumns } from "components/InfoColumns";
import { DATE } from "config";
import dayjs from "dayjs";

export function Plan() {
  return (
    <InfoColumns
      id="plan"
      title={dayjs(DATE).format("DD MMMM YYYY")}
      contentLeft={
        <>
          {/* <p className="text-1xl font-semibold">{dayjs(DATE).format("DD MMMM YYYY")}</p> */}
          <p className="text-1xl font-semibold">12:20</p>
          <p className="text-sm">Торжественная <br/> регистрация</p>
          <p className="text-sm">Адмирала Фокина, 25</p>
        </>
      }
      contentRight={
        <>
          <p className="text-1xl font-semibold">17:00 </p>
          <p className="text-sm">
            Праздничный <br /> банкет
          </p>
          <p className="text-sm">Маковского, 272</p>
        </>
      }
    />
  );
}
