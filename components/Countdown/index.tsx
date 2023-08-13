"use client";

import { useEffect, useState } from "react";
import Cdown from "react-countdown";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { DATE } from "config";
dayjs.extend(relativeTime);

export function Countdown() {
  const [left, setLeft] = useState(new Date().getTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeft(new Date().getTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const leftFormatted = dayjs(left);
  // console.log(dayjs(DATE).diff(dayjs(), "millisecond"));
  console.log(dayjs().to(DATE));

  return (
    <section className="text-center mt-8 f-pixel text-4xl">
      <p className="text-2xl">Осталось:</p>
      <Cdown
        date={DATE}
        autoStart
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
