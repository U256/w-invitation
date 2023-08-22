"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import { pickWordCase } from "helpers/pickWordCase";
import { DATE } from "config";
import { takeTimeSpan } from "helpers/timeSpan";
dayjs.extend(relativeTime);

// new Date("21 oct 2023 14:00").toLocaleString("ru-RU", {
//   timeZone: "Asia/Vladivostok",
// });
const TEN_MIN = 600000;

export function Countdown() {
  const [time, setTime] = useState(takeTimeSpan(DATE));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(takeTimeSpan(DATE));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (new Date(DATE).getTime() - new Date().getTime() < TEN_MIN) {
    return <section className="text-center p-2 pt-3 text-xl">Уже началось &#128512;</section>;
  }
  const { days, hours, minutes } = time;
  return (
    <section className="text-center p-1 pt-2 text-xl" style={{ width: 315 }}>
      <p className="text-2xl text-center">Осталось:</p>
      <p className="text-xl">
        {days > 0 && (
          <>
            {days} <span className="text-lg">{pickWordCase(days, "день", "дня ", "дней")}</span>&nbsp;
          </>
        )}
        {hours > 0 && (
          <>
            {hours} <span className="text-lg">{pickWordCase(hours, "час  ", "часа  ", "часов")}</span>&nbsp;
          </>
        )}
        {minutes} <span className="text-sm">{pickWordCase(minutes, "минута", "минуты", "минут ")}</span>
      </p>
    </section>
  );
}
