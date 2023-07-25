import { CardInfo } from '@/containers/Portfolio/Portfolio.get';
import { getRangeByPrice, getServiceType, getStyleType } from '@/containers/Portfolio/Portfolio.func';
import { getDiffByWeek } from '@/utils/Function';

export const CONTENTS: { title: string; contentKey: keyof CardInfo | Function }[] = [
  { title: '아파트', contentKey: 'title' },
  { title: '주소', contentKey: 'displayAddress' },
  { title: '평형', contentKey: (v: CardInfo) => `${v.spaceSize}평형` },
  { title: '서비스', contentKey: (v: CardInfo) => getServiceType(v.serviceTypes) },
  { title: '준공연도', contentKey: (v: CardInfo) => new Date(v.constructionEndYear).getFullYear() },
  { title: '시공 범위', contentKey: 'constructionPart' },
  {
    title: '시공 기간',
    contentKey: (v: CardInfo) => `${getDiffByWeek(v.constructionEndDate, v.constructionStartDate)}주`,
  },
  {
    title: '시공 시기',
    contentKey: (v: CardInfo) => {
      const dt = new Date(v.constructionStartMonth);

      return `${dt.getFullYear()}년 ${dt.getMonth() + 1}월`;
    },
  },
  { title: '키워드', contentKey: (v: CardInfo) => getStyleType(v.styleTypes) },
  { title: '평당 견적', contentKey: (v: CardInfo) => getRangeByPrice(v.pricePerSize) },
];
