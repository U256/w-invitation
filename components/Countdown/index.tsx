"use client";

import Cdown from "react-countdown";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { DATE } from "config";
dayjs.extend(relativeTime);

export function Countdown() {
  return (
    <section className="text-center mt-8 f-pixel text-4xl">
      <p className="text-2xl">Осталось:</p>
      <Cdown
        date={DATE}
        autoStart={typeof window !== "undefined"}
        renderer={({ hours, days, minutes, completed, seconds }) => {
          if (completed) {
            return <div>уже идет!</div>;
          } else {
            return (
              <span>
                {days} д.&nbsp;
                {hours} ч.&nbsp;
                {minutes} м.&nbsp;
                {seconds} с.
              </span>
            );
          }
        }}
      />
    </section>
  );
}
