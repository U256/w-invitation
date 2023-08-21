"use client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { pickWordCase } from "helpers/pickWordCase";
import { DATE } from "config";
import { useEffect, useState } from "react";
import { useClientInitialized } from "hooks/useClientInittialized";
dayjs.extend(relativeTime);

// new Date("21 oct 2023 14:00").toLocaleString("ru-RU", {
//   timeZone: "Asia/Vladivostok",
// });

const getLeftPeriod = (date: number) => {
  const left = date - Date.now();
  return {
    days: Math.floor(left / (1000 * 60 * 60 * 24)),
    hours: Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((left % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((left % (1000 * 60)) / 1000),
  };
};

const TEN_MIN = 600000;

export function Countdown() {
  const [time, setTime] = useState(getLeftPeriod(DATE));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getLeftPeriod(DATE));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const onCLient = useClientInitialized();

  if (new Date(DATE).getTime() - new Date().getTime() < TEN_MIN) {
    return <section className="text-center p-2 pt-3 text-xl">Уже началось &#128512;</section>;
  }
  const { days, hours, minutes } = time;
  return (
    <section className="text-center p-1 pt-2 text-xl" style={{ width: 315 }}>
      <p className="text-2xl text-center">Осталось:</p>
      {onCLient ? (
        <span className="text-xl">
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
          {minutes} <span className="text-lg">{pickWordCase(minutes, "минута", "минуты", "минут ")}</span>&nbsp;
        </span>
      ) : (
        <span className="shimmer w-full h-6" aria-label="загрузка" />
      )}
    </section>
  );
}
