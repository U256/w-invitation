export function takeTimeSpan(ms: number) {
  const left = ms - Date.now();
  return {
    days: Math.floor(left / (1000 * 60 * 60 * 24)),
    hours: Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((left % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((left % (1000 * 60)) / 1000),
  };
}
