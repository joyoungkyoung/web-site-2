import { Wrapper } from '@/components';
import { CARD_ARRAY } from '@/containers/Portfolio/Portfolio.get';
import { DescSection, DetailHeader, ImageSection, MoreSection, TitleSection } from '@/containers/PortfolioDetail';
import { breakpoints } from '@/styles/mixins';
import { groupBy } from '@/utils/Function';
import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export default function PortfolioDetail() {
  const router = useRouter();
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);

  const { slug } = router.query;

  const item = CARD_ARRAY.find((card) => card.uuid === slug);

  const group = useMemo(() => {
    return item?.imageSets && groupBy(item?.imageSets, 'name');
  }, [item]);

  return (
    <Wrapper>
      {matchLaptop && <DetailHeader />}

      <Box padding={'0 40px'}>
        {/* 타이틀 */}
        <TitleSection title={item?.title || ''} description={item?.description || ''} />

        {/* 그룹 별 이미지 */}
        <ImageSection group={group} />

        {/* 설명 */}
        {item && <DescSection item={item} />}

        {/* 더 보기 */}
        <MoreSection />
      </Box>
    </Wrapper>
  );
}
