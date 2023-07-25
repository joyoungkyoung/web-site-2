export function groupBy(arr: any[], name: string) {
  return arr.reduce((acc, obj) => {
    const key = obj[name];

    acc[key] = acc[key] ?? [];
    acc[key].push(obj);
    return acc;
  }, {});
}

export function getDiffByWeek(start: Date | string, end: Date | string) {
  const startDt = new Date(start);
  const endDt = new Date(end);

  const diff = endDt.getTime() - startDt.getTime();

  const diffDay = Math.abs(diff / (1000 * 60 * 60 * 24));

  return Math.floor(diffDay / 7);
}
