import { RefObject, useRef, useState } from 'react';
import { SearchSvg } from '@/components/@svg';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import GridGroup, { GridGroupRef } from './GridGroup';
import { SEARCH_FILTER, SearchFilterKey } from '../Portfolio.constant';

export default function SearchSection() {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const SEARCH_FILTER_MAP: { key: SearchFilterKey; title: string; width: string; ref: RefObject<GridGroupRef> }[] = [
    { key: 'flat', width: '18%', title: '평형', ref: useRef<GridGroupRef>(null) },
    { key: 'keyword', width: '27%', title: '키워드', ref: useRef<GridGroupRef>(null) },
    { key: 'price', width: '24%', title: '평당 견적', ref: useRef<GridGroupRef>(null) },
    { key: 'service', width: '15%', title: '서비스', ref: useRef<GridGroupRef>(null) },
    { key: 'sort', width: '17%', title: '정렬', ref: useRef<GridGroupRef>(null) },
  ];

  const handleUpdateKeys = () => {
    let keys: string[] = [];

    SEARCH_FILTER_MAP.forEach((item) => {
      const _keys = item.ref.current?.getSelectedKeys();

      if (_keys && _keys.length) keys = [...keys, ..._keys];
    });

    setSelectedKeys(keys);
  };
  const handleClickInit = () => {
    SEARCH_FILTER_MAP.forEach((item) => item.ref.current?.initKeys());
  };

  return (
    <Box padding={'0 40px'} top={'-77.5px'}>
      <Box display={'flex'} justifyContent={'flex-end'} height={'65px'}>
        <TextField
          color="black"
          placeholder="아파트 또는 지역을 검색하세요."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchSvg />
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: '400px',
          }}
          variant="standard"
        />
      </Box>
      <Box height={'22.5px'} />
      <Box display={'flex'}>
        {SEARCH_FILTER_MAP.map((item) => (
          <GridGroup
            key={item.key}
            ref={item.ref}
            title={item.title}
            groups={SEARCH_FILTER[item.key]}
            sx={{ width: item.width }}
            onUpdateKeys={handleUpdateKeys}
          />
        ))}
      </Box>
      <Box height={'10px'} />
      <Box display={'flex'} justifyContent={'flex-end'}>
        <Button color="inherit" sx={{ padding: 0 }} onClick={handleClickInit}>
          <Typography fontWeight={700} color={'#808080'}>
            {`초기화 (${selectedKeys.length})`}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
