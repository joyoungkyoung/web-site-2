import { Box, IconButton, Typography, styled } from '@mui/material';
import { ArrowRightSvg } from './@svg';

interface NumPaginationProps {
  total: number;
  limit?: number;
  curPage: number;
  groupGap?: number; // 왼쪽 오른쪽 간격
  onChangePage?: (page: number) => void;
}

export default function NumPagination({ total, limit = 30, curPage, groupGap = 2, onChangePage }: NumPaginationProps) {
  const handleChangePage = (page: number) => onChangePage && onChangePage(page);

  const renderNumber = (num: number) => (
    <NumberBox key={num}>
      <IconButton color="inherit" onClick={() => handleChangePage(num)}>
        <Typography variant="body2" color={curPage === num ? '#00000' : '#b6b6b6'}>
          {num}
        </Typography>
      </IconButton>
    </NumberBox>
  );
  const renderSkip = (idx: number) => <Typography key={`skip-${idx}`}>...</Typography>;

  const renderPage = (totalPage: number) => {
    const pageCount = groupGap * 2 + 1;

    let last = curPage + groupGap;

    if (last > totalPage - 1) last = totalPage - 1; // 맨 뒤 체크

    let first = last - (pageCount - 1);

    if (first < 2) first = 2; // 맨 앞 체크

    if (first <= groupGap) {
      last = first + pageCount; // curPage기준으로 계산된 앞부분이 너무 짧으면 last간격을 뒤로 늘림
    }

    const isPrevSkip = first - 1 > 1;
    const isNextSkip = last + 1 < totalPage;

    const arr: any[] = [];

    arr.push(1);
    if (isPrevSkip) arr.push('...');
    for (let i = first; i <= last; i++) arr.push(i);
    if (isNextSkip) arr.push('...');
    arr.push(totalPage);

    return arr.map((page, idx) => {
      if (page === '...') return renderSkip(idx);
      return renderNumber(page);
    });
  };

  const lastPage = Math.ceil(total / limit);

  return (
    <Box display={'flex'} gap={'15px'} justifyContent={'center'}>
      <LeftButton onClick={() => handleChangePage(1)}>
        <ArrowRightSvg />
      </LeftButton>
      <Box display={'flex'}>{renderPage(lastPage)}</Box>
      <RightButton onClick={() => handleChangePage(lastPage)}>
        <ArrowRightSvg />
      </RightButton>
    </Box>
  );
}

const LeftButton = styled(IconButton)`
  width: 35px;
  height: 35px;
  svg {
    transform: rotate3d(0, 1, 0, 180deg);
  }
`;

const RightButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const NumberBox = styled(Box)`
  button {
    min-width: 35px;
    min-height: 35px;
  }
  p {
    font-family: DecimalInline;
    text-decoration: underline;
    font-weight: 700;
  }
`;
