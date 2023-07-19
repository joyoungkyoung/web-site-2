import { useState } from 'react';
import { media } from '@/styles/mixins';
import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import { NumPagination } from '@/components';
import { CARD_ARRAY } from '../Portfolio.get';
import Card from './Card';

export default function CardSection() {
  const [page, setPage] = useState(1);

  return (
    <Box padding={'200px 50px'}>
      <CardGrid container rowGap={'120px'} columnGap={'50px'}>
        {CARD_ARRAY.map((item) => (
          <Card
            key={item.uuid}
            src={item.pcThumbnailImageUrl}
            title={item.title}
            desc={item.description}
            price={'금액'}
          />
        ))}
      </CardGrid>
      <NumPagination total={338} curPage={page} onChangePage={setPage} />
    </Box>
  );
}

const CardGrid = styled(Grid)`
  ${media.laptop`
    margin-top:60px;
    `}
`;
