export function groupBy(arr: any[], name: string) {
  return arr.reduce((acc, obj) => {
    const key = obj[name];

    acc[key] = acc[key] ?? [];
    acc[key].push(obj);
    return acc;
  }, {});
}
