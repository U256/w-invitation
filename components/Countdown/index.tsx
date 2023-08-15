"use client";

import Cdown from "react-countdown";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { pickWordCase } from "helpers/pickWordCase";
import { DATE } from "config";
dayjs.extend(relativeTime);

export function Countdown() {
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
