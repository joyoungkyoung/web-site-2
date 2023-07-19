export type SearchFilter = {
  key: string;
  label: string;
};

export type SearchFilterKey = 'flat' | 'keyword' | 'price' | 'service' | 'sort';

export const SEARCH_FILTER: { [key in SearchFilterKey]: { key: string; label: string }[][] } = {
  flat: [
    [
      { key: '0', label: '20평형대' },
      { key: '2', label: '30평형대' },
      { key: '4', label: '40평형대' },
    ],
    [
      { key: '1', label: '50평형대' },
      { key: '3', label: '60평형대' },
      { key: '5', label: '이외 평형대' },
    ],
  ],
  keyword: [
    [
      { key: '10', label: '컬러 벽지' },
      { key: '13', label: '독특한 타일' },
      { key: '16', label: '마루 바닥재' },
    ],
    [
      { key: '11', label: '우드가 포인트' },
      { key: '14', label: '남다른 욕실' },
      { key: '17', label: '돋보이는 대리석' },
    ],
    [
      { key: '12', label: '아이방이 있는' },
      { key: '15', label: '아일랜드 주방' },
      { key: '18', label: '중문이 있는' },
    ],
  ],
  price: [
    [
      { key: '20', label: '150만 원 이하' },
      { key: '22', label: '150~180만 원' },
      { key: '24', label: '180~200만 원' },
    ],
    [
      { key: '21', label: '200~230만 원' },
      { key: '23', label: '230~260만 원' },
      { key: '25', label: '260만 원 이상' },
    ],
  ],
  service: [
    [
      { key: '30', label: '5년 이상 구축' },
      { key: '31', label: '5년 이하 신축' },
      { key: '32', label: '주방 전용' },
    ],
  ],
  sort: [
    [
      { key: '40', label: '최신 순' },
      { key: '42', label: '높은 견적순' },
      { key: '44', label: '낮은 견적순' },
    ],
    [
      { key: '41', label: '인기 순' },
      { key: '43', label: '큰 평형순' },
      { key: '45', label: '작은 평형순' },
    ],
  ],
};
