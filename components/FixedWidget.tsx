import { useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { ScrollTopSvg } from './@svg';

export default function FixedWidget() {
  const opacityRef = useRef<HTMLDivElement>(null);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (opacityRef.current) {
      opacityRef.current.style.opacity = y > 150 ? '1' : '0';
    }
  }, [y]);

  return (
    <WidgetBox>
      <OpacityBox ref={opacityRef}>
        <RoundButton size="medium">
          <ScrollTopSvg />
        </RoundButton>
      </OpacityBox>
      <RoundButton size="medium">
        <Typography>직영점 안내</Typography>
      </RoundButton>
      <RoundButton size="medium">
        <Typography>1:1 문의</Typography>
      </RoundButton>
      <RoundButton size="medium" className="yellow">
        <Typography>상담 신청</Typography>
      </RoundButton>
    </WidgetBox>
  );
}

const WidgetBox = styled(Box)`
  position: fixed;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10;
  padding-right: 40px;
  padding-bottom: 40px;
  gap: 12px;
`;

const OpacityBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const RoundButton = styled(Button)`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background-color: #000000;
  box-shadow:
    rgb(255 255 255 / 12%) 0px 0px 2px 0px inset,
    rgb(0 0 0 / 5%) 0px 0px 2px 1px,
    rgb(0 0 0 / 22%) 0px 4px 20px;
  > p {
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    line-height: 18px;
    white-space: pre-line;
  }
  &:hover {
    background-color: #000000;
  }
  &.yellow {
    background-color: #feeb8f;
    > p {
      color: #000000;
    }
    &:hover {
      background-color: #feeb8f;
    }
  }
`;
