import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import { media } from '@/styles/mixins';
import { Heading } from '@/components';
import Blog from '@/images/btn-blog.svg';
import Instagram from '@/images/btn-instagram.svg';
import logoWhite from '@/images/logo-white.png';

export default function Footer() {
  return (
    <CustomFooter>
      <LogoBox>
        <Image src={logoWhite} alt="logo-white" />
      </LogoBox>
      <Box display={'flex'} flexDirection={'column'} flex={1}>
        {/*  */}
        <Box display={'flex'}>
          <Grid container>
            <FooterCard item xs={6} md={4}>
              <Heading t="h6">정보</Heading>
              <BorderLine />
              <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'8px'}>
                <Item>
                  <Box display={'flex'}>
                    <Typography>회사 소개</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'}>
                    <Typography>아파트멘터리 브랜드</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'}>
                    <Typography>아파트멘터리 파츠</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'}>
                    <Typography>채용 정보</Typography>
                  </Box>
                </Item>
              </Box>
            </FooterCard>
            <FooterCard item xs={6} md={4}>
              <Heading t="h6">안내</Heading>
              <BorderLine />
              <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'8px'}>
                <Item>
                  <Box display={'flex'}>
                    <Typography>가까운 직영점</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'}>
                    <Typography>자주 묻는 질문</Typography>
                  </Box>
                </Item>
                <Box display={'flex'} gap={'10px'}>
                  <IconButton sx={{ padding: 0 }}>
                    <Blog />
                  </IconButton>
                  <IconButton sx={{ padding: 0 }}>
                    <Instagram />
                  </IconButton>
                </Box>
              </Box>
            </FooterCard>
            <FooterCard item xs={12} md={4}>
              <Heading t="h6">고객센터</Heading>
              <BorderLine />
              <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'8px'}>
                <Item>
                  <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                    <Typography>전화번호</Typography>
                    <Box width={'1px'} height={'12px'} sx={{ backgroundColor: '#868686' }} />
                    <Typography>02-6356-1224</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                    <Typography>영업시간</Typography>
                    <Box width={'1px'} height={'12px'} sx={{ backgroundColor: '#868686' }} />
                    <Typography>평일 10:00 ~ 19:00(공휴일 제외)</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'}>
                    <Typography fontFamily={'SpoqaHanSans'}>ASK@APARTMENTARY.COM</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'}>
                    <Typography>1:1 문의</Typography>
                  </Box>
                </Item>
                <Item>
                  <Box display={'flex'}>
                    <Typography>서비스 후기 작성</Typography>
                  </Box>
                </Item>
              </Box>
            </FooterCard>
          </Grid>
        </Box>
        <Box height={'120px'} />
        {/*  */}
        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
          <Item>
            <Box display={'flex'}>
              <Typography>이용약관</Typography>
            </Box>
          </Item>
          <Box width={'1px'} height={'12px'} sx={{ backgroundColor: '#868686' }} />
          <Item>
            <Box display={'flex'}>
              <Typography>개인정보처리방침</Typography>
            </Box>
          </Item>
        </Box>
        <Box height={'30px'} />
        <Typography color={'#b6b6b6'} fontWeight={300}>
          · 법인명: 아파트멘터리(주) · 대표자: 윤소연, 김준영 · 사업자 등록번회 723-87-00195· 통신판매업 신고: 제
          2016-서울마포-0923호· 개인정보관리책임자: 황은미(mia@apartmentary.com)· 주소: 서울특별시 강남구 도산대로 237
          3,4F · 02-6356-1224
        </Typography>
        <Box height={'24px'} />
        <Typography color={'#808080'} fontWeight={'inherit'} fontFamily={'SpoqaHanSans'}>
          © 2015-2022 All Rights Reserved.
        </Typography>
      </Box>
    </CustomFooter>
  );
}

const CustomFooter = styled(Box)`
  display: flex;
  padding: 120px 100px;
  max-width: 1920px;
  margin: 0 auto;
  background-color: #000000;
  color: #ffffff;

  ${media.tablet`
    flex-direction: column;
    padding: 90px 20px;
  `}
`;

const LogoBox = styled(Box)`
  position: relative;
  width: 30%;

  ${media.tablet`
    width: 43px;
    > img {
        width: 100%;
        height: fit-content;
    }
	`}
`;

const FooterCard = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-basis: 33.333333%;
  max-width: 33.333333%;

  ${media.tablet`
    flex-basis: 50%;
    max-width: 50%;
    padding-top: 60px;
    >h6,p {
        font-size: 12px;
    }

  `}
`;

const BorderLine = styled(Box)`
  background-color: #ffffff;
  height: 1px;
  opacity: 0.2;
  ${media.tablet`
    display:none;
  `}
`;

const Item = styled(Button)`
  color: #ffffff;
  padding: 0;
  justify-content: flex-start;
  min-width: auto;
`;
