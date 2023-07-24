import { SEARCH_FILTER, SearchFilter } from './Portfolio.constant';

export function getRangeByPrice(price: number) {
  const list: SearchFilter[] = [];

  SEARCH_FILTER.price.forEach((group) => list.push(...group));
  const targets = list.filter((item) => {
    if (item.min && price < item.min) return false;
    if (item.max && price > item.max) return false;
    return true;
  });

  return targets.length ? targets[0].label : '';
}
