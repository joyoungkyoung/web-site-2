import Image from 'next/image';
import { AdornButton, Heading, RoundButton, TextSwitch, Wrapper } from '@/components';
import { UploadSvg } from '@/components/@svg';
import { CARD_ARRAY } from '@/containers/Portfolio/Portfolio.get';
import { DetailHeader, ImageSection, TitleSection } from '@/containers/PortfolioDetail';
import { breakpoints } from '@/styles/mixins';
import { groupBy } from '@/utils/Function';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

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

        <Box>{/* 설명 */}</Box>
        <Box>{/* 더보기1 */}</Box>
        <Box>{/* 더보기2 */}</Box>
        <Box>{/* 더보기3 */}</Box>
      </Box>
    </Wrapper>
  );
}
