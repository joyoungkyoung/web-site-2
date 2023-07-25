import styled from '@emotion/styled';
import { Heading, RoundTitleButton } from '@/components';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { breakpoints } from '@/styles/mixins';
import { CardInfo } from '@/containers/Portfolio/Portfolio.get';
import { CONTENTS } from './PortfolioDetail.constant';

interface DescSectionProps {
  item: CardInfo;
}
export default function DescSection({ item }: DescSectionProps) {
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);

  const renderDescription = () => {
    const margin = matchLaptop ? '60px' : '70px';

    return (
      <Box marginTop={margin}>
        <Title marginBottom={'10px'}>상세 내용</Title>
        <Desc>{item.content}</Desc>
      </Box>
    );
  };

  const renderContents = () => {
    const margin = matchLaptop ? '40px' : '70px';

    return (
      <Box>
        <Devide />
        <Grid container margin={`${margin} 0`} rowGap={'40px'} columnSpacing={'20px'}>
          {CONTENTS.map((content, index) => {
            return (
              <Grid key={index} item xs={6}>
                <Title>{content.title}</Title>
                <Heading t="h4">
                  {typeof content.contentKey === 'function' ? content.contentKey(item) : item[content.contentKey]}
                </Heading>
              </Grid>
            );
          })}
        </Grid>
        <Devide />
      </Box>
    );
  };

  const renderCounseling = () => {
    const margin = matchLaptop ? '60px' : '50px';

    return (
      <Box marginTop={margin}>
        <Title marginBottom={'20px'}>해당 포트폴리오로 상담 받아보세요.</Title>
        <RoundTitleButton color="primary">간편 상담 신청하기</RoundTitleButton>
      </Box>
    );
  };

  return matchLaptop ? (
    <Box display={'flex'} flexDirection={'column'} marginTop={'60px'}>
      {renderContents()}
      <Box display={'flex'}>
        {renderDescription()}
        {renderCounseling()}
      </Box>
    </Box>
  ) : (
    <Box display={'flex'} marginTop={'80px'}>
      <Box flex={1}>{renderDescription()}</Box>
      <Box flex={1}>
        {renderContents()}
        {renderCounseling()}
      </Box>
    </Box>
  );
}

const Title = styled(Typography)`
  color: #808080;
`;

const Desc = styled(Typography)`
  font-weight: 300;
  white-space: pre-wrap;
  word-break: keep-all;
  font-size: 18px;
  font-family: var(--font-decimal), var(--font-spoqa-han-sans);
`;

const Devide = styled(Box)`
  height: 1px;
  background-color: #000000;
`;
