"use client";

import Cdown from "react-countdown";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { pickWordCase } from "helpers/pickWordCase";
import { DATE } from "config";
dayjs.extend(relativeTime);

// new Date("10.21.2023 14:00").toLocaleString("ru-RU", {
//   timeZone: "Asia/Vladivostok",
// });

const TEN_MIN = 600000;

export function Countdown() {
  if (new Date(DATE).getTime() - new Date().getTime() < TEN_MIN) {
    return <section className="text-center p-2 pt-3 text-xl">Уже началось &#128512;</section>;
  }

  return (
    <section className="text-center p-1 pt-2 text-xl">
      <p className="text-2xl">Осталось:</p>
      <Cdown
        date={DATE}
        autoStart={typeof window !== "undefined"}
        renderer={({ hours, days, minutes, completed }) => {
          if (completed) {
            return <div>уже идет!</div>;
          } else {
            return (
              <span>
                {days} {pickWordCase(days, "день", "дня ", "дней")}&nbsp;
                {hours} {pickWordCase(hours, "час  ", "часа  ", "часов")}&nbsp;
                {minutes} {pickWordCase(minutes, "минута", "минуты", "минут ")}&nbsp;
              </span>
            );
          }
        }}
      />
    </section>
  );
}
