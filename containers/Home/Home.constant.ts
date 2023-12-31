import back1 from '@/videos/homeBanner/back1.mp4';
import back2 from '@/images/homeBanner/back2.jpg';
import back3 from '@/images/homeBanner/back3.jpg';
import back4 from '@/images/homeBanner/back4.jpg';
import back5 from '@/images/homeBanner/back5.jpg';
import back6 from '@/images/homeBanner/back6.jpg';
import back7 from '@/images/homeBanner/back7.jpg';
import back8 from '@/images/homeBanner/back8.jpg';
import back9 from '@/images/homeBanner/back9.jpg';
import back10 from '@/images/homeBanner/back10.jpg';

import apartItem1 from '@/images/apartItem/item1.jpg';
import apartItem2 from '@/images/apartItem/item2.jpg';
import apartItem3 from '@/images/apartItem/item3.jpg';
import apartItem4 from '@/images/apartItem/item4.jpg';
import apartItem5 from '@/images/apartItem/item5.jpg';
import apartItem6 from '@/images/apartItem/item6.jpg';
import apartItem7 from '@/images/apartItem/item7.jpg';
import apartItem8 from '@/images/apartItem/item8.jpg';
import apartItem9 from '@/images/apartItem/item9.jpg';
import apartItem10 from '@/images/apartItem/item10.jpg';

import apartItem21 from '@/images/apartItem2/item1.jpg';
import apartItem22 from '@/images/apartItem2/item2.jpg';
import apartItem23 from '@/images/apartItem2/item3.jpg';
import apartItem24 from '@/images/apartItem2/item4.jpg';
import apartItem25 from '@/images/apartItem2/item5.jpg';
import apartItem26 from '@/images/apartItem2/item6.jpg';
import apartItem27 from '@/images/apartItem2/item7.jpg';
import apartItem28 from '@/images/apartItem2/item8.jpg';

import { StaticImageData } from 'next/image';

export const BANNER_ITEMS: { source: StaticImageData | string; title: string; desc: string; color?: string }[] = [
  {
    source: back1,
    title: '같은 아파트 다른 라이프',
    desc: '아파트멘터리로 특별해질 수 있어요.',
    color: '#ffffff',
  },
  {
    source: back2,
    title: '홈 오피스로 달라진 우리집',
    desc: '영상에서 확인해보세요.',
  },
  {
    source: back3,
    title: '한눈에 보는 인테리어 여정',
    desc: '길고 복잡한 인테리어, 쉽게 설명해드려요.',
  },
  {
    source: back4,
    title: '아파트는 아파트멘터리',
    desc: '남다른 인테리어 서비스, 아파트멘터리를 소개합니다.',
  },
  {
    source: back5,
    title: '합리적 가격, 높은 퀄리티',
    desc: '두 가지를 모두 잡은 서비스',
  },
  {
    source: back6,
    title: '온전한 휴식이 가능한 안식처',
    desc: '일상에서 찾는 사소한 행복',
  },
  {
    source: back7,
    title: '취향이 느껴지는 아파트',
    desc: '공간에 온전히 담긴 라이프 스타일',
  },
  {
    source: back8,
    title: '인테리어의 완성은 스타일링',
    desc: '가구와 소품으로 확연히 달라지는 공간',
  },
  {
    source: back9,
    title: '오래된 아파트의 새로운 모습',
    desc: '연식있는 집일수록 숙련된 전문가에게 맡겨야 해요.',
  },
  {
    source: back10,
    title: '따스함이 느껴지는 집',
    desc: '온기를 불어넣은 우드 인테리어',
  },
];

export type ApartItem = {
  src: StaticImageData;
  title: string;
  desc: string;
  price: string;
};
export const APART_ITEMS: ApartItem[] = [
  {
    src: apartItem1,
    title: '강남 서초더샵포레 아파트',
    desc: '추억이 깃든 가구에 맞춰 더욱 멋스러운\n내추럴 인테리어를 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem2,
    title: '성동 트리마제 아파트',
    desc: '이국적인 분위기의 주방 인테리어를 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem3,
    title: '위례 중흥S클래스 아파트',
    desc: '고급스러운 아일랜드 주방 인테리어를 만나보세요',
    price: '평당 150만 원 이하',
  },
  {
    src: apartItem4,
    title: '하남 미사 강변 더샵센트럴포레 아파트',
    desc: '화사한 화이트우드 인테리어를 만나보세요',
    price: '평당 180~200만 원',
  },
  {
    src: apartItem5,
    title: '관악 제창그로힐 아파트',
    desc: '차분한 화이트 인테리어를 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem6,
    title: '영통 아이파크캐슬 아파트',
    desc: '홈카페존이 돋보이는 인테리어를 만나보세요',
    price: '평당 180~200만 원',
  },
  {
    src: apartItem7,
    title: '용산 KCC웰츠타워 아파트',
    desc: '고급스러운 아일랜드형 주방 인테리어를 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem8,
    title: '종로 청운벽산빌리지 아파트',
    desc: '심플하고 모던한 복층 인테리어를 만나보세요',
    price: '평당 180~200만 원',
  },
  {
    src: apartItem9,
    title: '노원 상계주공 아파트',
    desc: '효율적으로 수납공간을 마련한\n아담한 평수 인테리어를 만나보세요',
    price: '평당 230~260만 원',
  },
  {
    src: apartItem10,
    title: '파주 해솔마을 운정현태 아파트',
    desc: '미니멀한 바탕의 미드센추리 인테리어를 만나보세요',
    price: '평당 230~260만 원',
  },
];

export const APART_ITEMS2: ApartItem[] = [
  {
    src: apartItem21,
    title: '강남 서초더샵포레 아파트',
    desc: '추억이 깃든 가구에 맞춰 더욱 멋스러운\n내추럴 인테리어를 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem22,
    title: '강남 한보미도맨션 아파트',
    desc: '화이트&우드 인테리어가 돋보이는 공간을 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem23,
    title: '일산 위시티블루밍 아파트',
    desc: '10년 된 아파트를 새 집처럼\n화이트 신혼집 인테리어를 만나보세요',
    price: '평당 200~230만 원',
  },
  {
    src: apartItem24,
    title: '용산 더프라임 아파트',
    desc: '고급스러운 모던 인테리어를 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem25,
    title: '다산 플루리움 아파트',
    desc: '우드 인테리어로 포인트를 준 50평대 아파트를 만나보세요',
    price: '평당 260만 원 이상',
  },
  {
    src: apartItem26,
    title: '강남 래미안 그레이튼 2차 아파트',
    desc: '간살 중문으로 포인트를 준 공간을 만나보세요.',
    price: '평당 200~230만 원',
  },
  {
    src: apartItem27,
    title: '노원 상계주공 아파트',
    desc: '효율적으로 수납공간을 마련한\n아담한 평수 인테리어를 만나보세요',
    price: '평당 230~260만 원',
  },
  {
    src: apartItem28,
    title: '파주 해솔마을 운정현대 아파트',
    desc: '미니멀한 바탕의 미드센추리 인테리어를 만나보세요',
    price: '평당 230~260만 원',
  },
];

export const REVIEW_ITEMS = [
  {
    message: '매니저님이 제안해 준 주방 구조가 정말 마음에 들어요! 지인들의 칭찬이 자자하답니다.',
    by: '김**님',
  },
  {
    message:
      '처음으로 마련한 내 집에서 인테리어 로망을 마음껏 구현할 수 있었어요. 덕분에 기쁜 마음으로 생활하고 있습니다!',
    by: '김**님',
  },
  {
    message:
      '마지막까지 세심하게 마감을 신경 써주시는 게 느껴졌고, 특히 이사 후에도 A/S 지원이 된다는 점이 좋은 것 같습니다.',
    by: '이**님',
  },
  {
    message:
      '견적과 디자인 상담 프로세스가 체계적이에요. 매니저님과 소통이 빠르고 원활하게 이뤄져서 신뢰할 수 있었습니다.',
    by: '박**님',
  },
  {
    message: '리모델링에 생소한 저희를 대신해서 매니저님이 알아서 척척! 10년 된 집을 새 아파트로 만들어 주셨어요.',
    by: '배**님',
  },
  {
    message:
      '앱을 통해 당일 작업 내용과 향후 일정을 알려주시고, 문의 사항도 친절히 답해주시는 매니저님 덕분에 편안한 마음으로 인테리어를 진행할 수 있었어요.',
    by: '오**님',
  },
];
