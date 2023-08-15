export function pickWordCase(count: number, one: string, some: string, many: string) {
  const n = Math.abs(count) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) return many;
  if (n1 > 1 && n1 < 5) return some;
  if (n1 == 1) return one;
  return many;
}
