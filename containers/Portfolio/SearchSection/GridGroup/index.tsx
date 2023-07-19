import { Ref, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';
import { SearchFilter } from '@/containers/Portfolio/Portfolio.constant';
import styled from '@emotion/styled';
import GridItem from './GridItem';

export type GridGroupRef = {
  initKeys: () => void;
  getSelectedKeys: () => string[];
};

interface GridGroupProps {
  title: string;
  groups: SearchFilter[][];
  sx?: SxProps<Theme>;
  onUpdateKeys?: () => void;
}
const GridGroup = forwardRef(function GridGroup(
  { title, groups, sx, onUpdateKeys }: GridGroupProps,
  ref: Ref<GridGroupRef>,
) {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleClickItem = (key: string) => {
    if (selectedKeys.includes(key)) setSelectedKeys([...selectedKeys.filter((k) => k !== key)]);
    else setSelectedKeys([...selectedKeys, key]);
  };

  useImperativeHandle(ref, () => ({
    initKeys: () => {
      setSelectedKeys([]);
    },
    getSelectedKeys: () => selectedKeys,
  }));

  useEffect(() => {
    onUpdateKeys && onUpdateKeys();
  }, [selectedKeys]);

  return (
    <Wrapper sx={sx} ref={ref}>
      <Typography fontWeight={700} marginBottom={'40px'}>
        {title}
      </Typography>
      <Grid container columnSpacing={'40px'} wrap="nowrap">
        {groups.map((group, index) => {
          return (
            <Grid item key={index} lg={12 / groups.length} xs={12 / groups.length}>
              <Grid container direction={'column'} rowSpacing={'25px'}>
                {group.map((item) => (
                  <GridItem
                    key={item.key}
                    checked={selectedKeys.includes(item.key)}
                    onClick={() => handleClickItem(item.key)}
                  >
                    {item.label}
                  </GridItem>
                ))}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
});

export default GridGroup;

const Wrapper = styled(Box)`
  border-color: #f5f5f5;
  border-style: solid;
  border-width: 1px;
  padding: 40px;
  &:first-child {
    border-width: 1px 0px 1px 0px;
    padding: 40px 40px 40px 0px;
  }
  &:last-child {
    border-width: 1px 0px 1px 0px;
    padding: 40px 0px 40px 40px;
  }
`;
