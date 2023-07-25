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

export function getStyleType(types: string[]) {
  const parsedArr = types.map((str) => {
    switch (str) {
      case 'MIDDLE_ROOM':
        return '중문이 있는';
      case 'IRELAND_KITCHEN':
        return '아일랜드 주방';
      default:
        return null;
    }
  });

  return parsedArr.filter((str) => str).join(', ');
}

export function getServiceType(types: string[]) {
  const parsedArr = types.map((str) => {
    switch (str) {
      case 'NEW':
        return '5년 이하 신축';
      case 'OLD':
        return '5년 이상 구축';
      default:
        return null;
    }
  });

  return parsedArr.filter((str) => str).join(', ');
}