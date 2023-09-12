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
          <p className="text-1xl font-semibold">12:40</p>
          <p className="text-sm">
            Торжественная <br /> регистрация
          </p>
          <a target="_blank" href="https://go.2gis.com/okix2" className="text-xs sm:text-sm pt-2 no-wrap">
            <span className="underline">Гульбиновича, 3</span>
            &#128205;
          </a>
        </>
      }
      contentRight={
        <>
          <p className="text-1xl font-semibold">17:00 </p>
          <p className="text-sm">
            Праздничный <br /> банкет
          </p>
          <a target="_blank" href="https://go.2gis.com/pkfr5f" className="text-xs sm:text-sm pt-2 no-wrap">
            <span className="underline">Маковского, 272</span>
            &#128205;
          </a>
        </>
      }
    />
  );
}
