"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function TimeOfDay() {
  const [hour, setHour] = useState(dayjs(new Date()).hour());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHour(dayjs(new Date()).hour());
    }, 1000 * 60 * 60);
    return () => clearInterval(intervalId);
  }, []);

  if (hour <= 6) {
    return "Доброй ночи";
  }
  if (hour <= 12) {
    return "Доброе утро";
  }
  if (hour <= 18) {
    return "Добрый день";
  }
  if (hour <= 23) {
    return "Добрый вечер";
  }
  return "Добрый день";
}
