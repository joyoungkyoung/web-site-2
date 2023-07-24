import { CARD_ARRAY } from '@/containers/Portfolio/Portfolio.get';
import { DetailHeader } from '@/containers/PortfolioDetail';
import { breakpoints } from '@/styles/mixins';
import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

export default function PortfolioDetail() {
  const router = useRouter();
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);

  const { slug } = router.query;

  const item = CARD_ARRAY.find(card => card.uuid === slug)

  console.log(item);
  return (
    <Box>
      {matchLaptop && <DetailHeader />}
      <Box>
        <Box>{/* 스와이퍼 */}</Box>
        <Box>{/* 설명 */}</Box>
        <Box>{/* 더보기1 */}</Box>
        <Box>{/* 더보기2 */}</Box>
        <Box>{/* 더보기3 */}</Box>
      </Box>
    </Box>
  );
}
